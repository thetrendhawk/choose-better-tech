# Choose Better Tech Operating-System Gap Review

**Review date:** 2026-07-23  
**Scope:** First formal review of the 17-system Choose Better Tech operating system and its readiness to operate, scale content, and duplicate safely.  
**Owner:** Choose Better Tech  
**Branch:** `audit/operating-system-review-2026-07`

## Evidence boundary

This review is evidence-led and conservative. It uses the canonical operating-system documents, project and content dashboards, registry and publishing standards, source files, scripts, Git history, merged pull-request records, and owner-supplied production incident facts. A documented control is not treated as measured, repeatable, or scalable without execution evidence. “Unknown” means that the repository did not establish the fact; it is not a finding that the control is absent.

No private affiliate identifiers, credentials, measurement IDs, tokens, or full tracked destinations are reproduced here.

## Executive conclusion

**Overall maturity: 3 — Documented, with several 4 — Tested pockets and isolated 5 — Measured evidence.** The repository has an unusually substantial written operating model: editorial standards, research and claim controls, centralized affiliate governance, route generation/checks, explicit analytics tracking, production QA records, rollback policy, and a portfolio operating-system document. The limiting factor is not lack of intent or documentation; it is the missing evidence that the controls are independently owned, continuously measured, recoverable, financially reconciled, and portable to a second site.

**Safe to continue current operation:** **Yes.** Current operation may continue with the existing manual production verification and fail-closed safeguards.

**Safe to scale content volume:** **Conditional.** Editorial and validation controls are documented and exercised, but indexing, deployment-trigger reliability, capacity, analytics reporting, revenue reconciliation, and recovery are not sufficiently measured for unbounded scale.

**Safe to duplicate into another site:** **No.** The OS is documented as a reusable framework, but no first duplicate has been completed and the separation of brand, domain, analytics, legal, affiliate, credentials, deployment, and portfolio data has not been demonstrated. Duplication should remain gated until the first duplicate-readiness checklist below is satisfied.

### Executive classifications

#### Critical now

No confirmed critical findings at the time of review. Several high-priority gaps exist, but the repository does not prove an active near-term material failure, exposed credential, legal breach, unrecoverable production state, corrupted attribution currently driving business decisions, or confirmed financial loss.

#### Important before scale

- Production deployment trigger and rollback/restore evidence.
- Security, backup, DNS, environment, credential, and recovery readiness.
- Analytics reporting, conversion reconciliation, and revenue attribution.
- Network commission reconciliation and a financial ledger.
- External indexing/Search Console verification and a repeatable anomaly-response record.
- Portable separation of project-specific values from reusable site machinery.
- Named ownership, review cadence, and second-operator handoff that do not depend on memory or chat history.
- Capacity and cost controls for research, independent review, QA, and production verification.

The PR #54 deployment trigger was missed, detected, and corrected manually. No root cause is established. This is a reliability gap requiring evidence, not evidence that production is currently unsafe. The `affiliate_click` incident was corrected through the dataLayer fallback and verified directly in GA4 Realtime; it is a lesson and control gap, not an active attribution failure.

#### Optimization later

- More formal audience and brand measurement once the traffic and revenue baselines are reliable.
- Deeper performance/accessibility monitoring beyond the current route and browser checks.
- Portfolio-level cluster allocation after a second property exists and comparable data is available.

#### Unnecessary complexity to review

- Repeating broad production audits for every low-risk intermediate edit creates maintenance cost without equivalent risk reduction; the existing risk-based audit rule should remain the governing safeguard.
- Several overlapping operational records and approval surfaces may duplicate status maintenance. Consolidation should be considered only after mapping which record is authoritative; no safeguard should be removed by this review.

## System inventory

Maturity scale: **1 Absent, 2 Ad hoc, 3 Documented, 4 Tested, 5 Measured, 6 Repeatable, 7 Scalable.** “Recovery” means an actionable recovery path is documented and evidenced, not merely that a rollback sentence exists.

### 1. Strategy and niche — maturity 3, confidence high

- **Evidence/existence:** Mission, constitution, cluster plans, project status, content calendar, and portfolio OS exist.
- **Missing/owner gap:** No independently measured strategy-to-profit allocation model; ownership is concentrated in Choose Better Tech.
- **KPI/failure signal:** Editorial asset counts and traffic/indexing are tracked; portfolio return by cluster and stalled strategic priorities are not.
- **Validation/recovery/cadence:** Quarterly OS review and roadmap reconciliation are documented; strategy rollback/reallocation is not operationally recorded. Review quarterly and after material failure.
- **Portability/next action:** Concepts are portable, decisions are CBT-specific. Define the minimum strategy scorecard before duplication. **Confidence: High.**

