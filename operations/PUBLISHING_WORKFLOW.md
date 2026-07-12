# Choose Better Tech Publishing Workflow

Version: 1.0
Status: Binding
Owner: Choose Better Tech
Effective Date: 2026-07-12

## Purpose

This is the binding end-to-end workflow for substantial Choose Better Tech publishing work. Every stage must pass in order. When a required input, output, or pass condition is missing, use the listed failure status and stop.

## Workflow Stages

| Stage | Required inputs | Required outputs | Pass conditions | Failure status |
| --- | --- | --- | --- | --- |
| 1. Intent and duplicate check | Current roadmap, content inventory, routes, sitemap, existing page copy | Distinct search intent, adjacent-page list, proposed slug, duplicate-route and duplicate-intent results | No unresolved route or primary-intent conflict | `BLOCKED` |
| 2. Research | Approved intent, article type, candidate scope, source hierarchy | Complete research record at `docs/research/<slug>-research.md` | All required research-record sections are present and evidence is traceable | `RESEARCH INCOMPLETE` |
| 3. Research review | Completed research record | Reviewed candidate set, conflicts, gaps, inclusion/exclusion logic, supported provisional conclusions | Evidence supports the planned structure and conclusions | `RESEARCH INCOMPLETE` |
| 4. Editorial plan | Approved research record and editorial standards | Reader question, outline, fit labels, limitations, evidence plan, internal-link plan, prohibited claims | Plan matches distinct intent and evidence | `RESEARCH COMPLETE — DRAFT NOT STARTED` |
| 5. Draft | Approved editorial plan and research record | Complete reader-first draft with visible evidence and testing disclosure | Required sections are complete; unsupported gaps are not hidden | `DRAFT COMPLETE — EDITORIAL REVIEW REQUIRED` |
| 6. Evidence audit | Draft, research record, sources, volatile-claims register | Claim-by-claim audit, source conflict review, updated checked dates and refresh triggers | Important claims are traceable; volatile claims are current and qualified | `DRAFT COMPLETE — EDITORIAL REVIEW REQUIRED` |
| 7. Editorial audit | Evidence-audited draft and editorial standards | Accuracy, fit, tone, limitations, conclusion, testing, breach, security, and privacy review | Editorial standards pass with no unsupported certainty | `DRAFT COMPLETE — EDITORIAL REVIEW REQUIRED` |
| 8. Affiliate audit | Draft, CTA plan, affiliate registry | Affiliate-independence review and raw-link scan plan | Affiliate state did not shape editorial output; CTAs are restrained and correctly placed | `DRAFT COMPLETE — EDITORIAL REVIEW REQUIRED` |
| 9. Implementation | Approved draft, existing page patterns, route/SEO/schema conventions | Page implementation, route, metadata, canonical, schema, discovery links, sitemap-generation update | Established patterns are reused; scope is limited; content and code are readable | `BLOCKED` |
| 10. Technical validation | Implemented changes and repository scripts | Complete validation log | All mandatory commands and checks pass | `BLOCKED` |
| 11. Commit and push | Validated working tree and intended file list | Content commit, optional separate operations commit, push result | Intended changes are committed and pushed to `main` | `READY TO DEPLOY` |
| 12. Verify origin/main | Local commit hashes, remote branch | Remote head and containment evidence | `origin/main` contains the content commit | `BLOCKED` |
| 13. Verify Vercel deployment | Remote commit and Vercel project access | Ready deployment and deployed-commit evidence | Vercel is Ready and deployed the content commit or a later containing commit | `BLOCKED` |
| 14. Verify live production | Ready deployment and canonical production URL | Live HTTP and rendered-page verification | URL returns 200 and required production content renders without internal 404 | `BLOCKED` |
| 15. Sitemap verification | Live page and production sitemap | Sitemap response and exact URL match | Production sitemap returns successfully and contains the exact canonical URL | `VERIFIED LIVE` |
| 16. IndexNow submission | Live-verified page, live key file, exact canonical URL | Submission response and recorded limitation | Submission returns 200 or 202; response is recorded as acceptance only | `VERIFIED LIVE` |
| 17. Structural QA | Live page at desktop and approximately 390px | Desktop/mobile structure, link, schema, FAQ, table, and overflow results | Required sections render; links work; no page-level overflow or structural defect exists | `VERIFIED LIVE — VISUAL QA REQUIRED` |
| 18. Risk-based visual QA | Structural QA and change-scope review | Established-layout approval or external desktop/mobile review | Applicable visual gate passes with no clipping, overlap, or uncertainty | `VERIFIED LIVE — VISUAL QA REQUIRED` |
| 19. Operations-documentation update | All evidence, commits, deployment, production, QA, sitemap, and IndexNow results | All six operations documents updated consistently | Records use verified facts and preserve unknown states | `BLOCKED` |
| 20. Final status assignment | Completed workflow record | One approved status and concise handoff | Every condition for the selected status is satisfied | `BLOCKED` |

