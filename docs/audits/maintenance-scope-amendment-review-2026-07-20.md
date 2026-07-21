# Maintenance and Scope-Amendment Review — 2026-07-20

Status: Governance review only. No article drafting, publication, merge, cluster amendment, route change, or affiliate change is authorized by this document.

## Repository and policy baseline

- `main` contains PR #43 merge `b974fce653fabdd9da10d1f0bf7162d12f70f11a`.
- `main` contains PR #45 merge `7d411c56969cbfafea2905eccb91bce4bf583451`.
- `main` contains PR #46 merge `6dcde7d874570e488498f98e9fd3f282cb8b4e06`.
- `operations/AUTOMATION_PUBLISHING_CONTRACT.md` is version 1.3, effective 2026-07-20.
- The current route manifest contains 68 routes and `public/sitemap.xml` contains 68 URLs.
- PR #43 and Issue #42 require no owner merge decision. The article route is published content.

## Operations reconciliation

| Finding | Classification | Evidence and disposition |
| --- | --- | --- |
| Content Dashboard says PR #43 awaits owner merge and the guide is not in live counts. | `STALE — CORRECTION REQUIRED` | GitHub records PR #43 merged as `b974fce`; route, homepage discovery, manifest, and sitemap entries are present. Corrected in `operations/CONTENT_DASHBOARD.md`. |
| Content Calendar marks the guide “Not published” and says owner merge approval is required. | `STALE — CORRECTION REQUIRED` | PR #43 is merged and the route is published. Corrected in `operations/CONTENT_CALENDAR.md`. |
| KPI Dashboard reports 30 guides and 57 assets and excludes the Defender guide. | `STALE — CORRECTION REQUIRED` | Current inventory is 31 guides and 58 assets. Corrected in `operations/KPI_DASHBOARD.md`. |
| Project Status says owner decision is required and the guide is not merged or published. | `STALE — CORRECTION REQUIRED` | GitHub merge state and route inventory contradict the old status. Corrected in `operations/PROJECT_STATUS.md`. |
| Roadmap marks the guide merge-ready and PR #43 awaiting owner decision. | `STALE — CORRECTION REQUIRED` | PR #43 is merged; production/indexing follow-up remains. Corrected in `operations/ROADMAP.md`. |
| Changelog contains a pre-merge statement that PR #43 was unmerged and unpublished. | `HISTORICAL — RETAIN WITH CONTEXT` | The chronology is preserved and a verified post-merge correction is appended to the statement. |
| Search Console indexing status for the Defender route. | `UNKNOWN — EVIDENCE NEEDED` | Repository records confirm publication and sitemap inclusion, not Google indexing. No indexing claim is made. |
| Search anomaly status. | `CURRENT` | No active anomaly or sitewide pause is recorded in the current repository policy/status records. |

## Capacity review

### Cybersecurity Tools — `MAINTENANCE FIRST`

Current cluster content includes Best Antivirus Software, TotalAV Review, Do You Still Need Antivirus on Windows 11, and Windows Defender vs Paid Antivirus. The initial two-article approval and the later controlled Defender article are complete.

Capacity is not available for immediate expansion because the cluster has high-volatility lab, product, platform, plan, ownership, legal, and affiliate facts; Search Console indexing remains partly unverified; operations records required reconciliation; and Best PC Cleanup Tools remains explicitly held for category-risk research. Existing pages also share substantial intent around Defender baselines, paid-suite gaps, backups, phishing, scams, and what antivirus cannot protect against.

One additional article could be reconsidered after maintenance evidence is current. The cluster is not ready for an approval amendment today.

### Cloud Storage — `MAINTENANCE FIRST`

The approved five-asset sequence is complete: Best Cloud Storage for Beginners, Google Drive vs Dropbox, Proton Drive Review, iCloud vs Google Drive, and Best Secure Cloud Storage.

The cluster approval explicitly requires a maintenance review before adding an article. Volatile claims remain substantial across quota, plans, recovery windows, platform support, encryption scope, ownership, sharing, and offboarding. Indexing is still not fully verified, and existing pages already cover much of the proposed recovery, ownership, migration, and backup context.

The evidence base could support a narrowly scoped educational article, but current governance requires maintenance evidence before amendment. The cluster is not ready for an approval amendment today.

## Candidate assessments

### Cloud Storage vs Backup: What Each One Protects

