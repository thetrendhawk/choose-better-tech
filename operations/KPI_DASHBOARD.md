# KPI Dashboard

Version: 1.2  
Status: Active  
Owner: Choose Better Tech  
Last Updated: 2026-08-26

## Measurement Reconciliation — 2026-08-26

This section reconciles later August evidence that was committed after the July KPI snapshot. Historical rows below remain preserved rather than overwritten.

### August Search Console evidence

- On **2026-08-05**, owner URL Inspection checks reduced the previously suspected priority indexing cohort to **one unresolved URL: `/best-data-removal-services`**. Other previously suspected priority URLs were owner-confirmed indexed and moved to performance monitoring. See `operations/INDEXING_RECOVERY_RUNBOOK.md` and the indexing-verification records.
- `/guides/how-long-does-data-removal-take` was owner-confirmed indexed on 2026-08-05 with HTTPS and one valid breadcrumb enhancement. Its recorded three-month Search Console performance view through 2026-08-03 showed **122 impressions, 0 clicks, average position 10.0**. This is a page-level signal, not a property-wide baseline.
- The most recent owner-confirmed account snapshot preserved in `GOALS.md` is dated **2026-08-12** and reported **32 indexed pages** in Search Console. That value is an owner-confirmed account observation rather than a repository-generated export and should remain labeled accordingly.

### August analytics instrumentation boundary

PR #77 merged on **2026-08-13** and established the current trustworthy conversion-measurement boundary for CBT:

- GA4 loading/event delivery is restricted to production hostnames;
- `affiliate_click` and newsletter signup events are explicitly tracked;
- production/non-production behavior is regression-tested;
- synthetic/test traffic must not be counted as real reader intent.

GA4 traffic before 2026-08-13 may remain useful as historical context, but conversion comparisons that span the instrumentation change must be labeled and should not be treated as clean like-for-like evidence. Search Console remains the primary source for the active organic-discovery SMART goal.

## Publication Checkpoint — 2026-07-25

Published `/guides/how-to-choose-software` through PR #70, merge `43282bbaac124fbce2671eea0f7ed2ed05eee67b`. Add one published cross-cluster software guide to the content inventory. Production and sitemap verification passed; indexing is `Needs verification`. No traffic, click, conversion, or revenue result is claimed from publication.

## Reporting Cadence

| Review Type | Cadence | Primary Use |
| --- | --- | --- |
| Weekly Review | Weekly | Monitor publishing, indexing, and early distribution. |
| Monthly Review | Monthly | Review traffic, affiliate progress, revenue, and goals. |
| Quarterly Review | Quarterly | Evaluate roadmap priorities and category performance. |

## Content Inventory Baseline

Baseline Date: 2026-07-19

These counts use published editorial routes in the current repository and sitemap. Total editorial content assets means Reviews + Comparisons + Hubs / Guides. Authority pages are tracked separately and do not include legal, utility, or policy pages.

| Content Type | Count | Definition | Verification Source |
| --- | ---: | --- | --- |
| Reviews | 13 | Product review routes under `/reviews/` | Repo route index and production sitemap |
| Comparisons | 14 | Pairwise comparison routes under `/comparisons/` | Repo route index and production sitemap |
| Hubs / Guides | 30 | Decision hubs and published guide routes | Repo routes, content dashboard, and generated sitemap |
| Authority Pages | 3 | About, How We Review Software, and Affiliate Disclosure | Repo routes and production sitemap |
| Total Editorial Content Assets | 57 | Reviews + Comparisons + Hubs / Guides | Calculated from verified counts |

## Content KPIs

| Month | Reviews Published | Comparisons Published | Hubs / Guides Published | Total Editorial Content Assets | Indexed Assets | Notes |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| 2026-07 | 13 | 14 | 31 | 58 | Six monitored URLs individually confirmed indexed | The July 19 Search Console audit confirmed the six strongest-signal URLs indexed through URL Inspection. The Windows Defender capability guide is included in the current live inventory after PR #43 merged as `b974fce653fabdd9da10d1f0bf7162d12f70f11a`; indexing for that route remains unverified. |
| 2026-08 | Not used as an output target | Not used as an output target | Not used as an output target | Existing inventory materially exceeds the original foundation target | Owner-confirmed account snapshot: 32 indexed pages on 2026-08-12 | August goal governance intentionally shifts from publishing volume to discovery and reader-intent outcomes. |

## Organic Search KPIs