### 2. Audience, positioning, and brand — maturity 3, confidence medium

- **Evidence/existence:** Reader-first constitution, brand/domain records, positioning language, and audience-oriented content standards exist.
- **Missing/owner gap:** Canonical Business Identity Kit is still placeholder-only; validated audience segments and owner-approved positioning tests are not evidenced.
- **KPI/failure signal:** Page traffic and impressions are available; qualified-reader rate, return readership, and message resonance are missing. Failure is traffic without engaged commercial intent.
- **Validation/recovery/cadence:** Editorial review validates fit qualitatively; no repeatable audience research or recovery record. Review quarterly.
- **Portability/next action:** Brand and domain are project-specific. Complete the identity kit and define one audience-quality KPI. **Confidence: Medium.**

### 3. Research and evidence — maturity 4, confidence high

- **Evidence/existence:** Research standard, canonical sources, claim ledgers, volatile-claim register, monetization research standard, and independent review protocol exist and are used in recent assets.
- **Missing/owner gap:** No system-wide measure of source freshness, correction rate, or research cost; review ownership remains concentrated.
- **KPI/failure signal:** Claim review counts and source links are recorded; stale claims, unsupported claims, and late corrections are the failure signals.
- **Validation/recovery/cadence:** Per-asset source/claim review and correction policy are documented; correction/retraction execution is not demonstrated at scale. Review on publication, on volatility reminders, and quarterly.
- **Portability/next action:** Standards are portable; source sets and claims are not. Measure stale-claim and correction rates. **Confidence: High.**

### 4. Editorial production and independent review — maturity 4, confidence high

- **Evidence/existence:** Publishing workflow, article scorecard, independent review, authorship/AI policy, capacity/batch policy, and recent QA records exist.
- **Missing/owner gap:** No demonstrated multi-owner handoff or measured cycle time/cost; solo operation is a concentration risk.
- **KPI/failure signal:** Review scores and publication status are recorded; missed review gates, unsupported conclusions, and queue aging are failure signals.
- **Validation/recovery/cadence:** Fail-closed publication contract and per-page reviews are used. Revert/revise is documented; reviewer coverage and recovery drills are not. Review each publication and monthly.
- **Portability/next action:** Templates are portable; editorial judgment and source corpus are not. Record cycle time and reviewer capacity. **Confidence: High.**

### 5. SEO, indexing, and discovery — maturity 4, confidence medium

- **Evidence/existence:** Generated routes/sitemap, canonical checks, IndexNow records, Search monitoring policy, content dashboard, and six confirmed indexed assets are documented.
- **Missing/owner gap:** GSC/Bing sitemap receipt and broad indexing status still require external verification; no stable query-to-revenue view.
- **KPI/failure signal:** July 8–17 baseline records 180 impressions and 1 organic click; index loss, canonical drift, and impression-without-click are failure signals.
- **Validation/recovery/cadence:** Route, sitemap, canonical, robots, and production checks exist; external search-console verification and rollback response records are incomplete. Review weekly/monthly.
- **Portability/next action:** Technical checks are portable; domain/search history is not. Verify submissions and establish a query/index anomaly log. **Confidence: Medium.**

### 6. Architecture and routing — maturity 4, confidence high

- **Evidence/existence:** Vite/React app, centralized route data, generated Vercel routes, route-check script, build, and production route records exist.
- **Missing/owner gap:** Project-specific routes, brand values, and deployment configuration are intermixed enough that duplication has not been proven safe.
- **KPI/failure signal:** Build and generated-route checks pass; 404s, deep-route failures, wrong canonicals, and route drift are failure signals.
- **Validation/recovery/cadence:** `npm run build` and `npm run check:generated-routes` are executable controls; rollback is documented but restore execution is not. Validate every routing change and after deploy.
- **Portability/next action:** Core patterns are portable; route/content/domain values are not. Produce a separation map before duplication. **Confidence: High.**

### 7. Accessibility and UX — maturity 4, confidence medium

- **Evidence/existence:** Responsive desktop/mobile and no-overflow checks are recorded across recent pages; shared article patterns are established.
- **Missing/owner gap:** No repository-wide automated accessibility score or named accessibility owner/cadence is evidenced.
- **KPI/failure signal:** Structural render and overflow checks pass; keyboard, contrast, semantics, and assistive-technology regressions are not continuously measured.
- **Validation/recovery/cadence:** Browser QA is used for material pages; repeatable accessibility regression and recovery records are missing. Validate shared components and material page changes.
- **Portability/next action:** Layout conventions are portable. Add an evidence-backed accessibility baseline before a shared-component scale event. **Confidence: Medium.**

