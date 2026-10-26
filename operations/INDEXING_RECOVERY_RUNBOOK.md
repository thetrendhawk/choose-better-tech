# Indexing Recovery Runbook

## October 25 indexing remediation prepared

The redirect email concerns two expected www homepage exclusions; the canonical homepage is indexed. The October18 all-known-URL snapshot is38indexed/38excluded (32discovered,4crawled,2redirects), and three HTTPS guides are individually confirmed currently unindexed. All73 sitemap routes pass HTTP/canonical/robots checks, but66 article pages depend on JavaScript reveal containers in initial HTML. A bounded server-rendering correction removes that dependency from all73routes plus404 and adds fail-closed regression checks. This is not proven to explain Google's indexing choices. Status: READY TO DEPLOY, owner review required for shared rendering; no production release or new crawl requests claimed. Full evidence and per-URL worklist: `docs/monitoring/search-anomaly-2026-10-25.md`. Existing publication dates, content inventory, affiliate work and frozen goals remain unchanged.

**Started:** 2026-08-05
**Scope:** URLs reported as discovered but not indexed in Google Search Console.

## Priority reconciliation - 2026-09-07

The August single-URL recovery cohort now includes `/reviews/privacy-bee-review` alongside `/best-data-removal-services`. Both URLs returned production HTTP 200, correct self-canonicals, indexable directives, sitemap inclusion, and existing initial-HTML discovery links. Both passed Google's live test and received one accepted priority-crawl request on September 7 UTC (September 6 Pacific). Neither acceptance nor the live test establishes indexing. Privacy Bee changed from unknown to discovered/not indexed during the session, with the sitemap recognized. The roundup remains discovered/not indexed with no recorded crawl.

The canonical sitemap submission was accepted; the table still reported July 28 as last read and 69 discovered URLs, versus 72 in live XML. Recheck processing and URL-level crawl/index state September 14. Do not repeatedly submit unchanged URLs. DeleteMe was individually confirmed indexed despite zero current impressions. Full evidence: `docs/audits/cbt-analytics-execution-2026-09-07.md`.

## Operating rule

Do not treat the Page Indexing report's aggregate count as a current URL-level verdict. Reconcile each priority URL with URL Inspection because coverage reporting can lag sitemap reads and page changes.

## Current unresolved URL

Owner URL Inspection checks on 2026-08-05 reduced the apparent cohort to one unresolved URL:

1. `/best-data-removal-services`

The other previously suspected URLs were owner-confirmed indexed and belong in performance monitoring, not indexing remediation. `/guides/how-long-does-data-removal-take` was separately confirmed indexed with HTTPS and a valid breadcrumb enhancement.

## Release controls

- Pause large publishing batches while the cohort is being reconciled.
- Do not repeatedly request indexing without a meaningful content, link, or technical change.
- After deployment, inspect the hub first and then `/best-data-removal-services`.
- Record sitemap discovery, referring page, last crawl, user-declared canonical, Google-selected canonical, and final index state.
- Keep indexed URLs in performance monitoring instead of continuing indexing remediation.

## Internal-link action completed

- Promoted the timeline guide into the data-removal hub's quick-pick section.
- Added Incogni and DeleteMe reviews to the homepage review inventory.
- Added Incogni vs DeleteMe to the homepage comparison inventory.
- Added the data-removal roundup, VPN decision guide, and beginner cloud-storage guide to the homepage guide inventory.
- Pointed both primary data-removal hub comparison calls to `/best-data-removal-services` instead of the general comparison archive.

## External validation

Earned links and citations must be genuine editorial placements. Do not purchase links or submit the site to bulk directories. Candidate outreach should lead with a resource that has original evidence or a uniquely useful decision framework; record outreach separately from indexing evidence.

## Recheck cadence

- URL Inspection: after the internal-link release is live.
- Page Indexing report: weekly until its last-update date is newer than the release.
- Performance report: weekly for indexed cohort pages.
- Close recovery when `/best-data-removal-services` is indexed; do not reopen indexed URLs based only on a stale aggregate count.
