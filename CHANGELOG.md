# Ocean Science Website — Change Log

All changes to the website since the GitHub repository was established, grouped by area.
Covers **3–7 July 2026**. The site is a single-page app (`INDEX.HTML` +
`style.css`), deployed to oceanscience.in via Plesk's Git integration.

---

## 1. Deployment & Hosting Infrastructure

Went from "files on an SSD" to a fully automated push-to-deploy pipeline.

- **Imported the site into version control** — Flask app, single-page site, and all image
  assets brought into the repo as the first commit; junk files (`.DS_Store`, `Thumbs.db`)
  and the runtime SQLite DB excluded.
- **Deployment tooling** — `make-deploy.sh` assembles a clean webroot bundle (with a
  cache-busted stylesheet reference); `DEPLOY.md` documents the process end to end.
- **Automated Git deployment** — the live server (Plesk on `kd1.ctns.in`) now pulls a
  webroot-only `deploy` branch directly from GitHub via a read-only deploy key, so every
  push goes live automatically. `update-deploy-branch.sh` keeps that branch in sync,
  excluding `app.py`, `docs/`, and tooling from the public server.
- **Cache-busting** — the stylesheet link is version-stamped on deploy so Cloudflare's
  edge cache can't serve a stale theme.

## 2. Branding & Visual Identity

- **New logo** — swapped in the recolored teal Ocean Science wordmark across the header,
  footer, preloader, and software cards; added the globe-emblem favicon. Removed the
  white background chip so it sits directly on the dark navy.
- **Header logo sizing** — progressively enlarged to its final 62px (mobile) / 76px
  (desktop), sized to fill the nav pill cleanly.
- **Unified dark theme** — retired the half-finished light theme; committed the site to a
  single dark "ocean" palette (navy backgrounds, near-white text), swapped fonts to Space
  Grotesk + Instrument Sans, and unified all stray accent colors.
- **Accent color to logo cyan** — shifted the site-wide accent from teal (`#2dd4bf`) to
  the logo's cyan (`#22d3ee`) across ~170 references, with a darker cyan for button fills.
- **Client logo wall** — hosted all 20 partner logos locally (previously hotlinked and
  several broken), normalized them to a uniform size on adaptive light/dark chips, fixed
  the 5 broken ones, and regenerated the Veripos logo at 2× resolution.
- **Logo artwork refresh** — swapped in updated wordmark files: a white-transparent version
  on dark surfaces (header, nav, preloader, footer) and a cyan-on-white version on the light
  product cards, with the "C" globe-emblem in its grey-silver metallic gradient. Full brand
  kit (transparent, cyan-on-white, and navy-chip variants) kept in the repo.
