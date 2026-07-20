# Affiliate Application Playbook

Version: 1.3
Status: Active — expanded with Acronis approval and Cybersecurity Tools operational records
Owner: Choose Better Tech
Last Updated: 2026-07-17

## Purpose

This document is the canonical Affiliate Application Playbook for Choose Better Tech. It records, per provider, exactly which of the following operational stages have occurred:

1. **Network account status** — whether CBT holds an account with the affiliate network itself (e.g., Awin, Impact, PartnerStack, CJ, MaxBounty), independent of any single advertiser.
2. **Advertiser application status** — whether CBT has applied to a specific advertiser/merchant program inside that network, or directly.
3. **Advertiser approval** — whether the advertiser has explicitly approved CBT. This is never inferred from network account access, dashboard visibility, or terms availability.
4. **Terms review** — whether CBT has read the advertiser's commission, cookie/attribution, locking, and payout terms (public or logged-in).
5. **Affiliate-link generation** — whether a tracked affiliate URL has been generated for the advertiser.
6. **Editorial activation** — whether CBT's editorial team has authorized referencing or promoting the advertiser in published content.
7. **Live-site implementation** — whether a tracked link has been added to `src/data/affiliateLinks.ts` and is resolvable on the live site.

**Binding rule:** progress on any earlier stage does not imply progress on a later stage. Network account access does not mean advertiser approval. Advertiser approval does not mean editorial activation. Editorial activation does not mean live-site implementation. Each stage requires its own explicit, separately authorized action.

## Centralized Registry Requirement

Affiliate destinations must remain centralized in `src/data/affiliateLinks.ts`. Editorial reviews, guides, hubs, and comparisons must not hard-code raw affiliate URLs. A provider record in this playbook, including an active network account, advertiser approval, reviewed terms, or a generated tracking link, is not itself an authorization to add or modify `src/data/affiliateLinks.ts`. That file may only be changed by a separately authorized implementation task.

## Current Affiliate Registry Summary

This table reflects only what is actually implemented in `src/data/affiliateLinks.ts` today. Providers discussed elsewhere in this playbook that do not appear below have no live registry entry.

| Provider | Network | Registry Status | Editorial Activation |
| --- | --- | --- | --- |
| NordVPN | MaxBounty | ACTIVE | Active through centralized affiliate resolver only. |
| Surfshark | CJ | ACTIVE | Active through centralized affiliate resolver only. |
| NordPass | CJ | ACTIVE | Active through centralized affiliate resolver only. |
| RoboForm | CJ | ACTIVE | Approved research, editorial brief, and review pipeline are complete. |
| Proton VPN | CJ / Proton Partners Program | ACTIVE | Active through centralized affiliate resolver only. |
| 1Password | None | INTERNAL_ONLY | Internal fallback only unless registry changes. |
| Bitwarden | None | INTERNAL_ONLY | Internal fallback only. |
| Proton Pass | MaxBounty | ACTIVE | Active through centralized affiliate resolver only. |
| Proton Mail | CJ / Proton Partners Program | PENDING | Future-use only; do not activate until a Proton Mail page exists and the landing page is confirmed. |
| Proton Unlimited | MaxBounty | PENDING | Future-use only; do not activate unless a Proton suite page is built. |
| Incogni | None | INTERNAL_ONLY | Internal fallback only unless registry changes. |
| Optery | PartnerStack | INTERNAL_ONLY | Program terms reviewed; no live destination. Implementation is blocked because the current registry is public source-controlled and the supplied destination is sensitive. |
| DeleteMe | None | INTERNAL_ONLY | Internal fallback only unless registry changes. |

Acronis does not currently have a registry entry. Its advertiser approval, reviewed terms, and generated consumer tracking link are documented below as pre-implementation operational facts only.

No Cloud Storage provider (pCloud, Sync.com, Internxt, Tresorit, Proton Drive, or any other) currently has a registry entry. See "Cloud Storage Cluster — Affiliate Operational Status" below for the current, pre-registry state of that cluster.

## Operating Rules

- Preserve editorial/business separation.
- Do not let affiliate approval change recommendations, rankings, or review conclusions.
- Use the centralized affiliate registry and resolver for all affiliate destinations.
- Keep pending providers out of homepage, hub, review, guide, and comparison recommendation surfaces until the approved editorial pipeline exists.
- Revalidate program terms, search restrictions, link status, and disclosure requirements before active promotion.
- Network account access, advertiser dashboard visibility, approval, terms review, or link generation does not authorize editorial mention or implementation. Each requires its own explicit authorization, recorded with a checked date.
- Do not claim an advertiser has approved CBT unless a specific, attributable, repository-recorded fact establishes that approval (e.g., an approval notice, an active tracked link issued by the advertiser/network, or an explicit written confirmation). Dashboard access alone is not approval evidence.

