<!--
Governance / documentation PR template.
Use for changes that touch ONLY docs, operations, governance, or tooling — no editorial article
and no shipped application code. Select via ?template=governance.md on the compare URL.
Do NOT use the editorial article template's gates here; use the applicability block below.

ENFORCEMENT: an incomplete governance PR must be returned for correction, not merged as "N/A by
default." Every field is required. "N/A" is allowed only with a reason. No placeholders (no empty
bullets, no "TODO", no "-").
-->

## Change type (required — pick exactly one)
- [ ] Governance / policy
- [ ] Documentation
- [ ] Tooling / script (non-shipped)
- [ ] Operations record

## Applicability (required)
- Application code changed: **No / Yes** (if Yes, this is the wrong template)
- Editorial content changed: **No / Yes** (if Yes, this is the wrong template)
- Build required: **No / Yes** — reason:
- Deployment QA required: **No / Yes** — policy basis:
- Note: a Vercel deployment may still occur automatically on merge. "QA not required" is a governance
  decision; it does not assert that no deployment happened. Record the observed deployment if relevant.

## Applicable gates (required — mark each PASS / FAIL / N/A; N/A needs a reason)
- Diff reviewed and matches intent: 
- Files changed are only those expected: 
- Canonical links resolve (`operations/CANONICAL_SOURCES.md`): 
- Authorization language checked (nothing accidentally authorizes drafting/publishing): 
- No editorial verdict, ranking, CTA, or affiliate link introduced: 
- Superseded/canonical markers correct where applicable: 

## Reviewer decision (required — pick one)
- [ ] Approve for merge
- [ ] Return for correction
- [ ] Reject

Reviewer notes:
