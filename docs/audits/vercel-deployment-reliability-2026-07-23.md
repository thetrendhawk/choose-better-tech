# Vercel Deployment and Rollback Readiness Audit

**Review date:** 2026-07-23  
**Repository:** `thetrendhawk/choose-better-tech`  
**Branch:** `operations/vercel-deployment-reliability`  
**Scope:** Documentation and evidence gathering only. No deployment, redeploy, promotion, rollback, environment, domain, or configuration action was performed.

## Evidence boundary

This audit uses repository history, operations records, GitHub pull-request/deployment records available to the repository owner, `package.json`, and the existing recovery policies. Private project IDs, account IDs, deployment tokens, private URLs, credentials, and environment values are intentionally omitted. Platform facts not established by this evidence are marked UNKNOWN.

## Current deployment path

- **Production repository:** `thetrendhawk/choose-better-tech`.
- **Production branch:** `main`.
- **Current main commit at review time:** `26485291cc9fa60615b23eb5d8e31ba12f01f7f0`.
- **Expected trigger:** merge to `main` is the documented production path. The repository’s pull-request and publishing workflow assumes production follows the merged main commit.
- **Integration evidence:** GitHub deployment records show successful `Preview` deployments for pull-request commits and successful `Production` deployments for merged main commits. This proves observed integration behavior, not the complete Vercel project configuration.

## Deployment evidence

### Recent preview deployments

The available GitHub deployment records show successful Preview deployments for recent recovery/documentation branches, including commits `d29d1c9d84649c0d7d4991f4dd91c170f483a87c`, `4ad388ea3a1c508c5e855dd16ef5dd35dc78f952`, `42289c8384ebc5ce1e7ea23528e80db1b6d64b4a`, `e7048a7e8872e8d1bf646b97e47631dbb2de6bd9`, and `a3e7809f3231063021c6cac32c43ce955eefc21f`. Each observed status was `success`.

This supports a working pull-request preview path for the observed commits. It does not prove that every future preview will succeed or that Preview environment values match Production.

### Recent production deployments

Available GitHub deployment records show successful Production deployments for:

- `26485291cc9fa60615b23eb5d8e31ba12f01f7f0` at 2026-07-23 17:59 UTC.
- `fc1dce055581ea36620047ad53125b912612c908` at 2026-07-23 17:49 UTC.
- `100e39b9a3a82c36111ce1a60974dc89f9efad0c` at 2026-07-23 16:59 UTC.
- `b1f7ff1db9e88031830e39d5d5ef318f5432da01` at 2026-07-23 16:50 UTC.
- `80bc8a9201f5590fe64b234c3802026a66861639` at 2026-07-23 16:44 UTC.
- `73cc4c4e9efa171f95f46a7fc4073e1d5032a9cb` at 2026-07-23 16:29 UTC.
- `ef0cb2a8a294de05978dd781a57997b8de5f7ccf` at 2026-07-23 15:16 UTC.
- `255870b6aff7a924910f861097afc0ea236498b8` at 2026-07-23 15:11 UTC.
- `bc35fb241d7a842872c77a3124950fbfc65ec9eb` at 2026-07-23 14:55 UTC.

The current `main` commit and the latest observed Production deployment match. This is independent commit/deployment evidence from the available GitHub deployment records; it is not a claim that all production behavior has been independently browser-verified in this task.

## PR #54 missed-trigger incident

After PR #54, the expected production trigger was missed. The issue was detected and corrected through a manual production deployment. No platform evidence establishes why the trigger was missed, so this audit assigns no root cause. The incident demonstrates a deployment reliability gap and the value of a manual fallback; it does not establish that production is currently unsafe.

## Manual fallback

When the expected merge-to-main deployment is absent or fails:

1. Confirm the intended merged commit on `main`.
2. Compare it with the current Production deployment commit using the available deployment record/platform view.
3. Preserve the discrepancy and any failure status before changing state.
4. With owner authorization, use the Vercel project’s manual deployment/redeploy path for the intended known commit.
5. Record the deployment result and validate the affected production surface before declaring recovery.

The existence of this fallback is documented and has been used after PR #54. The exact platform trigger configuration, project access path, and current owner-visible controls are not reproduced in the repository and remain partially evidenced.

## Identifying deployments

### Current production deployment

Use the latest successful Production deployment record, then compare its commit SHA to `origin/main` and the intended merged commit. Record the deployment timestamp, environment, commit, status, and validation evidence. At this review, the latest successful Production record matched `main` at `26485291cc9fa60615b23eb5d8e31ba12f01f7f0`.

### Last known-good deployment

Use the most recent Production deployment that has a successful platform status and recorded post-deployment validation for the affected surface. A commit is not “known good” solely because it built or deployed. The prior successful Production commit immediately before the current one was `fc1dce055581ea36620047ad53125b912612c908`; the recovery record must still confirm that it is suitable for the specific rollback target.