## Program-Specific Restrictions

### Optery via PartnerStack — consumer affiliate program

Checked date: 2026-07-20

- **Advertiser approval:** Not inferred from the supplied custom link or dashboard observation; no approval claim is made in this record.
- **Terms review:** `TERMS_REVIEWED` from Optery's public Affiliate Referral Agreement, Help Center restrictions summary, and Affiliate Program page. The authenticated Affiliate Tool and incorporated Program Policies remain a required pre-activation refresh source.
- **Public commission presentation:** Optery says 30% commission for the first 12 months for each new customer. The exact eligible-payment and retention rules remain controlled by the Affiliate Tool / Program Policies.
- **Attribution:** Optery says a click starts a 90-day window and a later click resets it; cookie blocking can prevent tracking. The Agreement leaves the binding validity period to the Affiliate Tool / Program Policies.
- **Payout:** Optery says commissions are processed 35 days after a referral customer transaction; payment prerequisites and any network threshold/method must be confirmed in the authenticated tool.
- **Restrictions:** No Optery-branded paid search or misspellings; no ad copy/URL containing the mark; no direct paid-ad links; no impersonation, link masking, cookie stuffing, unsolicited bulk email, or mass SMS. Use of marks/materials is limited to approved assets and may not imply endorsement.
- **Disclosure:** The Agreement requires clear disclosure of the partner relationship on Partner-owned websites.
- **Registry status:** `INTERNAL_ONLY`. The supplied destination is intentionally absent from this repository. The current registry is a committed client-side TypeScript module, so it cannot receive the sensitive destination under the owner instruction.
- **Editorial activation:** Not activated. Existing Optery editorial conclusions remain unchanged and are documented in `docs/quality/optery-affiliate-independence-audit-2026-07-20.md`.
- **Implementation status:** `BLOCKED — OWNER ARCHITECTURE / ACCOUNT ACTION REQUIRED`. A compliant server-side redirect or another private centralized configuration mechanism, plus necessary hosting configuration, must be approved before implementation can resume.
- **Full sanitized record:** `docs/monetization/optery-affiliate-readiness-2026-07-20.md`.

**Durable Optery rule:** Unless future written terms explicitly authorize it, CBT must not run Optery-branded paid search, bid on Optery misspellings, impersonate Optery, or direct paid ads to Optery.

### RoboForm

RoboForm is approved through CJ and active in the centralized affiliate registry after completion of the approved RoboForm research, editorial brief, and review pipeline.

Affiliate search policy: affiliates may use generic SEO keywords, but may not use RoboForm trademark terms, domain names, misspellings, or variations in paid search.

### Proton CJ / Proton Partners Program

- Proton Partners Program is available through CJ.
- Proton VPN tracking link is captured and active in the centralized registry.
- Proton Mail tracking link is captured for future use only; do not use it until a Proton Mail page exists and the landing page is confirmed.
- Proton Pass may also be available through CJ, but the current Proton Pass activation uses MaxBounty.
- Affiliate approval does not affect editorial conclusions, rankings, verdicts, or recommendation language.

### Proton MaxBounty

- Proton Pass campaign: Proton Pass - Secure Password Manager - CPS (US), campaign ID 30552.
- Proton Pass payout shown: $37.50 per subscription sale.
- Proton Unlimited campaign: Proton Unlimited - Secure VPN, Email, Pass & Drive Bundle - CPS (US), campaign ID 32290.
- Proton Unlimited payout shown: $67.50 per paid subscription sale.
- Proton Unlimited is future-use only unless a Proton suite page is built.
- Countries shown for these MaxBounty campaigns: United States.
- No incentivized traffic.
- No unauthorized trademark bidding.
- No brand bidding.
- No direct linking from Google Ads.
- Do not use the "Proton" brand name in Google ads.
- Google ads must link to Choose Better Tech first, not directly to Proton.
- Traffic must go to the Proton landing page, not the Proton mobile application.
- Deceptive or misleading creative is prohibited.
- Reversals may occur for fraud or users who use the 30-day money-back guarantee.
- Creatives may require approval.

### Acronis via CJ — U.S. consumer program

Checked date: 2026-07-17