- Proposed route: `/guides/cloud-storage-vs-backup`
- Reader question: Is synchronizing files to cloud storage enough protection against deletion, corruption, device loss, or ransomware?
- Closest pages: `/best-cloud-storage-for-beginners`, `/best-secure-cloud-storage`, `/comparisons/icloud-vs-google-drive`, `/comparisons/google-drive-vs-dropbox`.
- Distinctness: Potentially distinct as a threat-model and workflow explainer, provided it does not rank providers or repeat provider feature tables.
- Original contribution: A sync-versus-backup decision model and independent-backup checklist.
- Evidence: CISA, NIST, Microsoft, Apple, Google, Dropbox, Proton, and official backup/version-history documentation.
- Classification: `SUITABLE FOR EXISTING-CLUSTER AMENDMENT` after maintenance gates.
- Risk: High safety risk if recovery or ransomware claims are overstated; medium-high volatility.
- Commercial classification: Informational; no ranking, review, comparison verdict, pricing-heavy guidance, or affiliate activation.
- Controlled diff: Article-specific research, claim ledger, page, route registration, sitemap, internal links, and validation records only.
- Routine auto-merge: Potentially yes after explicit amendment and all 12 conditions; not authorized now.

### How to Recover Deleted or Overwritten Cloud Files

- Proposed route: `/guides/recover-deleted-overwritten-cloud-files`
- Reader question: What recovery options remain after deletion, overwrite, sync propagation, or expiration of a provider retention window?
- Closest pages: `/reviews/proton-drive-review`, `/comparisons/google-drive-vs-dropbox`, `/comparisons/icloud-vs-google-drive`, `/best-secure-cloud-storage`.
- Distinctness: Potentially distinct as a provider-neutral recovery decision tree, but existing pages already contain meaningful provider-specific recovery material.
- Original contribution: Separate deletion, overwrite, sync propagation, and independent-backup paths with explicit limits.
- Evidence: Current official Google, Apple, Dropbox, Proton, Microsoft, and CISA documentation.
- Classification: `SUITABLE FOR EXISTING-CLUSTER AMENDMENT` after a stricter cannibalization review.
- Risk: High volatility and high reader-safety risk; plan and retention windows change.
- Commercial classification: Informational if provider-neutral and non-ranking.
- Controlled diff: Feasible within article-specific scope.
- Routine auto-merge: Potentially yes after authorization, but only with complete claim reconciliation and dated retention facts.

### Do Antivirus Programs Conflict With Each Other?

- Proposed route: `/guides/antivirus-software-conflicts`
- Reader question: Should a Windows user run multiple real-time antivirus products, and what happens when providers hand off protection?
- Closest pages: `/guides/windows-defender-vs-paid-antivirus`, `/guides/do-you-still-need-antivirus-on-windows-11`, `/best-antivirus-software`.
- Distinctness: Narrowly distinct as a transition and overlap explainer, but the existing pages already address one-primary-provider guidance.
- Original contribution: A provider-neutral installation, handoff, and conflict checklist.
- Evidence: Microsoft Windows Security documentation plus current official provider support documentation.
- Classification: `DUPLICATE OR CANNIBALIZING` pending proof of materially distinct search intent.
- Risk: Medium safety risk; incorrect advice could leave users without active protection.
- Commercial classification: Informational only if it avoids recommending a paid product.
- Controlled diff: Technically feasible, but scope would be small and overlap risk is high.
- Routine auto-merge: Not recommended unless a new intent audit establishes clear separation.

## Governance recommendation

`MAINTENANCE REMEDIATION REQUIRED BEFORE ANY AMENDMENT`

Both clusters have plausible future informational opportunities, but neither has demonstrated current readiness for a scope amendment. The immediate need is to reconcile operational records, verify indexing, complete maintenance/capacity evidence, and document a fresh cannibalization decision before authorizing one candidate.

## Exact owner decision required

Authorize or decline a maintenance remediation phase only. If authorized, it should verify:

1. Search Console indexing for the current Cybersecurity Tools and Cloud Storage routes.
2. Current volatile-claim and refresh backlog status.
3. Any open QA, anomaly, rollback, or kill-switch conditions.
4. Sitewide and cluster maintenance capacity.
5. A fresh intent audit for one candidate only.

No cluster amendment, article drafting, publication, or merge is authorized by this review.