## Rollback readiness

### Authorization

Aaron is the current sole operator and recovery authority. No alternate rollback operator is documented. Any production rollback or redeploy requires owner authorization, a recorded reason, a selected known-good commit, and a stop decision if deployment identity or validation evidence is incomplete.

### Required validation after a future real rollback

- Confirm the Production deployment status is successful and its commit matches the authorized target.
- Verify the canonical production root and affected deep routes directly.
- Verify title, metadata, canonical, route behavior, and relevant generated sitemap/robots output.
- Verify analytics and affiliate behavior when the affected surface includes them, including safe fallback and disclosure/status wording.
- Check browser console/network failures and responsive structural behavior at the required risk tier.
- Record timestamp, target commit, operator authorization, validation results, unresolved UNKNOWNs, and rollback decision.

### Rollback execution status

Rollback execution has **not** been tested. The runbook documents controlled rollback steps and stop conditions, and recent successful Production deployments provide candidate commit history, but no live rollback drill or non-production equivalent has been evidenced.

## Readiness table

| Area | Status | Evidence and gap |
|---|---|---|
| GitHub integration | Partially ready | GitHub deployment records show successful Preview and Production events; exact Vercel integration settings and failure alert path are UNKNOWN. |
| Production branch | Ready | `main` is the documented production branch and current deployment evidence matches current `main`. |
| Automatic deployment trigger | Partially ready | Merge-to-main is documented and observed in recent Production records; PR #54 shows trigger reliability was not perfect and no root cause is established. |
| Preview deployments | Ready | Recent observed Preview deployment records succeeded for multiple commits. Preview/Production configuration parity remains UNKNOWN. |
| Production commit identification | Ready | Available deployment records expose environment, commit SHA, timestamp, and status; current Production matches current `main` at review time. |
| Manual fallback | Partially ready | Manual deployment corrected the PR #54 missed trigger and is documented; exact owner-visible controls and access recovery remain UNKNOWN. |
| Rollback target identification | Partially ready | Successful historical Production commits provide candidates; “known good” still requires surface-specific validation evidence. |
| Rollback execution | Not ready | No rollback execution or controlled drill has been tested. |
| Post-rollback validation | Partially ready | Policies and runbook define required checks; no completed rollback validation record exists. |
| Deployment ownership | Partially ready | Aaron is sole operator/recovery authority; alternate operator and independent emergency handoff are absent. |

## Audit answers

- **Is the expected deployment path documented?** Yes: merge to `main` followed by Production deployment.
- **Can the current production commit be independently verified?** Yes, using the available GitHub deployment record and comparison to `origin/main`; at review time both were `26485291cc9fa60615b23eb5d8e31ba12f01f7f0`.
- **Can a last known-good deployment be identified?** Partially. Successful prior Production commits can be identified, but suitability still requires surface-specific validation.
- **Has rollback execution been tested?** No.
- **Is manual fallback documented?** Yes, and it was used to correct the PR #54 missed trigger.
- **What remains before deployment reliability is safe for higher publishing volume?** Verify platform trigger/alert evidence, execute a controlled rollback drill, record repeatable post-rollback validation, confirm owner-visible access and rollback authority, and establish an alternate emergency operator or handoff.

## Non-destructive rollback drill plan

This plan stops before any promote, redeploy, or rollback control is pressed.

1. Identify the current Production deployment from the latest successful deployment record.
2. Identify a prior known-good deployment with matching surface-specific validation evidence.
3. Record both commit SHAs, environments, statuses, and timestamps.
4. Confirm that the owner can see the relevant Vercel deployment and rollback controls.
5. Stop before pressing any promote, redeploy, or rollback control.
6. For a future authorized real rollback, validate deployment status, target commit, canonical root, affected routes, metadata/canonicals, generated artifacts, relevant analytics/affiliate behavior, console/network state, responsive behavior, and the incident record.

## Readiness decision

The expected deployment path is documented and current deployment identity is independently verifiable from available GitHub evidence. Preview and Production paths have recent successful observations. Overall deployment reliability remains **Partially ready** because the PR #54 trigger incident has no established root cause, the exact platform controls are not fully evidenced, rollback execution has not been tested, and deployment ownership has no alternate operator. No production action was taken in this audit.

## Validation record

- `git diff --check`: required after adding the audit.
- Documentation-only change: one new audit document; existing inventory and runbook require no content change for this focused evidence record.
- No runtime validation or full site audit run.
- No production deployment, redeploy, promotion, rollback, environment change, domain change, or configuration change performed.
- No secrets, private identifiers, private URLs, tokens, or credentials included.