- **Program type:** Network-hosted affiliate program through CJ.
- **Advertiser application status:** Application completed.
- **Advertiser approval:** `APPROVED`. CBT received approval for the Acronis U.S. consumer program.
- **Terms review:** `TERMS_REVIEWED` from the approved program terms.
- **Consumer commission:** 15%.
- **Corporate commission:** 2.5%.
- **Attribution:** 45-day referral period; the reviewed terms state unlimited qualifying occurrences.
- **Coupons:** Only coupons supplied by the program may be used.
- **Paid search:** Branded SEM requires prior written permission.
- **Domain restriction:** The word “Acronis” may not be used in a website domain.
- **Affiliate-link generation:** Completed. Approved U.S. consumer tracking destination: `https://www.dpbolvw.net/click-101816242-17031939`.
- **Registry status:** Not entered. No Acronis record exists in `src/data/affiliateLinks.ts`.
- **Editorial activation:** Not authorized by this approval record.
- **Live-site implementation:** Not authorized; none exists.
- **Status:** `APPROVED — LINK GENERATED — IMPLEMENTATION NOT AUTHORIZED`.
- **Next action:** Preserve the approved tracking destination for a separately authorized implementation task. Before any active placement, confirm the specific editorial surface independently, add the destination only through `src/data/affiliateLinks.ts`, and recheck current program terms and landing-page behavior.

## Cloud Storage Cluster — Affiliate Operational Status

Checked date: 2026-07-13

This section records the current operational state of Cloud Storage monetization activity authorized under `docs/monetization/cloud-storage-monetization-opportunity-map.md`. None of the activity below authorizes a link, registry entry, or editorial change. It is documentation of network/advertiser relationship status only.

Status legend used below:

- `ACCOUNT_CREATED` — a network or direct-program account exists.
- `ACTIVE_ACCOUNT` — the account is confirmed active and the dashboard/terms are reachable.
- `ONBOARDING_IN_PROGRESS` — an application or onboarding flow has been started but not confirmed complete or approved.
- `TERMS_REVIEWED` — commission, attribution, locking, or payout terms have been read (public or logged-in), independent of approval status.
- `APPROVAL_UNCONFIRMED` — no repository evidence establishes advertiser approval; approval must not be claimed.
- `NOT_STARTED` — no account, application, or terms-review activity has occurred.
- `LINK_IMPLEMENTATION_NOT_AUTHORIZED` — link generation and site implementation are explicitly out of scope until a separate authorization occurs.

### pCloud

- **Program type:** Direct affiliate program.
- **Network account status:** `ACTIVE_ACCOUNT`. A pCloud affiliate account was created using `hello@choosebettertech.com`. Account access is active and the affiliate dashboard is reachable.
- **Advertiser application/approval:** Not applicable as a separate step for this direct program; account activation itself constitutes program access. No separate advertiser-approval notice exists beyond dashboard access, so no additional approval claim is made.
- **Terms review:** `TERMS_REVIEWED`. The dashboard presents 20% commission on recurring subscription payments and 20% commission on lifetime-plan payments.
- **Attribution conflict:** Unresolved. Official public statements conflict between a 45-day and a 90-day attribution/cookie period. This conflict was already on record in `docs/monetization/cloud-storage-monetization-opportunity-map.md` (checked 2026-07-12) and is preserved here rather than resolved by assumption. Do not implement a link or represent a specific attribution window until this is clarified in writing by pCloud.
- **Affiliate-link generation:** Not started. No pCloud affiliate link has been generated.
- **Registry status:** Not entered. No pCloud record exists in `src/data/affiliateLinks.ts`.
- **Editorial activation:** Not authorized.
- **Live-site implementation:** Not authorized; none exists.
- **Status:** `ACTIVE_ACCOUNT — LINK IMPLEMENTATION NOT AUTHORIZED`
- **Next action:** Obtain written clarification of the 45-day-versus-90-day attribution conflict before any further action is considered. No application or outreach beyond the existing account is authorized by this record.
- **Checked date:** 2026-07-13

### Awin (network) and Sync.com (advertiser)

- **Program type:** Network-hosted affiliate program.
- **Network account status:** `ONBOARDING_IN_PROGRESS`. Choose Better Tech began Awin publisher onboarding using publication-specific information:
  - Publication email: `hello@choosebettertech.com`
  - Publication description: "Choose Better Tech is an independent software review site publishing evidence-based comparisons and buying guides on privacy, security, cloud storage, VPNs, password managers, and data-removal tools."
  - Content-interest tags: `software,technology,privacy,cybersecurity,cloudstorage,vpn,passwordmanagers,dataremoval,productivity,softwarereviews,buyingguides,comparisons,consumertech,saas,onlineprivacy`
