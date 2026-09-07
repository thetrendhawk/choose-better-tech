# CBT analytics follow-through - September 7, 2026

Status: implementation prepared for owner review; account indexing actions executed. This record follows the separately preserved [read-only audit](cbt-analytics-review-2026-09-07.md). Retrieval date is September 7 UTC, September 6 Pacific. Do not read the audit's no-changes statement as describing this later execution.

## Decision and scope

Continue the bounded November experiment with modified execution. No new article, category, paid acquisition, affiliate destination, ranking, provider claim or freshness date is added. Keep the frozen September 30, October 31 and November 30 reviews. The strongest immediate changes are discovery follow-through and honest measurement semantics. Impression growth alone does not justify scale.

## Completed live discovery actions

| Item | Verified result | Remaining uncertainty |
|---|---|---|
| Production links and crawl access | Homepage, data-removal hub, review index, Privacy Bee and roundup checked. Priority pages return HTTP 200, self-canonicals, indexable robots directives and sitemap inclusion. Existing initial HTML already contains relevant discovery links. | Google has not necessarily crawled those links. No duplicate links were added. |
| Canonical sitemap | Resubmitted `https://choosebettertech.com/sitemap.xml`; GSC confirmed successful submission. | Table still showed July 28 last read and 69 URLs versus 72 in live XML. Refresh acceptance is not reprocessing. |
| Privacy Bee | During the session, URL Inspection changed from unknown to discovered/not indexed with sitemap recognized. Live test passed with valid breadcrumb and review snippet. Single request received “Indexing requested” confirmation and priority-crawl-queue acceptance. | No crawl/indexing confirmation. Do not infer that submission caused the state change. |
| Data-removal roundup | Still discovered/not indexed, no recorded crawl. Fresh live test passed with one valid breadcrumb. Single indexing request accepted. | Not confirmed indexed. The new sitemap submission and fresh live tests are this follow-up's basis; no repeated requests should follow without new evidence. |
| DeleteMe | Individually confirmed indexed in the preceding audit despite zero current-window impressions. | Cause of lost impressions unresolved; no canonical rewrite justified. |

Next URL-level verification: September 14. Check last crawl, selected canonical, index state and sitemap last-read date. A scheduled cloud-browser follow-up exists. Full canonical exclusion reconciliation, including `/comparisons/nordvpn-vs-protonvpn`, remains due rather than assumed fixed.

## Production affiliate QA

Production baseline confirmed through Vercel: main commit `05392463030a84eb3d63b739f389103e90b453da`, READY production deployment `dpl_By6gVcLacDAtdMEKdzLqVyXkvpNx`.

- Route: `/reviews/optery-review` with `utm_source=cbt_qa&utm_medium=internal&utm_campaign=analytics_20260907`.
- Before activation, GA4 Realtime showed one page view and no affiliate event.
- One mouse activation of “Explore Optery Plans” at **2026-09-07 01:58:17 UTC** opened the expected Optery site in a new tab. No purchase or provider signup was attempted.
- After activation, GA4 Realtime showed **one `affiliate_click` and one key event**, with `affiliate_provider=optery` verified in event details.
- All five required parameter names were present: `affiliate_provider`, `affiliate_destination`, `link_url`, `link_text`, `page_path`. Raw destination values are not copied into this record.
- `page_location` contained the exact labeled QA campaign URL. Processed session-source attribution was not yet verified; Realtime first-user-source showed no data. Do not substitute first-user source for session attribution.
- A separate ordinary About navigation was the non-affiliate control; the affiliate total remained one. Realtime recorded two About page views for this one navigation, exposing possible duplicate page-view collection; the follow-up result is recorded below.

This proves delivery of this controlled activation, not all-client reliability, real reader intent, a conversion or revenue. Exclude the known event, QA page views and campaign from all goal evidence. No historical total was rewritten. A controlled newsletter provider-success check requires an owner-controlled test inbox and confirmation of Mailchimp acceptance/checklist delivery; no email was submitted and no completed signup is claimed.

## Internal traffic and tag health

The existing “Aaron Home Internet” rule matches one exact IP and marks `traffic_type=internal`. The Internal Traffic exclusion remains **Testing**. This cloud session cannot establish whether the configured address still belongs to the owner's current home connection. Activate only after verifying a visit from that connection is labeled with the test filter and an external control is not. Keep the private IP out of GitHub. No filter was activated or broadened.

Tag diagnostics reported “Additional domains detected for configuration.” This is not evidence that all events fail: the controlled affiliate event arrived. Inspect the suggested domains against the historical domain migration before adding cross-domain configuration. No domain, consent, retention, custom dimension or key-event configuration changed. The separate automatic page-history setting was corrected as described below. At inspection, custom definitions were empty, affiliate_click was already a key event, event retention was two months and user retention fourteen months. These settings supersede older UNKNOWN entries as dated observations, not proof of reporting completeness.

## Duplicate page-view finding and account correction

