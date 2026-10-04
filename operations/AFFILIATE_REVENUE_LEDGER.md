# Affiliate Revenue Reconciliation Ledger

**Version:** 1.0  
**Status:** Active; first period open  
**Owner:** Choose Better Tech; Aaron is the sole ledger owner  
**First reporting period:** 2026-07-01 through 2026-07-31

## Authority and privacy boundary

This is the authoritative repository record for reporting periods, affiliate networks, approved products/offers, GA4 `affiliate_click` totals, partner-reported clicks, conversions, pending/approved/reversed/paid commissions, payment dates, expenses, net results, discrepancies, evidence status, and operator notes.

Private dashboards, statements, payment records, tax records, account identifiers, tracked destinations, and credentials remain outside GitHub. The repository records evidence type, date, verified status, and non-sensitive keys only. No amount may be entered without evidence.

The centralized registry in `src/data/affiliateLinks.ts` is authoritative for implemented product/network status. The affiliate playbook and content dashboard may contain future-use or stale editorial activation notes; those do not create financial evidence or authorize activation.

## Financial interpretation rules

- Clicks are not revenue.
- Conversions are not necessarily approved commissions.
- Approved commissions are not necessarily paid commissions.
- Paid commissions are not profit.
- Profit requires verified revenue minus verified expenses.
- Missing evidence is `UNKNOWN`, never an assumed zero.

## Canonical status definitions

| Status | Minimum evidence |
|---|---|
| `UNKNOWN` | Source unavailable, not checked, or insufficient to classify. |
| `No activity` | Authoritative period-specific network and GA4 evidence shows no activity; absence of a record alone is insufficient. |
| `Clicks observed` | GA4 or partner evidence shows clicks, with source and period recorded. |
| `Conversion reported` | Authorized partner evidence reports a conversion, but commission state is not yet established. |
| `Commission pending` | Partner evidence identifies a commission awaiting lock/approval. |
| `Commission scheduled` | Partner explicitly displays Scheduled with a future commission date; not approval or payment. |
| `Commission approved` | Partner statement/dashboard explicitly identifies the commission as approved/locked. |
| `Commission reversed` | Partner evidence explicitly identifies a reversal, decline, refund, or chargeback. |
| `Commission paid` | Payment confirmation or authoritative partner/payment record confirms payment and date. |
| `Reconciliation incomplete` | One or more required sources or fields are unresolved. |
| `Reconciled` | Required GA4, partner, commission, payment, expense, discrepancy, and evidence fields are complete for the period. |

## First period: 2026-07-01 through 2026-07-31

**Period status:** `Open`. The month is not closed and no final monthly totals are entered.

- Production `affiliate_click` delivery is verified in GA4 Realtime.
- Network clicks: `UNKNOWN`.
- Conversions: `UNKNOWN`.
- Pending, approved, reversed, and paid commissions: `UNKNOWN`.
- Expenses and net result: `UNKNOWN`.
- These UNKNOWN values are not zeros and do not imply no activity.
- First-period close must follow the month-end checklist below.

## Network and product inventory

This inventory records non-sensitive registry facts only. “Click tracking active” means the registry record is active and tracking-enabled; it is not evidence of clicks, conversions, or revenue.

