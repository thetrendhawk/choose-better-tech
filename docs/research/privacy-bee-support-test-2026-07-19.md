# Privacy Bee Support Responsiveness Test — 2026-07-19

Status: Awaiting human response
Project: Choose Better Tech
Related canonical log: [Privacy Bee hands-on evaluation log](privacy-bee-hands-on-evaluation-log.md)
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

## Classification

- Observed fact: the metric discrepancy received an immediate automated response.
- Provider claim: the two counts differ because the dashboard summary and all-time activity use different time ranges.
- Inference: the response measures automated self-service responsiveness, not human support response time or answer quality.
- Unresolved question: the automated explanation does not resolve the discrepancy because no underlying request dates or count breakdown were shown, and the account was created in July 2026. It remains unknown whether inherited, imported, pre-account, or another kind of activity is counted.

## Human escalation

A follow-up was submitted on 2026-07-19 at approximately 12:41 PM Pacific:

> Thanks. My account was created in July 2026, so none of my requests should be older than six months. Could you please escalate this to a human support agent and clarify exactly why the two counts differ on my account?

The widget displayed:

> You have been transferred to our support team. Thank you for your patience.

The system then requested an email address for reply notification. The account email was entered without preserving it in the public evidence record.

Observed completed handoff state:

- the email-entry prompt disappeared;
- the escalation message remained visible;
- the support-transfer acknowledgment remained visible;
- the message composer returned;
- no human response was visible at the time of capture;
- the support handoff is now treated as established and awaiting reply.

Human-response time and explanation quality remain pending.

## Privacy boundary

The public repository does not contain the screenshot, personal exposure details, account identifiers, email address, or other authentication/account information.

## Next controlled action

Do not submit another support question or begin another product test until the human support response is received or a defined follow-up interval has elapsed. Record the response timestamp, whether the responder is clearly human, the explanation provided, and whether the answer resolves the metric discrepancy.
