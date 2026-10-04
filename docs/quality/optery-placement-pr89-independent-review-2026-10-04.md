# Optery placement PR89 independent review

- Reviewer: independent Codex pass, separate from implementation author
- Date: October 4, 2026
- Reviewed: PR89 diff, API handler and server tests at `a0c1951a94858f676bec38a4e62566d1592a2a4a`; implementation commit `095716213829d31a878805cba28f02e600c027db`; current task register
- Scope: deployment of fixed placement attribution for three already approved Optery review buttons, plus dated operational observations. No new article, commercial placement, financial action, or product verdict.

## Main verdict challenged

The code can distinguish a fixed button position in a referral URL. It cannot establish downstream Optery capture, identify individual users, backfill earlier clicks, join a GA4 event to a customer, or prove a commission is approved or paid. PR documentation preserves these limits. This review did not access PartnerStack or independently reconfirm amounts or account setup.

## Critical logic rechecked

- API accepts only GET/HEAD and keeps HTTP307, no-store, noindex/nofollow, and safe configuration failure.
- Destination remains an environment value parsed server-side and restricted to HTTPS on `get.optery.com`. Caller-supplied redirect or Sub ID parameters are not copied.
- `Set.has` permits only three exact string placements; arbitrary strings and duplicate query arrays cannot select a tag.
- Existing `sid` and numbered `sid` parameters prevent adding or replacing configured attribution. Existing query values and fragments are retained.
- Client tagging requires Optery, an actual affiliate link, and the exact internal redirect. Disabled fallback remains unchanged.
- Review layout also requires the exact Optery review route. No extra button or article is introduced.

## Privacy and data checks

Tags encode public page/button categories, not customer information. Analytics receives the tagged internal URL and existing public destination key; the private referral URL stays server-side. No configuration logging was introduced. Financial documentation omits customer, transaction-key, payout, address, and tax identifiers, distinguishes dated observations, and states Scheduled is not paid. Fixed public tags remain spoofable by callers, so they are placement hints rather than tamper-proof evidence.

## Affiliate-bias, excluded-candidate, and duplicate-intent checks

No recommendation, ranking, claim, disclosure, button text, button location, candidate, or page intent changes. Attribution adds neither urgency nor a reason to prefer Optery. Commercial terms do not alter editorial conclusions.

## Methodology, sources, and testing transparency

Tests cover all approved mappings for GET and HEAD, untrusted extra parameters, arbitrary/ambiguous input, private Sub ID preservation, safe failure, cache/robot headers, public-only analytics, and disabled fallback. They use dummy referral values. No test evidence implies live product testing or a real referral/conversion. Reported preview checks are author evidence, not rerun by this reviewer. Official Sub ID documentation is cited in the ledger; provider-specific capture remains explicitly unverified. Merge integration must run current tests and verify production redirects without following them or printing their private destinations.

## Code-quality and reader-value checks

The change is small and bounded. Duplicated placement unions and the server allowlist are manageable at three values. Existing accessibility attributes and link protections remain unchanged. There is no direct reader-facing feature, but the change supports measuring existing useful review journeys without expanding commercial pressure.

## Scoped scorecard

The Article Quality Scorecard's article research/candidate requirements do not constitute renewed approval of the unchanged Optery article. For this implementation package, scope preservation, traceability, independence, technical SEO, maintainability, privacy and testing transparency pass. Product claims and hands-on evidence are not reviewed or newly authorized. No major article is being published.

## Required corrections and release limits

No code correction required. Merge must preserve the newer **Home internal traffic — Active October 4** entry and its historical-data caveat. PR89's unchanged historical Testing row must not replace it. Preserve dated September observations as historical evidence; do not relabel them current October balances. Update production/downstream task status only to what release verification proves. Actual tagged record capture remains open until independently observed; no synthetic conversion or affiliate click is needed for deployment validation.

## Final reviewer decision

**APPROVE FOR DEPLOYMENT** for PR89's fixed placement code, subject to normal current-main integration checks and preservation of the newer GA4 task state. No approval/payment or cross-system attribution conclusion is granted.
