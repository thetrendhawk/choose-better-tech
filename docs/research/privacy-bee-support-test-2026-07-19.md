# Privacy Bee Support Responsiveness Test — 2026-07-19

Status: Awaiting email handoff completion and human response  
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

## Human escalation attempt

A follow-up was submitted on 2026-07-19 at approximately 12:41 PM Pacific:

> Thanks. My account was created in July 2026, so none of my requests should be older than six months. Could you please escalate this to a human support agent and clarify exactly why the two counts differ on my account?

The widget first displayed:

> You have been transferred to our support team. Thank you for your patience.

A subsequent screen then required an email address to be entered for reply notification, with options to set the email or skip.

Corrected interpretation:

- the system accepted the escalation request;
- the support handoff was not yet fully complete in the observed state because email notification setup was still pending;
- no human response was visible;
- human-response time and explanation quality remain pending;
- the earlier statement that transfer was fully confirmed was too strong and is superseded by this corrected record.

## Privacy boundary

The public repository does not contain the screenshot, personal exposure details, account identifiers, email address, or other authentication/account information.

## Next controlled action

Complete the notification handoff using the account email already associated with Privacy Bee, without capturing or publishing the address. Then record the resulting acknowledgment and wait for the human response before submitting another support question or beginning another product test.