| Network | Product/service | Registry key | Registry status | Click tracking active | Conversion evidence | Commission evidence | Payment evidence | Reconciliation |
|---|---|---|---|---|---|---|---|---|
| MaxBounty | NordVPN | `nordvpn` | ACTIVE | Yes | UNKNOWN | UNKNOWN | UNKNOWN | Reconciliation incomplete |
| CJ | Proton VPN | `protonvpn` | ACTIVE | Yes | UNKNOWN | UNKNOWN | UNKNOWN | Reconciliation incomplete |
| CJ | Surfshark | `surfshark` | ACTIVE | Yes | UNKNOWN | UNKNOWN | UNKNOWN | Reconciliation incomplete |
| Internal | VPN buying guide | `vpn-comparison` | INTERNAL_ONLY | No | Not applicable | Not applicable | Not applicable | No affiliate reconciliation |
| Internal | 1Password | `onepassword` | INTERNAL_ONLY | No | Not applicable | Not applicable | Not applicable | No affiliate reconciliation |
| Internal | Bitwarden | `bitwarden` | INTERNAL_ONLY | No | Not applicable | Not applicable | Not applicable | No affiliate reconciliation |
| CJ | NordPass | `nordpass` | ACTIVE | Yes | UNKNOWN | UNKNOWN | UNKNOWN | Reconciliation incomplete |
| MaxBounty | Proton Pass | `protonpass` | ACTIVE | Yes | UNKNOWN | UNKNOWN | UNKNOWN | Reconciliation incomplete |
| CJ / Proton Partners Program | Proton Mail | `protonmail` | ACTIVE in centralized registry; editorial activation status is separately documented | Yes | UNKNOWN | UNKNOWN | UNKNOWN | Reconciliation incomplete |
| CJ / Proton Partners Program | Proton Drive | `protondrive` | ACTIVE | Yes | UNKNOWN | UNKNOWN | UNKNOWN | Reconciliation incomplete |
| MaxBounty | Proton Unlimited | `protonunlimited` | ACTIVE in centralized registry; editorial activation status is separately documented | Yes | UNKNOWN | UNKNOWN | UNKNOWN | Reconciliation incomplete |
| CJ | RoboForm | `roboform` | ACTIVE | Yes | UNKNOWN | UNKNOWN | UNKNOWN | Reconciliation incomplete |
| PartnerStack / Optery Affiliate Program | Optery | `optery` | ACTIVE; internal redirect only | Yes | 1 paid customer; 2 transactions; verified 2026-09-21 | $9.59 Scheduled; neither approved nor paid status displayed | $0 available; no withdrawals displayed on 2026-09-21 | Reconciliation incomplete |
| Internal | Incogni | `incogni` | INTERNAL_ONLY | No | Not applicable | Not applicable | Not applicable | No affiliate reconciliation |
| CJ Affiliate / DeleteMe Affiliate Program | DeleteMe | `deleteme` | PENDING | No | UNKNOWN | UNKNOWN | UNKNOWN | Reconciliation incomplete |

Where playbook or content-dashboard wording differs from the centralized registry, this ledger records the registry status and preserves the separate editorial-activation distinction. No financial conclusion is inferred from either status.

## Optery observation — September 21, 2026

Read-only authenticated PartnerStack dashboard evidence; USD. This is a dated observation, not a closed monthly reconciliation. Customer names, emails, account/record identifiers, complete transaction keys and private referral URLs are deliberately omitted.

| Source and selected period | Clicks | Signups | Paying customers | Transactions | Customer spend | Commission evidence |
|---|---:|---:|---:|---:|---:|---|
| Optery Summary / Performance, Last 30 days | 13 | 1 | 1 | 2 in customer detail | $31.97 | Summary displays $0 pending / $0 paid for this period; scheduled records are dated in the future. |
| Partnership and Link performance, Last 12 months | 32 (24 unique) | 1 | 1 | 2 | $31.97 | Link report labels $9.59 pending; detailed records explicitly say Scheduled. Partnership report displays $0 pending / $0 paid. Preserve the reporting distinction. |
| Customer performance, All time customer and transaction ranges | Not applicable | 1 customer record | 1, status Paid | 2 associated purchases | $31.97 | $9.59 total commissions |

The Last 30 days monthly breakdown shows September 12 clicks and August 1. These are not equivalent to the saved GA4 August 12–September 10 window. The September 10 historical 9-click observation is not a current balance or proof of nine organic clicks. No new affiliate click was generated in this investigation.

### Transaction and commission reconciliation

Both purchases belong to the same customer, created September 10 with source type `link`. The customer Products tab has no products, but commission details explicitly expose the following product keys. Plan and interval therefore come from those keys, not from price. The sequence does not establish an upgrade, proration, refund, or the customer's current subscription.

