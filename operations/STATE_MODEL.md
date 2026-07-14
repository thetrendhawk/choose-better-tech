# Minimal State Model (Design Documentation Only)

Version: 0.1 (design)
Status: NOT IMPLEMENTED — documentation only
Last Updated: 2026-07-14

Purpose: define the smallest set of independent state dimensions needed to stop the category error we
observed (treating cluster-approved, article-authorized, published, and verified as one "status").
This is a design note. It is NOT a registry, schema, or enforced system. Do not build tooling against
it until real usage proves the dimensions are needed.

## Three dimensions (start here; resist adding more)

1. `authorization` — is the work permitted to proceed?
   - `not_approved` → `cluster_approved` → `article_authorized`
2. `publication` — where is the artifact?
   - `planned` → `researched` → `drafted` → `published`
3. `verification` — what has been independently confirmed post-publish?
   - `unverified` → `indexing_confirmed` → `performance_reviewed`

## Why three, not six

Earlier proposals suggested six enums (cluster_authorization, article_authorization, production_state,
editorial_state, verification_state, refresh_state). Three dimensions already prevent the observed
failure (e.g., a live route with `authorization = cluster_approved` is clearly NOT `article_authorized`).
Splitting further before a real workflow demands it adds maintenance cost without preventing an observed
failure — see `operations/AUTOMATION_PUBLISHING_CONTRACT` governance-bloat discipline.

## Control metadata

- Failure prevented: collapsing distinct states into one ambiguous label.
- Mode: design documentation (advisory).
- Maintenance owner: project owner.
- Review/removal condition: promote to a typed model only if/when a registry is built and usage shows
  three dimensions are insufficient.
