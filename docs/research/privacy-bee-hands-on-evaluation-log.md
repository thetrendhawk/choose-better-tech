# Privacy Bee Hands-On Evaluation Log

Date opened: 2026-07-17
Last updated: 2026-08-17
Project: Choose Better Tech
Status: Complete hands-on evaluation
Publication status: Not authorized

## Purpose

This is the canonical sanitized research log for Choose Better Tech's hands-on Privacy Bee evaluation. It records observed product behavior, controlled tests, unresolved discrepancies, and future checkpoints without placing raw personal data in the public repository.

This file, not chat history, is the durable source of truth for the evaluation.

This record does not authorize an article, rating, verdict, affiliate link, recommendation, or publication claim.

## Record classification

- **Observed fact** means the tester directly saw a product state or result and recorded only sanitized values.
- **Provider claim** means Privacy Bee or its interface asserted something that has not necessarily been independently verified.
- **Inference** means a cautious interpretation of observed facts; it is not treated as a verified product fact.
- **Unresolved question** means the available evidence does not yet support a conclusion and the issue remains open.

## Evidence boundary

Private evidence exists outside the public repository and includes screenshots, account exports, the initial exposure report, broker records, session details, identity suggestions, and personal exposure data.

Do not commit or publish without appropriate redaction and permission:

- street addresses;
- full phone numbers or email addresses;
- dates of birth;
- relatives or associated people;
- broker exposure IDs;
- session IP addresses or precise login locations;
- authentication QR codes, recovery material, or secret keys;
- the unredacted exposure report;
- screenshots containing login fields or personal records.

The downloaded Privacy Bee exposure report states that it is confidential and may not be published or redistributed without prior consent. Findings may be summarized cautiously, but the report itself remains private.

## Relationship and access

- Privacy Bee Pro access was provided for a 30-day independent evaluation.
- The account displays a monthly plan value of $39 and an end or renewal date of 2026-08-17.
- No payment method or invoice was visible during the evaluation.
- Auto-renew was off when checked on 2026-07-19.
- No required rating, editorial approval, publication commitment, or favorable-treatment condition has been identified.
- Monetization Independence Check: PASS.

## Day 1 baseline — 2026-07-17

### Account and protection state

- Privacy Risk Score: 90/100, labeled High Risk.
- Initial protection level: Standard.
- Initial active protection controls: 2 of 14.
- Monitoring enabled: search, social media, dark web, and paste sites.
- Communication settings enabled operational alerts and marketing communications.
- Limited Power of Attorney: unsigned.
- Passkeys: none registered.

### Baseline operational figures

The product displayed multiple overlapping metrics that must remain separate until Privacy Bee explains their definitions:

- scans performed: 179;
- exposures found: 45;
- removals requested: 15 initially, later 16;
- removals completed: 2;
- all-time removal activity later showed 17 requested and 15 in progress;
- companies monitored: 357;
- active exposures: 49 initially, later 52;
- exposures removed in the Data Brokers view: 4;
- search presence: 2 active results;
- dark-web exposures: 0.

### Metric discrepancies

- The downloaded report labeled the current plan Free while the dashboard labeled the account Pro.
- The report separated current-period zeros from all-time totals.
- Dashboard removal totals differed from report totals.
- Data Brokers and Family Protection used different exposure and removal counts.
- Many report records still said Pending or Upgrade for protection despite Pro access.

Do not merge these figures into one public claim without clarification from Privacy Bee.

## Security remediation

During Day 1 testing, an authenticator setup screenshot exposed the original QR code and secret key. The seed was treated as compromised.

Remediation completed on 2026-07-17:

- the original authenticator seed was replaced before activation;
- two-factor authentication was configured and active;
- future evidence must exclude QR codes, secrets, IP addresses, and precise session details.

## Identity-match testing

### Classification

The tester identified:

- one clearly correct full-name candidate;
- one clearly correct phone candidate;
- five clearly false name candidates;
- one clearly false phone candidate;
- two known former addresses for separate controlled testing.

The public log intentionally omits the actual personal values.

### Correct-match action

A clearly correct full-name candidate was confirmed.

Observed result:

- the active Identity Vault record count increased by one;
- the confirmed record showed 11 associated exposures;
- active-record controls included Edit and Remove.

### False-match action

A clearly false name candidate was dismissed.

Observed result:

