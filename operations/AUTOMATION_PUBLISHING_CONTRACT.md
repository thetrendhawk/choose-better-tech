# Choose Better Tech Automation Publishing Contract

Version: 1.2
Status: Binding
Owner: Choose Better Tech
Effective Date: 2026-07-12

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
