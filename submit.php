<?php
/**
 * Form submission endpoint for oceanscience.in (quick inquiry, contact, RFQ).
 * Receives POST (JSON or form-encoded), validates, and emails the submission.
 *
 * Mail architecture: the domain's inboxes live on Microsoft 365 (MX), while this
 * script sends from the web server, which the domain's SPF record authorizes
 * via "+a". No Plesk mailbox is needed for sending.
 */

$RECIPIENT = 'mail@oceanscience.in';        // where inquiries are delivered
$FROM      = 'noreply@oceanscience.in';     // envelope/header sender (no mailbox needed)
$SUBJECT_PREFIX = '[Website] ';

// The host has no local mail relay, so speak SMTP directly to Microsoft 365's
// MX endpoint for the domain ("direct send" - unauthenticated, internal
// recipients only). Windows PHP's mail() uses these ini values as its SMTP client.
ini_set('SMTP', 'oceanscience-in.mail.protection.outlook.com');
ini_set('smtp_port', '25');
ini_set('sendmail_from', $FROM);

header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'POST only']);
    exit;
}

// Accept JSON or classic form posts
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) { $data = $_POST; }

// Honeypot: real visitors never fill this hidden field
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]); // pretend success to bots
    exit;
}

// Real visitor IP. The site is behind Cloudflare, so REMOTE_ADDR is a Cloudflare
// edge IP; the true client is in CF-Connecting-IP. (A request that bypasses
// Cloudflare and hits the origin directly could spoof this header - acceptable
// for rate-limiting, as the honeypot + validation still apply.)
function client_ip() {
    $ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    return filter_var($ip, FILTER_VALIDATE_IP) ? $ip : 'unknown';
}

// Per-IP rate limit: at most $MAX submissions per rolling $WINDOW seconds.
// State is a small file per IP under the system temp dir; if it can't be written
// (e.g. temp cleared), the limiter fails open rather than blocking real visitors.
function enforce_rate_limit($ip, $MAX = 5, $WINDOW = 3600) {
    $dir = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'oss_rl';
    if (!is_dir($dir)) { @mkdir($dir, 0700, true); }
    $file = $dir . DIRECTORY_SEPARATOR . sha1($ip) . '.txt';

    $fh = @fopen($file, 'c+');
    if (!$fh) { return true; } // can't track -> don't block
    // Non-blocking: if another request holds the lock, don't wait (never hang a
    // real submission); just allow this one through rather than serialising.
    if (!@flock($fh, LOCK_EX | LOCK_NB)) { fclose($fh); return true; }

    $now = time();
    $raw = stream_get_contents($fh);
    $stamps = array_filter(array_map('intval', explode(',', trim($raw))));
    $stamps = array_values(array_filter($stamps, function ($t) use ($now, $WINDOW) {
        return $t > $now - $WINDOW;
    }));

    $allowed = count($stamps) < $MAX;
    if ($allowed) {
        $stamps[] = $now;
        rewind($fh);
        ftruncate($fh, 0);
        fwrite($fh, implode(',', $stamps));
    }
    @flock($fh, LOCK_UN);
    fclose($fh);
    return $allowed;
}

if (!enforce_rate_limit(client_ip())) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many requests. Please try again later.']);
    exit;
}

function clean($v, $max = 500) {
    $v = trim((string)$v);
    $v = str_replace(["\r", "\n"], ' ', $v);   // header-injection guard
    return mb_substr($v, 0, $max);
}
function cleanMultiline($v, $max = 4000) {
    $v = trim((string)$v);
    return mb_substr($v, 0, $max);
}

$type  = clean($data['type'] ?? '');
$email = clean($data['email'] ?? '', 200);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'A valid email address is required.']);
    exit;
}

switch ($type) {
    case 'quick':
        $service = clean($data['service'] ?? '');
        if ($service === '') { $err = 'Service is required.'; break; }
        $subject = 'Quick Inquiry: ' . $service;
        $body = "Quick service inquiry from the website footer.\n\n"
              . "Service of interest: $service\n"
              . "Visitor email:       $email\n";
        break;

    case 'contact':
        $name    = clean($data['name'] ?? '', 200);
        $subj    = clean($data['subject'] ?? '', 300);
        $message = cleanMultiline($data['message'] ?? '');
        if ($name === '' || $subj === '' || $message === '') { $err = 'Name, subject and message are required.'; break; }
        $subject = 'Contact: ' . $subj;
        $body = "Contact form submission.\n\n"
              . "Name:  $name\n"
              . "Email: $email\n\n"
              . "Message:\n$message\n";
        break;

    case 'rfq':
        $company = clean($data['company'] ?? '', 300);
        $contact = clean($data['contact_name'] ?? '', 200);
        if ($company === '' || $contact === '') { $err = 'Company and contact name are required.'; break; }
        $subject = 'RFQ: ' . $company;
        $body = "B2B Survey Request for Quote (RFQ) from the website wizard.\n\n"
              . "Company:       $company\n"
              . "Contact:       $contact\n"
              . "Email:         $email\n"
              . "Environment:   " . clean($data['env'] ?? 'Not specified') . "\n"
              . "Services:      " . clean($data['services'] ?? 'Not specified', 1000) . "\n"
              . "Water depth:   " . clean($data['depth'] ?? 'Not specified') . "\n"
              . "Survey size:   " . clean($data['size'] ?? 'Not specified') . "\n"
              . "Target date:   " . clean($data['date'] ?? 'Not specified') . "\n"
              . "Datum:         " . clean($data['datum'] ?? 'Not specified') . "\n"
              . "Coordinates:\n" . cleanMultiline($data['coords'] ?? 'None provided', 2000) . "\n";
        break;

    default:
        $err = 'Unknown submission type.';
}

if (isset($err)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => $err]);
    exit;
}

$body .= "\n--\nSent " . gmdate('Y-m-d H:i') . " UTC from " . clean(client_ip(), 100);

$headers = "From: Ocean Science Website <$FROM>\r\n"
         . "Reply-To: $email\r\n"
         . "X-Mailer: oceanscience.in form endpoint\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($RECIPIENT, $SUBJECT_PREFIX . $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Mail service unavailable.']);
}
