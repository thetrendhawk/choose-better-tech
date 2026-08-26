# Choose Better Tech Goals

Version: 1.1
Status: Active — organic validation goal frozen
Owner: Choose Better Tech
Date: 2026-08-26

## Purpose

Maintain current SMART goals separately from the durable project charter so goals can change without rewriting CBT's mission, values, or strategic identity.

## Goal-Setting Rules

Every major goal should include:

- a specific outcome;
- a verified baseline where practical;
- a measurable target;
- a deadline;
- leading indicators;
- an outcome metric;
- an evidence source;
- a decision threshold or interpretation rule;
- a status.

Activity metrics such as page count, publishing cadence, or feature count may support a goal but should not substitute for an outcome unless the activity itself is the intended result.

Once foundational capability is sufficient, additional building counts as progress only when it materially advances a defined outcome, tests an important assumption, protects a demonstrated capability, or resolves a genuine blocker.

## Portfolio Decision Rule

At the end of a material goal period, assign one of the following decisions:

- **SCALE** — evidence is strong enough to justify materially greater investment.
- **CONTINUE** — evidence is encouraging or the experiment remains incomplete; maintain investment.
- **MODIFY** — the underlying opportunity remains plausible, but the current approach should change.
- **PAUSE** — expected future value no longer justifies the resources required relative to better opportunities.

A well-run experiment that shows a hypothesis is wrong can still be a successful project outcome if it prevents larger future waste.

## Historical Goal Review

### Phase 1 — First commercial proof

Earlier project planning defined the primary Phase 1 outcome as earning the first affiliate commission. Supporting milestones included launching the branded site, submitting the Proton VPN affiliate application, publishing initial cornerstone content, establishing social channels, publishing the first content, and generating the first click, lead, and commission.

Current evidence as of 2026-08-26 supports the following reconciliation:

| Historical milestone | Status | Evidence / interpretation |
| --- | --- | --- |
| Branded website live | ACHIEVED | `choosebettertech.com` is live with a substantial production content library. |
| Initial content published | ACHIEVED | The site materially exceeds the original initial-publication milestone. |
| 20–30 published pages / 2–3 software clusters | ACHIEVED | Repository records show substantially more than 30 editorial assets across multiple approved clusters. |
| Editorial standards / authority infrastructure | ACHIEVED | Binding editorial, research, review, corrections, monetization-independence, and quality standards are active. |
| Proton VPN affiliate application / relationship | ACHIEVED | Current repository records identify an active Proton Partners relationship. |
| First lead / newsletter signup | ACHIEVED | A completed newsletter signup and checklist delivery were recorded in July 2026. |
| First verified affiliate click | NOT YET VERIFIED | Tracking infrastructure exists, but no preserved evidence currently proves a real visitor-generated affiliate click event. |
| First affiliate commission | NOT YET VERIFIED | No preserved evidence currently proves an earned affiliate commission. The original Phase 1 primary outcome remains open. |
| Pinterest / Instagram / YouTube setup | UNVERIFIED / NON-BLOCKING | Earlier planning included these channels, but current evidence is insufficient to mark all of them complete. |

## Current Goal Period

Target period: 2026-08-26 through 2026-11-30.

### Strategic question

Can CBT's rigorous editorial system produce meaningful organic discovery and measurable reader intent at a level that validates continued investment in organic acquisition?

### Baseline and measurement provenance

The most recent owner-confirmed account snapshot available when this goal was frozen is dated **2026-08-12**:

- Google Search Console indexed pages: **32**.
- GA4 Google-organic sessions in the preceding 28 days: **3**.

Additional committed Search Console evidence predates that account snapshot and provides important context:

- On **2026-08-05**, owner URL Inspection checks reduced the active priority indexing-remediation cohort to **one unresolved URL: `/best-data-removal-services`**. Other previously suspected priority URLs were owner-confirmed indexed.
- `/guides/how-long-does-data-removal-take` was owner-confirmed indexed and its recorded three-month Search Console view through 2026-08-03 showed **122 impressions, 0 clicks, average position 10.0**. This is a page-level signal and must not be treated as property-wide totals.
- The earlier verified July 8–17 property-level Search Console window recorded **1 organic click and 180 impressions**.

The exact 2026-08-26 live Search Console and GA4 account values were not available through the connected tools used when the goal was frozen. The dated observations are preserved rather than extrapolated.

### Analytics comparability boundary

PR #77 merged on **2026-08-13** and established the current trustworthy production conversion-measurement implementation, including production-host restrictions plus explicit `affiliate_click` and newsletter-signup tracking.

Therefore:

- Search Console is the authoritative primary source for the organic-discovery target and is not affected by the GA4 implementation boundary.
- GA4 traffic before 2026-08-13 may remain useful as historical context, but pre- and post-boundary conversion counts must not be compared as if instrumentation were unchanged.
- Qualifying high-intent actions for this goal should come from the clean post-2026-08-13 measurement era, with owner/QA/test/synthetic traffic excluded or explicitly annotated.
- Partner/network reporting remains authoritative for actual conversions and commissions.

A later authoritative account read may refresh observational baseline values without changing the frozen November 30 target or decision thresholds.

## SMART Goal 1 — Validate Organic Discovery and Reader Intent

