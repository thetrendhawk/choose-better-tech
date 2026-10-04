# CBT search, analytics, and affiliate growth status — October 4, 2026

## Current evidence

Authenticated access was restored during this review using the in-app browser. The figures below are fresh account observations with their reporting dates retained.

### Search Console, verified October 4

Latest visible 28-day window: September 2–29, compared with August 5–September 1 (these dates were shown in the date dialog).

| Metric | Latest 28 days | Previous 28 days |
| --- | ---: | ---: |
| Clicks | 3 | 1 |
| Impressions (UI rounded) | 2.71K | 3.62K |
| CTR (UI rounded) | 0.1% | 0% |
| Average position | 28.7 | 48.8 |

Impressions fell approximately 25%, while average position improved. The click sample is too small to establish a durable conversion or CTR trend. Aggregate position changes can reflect query mix; do not infer every page improved. Three-month view (visible chart July 8–September 29): 8 clicks, 7.71K impressions, 0.1% CTR, position 42.5.

| Page | Latest clicks | Latest impressions | Previous impressions |
| --- | ---: | ---: | ---: |
| Data-removal timeline guide | 2 | 376 | 229 |
| Incogni review | 1 | 669 | 275 |
| Google Drive vs Dropbox | 0 | 418 | 331 |
| Best antivirus software | 0 | 236 | 403 |
| Data-removal hub | 0 | 211 | 350 |
| Incogni vs DeleteMe | 0 | 179 | 72 |
| 1Password vs NordPass | 0 | 100 | 138 |
| Incogni vs Optery | 0 | 87 | 40 |
| Optery vs DeleteMe | 0 | 83 | 104 |
| Optery review | 0 | 70 | 49 |

Incogni review impressions grew approximately 143%. This supports prioritizing its reader journey and investigating partner eligibility. Relevant latest-period queries include `reviews of incogni` (93 impressions), `incogni reviews` (79), `incogni vs deleteme` (85), `incogni vs optery` (59), and `dropbox vs drive` (90); each visible query had zero clicks. Query rows omit some anonymized data and need not sum to totals.

Page indexing report last updated September 20: **37 indexed, 38 excluded**. Reasons: 35 discovered (validation Started), one crawled (validation Failed), two redirects (validation Failed). Alternate Google canonical: zero affected, validation Passed. The sole crawled exclusion is **http://choosebettertech.com/**, last crawled July 9; it is not an excluded HTTPS editorial article. Discovered examples include best-data-removal-services, best-free-password-managers, best-free-vpns, four use-case VPN guides, proton-pass-vs-nordpass, proton-vpn-vs-surfshark, and contact; their crawl dates are N/A. Redirect and HTTP variants should consolidate to HTTPS, not be forced into the index. Core Web Vitals overview has no field data; do not classify this as a performance pass.

### GA4, verified October 4

GA4 reporting period is **September 6–October 3**, which differs from the lagging Search Console window. Home card: 110 active users (down 5.2%), 114 sessions (down 5%), 451 events (down 9.4%), two key events. Traffic acquisition: 26 engaged sessions, 22.81% engagement, 25 seconds average session engagement. Channels: Direct 90 sessions, Organic Search 20 sessions (10 engaged, 50% engagement), Unassigned four sessions. Do not assume Direct is entirely human reader traffic without filter/source investigation.

Events report confirms 136 pageviews, **two affiliate_click events from two users**, and one newsletter_submit event. Revenue is $0 in GA4; partner commissions remain unverified and may be recorded outside GA4. Admin confirms affiliate_click is a key event; the other configured key events have no active stream data in the last 28 days. The two reported key events are therefore click indicators, not purchases or confirmed subscriptions.

September 21 main-branch records identify a September 6 QA affiliate event and a September 10 Bing-attributed click in a saved exploration. The latest GA4 window includes those dates. Treat the two current raw clicks as potentially including that known QA, not as two verified reader referrals; the current event table alone does not join them to network customers. The same records confirm browser-history pageviews were disabled and verified September 21, with internal-traffic exclusion still Testing pending home-network evidence. September 7 recorded event retention two months and user retention fourteen months; current retention was not reopened. No analytics settings were changed in this review.

Custom definitions are now evidenced: event-scoped `affiliate_provider` and `link_text`, both changed September 20. Parameter availability is therefore partially verified rather than unknown; destination, selector-specific dimensions, retention, filters, and partner outcome reconciliation remain outstanding. Dimensions generally do not retroactively make earlier event parameters reportable.

| Area | Verified finding | Limit |
| --- | --- | --- |
| Production technical SEO | All 73 URLs in the live sitemap returned HTTP 200, one self-referencing canonical, one H1, and no page-level robots noindex directive. Robots.txt returns 200 and permits crawling. | HTTP HTML checks do not prove Google indexing, rankings, Core Web Vitals, or full visual/browser behavior. |
| Search Console | Fresh Performance and indexing evidence recorded above; 37 indexed pages, latest 28 days 3 clicks / 2.71K impressions. | Indexing data stops September 20 and visible Performance period stops September 29. Historical August audit recorded 25 indexed pages. |
| GA4 | Current reporting confirms 110 active users, 114 sessions, two raw affiliate clicks, affiliate_click key-event designation and existing provider/text dimensions. | Known QA may contribute. Partner earnings remain unverified; September 21 records document corrected history-pageview settings and a Testing internal filter. |
| Affiliate delivery | Production `/api/go/optery` returns 307 with a Location header; destination was not printed or followed. Local registry has 10 ACTIVE providers and six other statuses. | Registry status and a redirect do not establish current advertiser acceptance, link attribution, conversions, or commission. |
| Operational continuity | Original checkout has 71 routes and extensive pre-existing work; current origin/main and the managed worktree include all 73 live routes, including Rewarx and Dashlane. | Focused implementation is on `codex/cbt-search-growth` based on origin/main `d762413`. Original checkout was preserved. |

