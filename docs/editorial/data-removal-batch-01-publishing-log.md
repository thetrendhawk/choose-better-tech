# Data Removal Batch 01 — Publishing Log

**Charter:** `docs/editorial/data-removal-batch-01-charter.md`  
**Status:** Active  
**Started:** 2026-07-19

## Batch slate

| Order | Article | Status | Live URL | Monetization status | Notes |
|---:|---|---|---|---|---|
| 1 | Optery Review | Published / Verified | `/reviews/optery-review` | Affiliate application submitted 2026-07-18; pending approval | Final article, reviewer/date metadata, SEO, non-affiliate fallback, route/index inclusion, successful production deployment, and HTTP 200 verified |
| 2 | Incogni Review | Published / Verified | `/reviews/incogni-review` | No approved CBT affiliate link; internal comparison fallback | Current research, reviewer/date metadata, pricing context, visible sources, schemas, CTA behavior, validation, exact-commit deployment, production desktop/mobile QA, sitemap, and HTTP 200 verified |
| 3 | DeleteMe Review | Published / Verified | `/reviews/deleteme-review` | Public CJ program found; CBT approval/destination unverified, tracking disabled | Current research, reviewer/date metadata, visible sources, schema, non-affiliate CTA, exact-commit deployment, production desktop/mobile QA, sitemap, and HTTP 200 verified |
| 4 | Optery vs Incogni | Published / Verified | `/comparisons/incogni-vs-optery` | Incogni unapproved; Optery application pending; no external tracking active | Current evidence, reviewer/date metadata, visible sources, schema, exact-commit deployment, desktop/mobile QA, sitemap, and HTTP 200 verified |
| 5 | Incogni vs DeleteMe | Published / Verified | `/comparisons/incogni-vs-deleteme` | Public programs found; CBT approvals/destinations unverified; no external tracking active | Current evidence, reviewer/date metadata, visible sources, schema, exact-commit deployment, desktop/mobile QA, sitemap, and HTTP 200 verified |
| 6 | Optery vs DeleteMe | Validation in progress | `/comparisons/optery-vs-deleteme` | Public programs found; CBT approvals/destinations unverified; no external tracking active | Current review evidence reconciled; reviewer/date metadata, visible sources, plan context, schema dates, and SEO implemented |
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

### Incogni Review

- **Title:** Incogni Review (2026): Is It Worth It for Data Broker Removal?
- **Live URL:** `https://choosebettertech.com/reviews/incogni-review`
- **Verified:** 2026-07-19
- **Content commit:** `155e57f2da4cfec3d6076910c5170cc556004b36`
- **Production deployment:** GitHub deployment `5507878800`; Vercel URL `https://choose-better-tech-566uivd1g-aaron-s-evans-projects.vercel.app`
- **Verification:** Exact commit deployed successfully; custom-domain route and deep refresh returned HTTP 200; canonical, title, H1, reviewer/update metadata, pricing context, visible sources, Review/FAQ schema, internal CTA, sitemap entry, desktop QA, and fresh 390px QA passed with no page-level overflow.
- **Editorial conclusion:** Recommended for beginners and mainstream buyers who want recurring, automation-first broker-removal maintenance. Not recommended as complete internet deletion or as a substitute for crisis-grade assistance, public-record remedies, Google removal workflows, or exact DIY control.
- **Monetization:** No confirmed approved CBT publisher affiliate relationship or tracking destination. The customer referral program was not treated as publisher approval. All Incogni CTAs use the internal Best Data Removal Services comparison fallback.
- **Evidence used:** Current Incogni pricing and help documentation, the 2025 Deloitte limited-assurance report, Consumer Reports category evidence, FTC guidance, and the 2025 PoPETs commercial-PII-removal study.
- **Testing:** No Incogni account, removal, support, billing, cancellation, or hands-on product testing was claimed.

### DeleteMe Review

