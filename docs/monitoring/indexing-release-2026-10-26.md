# CBT static-indexing remediation — production release October 26, 2026

Status: VERIFIED LIVE for the technical rendering correction. Google recrawl and actual indexing recovery remain pending.

## Authority and release

The owner reviewed PR #97 and approved it in the conversation. The exact approved head was `2ec3a8a145a99c840efe7633aa147345396c8321`; both Vercel checks passed. PR #97 was squash-merged with an expected-head guard as `bd2665c1cd6cd54be5e2744b534b82710466380a`. A fresh origin/main fetch confirms that commit; its application/validation files match the tested preview.

Production deployment `dpl_AgSpy4HcSDuRbPkUu8bQ3pcB9kbo` reached READY for that exact main commit, with `choosebettertech.com` among its assigned aliases. No environment variables, domains, access settings, dependencies, article facts, affiliate destinations or analytics code changed.

## Production verification

All 73 URLs from the live sitemap were fetched again after deployment:

- HTTP 200 directly, with matching self-canonical URLs and nonempty headings.
- Indexable robots/meta/header instructions, with no accidental noindex.
- Nonempty article content directly inside initial main markup.
- Zero pending React reveal/bailout templates or hidden article containers.
- Unique titles and descriptions across the fetched cohort.

Machine-readable results: `production-html-2026-10-26.json`. The earlier baseline reproduced 66 hidden article headings; the deployed output removes that JavaScript reveal dependency. This is a technical improvement, not evidence that Google has now indexed any additional URL.

Bounded production browser checks verified the timeline guide, internal navigation to the roundup, deep-route reload, one title/description/canonical, visible article content and no horizontal overflow at the observed 1348px width. Inspected log errors originated in the browser extension's metadata messaging; no site-origin runtime error was observed. This is not a complete automated hydration run or mobile viewport check. The pre-release record retains those limitations and the seven-route preview interaction checks.

The production visit was labeled `cbt_qa / internal / indexing_release_20261026`. Exclude this QA campaign from audience, conversion and frozen-goal evidence. No affiliate link or newsletter form was activated/submitted.

## Google follow-through

Search Console was signed out in the new browser session. Secure sign-in advanced through account/password entry to a device-verification prompt asking the owner to open Gmail on the iPhone 13 Pro and tap Yes. Approval of that device prompt has not yet been observed. No post-release URL live test, indexing request, sitemap resubmission or validation request is claimed.

After authentication completes, perform bounded live tests and one crawl request each for the materially changed priority pages: data-removal roundup, timeline guide, reappearance guide and software buying guide, subject to Google quota. Record each result; an accepted request is not proof of indexing. Do not repeat submissions to unchanged URLs or alter the correct homepage redirects.

Last account evidence remains dated October 25 with the October 18 aggregate snapshot. The three HTTPS guides were unindexed then. The canonical sitemap was Success with 73 discovered URLs, last read October 6. No current search-performance or index-count increase has been verified from this release. Preserve the October 31 review and frozen November 30 goal thresholds.

## Remaining work

1. Complete the Google device prompt and finish the priority live tests/crawl requests.
2. Recheck stored URL Inspection results after Google's processing; preserve requests and actual index membership as separate evidence.
3. If pages remain excluded after fresh crawls, investigate page-specific reader value and relevant query demand. The rendering dependency is not a proven explanation of Google's exclusions.

Earlier blocked-push and owner-review-pending notes in `search-anomaly-2026-10-25.md` are historical; this release record supersedes them. Existing unrelated affiliate, outreach, research and content tasks remain open under their own records.

Rollback: revert PR #97 if hydration, routing or metadata regress. No rollback trigger was found in the bounded production checks. A later documentation-only closeout does not alter the released application code.
