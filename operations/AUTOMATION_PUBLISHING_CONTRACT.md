# Choose Better Tech Automation Publishing Contract

Version: 1.3
Status: Binding
Owner: Choose Better Tech
Effective Date: 2026-07-20

## Scope

This contract governs ChatGPT Work, Codex, agents, and every other automated system that researches, writes, implements, deploys, verifies, remediates, or documents Choose Better Tech content.

## Authority

The current repository standards are authoritative. Automation must read the current versions of these files before every publishing task:

- `operations/EDITORIAL_STANDARDS.md`;
- `operations/RESEARCH_AND_EVIDENCE_STANDARD.md`;
- `operations/PUBLISHING_WORKFLOW.md`;
- `operations/AUTOMATION_PUBLISHING_CONTRACT.md`;
- `operations/VOLATILE_CLAIMS_REGISTER.md`;
- `operations/ORIGINAL_CONTRIBUTION_STANDARD.md`;
- `operations/ARTICLE_QUALITY_SCORECARD.md`;
- `operations/CLAIM_LEDGER_STANDARD.md`;
- `operations/INDEPENDENT_REVIEW_PROTOCOL.md`;
- `operations/PUBLISHING_CAPACITY_AND_BATCH_POLICY.md`;
- `operations/HANDS_ON_TESTING_STANDARD.md`;
- `operations/UPDATE_CORRECTIONS_AND_DATE_POLICY.md`;
- `operations/ROLLBACK_AND_KILL_SWITCH_POLICY.md`;
- `operations/AUTHORSHIP_AI_AND_TRANSPARENCY_POLICY.md`;
- `operations/SITEWIDE_QUALITY_AUDIT_POLICY.md`;
- `operations/TOPIC_CLUSTER_APPROVAL_POLICY.md`;
- `operations/SEARCH_MONITORING_AND_ANOMALY_POLICY.md`;
- `operations/MONETIZATION_RESEARCH_STANDARD.md`;
- all six publication operations documents named in the publishing workflow.

## Fail-Closed Behavior

If a mandatory standard, source, research record, validation step, deployment confirmation, or operations update is missing:

- stop;
- do not improvise;
- do not publish;
- report `BLOCKED` or the correct incomplete status from the publishing workflow.

## No Inherited Assumptions

Do not assume another ChatGPT session's memory, standards, conclusions, or approval status.

Only rely on:

- repository files;
- explicit task instructions;
- verified current evidence.

## No Autonomous Scope Expansion

Do not, unless explicitly authorized:

- add extra articles;
- add unrelated routes;
- redesign the site;
- introduce new categories;
- alter affiliate relationships;
- change global components;
- publish additional pages.

## Research Contract

- No substantial article draft without a research record.
- No major ranking based on a minimal set of vendor URLs.
- No winner without defensible comparative evidence.
- Candidate inclusion and exclusion must be documented.
- Evidence gaps and source conflicts must remain visible.
- No draft may begin without `Original Contribution: PASS`.
- Major content requires a complete claim ledger with all Critical and High claims reviewed.

## Monetization Research Contract

- Substantial clusters and commercial articles require parallel monetization research under `operations/MONETIZATION_RESEARCH_STANDARD.md`.
- Keep monetization records structurally separate from editorial research, claim interpretation, rankings, and verdicts.
- Record public program availability separately from CBT application, approval, product coverage, and registry status.
- Research relevant direct programs, affiliate networks, and non-affiliate revenue models beyond current CBT partnerships.
- Preserve stale listings, conflicting terms, and unknown commission, cookie, attribution, payout, eligibility, and promotional facts.
- Require `Monetization Independence Check: PASS` before commercial implementation. A `FAIL` is blocking.
- Research authority does not permit applications, outreach, negotiation, tracked-link insertion, CTA changes, sponsorship acceptance, lead collection, ranking changes, or verdict changes.

## Editorial Contract

- Affiliate relationships cannot affect editorial output.
- Do not invent testing.
- Do not use unsupported certainty.
- Do not hide evidence gaps.
- Follow `operations/EDITORIAL_STANDARDS.md` for every conclusion and CTA.

## Code Contract

- Use readable TypeScript and JSX.
- Do not compress an entire page into one line.
- Reuse established components.
- Avoid global changes unless they are required and explicitly authorized.
- Keep direct raw affiliate URLs in `src/data/affiliateLinks.ts` only. When a program is explicitly designated as sensitive, keep only its internal redirect route in that registry and read the destination only from a private server-side runtime environment variable.

## Publication Contract

- Writing is not publishing.
- Building is not publishing.
- Committing is not publishing.
- Pushing is not publishing.
- Deployment alone is not final approval.

Publication and approval require the evidence defined in `operations/PUBLISHING_WORKFLOW.md`.

## Reporting Contract

Every task must report:

