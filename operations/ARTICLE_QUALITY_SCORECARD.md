# Choose Better Tech Article Quality Scorecard

Version: 1.0
Status: Binding
Owner: Choose Better Tech
Effective Date: 2026-07-12

## Scoring

Score every category:

- `0` = fails;
- `1` = partially meets;
- `2` = fully meets.

| # | Category | Score | Evidence |
| ---: | --- | ---: | --- |
| 1 | Distinct search intent |  |  |
| 2 | Original contribution |  |  |
| 3 | Research depth |  |  |
| 4 | Primary-source quality |  |  |
| 5 | Independent evidence |  |  |
| 6 | Claim traceability |  |  |
| 7 | Candidate completeness |  |  |
| 8 | Inclusion/exclusion reasoning |  |  |
| 9 | Decision usefulness |  |  |
| 10 | Limitations and uncertainty |  |  |
| 11 | Testing transparency |  |  |
| 12 | Affiliate independence |  |  |
| 13 | Visible sourcing |  |  |
| 14 | Methodology transparency |  |  |
| 15 | Pricing and volatile-fact handling |  |  |
| 16 | Internal-link fit |  |  |
| 17 | Code maintainability |  |  |
| 18 | Technical SEO |  |  |
| 19 | Accessibility and responsive behavior |  |  |
| 20 | Operations completeness |  |  |

Maximum score: `40`

## Passing Threshold

- Minimum overall score: `34/40`.
- No score of `0` is permitted in Original contribution, Research depth, Claim traceability, Testing transparency, Affiliate independence, Visible sourcing, or Technical SEO.
- Major rankings and comparisons require a score of `2` in Candidate completeness, Inclusion/exclusion reasoning, and Decision usefulness.

## Decisions

Allowed results:

- `PASS`;
- `FAIL`;
- `CONDITIONAL PASS — CORRECTIONS REQUIRED`.

A conditional pass does not permit deployment. Corrections must be completed and the article rescored first.

## Reusable Scorecard Template

Copy this section to `docs/quality/<slug>-quality-scorecard.md`:

```markdown
# <Title> Quality Scorecard

- Reviewer:
- Review date:
- Article URL or proposed route:
- Research record:
- Claim ledger:
- Independent review:

| # | Category | Score (0-2) | Evidence |
| ---: | --- | ---: | --- |
| 1 | Distinct search intent |  |  |
| 2 | Original contribution |  |  |
| 3 | Research depth |  |  |
| 4 | Primary-source quality |  |  |
| 5 | Independent evidence |  |  |
| 6 | Claim traceability |  |  |
| 7 | Candidate completeness |  |  |
| 8 | Inclusion/exclusion reasoning |  |  |
| 9 | Decision usefulness |  |  |
| 10 | Limitations and uncertainty |  |  |
| 11 | Testing transparency |  |  |
| 12 | Affiliate independence |  |  |
| 13 | Visible sourcing |  |  |
| 14 | Methodology transparency |  |  |
| 15 | Pricing and volatile-fact handling |  |  |
| 16 | Internal-link fit |  |  |
| 17 | Code maintainability |  |  |
| 18 | Technical SEO |  |  |
| 19 | Accessibility and responsive behavior |  |  |
| 20 | Operations completeness |  |  |

## Score

- Total: /40
- Threshold checks:

## Deficiencies

- None recorded.

## Required Corrections

- None recorded.

## Final Result

PASS / FAIL / CONDITIONAL PASS — CORRECTIONS REQUIRED
```

The reviewer identified under `operations/INDEPENDENT_REVIEW_PROTOCOL.md` owns the final score and rescore.
