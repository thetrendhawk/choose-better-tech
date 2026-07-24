# Privacy Bee Hands-On Evaluation Log

Date opened: 2026-07-17
Last updated: 2026-07-24
Project: Choose Better Tech
Status: Active hands-on evaluation
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
- actual protection scope depends on enabled categories;
- the report's publication restrictions limit direct evidence reuse;
- client-visible product claims and counts still require independent verification before publication.

## Outstanding tests

1. Preserve the second human support reply and the partially unresolved metric discrepancy.
2. Verify one or two completed-removal records externally, subject to owner authorization and privacy safeguards.
3. Submit one controlled custom URL removal for a clearly verified owner exposure.
4. Complete the fourteen-day progress recheck.
5. Observe re-exposure handling only if an exposure reappears naturally.
6. Decide whether an LPOA is justified after observing relevant failures or broker requirements.
7. Complete the thirty-day and access-expiration review.

## Next authorized action

Support responsiveness testing is active. See the [support-test record](privacy-bee-support-test-2026-07-19.md).

- Observed fact: the automated self-service response was immediate.
- Observed fact: human escalation was accepted and notification email setup was completed.
- Unresolved question: human response time and explanation quality remain pending.
- Unresolved question: the automated answer does not resolve the metric discrepancy because its time-range explanation is not consistent with the observed account age on the evidence currently available.

Before any additional product action:

- update this file with the intended test;
- perform only one controlled change;
- capture the immediate result privately;
- update this file again before moving to the next test.

Next test: complete the fourteen-day dashboard recheck on or after 2026-07-31. Future tests must follow the [controlled runbook](../../operations/PRIVACY_BEE_EVALUATION_RUNBOOK.md) in its stated order.

## Change log

### 2026-07-17

- established baseline;
- remediated exposed MFA seed;
- classified identity suggestions;
- tested one correct match and one false match;
- completed two false-candidate dismissal batches;
- added one verified former address;
- recorded immediate post-address state.

### Day 2 identity-action and metric follow-up — July 17–20, 2026

Six false or irrelevant Identity Vault candidates were ignored across two controlled batches. Five active records remained. A known former address was then added as a controlled test, increasing the active record count from five to six and displaying 11 associated exposures.

The dashboard removals-requested count increased from 15 to 16, while the all-time removals-requested count increased from 16 to 17. The 17 all-time requests were validated as 15 in-progress plus 2 closed records. Later observed values were: Privacy Risk Score 90/100; potential matches 60; scans 179; exposures found 45; dashboard removals requested 16; all-time removals requested 17; completed removals 2; in-progress removals 15; and re-exposures 0. Support later affirmed that all-time activity increased to 31 as Privacy Bee continued submitting requests. This is request volume, not successful removal performance.

The formerly exposed authenticator seed was replaced before account activation. Raw screenshots, exposure records, broker names, personal URLs, and identity details remain private.

Privacy Bee support explained that the dashboard metric covers requests submitted during the previous six months, while the all-time metric covers requests submitted since Pro membership began, including completed and in-progress requests. Support also noted that Protection Level and “Not Covered” settings can affect which companies receive requests.

Because the evaluation account was only days old, changing the Digital Footprint timeframe to three or nine months did not change the figures. Timeframe filtering therefore did not explain why the dashboard showed 16 while the underlying in-progress and closed statuses totaled 17.

Current status:

`ALL-TIME COUNT VALIDATED — DASHBOARD COUNT DIFFERENCE NOT FULLY EXPLAINED`

The all-time total of 17 was validated, and the later all-time total of 31 was affirmed by support. Completed or closed outcomes and external verification remain separate evaluation measures. The support conversation was later marked resolved by Privacy Bee.

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

### Seven-day dashboard and Identity Vault recheck — 2026-07-23

Owner-confirmed sanitized dashboard values were: Privacy Risk Score 90; potential matches awaiting review 55; scans performed 201; exposures found 46; dashboard removals requested 30; all-time removals requested 31; completed removals 9; in-progress removals 22; and re-exposures 1.

Identity Vault showed 6 active records and 6 ignored records. The former-address test record remained active, with 10 associated exposures.

Compared with Day 2, the deltas were: Privacy Risk Score unchanged at 90; potential matches 60 to 55 (-5); scans 179 to 201 (+22); exposures found 45 to 46 (+1); dashboard removals requested 16 to 30 (+14); all-time removals requested 17 to 31 (+14); completed removals 2 to 9 (+7); in-progress removals 15 to 22 (+7); re-exposures 0 to 1 (+1); active Identity Vault records unchanged at 6; ignored records unchanged at 6; and former-address associated exposures 11 to 10 (-1). The former-address record remains active.

This is meaningful evidence of dashboard-reported removal progress: nine completed removals are now reported compared with two on Day 2. Completed dashboard records do not prove that information is absent from external source websites. Request volume remains separate from successful removal performance, and the risk score remained 90 without a causal interpretation. The single re-exposure is recorded without inferring cause.

Status remains: `ALL-TIME COUNT VALIDATED — DASHBOARD COUNT DIFFERENCE NOT FULLY EXPLAINED`. Dashboard requests are 30 and all-time requests are 31.

