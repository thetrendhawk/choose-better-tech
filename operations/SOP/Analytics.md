# SOP: Analytics

Version: 1.1  
Status: Active  
Owner: Choose Better Tech  
Last Updated: 2026-08-26

## Measurement clarification - 2026-09-07

The historical browser event named `newsletter_signup` fired on native form submission, before Mailchimp acceptance or double opt-in confirmation. Do not use that event alone as proof of a completed signup, including after the August 13 hostname-boundary fix. The September maintenance change proposes `newsletter_submit` for this action; its production-effective date must be recorded after deployment. Reserve `newsletter_signup` for verified provider confirmation. A submit event alone does not qualify toward the frozen organic-intent goal. The independently documented July completed signup is not negated by this instrumentation finding.

`affiliate_click` measures commercial intent, not a sale or commission. The September 7 controlled Optery activation is QA and must be excluded. See `docs/audits/cbt-analytics-execution-2026-09-07.md` for current account observations, exact QA labeling, and remaining verification steps. This clarification does not change goal thresholds or authorize new tracking configuration.

## Purpose

Define how analytics and webmaster tools are reviewed for business decisions, including measurement-change boundaries that affect comparability.

## Tools

| Tool | Purpose | Review Cadence |
| --- | --- | --- |
| Google Analytics | Traffic, engagement, source attribution, and conversion context. | Weekly and monthly |
| Google Search Console | Organic clicks, impressions, queries, pages, and indexing. | Weekly |
| Bing Webmaster Tools | Bing indexing, search visibility, and technical search signals. | Weekly |
| Affiliate / partner reporting | Authoritative click, conversion, commission, and payment evidence where available. | Monthly and at goal reviews |
| Future Dashboards | Consolidated business reporting. | Monthly |

## Measurement Boundaries

### 2026-08-13 production analytics boundary

PR #77 established the current trustworthy production conversion-measurement implementation on 2026-08-13:

- GA4 loads and emits events only on approved production hostnames;
- preview and non-production hostnames are excluded by implementation and regression tests;
- `affiliate_click` and newsletter signup events are explicitly tracked;
- production/non-production analytics behavior is covered by automated checks.

Treat 2026-08-13 as the effective boundary for clean comparison of these conversion events. Earlier GA4 traffic may be retained as historical context, but do not compare pre-boundary and post-boundary conversion counts as if the instrumentation were unchanged.

Search Console is independent of this GA4 instrumentation boundary and remains the primary source for Google organic discovery.

## Evidence Rules

- Record source, date range, retrieval date, filters, and metric definition for material observations.
- Do not treat missing data as zero unless the authoritative source was checked for the exact period.
- Do not infer affiliate commissions from `affiliate_click` events; use partner/network reporting for commissions.
- Exclude owner, QA, synthetic, preview, and known test traffic from reader-intent evidence where technically possible or explicitly annotate the limitation.
- Preserve historical snapshots rather than overwriting them when tracking definitions change.
- Separate aggregate Page Indexing counts from URL-level Search Console Inspection evidence; coverage reports can lag.

## Weekly Review

- Check Search Console impressions, clicks, queries, pages, and material indexing changes.
- Check GA4 production traffic and high-intent events for obvious breaks or anomalies.
- Check whether new events or deployments changed measurement definitions.
- Identify specific distribution, snippet, internal-link, or conversion-path opportunities supported by evidence.
- Update `KPI_DASHBOARD.md` when a material verified observation is obtained.

## Monthly Review

- Compare complete, like-for-like Search Console periods.
- Review source-attributed GA4 traffic and reader-intent events using only comparable instrumentation periods.
- Review affiliate partner/network evidence separately from site-side click tracking.
- Identify top-performing queries, landing pages, and content clusters where sample size is meaningful.
- Decide whether existing pages need refresh, consolidation, internal-link improvement, or no change.
- Review progress against `GOALS.md`; do not redefine thresholds after observing results without an explicit amendment.

## Current Goal Relationship

For the 2026-08-26 through 2026-11-30 CBT organic-validation goal:

1. Search Console is authoritative for the primary organic-click target and indexing exposure condition.
2. GA4 is used for source-attributed high-intent actions from the clean post-2026-08-13 instrumentation era.
3. Affiliate/partner reporting is authoritative for commissions and partner-side conversions.
4. Repository records establish implementation dates, route inventory, and goal history; they do not substitute for external account metrics.
