# Session Close — Documentation Sync Protocol

Run at the end of a session that made real changes (content, code, fixes, decisions, infra).
Keeps the two living documents — `HISTORY.md` and `DECISIONS.md` — in sync so they never drift from
the code and the deploy state.

> Scope notes:
> - **`CHANGELOG.md`** already exists as the grouped, user-facing change list. `HISTORY.md` is the
>   complementary **per-session dev log** (narrative, decisions, verification, next steps). Update
>   both when a session ships user-facing changes; update only HISTORY for internal/tooling work.
> - Bug/task **tracking** uses GitHub Issues (`pranavtyagi01/OceanScience-Website`) when issues are
>   in play; this protocol references them, it doesn't duplicate them.

## When to run
- After any session with commits, content/code changes, or design decisions.
- Skip for pure-conversation / read-only sessions.

---

## Phase 0 — Read the session record, if there is one

**Conditional, and the condition is the file itself.** If `~/.claude/checkpoints/OceanScience-Website.md` exists,
read it before Phase 1. Where a session was saved and cleared, it is the only surviving account of
the windows before this one.

- **`Not yet triaged`** → this repo has no open-work register. **Create `OPEN_THREADS.md` the first
  time there is something real to put in it**, with a header saying it holds what is unresolved and
  why, and drain into it thereafter. Do not create it empty, and do not park items in `HISTORY.md`:
  that file is append-only per session, so an open item filed there is buried by the next entry and
  never read again. **Do not open a GitHub issue for it here** — promotion is a deliberate act, not
  something a close does on its own.
- **`Learned`** → `[rejected]` becomes a `D-##` entry, since `DECISIONS.md` already holds declined
  approaches. A user-facing behaviour change belongs in `CHANGELOG.md`; anything about how the site is built or shipped belongs in `DEPLOY.md`. Anything else: create the doc that owns the subject, or say in the close that
  it was held and why. Never drop it.

**Empty each section in the record once drained.**

If the file does not exist, this phase does nothing and says nothing. The record is opt-in, `save`
is the only thing that creates it, and reporting the absence is how it ends up created.

## Phase 1 — Gather

```bash
# Commits made this session (everything since the last HISTORY.md entry's last SHA)
git log --oneline PREV_SHA..HEAD

# Lightweight metrics
echo "html/css/js: $(find . -path ./.git -prune -o \( -name '*.html' -o -name '*.css' -o -name '*.js' \) -print | grep -viE 'node_modules|/deploy/|\.deploy-worktree' | wc -l)"
echo "python:      $(find . -path ./.git -prune -o -name '*.py' -print | grep -v __pycache__ | wc -l)"
echo "commits:     $(git log --oneline | wc -l)"

# Issue activity this session, if issues are in use
gh issue list --state all --limit 30 2>/dev/null

# There is no automated test suite — verification is manual (load the page, check the flow).
```

Note what changed, any issues opened/closed, and how each change was verified.

## Phase 2 — Update HISTORY.md

Prepend a new `## Session N` entry (newest first) using the template at the bottom of `HISTORY.md`:
- One-line summary + date.
- **Changes** table: what changed → commit SHA → issue ref (if any).
- **Decisions**: bullets linking to new `D-##` entries added in Phase 3.
- **Verification**: how it was checked (browser/page, form submit, deploy preview). Note anything not verified.
- **Next session**: top 2–3 open items.

Rules: append-only — never edit past entries. Link commits/issues; don't paste diffs.

## Phase 3 — Update DECISIONS.md

For each design choice made this session, add a `D-##` entry (problem / options / decision / rationale).
Never delete a decision — if reversed, add a new entry that supersedes it and say why. Skip if none.

## Phase 4 — Update CHANGELOG.md (only for user-facing changes)

If the session changed anything a visitor would see (content, layout, theme, behavior), add it to the
relevant area section of `CHANGELOG.md`. Internal tooling/docs changes stay out of the CHANGELOG.

## Phase 5 — Final commit (and deploy note)

```bash
git add -A
git commit -m "Session N: <summary>

<short bullet list of changes>

Refs #<issues>   # use 'Refs' not 'Fix' in the SUBJECT — 'Fix #N' auto-closes on push

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git push origin main
```

`main` does **not** deploy. The live site publishes from the **`deploy`** branch (Plesk pulls it);
run `./update-deploy-branch.sh` to push changes live, per `DEPLOY.md`. Keep doc/session changes on
`main` only.

Verify `git status` is clean and local `main` == `origin/main` before declaring done.

---

## Phase 6 — Write the session record back, only if there is one

**Conditional, same condition as Phase 0.** If `~/.claude/checkpoints/OceanScience-Website.md` exists, rewrite it
after the commit so its header carries the sha this close produced: `Status: HANDOFF`, or `CLOSED`
if nothing is left to pick up. **The sections Phase 0 drained must now be empty.** Write the header
from `git rev-parse` and `date`, and rewrite the body in the same pass.

If the file does not exist, this phase does nothing and says nothing.

## Conventions (project-specific)
- **Repo:** `pranavtyagi01/OceanScience-Website` (solo). Default branch `main`; live site = `deploy` branch.
- **Two change records:** `CHANGELOG.md` (grouped, user-facing) + `HISTORY.md` (per-session dev log).
- **Auto-close gotcha:** a closing keyword (`Fix`/`Fixes`/`Closes`) + `#N` in a commit subject
  auto-closes that issue on push. Use `Refs #N` to link without closing.

## Revision History
| Rev | Date | Change |
|-----|------|--------|
| R0 | 2026-07-07 | Initial protocol, ported from OSS_SurveyDesk's lean HISTORY+DECISIONS system; adapted for the Flask/static stack, `main`/`deploy` branches, and the existing CHANGELOG.md. |

---

## Final step — OSS Brain sync

This repo is a knowledge source for the **OSS Brain** (institutional memory,
`~/Claude Work/oss-brain`). After the close commit lands, trigger the Brain's
re-extraction — one command, all logic lives Brain-side:

```bash
cd "$HOME/Claude Work/oss-brain" && ./.venv/bin/python scripts/sync_source.py oceanscience-website
```

If the Brain repo is unavailable, skip freely — its weekly freshness sweep
catches up automatically. Never edit Brain files from this repo.
