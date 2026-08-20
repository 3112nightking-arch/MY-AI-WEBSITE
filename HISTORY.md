# Development History

Append-only per-session log (newest first). Links commits and (when used) GitHub issues; does not
duplicate the user-facing `CHANGELOG.md`. See `.claude/commands/session-close.md` for how entries are
produced, and the template at the bottom.

> Pre-framework history (site build, deploy pipeline, branding — 3–5 July 2026, 64 commits) lives in
> `CHANGELOG.md`. Per-session logging starts from Session 1 below.

---

<a id="session-4"></a>
## Session 4 — July 17, 2026 (Fix Projects map popup regression; file backlog issues)

### Summary
Fixed issue #2 — the Projects map marker popup showed invisible text. Root cause was a regression
from Session 2's contact-map fix: forcing the global Leaflet popup to a white background left the
Projects popup's light text (white values, light-grey company/description) unreadable. Recolored
that popup to dark-on-white. Also filed the two long-parked backlog items as GitHub issues so they
stop living only in HISTORY's "next session" notes.

### Changes
| Change | Commit | Issue |
|---|---|---|
| Projects map popup recolored dark-on-white (values near-black, company/description slate, labels slate-500, title darker cyan, dividers lightened) | `6e304b1` | #2 |
| Closed #2 with a resolution comment linking the fix | — | #2 |
| Filed backlog items as issues: "417 projects" reconciliation; host hotlinked Xylem/Autodesk logos locally | — | #3, #4 |

### Decisions
- [D-05] Leaflet map popups are white with dark content text, site-wide

### Verification
Browser-verified: opened a project marker popup and confirmed the computed colors — popup
background white, values `#0f172a`, company `#475569`, labels `#64748b`, title `#0e7490` — plus a
screenshot showing the fully readable info box. Pushed to `main` and published via
`update-deploy-branch.sh` (`origin/deploy` carries the fix). **Not** verified: live Esri base tiles
(blocked in the preview sandbox — markers and popups render regardless).

### Next session
- #3 — reconcile the "417 projects" figure once a master list is available.
- #4 — host the remaining hotlinked Software Suite vendor logos (Xylem, Autodesk) locally.
- Recurring annoyance: the scratchpad Flask venv gets wiped between turns, so the gitignored
  `.claude/launch.json` has to be repointed at a rebuilt venv before the local preview will run.

---

<a id="session-3"></a>
## Session 3 — July 8, 2026 (Resolve issue #1: Software Suite card format)

### Summary
Resolved the repo's first GitHub issue: reformatted the Resources page's **Software Suite** tab
from the out-of-place light/white cards to the same dark card style as **Advanced Hardware** (dark
cards, square cyan icon tiles, numbered titles, matching grid), keeping all 10 cards and their
vendor logos. Also recovered the local Flask preview after its scratch venv had lost Flask.

### Changes
| Change | Commit | Issue |
|---|---|---|
| Software Suite cards restyled to match Advanced Hardware (dark theme); OSS wordmark switched to the white-on-dark variant; Xylem/Autodesk/OSS logos preserved | `80466fe` | #1 |
| Closed issue #1 with a resolution comment linking the fix | — | #1 |

### Decisions
- None — straightforward format match to an existing section.

### Verification
Browser-verified via the local Flask preview: the Software Suite tab renders all 10 cards in the
dark Advanced-Hardware format (heading, cyan icon tiles, numbered titles, vendor logos); no console
errors; the Advanced Hardware tab is untouched (div-balance check passed). Pushed to `main` and
deployed via `update-deploy-branch.sh`. Tooling note: the preview venv had lost Flask, so a fresh
`flaskenv` (Flask 3.1.3) was created and the gitignored `.claude/launch.json` repointed at it.

### Next session
- Still open from Session 2: the "417 projects" figure — diff against a master list if one exists.
- Optional: host the Software Suite's remaining hotlinked vendor logos locally (Xylem SVG, Autodesk
  badge), as was done earlier for the client logo wall.

---

