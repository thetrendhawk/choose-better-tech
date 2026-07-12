# Choose Better Tech Automation Publishing Contract

Version: 1.0
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
- Keep raw affiliate URLs in `src/data/affiliateLinks.ts` only.

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

Do not report an item as verified when it is unknown, unavailable, pending, or merely inferred.

## Batch Limits

Until automation has demonstrated consistent compliance, do not autonomously research, write, deploy, and approve multiple major articles in one run.

For major content, default to one article per workflow.

A multi-page remediation batch may audit all pages together, but each page must receive independent research, commits, QA, deployment verification, and final status.

## Human Review Mode

When human review is explicitly requested, stop at:

`DRAFT COMPLETE — EDITORIAL REVIEW REQUIRED`

Do not deploy.
