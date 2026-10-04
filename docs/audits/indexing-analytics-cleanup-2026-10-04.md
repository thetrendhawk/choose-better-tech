# Indexing and analytics cleanup — October 4, 2026

## Indexing evidence

Search Console's September 20 coverage snapshot still lists 35 discovered, currently unindexed URLs. The full visible 35-row table was captured, and all were checked against production HTML from the 73-route sitemap. All returned HTTP 200, a matching self-canonical, one H1, and no HTML meta noindex directive. This is a technical readiness check, not proof of indexing or content quality.

URL Inspection of `/best-data-removal-services` still shows no crawl and no referring page detected in Google's stored record. Google's October 4 live smartphone test fetched it successfully, allowed crawling and indexing, detected its matching canonical and a valid breadcrumb. Production already has 14 distinct pages linking to it. No repeat indexing request was submitted for this unchanged page; more technical rewrites are not supported by these findings.

Three discovered URLs had just one distinct inbound page in the production HTML scan: `/best-vpns-for-streaming`, `/guides/do-you-still-need-antivirus-on-windows-11`, and `/reviews/dashlane-review`. Changes add the streaming guide to NordVPN, Proton VPN, and Surfshark related reading; Windows 11 and Defender guides to the antivirus roundup; and Dashlane to password-manager hub reading. These links improve discovery and reader navigation without changing product conclusions, commercial destinations, or metadata experiments.

Counts include navigation links and measure distinct linking pages, not Google crawl frequency or authority. Google's old report should not be mistaken for a new production fault. Do not guarantee rankings or indexing from these changes.

## GA4 changes and verification

- Created event-scoped **Selector priority** (`priority`) and **Selector review path** (`review_path`), read back after saving. Existing provider and link-text dimensions were preserved.
- Created **CBT Organic Search sessions**, matching session medium exactly `organic`. Labeled `cbt_qa / internal` sessions are outside this comparison. It does not prove historic unlabeled owner traffic is removed.
- Owner loaded a labeled home-network QA visit and confirmed completion. Realtime comparison `Test data filter name contains Internal Traffic` showed one homepage view and one session_start; the broader view also included the separate selector/timing QA visits. This supported the existing home filter match.
- Activated the existing **Internal Traffic / Exclude / traffic_type exactly internal** filter after the owner's explicit confirmation of GA4's irreversible incoming-data warning. Readback shows **Active**. No IP address or filter match rule was changed.

These changes are forward-looking. [Custom dimensions](https://support.google.com/analytics/answer/14240153?hl=en) can take 24–48 hours to become reportable; [data filters](https://support.google.com/analytics/answer/10104470?hl=en) can take 24–36 hours to apply. Activation does not clean old traffic. Record October 4 as a measurement boundary, and continue excluding labeled QA from historical comparisons.

## Reporting workflow

Apply `CBT Organic Search sessions` to Landing page and Events reports for complete, comparable date ranges. Review organic sessions and engagement by landing page, then `selector_choice`, `selector_review_click`, `affiliate_click`, and `newsletter_submit` separately. Use the new priority/review-path fields after processing; use affiliate_provider and link_text for commercial CTA breakdowns. Counts across events are not a completed user funnel or proof of causality. Reconcile sales and approved/paid commissions in partner reporting; a GA4 affiliate click is not revenue.

For all-traffic historical reviews, explicitly exclude `cbt_qa / internal` and annotate unverified owner traffic. Do not subtract users across overlapping sessions or infer every Direct session is a reader.

## Validation and next check

All 57 tests and ESLint passed. Production build generated and validated 73 routes plus 404. After deployment, verify the five changed linking pages and the saved account settings. Recheck Google's stored URL status after its next crawl; do not repeatedly submit unchanged URLs. Prioritize original evidence on already visible reviews rather than adding more near-duplicate articles.