- the candidate moved to Ignored Records;
- the product stated ignored records would not be scanned;
- removing an ignored record produced a Suppression removed message;
- no confirmation dialog appeared before suppression removal;
- ignored-state suppression is reversible, but consequential actions may occur with terse labels and limited confirmation.

### Batch testing

Two small batches of clearly false candidates were dismissed.

Observed result:

- six ignored records were visible after Batch 2;
- operational exposure and removal totals did not change immediately;
- the remaining-candidate counter did not decrease one-for-one with dismissed cards;
- the counter should not be treated as a literal count of visible identity suggestions.

## Address testing

### Merced controlled test — 2026-07-17

A verified former California address was added.

Observed result:

- the Identity Vault increased by one record;
- the address showed 11 associated exposures;
- success messages indicated Address added and Exposure updated;
- top-level exposure and removal totals did not change immediately;
- the Time Saved figure increased asynchronously, but causation could not be established.

### Delayed recheck — 2026-07-19

The address remained active and still showed 11 associated exposures.

Current dashboard state observed on 2026-07-19:

- exposures found: 45;
- removals requested: 17;
- removals completed: 2;
- potential exposures awaiting classification: 60.

The delayed recheck confirmed association of the address with multiple broker records, but did not establish that the address itself caused a top-level metric change.

## Broker-detail inspection

Instant Checkmate was used as a representative broker record.

Observed behavior:

- broker status remained Discovered;
- the detail view preserved a screenshot of the detected record;
- the record combined multiple locations and associated people;
- some fields appeared outdated, unrelated, or identity-mixed;
- the product included an internal Deletion Guide with manual opt-out steps;
- the Advisories tab referenced a dated security incident.

Provider claim:

- the product stated that re-exposures would be detected and removal restarted automatically; this has not yet been observed in the evaluation.

Inference:

- Privacy Bee provides both automated-removal claims and manual-removal guidance.
- Broad candidate discovery can include inaccurate or mixed identity data, so user interpretation remains necessary.
- Clicking the exposure-source control routed to Privacy Bee's internal broker page rather than directly to the public exposed profile.

## Search Presence testing — 2026-07-19

The Search Presence section found two Google results.

Both were determined to be false positives unrelated to the tester.

Actions and results:

- each result was marked Preserve;
- active results decreased from 2 to 0;
- preserved results increased from 0 to 2;
- both preserved records retained their discovery history;
- each preserved record offered a Reinstate action.

Finding:

Privacy Bee lets users suppress false-positive search results without permanently deleting the record, and the preserved state is reversible.

## Dark Web Presence — 2026-07-19

Observed result:

- 0 exposed artifacts;
- no dark-web exposures found;
- risk impact displayed as None.

Limitation:

The screen did not disclose which identifiers were checked, which breach sources were covered, or the last scan timestamp. The result can be reported as an observed product output, not as independently verified coverage.

Provider claim:

The interface described ongoing monitoring as including breach-to-broker mapping, targeted removal, and containment monitoring. Those coverage descriptions were not independently verified by the zero-result screen.

## Reports

One Initial Signup Report dated 2026-07-17 was available as a 22-page PDF.

Observed report characteristics:

- broker-by-broker entries;
- exposed field categories;
- screenshots and status labels;
- mixed and sometimes inconsistent identity associations;
- plan and metric discrepancies compared with the live dashboard;
- company-reported coverage figures for brokers and custom sites.

The report is useful as a baseline but cannot be published or redistributed without permission.

## Settings and commercial behavior — 2026-07-19

### Protection controls

The account was observed on Thorough protection with 3 of 14 controls active:

- People Search Affiliates;
- List Brokers;
- People Search Sites.

Other categories remained off, including AdTech and Marketing, Background Check, Data Enrichment, Geolocation, Job Recruiting, Healthcare and Insurance, Work and Income Verification, Surveillance Tech, Map Blurring, email sharing when necessary, and marketing-industry suppression.

Finding:

Advertised platform coverage is not equivalent to all categories being active for a user. Actual outreach depends on plan and control settings.

### Billing

- Privacy Bee Pro;
- monthly term;
- $39 displayed;
- renewal or expiration date: 2026-08-17;
- no payment method;
- no invoices;
- auto-renew off.

The absence of a payment method and invoices is consistent with complimentary access, but that remains an inference unless separately confirmed in writing.

### Limited Power of Attorney

The LPOA was unsigned.

