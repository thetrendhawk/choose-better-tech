# Data Removal Batch 01 — Publishing Log

**Charter:** `docs/editorial/data-removal-batch-01-charter.md`  
**Status:** Active  
**Started:** 2026-07-19

## Batch slate

| Order | Article | Status | Live URL | Monetization status | Notes |
|---:|---|---|---|---|---|
| 1 | Optery Review | Published / Verified | `/reviews/optery-review` | Affiliate application submitted 2026-07-18; pending approval | Final article, reviewer/date metadata, SEO, non-affiliate fallback, route/index inclusion, successful production deployment, and HTTP 200 verified |
| 2 | Incogni Review | In progress: research and implementation recheck complete | `/reviews/incogni-review` | No approved CBT affiliate link; internal comparison fallback | Current official plan terms, coverage, assurance, limitations, metadata, visible sources, CTA behavior, and SEO refreshed locally; validation and publication pending |
| 3 | DeleteMe Review | Planned | `/reviews/deleteme-review` | To evaluate | Existing route and review foundation found in repository |
| 4 | Optery vs Incogni | Planned | `/comparisons/incogni-vs-optery` | To evaluate | Existing comparison foundation found in repository |
| 5 | Incogni vs DeleteMe | Planned | `/comparisons/incogni-vs-deleteme` | To evaluate | Existing comparison foundation found in repository |
| 6 | Optery vs DeleteMe | Planned | `/comparisons/optery-vs-deleteme` | To evaluate | Existing comparison foundation found in repository |
| 7 | How Long Does Data Removal Take? | Planned | — | Informational | Supports review and comparison conversion paths |
| 8 | Can Your Information Reappear After Data Removal? | Planned | — | Informational | Supports expectations and trust |

## Publication record

### Optery Review

- **Title:** Optery Review (2026): Is It Worth Paying For?
- **Live URL:** `https://choosebettertech.com/reviews/optery-review`
- **Published:** 2026-07-19
- **Production commit:** `790dbb1204b8b211f6dfb7aef04de4b1e38d161f`
- **Production deployment:** `dpl_4FNMVacyHoZRTDAmmf53895K11zu`
- **Verification:** Vercel production deployment READY; live route returned HTTP 200.
- **Editorial conclusion:** Recommended for users who value recurring data-broker maintenance, exposure visibility, and screenshot-based proof. Not recommended as a complete or permanent internet-erasure solution.
- **Monetization:** Optery affiliate application pending. The provider remains `PENDING`, tracking is disabled, and the current CTA uses the internal non-affiliate fallback until approval and destination details are confirmed.
- **Evidence used:** Current Optery privacy and help documentation, Consumer Reports' people-search removal study, and the 2025 academic study of commercial PII-removal services.
- **Important limitations retained:** Incomplete removal, possible false matches, reappearance, unavailable screenshots for restricted databases, public-record/social-media/dark-web exclusions, and the privacy tradeoff of supplying identity data.

## Current work

### Incogni Review

- Research recheck completed against current Incogni pricing/help/privacy materials, the Deloitte limited-assurance report, Consumer Reports category evidence, FTC guidance, and the 2025 PoPETs study.
- Existing verdict retained: Incogni is a strong automation-first option for recurring broker-removal maintenance, not complete internet deletion.
- Current official plan structure, pricing context, family limits, Protect restrictions, visible sources, reviewer/update metadata, non-affiliate CTA behavior, and SEO were refreshed locally.
- Monetization review found no confirmed approved CBT publisher affiliate path or verified tracking destination. The customer referral program is not being treated as editorial affiliate approval.
- Next action: run full validation, commit, publish, and verify production.
- Stop conditions: weak evidence, unresolved monetization terms, or a recommendation that cannot be supported without hands-on testing.
