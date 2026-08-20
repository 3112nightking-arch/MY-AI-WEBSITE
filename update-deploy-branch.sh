#!/bin/bash
# Sync the webroot-only "deploy" branch from the current main working tree.
# Plesk's Git integration pulls this branch straight into httpdocs, so it must
# contain ONLY files that belong on the public server: INDEX.HTML (with a
# cache-busted stylesheet ref), style.css, submit.php, and IMAGES/.
set -euo pipefail
cd "$(dirname "$0")"

SHA=$(git rev-parse --short HEAD)
WT=.deploy-worktree

if [ ! -d "$WT" ]; then
    if git show-ref --verify --quiet refs/heads/deploy; then
        git worktree add "$WT" deploy
    elif git ls-remote --exit-code --heads origin deploy >/dev/null 2>&1; then
        git fetch -q origin deploy
        git worktree add "$WT" -b deploy origin/deploy
    else
        git worktree add --detach "$WT"
        (cd "$WT" && git checkout -q --orphan deploy && git rm -rfq . 2>/dev/null || true)
    fi
fi

rsync -a --delete --exclude='.DS_Store' --exclude='Thumbs.db' IMAGES/ "$WT/IMAGES/"
cp style.css submit.php "$WT/"
# Cache-bust the stylesheet reference (Cloudflare edge caches style.css)
sed "s|href=\"style.css\"|href=\"style.css?v=$SHA\"|" INDEX.HTML > "$WT/INDEX.HTML"

cd "$WT"
git add -A
if git diff --cached --quiet; then
    echo "deploy branch already up to date (main @$SHA)"
else
    git commit -qm "Deploy from main @$SHA"
    git push -q origin deploy
    echo "deploy branch updated and pushed (main @$SHA)"
fi
