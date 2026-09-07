# CBT Search Console and GA4 review

Retrieved September 7, 2026 UTC (September 6 Pacific), from signed-in Google Search Console and GA4 accounts using the cloud browser. Compared with committed CBT goals, KPI dashboard, analytics SOP, reporting contract, and indexing runbook. No analytics settings, indexing submissions, site content, or repository files were changed.

## Assessment

Google visibility is expanding, but qualified traffic and commercial intent remain unproven. Recommend a focused modification of execution: resolve discovery for two valuable existing pages, investigate query-level opportunities, and verify measurement. Do not expand publishing volume or paid acquisition on these results.

This is an interim assessment, not the formal November 30 goal decision.

## Search Console

Domain property: choosebettertech.com. Search type: Web. All countries and devices; no page filter for property totals. Compared August 8–September 4 with July 11–August 7, 2026, two complete 28-day windows. Dates were verified in the date-range dialog. The comparison chart's accessibility text displayed an invalid date, so it was not used to establish dates.

| Metric | Previous 28 days | Current 28 days | Change |
|---|---:|---:|---|
| Clicks | 4 | 1 | Down 3; too small for a stable trend |
| Impressions | 1,717 | 3,572 | +108.0% |
| CTR, calculated from totals | 0.233% | 0.028% | Lower; UI rounds current to 0% |
| Average position | 53.4 | 47.6 | Improved by 5.8 positions |

The one current-period click went to `/guides/how-to-choose-software`, for the visible query `software buying guide`.

### Page signals

All rows below use the same Search Console comparison windows. Average positions are page-wide aggregates, not rankings for a single target query. Every listed page except the software guide had zero current-period clicks.

| Page | Previous impressions | Current impressions | Previous position | Current position |
|---|---:|---:|---:|---:|
| `/best-antivirus-software` | 49 | 407 | 22.2 | 12.9 |
| `/comparisons/google-drive-vs-dropbox` | 0 | 391 | No prior impressions | 71.1 |
| `/data-removal` | 61 | 362 | 38.2 | 52.6 |
| `/best-secure-cloud-storage` | 188 | 347 | 74.4 | 73.6 |
| `/reviews/incogni-review` | 119 | 307 | 19.7 | 16.9 |
| `/guides/how-long-does-data-removal-take` | 157 | 232 | 9.5 | 8.5 |
| `/comparisons/nordvpn-vs-surfshark` | 0 | 202 | No prior impressions | 59.3 |
| `/guides/can-your-information-reappear-after-data-removal` | 19 | 75 | 54.2 | 12.7 |
| `/best-cloud-storage-for-beginners` | 193 | 72 | 80.4 | 63.1 |
| `/reviews/deleteme-review` | 82 | 0 | 47.0 | No current impressions |
| Homepage, non-www | 133 | 10 | 58.6 | 48.6 |

The timeline guide's exact query `how long does data removal take` had only four visible impressions and average position 25.8. Its visible current query rows summed to six impressions, far below the page total of 232. The country breakdown also showed only six current impressions, all United States, at position 19.8. The reason for this detail-to-total discrepancy was not established. Do not characterize the page-wide 8.5 as proof of a top-ten ranking for the intended query or treat all impressions as qualified demand.

Search Console also surfaced a 90% weekly impression decline for the antivirus page (August 24–30 versus August 17–23). This is compatible with its monthly increase and warrants a short-window check before assuming sustained momentum.

### Indexing and technical state

Aggregate Page Indexing report last updated September 3: 35 indexed, 37 not indexed. The latter consists of 33 discovered/not indexed, one crawled/not indexed, two redirects, and one Google-selected canonical difference. These are all-known-URL counts, not a verified count of canonical editorial pages. Aggregate exclusions can lag URL Inspection.

