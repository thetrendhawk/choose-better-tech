# Choose Better Tech Indexing Verification Log

**Version:** 1.0  
**Status:** Active  
**Owner:** Choose Better Tech  
**Canonical domain:** `choosebettertech.com`  
**Repository rule:** Record only non-sensitive evidence. Unsupported platform facts are `UNKNOWN`.

## Verification principles

- Sitemap submission does not prove indexing.
- A successful IndexNow submission does not prove indexing.
- A page appearing in search results does not prove every canonical or metadata signal is correct.
- Search Console impressions are strong evidence that a URL or query is participating in Google Search, but URL-level indexing should still be separately verified where practical.
- Absence from a `site:` search alone is not definitive proof of non-indexing.
- Indexing, ranking, impressions, clicks, and conversions are different states.
- Unsupported indexing claims must be marked `UNKNOWN`.

## Status definitions

| Status | Minimum evidence |
|---|---|
| `Verified indexed` | Authoritative Google URL Inspection, Bing URL inspection, or equivalent platform confirmation that the URL is indexed. |
| `Evidence of search participation` | URL- or query-tied impressions/clicks from an authoritative search report. This does not replace URL-level inspection. |
| `Submitted/discovered` | Sitemap inclusion, sitemap acknowledgement, or IndexNow acceptance only. It does not establish indexing. |
| `Crawled, indexing unknown` | Authoritative crawl evidence without an authoritative indexed/not-indexed result. |
| `Not indexed` | Authoritative platform result explicitly states the URL is not indexed. |
| `Blocked or excluded` | Authoritative result identifies robots, noindex, canonical, policy, or other exclusion. |
| `Verification pending` | A specific verification action is queued or requested and has not completed. |
| `UNKNOWN` | No reliable URL-level evidence is available. |

## Priority URL inventory

Canonical expectation for every content route below is `https://choosebettertech.com` plus the listed path, with a self-canonical unless the page’s documented purpose requires otherwise. Search status is not inferred from route existence, sitemap presence, or IndexNow submission.

| Route | Page type | Business priority | Canonical expectation | Sitemap expectation | Google status | Bing status | Latest evidence | Source | Next action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | Homepage | High | Canonical root | Included | Verified indexed; search participation | UNKNOWN | 2026-07-19 | GSC URL Inspection/Performance | Recheck monthly | 1 click, 24 impressions in recorded window |
| `/best-data-removal-services` | Major category hub | High | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-19 | Content dashboard/production records | Inspect in GSC and Bing | Production verified; indexing not claimed |
| `/best-vpns-for-streaming` | Commercial guide | High | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-12 | Content dashboard/IndexNow record | Inspect in GSC and Bing | IndexNow acceptance is not indexing evidence |
| `/best-cloud-storage-for-beginners` | Buying guide | High | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-12 | Content dashboard/IndexNow record | Inspect in GSC and Bing | Production and sitemap evidence exist |
| `/best-password-managers-for-families` | Buying guide | High | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-12 | Content dashboard/production record | Inspect in GSC and Bing | Do not infer from sitemap |
| `/reviews/nordvpn-review` | Review | High | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-03 | Content dashboard | Inspect in GSC and Bing | Affiliate-supported registry record |
| `/reviews/proton-vpn-review` | Review | High | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-08 | Content dashboard | Inspect in GSC and Bing | Affiliate-supported registry record |
| `/reviews/surfshark-review` | Review | High | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-03 | Content dashboard | Inspect in GSC and Bing | Affiliate-supported registry record |
| `/reviews/proton-pass-review` | Review | High | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-08 | Content dashboard | Inspect in GSC and Bing | Affiliate-supported registry record |
| `/reviews/proton-drive-review` | Review | High | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-13 | Content dashboard/IndexNow record | Inspect in GSC and Bing | Production and IndexNow evidence do not prove indexing |
| `/reviews/roboform-review` | Review | Medium | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-04 | Content dashboard | Inspect in GSC and Bing | Affiliate-supported registry record |
| `/reviews/deleteme-review` | Review | High | Self-canonical | Included | Verified indexed; search participation | UNKNOWN | 2026-07-19 | GSC URL Inspection/Performance | Preserve observation window; recheck around 2026-07-29 | 80 impressions, 0 clicks, average position 41.1; primary query 30 impressions, average position 62.7 |
| `/comparisons/incogni-vs-deleteme` | Comparison | High | Self-canonical | Included | Verified indexed | UNKNOWN | 2026-07-19 | GSC URL Inspection/Performance | Recheck monthly | URL-level indexing confirmed; performance totals are not recorded |
| `/comparisons/optery-vs-deleteme` | Comparison | High | Self-canonical | Included | Verified indexed | UNKNOWN | 2026-07-19 | GSC URL Inspection/Performance | Recheck monthly | URL-level indexing confirmed; performance totals are not recorded |
| `/comparisons/incogni-vs-optery` | Comparison | High | Self-canonical | Included | Verified indexed | UNKNOWN | 2026-07-19 | GSC URL Inspection/Performance | Recheck monthly | URL-level indexing confirmed; performance totals are not recorded |
| `/comparisons/proton-vpn-vs-surfshark` | Comparison | Medium | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-04 | Content dashboard | Inspect in GSC and Bing | Technical publication evidence only |
| `/guides/vpn-privacy-guide` | Educational guide | Medium | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-11 | Content dashboard/IndexNow record | Inspect in GSC and Bing | IndexNow acceptance is not indexing evidence |
| `/guides/free-vpn-vs-paid` | Educational guide | Medium | Self-canonical | Included | UNKNOWN | UNKNOWN | 2026-07-11 | Content dashboard/IndexNow record | Inspect in GSC and Bing | Production route evidence exists |
| `/sitemap.xml` | Sitemap artifact | Operational | N/A | N/A | Available in production; submission status needs platform verification | Available in production; submission/receipt needs verification | 2026-07-19 | Project status/production records | Verify GSC/Bing submission and receipt | Sitemap availability is not page indexing |
| `/robots.txt` | Robots artifact | Operational | N/A | N/A | Available in production; policy result per URL remains to be inspected | Available in production; policy result per URL remains to be inspected | 2026-07-19 | Project status/production records | Verify important URLs are permitted | Robots availability is not indexing |

