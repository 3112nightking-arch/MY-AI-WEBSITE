# Deploying to oceanscience.in

The live site is **static hosting** on Windows IIS (Plesk), behind **Cloudflare**.
The Flask backend (`app.py`) does not run there — it exists for local development only.
The contact and RFQ forms work without it (they use `mailto:`); the footer quick-inquiry
form falls back to a simulated success message on static hosting.

## What gets deployed

Exactly three things, and nothing else:

| Item | Why |
|---|---|
| `INDEX.HTML` | The entire site (single page) |
| `style.css` | Theme and component styles |
| `IMAGES/` (whole folder) | All photos, logos (`IMAGES/CLIENTS/`), and service art |

**Never upload:** `app.py`, `requirements.txt`, `base.html`, `README.md`, `DEPLOY.md`,
`make-deploy.sh`, `database.db`, `.git/`. On IIS these would be served as downloadable text.

## Steps

1. From the repo root, run:
   ```bash
   ./make-deploy.sh
   ```
   This builds a clean `deploy/` folder and a dated `oceanscience-deploy-*.zip`
   (both are gitignored — they are build artifacts, not source).

2. Upload the **contents** of `deploy/` into the site's webroot via Plesk's File Manager
   (or extract the zip there). Overwrite existing files. Make sure the new
   `IMAGES/CLIENTS/` folder comes along — the client-logo wall depends on it.

3. **Purge the Cloudflare cache** (Cloudflare dashboard → Caching → Purge Everything),
   or enable Development Mode while verifying. Without this, visitors can get a stale
   mix of old and new files.

4. Spot-check the live site: home page (dark theme), Company page (client logo wall),
   Management Team grid, Projects service filter, and the Services page images.

## Notes

- Cloudflare re-applies email obfuscation to `mailto:` links at serve time; that is
  normal and requires no action.
- Filenames in the repo are case-exact and lowercase-extension, so the bundle also works
  on case-sensitive (Linux) hosting if the site ever moves.
- Future improvement: a GitHub Action can push this same bundle to Plesk over FTPS on
  every push to `main` (needs FTP credentials as GitHub secrets).