One ordinary About navigation produced two page views while the affiliate count remained one. The source implements explicit page views with `send_page_view: false`; live GA4 Enhanced measurement also had **Page changes based on browser history events** enabled. [Google documents](https://developers.google.com/analytics/devguides/collection/ga4/views) that history-based events operate independently of send_page_view, so this combination can duplicate route views.

At **2026-09-07 02:06:33 UTC**, disabled only **Page changes based on browser history events**, saved, reopened the editor and verified it was unchecked. Other enhanced events remain enabled. The first fresh-load Contact-navigation check still showed two views. A later freshly loaded document followed by one navigation to Affiliate Disclosure produced **exactly one page view** in Realtime; the total rose from seven to eight and the affiliate count stayed one. The correction is therefore verified for that controlled fresh-document route transition. Configuration caching/propagation may explain the initial result, but that cause was not directly measured. Recheck September 8 for persistence; this single test is not an all-client guarantee. Historical page-view and engagement comparisons may be affected; do not halve totals or alter recorded historical figures.

## Implemented changes on review branch

1. Newsletter now emits **`newsletter_submit`** for the native form submission and never claims provider acceptance. No email address or field value enters the event parameters. Missing/throwing optional analytics cannot interrupt submission. Reserve `newsletter_signup` for a future verified provider-confirmation path; a submit alone does not satisfy GOALS.md.
2. Added four component regression cases: valid submission once with only allowed parameters, required email empty, malformed email, and missing/throwing analytics. Submission is intercepted by the test harness only, so tests send no email. The existing production-host guard is retained.
3. One description-only experiment on `/guides/how-long-does-data-removal-take`: “How long does data removal take? Compare request, broker-processing, and verification timelines, and learn why a first report is not proof of removal.” The heading/title, article body, July 31 review date, schema dates and canonical are unchanged. Existing content supports this narrower explanation. This is a clarity hypothesis, not a claim that the target query ranks on page one.
4. Updated the six operations dashboards, analytics interpretation, goal measurement clarification and indexing records. Frozen numeric targets and decision rules are unchanged.

Search retrieval on September 7 returned the timeline page with a timing-focused result description and a result title differing from the current page heading. This is a search-tool observation, not a controlled Google country/device SERP capture. The unresolved GSC query-to-page discrepancy prevents treating a title or snippet rewrite as a proven fix. Incogni, antivirus and the reappearance guide remain monitoring candidates; their titles/verdicts are not changed in this experiment.

## Experiment measurement

Launch date: **pending production release**, not September 7 by assumption. Compare the first complete 28 days after launch with the preceding complete 28 days and retain target-country/device/query filters. Primary outcome: qualified clicks to the timeline guide; supporting outcomes: impressions, CTR, query mix and position. Preserve query suppression/detail discrepancies. Low samples may leave the result inconclusive; do not attribute a single click to the description or repeatedly rewrite it. Investigate any demonstrated indexability regression immediately.

## Validation and release boundary

- `npm run lint`: PASS.
- `npm run test`: PASS, 54 tests across 10 files; final targeted analytics/newsletter rerun: 12 passed.
- `npm run build`: PASS; generated and validated 72 public routes plus 404.
- `npm run check:static-output`: PASS.
- `npm run check:generated-routes`: PASS. A generator-only formatting diff in vercel.json was verified JSON-equivalent and removed.
- `git diff --check`: PASS at validation checkpoint.
- Preview deployment `dpl_5wEj6bX5nMLym4DztFx9kCNBLqYL` is READY for implementation head `32e15bc91d83428c308a90a3116c5d8bc0653c62`. Cloud-browser checks confirmed the exact new description, production canonical, unchanged title/review date, desktop containment at 1363px, intact newsletter layout and native required-email validation. No provider submission was sent. No styles/layout changed; mobile viewport was not separately exercised. Final documentation-only head and deployment will be recorded in PR #86.
- Production release and post-release newsletter-event observation: pending owner merge review.

`operations/AUTOMATION_PUBLISHING_CONTRACT.md` excludes shared analytics changes from routine article auto-merge and requires owner review. This maintenance PR is not a major editorial refresh and does not claim an independent article score or final self-approval. After owner review, confirm the merged commit's READY production deployment, correct description/canonical, native newsletter behavior and one explicitly labeled event before declaring release complete. The current production affiliate QA does not verify code that has not been deployed.

## Scheduled follow-through and unresolved inputs

- September 8: confirm that the corrected one-page-view result persists on a fresh labeled visit; investigate only if duplicates recur.
- September 14: one indexing/anomaly recheck.
- September 30, October 31, November 30: formal evidence reviews in the owner's Pacific timezone, retaining the full GOALS.md rules and explicit QA exclusions.
- Owner connection evidence: verify current home IP and Testing-match behavior before activating exclusion.
- Owner-controlled inbox: verify Mailchimp acceptance, confirmation/checklist delivery and attribution. Never infer this from form submission.
- Partner conversion/commission records remain unverified; GA4 is not a commission ledger.

## Review artifact

[PR #86](https://github.com/thetrendhawk/choose-better-tech/pull/86) contains the concrete implementation and evidence. Account corrections and indexing requests above are already executed; website code remains unreleased pending owner review.
