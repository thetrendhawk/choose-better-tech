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
| PartnerStack / Optery Affiliate Program | Optery | `optery` | ACTIVE; internal redirect only | Yes | UNKNOWN | UNKNOWN | UNKNOWN | Reconciliation incomplete |
| Internal | Incogni | `incogni` | INTERNAL_ONLY | No | Not applicable | Not applicable | Not applicable | No affiliate reconciliation |
| CJ Affiliate / DeleteMe Affiliate Program | DeleteMe | `deleteme` | PENDING | No | UNKNOWN | UNKNOWN | UNKNOWN | Reconciliation incomplete |

Where playbook or content-dashboard wording differs from the centralized registry, this ledger records the registry status and preserves the separate editorial-activation distinction. No financial conclusion is inferred from either status.

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

