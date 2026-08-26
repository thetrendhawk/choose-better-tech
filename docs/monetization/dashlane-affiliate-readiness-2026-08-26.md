# Dashlane Affiliate Readiness — 2026-08-26

Status: APPROVED RELATIONSHIP — TERMS REVIEWED — LINK NOT YET CAPTURED — EDITORIAL PLACEMENT NOT YET AUTHORIZED
Owner: Choose Better Tech
Network: CJ Affiliate
Checked date: 2026-08-26

## Purpose

This record preserves the current Dashlane affiliate relationship, the authenticated CJ terms reviewed on 2026-08-26, the discrepancies that remain unresolved, and the editorial constraints that apply before any tracked Dashlane link is activated on Choose Better Tech.

This record contains no credentials, tax information, banking information, account tokens, recovery codes, or private authentication data.

## Approval evidence

- CBT received a Dashlane affiliate-program acceptance email on 2026-08-26.
- The authenticated CJ advertiser view shows Dashlane as an active advertiser relationship.
- Approval is therefore established; it is not inferred from dashboard visibility alone.
- No Dashlane tracking destination has yet been captured into the repository.

## Authenticated CJ action terms reviewed

### Dashlane Desktop Account Creation

- Qualifying action: user enters an email address and creates a master password.
- Referral period: 1 day.
- Number of occurrences: unlimited.
- Locking method: Standard.
- Base commission: $3.00 per item.
- Performance incentive shown in CJ:
  - 500 or more actions: $4.00 per action.
  - 1,000 or more actions: $5.00 per action.

### Dashlane Premium Purchase

- Commission: 25%.
- Referral-period field: 45 days.
- Number of occurrences: unlimited.
- Locking method: Standard.
- The action description separately says a referred customer who upgrades to Dashlane Premium within 60 days of registration creates commissionable activity.
- Because the referral-period field says 45 days while the descriptive copy says 60 days, CBT must preserve this as an unresolved 45-day/60-day conflict rather than choose one by assumption.
- Pricing shown inside the CJ description is not approved for publication by this record. Public product pricing must be independently reverified before any CBT article quotes it.

### Dashlane Mobile Account Creation

- Qualifying action: user enters an email address and creates a master password on a mobile device.
- Referral period: 45 days.
- Number of occurrences: unlimited.
- Locking method: Standard.
- Commission: $1.00 per item.

### Dashlane Business Trial Registration

- Qualifying action: user signs up for a 30-day free trial of Dashlane Business.
- Referral period: 45 days.
- Number of occurrences: unlimited.
- Locking method: Standard.
- Commission: $2.00 per item.

### Dashlane Business Purchase

- Qualifying action: customer purchases a Dashlane Business plan for the organization.
- Referral period: 45 days.
- Number of occurrences: unlimited.
- Locking method: Standard.
- Commission: 25%.

## Welcome-email discrepancy

The Dashlane acceptance email describes a different consumer account-creation schedule:

- $2 for every new Dashlane account created.
- $3 for account creations equal to or greater than 500.
- $4 for account creations equal to or greater than 1,000.
- 25% commission on every Premium Account purchase.

The authenticated CJ program terms instead show $3 base / $4 at 500+ / $5 at 1,000+ for Desktop Account Creation, plus a separate $1 Mobile Account Creation action.

CBT must not silently reconcile these terms. Until Dashlane or CJ clarifies the difference, internal records should treat the authenticated action table as the more granular current operational source while explicitly preserving the welcome-email conflict.

## Marketing restrictions reviewed in CJ

- Protected SEM bidding keywords include Dashlane, common misspellings, related brand variants, and other protected terms.
- Dashlane brand terms, common misspellings, or related variants may not be used in prohibited SEM display URLs.
- Dashlane brand terms, common misspellings, or related variants may not be used in prohibited SEM ad copy.
- Search-marketing publishers with special questions are directed to Dashlane affiliates support.
- Dashlane brand terms and closely related variants, including misspellings, may not be used as website-domain keywords; no URL hijacking.
- Dashlane brand terms and closely related variants, including misspellings, may not be used as website-URL keywords; no URL hijacking.
- Incentivized traffic is not allowed unless separately arranged with Dashlane.
- Email is allowed.
- Software distribution is not allowed without contacting Dashlane.
- Sub-affiliates are allowed.
- Social media is allowed.
- Coupons and promotional codes may be used only when provided through the affiliate program or otherwise available to the public.

## Current CBT editorial inventory

The affiliate relationship does not justify changing existing editorial conclusions.

Current repository review found:

- No dedicated `/reviews/dashlane-review` page exists.
- `/best-free-password-managers` currently recommends Bitwarden Free, Proton Pass Free, NordPass Free, RoboForm Free, and browser-built-in managers based on the page's existing evidence. Dashlane is not currently one of its ranked free-plan picks.
- `/best-password-managers-for-privacy` explicitly lists Dashlane as an excluded candidate: CBT's current conclusion is that Dashlane has strong zero-knowledge documentation, export/deletion support, and a transparent 2026 account-attack advisory, but no distinct privacy advantage over the six included fits.
- Existing Dashlane references elsewhere are research/safety context rather than an already-approved commercial recommendation surface.

Therefore:

- Do not insert Dashlane into an existing ranking merely because affiliate approval was received.
- Do not replace an existing recommendation with Dashlane without a new evidence-based editorial review.
- Do not attach a Dashlane affiliate CTA to incidental safety/history mentions.

## Implementation state

- Advertiser approval: COMPLETE.
- Authenticated terms review: COMPLETE.
- Restrictions review: COMPLETE.
- Affiliate-link generation/capture: NOT COMPLETE.
- Centralized `src/data/affiliateLinks.ts` entry: NOT PRESENT.
- Editorial activation: NOT PRESENT.
- Live-site implementation: NOT PRESENT.

## Required next steps

1. Generate a standard approved Dashlane tracking link in CJ and capture the exact destination without guessing or constructing it from another CJ advertiser's URL pattern.
2. Preserve the tracking destination only through CBT's centralized affiliate-link mechanism; never hard-code it inside article components.
3. Obtain clarification from Dashlane/CJ if CBT needs to represent the account-creation tiers or Premium attribution window externally. The two unresolved conflicts are:
   - Welcome email: $2/$3/$4 vs authenticated desktop action table: $3/$4/$5.
   - Premium description: 60 days from registration vs CJ referral-period field: 45 days.
4. Before any live CTA is added, complete an independent Dashlane editorial/research decision. The best default is a dedicated Dashlane review or a deliberate update to an existing password-manager comparison where Dashlane earns inclusion on product merits.
5. Once an editorial surface is approved and a valid tracking URL is available, add Dashlane through `src/data/affiliateLinks.ts`, use the existing `AffiliateButton`/tracking system, preserve affiliate disclosure behavior, and run the normal test/build/prerender/production validation pipeline.

## Decision

**Proceed with affiliate readiness, but do not activate Dashlane on the live site yet.**

The remaining live-implementation blocker is not advertiser approval. It is the absence of a captured approved tracking destination and, separately, the absence of an independently approved Dashlane editorial surface. The commission-term discrepancies should be clarified or preserved as unresolved, but they do not prevent CBT from generating the affiliate link or beginning independent Dashlane product research.