### 8. Performance and reliability — maturity 4, confidence medium

- **Evidence/existence:** Production browser checks, builds, direct refresh checks, and sitewide audit tooling exist; the recent 68-route/two-viewport audit completed with 0 errors and 0 warnings.
- **Missing/owner gap:** No sustained performance budget, uptime/error monitoring, or incident SLA record is present.
- **KPI/failure signal:** Build/audit status is recorded; latency, Web Vitals, hosting errors, and availability are not.
- **Validation/recovery/cadence:** Pre/post-deploy checks exist; hosting recovery and incident drills do not. Review after material deploy and monthly.
- **Portability/next action:** Checks are portable, hosting state is not. Define minimal uptime/performance evidence. **Confidence: Medium.**

### 9. Security, backups, and recovery — maturity 1, confidence low

- **Evidence/existence:** This is a repository-evidence score. Policies mention rollback/kill switches, private runtime values, and no-secret rules. No repo backup, environment inventory, restore test, DNS recovery test, credential rotation record, or incident-response record was found in the repository. That absence does not prove that GitHub, Vercel, registrar, or account-level protections are absent.
- **Missing/owner gap:** Recovery ownership, backup locations, retention, access review, secret scanning, dependency response, and restore proof are unknown.
- **KPI/failure signal:** No KPI. Credential loss, compromised dependency, unavailable Vercel project, DNS loss, or unrecoverable environment is the failure signal.
- **Validation/recovery/cadence:** Policy-level rollback exists; executable restore validation is absent. Review monthly and after any security or hosting incident.
- **Portability/next action:** None is safe to assume portable. Create a non-secret recovery inventory and run a restore exercise before duplication. **Confidence: Low.**

### 10. Analytics and attribution — maturity 4, confidence medium

- **Evidence/existence:** Explicit `affiliate_click` implementation and tests are present. PR #54 initially assumed `window.gtag`; production required a compatible dataLayer fallback in PR #57. Direct `affiliate_click` was verified in GA4 Realtime; the old broad GA4-created event rule was then deleted.
- **Missing/owner gap:** Custom dimensions, key-event configuration, reporting usability, data retention, conversion reconciliation, and revenue attribution are not evidenced. The `affiliate_click` incident was corrected through the dataLayer fallback and verified in GA4 Realtime; it remains a lesson and control gap, not an active attribution failure. The separate missed production trigger was detected and corrected manually; its root cause is unknown.
- **KPI/failure signal:** Page views, clicks, and event delivery can be observed; partner conversions, revenue, attribution completeness, and event-loss rate are missing. The failure signal is a CTA click without a usable downstream record.
- **Validation/recovery/cadence:** Unit/component tests, dataLayer/gtag preference, and direct Realtime verification exist; production report reconciliation and recovery drill do not. Review after analytics/affiliate changes and monthly.
- **Portability/next action:** Event contract is portable; measurement configuration and property are project-specific. Define an analytics QA checklist and reconciliation owner. **Confidence: Medium.**

### 11. Affiliate and partner management — maturity 4, confidence medium

- **Evidence/existence:** Central affiliate registry, application registry, playbook, product/network mappings, disclosures, private redirect pattern, shared AffiliateButton, and affiliate tests exist. Active Proton mappings are VPN CJ, Mail CJ, Pass MaxBounty, Drive CJ, Unlimited MaxBounty.
- **Missing/owner gap:** Partner approval/terms refresh, link-health history, click-to-conversion reconciliation, approved/paid commission states, and revenue owner are not measured.
- **KPI/failure signal:** Registry status and CTA click events exist; broken destinations, stale terms, network rejection, conversion gaps, and unpaid balances are failure signals.
- **Validation/recovery/cadence:** Registry/CTA checks and disclosure review are performed; network-side reconciliation and destination recovery are not evidenced. Review monthly and quarterly with partner reconciliation.
- **Portability/next action:** Governance is portable; programs, destinations, terms, and disclosures are project-specific. Add a privacy-safe partner reconciliation record. **Confidence: Medium.**

### 12. Legal, disclosures, privacy, and corrections — maturity 3, confidence medium