- **Title:** DeleteMe Review (2026): Is It Worth It for Data Broker Removal?
- **Live URL:** `https://choosebettertech.com/reviews/deleteme-review`
- **Verified:** 2026-07-19
- **Content commit:** `8ef423a4d901d44919ca75d1de25543821a9ef5e`
- **Production deployment:** GitHub deployment `5507970360`; Vercel URL `https://choose-better-tech-1xw235la6-aaron-s-evans-projects.vercel.app`
- **Verification:** Exact commit deployed successfully; custom-domain route and direct deep refresh returned HTTP 200; canonical, title, H1, reviewer/update metadata, current pricing context, visible sources, Review/FAQ schema, internal CTA, sitemap entry, desktop QA, and fresh 390px QA passed with no page-level overflow.
- **Editorial conclusion:** Recommended for users who value human assistance, recurring reports, custom removals, and an established provider. Not recommended as complete internet deletion or as the best fit for lowest-cost automation, proof-first reporting, or disciplined DIY users.
- **Monetization:** DeleteMe publicly documents a CJ-based affiliate program, but CBT publisher approval and an exact tracking destination were not verified. Status remains `PENDING`, tracking is disabled, and CTAs use the internal Best Data Removal Services fallback.
- **Evidence used:** Current DeleteMe pricing, plan-coverage, reporting, timing, refund, and affiliate-program documentation; Consumer Reports' people-search removal study; FTC guidance; and the 2025 PoPETs commercial-PII-removal study.
- **Testing:** No DeleteMe account, removal, support, billing, cancellation, or hands-on product testing was claimed.

### Optery vs Incogni

- **Title:** Incogni vs Optery (2026): Which Data Removal Service Is Better?
- **Live URL:** `https://choosebettertech.com/comparisons/incogni-vs-optery`
- **Verified:** 2026-07-19
- **Content commit:** `063e2a345227abd96839d8498a2cbd18d668e769`
- **Production deployment:** GitHub deployment `5508036306`; Vercel URL `https://choose-better-tech-ko3hkjqc8-aaron-s-evans-projects.vercel.app`
- **Verification:** Exact commit deployed successfully; live route and deep refresh returned HTTP 200; current title/H1, canonical, reviewer/update metadata, plan context, visible sources, Article/FAQ schema, sitemap, desktop QA, and 390px no-overflow QA passed.
- **Editorial conclusion:** Choose Incogni for simpler recurring automation and broader geographic fit; choose Optery for exposure visibility, a free discovery entry point, and screenshot proof where available. Neither is complete or permanent internet deletion.
- **Monetization:** Incogni has no confirmed approved CBT publisher relationship; Optery's application remains pending. The page contains no external tracked CTA, and commercial status did not alter the verdict.
- **Testing:** No provider account, removal, billing, cancellation, support, speed, or hands-on product testing was claimed.

### Incogni vs DeleteMe

- **Title:** Incogni vs DeleteMe (2026): Which Data Removal Service Is Better?
- **Live URL:** `https://choosebettertech.com/comparisons/incogni-vs-deleteme`
- **Verified:** 2026-07-19
- **Content commit:** `ddc4e50efa874e2a248c09bdb673fa3631d9e344`
- **Production deployment:** GitHub deployment `5508089146`; Vercel URL `https://choose-better-tech-35ovb8wfd-aaron-s-evans-projects.vercel.app`
- **Verification:** Exact commit deployed successfully; live route and deep refresh returned HTTP 200; title/H1, canonical, reviewer/update metadata, price context, visible sources, Article/FAQ schema, sitemap, desktop QA, and 390px no-overflow QA passed.
- **Editorial conclusion:** Choose Incogni for lower-friction recurring automation and a lower verified annual entry price; choose DeleteMe for human assistance, reports, custom requests, and business maturity. Neither is complete or permanent internet deletion.
- **Monetization:** Public programs exist, but neither provider has a confirmed active CBT destination. The page contains no external tracked CTA, and commercial status did not alter the verdict.
- **Testing:** No provider account, removal, billing, cancellation, support, speed, or hands-on product testing was claimed.

## Current work

### Optery vs DeleteMe

- Current Optery and DeleteMe evidence was reconciled without changing the fit-based verdict: Optery for proof and exposure visibility, DeleteMe for human help and business maturity.
- Added current plan/refund context, visible sources, reviewer/update metadata, schema dates, and updated SEO.
- Neither provider has a confirmed active CBT tracking destination. The comparison contains no external affiliate CTA.
- Next action: complete validation, deploy the exact commit, verify production desktop/mobile behavior, and reconcile the publication record.
