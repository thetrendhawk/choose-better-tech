# Search growth release — October 4, 2026

Status: VERIFIED LIVE. Owner authorized release in chat.

- PR #90 merged as `34ae5c555aadb2b2eb6189615f0f642a143d8659`.
- Vercel production deployment `dpl_97DqBS3LRx671uQBMfq6xANQKRGH` is READY for that exact commit, with choosebettertech.com in its alias list.
- All 73 live sitemap URLs return HTTP 200, one matching self-canonical and one H1 in fetched HTML.
- Production selector exposes all research routes and the new footer links. Selecting proof updates the result to Optery; clicking its named review CTA opens the correct review route.
- GA4 Realtime confirms exactly one `selector_choice` and one `selector_review_click` from this controlled journey. It also showed two pageviews, for the selector and review. No affiliate CTA was clicked.
- QA landing campaign: `cbt_qa / internal / release_20261004`. Exclude this controlled session and its events from demand, reader conversion, and revenue interpretation.
- Production desktop containment: clientWidth/scrollWidth 1265/1265. Prior release-preparation desktop/mobile UI checks and 57 tests/build/lint/static-output checks passed. The production viewport override did not visibly apply during this run, so no additional production mobile pass is claimed.
- Screenshot retained locally at `audit-artifacts/release-2026-10-04/selector-live.png`.

The earlier audit's prepared/not-deployed status is superseded by this release record. Search indexing and ranking uplift require later evidence; this release proves functionality and event receipt, not improved rankings or affiliate earnings. No new affiliate relationship, outreach, destination, provider ranking, GA4 setting, or search indexing request was introduced.
