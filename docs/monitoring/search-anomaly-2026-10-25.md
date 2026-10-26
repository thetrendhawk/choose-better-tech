# CBT indexing investigation and static-rendering remediation — October 25, 2026

Status: READY TO DEPLOY — shared-rendering change requires owner review. This is technical remediation of existing routes, not a new article, category, ranking, monetization change, or completed indexing recovery.

## Verified Google evidence

The October 25 email reports Page with redirect. Its two examples are https://www.choosebettertech.com/ (last crawled October 9) and http://www.choosebettertech.com/ (September 13). Both resolve through permanent redirects to https://choosebettertech.com/, which URL Inspection confirms indexed. Keep the redirects; do not run validation to force alternate homepages into the index.

The Page Indexing report's October 18 snapshot contains 38 indexed / 38 excluded URLs: 32 discovered, four crawled, two redirects. The 32 discovered examples include three utility/legal URLs (contact, privacy, terms); the four crawled examples include the obsolete HTTP non-www homepage. These are all-known-URL counts, not counts of canonical editorial pages. The validation passed October 12 does not establish current indexing of the remaining cohort.

Individually inspected on October 25:

| URL | Stored result | Crawl evidence |
| --- | --- | --- |
| `/` | Indexed | Redirect destination is eligible and on Google |
| `/best-data-removal-services` | Not indexed | Initially Discovered; later inspection returned Unknown to Google/no referring sitemap. Preserve this discrepancy; neither inspection showed a crawl. Live test October 25 7:48 PM Pacific: available to Google, can be indexed, one valid breadcrumb |
| `/guides/how-long-does-data-removal-take` | Crawled, currently not indexed | Last crawl August 6; fetch successful, indexing allowed, self-canonical |
| `/guides/can-your-information-reappear-after-data-removal` | Crawled, currently not indexed | Last crawl August 6; fetch successful, indexing allowed, self-canonical; referring timeline guide; sitemap field said Temporary processing error |
| `/guides/how-to-choose-software` | Crawled, currently not indexed | Last crawl July 25; fetch successful, indexing allowed, self-canonical |

Current URL Inspection overrides older indexed observations for those guides; historical Performance impressions/clicks do not prove present index membership. No penalty, ranking cause, or exact Google selection rationale is established.

## Production and local technical evidence

All 73 live sitemap URLs return HTTP 200 directly, have matching self-canonicals, a nonempty H1, and no meta/header noindex. Robots.txt permits crawling. All titles and descriptions are unique in this fetched cohort. Every discovered example has at least one other sitemap page linking to it in fetched HTML. Counts below include global links and links inside the existing hidden containers; they are not Google crawl or authority measurements.

Deeper HTML parsing found 66 public pages put the article H1 and body outside the initial main element in a hidden React `S:0` container. Main initially contains a pending `B:0` template; a generated inline reveal script moves the article into it. The content exists in response bytes, but requires JavaScript to become visible. A clean build of main commit 8ecfde5262e07fe1dcc10c6f9509261fd72e228b reproduces 66 hidden headings among 73 public routes plus the 404 page. Google can render JavaScript and the roundup passes its live test: this is an avoidable rendering dependency, not proven causation for non-indexing.

Google's Sitemaps report also shows the canonical sitemap as Success, 73 discovered URLs, last read October 6, submitted September 6. No sitemap resubmission or property change was performed. The reappearance URL's sitemap processing warning is preserved alongside that successful property-level record.

## Implemented correction

`src/entry-server.tsx` uses synchronous React renderToString for the already eager server route tree. Client lazy routes, hydration, global CSS, content, dates, metadata, canonicals, schemas, affiliate destinations, and analytics logic retain their existing definitions. The generator's iterable prelude interface is preserved. No dependency or hosting configuration change.

Static-output validation now requires a visible H1 within initial main content, substantive main text after excluding scripts/hidden/template content, and no unresolved React reveal/bailout template. Five targeted regression cases cover valid content, hidden article, partial pending boundary, synchronous-render bailout, and script-only text. These build checks fail closed if a future asynchronous server component cannot serialize fully.

Result: all 73 public routes plus 404 have direct initial main content, zero hidden H1s, and zero pending reveal templates. The 404 uses a smaller minimum text floor because it is a recovery page, not an article. Existing nested main markup on some pages is outside this patch's scope.

## Verification and limitations

