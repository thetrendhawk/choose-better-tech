# Rewarx publication validation: September 7, 2026

Owner authorization: "Go ahead and publish the article, and then give me the link to it to include in the email." Owner also asked whether a new category was appropriate. This is explicit publication/merge authorization for the approved manuscript, not routine-article auto-merge authority. No email sending authorized.

Scope: /reviews/rewarx-studio, existing /reviews library category AI Ecommerce Creative Tools, route/sitemap generation, bounded category approval and operation records. No standalone category hub, shared design change, affiliate activation, images, new product tests or credit spend. Existing main analytics/newsletter changes merged and preserved. Research is already committed separately from implementation.

## Evidence refresh

On September 7 before release, official Rewarx monthly/yearly pricing and both January 8 policies were re-opened in signed-in browser. Amounts, first-month offer, inconsistent larger savings badges, licensing restriction to paid services, used-credit refund limitation and permission-qualified public-model training/active-server deletion wording match the manuscript. Shopify listing independently retrieved by web confirms English and Shopify Admin. No checkout or new transaction performed. Balance remains 79.

The repository is public per GitHub-linked deployment metadata. All three manuscript GitHub evidence links were fetched without credentials; each returned HTTP 200 and the expected Rewarx content. Only sanitized records are public, not private media or emails.

## Scope and capacity

One new review this run. Existing established pillar is documented under docs/strategy/ai-ecommerce-creative-tools-cluster-approval.md with all required considerations and bounded monetization map. No duplicate route or primary intent. September analytics records describe small-sample discovery problems and unresolved indexing follow-up; this owner-requested article is not content scaling or an inference of resolved indexing. No identified current factual/rendering kill-switch trigger for this review; required publication QA failures must be fixed before release.

## Technical validation

- Initial tests/build caught hard-coded 72-route expectations; updated to 73 for this one article. A subsequent test caught homepage-first ordering; restored homepage first and grouped new route near review index.
- Final npm test --if-present: PASS, 54 tests / 10 files.
- npm run build: PASS, 73 public pages plus 404.
- npm run lint: PASS.
- check:generated-routes: PASS; final route-order regeneration retained.
- Reviewer independently parsed built output: one H1/title/canonical, indexable robots, Article and BreadcrumbList, consistent publication/review dates, Organization author, two tables and no broken fragment targets. All 38 manuscript prose paragraphs preserved.
- No numeric rating, Review star schema or FAQ schema; FAQ parity not applicable.
- Affiliate scan: no new tracked provider link; existing site disclosure/navigation retained.

## Rendered QA

Preview implementation 85c52180734a370c5db124d072bfeec283892479 rendered in cloud Chrome with exact H1, all sections, disclosure and source links. Desktop viewport 1363px, document scroll width1348px, no page overflow. Screenshot inspected, no clipping or overlap.

The cloud browser cannot reach localhost and exposes no viewport resize API. A temporary noindex preview fixture embeds the actual article in frames with layout widths390,768,1024,1440px. Frame measurements and visual inspection, rather than simulated device claims, will be recorded. Fixture must be removed before merge. The article source/styles remain the production candidate.

## Publication outcome

Pending independent final deployment approval, merge and production verification.


## Completed preview QA

READY preview dpl_EuSHQxcydYgGTVP6HkPeRAKh42Hj, commit 8db287111a70486e9e5bf4efa0f461a7afd4a0ac. Rendered frame CSS widths390/768/1024/1440 have document client widths375/753/1009/1425 after scrollbar; scroll widths exactly match each client width, so no article-level horizontal overflow. Both mobile tables scroll within333px regions (600px content); larger tables fit within703/943/1086px regions. Mobile header/body and pricing screenshots inspected without clipping or overlap outside intended scrollable tables. Section link navigated successfully. This tests responsive CSS within real frame viewports, not mobile hardware.

Review-library category and card are present. Clicking the observed card opens the correct article; direct reload preserves H1. Local routing matrix passed for all73 canonical paths, slash redirects, uppercase variants, unknown404s, static files and API behavior. Two browser locator attempts used incorrect accessible-name/unsupported level options and were corrected after inspecting actual DOM; these were harness mistakes, not page failures.

Console inspection showed browser-extension metadata errors only, with chrome-extension source URLs. No article JavaScript error was identified. This is not a claim of zero browser-extension errors or exhaustive third-party network monitoring.

Back/forward navigation passed between /reviews and /reviews/rewarx-studio. Temporary fixture removed from source before final commit; production build regenerated without it. Final content is unchanged from preview.

Release build passed after fixture removal; dist fixture absent. Built-page internal-link scan found zero missing routes and zero tracked provider URLs. Sitemap canonical inclusion and indexable robots passed. Keyboard mobile table test: focused true, solid outline, ArrowRight moved scrollLeft to40. git diff --check passed.
