# KPI Dashboard

Version: 1.1
Status: Active  
Owner: Choose Better Tech  
Last Updated: 2026-07-19

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
| 2026-07 | 13 | 14 | 30 | 57 | Six monitored URLs individually confirmed indexed | The July 19 Search Console audit confirmed the six strongest-signal URLs indexed through URL Inspection. The merge-ready Defender guide is not included; an owner-approved merge would move the live inventory to 31 guides and 58 editorial assets. |

## Organic Search KPIs

| Observation Date | Reporting Window | Organic Clicks | Organic Impressions | Search CTR | Average Position | Returning Visitors | Notes |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| 2026-07-14 | Search Console 3-month view; visible activity began 2026-07-10 | 0 | 49 | 0% | 30.1 | Not measured | Historical initial baseline from PR #30. Preserved for trend context; superseded as the active baseline by the July 19 audit. |
| 2026-07-19 | Search Console 3-month view; visible data covered 2026-07-08 through 2026-07-17 | 1 | 180 | 0.6% | 46.7 | Not measured | Current verified baseline. The short observation period and young site make these directional signals, not stable rankings. |

## Search Console Page Signals and Indexability

Observation Date: 2026-07-19
Source: Google Search Console Performance and URL Inspection; production HTTP, rendered metadata, sitemap, and robots checks

| Page | Clicks | Impressions | URL Inspection | Technical result |
| --- | ---: | ---: | --- | --- |
| Homepage (`https://www.choosebettertech.com/` in Performance) | 1 | 24 | Canonical non-`www` homepage is on Google and indexed | `www` permanently redirects to the correct non-`www` canonical. |
| DeleteMe Review | 0 | 64 | On Google; indexed | HTTP 200, self-canonical, sitemap included, crawl permitted. |
| Incogni vs DeleteMe | 0 | 29 | On Google; indexed | HTTP 200, self-canonical, sitemap included, crawl permitted. |
| Optery vs DeleteMe | 0 | 23 | On Google; indexed | HTTP 200, self-canonical, sitemap included, crawl permitted. |
| Data Removal hub | 0 | 18 | On Google; indexed | HTTP 200, self-canonical, sitemap included, crawl permitted. |
| Incogni vs Optery | 0 | 17 | On Google; indexed | HTTP 200, self-canonical, sitemap included, crawl permitted. |

The audit found no blocking canonical, sitemap, robots, or live-route defect. It recommended only four targeted review-to-comparison links. Client rendering is not recorded as an indexing blocker.

### Historical Page Indexing snapshot

The unmerged July 14 baseline in PR #30 recorded a Page Indexing report last updated on 2026-07-09 with 8 indexed URLs and 38 not-indexed URLs. That report remains useful historical context, but it is not treated as a current property-wide total because reporting lag and later URL Inspection results were already visible. The July 19 targeted audit supersedes it for the six monitored URLs only.

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

## Email KPIs

| Month | Email Subscribers | Notes |
| --- | ---: | --- |
| 2026-07 | Not measured | Baseline pending email capture workflow. |

## Revenue KPIs

| Month | Revenue | Notes |
| --- | ---: | --- |
| 2026-07 | Not measured | Baseline pending affiliate approvals and reporting. |

## Monthly Goals

| Month | Publishing Goal | Traffic Goal | Affiliate Goal | Revenue Goal | Status |
| --- | --- | --- | --- | --- | --- |
| 2026-07 | Five-page remediation and Cloud Storage run complete; execute the approved two-article Cybersecurity Tools autopilot run. | Establish baseline without inventing traffic data | Track verified applications only | Establish baseline when revenue data exists | On track |
