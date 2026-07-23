# Analytics QA and Reporting Contract

**Version:** 1.0  
**Status:** Active  
**Owner:** Choose Better Tech; Aaron is the current sole reporting owner  
**Effective:** 2026-07-23

## Purpose and boundary

This contract turns the existing `affiliate_click` implementation into a repeatable measurement and reconciliation process. It governs QA, evidence, reporting, and decision-making. It does not change runtime code, GA4 configuration, affiliate destinations, environment variables, or production.

The event is a commercial-action signal. It is not a conversion, commission, or revenue signal. Affiliate availability must not influence editorial conclusions, rankings, or CTA placement.

## Evidence baseline

The repository currently supports:

- `src/utils/affiliateTracking.ts` for event delivery.
- `src/components/affiliate/AffiliateButton.tsx` for shared CTA behavior.
- Component and utility tests for genuine affiliate CTAs, non-affiliate external links, internal fallbacks, keyboard activation, missing/throwing analytics, and same-native-event deduplication.
- `window.gtag` preference with compatible `window.dataLayer` fallback.
- Verified production delivery of `affiliate_click` in GA4 Realtime after PR #54 and PR #57 corrected the original production interface mismatch.
- Centralized affiliate registry/playbook and existing KPI/content dashboards.

The production delivery incident is corrected and is not an active tracking failure. Reporting configuration, partner conversion reconciliation, and revenue attribution remain incomplete until separately evidenced.

## 1. Canonical event

### Event name

`affiliate_click`

### It should fire when

- A user activates a genuine affiliate CTA resolved by the centralized affiliate registry.
- The CTA is rendered through the shared `AffiliateButton` and the resolved record is an affiliate link.
- Mouse or native keyboard activation reaches the CTA handler.
- The event is sent at most once for the same native activation event.

### It must not fire when

- The resolved record is a non-affiliate external link.
- The resolved record is an internal fallback, pending record, or other non-affiliate destination.
- The click is an ordinary link outside the shared affiliate CTA behavior.
- Analytics is unavailable or throws; navigation must continue safely and no retry loop may be introduced.

### Duplicate expectation

The same native activation event must emit no more than one event. The implementation uses a `WeakSet<Event>` to deduplicate the native event across handler paths. A separate user activation is a separate measurement opportunity.

## 2. Required event parameters

The current implementation sends these parameters:

| Parameter | Repository source | Meaning |
|---|---|---|
| `affiliate_provider` | Registry record `provider` | Central provider/network product key used by the CTA. |
| `affiliate_destination` | Registry record `destination`, falling back to `href` | Approved destination or product/destination identifier. Private destinations are not reproduced in this contract. |
| `link_url` | Resolved CTA `href` | URL or internal redirect path used by the activated link; do not copy private values into reports. |
| `link_text` | Rendered CTA children | Visible CTA text passed to `AffiliateButton`. |
| `page_path` | `window.location.pathname` | Page path at activation time. |

No measurement ID, account identifier, raw private affiliate URL, or private environment value belongs in this contract or a public report.

## 3. QA procedure

### Local/component QA

Every tracking or shared CTA change must retain tests that prove:

1. A genuine affiliate CTA emits exactly one complete `affiliate_click` event.
2. A non-affiliate external CTA emits none.
3. An internal fallback CTA emits none.
4. Enter keyboard activation emits the event.
5. Missing or throwing analytics does not interrupt activation.
6. The same native event is not counted twice.
7. Parameters include provider, destination, link URL, link text, and page path.

### Preview QA

- Confirm the intended commit and Preview deployment status.
- Open a representative genuine affiliate CTA through the shared component.
- Activate once by mouse and, where relevant, by Enter.
- Confirm navigation remains functional and disclosure/status wording matches the registry.
- Capture commit, route, CTA text, activation method, timestamp, event observation, and any console/network error without private URLs or identifiers.

### Production browser QA

After an authorized production change affecting analytics, affiliate links, shared CTA behavior, or routing:

- Confirm the deployed commit and target route.
- Test one genuine affiliate CTA and one non-affiliate/fallback control where available.
- Confirm navigation, target behavior, disclosure, and no console error attributable to the change.
- Do not treat a local test or Preview result as proof of production delivery.

### GA4 Realtime QA

- Use the owner-controlled GA4 Realtime view without recording measurement IDs or account details.
- Confirm one `affiliate_click` event appears for one genuine activation.
- Confirm the required parameters are present and readable in the event details.
- Confirm no event is emitted for a non-affiliate/fallback control.
- Record route, provider/product key, event timestamp, parameter completeness, deployed commit, and result.

### Evidence to capture

Use a privacy-safe record containing: date/time, environment, commit, route, CTA/product key, network/provider key, activation method, expected count, observed count, parameter-completeness result, navigation result, disclosure result, GA4 Realtime result, and unresolved gaps. Never record measurement IDs, account IDs, raw private destinations, environment values, or credentials.

### Stop conditions

Stop the QA and do not promote or change configuration when:

- The deployed commit or affiliate registry status is uncertain.
- A genuine CTA does not emit, emits duplicates, or has incomplete required parameters.
- A non-affiliate/fallback CTA emits an event.
- Navigation, disclosure, or target behavior is interrupted.
- GA4 configuration ownership or the destination provenance is unknown.
- The observation could expose private identifiers or URLs.

### Instrumentation versus partner attribution

