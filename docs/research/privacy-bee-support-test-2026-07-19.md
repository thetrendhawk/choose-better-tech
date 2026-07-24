# Privacy Bee Support Responsiveness Test — 2026-07-19

Status: ALL-TIME COUNT VALIDATED — DASHBOARD COUNT DIFFERENCE NOT FULLY EXPLAINED
Project: Choose Better Tech
Related canonical log: [Privacy Bee hands-on evaluation log](privacy-bee-hands-on-evaluation-log.md)
Publication status: Not authorized

## Purpose

Record a controlled support-responsiveness test without committing personal information or raw screenshots to the public repository.

## Test question

Submitted through the in-product support widget on 2026-07-19. The sanitized question asked why the six-month dashboard showed 16 removal requests while all-time activity showed 17, and whether both counts were working as intended.

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

## Human support response

A human support representative responded. The response was relevant and clearly defined the two metrics: “Removals Requested” covers DSAR and deletion requests submitted within the previous six months; “All-Time Removal Activity” covers requests submitted since Pro membership began, including completed and in-progress requests; Protection Level settings determine which broker subtypes are enabled; and disabled subtypes may appear as “Not Covered.”

The response did not identify why the dashboard showed 16 while the underlying in-progress and closed statuses totaled 17. Because the account was only days old, the six-month-versus-all-time explanation did not resolve that dashboard difference.

## Second human support response

Support confirmed in sanitized form that the account joined Privacy Bee on July 17, 2026; changing the Digital Footprint timeframe to three or nine months still showed the same numbers because the account was too new for the ranges to differ; and the Data Brokers page showed 15 Removal In Progress plus 2 Closed, totaling 17 All-Time Removal Activity. Support later affirmed that the current all-time total had increased to 31 as Privacy Bee continued submitting requests. Filtering Data Brokers for Removal In Progress and Closed should total 31. Some companies appear as Not Covered because certain broker subtypes are disabled under Protection Level settings.

The all-time total of 17 was validated as 15 in-progress plus 2 closed records, and the later total of 31 was also affirmed by support. The increase from 17 to 31 is request volume, not successful removal performance; completed or closed outcomes and external verification remain separate evaluation measures. The conversation was later marked resolved by Privacy Bee.

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

The human response was relevant, its metric definitions were clear, the all-time totals were validated, and the dashboard count difference remains not fully explained.

## Owner-provided clarification - 2026-07-24

A later written response from Privacy Bee directly addressed coverage definitions, dashboard status meanings, certification wording, evidence limits, company background, and staffing boundaries. This is recorded as a company-provided clarification, not independently verified product-performance evidence.

Privacy Bee stated coverage of 1,128 Data Brokers and People Search Sites and 185,253 custom sites. The standard-source figure covers the established monitoring and removal network; custom-site coverage refers to eligible member-submitted URLs reviewed for removal assistance by the Global Response Team. Coverage totals change over time and do not mean every subscriber is continuously monitored across all custom sites.

Privacy Bee clarified that dashboard statuses are account-specific: Discovered awaits action; Removal in progress awaits response or confirmation; Closed means the workflow was closed after the latest review and may reflect successful removal, no response after reasonable attempts, or an insufficient Identity Vault match; Clean means no current exposure was found; and Failed means removal could not be completed at that time and may be retried. The dashboard may not make the specific closure reason sufficiently clear, so the second external check is not classified as proof of a failed removal.

Privacy Bee stated that it is AICPA SOC 2 Type II certified and that its 2026 audit cycle is underway. Detailed audit documents are generally limited to customers and formal due-diligence requests. Its public wording is ISO 27001 compliant, not ISO 27001 certified.

Privacy Bee did not provide a validated company-wide dataset for aggregate removal, recurrence, failure, or average-completion rates. Timing varies by source, and the company stated that it continues monitoring, following up, and retrying eligible exposures. No performance-rate claim is inferred.

The response was a positive support-responsiveness and transparency signal. Company-provided background and staffing references are retained only as bounded, attributable claims; they do not establish product effectiveness or that all removal specialists are U.S.-based employees. Detailed audit documentation and aggregate performance evidence were not provided for editorial review.

## Privacy boundary

The public repository does not contain the screenshot, personal exposure details, account identifiers, email address, or other authentication/account information.

## Next controlled action

Continue with the scheduled seven-day removal-progress recheck. Do not interpret increased request volume as successful removal performance.