- Existing Vitest suite: 75/75 passed across 11 files.
- New Node regression tests: 5/5 passed.
- ESLint, TypeScript/Vite build, 73-route plus 404 static validation, HTTP routing matrix, whitespace checks: passed.
- Existing 74-route automated hydration/browser test could not launch: Chrome is absent. An official Playwright Chromium download failed because the returned archives were incomplete. This is an environment limitation, not a passing browser result. Preview browser evidence is recorded separately before release.
- No new product testing, research claims, pricing claims, articles, submissions, outreach, or commercial changes.
- No current Google indexing or search improvement is inferred from build results.

## Cohort triage

Each row is an example from Google's discovered list; None has a last-crawl date in that table. Keep the URLs. Apply the static-rendering fix first; no mass content rewrite, merge, redirect, noindex, date bump, or repetitive indexing requests are justified by these observations.

| Path | Distinct inbound sitemap pages | Next action |
| --- | ---: | --- |
| `/best-data-removal-services` | 14 | Priority: after release, live test and one crawl request for materially changed HTML |
| `/best-free-vpns` | 14 | Monitor after rendering release; inspect individually before further remediation |
| `/best-vpns-for-families` | 5 | Monitor after rendering release; inspect individually before further remediation |
| `/best-vpns-for-streaming` | 4 | Monitor after rendering release; inspect individually before further remediation |
| `/best-vpns-for-students` | 9 | Monitor after rendering release; inspect individually before further remediation |
| `/best-vpns-for-travel` | 15 | Monitor after rendering release; inspect individually before further remediation |
| `/comparisons/proton-pass-vs-nordpass` | 11 | Monitor after rendering release; inspect individually before further remediation |
| `/comparisons/proton-vpn-vs-surfshark` | 9 | Monitor after rendering release; inspect individually before further remediation |
| `/contact` | 72 | Monitor utility/legal URL; low discovery priority |
| `/guides/best-vpns-for-beginners` | 16 | Monitor after rendering release; inspect individually before further remediation |
| `/guides/do-you-still-need-antivirus-on-windows-11` | 2 | Recheck after rendering release; contextual-link review if still excluded |
| `/guides/free-vpn-vs-paid` | 10 | Monitor after rendering release; inspect individually before further remediation |
| `/guides/how-password-managers-work` | 3 | Recheck after rendering release; contextual-link review if still excluded |
| `/guides/how-vpns-work` | 11 | Monitor after rendering release; inspect individually before further remediation |
| `/guides/is-proton-vpn-free-good-enough` | 10 | Monitor after rendering release; inspect individually before further remediation |
| `/guides/vpn-buying-guide` | 19 | Monitor after rendering release; inspect individually before further remediation |
| `/guides/vpn-privacy-guide` | 9 | Monitor after rendering release; inspect individually before further remediation |
| `/guides/windows-defender-vs-paid-antivirus` | 3 | Monitor after rendering release; inspect individually before further remediation |
| `/password-manager-vs-browser-passwords` | 7 | Monitor after rendering release; inspect individually before further remediation |
| `/password-managers` | 72 | Monitor after rendering release; inspect individually before further remediation |
| `/privacy` | 72 | Monitor utility/legal URL; low discovery priority |
| `/reviews/1password-review` | 15 | Monitor after rendering release; inspect individually before further remediation |
| `/reviews/bitwarden-review` | 15 | Monitor after rendering release; inspect individually before further remediation |
| `/reviews/dashlane-review` | 2 | Recheck after rendering release; contextual-link review if still excluded |
| `/reviews/nordvpn-review` | 14 | Monitor after rendering release; inspect individually before further remediation |
| `/reviews/proton-drive-review` | 5 | Monitor after rendering release; inspect individually before further remediation |
| `/reviews/proton-pass-review` | 14 | Monitor after rendering release; inspect individually before further remediation |
| `/reviews/rewarx-studio` | 1 | Recheck after rendering release; contextual-link review if still excluded |
| `/reviews/surfshark-review` | 12 | Monitor after rendering release; inspect individually before further remediation |
| `/terms` | 72 | Monitor utility/legal URL; low discovery priority |
| `/tools/data-removal-service-selector` | 72 | Monitor after rendering release; inspect individually before further remediation |
| `/vpn` | 72 | Monitor after rendering release; inspect individually before further remediation |

