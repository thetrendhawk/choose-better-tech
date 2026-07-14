# Canonical Sources

Version: 1.0
Status: Active
Last Updated: 2026-07-14

Purpose: state which single file is authoritative for each domain, so no superseded or duplicate
document is mistaken for the source of truth. This exists because `docs/Content-Roadmap.md` (a stale
foundation-era file with no marker) was read as canonical in 2026-07 and produced incorrect conclusions.

## Rule

- Exactly one canonical file per domain (below).
- Any non-canonical file that looks authoritative (name contains roadmap, status, registry, dashboard,
  queue, canonical, policy, standard, contract) MUST carry a superseded/archived/historical banner in
  its first lines, or live under an approved directory (`operations/`, `docs/strategy/`).
- The reporting-only check `scripts/check-canonical-sources.mjs` flags violations. It never blocks merges.

## Authority map

| Domain | Canonical file |
| --- | --- |
| Roadmap (phases) | `operations/ROADMAP.md` |
| Current publishing queue | `operations/ROADMAP.md` → "Current Publishing Queue" |
| Content inventory / counts | `operations/KPI_DASHBOARD.md` (Content Inventory Baseline) |
| Cluster authorization | `docs/strategy/<cluster>-cluster-approval.md` (+ expansion reviews) |
| Article/state model (design) | `operations/STATE_MODEL.md` |
| Affiliate status | `operations/AFFILIATE_APPLICATION_REGISTRY.md`, `operations/AFFILIATE_PLAYBOOK.md` |
| Volatile claims | `operations/VOLATILE_CLAIMS_REGISTER.md` |
| Publication/QA workflow | `operations/PUBLISHING_WORKFLOW.md` |
| Automation rules | `operations/AUTOMATION_PUBLISHING_CONTRACT.md` |
| KPI reporting | `operations/KPI_DASHBOARD.md` |

## Known superseded documents

| File | Superseded by | Marker present |
| --- | --- | --- |
| `docs/Content-Roadmap.md` | `operations/ROADMAP.md` | Yes (banner) |
| `docs/Editorial-Standards.md` | `operations/EDITORIAL_STANDARDS.md` | Yes (banner) |

## Control metadata

- Failure prevented: source-of-truth ambiguity / reading a stale doc as canonical.
- Mode: reference document + reporting-only check.
- Maintenance owner: project owner.
- Review/removal condition: revisit if the authority map changes or a typed registry replaces it.
