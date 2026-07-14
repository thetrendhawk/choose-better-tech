# Choose Better Tech Operations

Version: 1.1  
Status: Active  
Owner: Choose Better Tech  
Last Updated: 2026-07-14

## Purpose

The `operations/` directory is the operational headquarters for Choose Better Tech. It contains the business systems, workflows, dashboards, standard operating procedures, and operational documentation needed to run the publishing business consistently.

This directory should not contain application code, routes, UI components, or build configuration.

## Directory Boundaries and Authority Model

- `operations/` contains binding sitewide governance, operating systems, policies, dashboards, queues, registries, SOPs, and cross-project management records.
- `docs/` contains article- or cluster-specific research, strategy records, quality artifacts, monetization research, templates, supporting methodologies, and retained historical documents.
- File location alone does not establish authority. Canonical authority must be explicitly declared in `operations/CANONICAL_SOURCES.md`, in the controlling policy, or through a clear Binding/Canonical status marker.
- Supporting documents may remain active without being canonical policy.
- Superseded documents must carry an explicit banner and cannot authorize or sequence work.

## Canonical references

- `operations/CANONICAL_SOURCES.md` — authority map: which single file controls each domain.
- `operations/ROADMAP.md` — canonical roadmap and the Current Publishing Queue.
- `operations/PUBLISHING_WORKFLOW.md` — publication and QA workflow.
- `operations/AUTOMATION_PUBLISHING_CONTRACT.md` — binding rules for automated research, writing, and publishing.

## Operating Principles

- Keep operational documents clear, current, and useful.
- Use tables and checklists where they make ongoing review easier.
- Treat dashboards as living documents.
- Declare canonical authority explicitly; do not rely on file location to imply it.
- Do not mix application implementation details into operational documentation.

## Contents

This lists major canonical operating documents; it is not an exhaustive file index.

| File or Folder | Purpose |
| --- | --- |
| `CANONICAL_SOURCES.md` | Authority map declaring the canonical file for each domain. |
| `ROADMAP.md` | Canonical roadmap and Current Publishing Queue. |
| `PROJECT_STATUS.md` | Live status dashboard for current operating priorities. |
| `KPI_DASHBOARD.md` | KPI tracking for content, traffic, social, affiliate, and revenue. |
| `CONTENT_CALENDAR.md` | Publishing pipeline and content status tracker. |
| `EDITORIAL_STANDARDS.md` | Binding editorial standards for every conclusion and CTA. |
| `PUBLISHING_WORKFLOW.md` | Publication and QA workflow. |
| `AUTOMATION_PUBLISHING_CONTRACT.md` | Binding rules for automated systems. |
| `VOLATILE_CLAIMS_REGISTER.md` | Register of volatile facts requiring fresh verification. |
| `STATE_MODEL.md` | Minimal authorization/publication/verification state model (design only). |
| `CHANGELOG.md` | Chronological business milestone log. |
| `BUSINESS_IDENTITY.md` | Placeholder for the canonical Business Identity Kit. |
| `AFFILIATE_PLAYBOOK.md` | Active affiliate application playbook with stage-by-stage status tracking. |
| `AFFILIATE_APPLICATION_REGISTRY.md` | Affiliate program application and status registry. |
| `PARTNERSHIP_READINESS.md` | Pre-application checklist and affiliate readiness system. |
| `SOP/` | Standard operating procedures for recurring workflows. |
| `templates/` | Reusable templates for research, briefs, source logs, QA, and affiliate records. |

## Legacy-document review

The following foundation-era files under `docs/` are unresolved classification items. They are NOT superseded and NOT canonical by default. No authority may be inferred from their filename or location. Each must be compared against current canonical policy before any banner, move, merge, or deletion.

| File | Current status |
| --- | --- |
| `docs/CBT-Operations-Manual-v1.0.md` | REVIEW REQUIRED |
| `docs/Opportunity-Scoring.md` | REVIEW REQUIRED |
| `docs/Publisher-Readiness-Checklist.md` | REVIEW REQUIRED |
| `docs/Research-Workflow.md` | REVIEW REQUIRED |
