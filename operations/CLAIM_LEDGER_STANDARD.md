# Choose Better Tech Claim Ledger Standard

Version: 1.0
Status: Binding
Owner: Choose Better Tech
Effective Date: 2026-07-12

## Scope

Every major ranking, comparison, review, or security/privacy guide must include a claim ledger in its research record or at:

`docs/research/<slug>-claim-ledger.md`

## Required Columns

| ID | Claim | Claim type | Importance | Product/provider | Source | Source type | Source date | Checked date | Volatile | Qualification | Conflict | Article location | Reviewer status | Refresh trigger |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Claim Types

- factual;
- comparative;
- evaluative;
- security;
- privacy;
- pricing;
- plan limit;
- ownership;
- audit;
- incident;
- legal/terms;
- performance;
- recommendation.

## Importance

- Critical;
- High;
- Medium;
- Low.

Critical and high-impact claims include `best overall`, `safest`, `most private`, `fastest`, `unlimited`, `zero logs`, `zero knowledge`, breach interpretation, ownership, audit status, renewal price, device/member/storage limits, recovery behavior, account-sharing rights, streaming support, and cancellation or refund terms.

## Rules

- Critical claims require direct traceability.
- Comparative claims require evidence for both sides.
- Evaluative claims must identify the criteria used.
- Unsupported claims must be removed.
- Conflicted claims must preserve the conflict.
- Search snippets do not count as sources.
- Vendor comparison pages do not count as independent evidence.
- Volatile claims must also comply with `operations/VOLATILE_CLAIMS_REGISTER.md`.

## Publication Gate

No major article may pass Evidence QA while any Critical or High claim remains unreviewed. This gate is binding in `operations/RESEARCH_AND_EVIDENCE_STANDARD.md` and `operations/PUBLISHING_WORKFLOW.md`.
