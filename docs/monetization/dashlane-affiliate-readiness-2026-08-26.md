# Dashlane Affiliate Readiness — 2026-08-26

Status: APPROVED RELATIONSHIP — TERMS REVIEWED — LINK CAPTURED — EDITORIAL RESEARCH APPROVED — LIVE ACTIVATION NOT YET IMPLEMENTED
Owner: Choose Better Tech
Network: CJ Affiliate
Checked date: 2026-08-26

## Purpose

This record preserves the Dashlane affiliate relationship, authenticated CJ terms, current tracking-link state, unresolved commercial-term discrepancies, and the editorial controls that apply before any tracked Dashlane link is activated on Choose Better Tech.

This record contains no credentials, tax information, banking information, account tokens, recovery codes, or private authentication data.

## Approval evidence

- CBT received a Dashlane affiliate-program acceptance email on 2026-08-26.
- The authenticated CJ advertiser view shows Dashlane as an active advertiser relationship.
- Approval is therefore established; it is not inferred from dashboard visibility alone.

## Captured CJ tracking link

Captured 2026-08-26 from CJ's generated code for the `Dashlane's Personal Plans` text link:

- CJ advertiser ID: `4395908`
- CJ publisher/site: Choose Better Tech
- CJ publisher ID: `101816242`
- CJ link ID: `15383624`
- Tracking destination: `https://www.jdoqocy.com/click-101816242-15383624`
- Visible merchant destination: Dashlane personal pricing/plans page
- CJ asset last-updated date shown: 2024-07-23

The tracking URL was copied from CJ-generated code; it was not inferred from another advertiser's URL pattern. Canonical capture record: `docs/monetization/dashlane-link-capture-2026-08-26.md`.

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
- Because the referral-period field says 45 days while the descriptive copy says 60 days, CBT preserves this as an unresolved 45-day/60-day conflict rather than choosing one by assumption.
- Pricing shown inside CJ is not approved for publication by this record. Public product pricing must be independently reverified before an article quotes it.

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

The acceptance email describes a different consumer account-creation schedule:

- $2 for every new Dashlane account created.
- $3 for account creations equal to or greater than 500.
- $4 for account creations equal to or greater than 1,000.
- 25% commission on every Premium Account purchase.

The authenticated CJ action table instead shows $3 base / $4 at 500+ / $5 at 1,000+ for Desktop Account Creation, plus a separate $1 Mobile Account Creation action.

CBT must not silently reconcile these terms. Until Dashlane or CJ clarifies the difference, internal records treat the authenticated action table as the more granular operational source while preserving the welcome-email conflict.

## Marketing restrictions reviewed in CJ

- Protected SEM bidding keywords include Dashlane, common misspellings, related brand variants, and other protected terms.
- Dashlane brand terms, common misspellings, or related variants may not be used in prohibited SEM display URLs or ad copy.
- Dashlane brand terms and close variants, including misspellings, may not be used as website-domain or website-URL keywords; no URL hijacking.
- Incentivized traffic is not allowed unless separately arranged with Dashlane.
- Email is allowed.
- Software distribution is not allowed without contacting Dashlane.
- Sub-affiliates are allowed.
- Social media is allowed.
- Coupons and promotional codes may be used only when supplied through the affiliate program or otherwise public.

## Editorial independence and research state

Affiliate approval does not justify changing existing editorial conclusions.

Repository and fresh-source review on 2026-08-26 found:

- No live `/reviews/dashlane-review` page exists yet.
- Dashlane cannot be added to `/best-free-password-managers` because its permanent Free plan ended in 2025.
- `/best-password-managers-for-privacy` can keep its existing exclusion: Dashlane has credible zero-knowledge/security transparency but no distinct enough privacy advantage over the guide's current included fits.
- Dashlane has an independently earned family-plan distinction: Friends & Family supports 10 independent accounts, more than the 5–6 accounts in CBT's current ranked family picks.
- The evidence supports a dedicated review positioning Dashlane as strongest for larger households and proactive account protection, with tradeoffs around paid-only consumer access and less organizer-centric family recovery.

Canonical editorial research:

- `docs/research/canonical/dashlane-review-research.md`
- `docs/editorial/dashlane-review-brief.md`

## Implementation state

- Advertiser approval: COMPLETE.
- Authenticated terms review: COMPLETE.
- Restrictions review: COMPLETE.
- Affiliate-link generation/capture: COMPLETE.
- Canonical product research: COMPLETE for implementation planning; final volatile claims must still be rechecked before publication.
- Editorial brief: COMPLETE.
- Centralized `src/data/affiliateLinks.ts` entry: NOT PRESENT.
- Dedicated live review page: NOT PRESENT.
- Live-site affiliate implementation: NOT PRESENT.

## Remaining blockers to live activation

1. Build the dedicated Dashlane review under the approved editorial brief.
2. Reverify exact consumer pricing/renewal/trial terms and the final versions of the 2026 security advisories immediately before publication.
3. If making experiential UX/performance claims, obtain hands-on evidence or clearly attributed independent evidence rather than inventing experience.
4. Add Dashlane only through `src/data/affiliateLinks.ts`; do not hard-code the CJ URL in the page.
5. Use CBT's existing `AffiliateButton`, disclosure behavior, and `affiliate_click` tracking path.
6. Run the normal test/build/prerender/analytics/production-validation pipeline before deployment.

## Non-blocking commercial unknowns

The following should remain documented and may warrant later clarification, but they do not block an evidence-based product review or ordinary affiliate activation:

- Welcome email payout tiers: $2/$3/$4 vs authenticated desktop action table: $3/$4/$5.
- Premium attribution wording: 60 days from registration in descriptive copy vs 45-day CJ referral-period field.

## Decision

**Proceed to dedicated Dashlane review implementation. Do not alter existing rankings merely because the affiliate relationship is approved.**
