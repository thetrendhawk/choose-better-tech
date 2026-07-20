# Affiliate Application Registry

Version: 1.1
Status: Active
Owner: Choose Better Tech
Last Updated: 2026-07-17

## Purpose

This is a compact, structured tracking table for in-progress affiliate network/advertiser relationships that have not yet reached the centralized registry (`src/data/affiliateLinks.ts`). It complements, and does not duplicate, the narrative detail in `operations/AFFILIATE_PLAYBOOK.md` and cluster-specific monetization records. Where this table and those documents overlap, the playbook's narrative record is authoritative for full terms and conditions; this table is a fast-reference status board.

This document does not contain, and must never contain, passwords, tax information, banking information, account tokens, recovery codes, or other private credentials.

## Data Removal Cluster

| Provider | Network | Account email | Application status | Advertiser approval status | Terms-review status | Commission | Attribution | Locking/payment | Restrictions | Implementation status | Next action | Checked date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Optery | PartnerStack | Not recorded in this registry | Owner reports active referral tracking and custom-link availability; this is not approval evidence | Unconfirmed — do not claim approval without a recorded acceptance notice | Public agreement and program page reviewed; authenticated Affiliate Tool / Program Policies remain required | Public page: 30% for first 12 months for each new referred customer; exact eligibility remains tool-governed | Public page: 90 days; later click resets; cookie blocking can prevent tracking | Public page: processed 35 days after referral transaction; tool prerequisites/threshold/method unresolved | No branded or misspelled paid search, no ad copy/URL mark use, no direct paid-ad links, impersonation, masking, cookie stuffing, unsolicited bulk email, or mass SMS | Implemented through internal `/api/go/optery`; runtime configuration and browser validation pending | Owner must add `OPTERY_AFFILIATE_URL` for Preview and Production in Vercel, redeploy Preview, then authorize redirect/browser validation; recheck authenticated tool and Program Policies first | 2026-07-20 |

## Cybersecurity Tools Cluster

| Provider | Network | Account email | Application status | Advertiser approval status | Terms-review status | Commission | Attribution | Locking/payment | Restrictions | Implementation status | Next action | Checked date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Acronis | CJ | Not recorded in this registry | Application approved | Approved for the U.S. consumer program | Reviewed from approved program terms | Consumer: 15%; corporate: 2.5% | 45-day referral period; unlimited qualifying occurrences stated in the reviewed terms | Not recorded | Coupons only when supplied by the program; branded SEM requires written permission; “Acronis” may not be used in a website domain | Tracking link generated but not implemented — no `src/data/affiliateLinks.ts` entry and no site placement | Preserve the approved consumer tracking link for a separately authorized implementation task; do not activate editorial placement or paid-search use by this record | 2026-07-17 |

## Cloud Storage Cluster

| Provider | Network | Account email | Application status | Advertiser approval status | Terms-review status | Commission | Attribution | Locking/payment | Restrictions | Implementation status | Next action | Checked date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| pCloud | Direct | `hello@choosebettertech.com` | Account created (active) | Not applicable — direct program; no separate advertiser-approval step beyond account activation | Reviewed (dashboard) | 20% on recurring subscription payments or 20% on lifetime-plan payments (selectable) | Unresolved public conflict: 45-day vs. 90-day attribution/cookie window | Public terms: roughly monthly, no earlier than 45 days after sale; $10 PayPal / $500 wire minimum | No trademark bidding, misspellings, or variations; may not use pcloud.com as display URL | Not implemented — no link generated, no registry entry, no site placement | Obtain written clarification of the 45-day/90-day conflict before any further step; editorial activation not authorized | 2026-07-13 |
| Sync.com | Awin | `hello@choosebettertech.com` | Awin publisher onboarding begun; Sync.com merchant application not separately confirmed | Unconfirmed — do not claim Sync.com approval | Not yet completed at account level; public-page terms only (50% one-time on annual orders, capped $150; trial conversions excluded) | Unconfirmed at account level | Unconfirmed at account level | Must use approved Awin tracking; self-referrals and retroactive claims prohibited | Not implemented | Complete Awin onboarding; separately confirm Sync.com approval before further action | 2026-07-13 |
| Internxt | Impact | Not recorded in this registry | Unconfirmed | Unconfirmed — do not claim Internxt approval or activation | Reviewed (logged-in account-level terms) | 15% on orders over EUR 99; 30% on all other qualifying orders; EUR 0.00 for signup actions | Purchase: winner-of-signup cascading to last click; parent-action attribution up to 400 days; click attribution 30 days. Signup: last click; 30-day click attribution. | Purchase actions lock 27 days after tracking-month end, paid 20 days after lock. Signup actions lock 10 days after tracking month, paid 20 days after lock. Currency: EUR. | Terms changeable/cancellable with 1 day's notice; stand-down policy applies; advertiser reversals up to 100%; no self-fired tracking pixels | Not implemented | Confirm application/acceptance status in writing; do not advance without confirmation | 2026-07-13 |
| Tresorit | PartnerStack | Not applicable — no account created | Not started | Not applicable — no application exists | Not started beyond public marketplace listing (50% of initial sale, capped $2,000; cookie/validation/reversal terms unverified) | Unconfirmed | Unconfirmed | Unconfirmed | Not implemented | Roadmap previously recommended applying; no signup/application has occurred; any future application requires a separately authorized task | 2026-07-13 |

## How to read this table

- **Application status** and **advertiser approval status** are always separate fields. An active network or direct-program account never implies advertiser approval.
- **Implementation status** is always "Not implemented" until a separately authorized task adds a tracked link to `src/data/affiliateLinks.ts` and activates it on an approved editorial surface. A generated tracking link alone is not implementation.
- **Checked date** reflects when the row was last verified against source terms (public or logged-in), not when the relationship began.
- This table does not authorize editorial activation for any provider listed. See `operations/AFFILIATE_PLAYBOOK.md` for the binding rule that account access, approval, terms review, and link generation do not authorize editorial or site changes.