## Mandatory Pre-Commit Commands

Run:

- `npm run lint`
- `npm test --if-present`
- `npm run build`
- `git diff --check`

Also require:

- raw affiliate URL scan;
- duplicate-route scan;
- duplicate-intent scan;
- unsupported-claim scan;
- internal-link check;
- FAQ/schema parity;
- canonical verification;
- metadata verification;
- sitemap entry;
- robots and `noindex` check;
- responsive-table containment;
- approximately 390px mobile check;
- page-level horizontal-overflow check.

Any failed mandatory check blocks deployment until corrected and rerun.

## Commit Workflow

Record:

- content commit;
- operations commit when separate;
- branch;
- `origin/main` head.

Do not call a local commit published.

## Deployment Verification

After push:

- confirm `origin/main` contains the content commit;
- confirm the Vercel deployment is Ready;
- confirm the deployed commit or a later commit containing it;
- verify the production URL;
- verify HTTP 200;
- verify the H1;
- verify the canonical;
- verify schema;
- verify required sections;
- verify visible sources;
- verify FAQ parity;
- verify disclosure;
- verify internal links;
- test a direct deep-route refresh;
- test a cache-bypassed request;
- verify production sitemap inclusion.

If deployment metadata cannot be inspected, do not invent it. Report the limitation and use the correct incomplete status.

## IndexNow

Submit only after live verification.

HTTP 200 or 202 means accepted for processing only. It does not prove indexing, ranking, or search visibility.

## Risk-Based Visual QA

External screenshots are not required only when all of these conditions are true:

- an established approved layout is reused;
- no shared or global component changed;
- no complex new visual element exists;
- desktop structural QA passes;
- mobile structural QA passes near 390px;
- no overflow, clipping, or rendering uncertainty exists.

Otherwise, external desktop and mobile visual review is mandatory.

## Operations Documents

Every publication must update all six:

- `operations/CONTENT_DASHBOARD.md`;
- `operations/CONTENT_CALENDAR.md`;
- `operations/KPI_DASHBOARD.md`;
- `operations/PROJECT_STATUS.md`;
- `operations/CHANGELOG.md`;
- `operations/ROADMAP.md`.

## Approved Statuses

Use only:

- `RESEARCH INCOMPLETE`
- `RESEARCH COMPLETE — DRAFT NOT STARTED`
- `DRAFT COMPLETE — EDITORIAL REVIEW REQUIRED`
- `READY TO DEPLOY`
- `VERIFIED LIVE`
- `FINAL APPROVED — ESTABLISHED LAYOUT PRECEDENT`
- `VERIFIED LIVE — VISUAL QA REQUIRED`
- `LIVE — REMEDIATION IN PROGRESS`
- `BLOCKED`

## Final-Approval Rule

A page may not be marked final approved unless:

- evidence QA passed;
- editorial QA approved;
- affiliate QA passed;
- validation passed;
- live production was verified;
- the production sitemap was verified;
- structural QA passed;
- applicable visual QA passed;
- all six operations documents were updated.