| Observation Date | Reporting Window | Organic Clicks | Organic Impressions | Search CTR | Average Position | Returning Visitors | Notes |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| 2026-07-14 | Search Console 3-month view; visible activity began 2026-07-10 | 0 | 49 | 0% | 30.1 | Not measured | Historical initial baseline from PR #30. Preserved for trend context; superseded as the active baseline by the July 19 audit. |
| 2026-07-19 | Search Console 3-month view; visible data covered 2026-07-08 through 2026-07-17 | 1 | 180 | 0.6% | 46.7 | Not measured | Verified property-level baseline from the short initial observation period. |
| 2026-08-05 | Page-level three-month view through 2026-08-03 for `/guides/how-long-does-data-removal-take` | 0 | 122 | 0% | 10.0 | Not measured | Page-level opportunity signal only; do not treat as property-wide totals. URL was owner-confirmed indexed. |
| 2026-08-12 | Owner-confirmed account snapshot | Not preserved in repo | Not preserved in repo | Not preserved in repo | Not preserved in repo | GA4 Google-organic sessions: 3 in preceding 28 days | Search Console indexed-page count was 32. Exact property-wide Search Console performance totals were not preserved in the repo and must not be invented. |

## Search Console Page Signals and Indexability

### 2026-08-05 reconciliation

Owner URL Inspection checks narrowed the active indexing-remediation cohort to one URL: `/best-data-removal-services`. Indexed URLs should remain in performance monitoring rather than be repeatedly resubmitted based on stale aggregate coverage counts.

### 2026-07-19 baseline

Source: Google Search Console Performance and URL Inspection; production HTTP, rendered metadata, sitemap, and robots checks.

| Page | Clicks | Impressions | URL Inspection | Technical result |
| --- | ---: | ---: | --- | --- |
| Homepage (`https://www.choosebettertech.com/` in Performance) | 1 | 24 | Canonical non-`www` homepage is on Google and indexed | `www` permanently redirects to the correct non-`www` canonical. |
| DeleteMe Review | 0 | 64 | On Google; indexed | HTTP 200, self-canonical, sitemap included, crawl permitted. |
| Incogni vs DeleteMe | 0 | 29 | On Google; indexed | HTTP 200, self-canonical, sitemap included, crawl permitted. |
| Optery vs DeleteMe | 0 | 23 | On Google; indexed | HTTP 200, self-canonical, sitemap included, crawl permitted. |
| Data Removal hub | 0 | 18 | On Google; indexed | HTTP 200, self-canonical, sitemap included, crawl permitted. |
| Incogni vs Optery | 0 | 17 | On Google; indexed | HTTP 200, self-canonical, sitemap included, crawl permitted. |

The July audit found no blocking canonical, sitemap, robots, or live-route defect. Later August checks supersede July remediation assumptions where URL-level evidence exists.

### Historical Page Indexing snapshot

The unmerged July 14 baseline in PR #30 recorded a Page Indexing report last updated on 2026-07-09 with 8 indexed URLs and 38 not-indexed URLs. That report remains historical context only. URL Inspection and later account evidence supersede it for current decisions.

## Pinterest KPIs

| Month | Pinterest Pins | Pinterest Clicks | Notes |
| --- | ---: | ---: | --- |
| 2026-07 | Not measured | Not measured | Baseline pending distribution activity. |

## Instagram KPIs

| Month | Instagram Posts | Followers | Notes |
| --- | ---: | ---: | --- |
| 2026-07 | Not measured | Not measured | Baseline pending distribution activity. |

## Affiliate KPIs

| Month | Affiliate Programs | Affiliate Approvals | Affiliate Revenue | Notes |
| --- | ---: | ---: | ---: | --- |
| 2026-07 | TBD | TBD | Not measured | Application and revenue status require external platform verification. |
| 2026-08 | Tracked relationships exist | Not summarized here | No verified commission preserved | `affiliate_click` measurement becomes a trustworthy production conversion signal from the 2026-08-13 instrumentation boundary forward, subject to attribution and exclusion of QA/test traffic. |

## Email KPIs

| Month | Email Subscribers | Notes |
| --- | ---: | --- |
| 2026-07 | At least one completed signup was recorded in project history | Historical lead milestone; source attribution for the historical signup is not asserted here. |
| 2026-08 | Measurement active from 2026-08-13 instrumentation boundary | Newsletter signup events can support reader-intent analysis only when source attribution and traffic exclusions are verified. |

## Revenue KPIs

| Month | Revenue | Notes |
| --- | ---: | --- |
| 2026-07 | Not measured | Baseline pending affiliate reporting. |
| 2026-08 | No verified earned affiliate commission preserved | Do not infer revenue from click events. Partner/network reporting is authoritative for commissions. |

## Current Goal Link

The active 2026-08-26 through 2026-11-30 SMART goal and its frozen SCALE / CONTINUE / MODIFY / PAUSE thresholds are maintained in `GOALS.md`. This dashboard records evidence; it does not silently redefine the goal.