<a id="session-2"></a>
## Session 2 — July 7, 2026 (Project-database rebuild, logo, contact-page readability)

### Summary
Rebuilt the entire project database against the revised **Annexure B** company dataset, updated
the logo to the grey-silver-metallic-C artwork, made the Get in Touch page readable (dark text on
the white forms/cards plus a visible map popup), revealed the contact hero's background GIF, and
corrected the experience claim from 25 to 20 years. (These site commits sit *below* the Session-1
framework commits in the graph — concurrent sessions committed into the same working copy.)

### Changes
| Change | Commit | Issue |
|---|---|---|
| Full project-DB rebuild vs. Annexure B (345→341): fixed 16 garbled client names, cascade/shift mislabels & concatenations, dropped 4 misdated duplicates, re-geocoded from work text; regenerated `docs/projects.{json,csv}` | `594bdaa` | — |
| Logo: white-transparent on dark surfaces + cyan-on-white on light cards; full brand kit committed | `594bdaa` | — |
| Contact-page readability: darkened light-grey-on-white text in both forms (RFQ step headings, field labels, Back button), the info cards, and the map-popup office address | `594bdaa` | — |
| Contact hero: raised background GIF opacity (10%→40%) and lightened the overlay so it reads | `82b4544` | — |
| Experience claim 25→20 (home counter + eyebrow); Cdr. Tyagi quote "25 years"→"two decades" | `c003e47` | — |

### Decisions
- [D-04] Rebuild the project database from Annexure B (authoritative source drives every row)

### Verification
Browser-verified via the local Flask preview: 341 projects parse and render on the Projects
map/list with valid coordinates and no console errors; the contact page was scanned for
light-on-white text (all readable except intentional cyan accents); the hero GIF and the 25→20
text were confirmed on the rendered page. All three site commits are pushed to `main` and live via
`update-deploy-branch.sh`. **Not** verified: live Esri map base tiles (blocked in the preview
sandbox — the 341 markers were confirmed instead).

### Next session
- User to provide the source of the "417 projects" figure — the two company documents top out at
  338 and the DB is now an authoritative 341; diff against a master list if one exists.
- Optional: revisit the handful of EGS "personnel support" rows whose inherited location is nominal.
- Consider filing the above as GitHub Issues (D-03) so the tracker has content.

---

<a id="session-1"></a>
## Session 1 — July 7, 2026 (Adopt session-documentation framework)

### Summary
Ported the lean session-documentation system from the OSS_SurveyDesk project: a manual
`/session-close` command plus `HISTORY.md` and `DECISIONS.md`, adapted for this repo's Flask/static
stack, `main`/`deploy` branch layout, and existing `CHANGELOG.md`. No site content or behavior changed.

### Changes
| Change | Commit | Issue |
|---|---|---|
| Added `/session-close` command, `HISTORY.md`, `DECISIONS.md` (framework adoption) | _this session_ | — |

### Decisions
- [D-01] Adopt lean session-documentation system (HISTORY + DECISIONS + /session-close)
- [D-02] HISTORY.md and CHANGELOG.md coexist (different purposes)
- [D-03] GitHub Issues as tracker; `Refs #N` not `Fix #N` in commit subjects

### Verification
Docs-only change — nothing to run. `main` does not deploy (live site publishes from the `deploy`
branch), so this is safe to push without affecting the site.

### Next session
- Use `/session-close` at the end of the next working session to exercise the protocol for real.
- Consider filing the known TODOs as GitHub Issues so the tracker convention (D-03) has content.

---

## Entry template (copy for each new session)

```markdown
<a id="session-N"></a>
## Session N — <Month Day, Year> (<one-line theme>)

### Summary
<2–4 sentences: what this session set out to do and what landed.>

### Changes
| Change | Commit | Issue |
|---|---|---|
| <what changed> | `<sha>` | #<n> |

### Decisions
- [D-##] <title>   (add the full entry to DECISIONS.md)

### Verification
<how it was checked: page load, form submit, deploy preview. What was NOT verified and why.>

### Next session
- <top 2–3 open items>
```