## Improvements implemented locally

1. Add descriptive sitewide footer links to the VPN hub and data-removal selector. The selector had only two inbound link occurrences in fetched production HTML.
2. Add a permanent selector research list linking to all three reviews and the manual opt-out guide. Every option is discoverable without operating a radio control.
3. Make the selector result link identify the selected review or guide.
4. Emit `selector_choice` on user selection and `selector_review_click` on the result link, with categorical priority, tool name, review path where applicable, and page path. No personal input is collected. These are engagement events, not affiliate conversions.
5. Confirmed current main already reports `newsletter_submit` with error isolation. No newsletter patch is needed against main. Count confirmed subscriptions using Mailchimp evidence or a verified completion integration; interpret older `newsletter_signup` emitted by the legacy form as submissions.

These changes improve discovery and measurement. Ranking or revenue uplift has not been measured. They are not deployed.

## Priorities for the next 30 days

| Priority | Action | Success measure |
| --- | --- | --- |
| 1 | Authenticated reporting restored and baseline recorded. Next: retain full query/page exports with country/device segmentation and inspect highest-value discovered commercial pages. | Page/query opportunities ranked by impressions, position, CTR, and intent; indexing evidence remains dated. |
| 1 | Current-main reconciliation complete through a managed worktree. Review and release the focused discovery/selector patch. | All 73 live routes retained; build, static HTML, interaction and responsive verification pass. |
| 2 | Verify GA4 organic landing pages, users, sessions, engaged sessions, affiliate events by page/provider; confirm report dimensions and compare consent/filter behavior. | Reportable affiliate clicks; no duplicate route pageviews; submission and subscription counts separated. |
| 2 | Prioritize Incogni, its comparisons, and the timeline guide based on fresh GSC evidence. Inspect query-level positions before testing metadata; preserve evidence and reader fit. | Track page-level clicks, impressions, CTR, and selected-review engagement over comparable windows. |
| 2 | Reverify existing ACTIVE affiliate partners and reconcile GA4 clicks to network clicks, conversions, approved commissions, and paid commissions. | First completed monthly reconciliation; discrepancies explained; earnings based on network records. |
| 3 | Revisit Incogni and DeleteMe eligibility: they connect to historically visible commercial pages but have no active tracked local destination. Review Acronis acceptance evidence and suitable content fit. | Verified acceptance, current terms, approved destination, and relevant evidence-supported placement before activation. |
| 3 | Resolve pCloud attribution conflict and confirm Sync.com/Internxt merchant acceptance before expanding cloud-storage monetization. | Documented current terms and advertiser acceptance; no speculative tracked links. |
| 3 | Improve original decision assets and selective external distribution of useful tools/research. | Relevant referring links and organic visits; avoid buying links or publishing batches solely to increase page count. |

## Reporting requirements

Use Search Console for Google search visibility and GA4 for on-site acquisition/engagement; their counts need not match. Separate sitewide metrics from individual-page results. Affiliate clicks are a leading indicator, not earnings. Register useful event-scoped dimensions for selector and affiliate parameters only after checking existing GA4 definitions. Do not mark selector interactions or newsletter submissions as completed purchases/subscriptions.

## Sources

- Repository historical audits: `search-console-indexing-audit-2026-08-06.md`, `analytics-reporting-readiness-2026-07-23.md`; operational KPI and affiliate registries.
- Direct production HTTP sitemap/HTML/robots/redirect inspection on October 4, 2026.
- [Google link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable): descriptive crawlable internal links aid discovery and context.
- [Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): original useful evidence and reader value.
- [GA4 pageview guidance](https://developers.google.com/analytics/devguides/collection/ga4/views): manual pageview configuration and duplicate-event considerations.

## Verification

Final current-main verification: **57 tests across 11 files passed; build and prerender/static validation passed for all 73 routes plus 404; lint and diff whitespace checks passed**. Three focused selector regression cases cover static research discovery/no synthetic engagement on load, correct selection and handoff parameters, and reader navigation when analytics throws. React checklist review found interaction tracking stays in handlers, native labeled radio controls and live result announcement remain, and no render-time analytics or new dependency was introduced. Local browser verified selection changes the result to the Optery review; desktop and mobile client/scroll widths matched (1265/1265 and 375/375 at a 390-pixel viewport with scrollbar). Screenshots showed contained radio controls and result card. Production delivery of the new selector events remains a post-release check; preview/local analytics are suppressed.

The first current-main build exposed that tests under `src/pages` are included by the route-module glob. Relocated the regression test under `src/components` before the final rebuild. No routing behavior was changed. Generated vercel.json formatting is semantically unchanged and excluded from the patch.