| URL or control | Verified result | Interpretation |
|---|---|---|
| `/best-data-removal-services` | URL Inspection: not indexed; discovered/not indexed; sitemap recognized; no crawl or referring page reported | The August 5 priority blocker remains unresolved |
| `/reviews/privacy-bee-review` | URL Inspection: unknown to Google; no sitemap or referring page reported; no crawl | Discovery/indexing blocker for this review |
| Privacy Bee live test | Available to Google; can be indexed; one valid breadcrumb and one valid review snippet | No live eligibility defect reported; this does not mean indexed |
| `/reviews/deleteme-review` | URL Inspection: on Google and indexed; HTTPS | Lost impressions are not explained by current deindexing |
| Canonical exclusion example | `/comparisons/nordvpn-vs-protonvpn`, aggregate report last crawl July 24 | Requires current URL-level canonical inspection before action |
| Submitted sitemap record | Success; submitted and last read July 28; 69 discovered pages | Old processing record |
| Live sitemap | HTTP 200, 72 URL entries, including Privacy Bee, DeleteMe and data-removal roundup | Current sitemap differs from GSC's last recorded read |
| Manual actions | No issues detected | No reported manual penalty |
| Security issues | No issues detected | No reported security issue |
| Core Web Vitals overview | No data, mobile and desktop | Insufficient evidence; not a passing performance grade |

Privacy Bee's public article was independently retrieved and showed an August 19 update. Publication and technical eligibility are established; Google discovery is not.

## GA4

Verified the Choose Better Tech property and production web stream. Traffic acquisition, landing-page and event reports compared August 9–September 5 with July 12–August 8, 2026. These windows are one day later than GSC and must not be described as identical. Reports indicated 100% of available data.

| Metric | Previous 28 days | Current 28 days |
|---|---:|---:|
| Sessions | 176 | 120 |
| Active users, landing-page report | 154 | 116 |
| Engaged sessions | 41 | 21 |
| Engagement rate | 23.30% | 17.50% |
| Average engagement time/session, displayed | 8 seconds | 6 seconds |
| Page views | 325 | 161 |
| Events | 821 | 498 |
| Recorded key events | 0 | 0 |

Total sessions fell 31.8%, largely because Direct fell from 160 to 107. This is not evidence of an equivalent decline in genuine audience demand: tracking changed during these windows and internal/test exclusion is not established.

| Source / medium | Previous sessions | Current sessions |
|---|---:|---:|
| Direct | 160 | 107 |
| Bing / organic | 1 | 11 |
| Google / organic | 2 | 1 |
| Yahoo / organic | 0 | 1 |
| Google / cpc | 11 | 0 |
| LinkedIn / referral | 2 | 0 |

Organic Search rose from 3 to 13 sessions, primarily Bing. Current organic traffic produced four engaged sessions, 30.77% engagement and 27 seconds average engagement/session. Direct supplied 89.17% of current sessions and averaged four seconds engagement/session. Do not interpret all Direct visits as loyal readers or label them bots without further evidence.

Top current landing pages: homepage 40 sessions; Bitwarden vs Proton Pass 27; password manager vs browser passwords 16; 1Password review 9; Privacy Bee review 6 sessions from 4 active users. These are all-source results, not Google organic results. Privacy Bee averaged two seconds engagement/session.

### Reader intent and measurement

- `affiliate_click`: zero recorded in the current window; five events from one user in the previous window. Previous events are not verified reader intent and span the older instrumentation era.
- No newsletter signup event appeared in the complete seven-event comparison report. Do not infer that the signup backend has no submissions.
- `affiliate_click` is already configured as a key event; its admin row reports no recent stream data. Creating another key-event rule is not the next step.
- Internal Traffic filter is Exclude, but its state is Testing. Do not assume internal traffic is removed from reporting. IP matching and owner/QA coverage were not verified.
- No custom dimensions are configured. Provider-specific recurring affiliate reporting is incomplete.
- Event-data retention is two months; user-data retention is 14 months. The UI says these settings do not affect most aggregate standard reports. Longer event retention is an optional improvement for detailed investigations, not a traffic-growth fix.
- Production web stream reports traffic received in the past 48 hours.
- Search Console is linked to the correct domain property and production web stream; linked July 16.
- No live affiliate activation or newsletter submission was generated during this audit, so end-to-end event delivery remains to be tested separately and labeled as QA.
- GA4 revenue is not an authoritative affiliate-commission ledger. Partner accounts were not inspected; actual commissions remain unverified.

## Comparison with prior committed CBT work