- research path;
- candidate set;
- inclusion and exclusion reasons;
- sources;
- conflicts;
- unresolved gaps;
- testing status;
- files changed;
- validation;
- content commit;
- `origin/main` verification;
- Vercel deployment;
- deployed commit;
- production URL checks;
- sitemap status;
- IndexNow status;
- structural QA;
- visual QA;
- operations updates;
- final status.
- applicable monetization-record path;
- Monetization Independence Check result;
- program applications, outreach, registry, tracked-link, CTA, ranking, and verdict changes or explicit confirmation that none occurred.

Do not report an item as verified when it is unknown, unavailable, pending, or merely inferred.

## Batch Limits

Until automation has demonstrated consistent compliance, do not autonomously research, write, deploy, and approve multiple major articles in one run.

For major content, default to one article per workflow.

A multi-page remediation batch may audit all pages together, but each page must receive independent research, commits, QA, deployment verification, and final status.

The limits and automatic pauses in `operations/PUBLISHING_CAPACITY_AND_BATCH_POLICY.md` are binding. Do not autonomously publish multiple major articles in one run or more than two substantial pages in a calendar day without explicit authorization.

## Independent Approval Contract

- The author and independent reviewer must be separate passes.
- The author cannot approve their own work.
- The reviewer must challenge the verdict rather than confirm it.
- Major content requires an independent-review report and article quality scorecard.
- A score below `34/40`, a prohibited zero, a ranking/comparison category-floor failure, or a conditional pass blocks deployment.

## Branch and Pull-Request Contract

Major new content defaults to a dedicated branch and pull request. Commit research before implementation, complete the independent review and scorecard, correct failures, obtain approval, merge to `main`, and then verify production. Direct-to-main publication is prohibited unless the project owner explicitly authorizes and documents an emergency exception.

The routine-article exception permits automatic merging of a qualifying pull request. It never permits direct commits or pushes to `main`.

## Routine-Article Auto-Merge Exception

A routine informational article may auto-merge to `main` without owner review only when every condition in this section is simultaneously satisfied. This is a narrow, permanent exception for clearly informational articles in already approved clusters. It does not apply to a new category, content pillar, cluster, policy change, commercial page, shared-system change, or any pull request with a disallowed or ambiguous diff.

### 1. Approved cluster

The article's cluster must already have an approved artifact at:

`docs/strategy/<cluster>-cluster-approval.md`

The article must not open a new category, content pillar, or cluster under `operations/TOPIC_CLUSTER_APPROVAL_POLICY.md`. A new-cluster article remains subject to the existing authorization gate and owner-approved merge requirement.

### 2. Independent review

The Independent Review Protocol must be completed as a separate pass from drafting, in accordance with the Independent Approval Contract. The committed independent-review artifact must be complete before auto-merge evaluation and must show all of the following:

- an Article Quality Scorecard of at least `34/40`;
- no prohibited zero;
- no ranking or comparison category-floor failure; and
- no conditional pass.

### 3. Original contribution

`Original Contribution: PASS` must be explicitly recorded.

### 4. Claim reconciliation

The claim ledger must be complete. Every Critical and High claim must be reviewed and reconciled. No unresolved Critical or High claim may remain.

### 5. Monetization independence and commercial exclusions

For any commercial or substantial article under `operations/MONETIZATION_RESEARCH_STANDARD.md`, `Monetization Independence Check: PASS` must be explicitly recorded.

Version 1.3 does not authorize auto-merge for product rankings, product comparisons, product reviews, affiliate-link activation, commission-bearing CTA changes, pricing-heavy buying pages, changes to affiliate destinations, or changes to monetization infrastructure. Those workloads require explicit owner review and merge even when a monetization-independence check passes. The routine exception initially applies only to clearly informational articles in already approved clusters.

### 6. Technical validation

All applicable technical validation must pass, including lint, typecheck, unit tests, integration tests where applicable, production build, route-manifest parity, generated Vercel-route parity, sitemap validation, schema validation, direct-route HTTP 200, unknown-route 404 behavior, broken-link checks, tracked-query-parameter checks, duplicate-canonical checks, and duplicate title and description checks where applicable.

No required check may be skipped without owner approval.

### 7. Browser validation

Browser validation must pass at 1440px, 1024px, 768px, and 390px mobile width. Required results are no console errors, no failed network requests, no horizontal overflow, no clipped content, a readable article layout, valid direct reload, valid internal navigation, valid browser back/forward behavior, visible keyboard focus, correctly rendered metadata and canonical, correctly rendered structured data, and visible research or testing disclosure where required.

### 8. Final fact refresh

The final fact refresh must be completed immediately before auto-merge evaluation. It must confirm that volatile facts were rechecked, cited primary sources remain current, no material source changed, no unresolved correction remains, all checked dates were updated, and tests and browser checks were rerun after any correction.

### 9. Capacity and batch limits