The seven-day dashboard and Identity Vault recheck is complete. The next controlled test is external verification of one or two completed-removal records, subject to owner authorization and privacy safeguards. The fourteen-day recheck remains scheduled on or after 2026-07-31; the thirty-day/access review remains scheduled around 2026-08-16 through 2026-08-18. Publication, rating, verdict, recommendation, and affiliate activation remain unauthorized. PR #49 remains unmerged pending review of this evidence.

### External verification of two completed records - 2026-07-23

Two Privacy Bee records marked Closed/completed were checked externally by the owner using the same identifying basis that produced each original match. The source details and identifying information are intentionally omitted.

- Verification 1: the listing was absent at the time of verification. This is limited positive evidence for one source and one search method; it does not establish permanent removal.
- Verification 2: the listing was still present at the time of verification. This shows that the Closed dashboard status did not correspond to an absent public listing at that time; it is not proof of a failed removal because the record did not identify successful removal as its closure reason.

Result: `MIXED EXTERNAL VERIFICATION — ONE LISTING ABSENT; ONE CLOSED RECORD STILL PRESENT, WITH CLOSED NOT LIMITED TO SUCCESSFUL REMOVAL`

These results show that dashboard completion/Closed status does not by itself prove external removal. The first result is limited positive evidence for one source and one search method. The second does not establish that all Privacy Bee removals fail, and the first does not establish that all succeed. Privacy Bee clarified that Closed means the workflow was closed after the latest review and may reflect successful removal, no response after reasonable attempts, or an insufficient Identity Vault match. The dashboard may not make the specific closure reason sufficiently clear to the user. No cause, propagation timing, caching, recurrence, or source-refresh explanation is inferred.

The planned external verification of one or two completed records is complete. The next controlled checkpoint is the fourteen-day dashboard recheck on or after 2026-07-31. The thirty-day/access review remains scheduled around 2026-08-16 through 2026-08-18. Publication, rating, verdict, recommendation, and affiliate activation remain unauthorized. PR #49 remains unmerged pending review.

### Owner-provided product clarification - 2026-07-24

The following points are recorded as company-provided claims or clarifications from a written Privacy Bee response, not as independently verified product-performance evidence.

Coverage claims:

- Privacy Bee stated current coverage of 1,128 Data Brokers and People Search Sites and 185,253 custom sites.
- The standard-source figure represents sources in the established monitoring and removal network. Custom-site coverage refers to eligible member-submitted URLs from other websites, including blogs, forums, social platforms, and other sources displaying personal information; submissions are reviewed for removal assistance by the Global Response Team.
- Coverage totals change over time. The custom-site figure must not be interpreted as continuous monitoring of every subscriber across every listed site.

Dashboard and status clarifications:

- The dashboard provides account-specific exposure records, actions, current status, latest scan, latest action, and license coverage. Screenshots and statuses are account-specific evidence, not company-wide performance statistics.
- Discovered means an exposure was detected and awaits action. Removal in progress means a request was submitted and awaits response or confirmation. Closed means the workflow was closed after the latest review and may mean successful removal, no response after reasonable attempts, or an insufficient Identity Vault match. Clean means no current exposure was found. Failed means removal could not be completed at that time because the opt-out path was unavailable, the company did not respond, or the information did not sufficiently match verified details; the exposure may be retried in a future scan.

Security and performance-data clarifications:

- Privacy Bee stated that it is AICPA SOC 2 Type II certified; Type II reflects independent review of relevant controls operating over a period. The 2026 audit cycle was stated to be underway, and detailed audit documents are generally limited to customers and formal due-diligence requests.
- Privacy Bee's public wording is ISO 27001 compliant, not ISO 27001 certified. The publicly documented certification recorded here is SOC 2 Type II.
- Privacy Bee does not currently publish a validated company-wide dataset for aggregate removal rates, recurrence rates, failure rates, or average completion times. Timing varies by source and may range from relatively quick completion to several weeks or months. Privacy Bee stated that it continues monitoring, following up, and retrying eligible exposures. No success-rate, recurrence-rate, failure-rate, or average-completion-time claim is inferred.

Company and staffing clarifications:

- Privacy Bee-provided references reportedly describe operations beginning February 12, 2020; incorporation on December 28, 2022; a Limited Liability Company entity type; an alternate business name; headquarters in Alpharetta, Georgia; a named CEO; BBB accreditation beginning July 7, 2026; and a current BBB rating of A+. These are contact-provided references to publicly supportable information, not independently verified product-performance evidence.
- Privacy Bee describes itself as U.S.-based with global subscriber and data-broker reach. Public materials reportedly describe U.S.-based analysts at a secure Atlanta facility for Signature members, an employee-staffed Atlanta Security Operations Center, and human analyst support through the Global Response Team. The employee-versus-contractor classification of every removal specialist across every tier is not established; no claim is made that all specialists are U.S.-based employees.

Support assessment:

The response directly addressed coverage definitions, status meanings, certification wording, evidence limits, company background, and staffing boundaries. This is a positive support-responsiveness and transparency signal. The company did not provide aggregate performance evidence or detailed audit documentation for editorial review. Publication, rating, verdict, recommendation, and affiliate activation remain unauthorized.