- **Instrumentation failure:** the CTA activation is observable locally/browser-side, but the expected `affiliate_click` event is absent, duplicated, malformed, or delivered through neither the available `gtag` nor compatible dataLayer path.
- **Partner attribution gap:** the event is present and complete in GA4 Realtime, but network-reported clicks, conversions, or commissions do not reconcile. Investigate network reporting, timing, consent/ad-blocking effects, destination behavior, and partner terms without claiming the site event was lost.
- **Revenue gap:** conversions or commissions are known, but approved/paid state or expenses are missing. Never infer revenue from clicks.

## 4. Reporting cadence

### Weekly lightweight review

- Review event delivery exceptions and recent analytics/affiliate changes.
- Check representative affiliate CTA behavior after material deploys.
- Review click volume by page/provider where reporting is available.
- Record anomalies and escalation status; do not perform a full financial reconciliation weekly.

### Monthly formal reconciliation

- Freeze the reporting period and source timestamps.
- Export or manually record available GA4 event totals without exposing identifiers.
- Compare page/product/provider clicks with network-side records where available.
- Record conversions, approved commissions, paid commissions, discrepancies, evidence, and unresolved gaps.
- Update the KPI dashboard and affiliate records with status—not guessed values.

### Quarterly analytics configuration review

- Reconfirm event name, parameter names, delivery path, and shared CTA coverage.
- Review custom dimensions, key-event designation, retention, access ownership, and export/archive capability.
- Reconcile analytics configuration with the centralized affiliate registry and disclosure rules.
- Review the contract after material GA4, tag, route, affiliate, or reporting changes.

## 5. Monthly reconciliation process

1. Define reporting period and timezone.
2. Record GA4 `affiliate_click` totals and break them down by page path, provider/product key, and destination identifier where available.
3. Obtain partner-network click and conversion records through authorized private access; do not copy raw tracked destinations or account identifiers into GitHub.
4. Record approved commission and paid commission separately.
5. Compare records by provider/product/page and identify timing, attribution, consent, destination, or reporting differences.
6. Assign every discrepancy an explanation, owner, evidence reference, or UNKNOWN status.
7. Update KPI/affiliate records only with verified values.
8. Escalate unresolved material gaps and consider pausing the affected CTA only when the destination, disclosure, or measurement integrity is unsafe.

The process distinguishes: site clicks, network clicks, conversions, approved commissions, paid commissions, expenses, and profit. None is a substitute for another.

## 6. GA4 configuration status

| Control | Status | Evidence and limitation |
|---|---|---|
| Event delivery | Ready | Implementation/tests exist and production `affiliate_click` delivery was verified in GA4 Realtime. |
| Parameter availability | Partially ready | Required parameters are sent by the repository implementation; ongoing GA4 report visibility and historical completeness are not evidenced. |
| Custom dimensions | Unknown | No repository or owner evidence proves they are configured. |
| Key-event designation | Unknown | No repository or owner evidence proves `affiliate_click` is designated as a GA4 key event. |
| Data retention | Unknown | No repository or owner evidence proves retention settings. |
| Reporting ownership | Partially ready | Aaron is sole reporting owner; no alternate operator exists. |
| Export/archive process | Unknown | No recurring privacy-safe analytics export/archive is evidenced. |
| Conversion reconciliation | Not ready | Partner conversions, approved/paid commissions, and discrepancies are not yet reconciled on a recurring basis. |

## 7. Ownership

Aaron is currently the sole reporting owner and sole recovery authority. Responsibilities are:

- Maintain the event contract and approve changes to shared CTA instrumentation.
- Review weekly delivery exceptions.
- Complete monthly click/network/conversion/commission reconciliation.
- Review GA4 configuration quarterly.
- Record evidence without secrets or private identifiers.
- Stop or correct affected tracking when stop conditions are met.

An alternate reporting operator remains absent. Higher publishing volume should not assume coverage until an alternate operator or documented emergency handoff exists.

## 8. Decision rules

- **Make `affiliate_click` a GA4 key event** only when the business explicitly needs it for a defined commercial-action objective, the event is stable, non-duplicate, and the team can interpret it without calling it a conversion or revenue event.
- **Add custom dimensions** when recurring reports need filtering/grouping by a parameter that standard event detail cannot reliably provide, and only after naming, scope, privacy, cardinality, and ownership are documented.
- **Investigate discrepancies** when GA4-to-network click differences persist beyond normal reporting delay, a material provider/page gap appears, conversions occur without expected clicks, or approved/paid commission states diverge.
- **Pause or correct tracking** when events are duplicated, non-affiliate links emit, required parameters are missing, navigation is interrupted, disclosure/status is wrong, or a destination is not verified. Preserve editorial content and conclusions unless a separate authorized review determines otherwise.
- **Never declare clicks to be revenue.** Revenue requires partner-recorded conversion and commission evidence, then paid-state and expense evidence for profitability.

## 9. Monthly reporting template

| Reporting period | Page | Product | Network | GA4 clicks | Network-reported clicks | Conversions | Approved commission | Paid commission | Discrepancy | Notes/evidence |
|---|---|---|---|---:|---:|---:|---:|---:|---|---|
| YYYY-MM | `/path` | Product key | Network |  |  |  |  |  |  |  |

Use `UNKNOWN` rather than zero when a source was not available. Keep supporting evidence private when it contains account or destination data.

## Contract completion criteria

This contract is operationally complete when a monthly record demonstrates: complete event delivery, page/provider/product breakdown, network comparison where available, conversion and commission states, discrepancy explanations, ownership, and unresolved gaps. Until then, event delivery is evidenced but reporting/revenue readiness remains incomplete.