- **Resources page consistency** — restyled the Software Suite cards to match the dark Advanced
  Hardware format (dark cards, cyan icon tiles, numbered titles), replacing the out-of-place white
  cards so the whole Technical Resources area reads as one theme (resolves issue #1).

## 3. Projects Page & Interactive Map

The Projects page saw the most work — from a basic list to a rich interactive portfolio.

- **Map base layers** — replaced the light basemap and stylized ocean layer with a themed
  set: Esri Dark Gray Canvas (default), Satellite Imagery, and the free GEBCO global
  bathymetry grid. Custom icon-button layer switcher (bottom-left) with hover labels,
  styled to match the theme.
- **Marker tooltips** — hovering a numbered marker now shows the project name.
- **Sidebar follows the map** — the project list filters to whatever is in the current map
  view, with an "X of Y projects in map view" counter.
- **Default view fits the data** — the map opens framed exactly to the extent of all
  projects (no empty margins or polar bands); fixed white columns/bars that appeared at
  world zoom on wide screens.
- **Filtering** — swapped the old "year" filter for a **Services** filter, then added a
  third **Industry/Sector** filter; both default to "All" and compose with region, search,
  and the map extent.
- **Readable marker popups** — clicking a project marker opens a white info box whose details
  (project, client, location, type, date, description) now render in dark text. Previously the
  popup text was light-on-white and effectively invisible (resolves issue #2).

## 4. Project Data & Contract Record

Built the Projects data from 216 loosely-tagged entries into a verified 20-year record.

- **Service classification** — tagged all projects against the 14 canonical service lines.
- **Historical backfill** — audited the site data against the official Sept 2024 Statement
  of Qualification and added ~135 missing contracts (2006–2024), growing the record to
  **345 verified projects** with full work descriptions, award dates, and completion
  timelines.
- **Data reconciliation** — fixed systemic errors exposed by the audit: realigned shifted
  company attributions, restored lost client names, removed duplicates (preserving the
  superset of detail), and split fused rows.
- **Industry classification** — tagged every project with a client industry, refined into
  13 balanced groups (Oil & Gas, Submarine Cable Contractors, Ports, Telecom Operators &
  Cable Owners, etc.).
- **Standalone exports** — the full dataset is exported to `docs/projects.json` and
  `docs/projects.csv` for use outside the website.
- **Authoritative rebuild (Annexure B)** — reconciled every project row against the company's
  revised Annexure B dataset: fixed 16 client names that had been reduced to bare "Ltd."/
  "Limited" fragments, corrected work-text that had shifted or fused between adjacent rows,
  dropped 4 misdated duplicates, and re-derived map coordinates from the corrected descriptions.
  The verified record now stands at **341 projects** (down from 345 after de-duplication), with
  exports regenerated to match.

## 5. Management Team Page

- **Redesign** — replaced the rotating "orbital wheel" with a scannable card grid, then
  refined to compact rows with click-to-expand (accordion) bios. Removed the dead
  orbital-wheel code left behind.
- **Contact icons** — added conditional LinkedIn + email icons to each card; populated all
  12 members' email addresses and 11 of 12 verified LinkedIn profiles.
- **Titles & names** — applied display-name and title corrections (Chairman & MD, Director
  titles, GM/DGM titles) and fixed casing.
- **Leadership quote** — Cdr. Tyagi's quote changed from "For over 25 years…" to "For over two
  decades…" to match the corrected 20-year experience claim.

## 6. News & Content

- **Hero rotation** — the homepage "Latest Updates" widget now cycles only the 3 newest
  stories (the News page still lists all).
- **LinkedIn reconciliation** — compared the company's LinkedIn posts against the news
  section and added two missing stories (UXO capability, Bahrain mobilization), using the
  original branded LinkedIn infographic as the UXO thumbnail.

## 7. Navigation & Layout

- **Reliable dropdowns** — fixed the top menu's "ghost click" bug (menus that looked open
  but swallowed clicks) and added click/tap-to-toggle for touch devices.
- **"About" → "About Us"** in the nav.

## 8. Forms & Lead Capture

Moved from "hope the visitor sends an email" to real server-side lead collection.

- **PHP form endpoint** (`submit.php`) — all three forms (contact, RFQ wizard, footer quick
  inquiry) now POST to the server, which emails the submission to `mail@oceanscience.in`
  via Microsoft 365 direct-send, with the visitor's address as Reply-To. Falls back to the
  legacy `mailto:` flow automatically if the endpoint is unavailable.
- **Spam protection** — a hidden honeypot field plus a fails-safe per-IP rate limit
  (5 submissions/hour), using the real visitor IP from behind Cloudflare.
- **Get in Touch readability** — darkened light-grey-on-white text across the contact page:
  the RFQ wizard's step headings and field labels, the contact-form labels, the info cards
  (Headquarters / Email / Call), and the map-marker popup address (rebuilt to a solid white
  popup with dark text). Raised the contact hero's background GIF from barely-visible (10%) to
  clearly visible (40%) while keeping the headline legible.

## 9. Analytics

- **Google Analytics (GA4)** — installed with single-page-app page-view tracking, so each
  section (Projects, News, etc.) registers as its own page.
- **Conversion events** — RFQ submissions, quick inquiries, management contact clicks, and
  a resource-download hook (dormant until that feature exists), all PII-free.

## 10. Content Fixes & Integrity

- **Integrity pass** — corrected 87 image paths with wrong-case extensions (would 404 on
  the Linux-style checks), fixed place-name spelling ("Vizinjam" → "Vizhinjam"), and
  standardized labels.
- **Encoding fix** — repaired 12 mojibake characters (mangled em-dashes, en-dashes, and a
  copyright symbol) from a bad encoding round trip.
- **Corrupt image** — restored the Weather Forecasting service image (a zero-byte file
  since the original import) from the live site.
- **Footer cleanup** — hid the non-functional X (Twitter) button, wired to re-enable when a
  profile URL exists.
- **Experience claim** — corrected the homepage stat from "25+ Years of Experience" to "20+"
  (counter and the "Years of Excellence" eyebrow), matching the "over two decades" body copy.

---

*Reference documents (not deployed): the Sept 2024 company profile and the exported project
dataset live in `docs/`.*
