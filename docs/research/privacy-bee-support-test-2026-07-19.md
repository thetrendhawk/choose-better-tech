# Privacy Bee Support Responsiveness Test — 2026-07-19

Status: Active test record  
Project: Choose Better Tech  
Related canonical log: `docs/research/privacy-bee-hands-on-evaluation-log.md`  
Publication status: Not authorized

## Purpose

Record a controlled support-responsiveness test without committing personal information or raw screenshots to the public repository.

## Test question

Submitted through the in-product support widget on 2026-07-19:

> Hi, I’m seeing 16 “Removals Requested” in the six-month dashboard summary, but 17 in “All-Time Removal Activity.” Can you explain what causes the difference and whether both counts are working as intended?

## Immediate result

The support widget returned an immediate automated answer rather than a clearly identified human-agent response.

The answer stated that:

- the dashboard summary labeled “Removals Requested” uses a time-limited range and defaults to the last six months;
- “All-Time Removal Activity” includes every request submitted since the account joined Privacy Bee, including completed and in-progress requests;
- 16 versus 17 can therefore be expected when one request falls outside the six-month dashboard range;
- both counts are intended to be correct within their respective date ranges.

The widget then asked how Privacy Bee should contact the user if the user left or replied later and offered email notifications.

## Interpretation

- The metric discrepancy received a plausible product-definition explanation immediately.
- This result measures automated self-service responsiveness, not human support response time or answer quality.
- The explanation should not yet be treated as independently verified because no underlying request dates or count breakdown were shown.
- A human-agent confirmation remains useful because the account was only created in July 2026, making the suggested “older than six months” explanation appear potentially inconsistent with the observed account age unless inherited, imported, or pre-account activity is counted.

## Privacy boundary

The public repository does not contain the screenshot, personal exposure details, account identifiers, email address, or other authentication/account information.

## Next controlled action

Ask the support system to escalate the question to a human agent and specifically clarify how a six-month exclusion could apply to an account created in July 2026. Record the submission time, acknowledgment, and eventual response time before any additional product test.