| Local evidence label | Transaction amount | Explicit product key / interval | Timestamp embedded in transaction key (UTC) | Commission | Actual displayed status | Displayed Earned / Created date | Estimated available date |
|---|---:|---|---|---:|---|---|---|
| Optery observation A | $11.99 | `extended-monthly` / monthly | 2026-09-10 21:26:05Z | $3.60 | Scheduled | 2026-10-15 | 2026-11-13 |
| Optery observation B | $19.98 | `ultimate-monthly` / monthly | 2026-09-10 21:43:48Z | $5.99 | Scheduled | 2026-10-15 | 2026-11-13 |

Local labels above are not customer or network identifiers. Activity feed dates both purchases and commission-earned events September 10; commission detail and the all-status Commissions table display October 15. Preserve both labels rather than treating October 15 as the purchase date. The $5.99 Payments tab contains a Scheduled $5.99 row dated October 15; the $3.60 Payments tab has no items. Neither is evidence of completed payment.

Scheduled total: **$9.59**. Available funds: **$0.00**. No approved, available, paid or declined commission rows were displayed; the all-status table contains these two Scheduled rows. Withdrawals: no records. Expenses/net profit remain UNKNOWN.

### Payout requirements and blockers

**September 21 owner-update follow-up (supersedes the initial setup blockers below):** Owner reported entering tax and PayPal information. After refreshing the authenticated Commissions page, PayPal is displayed as the withdrawal destination, the tax-registered-location warning and tax-info setup button are gone, and the ordinary Withdraw funds button is present but disabled. Available funds remain $0.00; both $3.60 and $5.99 commissions remain Scheduled with estimated November 13 availability. The displayed account-setup blockers are resolved; this is not independent tax-document validation or proof that commissions are approved/paid. No address, tax number, PayPal email or other payment identifier was copied into the repository. No withdrawal or setting change was made by the agent.

Initial observation, before the owner's update:

- Dashboard explicitly requires a tax-registered location. Receipt address/location fields are empty.
- Team Commissions settings show no payout methods; owner role is displayed. Owner must configure the chosen method and required tax/location information privately.
- PartnerStack requires available commissions and at least $5 after fees; timing depends on company review/funding. November 13 is an estimate, not a promise or completed approval.
- No funds were withdrawn, payment details changed, tax information entered, new terms accepted, or vendor messages sent.

### Attribution evidence and remaining gap

Commission report with **Next 12 months** selected exposes both Scheduled rows; Last 90 days returns no rows because of their future commission date. Both rows show click date September 10, United States, the program's private referral link, landing page `optery.com`, and target type `transaction`. Sub ID 1/2/3, Shared ID, Action and Referrer page are blank. Customer performance also has blank Sub IDs. One default referral link exists; no custom links exist.

This proves PartnerStack's association of the transactions/commissions with a referral-link click dated September 10. It does **not** identify the GA4 event: no shared click identifier, exact click time, Sub ID or referrer joins the two systems. The separately verified GA4 hour-12 Bing event remains an organic click; attributing this customer to it remains a timing-based inference. Do not compare transaction UTC times to a GA4 hour without confirming the GA4 reporting timezone.

### Placement improvement and validation boundary

Official format: `sid` for one Sub ID, or numbered `sid1`, `sid2`, etc. The three existing Optery review CTAs now use public `placement=review_top`, `review_verdict`, or `review_footer`; the server maps these to `sid=cbt_optery_review_top`, `cbt_optery_review_verdict`, or `cbt_optery_review_footer`. Unknown, duplicated or arbitrary values are not forwarded. Existing privately configured Sub IDs are preserved. No customer identifiers are used.

Current production HEAD check: HTTP 307, approved HTTPS host, private/no-store, noindex/nofollow, no existing Sub ID. The destination was not followed or printed. Local tests verify composition using dummy destinations, both GET/HEAD, query/fragment preservation, malicious/ambiguous inputs, fallback behavior and public-only analytics URLs. The private destination remains server-side.