All limits in `operations/PUBLISHING_CAPACITY_AND_BATCH_POLICY.md` must be respected for the current automation run, the current calendar day, the relevant cluster, and the site as a whole.

### 10. No active rollback or kill-switch trigger

No open Rollback and Kill-Switch trigger may be active for the article's cluster, the affected content type, the publication system, or the site. The automation must check the current state immediately before merge.

### 11. Controlled diff scope

The pull request must be limited to an approved routine-article change set. The automation must classify the diff and list every changed file before auto-merge. Permitted changes are limited to:

- the article page or article content source;
- article-specific research records;
- article charter;
- source matrix;
- claim ledger;
- independent review;
- scorecard;
- final claim reconciliation;
- article-specific validation records;
- route registration;
- canonical route inventory;
- generated route artifacts;
- sitemap;
- tightly scoped internal links;
- an existing category or homepage discovery entry; and
- article-specific styles that do not alter shared behavior.

The exception does not apply if the pull request modifies dependencies or lockfiles except unavoidable generated metadata explicitly permitted by policy; build configuration; deployment configuration; Vercel configuration; environment-variable handling; serverless or edge infrastructure; authentication; authorization; analytics; tracking systems; affiliate destinations; affiliate redirect infrastructure; monetization infrastructure; global disclosures; global legal copy; shared routing behavior; security-sensitive code; publishing policies; automation policies; broadly reused design-system components; global CSS or shared styles with sitewide effect; schema generators used across multiple pages; shared metadata infrastructure; or rollback or kill-switch controls.

Any disallowed or ambiguous file change automatically disqualifies the pull request from auto-merge and requires owner review.

### 12. Exact-head integrity

The full auto-merge evaluation must be tied to an exact pull-request head SHA. The automation must record the evaluated head SHA, the independent-review artifact, the scorecard result, the claim-ledger location, the final refresh timestamp, the browser-validation record, the capacity check, the kill-switch check, and the controlled-diff result.

Immediately before merging, the automation must verify that the pull-request head SHA has not changed. If it changed after evaluation, do not merge, invalidate the prior approval checklist, and rerun all required gates against the new head. The evaluated head SHA and merged head SHA must match exactly.

## Routine-Article Failure Behavior

The system must fail closed. If any condition is missing, fails, is ambiguous, or cannot be verified, do not merge and do not partially apply the exception. Fall back to the existing publishing workflow, retain completed evidence, identify the failed condition, and report the correct state: `BLOCKED`, `DRAFT COMPLETE — EDITORIAL REVIEW REQUIRED`, or `MERGE-READY — OWNER APPROVAL REQUIRED`.

Absence of evidence is failure, not permission.

## Routine-Article Pre-Merge Report

Before initiating an auto-merge, attach a complete merge-ready report and itemized auto-merge checklist to the pull request. It must include the article title, route, cluster, cluster-approval artifact, pull request, evaluated head SHA, scorecard result, prohibited-zero result, category-floor result, conditional-pass result, Original Contribution result, claim-ledger status, Monetization Independence result or not-applicable basis, commercial-content exclusion check, technical-validation results, browser-validation results, final fact-refresh timestamp, batch and capacity status, rollback and kill-switch status, controlled-diff classification, complete changed-file list, prohibited-file check, unresolved risks, and exact merge decision.

When the exception applies, include this exact line:

> Auto-merged under routine-article exception — all 12 conditions met.

Follow the line with itemized evidence for every condition. A pass/fail summary alone is insufficient.

## Routine-Article Post-Merge Production Verification

After an auto-merge under this exception, the automation must verify that the production deployment reaches READY, corresponds to the merged commit, and serves the live article route with HTTP 200. It must verify the production canonical, metadata, structured data, sitemap inclusion, indexability unless the article charter requires otherwise, production browser checks, absence of console errors, absence of failed network requests, absence of horizontal overflow or clipping, and absence of an immediate rollback or kill-switch trigger.

Record production verification in the repository and the pull-request or issue record. If production verification fails, do not describe publication as successful; activate the existing rollback and kill-switch workflow, report the exact failure, and stop further automated publication for the affected cluster until cleared.

## Testing, Dates, and Emergency Controls

- Apply `operations/HANDS_ON_TESTING_STANDARD.md` before using experiential or performance language.
- Apply `operations/UPDATE_CORRECTIONS_AND_DATE_POLICY.md` before changing substantive dates or recording corrections.
- Apply `operations/ROLLBACK_AND_KILL_SWITCH_POLICY.md` when reader safety, trust, legality, indexing, or rendering requires emergency action.
- Pause on serious search anomalies under `operations/SEARCH_MONITORING_AND_ANOMALY_POLICY.md`.
- Require cluster approval and scheduled sitewide audits under the applicable binding policies.

## Human Review Mode

When human review is explicitly requested, stop at:

`DRAFT COMPLETE — EDITORIAL REVIEW REQUIRED`

Do not deploy.