- August 12 owner-confirmed snapshot: 32 indexed pages; current aggregate is 35, an increase of three. Neither aggregate establishes the goal's canonical-editorial count.
- August 12 snapshot: three Google-organic GA4 sessions in its preceding 28 days. Current window has one. These are different observation windows, not a controlled experiment.
- August 5 indexing runbook: only `/best-data-removal-services` remained in the priority remediation cohort. It remains unresolved; Privacy Bee is now an additional verified priority.
- Earlier timeline guide snapshot through August 3: 122 impressions, zero clicks, position 10.0. Current 28-day window: 232, zero, 8.5. Unequal windows prohibit an exact growth-rate claim.
- PR #77 established the August 13 production tracking boundary. Current GA4 comparison spans it. Conversion changes are not like-for-like evidence.
- The July software-choice guide is now the only page producing a Google click in the current window, a small but concrete outcome from earlier publishing work.

## Next actions, in order

1. **Resolve discovery for Privacy Bee and the data-removal roundup.** Inspect the current rendered and initial HTML links from relevant indexed hub/review pages, robots/canonical responses and crawl access. Privacy Bee already passes Google's live test. Refresh sitemap processing and make a single targeted indexing request when appropriate after those checks, then preserve the date and recheck. Avoid repeated submissions without meaningful changes. The older runbook already records internal links added to the roundup, so verify those existing links rather than blindly adding duplicates.
2. **Run a small query-led refresh experiment on existing assets.** Prioritize the timeline guide, Incogni review and antivirus page; the reappearance guide is an additional candidate. Review target-country/device/query evidence and actual snippets before changing titles or introductions. The timeline exact query is weaker than its page average implies. Record each change and compare the next complete 28-day window. Do not promise clicks from a title change.
3. **Verify reader-intent measurement.** Confirm the internal filter matches only intended traffic before activating it. Run one explicitly labeled production QA check for an affiliate CTA and newsletter success path. Verify event and source attribution without counting QA toward goals. Diagnose missing delivery only if that controlled check fails.
4. **Monitor, rather than overreact to, losses.** DeleteMe remains indexed; investigate query relevance, competition and internal links. Recheck the antivirus weekly decline. Canonical and aggregate exclusions need URL-level reconciliation before fixes.
5. **Keep the September 30 review and November 30 targets.** Do not increase content breadth, infrastructure or paid promotion on current evidence.

## Goal status

The frozen November 30 goal requires at least 20 GSC clicks per trailing 28 days, 50 indexed canonical editorial URLs, and two verified organic high-intent actions including one commercial-intent action.

Current evidence: one GSC click; 35 total indexed URLs as an upper bound before editorial filtering; no verified qualifying organic action established. Goals are not achieved. Impressions are encouraging, but insufficient for scale. Recommend MODIFY execution now while continuing the bounded experiment. It is too early to apply the formal deadline decision, and the exposure condition for the PAUSE rule has not been met.

## Sources and limitations

- [GSC property comparison](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Achoosebettertech.com&num_of_days=28&compare_date=PREV), signed-in live UI. Relative-date link will change over time; use the fixed dates in this report.
- GA4 signed-in Choose Better Tech traffic acquisition, landing-page, events, data-stream and admin reports, as described above.
- [Committed goals](https://github.com/thetrendhawk/choose-better-tech/blob/main/GOALS.md)
- [KPI dashboard](https://github.com/thetrendhawk/choose-better-tech/blob/main/operations/KPI_DASHBOARD.md)
- [Analytics SOP](https://github.com/thetrendhawk/choose-better-tech/blob/main/operations/SOP/Analytics.md)
- [Indexing recovery runbook](https://github.com/thetrendhawk/choose-better-tech/blob/main/operations/INDEXING_RECOVERY_RUNBOOK.md)
- [Analytics reporting contract](https://github.com/thetrendhawk/choose-better-tech/blob/main/operations/ANALYTICS_QA_AND_REPORTING_CONTRACT.md)
- [Published Privacy Bee review](https://choosebettertech.com/reviews/privacy-bee-review) and live sitemap HTTP/XML check.

Account totals are recorded observations, not independently validated counts of real people. Small samples, tracking changes, unverified internal-traffic exclusion, incomplete detailed GSC rows and report lag limit interpretation. The audit establishes enough evidence to prioritize action; it does not establish the root cause of every traffic or indexing change.