Implementation is in [PR89](https://github.com/thetrendhawk/choose-better-tech/pull/89); production is not yet released. Preview at code commit `0957162` returned HTTP200 for the review with all three internal placement URLs; each redirect returned HTTP307 with its expected `sid`, no-store and noindex/nofollow. An unapproved placement produced no Sub ID. Redirects were not followed. PartnerStack documentation warns that company integrations can differ; Optery's general commission/customer reports expose Sub ID columns, but no program-specific Sub ID report was visible. Actual capture on a future tagged click/conversion remains **unverified**. After production release, verify a tagged record in PartnerStack before claiming end-to-end attribution. Static placement IDs distinguish buttons, not individual people, and cannot backfill September 10.

Official references checked September 21: [Sub ID format and reporting](https://support.partnerstack.com/hc/en-us/articles/360044949774-Tracking-referral-link-activity-and-conversions-via-Sub-IDs), [commission and payout requirements](https://support.partnerstack.com/hc/en-us/articles/360009501113-How-do-I-get-paid), [tax-location requirements](https://support.partnerstack.com/hc/en-us/articles/360048158113-Managing-tax-information). Account-specific findings above come from authenticated UI, not these general guides.

## Monthly summary template

All financial cells default to `UNKNOWN`, not zero.

| Reporting period | Network | Product | Page or content asset | GA4 clicks | Network clicks | Conversions | Pending commission | Approved commission | Reversed commission | Paid commission | Expenses | Net result | Discrepancy | Status | Evidence reference | Notes |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|---|
| 2026-07-01–2026-07-31 |  |  |  | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | Open / Reconciliation incomplete | GA4 and private partner evidence required | First period open |

## Payment ledger template

| Network | Payment period | Amount | Payment status | Payment date | Evidence held privately | Notes |
|---|---|---:|---|---|---|---|
|  |  | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | No payment evidence entered without an authoritative source |

## Discrepancy log template

| Date opened | Network/product | Discrepancy type | Description | Materiality | Owner | Next action | Due date | Resolution | Date closed |
|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  | Aaron / Choose Better Tech |  |  | UNKNOWN |  |

## Month-end close procedure

1. Freeze the reporting period and timezone.
2. Record GA4 `affiliate_click` totals.
3. Record network-reported clicks where available.
4. Record conversions.
5. Separate pending, approved, reversed, and paid commissions.
6. Record verified expenses.
7. Calculate net result only when both revenue and expenses are evidenced.
8. Investigate material discrepancies.
9. Mark unresolved fields `UNKNOWN`.
10. Update KPI and content dashboards only with verified figures.
11. Record the evidence location privately.
12. Mark the period `Reconciled` only when required evidence is complete.

## Acceptable and unacceptable evidence

### Acceptable

- Authorized partner dashboard records.
- Downloadable partner statements.
- Payment confirmations.
- Bank or payment-processor confirmations held privately.
- GA4 reporting evidence.
- Repository deployment and tracking evidence.
- Owner-confirmed private records, identified as such and not copied into GitHub.

### Unacceptable by itself

- Estimates or projected earnings.
- Screenshots without source/date context.
- Clicks treated as sales.
- Pending balances treated as paid.
- Memory alone.
- Promotional dashboard language.
- Unverified third-party claims.

## Material discrepancy rules

Open an investigation when any of the following occurs:

- GA4 and network clicks differ materially or repeatedly without an identified timing/measurement explanation.
- A conversion is reported without a commission status.
- An approved commission remains unpaid beyond the partner’s documented expected terms.
- A reversal or decline is unexplained.
- A payment does not match the authoritative statement.
- A repeated product-level attribution gap appears.
- A revenue claim lacks supporting evidence.

Materiality is assessed by percentage, recurrence, business impact, and decision relevance rather than an invented fixed dollar threshold. Preserve the discrepancy as `UNKNOWN` or `Reconciliation incomplete` until evidence resolves it.

## Ownership and privacy

Aaron is the sole ledger owner and sole recovery authority. No alternate financial or reconciliation operator is documented. Private statements and payment records remain outside GitHub. The repository may record evidence type, date, source category, and verified status without exposing financial details. Tax treatment is outside this ledger’s scope.

## Maintenance cadence

- Weekly: review event delivery exceptions and material affiliate changes.
- Monthly: perform the formal close and reconciliation.
- Quarterly: review registry status, terms, evidence retention, reporting configuration, and ownership.

