# Deploying to oceanscience.in

**Deployment is Git-based via Plesk.** The Plesk panel (kd1.ctns.in) has the Git
extension connected to this repository's **`deploy` branch** (read-only GitHub
deploy key), deploying into the `httpdocs` webroot. The host is Windows IIS with
PHP 8.2, behind Cloudflare. Domain email lives on Microsoft 365.

## Standard deploy flow

1. Commit and push changes to `main` as usual.
2. Run `./update-deploy-branch.sh` — this syncs the webroot-only `deploy` branch
   (INDEX.HTML with a cache-busted stylesheet ref, style.css, submit.php, IMAGES/)
   and pushes it.
3. In Plesk → the domain → Git: **Pull Updates**, then **Deploy** (or nothing, if
   deployment mode is set to Automatic).
4. Spot-check the live site, and test a form submission end to end (see below).

The `deploy` branch keeps app.py, docs/, README and all tooling off the public
server. Rollback = point update-deploy-branch.sh at any older commit (checkout,
run, push) and redeploy.

## Forms / email

All three forms POST to `submit.php`, which sends via **Microsoft 365 direct
send** (SMTP to the domain's MX endpoint — no local mail relay, no credentials).
Recipient is configured at the top of submit.php (`mail@oceanscience.in`).
If the endpoint fails, forms fall back to the visitor's mail client (mailto:).

- After each deploy, submit a test inquiry and confirm it arrives (check Junk).
- Deliverability improvement (pending): add `ip4:74.208.100.244` (the web
  server) to the domain's SPF record in Cloudflare DNS so direct-send messages
  pass SPF and stay out of Junk.

## Cloudflare notes

- The stylesheet is cache-busted per deploy (`style.css?v=<commit>`), so no
  manual cache purge is needed for CSS/HTML. New images are new URLs (uncached).
  Only if an existing image is *replaced* under the same name is a purge needed
  (Cloudflare dashboard → Caching → Purge; access currently held by the admin).
- Email Routing in Cloudflare must stay OFF (MX belongs to Microsoft 365).

## Legacy manual method (fallback)

`./make-deploy.sh` builds a full static bundle (deploy/ + zip) for manual upload
through the Plesk File Manager — kept for emergencies or host migrations.
Never upload: app.py, requirements.txt, base.html, README.md, docs/, tooling.
