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
| GitHub repository/source | Partially ready | Owner-confirmed 2026-07-23 encrypted offline Git bundle contains complete history, all local branches/tags, and the open Privacy Bee branch; verification succeeded and a fresh clone restored `origin/main` to the recorded `main` commit. GitHub backup recovery methods, live protection state, and alternate operator remain unknown. |
| Vercel/deployment | Partially ready | Production branch, manual fallback, deployment records, and policies exist; trigger configuration, project access, and tested rollback/restore are not evidenced. |
| Domain/DNS | Partially ready | IONOS remains registrar and DNS provider; Domain Guard is active and DNSSEC is inactive. A complete private encrypted offline copy of the current DNS record table exists, but no live restore was tested and IONOS export/zone-file capability remains unverified. |
| Analytics | Partially ready | Event implementation, safe fallback, tests, and GA4 Realtime verification exist; owner confirms the Google account controlling GA4 and Search Console has MFA through the owner's phone plus a configured passkey. Passkey storage/sync independence, secondary recovery, and reporting ownership remain unknown. |
| Search platforms | Partially ready | Search baseline, sitemap, IndexNow, and Change of Address records exist; account access, receipts, and recovery are incomplete. |
| Affiliate networks | Partially ready | Registry, networks, product mappings, disclosures, and private redirect pattern exist; account recovery, payout records, statement archive, and destination regeneration are unknown. |
| Application/data | Partially ready | Source history has been backed up to BitLocker-protected offline media and successfully restored from a verified Git bundle. DNS has a private encrypted offline reference copy. Vercel access, environment values, analytics configuration, affiliate account/payment records, credentials, and recovery codes are not included. |
| Credentials/access | Partially ready | MFA is confirmed for GitHub through an authenticator app, Vercel, IONOS, MaxBounty, and the Google account controlling GA4/Search Console through a phone plus passkey; CJ, Bing, and other platform MFA remain UNKNOWN. GitHub recovery codes, a second authenticator device, passkey storage/sync independence, and alternate access remain UNKNOWN. |
| Incident ownership | Partially ready | Aaron is the sole operator and recovery authority; policy escalation concepts exist, but no alternate owner, contact tree, or tested independent recovery authority is recorded. |

## Required tests and evidence results

### Conceptual repository clone

**Result: Partially ready.** Owner-confirmed evidence from 2026-07-23 shows a BitLocker-protected removable drive containing the Git bundle `choose-better-tech-2026-07-23-final.bundle`. The bundle includes complete Git history, all local branches and tags, and the open Privacy Bee branch. Git verification succeeded; a fresh restore-test clone succeeded and its `origin/main` matched the recorded `main` commit. Git’s warning that remote HEAD refers to a nonexistent ref and could not checkout is treated as a bundle default-HEAD limitation, not a failed restore, because `origin/main` was present and verified. The Git bundle reports SHA-1 as its hash algorithm. This proves source-code recovery only, not credential or full-site recovery.

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

**Result: Partially ready.** Rollback/kill-switch, publishing, testing, search monitoring, hands-on testing, affiliate, and automation policies are present. Source-history backup and restore are evidenced, and a private encrypted DNS reference copy exists. They do not establish live DNS restore, IONOS export/zone-file support, Vercel account access, environment-variable recovery/redeployment, analytics account configuration, affiliate account/payment recovery, credentials/recovery-code recovery, or full-site restoration. Alternate ownership remains unverified.

## Critical UNKNOWN items

These are not claims of active failure. They are the unknowns most capable of delaying recovery or making recovery unsafe:

1. Where is the Google passkey stored or synced, and does that provide recovery independence if the owner's phone is unavailable?
2. Does GitHub have recovery codes, a second authenticator device, or another independent recovery method?
3. The encrypted offline repository bundle was verified and restored successfully; can the backup be refreshed and tested on the required cadence?
4. Can IONOS DNS/nameserver records be exported and securely retained?
5. What is the complete environment-variable name inventory, ownership, secure recovery source, and rotation process?
6. Is there a trusted alternate operator with authority to deploy, roll back, restore, and communicate an incident?
7. Can affiliate payout profiles, approvals, destinations, and commission statements be recovered privately?
8. What is the current production deployment trigger configuration, and what evidence explains the PR #54 missed trigger? The incident is corrected; root cause remains UNKNOWN.

Google access no longer depends on the owner's phone alone because a passkey is also configured. However, recovery independence still depends on where that passkey is stored or synced. Aaron remains the sole operator and recovery authority, so phone loss, passkey unavailability, or account recovery failure could still delay access to GA4, Search Console, and related Google-controlled recovery paths.

## Prioritized next actions

1. Verify GitHub backup recovery methods.
2. Verify MFA/recovery for CJ, Bing, and remaining critical accounts.
3. Verify the private environment-variable recovery record during the next real configuration change.
4. Establish an alternate operator or documented emergency handoff.
5. Document Vercel deployment trigger and rollback evidence.

## Owner questions for Aaron

- Domain and DNS access are confirmed at IONOS; who owns renewal responsibility and where is the secure recovery procedure held?
- Where is Vercel access held, and who can deploy, roll back, and restore the project?
- GitHub 2FA is confirmed through an authenticator app; are recovery codes, a second authenticator device, or another independent GitHub recovery method configured?
- Google MFA is confirmed through the owner's phone plus a passkey; where is the passkey stored or synced, and does it remain available if the phone is lost?
- Is MFA enabled for CJ, Bing, and other platforms not yet confirmed? Vercel, IONOS, MaxBounty, and Google are confirmed.
- Is there a trusted alternate operator who can execute the runbook and make emergency stop/rollback decisions? Currently there is none.
- The current DNS table has a private encrypted offline copy; can IONOS export/zone-file capability be verified and can a controlled restore be tested without changing production?
- `OPTERY_AFFILIATE_URL` is the only currently known production environment variable; can its private recovery record be verified during the next real configuration change without exposing its value?
- Are affiliate network payment, profile, approval, destination, terms, and commission-history recovery details documented privately?
- The encrypted offline source backup has been restored successfully; when will it be refreshed after meaningful changes, verified quarterly, and restore-tested at least twice per year?
- Which private communication channel and escalation path should be used for production, security, domain, analytics, and affiliate incidents?

## Readiness decision

The repository has a usable documentation foundation and identifiable source/rebuild processes, and source-code recovery is partially evidenced through a verified encrypted offline Git bundle restore. DNS has a private encrypted offline reference copy and private environment-value recovery is documented for the one currently known production variable, but neither DNS restore nor environment recovery/redeployment has been tested. Overall readiness remains **partially ready**. This does not establish full-site or end-to-end recovery because Vercel account access, analytics account configuration, affiliate account/payment records, credentials, recovery codes, alternate ownership, and external-platform restore remain outside the documented tests or UNKNOWN. No production configuration or live control was changed by this audit.

## Scope and validation record

- `git diff --check`: required after the three documents were added.
- Only the three requested documentation files are intended to differ from current `origin/main`.
- No runtime validation was run.
- No full site audit was run.
- No production rollback, DNS change, environment-variable change, credential rotation, or live incident simulation was performed.
- Secret scan of the diff: no secret values, private identifiers, raw affiliate URLs, or measurement identifiers were intentionally included.
