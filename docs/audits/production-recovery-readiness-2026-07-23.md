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
| GitHub repository/source | Partially ready | Repository and branch are recoverable conceptually; owner confirms GitHub 2FA through an authenticator app. Independent mirror, live protection state, and alternate operator are not evidenced. |
| Vercel/deployment | Partially ready | Production branch, manual fallback, deployment records, and policies exist; trigger configuration, project access, and tested rollback/restore are not evidenced. |
| Domain/DNS | Partially ready | Canonical domain and migration dependencies are documented; owner confirms IONOS is both registrar and DNS provider. Record export, renewal monitoring, and recovery execution remain unverified. |
| Analytics | Partially ready | Event implementation, safe fallback, tests, and GA4 Realtime verification exist; owner confirms the Google account controlling GA4 and Search Console has MFA through the owner's phone plus a configured passkey. Passkey storage/sync independence, secondary recovery, and reporting ownership remain unknown. |
| Search platforms | Partially ready | Search baseline, sitemap, IndexNow, and Change of Address records exist; account access, receipts, and recovery are incomplete. |
| Affiliate networks | Partially ready | Registry, networks, product mappings, disclosures, and private redirect pattern exist; account recovery, payout records, statement archive, and destination regeneration are unknown. |
| Application/data | Partially ready | Source and reproducible artifacts are identifiable; external backups and private configuration recovery are not evidenced. |
| Credentials/access | Partially ready | MFA is confirmed for GitHub through an authenticator app, Vercel, IONOS, MaxBounty, and the Google account controlling GA4/Search Console through a phone plus passkey; CJ, Bing, and other platform MFA remain UNKNOWN. GitHub recovery codes, a second authenticator device, passkey storage/sync independence, and alternate access remain UNKNOWN. |
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

**Result: Partially ready.** Rollback/kill-switch, publishing, testing, search monitoring, hands-on testing, affiliate, and automation policies are present. They establish controls and stop conditions. Owner-confirmed MFA improves access readiness for GitHub, Vercel, IONOS, MaxBounty, and Google, but GitHub recovery methods, passkey storage/sync independence, DNS export, restore drills, and alternate ownership remain unverified.

## Critical UNKNOWN items

These are not claims of active failure. They are the unknowns most capable of delaying recovery or making recovery unsafe:

1. Where is the Google passkey stored or synced, and does that provide recovery independence if the owner's phone is unavailable?
2. Does GitHub have recovery codes, a second authenticator device, or another independent recovery method?
3. Can an independent repository backup be created and restored successfully?
4. Can IONOS DNS/nameserver records be exported and securely retained?
5. What is the complete environment-variable name inventory, ownership, secure recovery source, and rotation process?
6. Is there a trusted alternate operator with authority to deploy, roll back, restore, and communicate an incident?
7. Can affiliate payout profiles, approvals, destinations, and commission statements be recovered privately?
8. What is the current production deployment trigger configuration, and what evidence explains the PR #54 missed trigger? The incident is corrected; root cause remains UNKNOWN.

Google access no longer depends on the owner's phone alone because a passkey is also configured. However, recovery independence still depends on where that passkey is stored or synced. Aaron remains the sole operator and recovery authority, so phone loss, passkey unavailability, or account recovery failure could still delay access to GA4, Search Console, and related Google-controlled recovery paths.

## Prioritized next actions

1. Create an independent repository backup.
2. Export and securely retain IONOS DNS records.
3. Verify GitHub backup recovery methods.
4. Verify MFA/recovery for CJ, Bing, and remaining critical accounts.
5. Perform a clean-machine repository restore test.

## Owner questions for Aaron

- Domain and DNS access are confirmed at IONOS; who owns renewal responsibility and where is the secure recovery procedure held?
- Where is Vercel access held, and who can deploy, roll back, and restore the project?
- GitHub 2FA is confirmed through an authenticator app; are recovery codes, a second authenticator device, or another independent GitHub recovery method configured?
- Google MFA is confirmed through the owner's phone plus a passkey; where is the passkey stored or synced, and does it remain available if the phone is lost?
- Is MFA enabled for CJ, Bing, and other platforms not yet confirmed? Vercel, IONOS, MaxBounty, and Google are confirmed.
- Is there a trusted alternate operator who can execute the runbook and make emergency stop/rollback decisions? Currently there is none.
- Can IONOS registrar and DNS records be exported, stored securely, and restored by an authorized person?
- Is the complete environment-variable name list and ownership record current, with secure private recovery sources for values?
- Are affiliate network payment, profile, approval, destination, terms, and commission-history recovery details documented privately?
- An independent repository mirror or backup does not currently exist; when can one be created and its restore tested?
- Which private communication channel and escalation path should be used for production, security, domain, analytics, and affiliate incidents?

## Readiness decision

The repository has a usable documentation foundation and identifiable source/rebuild processes, so it remains **partially ready** for controlled recovery. It is not ready to claim end-to-end recovery capability because GitHub backup recovery methods, passkey storage/sync independence, backups, DNS exports, private configuration recovery, alternate operators, and restore testing remain UNKNOWN. Confirmed GitHub 2FA, plus MFA and a passkey for the Google account, improves access readiness but does not establish independent recovery if those authenticators are unavailable. No production configuration or live control was changed by this audit.

## Scope and validation record

- `git diff --check`: required after the three documents were added.
- Only the three requested documentation files are intended to differ from current `origin/main`.
- No runtime validation was run.
- No full site audit was run.
- No production rollback, DNS change, environment-variable change, credential rotation, or live incident simulation was performed.
- Secret scan of the diff: no secret values, private identifiers, raw affiliate URLs, or measurement identifiers were intentionally included.
