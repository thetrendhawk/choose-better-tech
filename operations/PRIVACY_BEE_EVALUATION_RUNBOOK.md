# Privacy Bee Evaluation Runbook

Status: Hands-on evaluation complete — historical evidence record, not an endorsement or rating
Editorial authorization: Public Privacy Bee review authorized August 19, 2026
Last updated: 2026-08-17

## Purpose

Provide a controlled sequence for completing the Privacy Bee evaluation without repeating broad account walkthroughs. This runbook governs evaluation operations only. It does not authorize an article, publication, rating, verdict, ranking, recommendation, affiliate activation, CTA, or production change.

Canonical records:

- [Privacy Bee hands-on evaluation log](../docs/research/privacy-bee-hands-on-evaluation-log.md)
- [Privacy Bee support responsiveness test](../docs/research/privacy-bee-support-test-2026-07-19.md)
- [Privacy Bee prepublication findings report](../docs/research/privacy-bee-prepublication-findings-report.md)

## Evidence rules

- Add a sanitized repository record after every test.
- Keep raw evidence private.
- Do not put personal information in GitHub.
- Perform one controlled product action at a time.
- Never infer a completed removal solely from a dashboard label.
- Label provider claims as provider claims.
- Keep unresolved discrepancies unresolved until evidence closes them.

## Current baseline

The canonical log remains authoritative. Its August 16 near-expiration recheck records:

- scans performed: 393;
- exposures found: 67;
- all-time removal activity: 51 requested, 19 completed, and 32 in progress;
- re-exposures: 6;
- companies monitored: 338;
- active exposures: 188;
- exposures removed in the Data Brokers view: 18;
- Closed broker records: 16;
- search presence: 0 active results and 2 preserved results;
- dark-web exposures: 0;
- account access end or renewal date displayed: 2026-08-17;
- no payment method, invoices, or account credit visible on 2026-08-16;
- LPOA: unsigned.

These figures use different product definitions and must not be combined. The complete human support response was reviewed on 2026-08-06. Privacy Bee stated that Completed means a processed removal workflow rather than necessarily successful removal, while Closed may mean Successfully Removed, Company Unresponsive, or Data Did Not Match. The support-responsiveness test is complete. The previously Closed StateCourts record returned as Discovered/Pending Removal on August 15, demonstrating re-detection without yet demonstrating a restarted or completed removal request.

Provider follow-up correspondence reviewed on August 17 states that a successful removal is counted after broker confirmation or a clean follow-up scan and that reappearances create separately tracked new requests. This appears narrower than the earlier Completed and Closed workflow definitions, but the provider did not name the corresponding dashboard metric. Preserve the distinction and do not merge the definitions.

The August 17 expiration checkpoint is complete. The account became Unlicensed, protection changed to 0 of 14 controls, monitoring became license-gated, requested removals displayed 0 Paused, and substantial historical data remained visible. Report listings remained visible but controlled download attempts produced no observed retrieval. The unlicensed Dark Web page displayed placeholder preview records that must not be recorded as real exposures.

## Controlled sequence and disposition

The ordered test sequence is now complete except for the time-dependent post-expiration access observation.

### 1. Human support response — completed

The human reply, response timing, definitions, and remaining account-level reconciliation limitation were recorded on August 6.

### 2. Seven-day removal-progress recheck — completed late

The missed intermediate checkpoint was consolidated into the August 6 recheck without inventing an unavailable July 24 state.

### 3. Verify completed removals externally — completed with limitations

The StateCourts check found a likely matching masked result, and the manual FreePeopleDirectory check ended at a payment gate. Neither test independently verified successful removal. No additional personal-identifier search is authorized by this runbook.

### 4. Controlled custom URL removal — closed as untested

No clearly verified owner exposure URL became available. The form was inspected but no ambiguous URL was submitted.

### 5. Fourteen-day progress recheck — completed late

The missed intermediate checkpoint was consolidated into the August 6 recheck without inventing an unavailable July 31 dashboard state; separately preserved correspondence supplied the July 31 removal totals and Closed-case breakdown.

### 6. Re-exposure test — observed with a bounded conclusion

The aggregate count rose from 1 to 6. The previously Closed StateCourts record returned as Discovered/Pending Removal on August 15, demonstrating re-detection but not yet a restarted or completed removal request.

### 7. Limited Power of Attorney decision — declined

The LPOA remained unsigned. Signing it one day before the displayed access end would change the controlled conditions without leaving a meaningful observation window.

### 8. Thirty-day and access-expiration review — completed

The August 16 pre-expiration and August 17 unlicensed states are recorded. No payment method was added and renewal remained inactive.

## Checkpoint table

| Checkpoint | Earliest target date | Owner action | Repository update | Status | Blocker |
| --- | --- | --- | --- | --- | --- |
| Human response | Delivered by 2026-07-20 | Supply and review the complete response | Update canonical log, support-test record, report, and runbook | Completed 2026-08-06 | Provider definitions recorded; exact account-level itemization was not supplied |
| Seven-day recheck | July 24, 2026 | Access the dashboard and provide dated, sanitized evidence | Record each metric category and delta separately | Completed late on 2026-08-06 as part of a consolidated recheck | None |
| Fourteen-day recheck | July 31, 2026 | Access the dashboard and provide dated, sanitized evidence | Record repeated metrics and removal-state elapsed time | Completed late on 2026-08-06 as part of a consolidated recheck | Exact intermediate state unavailable |
| External verification | After progress recheck | Search only with explicit owner authorization or use a privately retained profile URL | Record public result without personal identifiers | StateCourts check found a likely matching masked result. Manual FreePeopleDirectory check ended at an Information.com payment gate and was inconclusive | Definitive confirmation requires an original public profile URL or evidence that does not require registration or purchase |
| Thirty-day/access review | August 16–18, 2026 | Access the account near expiration and provide dated, sanitized evidence | Record final metrics, billing, access, and unresolved items | Completed 2026-08-17 | None |

External verification, controlled URL removal, re-exposure observation, and the LPOA decision occur in sequence when their stated prerequisites are met; they do not have invented target dates.

The 10-case Closed-list walkthrough was completed in the recovered prior conversation. Do not repeat that broad walkthrough. Reinspect only newly changed records, unresolved named cases, or records needed for a specific external verification.

The exact July 31 breakdown is 6 records belonging to other people, 1 probably unrelated record, 1 mixed record, and 2 LPOA-related rejections. None of the 10 visible Closed cases clearly demonstrated successful removal of an owner-only record. Privacy Bee invited the owner to a clarification call; if accepted, preserve the original test conditions and add a dated written summary afterward.

The LPOA was deliberately declined for this evaluation. Signing it one day before the displayed access end would alter the controlled conditions without leaving a meaningful observation window. The post-expiration access check is complete; do not add a payment method or enable renewal.

## Completion boundary

No owner checkpoint remains. Any new removal submission, broker search using personal identifiers, renewal, provider communication, or LPOA action is outside this completed evaluation and requires separate explicit authorization.

## Codex responsibilities after each checkpoint

When the owner supplies evidence, Codex must:

- update the canonical log;
- update the relevant test record;
- update the runbook status;
- preserve exact dates;
- list unresolved questions;
- commit to a focused branch;
- open or update a reviewable pull request;
- never merge without owner approval.
