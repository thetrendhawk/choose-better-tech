# Privacy Bee Support Responsiveness Test — 2026-07-19

Status: Complete — human response reviewed
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

Human-response time and explanation quality were initially pending.

## Follow-up observation — 2026-08-06

The in-product chat widget was reopened during a dated account recheck. It displayed a fresh greeting and did not expose the prior escalated conversation or a human response.

This observation does not establish that Privacy Bee failed to reply because the escalation was configured for email notification and the account email was not reviewed as part of this checkpoint. The response time, response channel, and explanation quality therefore remain unresolved.

A narrow connector search of the connected mailbox was subsequently performed on 2026-08-06 and returned no matching Privacy Bee support email. Owner-supplied inbox evidence later the same day established that this search result was incomplete.

## Owner-supplied inbox evidence — 2026-08-06

A full-inbox Gmail search screenshot supplied by the owner showed the relevant Privacy Bee correspondence without exposing message bodies in the repository.

Observed evidence:

- a Privacy Bee Support notification dated 2026-07-20 stated that a new reply was available and that the conversation had been resolved;
- a thread from a named Privacy Bee representative dated 2026-07-21 contained three messages and showed a human-style reply beginning with a direct acknowledgment of the question;
- a separate representative reply dated 2026-07-31 addressed later questions about how removal outcomes are classified;
- chat-transcript emails were present for 2026-07-19 and 2026-07-31.

Classification:

- observed fact: at least one human-authored Privacy Bee reply was delivered;
- observed fact: the original support conversation was marked resolved by 2026-07-20;
- limitation: the screenshot exposed only inbox snippets, not the complete message bodies;
- unresolved question at the time of the screenshot: the exact explanation, response quality, and whether it resolved the historical metric discrepancy required review of the full July 20–21 thread.

## Human response reviewed — 2026-08-06

The owner supplied the complete text of the human support response. Privacy Bee answered the later, more detailed classification question concerning 11 completed removals, 14 exposures removed, and 10 Closed brokers.

Separate owner-supplied correspondence shows that the July 31 checkpoint also displayed 31 removal requests. Of the 10 Closed brokers, the owner classified 6 as belonging to other people, 1 as probably unrelated, 1 as mixed identity data, and 2 as rejected for missing optional LPOA authorization. Privacy Bee's Customer Experience Manager acknowledged the findings on August 3 and invited the owner to a product-review Zoom call on August 4.

### Provider explanation

Privacy Bee stated that:

- rejected requests may count as Completed because Completed means the removal process was processed, not necessarily that the exposure was successfully removed;
- Closed may mean Successfully Removed, Company Unresponsive after available methods were exhausted, or Data Did Not Match the Identity Vault closely enough for a verified request;
- any exposure with Closed status is included in All-Time Removal Activity, including unrelated or partially matched records;
- an exposure enters dashboard removal activity when it reaches Closed status;
- Exposures Removed counts individual exposures or pieces of personal information the provider considers successfully removed;
- Closed Brokers counts broker records in any of the three Closed categories;
- future scans may reopen and reprocess a record if an exposure reappears;
- signing the optional LPOA may improve removal success by approximately 10%–20% according to the representative.

### Assessment

- Response channel: human email reply following the in-product escalation.
- Human identification: clearly identified Privacy Concierge Specialist.
- Responsiveness: the inbox notification indicates the conversation was resolved by 2026-07-20; based on the recorded 2026-07-19 approximately 12:41 PM Pacific escalation and the notification's 2026-07-20 12:06 PM UTC timestamp, the apparent interval was approximately 16 hours 25 minutes.
- Answer quality: substantive and directly responsive to all five classification questions.
- Resolution: the reply resolves the meaning of Completed and Closed as provider-defined workflow states. It also explains why Completed, Exposures Removed, and Closed Brokers are not equal.
- Remaining limitation: the reply provides category definitions but no account-level itemization reconciling every record in the three totals.

### Editorial significance

Dashboard Completed and broker Closed must not be described as synonyms for independently confirmed removal. Privacy Bee's own explanation establishes that these totals may include rejected, unresponsive, unrelated, or insufficiently matched cases.

The elapsed interval is now long enough to continue the remaining evaluation checkpoints without sending a new support question. Any later-discovered email response should be recorded with its original timestamp.

## Privacy boundary

The public repository does not contain the screenshot, personal exposure details, account identifiers, email address, or other authentication/account information.

## Next controlled action

Do not submit another support question unless a new question is deliberately authorized. The classification test is complete. Preserve the provider definitions in any future report or article and do not equate Completed or Closed with independently verified successful removal.