Provider claim: the interface described the LPOA as optional and limited to privacy-law access, deletion, and opt-out requests. It stated that authorization could be revoked and could improve success with organizations that require an authorized agent.

No signature or authorization was completed.

### Monitoring

Enabled:

- Search Monitoring;
- Social Media Monitoring;
- Dark Web Monitoring;
- Paste Site Monitoring.

### Communications

Enabled:

- Monthly Privacy Report;
- Monthly Newsletter;
- Marketing Updates;
- Dark Web Alerts;
- Search Engine Exposures;
- People Search Exposures.

Finding:

Operational alerts and promotional communications are enabled separately but were all on during the observed session.

### Account security

- 2FA active;
- session history visible;
- passkeys supported but none registered;
- account deletion available and described as irreversible.

## Custom URL removal

The Report URL workflow was opened but no request was submitted.

Observed first-step interface:

- one public website URL field;
- no visible broker selector;
- no explanation field;
- no evidence upload;
- no ownership-confirmation step at the first screen.

Status: Not yet tested.

## Progress recheck — 2026-08-06

This dated recheck was performed through the live Privacy Bee account after the planned seven-day and fourteen-day checkpoints had passed. It consolidates the overdue progress observations without treating differently labeled product metrics as interchangeable.

### Dashboard

Observed current state:

- Privacy Risk Score: 59/100, labeled Medium Risk;
- scans performed: 216;
- exposures found: 46, with the interface noting that the figure includes likely matches;
- removals requested: 35;
- removals completed: 13;
- all-time removal activity: 35 requested, 13 completed, and 22 in progress;
- re-exposures: 1;
- potential exposures awaiting classification: 50;
- latest report date displayed: 2026-08-01.

The dashboard's all-time requested total and six-month requested total matched during this recheck. This removes the specific 16-versus-17 discrepancy from the current display, but it does not explain why the earlier discrepancy occurred.

### Data Brokers view

Observed current state:

- companies monitored: 335;
- active exposures: 100;
- exposures removed: 16.

These values remain separate from the dashboard totals. Relative to the 2026-07-19 observations, the product showed fewer companies monitored, more active exposures, and more exposures removed. The interface did not provide a visible explanation for the changed monitored-company count.

One StateCourts record labeled Closed was inspected in the Data Brokers table. It showed a last scan and last action date of 2026-07-20, but the table linked only to the broker homepage and did not expose the original public profile URL.

With explicit owner authorization, a StateCourts preliminary people search was performed using the minimum available name and state identifiers. A refined search using the middle initial displayed 61 masked candidates. One masked candidate matched two location markers associated with the Privacy Bee record.

Classification:

- observed fact: StateCourts returned a masked candidate matching both location markers;
- inference: the candidate is likely the same underlying person record Privacy Bee labeled Closed;
- limitation: the masked result could not conclusively establish identity, and opening the full report would require registration or purchase, which was not pursued;
- finding: the Privacy Bee Closed label must not be reported as an independently verified removal. The later support response confirms that Closed may represent successful removal, company nonresponse, or insufficient identity match. The StateCourts record appears likely to remain discoverable through the broker's preliminary search, but this does not by itself establish which Closed subcategory Privacy Bee assigned.

### Search and dark-web monitoring

- Search Presence: 0 active results, 2 preserved results, and 0 successful removals;
- Search Presence displayed its last scan as 20 days earlier and its next scan as 9 days away;
- Dark Web Presence: 0 exposures found, with no dark-web breaches detected shown by the interface.

The two previously preserved false-positive search results remained preserved, and no active search results were displayed.

### Protection and commercial state

- protection remained at 3 of 14 controls active;
- Limited Power of Attorney remained unsigned;
- plan remained Privacy Bee Pro at a displayed monthly value of $39;
- renewal or expiration date remained 2026-08-17;
- no payment method was on file;
- account credit balance was $0.00;
- no invoices were present.

The billing screen prompted the user to add a card to keep protection active. No payment method was added and no billing setting was changed.

### Support state

The in-product chat widget opened to a fresh greeting and did not display the prior escalated conversation or a human reply. A narrow connector search of the connected mailbox returned no matching message, but owner-supplied inbox evidence later established that this search result was incomplete.

The inbox evidence showed:

- a 2026-07-20 Privacy Bee Support notification that a new reply was available and the conversation had been resolved;
- a three-message thread with a named Privacy Bee representative dated 2026-07-21;
- a later representative reply dated 2026-07-31 concerning removal-outcome classification;
- chat transcripts dated 2026-07-19 and 2026-07-31.

The complete human response was supplied on 2026-08-06. Privacy Bee explained that Completed means the removal process was processed and does not necessarily mean successful removal. The representative stated that Closed can mean Successfully Removed, Company Unresponsive, or Data Did Not Match. The representative also confirmed that any Closed exposure is included in All-Time Removal Activity, including unrelated or partially matched records.

The question reflected an intermediate account state showing 11 dashboard completions, 14 exposures removed, and 10 brokers under the Closed filter. Two inspected Closed cases, Pipl and Deluxe, showed rejected deletion requests because signed authorization was missing. Several other Closed cases appeared unrelated or only partially matched. These observations prompted the classification questions and are preserved as the context for the provider's answer.

Owner-supplied correspondence established the complete July 31 checkpoint and Closed-case breakdown:

- removal requests: 31;
- completed removals: 11;
- exposures removed in the Data Brokers view: 14;
- brokers under the Closed filter: 10;
- 6 Closed records appeared to belong to other people;
- 1 additional Closed record was probably unrelated;
- 1 Closed record mixed owner information with information belonging to others;
- 2 Closed records, Pipl and Deluxe, showed rejection because the optional LPOA was unsigned;
- none of the 10 visible Closed cases provided a clear example of successful removal of a record containing only the owner's information.

The owner sent this evidence and five classification questions to Privacy Bee's Customer Experience Manager on 2026-07-31 while explicitly withholding any final verdict. The representative acknowledged the update on 2026-08-03, stated that the team was reviewing it, and promised a follow-up. On 2026-08-04, the representative invited the owner to a Zoom call with another Privacy Bee participant to review the product, inspect the account state, and answer questions.

The call invitation is an opportunity for clarification, not evidence that the classification or removal concerns have been resolved. Any call should preserve the original test conditions and produce a dated written summary for the research record.

The reply distinguished the three account metrics as follows:

- Completed: completed removal requests or processes;
- Exposures Removed: individual exposures or pieces of personal information the provider considers successfully removed;
- Closed Brokers: broker records in any of the three Closed categories.

Assessment:

- the response was clearly human, substantive, and directly addressed the classification questions;
- the apparent response interval was approximately 16 hours 25 minutes based on the recorded escalation and inbox-notification timestamps;
- the provider definitions explain why the totals differ conceptually;
- the response did not provide an account-level reconciliation identifying which records compose each total;
- dashboard Completed and broker Closed are workflow classifications, not proof of successful removal.

The same inbox evidence showed an expiration email dated 2026-08-02 that described 14 days remaining and stated that 11 listings had been removed. This is recorded as a provider claim from an email and remains separate from the August 6 dashboard's 13 completed removals and Data Brokers view's 16 exposures removed.

### Re-exposure detail

The dashboard displayed one re-exposure and stated generally that re-exposures are re-detected and removal begins again. The chart did not expose the broker, record, detection date, or restarted-removal status. The provider claim could not be verified from the visible re-exposure summary.

### Additional controlled-test status

- A second external verification was attempted using separate records labeled Closed. The browser safety policy blocked both public broker sites before a search could be performed. No conclusion about those records was drawn, and no bypass was attempted.
- The owner subsequently performed the FreePeopleDirectory check manually and supplied a screenshot. The search redirected to an Information.com checkout funnel offering a limited-time $1 background report and requesting payment information.
- The search flow took approximately five minutes before returning the checkout funnel.
- No public profile, exposed-data preview, removal status, or independently verifiable result was visible before the payment gate.
- The domain handoff from FreePeopleDirectory to Information.com makes the verification target ambiguous: the evidence does not establish whether the services share data, ownership, or only a referral funnel.
- The checkout URL contained personal search parameters and transaction identifiers and remains private. It is not treated as a public exposure URL and must not be submitted through Privacy Bee's custom URL workflow.
- Classification: the FreePeopleDirectory external check is inconclusive. It neither verifies successful removal nor proves continued public exposure.
- Usability finding: the delayed search presentation culminated in a payment funnel without enough visible evidence to substantiate its implied claim that a matching report existed.
- The custom URL dialog was reopened. It still provided a single website-URL field and a disabled submission button until a URL is entered.
- No clearly verified owner exposure URL was available for submission. The blank dialog was closed without creating a request.

