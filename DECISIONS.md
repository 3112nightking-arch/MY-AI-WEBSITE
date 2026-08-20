# Design Decisions

**Purpose:** Record WHY we made each design/process choice.

**Rule:** Never delete a decision. If one is reversed, add a new entry that supersedes it and explains why.

---

## D-01: Adopt a lean session-documentation system (HISTORY + DECISIONS + /session-close)

**Date:** July 7, 2026 · **Session:** 1 · **Status:** Adopted

### Problem
Work was being captured only in commit messages and the thematic `CHANGELOG.md`. There was no
per-session narrative (what was attempted, decisions made, what's next) and no durable record of
design rationale.

### Decision
Add a two-document system — `HISTORY.md` (append-only per-session dev log) and `DECISIONS.md`
(this file) — driven by a manual `/session-close` slash command (`.claude/commands/session-close.md`),
committed to the repo. Ported from the OSS_SurveyDesk project and adapted to this stack.

### Rationale
Captures the session narrative + the "why" that a diff can't. Manual trigger keeps control with the
author. Kept deliberately lean (no metric scripts / CI drift-gates) to match a small solo site.

---

## D-02: HISTORY.md and CHANGELOG.md coexist (different purposes)

**Date:** July 7, 2026 · **Session:** 1 · **Status:** Adopted

### Problem
The repo already has `CHANGELOG.md`. Does a new `HISTORY.md` duplicate it?

### Decision
Keep both. `CHANGELOG.md` = grouped, **user-facing** change list (what a visitor would notice).
`HISTORY.md` = **per-session dev log** (narrative, decisions, verification, next steps). `/session-close`
updates HISTORY every session and adds a CHANGELOG entry only when the session ships user-facing change.

### Rationale
They serve different readers — a visitor/stakeholder scanning "what changed on the site" vs. a
developer needing the session-by-session story and rationale. Pre-framework history stays in
CHANGELOG (covers 3–5 July 2026, 64 commits); session logging starts from adoption forward.

---

## D-03: GitHub Issues as the tracker; `Refs #N` (not `Fix #N`) in commit subjects

**Date:** July 7, 2026 · **Session:** 1 · **Status:** Adopted

### Problem
No formal bug/task tracker is in use yet, and commit-message closing keywords can auto-close issues
unintentionally.

### Decision
Use **GitHub Issues** (`pranavtyagi01/OceanScience-Website`) as the tracker when tracking is needed;
the living docs link to issues rather than duplicating them. In commit subjects, reference issues
with **`Refs #N`**; reserve `Fix`/`Fixes`/`Closes` for when an auto-close on push is intended.

### Rationale
Issues give labels, assignment, and commit cross-linking for free. The `Refs` convention avoids the
accidental auto-close observed in the sibling project (a "Fix #N" subject closed an issue on push).

---

## D-04: Rebuild the project database from Annexure B (authoritative source drives every row)

**Date:** July 7, 2026 · **Session:** 2 · **Status:** Adopted

### Problem
The project database (`INDEX.HTML` `projectsData`) carried systemic corruption from an earlier
machine-extraction backfill: client names reduced to bare `"Ltd."`/`"Limited"`/`"Pvt. Ltd."`
fragments, work-text shifted or concatenated between adjacent rows, mislabeled attributions,
misdated duplicates, and coordinates that had shifted along with the corrupted text. Piecemeal
patching kept uncovering the next layer.

### Options
1. Continue fixing individual garbled/mislabeled rows by hand.
2. Rebuild every row from the authoritative company dataset (revised **Annexure B**), inheriting the
   old DB's enrichment (lat/lng, industry, region, services) where a confident match exists.

### Decision
Option 2. Annexure B (338 transcribed rows; 339 after date-aware dedup) drives company / project
name / date / completion for every row; each row inherits enrichment from its best month+client
match in the old DB; locations are re-geocoded from the now-correct work text via a site gazetteer
(falling back to inherited). Genuinely non-Annexure rows are kept; confirmed misdated-duplicates are
dropped. Result: 345 → **341** entries with 0 garbled names, 0 duplicates, 0 detectable mislabels.

### Rationale
The corruption was too pervasive and interconnected (cascading shifts) for safe row-by-row fixes —
each patch risked creating a duplicate or losing a displaced project. Driving from a single
authoritative source guarantees internal consistency and is reproducible (the rebuild is a script).
Enrichment is inherited rather than regenerated to preserve the map/geo/industry work. Note: the
source documents cap at 338 projects — no evidence was found for the "417" figure the user expected;
that remains open pending a possible master list.
