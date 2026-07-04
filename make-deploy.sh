#!/bin/bash
# Assemble a clean deployment bundle for the Plesk/IIS webroot.
# Output: deploy/ folder + a dated zip, both gitignored. See DEPLOY.md.
set -euo pipefail
cd "$(dirname "$0")"

rm -rf deploy
mkdir -p deploy

cp INDEX.HTML style.css deploy/
rsync -a --exclude='.DS_Store' --exclude='Thumbs.db' IMAGES/ deploy/IMAGES/

STAMP=$(date +%Y%m%d-%H%M)
ZIP="oceanscience-deploy-$STAMP.zip"
rm -f oceanscience-deploy-*.zip
(cd deploy && zip -qr "../$ZIP" .)

echo "Bundle ready:"
echo "  folder: deploy/  ($(du -sh deploy | cut -f1))"
echo "  zip:    $ZIP  ($(du -sh "$ZIP" | cut -f1))"
echo "Upload the CONTENTS of deploy/ (or extract the zip) into the webroot, then purge the Cloudflare cache."