## Recovered prior-conversation evidence — reviewed 2026-08-06

The owner recovered a PDF export of the earlier ChatGPT project conversation titled Privacy Bee Review Completion. The export confirms that the prior evaluation had already inspected the Closed list record by record rather than merely sampling the top-level totals.

Recoverable observations from the conversation sequence include:

- the owner repeatedly classified Closed records as unrelated, likely unrelated, or mixed with some relevant information;
- at least one rejected removal was inspected specifically to identify why removal failed;
- a Closed record had to be found after clearing a filter;
- two separate records were identified as missing LPOA authorization outcomes;
- the user explicitly described the reviewed material as the result set for status Closed and asked to proceed through the list.

The later support question and response identify Pipl and Deluxe as the two rejected cases associated with missing signed authorization and establish that 10 Closed brokers were under review at that checkpoint.

Evidence limitation:

- the PDF preserved the text and sequence of the user's classifications;
- embedded screenshots in the exported conversation rendered as loading indicators rather than captured images;
- the evidence therefore confirms that the systematic Closed-case review occurred, but it cannot reliably remap every classification to a named broker beyond details separately preserved in the support correspondence;
- unrelated deployment and Search Console material appearing later in the recovered exports is outside the Privacy Bee evaluation and was not imported into this log.

Operational consequence:

The full Closed-list walkthrough was not repeated. Later work used the established findings, inspected only newly changed records, and prioritized the final expiration checkpoint.

## Near-expiration recheck — 2026-08-16

This read-only checkpoint was performed through the signed-in Privacy Bee account one day before the displayed August 17 renewal or expiration date. No payment method was added, no removal request was submitted, no protection setting was changed, and the LPOA remained unsigned.

### Dashboard

Observed current state:

- Privacy Risk Score: 59/100, labeled Medium Risk;
- scans performed: 393;
- exposures found: 67, with the interface noting that the figure includes likely matches;
- all-time removal activity: 51 requested, 19 completed, and 32 in progress;
- re-exposures: 6;
- time saved: 2 days, 19 hours, and 3 minutes;
- potential exposures awaiting classification: 111.

Relative to August 6, scans increased by 177, exposures found by 21, requested removals by 16, completed workflows by 6, in-progress workflows by 10, and re-exposures by 5. These are product-reported counts and remain subject to the provider's workflow definitions.

### Data Brokers and re-exposure observation

Observed current state:

- companies monitored: 338;
- active exposures: 188;
- exposures removed: 18;
- Closed records: 16 across two result pages.

Relative to August 6, companies monitored increased by 3, active exposures by 88, and exposures removed by 2. The sharp increase in active exposures is not explained by the interface and remains separate from the dashboard's 21-exposure increase.

The StateCourts record that was labeled Closed during the August 6 external-verification test was no longer in the Closed list. It appeared in recent activity as newly discovered on August 15 with a Pending Removal state, while the Data Brokers table showed it as Discovered with August 15 last-scan and last-action dates.

Classification:

- observed fact: a previously Closed StateCourts record returned to an active Discovered/Pending Removal state;
- observed fact: the aggregate re-exposure count increased from 1 to 6;
- inference: this is evidence that Privacy Bee re-detected at least one resurfaced record;
- limitation: Pending Removal does not demonstrate that a new removal request was submitted or completed, and the interface still did not map all six aggregate re-exposures to individual records.

### Monitoring, coverage, reports, and commercial state

- Search Presence: 0 active results, 2 preserved results, 0 removals in progress, and 0 successful removals; the last scan was displayed as approximately four hours earlier;
- Dark Web Presence: 0 exposures found and no detected dark-web breach shown by the interface;
- all four monitoring categories remained enabled;
- protection remained Thorough with 3 of 14 controls active;
- the latest generated report remained the July monthly Person Exposure Report created August 1, plus the July 17 Initial Signup Report;
- the account remained accessible with a Pro License and Active Protection;
- billing still displayed a monthly $39 Pro license with an August 17, 2026 renewal date;
- no payment method, invoices, or account credit were present;
- the LPOA remained unsigned.

### LPOA decision

Choose Better Tech declined to sign the LPOA during this evaluation. Two earlier Closed cases showed authorization-related rejection, but signing one day before the displayed access end would change the controlled test conditions without providing a meaningful observation window. This decision does not establish that the LPOA lacks value; it preserves the evaluation's unsigned-account boundary.