- **Evidence/existence:** Editorial, disclosure, privacy, corrections/date, and affiliate policies exist; public editorial-policy/corrections page is still pending.
- **Missing/owner gap:** No documented legal review cadence, evidence of public corrections workflow, or complete privacy/runtime configuration inventory.
- **KPI/failure signal:** Disclosure presence is checked; correction aging, privacy-request handling time, and policy review completion are missing.
- **Validation/recovery/cadence:** Page-level disclosure and privacy checks exist; legal incident recovery is not demonstrated. Review on material policy/affiliate change and quarterly.
- **Portability/next action:** Policy skeletons are portable; identity, jurisdiction, disclosures, and privacy tools are not. Complete the public trust surface and review ownership. **Confidence: Medium.**

### 13. Publishing, deployment, and rollback — maturity 3, confidence medium

- **Evidence/existence:** PR workflow, templates, changelog, production verification records, Vercel deployment records, and rollback/kill-switch policy exist.
- **Missing/owner gap:** Automatic production deploy reliability, rollback execution, deployment approval evidence, and post-incident records are incomplete. After PR #54, the expected production trigger was missed, detected, and corrected by manual deployment; no root cause is established without platform evidence. This is a reliability gap, not evidence that production is currently unsafe.
- **KPI/failure signal:** Successful deployment and route verification are recorded; missed trigger, drift between main and production, and unverified rollback are failure signals.
- **Validation/recovery/cadence:** Build, route, browser, sitemap, and production checks are documented; a tested rollback runbook is not. Validate each production change and review monthly.
- **Portability/next action:** Workflow principles are portable; Vercel/project/DNS settings are not. Capture trigger, approval, rollback, and restore evidence. **Confidence: Medium.**

### 14. Testing and site audits — maturity 4, confidence high

- **Evidence/existence:** Lint, Vitest, build, generated-route checks, Playwright audit tooling, sitewide audit policy, and recent audit records exist.
- **Missing/owner gap:** No trend dashboard for defects, false positives, audit duration, or production escapes; broad audit scope may be disproportionate for low-risk edits.
- **KPI/failure signal:** Current checks and recent audit status pass; escaped regressions, repeated manual work, and stale audit assumptions are failure signals.
- **Validation/recovery/cadence:** Routine checks run in development; full audit is risk-based and end-of-branch. Recovery is reverting/fixing failed changes, not yet measured. Review after material changes and quarterly.
- **Portability/next action:** Tooling is portable. Keep safeguards, but define risk tiers and measure recurring cost. **Confidence: High.**

### 15. Revenue, costs, and profitability — maturity 1, confidence high

- **Evidence/existence:** KPI dashboard explicitly records affiliate revenue as not measured and targets as TBD.
- **Missing/owner gap:** Commissions earned/approved/paid, network reconciliation, expenses, production cost, revenue per page/cluster/provider, profit, and cash flow are absent or unknown.
- **KPI/failure signal:** None is operationally measured. Traffic or clicks being mistaken for conversions or revenue is the primary failure signal.
- **Validation/recovery/cadence:** No financial validation or recovery record found. Review monthly and quarterly with partner statements.
- **Portability/next action:** A privacy-safe financial ledger is portable; values are project-specific. Establish the minimum revenue/cost ledger before scale or duplication. **Confidence: High.**

### 16. Documentation and knowledge transfer — maturity 3, confidence high

- **Evidence/existence:** The portfolio OS, review template, constitution, standards, dashboards, changelog, and project status form a substantial knowledge base.
- **Missing/owner gap:** There is no demonstrated handoff, backup operator, stale-document alert, or evidence that a new operator can recover without chat/memory.
- **KPI/failure signal:** Document presence and update dates are visible; stale instructions, contradictory records, and blocked handoffs are failure signals.
- **Validation/recovery/cadence:** Cross-document reconciliation occurs periodically; a fresh-operator walkthrough is not recorded. Review monthly and after material process changes.
- **Portability/next action:** Framework is portable; project facts are not. Run a cold-start handoff exercise and designate an alternate owner. **Confidence: High.**

### 17. Duplication and portfolio operations — maturity 2, confidence low

- **Evidence/existence:** The portfolio OS defines reusable versus project-specific layers and duplication criteria, but no second site or duplicate deployment exists.
- **Missing/owner gap:** No proven separation of domain/brand, analytics, legal, affiliate, credentials, navigation, clusters, deployment, or records; no portfolio allocation or shared-services owner.
- **KPI/failure signal:** None. Cross-site contamination, shared secrets, wrong analytics property, wrong disclosures, or unportable assumptions are failure signals.
- **Validation/recovery/cadence:** The pre-duplicate checklist is documented; it has not been executed against a real duplicate. Review before and after the first duplicate, then quarterly.
- **Portability/next action:** Only the documented framework is presently portable. Produce a project-variable inventory, clean duplicate, and separation test before duplication. **Confidence: Low.**

