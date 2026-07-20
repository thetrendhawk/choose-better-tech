# Optery Affiliate-Readiness Record

- Status: BLOCKED — destination-storage architecture requires owner action
- Reviewed: 2026-07-20
- Scope: Optery consumer affiliate program only; no ranking, verdict, or article expansion
- Sensitive destination: supplied separately by the owner; intentionally omitted from this record

## Evidence classification

| Item | Classification | Result |
| --- | --- | --- |
| Program platform | Optery claim | PartnerStack hosts management, link tracking, resources, and commission processing. |
| 30% / first 12 months | Owner-observed dashboard fact; independently corroborated by Optery claim | Optery's public program page says 30% commission for the first 12 months for each new referred customer. The exact eligible-payment mechanics remain governed by the authenticated Affiliate Tool. |
| 90-day window | Optery claim | Each click starts a 90-day tracking window; a new click resets it. Attribution is unavailable when the referral blocks PartnerStack cookies. |
| Payout timing | Optery claim | The public program page says commissions are processed 35 days after each referral customer transaction. |
| Eligible plans | Optery claim | The public page says Monthly, Yearly, Personal, Family, and Business plans are commissionable. This needs authenticated-tool confirmation before representing a specific purchase as eligible. |
| Customer markets | Optery claim | The affiliate page currently says USA only, with Canada and Europe coming soon. The current pricing page presents country selectors beyond the USA, so public sources conflict; CBT must not make a market claim in a CTA. |
| Refunds / reversals | Official contractual term | Optery may reduce, deduct, or offset commission if a customer refund or reversal occurs. |
| Lead acceptance / attribution | Official contractual term | New, valid leads are subject to Optery acceptance; first partner to effect an Optery sign-up is eligible. The exact validity period is the Affiliate Tool or Program Policies. |

## Official sources reviewed

- Optery Affiliate Program, current public page: commission presentation, plans, 90-day tracking, payout claim, platform, markets, coupon availability, and traffic-channel description.
- Optery Affiliate Referral Agreement, last updated 2025-10-15: acceptance, commissions, disclosure, restrictions, trademark use, refunds/reversals, termination, and incorporated Program Policies.
- Optery Help Center article, updated 2026-02-14: public summary of program restrictions.
- Optery pricing page: current plan names and volatile coverage/pricing context.
- PartnerStack public legal index: platform-level legal material is public, but no Optery-specific authenticated offer terms were available there.

## Channel and compliance record

| Topic | Verified result | CBT implementation rule |
| --- | --- | --- |
| Owned editorial website | Permitted in Optery's affiliate-program description, subject to acceptance and domain registration in the Affiliate Tool. | Do not activate until the owner confirms the CBT domain is accurately registered in the Affiliate Tool. |
| Organic editorial links | Inference from the unique-link license and website channel description; not separately guaranteed by the public page. | Eligible in principle only after the architecture blocker is resolved; links must remain editorially justified and disclosed. |
| Paid search / branded search | Contractually prohibited for Optery or misspellings; ads may not include Optery in ad text or URLs. | Prohibit Optery-branded paid search and misspellings. |
| Direct paid-ad linking | Contractually prohibited for ads to Optery websites or apps. | Prohibit direct paid-ad linking. |
| Paid social | No separate public rule found. The broad prohibition on purchasing ads containing Optery applies, while generic paid social is unresolved. | Do not use paid social pending written authorization. |
| Email / SMS | Website, email newsletters, text, and social are described as channels; mass SMS and unsolicited bulk email are prohibited. | No email or SMS activation in this workload; require consent, applicable-law compliance, and written confirmation for any future campaign. |
| Coupons / incentives | Custom codes may be offered to proven partners; customer promo codes are said to preserve payout. | No coupon, incentive, or savings language. Use only a code expressly issued to CBT after separate approval. |
| Trademarks / domains | Marks only as made available; no implication of endorsement; no Optery in domains, subdomains, usernames, or handles. | Use ordinary nominative editorial naming only; do not use marks in branding or paid creative. |
| Claims and materials | Unauthorized representations are barred; materials and mark use require approval. | Do not import program-page marketing language. Use CBT's independently supported claims only. |
| Disclosure | Partner must clearly state its partner status on owned sites and is solely responsible for disclosure. | Keep CBT's plain-language disclosure visible on each activated page and close to any commercial CTA. |
| Termination / clawback | 15-day no-cause termination; immediate termination is possible for specified cause; post-termination commission is limited and fraud can void payment. | Treat the program as revocable; link activation must be centrally disableable. |

## Unresolved contractual questions

1. The authenticated Affiliate Tool / Program Policies govern the exact commission amount, payment cadence, lead validity period, minimum customer-retention period, eligible-plan exclusions, payout threshold/method, and any locking rules. Those terms were not available through public sources.
2. The public affiliate page's USA-only wording conflicts with the current pricing page's additional country selectors. Customer-market scope is unresolved for promotional use.
3. Public materials do not separately authorize paid social, incentive traffic, or the supplied custom link's deep-link behavior.
4. No public evidence establishes whether the supplied custom link preserves attribution after a redirect or on every current plan; test only in the authenticated program tooling after the storage architecture is resolved.

## Durable Optery-specific restriction

Unless future written Optery terms expressly authorize it, CBT must not use Optery-branded paid search, Optery misspellings in paid search, impersonation, or direct paid-ad links to Optery. This rule applies only to Optery.

## Implementation decision

No affiliate destination was added. CBT's current centralized registry stores destinations in a committed client-side TypeScript module, which is incompatible with the owner instruction that the supplied sensitive destination must not be stored in public source control. Static client delivery would also expose it in the browser bundle. A compliant design requires an owner-approved server-side redirect/edge route or another private configuration mechanism plus the necessary hosting/account configuration; none exists in the current architecture.

## Refresh cadence

Recheck official agreement, Program Policies, authenticated Affiliate Tool terms, tracking behavior, eligible plans, markets, and pricing immediately before any implementation and at least quarterly while active.