### Checkpoint disposition

At the August 16 checkpoint, the thirty-day pre-expiration review was complete and one narrow follow-up remained: check the account, report, and historical-data state after the displayed access end without adding a payment method. That follow-up was completed on August 17 and is recorded below.

## Provider follow-up correspondence — reviewed 2026-08-17

Privacy Bee supplied written responses on August 14 and August 17 to six follow-up questions sent on August 13. The correspondence is treated as provider-supplied evidence, not independent verification.

### Coverage and applicability

Privacy Bee stated that it scans its full set of people-search sites and affiliate networks for a member's data. For other data brokers, the provider said removal-request applicability depends on where a broker operates and which privacy rights are available to the member. The response therefore did not provide one flat, user-applicable coverage number.

Assessment:

- the answer usefully distinguishes monitored sources from sources where a request is legally and operationally applicable;
- it does not identify the current source count, the typical per-user request count, or the counting and deduplication method;
- top-level coverage figures should not be described as the number of brokers receiving requests for every member.

### Removal verification and re-exposure workflow

Privacy Bee stated that it verifies people-search-site removals through recurring scans and seeks explicit confirmation from other brokers when available. The provider said many brokers use its compliance portal. It further stated that a reappearing listing creates a new removal request and is tracked as a separate re-exposure rather than silently reopening the original request.

The provider described the single re-exposure visible when its representative reviewed the account as a relisted record that was being worked as a separate request. The later August 16 account state showed six re-exposures and the previously Closed StateCourts record in Discovered/Pending Removal.

Assessment:

- the correspondence explains the intended workflow and is consistent with StateCourts returning to an active state;
- the account interface still did not map all six re-exposure counts to named records or show proof that each new request was submitted;
- StateCourts remained Pending Removal, so re-detection was observed but restarted-removal completion was not.

### Success measurement and timing

Privacy Bee declined to provide one success-rate or timeline figure because broker behavior varies. It stated that a removal is counted when a broker confirms removal or a follow-up scan no longer finds the record, and that follow-up scans often carry the evidentiary weight when a broker does not respond.

This statement adds an important but still ambiguous definition. The earlier support response said Completed and Closed can include processed, unresponsive, rejected, or insufficiently matched outcomes. The August follow-up appears to describe a successfully removed exposure, but it did not identify whether it maps specifically to Exposures Removed or another account metric. The evaluation therefore preserves both statements and does not merge their definitions.

### Competitive positioning and offered evidence

Privacy Bee declined to rank itself against Incogni, DeleteMe, or Optery. It characterized its approach as broad source coverage, long-term rescanning, automation for volume, and human handling for resistant sources. It also acknowledged that public records cannot always be erased and that reappearance is normal.

The provider offered, but did not attach in the reviewed thread:

- current coverage figures with an explanation of how they are counted;
- information about its SOC 2 Type II position;
- product documentation about scanning and removal processes;
- a possible call with the founder and technical team.

No independently checkable success-rate dataset, typical timeline benchmark, source-level coverage file, audit report, or technical documentation was supplied in the reviewed messages. A further call is optional and is not required to close the hands-on evaluation.

## Expiration-day review — 2026-08-17

The final read-only checkpoint was completed after the complimentary Pro license ended. The account required a fresh email-code sign-in, then remained accessible without adding a payment method or renewing.

### License and dashboard behavior

Observed state:

- license: Unlicensed;
- protection banner: Unprotected & Vulnerable;
- protection configuration: Unprotected, 0 of 14 controls active;
- the interface stated that no removals or takedowns were being submitted;
- Privacy Risk Score remained 59/100, labeled Medium Risk;
- scans performed remained 393;
- exposures found remained 67;
- completed workflows remained 19;
- in-progress workflows remained 32;
- re-exposures remained 6;
- potential exposures awaiting classification remained 111;
- the requested-removal figure changed from 51 to 0 and was labeled Paused;
- the six-month requested and completed figures also displayed 0 with Paused labels.

Historical dashboard values and recent exposure cards remained visible. Some individual records retained Removal in progress labels even though the account-level interface said that removals were paused and no new submissions were being made. This does not establish whether previously submitted broker requests continued outside the product after license expiration.

### Data Brokers and Identity Vault access

The Data Brokers table remained accessible and displayed:

- companies monitored: 361;
- active exposures: 188;
- exposures removed: 18.

Relative to August 16, the monitored-company count increased by 23 while active and removed totals were unchanged. Previously Covered people-search rows, including StateCourts, displayed Not Covered after expiration. The StateCourts record remained Discovered with August 15 scan and action dates.

The Identity Vault, ignored records, partial records, and exposure associations remained visible. The public repository does not reproduce the retained personal values.

### Monitoring and report access

- Search Presence history remained visible with 0 active results and 2 preserved results, but the page required an upgrade for Search Monitoring;
- all four monitoring switches were off and labeled License Required;
- Reports displayed Reports are paused and required license activation to resume monthly reports;
- the July monthly report and July 17 signup report remained listed with their file metadata;
- controlled clicks on the report filename and download control produced no observed download or navigation, so report-list visibility is verified but post-expiration file retrieval is not;
- no new report was generated.

### Dark Web locked-preview behavior

The licensed account displayed 0 dark-web exposures on August 16. After expiration, the Dark Web Presence page displayed 25 apparent exposure records, a Medium impact, and a five-point risk-score contribution. Every visible record used obvious example or placeholder domains, identical historical dates, and a placeholder email address. The same page stated that an upgraded subscription was required to see actual results.

Classification:

- these 25 items are a locked-preview or demonstration dataset, not observed account exposures;
- the product's heading and risk-impact language could be misread as genuine account findings before the user reaches the upgrade explanation;
- the evaluation retains the licensed zero-result as the last actual account result and does not revise it to 25.

### Billing and authorization

- no payment method was on file;
- account credit remained $0;
- no invoices or managed licenses were present;
- the prior Pro license row was no longer displayed;
- the LPOA form remained unsigned.

### Final disposition

The hands-on evaluation is complete. Expiration stopped protection and monitoring while retaining access to substantial historical account data. The external-removal verification and custom-URL workflows close with their documented limitations rather than using paywalled, ambiguous, or unverified inputs. No further product action, renewal, LPOA signature, broker search, or support reply is required.

## Current strengths observed

- broad candidate discovery;
- visible Identity Vault and ignored-record audit trail;
- reversible suppression for false search results;
- broker detail pages with screenshots and deletion guidance;
- ongoing-removal and re-exposure framing;
- 2FA, session visibility, and optional passkey support;
- downloadable baseline reporting.

## Current limitations and risks observed

- inconsistent metrics across report, dashboard, Data Brokers, and Family Protection;
- false positives and identity mixing require user judgment;
- some consequential actions use terse labels and limited confirmation;
- Search Presence can surface unrelated namesakes;
- dark-web coverage is not transparent from the user interface;
- the unlicensed Dark Web page presents placeholder exposure records and risk-impact language in a way that can resemble real account findings;
- actual protection scope depends on enabled categories;
- the report's publication restrictions limit direct evidence reuse;
- client-visible product claims and counts still require independent verification before publication.

## Closed test paths

- A second external removal verification was not completed because no safe, non-paywalled original profile URL became available.
- Custom URL removal closes as untested because no clearly verified owner exposure URL became available.
- These limitations are part of the final evidence record and do not require more account activity.

## Next authorized action

No additional product action is authorized or required. Any future article, provider call, evidence request, pricing refresh, or publication decision is a separate editorial task requiring separate authorization.

Before any additional product action:

- update this file with the intended test;
- perform only one controlled change;
- capture the immediate result privately;
- update this file again before moving to the next test.

Future tests must follow the [controlled runbook](../../operations/PRIVACY_BEE_EVALUATION_RUNBOOK.md) in its stated order.

## Change log

### 2026-07-17

- established baseline;
- remediated exposed MFA seed;
- classified identity suggestions;
- tested one correct match and one false match;
- completed two false-candidate dismissal batches;
- added one verified former address;
- recorded immediate post-address state.

### 2026-07-19

- completed delayed address recheck;
- inspected broker detail, deletion guide, and advisory behavior;
- tested Search Presence false-positive preservation and reinstatement availability;
- reviewed Dark Web Presence;
- downloaded and reviewed the initial report;
- verified billing, auto-renew, LPOA, monitoring, communication, and security settings;
- opened but did not submit the custom URL removal flow;
- consolidated prior private records into this canonical sanitized repository log.
- linked the active support-responsiveness test and recorded the pending human-response checkpoint.

### 2026-08-06