## Outcome chain

| Outcome | Status | Evidence/gap |
|---|---|---|
| Published | Measured | Publication and content dashboards record routes, status, QA, and deployment evidence. |
| Indexed | Partial | Six assets were confirmed in the documented window; broader GSC/Bing verification remains open. |
| Search impressions | Measured | 180 impressions in the verified July 8–17 baseline. |
| Qualified visits | Partial | One organic click is recorded; qualified-reader definition and segmentation are not established. |
| Engaged readers | Not measured | No reliable engagement KPI is documented. |
| Affiliate/commercial actions | Partial | CTA/event instrumentation exists; complete commercial-action reporting is not reconciled. |
| Partner-recorded conversions | Unknown | Network-side conversion evidence is absent from the repository. |
| Collected revenue | Not measured | Affiliate revenue is explicitly not measured in the KPI dashboard. |
| Profit | Not measured | Cost, cash flow, and profit records are absent. |

## Unknown-unknowns review

The highest-risk uncovered areas are hosting/project recovery, DNS and environment recovery, access rotation, external analytics configuration, partner-side conversion/revenue records, Search Console ownership and receipts, uptime/performance monitoring, accessibility regression coverage, legal/correction operations, and a second-operator handoff. The site can appear operational while these fail silently.

The current controls also create false confidence if page views, impressions, CTA clicks, successful builds, or a clean audit are treated as evidence of qualified traffic, conversions, revenue, or profit. The PR #54/#57 analytics incident is a concrete example: a local `window.gtag` assumption passed initial implementation tests but did not match the production integration until the dataLayer fallback was added.

At five sites, the likely breakpoints are project-variable separation, analytics-property selection, affiliate disclosures and destinations, credentials/env ownership, deployment/rollback settings, search-console verification, and portfolio-level revenue reconciliation. These are not inferred to be broken today; they are untested assumptions.

## First duplicate-readiness gates

Before creating a second site, demonstrate: (1) a complete project-variable inventory with no shared secrets or accidental CBT values; (2) separate domain, analytics, legal, affiliate, navigation, and deployment records; (3) tested backup/restore and rollback; (4) analytics through commercial outcome and partner reconciliation; and (5) a clean duplicate with the same lightweight validation and an independent operator walkthrough.

## Top five exact actions

1. Create and test a non-secret production recovery inventory covering repo backup, Vercel/project access, environment names, DNS/domain, credential rotation, restore steps, and incident ownership.
2. Record the production deployment trigger path and a verified rollback drill; investigate the PR #54 missed-trigger incident with platform evidence before assigning root cause.
3. Define an analytics QA and reporting contract: event parameters, GA4 custom dimensions/key events, Realtime verification, data retention, and monthly reconciliation from clicks through partner conversions.
4. Establish a privacy-safe affiliate and revenue ledger for network, product, destination health, terms date, clicks, conversions, approved/paid commission, expenses, and profit.
5. Complete external indexing verification and run a cold-start operator/duplicate-readiness exercise that proves the documented OS works without chat or memory.

## Owner-input questions

- Who besides the current owner can execute a production rollback, restore hosting access, rotate credentials, and verify DNS?
- Where are authoritative Vercel, domain, Search Console, GA4, and network recovery instructions stored, without storing secrets in the repository?
- Which GA4 reports/custom dimensions/key events are production-approved, and who reconciles them to partner statements?
- What are the actual content-production costs and minimum acceptable contribution margin by page or cluster?
- Which first duplicate is intended, and what project-specific values must be isolated before it begins?

## Review decision

Current operation may continue **under the existing manual production verification and fail-closed safeguards**. Content scaling remains **conditional** on closing recovery, analytics/revenue, indexing, and capacity gaps. Duplication remains **not approved** until the five gates above are evidenced. The systems intentionally remain lightweight where the risk is low, while production, security, attribution, and financial controls require stronger evidence before scale.

## Validation record

- `git diff --check`: passed after the audit document was added.
- Scope check: only this audit document is added relative to current `origin/main`; no runtime code, configuration, routes, content pages, analytics implementation, affiliate destination, disclosure, or production behavior changed.
- Full Playwright site audit: not run, as this is documentation-only work and the requested scope excludes it. The existing recent audit result was cited as evidence rather than rerun.
