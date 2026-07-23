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
| Domain/DNS | Partially ready | Canonical domain and migration dependencies are documented; owner confirms IONOS is both registrar and DNS provider. Record export, renewal monitoring, and recovery execution remain unverified. |
| Analytics | Partially ready | Event implementation, safe fallback, tests, and GA4 Realtime verification exist; owner confirms the Google account controlling GA4 and Search Console has MFA enabled, currently using the owner's phone. Secondary recovery and reporting ownership remain unknown. |
| Search platforms | Partially ready | Search baseline, sitemap, IndexNow, and Change of Address records exist; account access, receipts, and recovery are incomplete. |
| Affiliate networks | Partially ready | Registry, networks, product mappings, disclosures, and private redirect pattern exist; account recovery, payout records, statement archive, and destination regeneration are unknown. |
| Application/data | Partially ready | Source and reproducible artifacts are identifiable; external backups and private configuration recovery are not evidenced. |
| Credentials/access | Partially ready | MFA is confirmed for Vercel, IONOS, MaxBounty, and the Google account controlling GA4/Search Console; GitHub, CJ, Bing, and other platform MFA remain UNKNOWN. Secondary recovery methods and alternate access remain UNKNOWN. |
| Incident ownership | Partially ready | Aaron is the sole operator and recovery authority; policy escalation concepts exist, but no alternate owner, contact tree, or tested independent recovery authority is recorded. |

## Required tests and evidence results

### Conceptual repository clone

**Result: Partially ready.** The documented GitHub repository source and `main` branch make a clean clone conceptually possible. Owner confirms no independent repository mirror or backup currently exists. This was not treated as proof of credential recovery. No credential was requested, created, or exposed.

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

**Result: Partially ready.** Rollback/kill-switch, publishing, testing, search monitoring, hands-on testing, affiliate, and automation policies are present. They establish controls and stop conditions. Owner-confirmed MFA improves access readiness for Vercel, IONOS, MaxBounty, and Google, but secondary recovery, DNS export, restore drills, and alternate ownership remain unverified.

## Critical UNKNOWN items

These are not claims of active failure. They are the unknowns most capable of delaying recovery or making recovery unsafe:

1. What secondary recovery methods exist for the Google account and other critical accounts?
2. Is GitHub MFA enabled?
3. Can an independent repository backup be created and restored successfully?
4. Can IONOS DNS/nameserver records be exported and securely retained?
5. What is the complete environment-variable name inventory, ownership, secure recovery source, and rotation process?
6. Is there a trusted alternate operator with authority to deploy, roll back, restore, and communicate an incident?
7. Can affiliate payout profiles, approvals, destinations, and commission statements be recovered privately?
8. What is the current production deployment trigger configuration, and what evidence explains the PR #54 missed trigger? The incident is corrected; root cause remains UNKNOWN.

The Google MFA dependency on the owner's phone and Aaron's status as sole operator/recovery authority create a remaining single-point-of-failure risk. Phone loss or account recovery failure could delay access to GA4, Search Console, and related Google-controlled recovery paths.

## Prioritized next actions

1. Verify secondary recovery methods for Google and other critical accounts.
2. Verify GitHub MFA.
3. Create an independent repository backup.
4. Export and securely retain IONOS DNS records.
5. Perform a clean-machine repository restore test.

## Owner questions for Aaron

- Domain and DNS access are confirmed at IONOS; who owns renewal responsibility and where is the secure recovery procedure held?
- Where is Vercel access held, and who can deploy, roll back, and restore the project?
- Is MFA enabled for GitHub, CJ, Bing, and other platforms not yet confirmed? Vercel, IONOS, MaxBounty, and the Google account are confirmed.
- What secondary recovery method exists for Google and each critical platform, independent of the owner's phone?
- Is there a trusted alternate operator who can execute the runbook and make emergency stop/rollback decisions? Currently there is none.
- Can IONOS registrar and DNS records be exported, stored securely, and restored by an authorized person?
- Is the complete environment-variable name list and ownership record current, with secure private recovery sources for values?
- Are affiliate network payment, profile, approval, destination, terms, and commission-history recovery details documented privately?
- An independent repository mirror or backup does not currently exist; when can one be created and its restore tested?
- Which private communication channel and escalation path should be used for production, security, domain, analytics, and affiliate incidents?

## Readiness decision

The repository has a usable documentation foundation and identifiable source/rebuild processes, so it remains **partially ready** for controlled recovery. It is not ready to claim end-to-end recovery capability because secondary recovery methods, backups, DNS exports, private configuration recovery, alternate operators, and restore testing remain UNKNOWN. Confirmed MFA for Vercel, IONOS, MaxBounty, and the Google account improves access readiness but does not remove the single-point-of-failure risk from phone loss or account recovery failure. No production configuration or live control was changed by this audit.

## Scope and validation record

- `git diff --check`: required after the three documents were added.
- Only the three requested documentation files are intended to differ from current `origin/main`.
- No runtime validation was run.
- No full site audit was run.
- No production rollback, DNS change, environment-variable change, credential rotation, or live incident simulation was performed.
- Secret scan of the diff: no secret values, private identifiers, raw affiliate URLs, or measurement identifiers were intentionally included.