The inventory is intentionally a priority subset, not a claim that every current route has been inspected. Add new high-priority routes after publication or material update.

## Google Search Console procedure

1. Confirm the correct domain property for `choosebettertech.com`.
2. Inspect the exact canonical production URL, not a preview or temporary host.
3. Record whether the URL is on Google.
4. Record the user-declared and Google-selected canonical where visible.
5. Record last crawl and indexing state where available.
6. Record coverage or exclusion reason without copying private account identifiers.
7. Request indexing only when justified and not already pending.
8. Preserve date and result in the log.
9. Do not repeatedly request indexing without a meaningful page or technical change.

No URL Inspection result may be claimed unless owner evidence exists.

## Bing Webmaster Tools and IndexNow procedure

1. Confirm the correct site/property.
2. Inspect the exact production URL.
3. Record crawl and index state.
4. Record sitemap discovery where available.
5. Record IndexNow submission evidence separately from indexing evidence.
6. Submit/request indexing only when justified.
7. Preserve date and result.
8. Avoid repeated submissions without a meaningful change.

All unsupported Bing facts remain `UNKNOWN`.

## Search participation evidence

| URL | Search engine | Reporting period | Impressions | Clicks | Average position | Query evidence | Source | Interpretation | Limitations |
|---|---|---|---:|---:|---:|---|---|---|---|
| `/` | Google | 2026-07-08 through 2026-07-17 | 24 | 1 | UNKNOWN at page row | UNKNOWN | GSC Performance | Search participation | Short window; not a stable ranking baseline |
| `/reviews/deleteme-review` | Google | Existing observation window through 2026-07-19 | 80 | 0 | 41.1 | Primary query: 30 impressions; average position 62.7 | GSC Performance | Search participation is verified | Does not prove strong ranking or conversion performance |
| `/comparisons/incogni-vs-deleteme` | Google | 2026-07-08 through 2026-07-17 | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | GSC URL Inspection/indexing audit | URL-level indexed confirmation | Performance totals not recorded in repository |
| `/comparisons/optery-vs-deleteme` | Google | 2026-07-08 through 2026-07-17 | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | GSC URL Inspection/indexing audit | URL-level indexed confirmation | Performance totals not recorded in repository |
| `/comparisons/incogni-vs-optery` | Google | 2026-07-08 through 2026-07-17 | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | GSC URL Inspection/indexing audit | URL-level indexed confirmation | Performance totals not recorded in repository |

The DeleteMe review must not be changed solely because of this baseline. Leave it unchanged during the existing observation window around 2026-07-29 unless a critical technical defect is proven.

## Technical evidence checklist

For every priority URL, record:

- successful production response;
- expected canonical;
- indexable robots directive;
- sitemap inclusion;
- internal-link discovery;
- no unintended redirect;
- no duplicate canonical conflict;
- no accidental `noindex`;
- current production deployment;
- mobile and desktop accessibility.

This task did not perform a full site audit.

## Cadence

- After publishing: initial technical verification.
- After meaningful updates: recheck canonical, sitemap, and search-platform state.
- Weekly: review newly published and high-priority pages.
- Monthly: formally reconcile the indexing inventory.
- Quarterly: review sitemap, robots, ownership, platform access, migration redirects, and evidence retention.

## Escalation rules

Investigate when an important URL is unexpectedly absent from the sitemap, has an unintended `noindex`, is blocked by robots, points canonically elsewhere unexpectedly, has a crawl or redirect failure, is explicitly reported not indexed after a reasonable discovery period, drops out of the index without an intentional change, or shows a materially different technical state between Google and Bing. Also investigate conflicting migration redirects or canonical-domain signals.

Low ranking or zero clicks alone is not an indexing defect.

## Owner checklist

- Inspect priority URLs in Google Search Console.
- Inspect the same URLs in Bing Webmaster Tools.
- Record only non-sensitive status and dates in this log.
- Do not copy account IDs, verification tokens, or private screenshots into GitHub.
- Request indexing only where justified.
- Leave `/reviews/deleteme-review` unchanged during its existing observation window unless a critical defect is found.
