# Production Recovery Readiness Audit

**Review date:** 2026-07-23  
**Repository:** `thetrendhawk/choose-better-tech`  
**Branch:** `operations/production-recovery-inventory`  
**Scope:** Documentation and evidence gathering only. No production rollback, DNS change, environment-variable change, credential rotation, or live incident simulation was performed.

## Classification boundary

- **Ready:** Current repository evidence supports the documented recovery path.
- **Partially ready:** Some controls exist, but material external or execution evidence remains.
- **Not ready:** The required recovery capability is not currently executable from the documented system.
- **Unknown:** The repository cannot establish whether the capability exists.

No passwords, tokens, API keys, secret values, raw affiliate URLs, account IDs, recovery codes, private email addresses, measurement identifiers, or sensitive personal information are included.

## Evidence reviewed

- Current `origin/main` commit at branch creation: `73cc4c4`.
- `package.json`: `build`, `lint`, `test`, `audit:site`, `generate:routes`, and `check:generated-routes` scripts.
- `scripts/generate-seo-files.mjs`, `scripts/generate-vercel-routes.mjs`, and `scripts/check-generated-routes.mjs`.
- `operations/ROLLBACK_AND_KILL_SWITCH_POLICY.md`.
- `operations/AUTOMATION_PUBLISHING_CONTRACT.md`.
- `operations/PUBLISHING_WORKFLOW.md`, `SITEWIDE_QUALITY_AUDIT_POLICY.md`, `SEARCH_MONITORING_AND_ANOMALY_POLICY.md`, and `HANDS_ON_TESTING_STANDARD.md`.
- `operations/AFFILIATE_PLAYBOOK.md`, `AFFILIATE_APPLICATION_REGISTRY.md`, and `src/data/affiliateLinks.ts` without reproducing destinations.
- `operations/PROJECT_STATUS.md`, `KPI_DASHBOARD.md`, `CONTENT_DASHBOARD.md`, `CHANGELOG.md`, and portfolio operating-system records.
- Git history and prior production verification records, including the documented PR #54 missed-trigger/manual-deployment incident.

## Readiness summary

| Area | Status | Basis |
|---|---|---|
| GitHub repository/source | Partially ready | Repository and branch are recoverable conceptually; independent mirror, live protection state, owner, and alternate operator are not evidenced. |
| Vercel/deployment | Partially ready | Production branch, manual fallback, deployment records, and policies exist; trigger configuration, project access, and tested rollback/restore are not evidenced. |
| Domain/DNS | Unknown | Canonical domain and migration dependencies are documented; registrar, DNS provider, exports, renewal monitoring, and recovery owner are not. |
| Analytics | Partially ready | Event implementation, safe fallback, tests, and GA4 Realtime verification exist; property access, reporting ownership, and recovery configuration are unknown. |
| Search platforms | Partially ready | Search baseline, sitemap, IndexNow, and Change of Address records exist; account access, receipts, and recovery are incomplete. |
| Affiliate networks | Partially ready | Registry, networks, product mappings, disclosures, and private redirect pattern exist; account recovery, payout records, statement archive, and destination regeneration are unknown. |
| Application/data | Partially ready | Source and reproducible artifacts are identifiable; external backups and private configuration recovery are not evidenced. |
| Credentials/access | Unknown | Platform roles, MFA, recovery methods, alternate operators, and last access verification are not recorded. |
| Incident ownership | Partially ready | Primary owner and policy escalation concepts exist; alternate owner, contact tree, and tested decision/rollback authority are not recorded. |

## Required tests and evidence results

### Conceptual repository clone

**Result: Partially ready.** The documented GitHub repository source and `main` branch make a clean clone conceptually possible. This was not treated as proof of account access, an independent mirror, or credential recovery. No credential was requested, created, or exposed.

### Main versus production relationship

**Result: Partially ready.** Repository evidence identifies `main` as the production branch and current `origin/main` at branch creation as `73cc4c4`. Deployment records document exact production verification for many prior commits. A live platform query matching the currently deployed production commit was not performed in this documentation-only task. The PR #54 trigger was missed, detected, and corrected manually; no root cause is established.

### Build, route, and audit commands

**Result: Ready as documented processes.** `package.json` confirms:

- `npm run build`
- `npm run lint`
- `npm run test`
- `npm run audit:site`
- `npm run generate:routes`
- `npm run check:generated-routes`

No runtime validation was run for this documentation-only task, and the full site audit was intentionally not run.

### Existing recovery-related policies

**Result: Partially ready.** Rollback/kill-switch, publishing, testing, search monitoring, hands-on testing, affiliate, and automation policies are present. They establish controls and stop conditions, but do not prove external backups, account recovery, MFA, DNS export, restore drills, or alternate ownership.

## Critical UNKNOWN items

These are not claims of active failure. They are the unknowns most capable of delaying recovery or making recovery unsafe:

1. Who controls GitHub, Vercel, registrar, DNS, GA4, Search Console, Bing, and affiliate-network access?
2. Is MFA enabled on each critical platform, and is a second recovery method available?
3. Does an independent repository/configuration backup or mirror exist, and has it been restored successfully?
4. Can DNS/nameserver records be exported and restored by an authorized person?
5. What is the complete environment-variable name inventory, ownership, secure recovery source, and rotation process?
6. Is there a trusted alternate operator with authority to deploy, roll back, restore, and communicate an incident?
7. Can affiliate payout profiles, approvals, destinations, and commission statements be recovered privately?
8. What is the current production deployment trigger configuration, and what evidence explains the PR #54 missed trigger? The incident is corrected; root cause remains UNKNOWN.

## Owner questions for Aaron

- Where is domain access held, and who owns renewal responsibility?
- Where is Vercel access held, and who can deploy, roll back, and restore the project?
- Is MFA enabled for GitHub, Vercel, registrar, DNS, GA4, Search Console, Bing, CJ, MaxBounty, and other critical platforms?
- Does a second recovery method exist for each critical platform, independent of the primary device or inbox?
- Is there a trusted alternate operator who can execute the runbook and make emergency stop/rollback decisions?
- Can the registrar and DNS records be exported, stored securely, and restored by an authorized person?
- Is the complete environment-variable name list and ownership record current, with secure private recovery sources for values?
- Are affiliate network payment, profile, approval, destination, terms, and commission-history recovery details documented privately?
- Is there an independent repository mirror or backup, and when was its restore last tested?
- Which private communication channel and escalation path should be used for production, security, domain, analytics, and affiliate incidents?

## Readiness decision

The repository has a usable documentation foundation and identifiable source/rebuild processes, so it is **partially ready** for controlled recovery. It is not ready to claim end-to-end recovery capability because account ownership, MFA, backups, DNS exports, private configuration, alternate operators, and restore testing remain UNKNOWN. No production configuration or live control was changed by this audit.

## Scope and validation record

- `git diff --check`: required after the three documents were added.
- Only the three requested documentation files are intended to differ from current `origin/main`.
- No runtime validation was run.
- No full site audit was run.
- No production rollback, DNS change, environment-variable change, credential rotation, or live incident simulation was performed.
- Secret scan of the diff: no secret values, private identifiers, raw affiliate URLs, or measurement identifiers were intentionally included.