- completed a consolidated overdue progress recheck;
- recorded current dashboard, Data Brokers, Search Presence, Dark Web Presence, protection, LPOA, and billing states;
- observed one re-exposure in the all-time dashboard summary;
- inspected one Closed broker record but could not externally verify it because the original public profile URL was unavailable;
- performed an owner-authorized StateCourts search and found a masked candidate matching two location markers from the Closed record;
- classified the StateCourts removal as unverified and likely still discoverable, without opening a paid or registration-gated report;
- confirmed that the in-product chat widget did not expose the earlier conversation, while leaving possible email response status unresolved.
- performed a connector mailbox search that returned no matching support reply, then corrected that incomplete result using owner-supplied inbox evidence;
- confirmed a July 20 resolved-conversation notice, a July 21 representative thread, and a later July 31 representative reply;
- recorded the August 2 email claim of 11 removed listings separately from dashboard and Data Brokers metrics;
- reviewed the complete human support response and closed the support-responsiveness test;
- recorded Privacy Bee's definitions of Completed, Exposures Removed, and Closed Brokers;
- established that Completed and Closed are workflow classifications rather than proof of successful removal;
- recovered the exact July 31 checkpoint and 10-case Closed breakdown from owner-supplied correspondence;
- recorded Privacy Bee's August 3 acknowledgment and August 4 invitation to a product-review call.
- attempted to inspect the single re-exposure, but the dashboard exposed only an aggregate count and generic restart claim.
- attempted a second external verification, but the browser safety policy blocked both candidate broker sites before any search;
- recorded the owner's manual FreePeopleDirectory check, which ended at an Information.com payment gate without exposing a verifiable public result;
- reopened and closed the blank custom URL form without submitting an ambiguous or unverified URL.
- recovered the earlier Privacy Bee Review Completion conversation and confirmed that the 10-case Closed-list walkthrough had already been performed;
- recorded the recovered sequence while preserving the limitation that embedded screenshots did not render in the PDF export.

### 2026-08-16

- completed the read-only near-expiration checkpoint through the signed-in account;
- recorded final pre-expiration dashboard, Data Brokers, Search Presence, Dark Web Presence, protection, reporting, billing, monitoring, and LPOA states;
- observed 51 requested, 19 completed, and 32 in-progress workflows, with 6 aggregate re-exposures;
- recorded 338 companies monitored, 188 active exposures, 18 exposures removed, and 16 Closed broker records;
- confirmed that the previously Closed StateCourts record had returned as Discovered/Pending Removal on August 15;
- classified that change as evidence of re-detection but not proof of a restarted or completed removal request;
- declined the LPOA to preserve the unsigned evaluation conditions and avoid a one-day, non-observable intervention;
- confirmed continued Pro access, no payment method, no invoices, no account credit, and the August 17 renewal or expiration date;
- left post-expiration access and data availability as the only required checkpoint.

### 2026-08-17

- reviewed the complete August 14 and August 17 provider follow-up correspondence;
- recorded the provider's user- and jurisdiction-dependent coverage explanation;
- recorded the claimed broker-confirmation and follow-up-scan verification methods;
- recorded the claim that reappearances create new, separately tracked removal requests;
- preserved the distinction between successful-removal verification and the broader Completed or Closed workflow classifications;
- recorded that no success-rate figure, timeline benchmark, coverage file, audit report, or technical documentation was supplied in the reviewed thread;
- treated the offered founder and technical-team call as optional rather than necessary to close the hands-on evaluation.
- completed the post-license access checkpoint after signing back into the unlicensed account;
- confirmed that protection changed to Unprotected with 0 of 14 controls active and all monitoring categories became License Required;
- confirmed that dashboard, Identity Vault, Data Brokers, Search Presence history, and report listings remained accessible;
- recorded that requested-removal figures changed to 0 Paused while 19 completed, 32 in-progress, and 6 re-exposure values remained visible;
- recorded 361 companies monitored, 188 active exposures, and 18 exposures removed, with visible broker coverage changing to Not Covered;
- confirmed that monthly reports were paused and that two historical report listings remained visible, while controlled download attempts produced no observed file retrieval;
- identified the 25-item Dark Web screen as placeholder preview data rather than genuine account exposures;
- confirmed no payment method, invoice, account credit, managed license, renewal, or LPOA signature;
- closed the hands-on evaluation with no further product action required.