**Objective:** Demonstrate that CBT's existing editorial system can repeatedly attract qualified Google organic visitors and produce observable reader intent without relying on a publishing-volume target.

**Primary target:** By **2026-11-30**, achieve **at least 20 Google Search Console organic clicks in a trailing 28-day window**.

**Exposure / indexing condition:** By **2026-11-30**, have **at least 50 canonical editorial URLs indexed in Google Search Console**. Indexing is a supporting exposure condition, not the primary business outcome.

**Reader-intent target:** By **2026-11-30**, record **at least 2 verified high-intent actions attributable to organic users**, excluding QA, test, owner, or synthetic traffic.

A qualifying high-intent action is one of:

- a real `affiliate_click` event with organic source attribution;
- a real newsletter signup with organic source attribution;
- a partner-reported conversion or commission that can be tied to organic acquisition with sufficiently strong evidence.

At least one qualifying action should represent commercial intent (`affiliate_click`, conversion, or commission) rather than both actions being newsletter signups.

### Leading indicators

Review these as diagnostics, not substitute outcomes:

- Search Console impressions in the trailing 28 days;
- number of indexed canonical editorial URLs;
- number of pages receiving at least one impression;
- number of pages receiving at least one click;
- query and landing-page concentration;
- CTR and average position where sample size is sufficient to interpret them;
- GA4 Google-organic sessions from comparable instrumentation periods;
- verified organic-source `affiliate_click` and newsletter events;
- partner-side click/conversion evidence where available.

### Evidence sources

Use authoritative evidence in this order where applicable:

1. Google Search Console for Google organic impressions, clicks, indexed-page state, queries, and landing pages.
2. GA4 production reporting for source-attributed sessions and high-intent events from comparable instrumentation periods, subject to the site's consent model.
3. Authorized affiliate-network or partner reporting for clicks, conversions, commissions, and payment state.
4. Repository records for deployment, tracking implementation, editorial inventory, and preserved goal history.

Do not treat missing analytics evidence as zero unless the authoritative source has been checked for the stated period and supports that conclusion.

### Decision thresholds at 2026-11-30

#### SCALE

Consider materially increasing investment in the organic channel only if all of the following are true:

- at least **50 Search Console clicks** in the trailing 28 days;
- at least **50 indexed canonical editorial URLs**;
- at least **3 verified high-intent organic actions**;
- at least **1 commercial-intent action** among those high-intent actions;
- no material editorial-quality, tracking-integrity, or indexability defect explains the result.

A verified first affiliate commission strengthens a SCALE decision but is not required if the other SCALE evidence is present.

#### CONTINUE

The goal is considered achieved at the CONTINUE level if all of the following are true:

- at least **20 Search Console clicks** in the trailing 28 days;
- at least **50 indexed canonical editorial URLs**;
- at least **2 verified high-intent organic actions**;
- at least **1 commercial-intent action** among those high-intent actions.

This justifies continued investment and another bounded goal period, not a claim that CBT has proven a scalable business.

#### MODIFY

Modify the organic-acquisition approach rather than simply publish more content if any of the following applies:

- Search Console reaches **8–19 clicks** in the trailing 28 days;
- impressions or indexed coverage grow materially but clicks remain below the CONTINUE threshold;
- organic traffic grows but verified reader-intent actions remain below target;
- a small number of pages or queries account for nearly all discovery, suggesting a narrower opportunity than the current content strategy assumes;
- a material indexability, snippet/CTR, internal-linking, search-intent, measurement, or conversion-path issue is identified.

A MODIFY result should favor query-led refreshes, internal-link improvements, title/snippet testing, consolidation, or conversion-path improvements before expanding content breadth.

#### PAUSE

Consider pausing major additional investment in the current organic-acquisition strategy if, after at least **50 canonical editorial URLs have been indexed for 28 days**, all of the following remain true at the deadline:

- fewer than **8 Search Console clicks** in the trailing 28 days;
- fewer than **1,000 Search Console impressions** in the trailing 28 days;
- fewer than **2 verified high-intent organic actions**;
- no unresolved material technical/indexability defect explains the weak result.

If the 50-indexed-URL exposure condition has not been met because of a genuine technical or indexing blocker, classify and resolve that blocker instead of using the PAUSE rule to claim lack of audience demand.

### Execution constraints

- There is **no page-count or publishing-cadence quota** for this goal.
- Do not create a new content cluster solely to increase output.
- Prefer low-cost, evidence-led improvements to already published assets before broad expansion.
- New content is justified only when Search Console/query evidence, a documented content gap, or another approved strategic reason supports it.
- Preserve CBT's existing editorial, research, corrections, monetization-independence, and quality standards.
- Do not change the November 30 targets after observing results unless the goal is explicitly amended and the original thresholds remain preserved for audit.

**Status:** ACTIVE — targets frozen 2026-08-26; measurement provenance reconciled 2026-08-26.

## Review Cadence

- **2026-09-30:** first monthly evidence review.
- **2026-10-31:** second monthly evidence review.
- **2026-11-30:** formal outcome review and SCALE / CONTINUE / MODIFY / PAUSE decision.
- Review leading indicators between checkpoints only when they can support a specific decision or action.
- Preserve completed goal periods so historical expectations and outcomes remain auditable.
