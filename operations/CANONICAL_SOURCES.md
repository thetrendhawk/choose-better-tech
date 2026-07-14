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
| Editorial standards | `operations/EDITORIAL_STANDARDS.md` |
| Research and evidence requirements | `operations/RESEARCH_AND_EVIDENCE_STANDARD.md` |
| Publication/QA workflow | `operations/PUBLISHING_WORKFLOW.md` |
| Article quality threshold | `operations/ARTICLE_QUALITY_SCORECARD.md` |
| Automation rules | `operations/AUTOMATION_PUBLISHING_CONTRACT.md` |
| Affiliate status | `operations/AFFILIATE_APPLICATION_REGISTRY.md`, `operations/AFFILIATE_PLAYBOOK.md` |
| Monetization independence and research | `operations/MONETIZATION_RESEARCH_STANDARD.md` |
| Volatile claims | `operations/VOLATILE_CLAIMS_REGISTER.md` |
| KPI reporting | `operations/KPI_DASHBOARD.md` |

## Known superseded documents

| File | Superseded by | Marker present |
| --- | --- | --- |
| `docs/Content-Roadmap.md` | `operations/ROADMAP.md` | Yes (banner) |
| `docs/Editorial-Standards.md` | `operations/EDITORIAL_STANDARDS.md` | Yes (banner) |
| `docs/CBT-Operations-Manual-v1.0.md` | Current binding operations, editorial, publishing, and automation documents | Yes (banner) |
| `docs/Opportunity-Scoring.md` | `operations/ROADMAP.md`, topic-cluster approval, and capacity policy | Yes (banner) |
| `docs/Publisher-Readiness-Checklist.md` | `operations/PUBLISHING_WORKFLOW.md` and `operations/ARTICLE_QUALITY_SCORECARD.md` | Yes (banner) |
| `docs/Research-Workflow.md` | `operations/RESEARCH_AND_EVIDENCE_STANDARD.md` and supporting evidence standards | Yes (banner) |

## Control metadata

- Failure prevented: source-of-truth ambiguity / reading a stale doc as canonical.
- Mode: reference document + reporting-only check.
- Maintenance owner: project owner.
- Review/removal condition: revisit if the authority map changes or a typed registry replaces it.
