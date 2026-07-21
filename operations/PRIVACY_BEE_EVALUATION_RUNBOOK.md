# Privacy Bee Evaluation Runbook

Status: Active operational documentation
Editorial authorization: None
Last updated: 2026-07-21

## Purpose

Provide a controlled sequence for completing the Privacy Bee evaluation without repeating broad account walkthroughs. This runbook governs evaluation operations only. It does not authorize an article, publication, rating, verdict, ranking, recommendation, affiliate activation, CTA, or production change.

Canonical records:

- [Privacy Bee hands-on evaluation log](../docs/research/privacy-bee-hands-on-evaluation-log.md)
- [Privacy Bee support responsiveness test](../docs/research/privacy-bee-support-test-2026-07-19.md)

## Evidence rules

- Add a sanitized repository record after every test.
- Keep raw evidence private.
- Do not put personal information in GitHub.
- Perform one controlled product action at a time.
- Never infer a completed removal solely from a dashboard label.
- Label provider claims as provider claims.
- Keep unresolved discrepancies unresolved until evidence closes them.

## Current baseline

The canonical log remains authoritative. Its sanitized baseline records:

- scans performed: 179;
- exposures found: 45;
- removals requested: 15 initially, later 16;
- removals completed: 2;
- all-time removal activity: 17 requested and 15 in progress;
- companies monitored: 357;
- active exposures: 49 initially, later 52;
- exposures removed in the Data Brokers view: 4;
- search presence: 2 active results at baseline, later 0 after two false positives were preserved;
- dark-web exposures: 0;
- account access end or renewal date displayed: 2026-08-17;
- auto-renew: off when checked on 2026-07-19;
- LPOA: unsigned.

These figures use different product definitions and must not be combined. The support-responsiveness test is partially explained: a human response defined the two metrics but did not identify the exact additional request; the conversation was later marked resolved and a focused follow-up remains pending.

## Remaining test sequence

Follow this order. Do not advance to a later test merely because it is convenient.

### 1. Human support follow-up

- Send a focused follow-up asking Privacy Bee to identify the exact additional request responsible for the 16-versus-17 difference.
- Record the response and whether the discrepancy is resolved.
- Do not state or imply that the follow-up has already been sent.

### 2. Seven-day removal-progress recheck

- Compare dashboard totals, all-time activity, Data Brokers totals, and completed-removal records with the prior baseline.
- Record deltas without combining differently defined metrics.

### 3. Verify completed removals externally

- Select one or two records labeled completed.
- Confirm whether the public broker page is absent, changed, blocked, or still visible.
- Record uncertainty where the original profile URL is unavailable.

### 4. Controlled custom URL removal

- Use one clearly verified public exposure belonging to the owner.
- Record the URL privately, not in the public repository.
- Record submission behavior, validation, status creation, and later outcome.
- Do not use an ambiguous namesake result.

### 5. Fourteen-day progress recheck

- Repeat the same metric categories.
- Record elapsed time for completed, pending, and in-progress removals.

### 6. Re-exposure test

- Proceed only if an already removed exposure reappears naturally.
- Do not intentionally republish personal information.
- Record whether Privacy Bee detects it and restarts removal.

### 7. Limited Power of Attorney decision

- Do not sign automatically.
- Evaluate only after observing removal failures or brokers requiring authorized-agent documentation.
- Record the reason for signing or declining.

### 8. Thirty-day and access-expiration review

- Recheck immediately before or near August 17, 2026.
- Record final totals, unresolved removals, account-access behavior, billing state, and whether data remains accessible after Pro access ends.
- Do not enable auto-renew.

## Checkpoint table

| Checkpoint | Earliest target date | Owner action | Repository update | Status | Blocker |
| --- | --- | --- | --- | --- | --- |
| Human support follow-up | Pending; no fixed date | Ask Privacy Bee to identify the exact additional request | Update canonical log, support-test record, and runbook | Partially explained | Exact additional request remains unidentified |
| Seven-day recheck | July 24, 2026 | Access the dashboard and provide dated, sanitized evidence | Record each metric category and delta separately | Scheduled | Owner dashboard access required |
| Fourteen-day recheck | July 31, 2026 | Access the dashboard and provide dated, sanitized evidence | Record repeated metrics and removal-state elapsed time | Scheduled | Owner dashboard access required |
| Thirty-day/access review | August 16–18, 2026 | Access the account near expiration and provide dated, sanitized evidence | Record final metrics, billing, access, and unresolved items | Scheduled | Owner account access required |

External verification, controlled URL removal, re-exposure observation, and the LPOA decision occur in sequence when their stated prerequisites are met; they do not have invented target dates.

## Manual-owner checkpoints

The following actions require the owner:

- provide a screenshot or text of the human support reply;
- access the Privacy Bee dashboard for dated rechecks;
- identify and verify a genuine exposure URL;
- authorize any removal submission;
- authorize or decline the LPOA;
- verify public broker pages;
- observe account behavior at access expiration.

## Codex responsibilities after each checkpoint

When the owner supplies evidence, Codex must:

- update the canonical log;
- update the relevant test record;
- update the runbook status;
- preserve exact dates;
- list unresolved questions;
- commit to a focused branch;
- open or update a reviewable pull request;
- never merge without owner approval.