The three crawled HTTPS guides have 12 (timeline), five (reappearance), and one (software buying guide) distinct inbound sitemap pages. After the rendering change is verified live, prioritize the roundup and timeline guide for single requests, then reappearance/software guide if quota permits and live tests pass. Record accepted requests separately from actual indexing. Preserve earlier September/October requests; do not repeat streaming-guide requests without a relevant change.

## Release and next actions

1. Owner reviews the exact PR for this shared server-rendering change; it is outside the routine-article auto-merge exception in operations/AUTOMATION_PUBLISHING_CONTRACT.md, condition 11.
2. Merge only after approval and preview checks. Verify exact production commit and direct initial main content on all routes.
3. Run priority live URL tests and bounded crawl requests after deployment, then retain their dates/results. Sitemap resubmission is only needed if processing remains stale or fails; do not remove/re-add the property or change the correct redirects.
4. Recheck URL Inspection after Google processes the material HTML change. Keep the October 31 review and frozen November 30 goals. No new automation created by this task.
5. If pages remain excluded after fresh crawls, investigate page-specific reader value, originality and relevant query demand before rewriting. No editorial-quality cause is proven by this audit. Software buying guide and Rewarx have only one inbound page and are candidates for a narrowly scoped contextual-link review.

Rollback: revert the rendering/validator change if hydration, routing, metadata, or reader navigation regress. Existing article text and evidence remain intact. The current production site stays on main 8ecfde5 until an approved release; this record must not be read as a completed deployment.

Sources: authenticated Google Search Console Page Indexing/URL Inspection on October 25; the October 25/22/15 Google emails; live production HTTP/HTML audit of all 73 sitemap URLs; reproducible builds of main and the fix branch; https://support.google.com/webmasters/answer/7440203 and https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl ; React renderToString and prerenderToNodeStream documentation. Crawl requests do not guarantee indexing.

## Publication blocker and exact review package

The local implementation commit is 692277d65e666048bef2a8e5e6cea8f23d8b11ce. An automatic approval review rejected the shell push to the GitHub remote, stating that repository export/external-state authority was not explicit enough. No alternate write route was attempted. A read-only check confirms remote branch fix/cbt-static-indexing-2026-10-25 still points to the original base 8ecfde5262e07fe1dcc10c6f9509261fd72e228b. No code reached the remote branch; no PR or preview was created, and production is unchanged.

Explicit owner authorization is needed to push the prepared patch to thetrendhawk/choose-better-tech, create the review PR, and release only after preview hydration/navigation checks pass. This is also the concrete owner review required for shared-rendering changes by the publishing contract. The evidence package is complete; remote preview/browser verification remains a release blocker. Do not describe the change as deployed.

## Push authorization and preview verification — October 25

The owner explicitly approved pushing the prepared patch. Git CLI transport could not authenticate, so the connected GitHub service published an identical tree (30dff4bf6d6be4e2ba7c684fcbecfb9306964a56) as commit 8bba2880741c4c4fce731608f3375f5c5491e5d3. PR #97: https://github.com/thetrendhawk/choose-better-tech/pull/97 . This supersedes the earlier blocked-push status; the initial rejection remains historical evidence.

Vercel preview dpl_BYZqRuTm8GxQEcguzWrBiNS1mo7L is READY for that exact commit. Preview: https://choose-better-tech-kyd6c7wjd-aaron-s-evans-projects.vercel.app . Both GitHub Vercel status contexts succeeded. An independent HTTP/HTML pass across all 73 preview sitemap routes found zero failures: direct HTTP200, one H1 in main, matching production canonical, no noindex, and no unresolved or hidden reveal containers.

Bounded cloud-browser verification covered the homepage, roundup, timeline guide, reappearance guide, software buying guide, selector and Optery review. Metadata stayed singular and canonical through internal navigation, browser back/forward, direct load and reload. Selector state changed from Incogni to Optery; its result link loaded the Optery review. At the observed 1348px width, sampled pages had matching document/client widths without horizontal overflow. No site-origin runtime errors appeared in the inspected console log; the reported errors originate from a browser extension's metadata messaging. This is not a complete 74-route automated hydration suite or a mobile viewport test; those limitations remain disclosed.

Status: READY TO DEPLOY — owner merge/release review pending. Latest authorization explicitly covered pushing the patch; no main merge, production deployment, Google crawl request, sitemap resubmission, or indexing gain is claimed. Following merge approval, verify production then perform bounded priority live tests/crawl requests. This appended evidence changes documentation only; implementation code is identical to the tested 8bba288 commit.