- **Advertiser application status (Sync.com):** Recorded as onboarding/application activity only. No confirmation exists that the Sync.com merchant program has been applied to or reviewed at the account level beyond the general Awin publisher onboarding above.
- **Advertiser approval (Sync.com):** `APPROVAL_UNCONFIRMED`. Do not state that Sync.com has approved CBT. No repository evidence independently confirms Sync.com approval.
- **Terms review:** Not yet completed at the merchant/account level. The public-page terms previously recorded in `docs/monetization/cloud-storage-monetization-opportunity-map.md` (50% one-time commission on annually paid orders, capped at $150; free-trial conversions excluded) remain the only terms on file; account-level Awin/Sync.com terms are unverified.
- **Affiliate-link generation:** Not started.
- **Registry status:** Not entered.
- **Editorial activation:** Not authorized.
- **Live-site implementation:** Not authorized; none exists.
- **Status:** `ONBOARDING_IN_PROGRESS — SYNC.COM APPROVAL UNCONFIRMED`
- **Next action:** Complete Awin publisher onboarding; then separately confirm whether Sync.com has approved CBT's affiliate application before any further step.
- **Checked date:** 2026-07-13

### Internxt (advertiser) via Impact (network)

- **Program type:** Network-hosted affiliate program (Impact-hosted signup/login for Internxt's public program).
- **Network account status:** Terms were reviewed while logged in; this record does not independently confirm that an Impact publisher account has been fully approved or that an Internxt application has been accepted. Treat account/application status as `APPROVAL_UNCONFIRMED` unless separately verified.
- **Terms review:** `TERMS_REVIEWED`. Logged-in Internxt terms were reviewed and recorded in full detail below. These logged-in, account-level terms supersede and clarify the prior public-page summary recorded in `docs/monetization/cloud-storage-monetization-opportunity-map.md` (checked 2026-07-12), which stated a flat 30% on annual plans / 15% on lifetime sales with a 30-day cookie. The public-page summary is preserved unchanged in that document for audit purposes; the logged-in terms below are the more authoritative, current account-level source.

**Internxt / Impact logged-in terms (checked 2026-07-13):**

*Payment conversion*

- Orders with total greater than EUR 99: 15% of order sale amount.
- All other qualifying orders: 30% of order sale amount.
- Signup action: EUR 0.00.

*Attribution*

- Purchase credit policy: winner of signup, cascading to last click.
- Parent-action attribution allowed for up to 400 days.
- Click attribution allowed for 30 days.
- Signup credit policy: last click.
- Signup click attribution: 30 days.

*Locking and payment*

- Purchase actions lock 27 days after the end of the month in which they are tracked.
- Approved purchase transactions are scheduled for payment 20 days after the end of the month in which they lock.
- Signup actions lock 10 days after the end of the tracking month.
- Approved signup transactions are scheduled for payment 20 days after the end of the month in which they lock.

*General*

- Currency: EUR.
- Terms may be changed or cancelled with one day's notice.
- A stand-down policy applies.
- Advertiser reversals are permitted up to a maximum reversal percentage of 100%.
- Media partners may not fire their own tracking pixel at conversion.
- Recurring commission is not claimed; no separate terms confirming a recurring model were reviewed.

- **Advertiser approval:** `APPROVAL_UNCONFIRMED`. Do not claim Internxt approval or activation unless explicit repository evidence confirms it.
- **Affiliate-link generation:** Not started.
- **Registry status:** Not entered.
- **Editorial activation:** Not authorized.
- **Live-site implementation:** Not authorized; none exists.
- **Status:** `TERMS_REVIEWED — APPLICATION/ACCEPTANCE STATUS UNCONFIRMED`
- **Next action:** Confirm Internxt/Impact application and acceptance status in writing before any further step.
- **Checked date:** 2026-07-13

### Tresorit (advertiser) via PartnerStack (network)

- **Program type:** Network-hosted affiliate program (public PartnerStack marketplace listing).
- **Network account status:** `NOT_STARTED`. No PartnerStack account, Tresorit application, or logged-in terms review has occurred.
- **Advertiser approval:** Not applicable; no application exists.
- **Terms review:** Not started beyond the public marketplace listing already recorded in `docs/monetization/cloud-storage-monetization-opportunity-map.md` (50% of initial sale, capped at $2,000 per successful sale; cookie, validation, and reversal terms unverified).
- **Affiliate-link generation:** Not started.
- **Registry status:** Not entered.
- **Editorial activation:** Not authorized.
- **Live-site implementation:** Not authorized; none exists.
- **Status:** `PENDING — NOT STARTED`
- **Next action:** The roadmap previously recommended applying. No signup, application, or approval has occurred. Any future application requires a separately authorized task.
- **Checked date:** 2026-07-13

## Approval and Access Do Not Authorize Editorial or Site Changes

For every provider in this playbook, including those with an active network/direct account, explicit advertiser approval, reviewed terms, or a generated tracking link: those facts do not, by themselves, authorize editorial inclusion, ranking influence, CTA placement, or link implementation. Editorial content and recommendation decisions must continue to be made independent of affiliate status. Any future link implementation requires a dedicated, separately authorized task that updates `src/data/affiliateLinks.ts` under the existing centralized-registry rule.
