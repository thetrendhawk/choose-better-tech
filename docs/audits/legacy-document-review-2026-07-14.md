# Legacy Document Review — 2026-07-14

Status: **COMPLETE — FOUR FILES SUPERSEDED**

## Scope

This review examined four foundation-era documents that remained active-looking after canonical governance migrated into `operations/`:

- `docs/CBT-Operations-Manual-v1.0.md`
- `docs/Opportunity-Scoring.md`
- `docs/Publisher-Readiness-Checklist.md`
- `docs/Research-Workflow.md`

The review compared each file against current binding policies and the canonical authority map. It did not delete, rewrite, or silently merge historical content.

## Decision table

| File | Decision | Current authority | Reason |
| --- | --- | --- | --- |
| `docs/CBT-Operations-Manual-v1.0.md` | SUPERSEDED — HISTORICAL ONLY | `operations/BUSINESS_IDENTITY.md`, `operations/EDITORIAL_STANDARDS.md`, `operations/PUBLISHING_WORKFLOW.md`, `operations/AUTOMATION_PUBLISHING_CONTRACT.md` | The legacy pipeline is incomplete and its final rule prioritizes the next affiliate commission, conflicting with current reader-first and monetization-independence controls. |
| `docs/Opportunity-Scoring.md` | SUPERSEDED — HISTORICAL ONLY | `operations/ROADMAP.md`, `operations/TOPIC_CLUSTER_APPROVAL_POLICY.md`, `operations/PUBLISHING_CAPACITY_AND_BATCH_POLICY.md`, cluster approvals | The model gives affiliate opportunity 20% of priority and contains a fixed, completed VPN list. Current rules separate editorial authorization from monetization and use the live queue. |
| `docs/Publisher-Readiness-Checklist.md` | SUPERSEDED — HISTORICAL ONLY | `operations/PUBLISHING_WORKFLOW.md`, `operations/ARTICLE_QUALITY_SCORECARD.md`, `operations/INDEPENDENT_REVIEW_PROTOCOL.md` | The legacy checklist and 9.0 target do not satisfy current evidence, review, deployment, production, and closeout gates. |
| `docs/Research-Workflow.md` | SUPERSEDED — HISTORICAL ONLY | `operations/RESEARCH_AND_EVIDENCE_STANDARD.md`, `operations/CLAIM_LEDGER_STANDARD.md`, `operations/ORIGINAL_CONTRIBUTION_STANDARD.md`, `operations/MONETIZATION_RESEARCH_STANDARD.md` | The CBTEP outline is materially less complete than current binding research, traceability, source-conflict, volatility, original-contribution, and monetization-separation requirements. |

## Preserved value

The reviewed files contain useful historical principles, including reader-first value, evidence before opinion, conditional recommendations, transparency, research before drafting, and basic technical checks. Those principles are preserved in stronger form in current binding documents.

Historical files remain in place for provenance. Their new banners prohibit operational use while preserving the record of how CBT's system evolved.

## Conflicts identified

### Affiliate-first prioritization

The legacy operations manual asks whether a task increases the probability of earning the next affiliate commission and postpones work when it does not. The legacy opportunity score also assigns 20 points to affiliate opportunity.

Current policy permits monetization research for business planning but prohibits affiliate availability or economics from shaping editorial candidates, rankings, verdicts, labels, evidence interpretation, or publication conclusions.

### Incomplete publication gate

The legacy readiness checklist covers useful basics but omits required current controls such as distinct-intent review, original contribution, claim ledgers, independent review, scorecard floors, affiliate-independence audit, exact deployment verification, live production checks, structural/visual QA, and operations closeout.

### Incomplete evidence model

The legacy research workflow does not meet current requirements for article-specific research records, Critical/High claim ledgers, source conflicts, volatile-claim dates and refresh triggers, testing boundaries, original contribution, visible sources, or separate monetization research.

## Repository actions

- Added explicit superseded/historical banners to all four files.
- Added all four decisions to `operations/CANONICAL_SOURCES.md`.
- Preserved the original document bodies unchanged below each banner.
- Made no application, route, editorial-page, affiliate-link, sitemap, or production-code changes.

## Final rule

These four documents may be read for historical context only. They cannot authorize, prioritize, sequence, research, review, publish, deploy, or monetize current work.
