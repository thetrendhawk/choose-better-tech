# Cloud Storage Cluster Approval

Status: APPROVED
Decision date: 2026-07-12
Owner: Choose Better Tech
Governing policy: `operations/TOPIC_CLUSTER_APPROVAL_POLICY.md`

## Cluster Identity

- **Cluster name:** Cloud Storage
- **Audience:** Beginner and mainstream consumers, families, freelancers, caregivers, and small teams choosing where to store, sync, share, recover, and move files.
- **Mission fit:** Strong. Cloud storage is a mainstream software decision with meaningful differences in ownership, privacy, collaboration, recovery, platform support, pricing, and lock-in.
- **Relationship to existing CBT categories:** The cluster extends CBT's practical privacy, security, account-management, migration, and buyer-decision coverage without duplicating VPN, password-manager, or data-removal intent.
- **Why Cloud Storage belongs on CBT:** Readers face consequential tradeoffs that vendor plan tables do not explain well: sync versus backup, quota accounting, proprietary formats, recovery windows, account ownership, offboarding, privacy architecture, and ecosystem lock-in.

## Reader Problems

The cluster will help readers make these practical decisions:

- choose a beginner-friendly service without treating free capacity as the only criterion;
- distinguish ordinary provider-side encryption from end-to-end or zero-knowledge designs;
- choose between document collaboration and file-sync depth;
- understand ecosystem lock-in and proprietary file formats;
- distinguish synchronization from independent backup;
- determine who owns shared files and what happens during offboarding;
- migrate files, permissions, photos, and native documents safely;
- compare deletion, version history, ransomware recovery, and restore limits;
- compare monthly, annual, family, and business pricing without hiding renewal or quota rules;
- decide whether family sharing, caregiver access, or small-team administration changes the best fit.

## Existing Assets

1. **Best Cloud Storage for Beginners** — `/best-cloud-storage-for-beginners`
   - Broad beginner ranking and decision guide.
   - Canonical research, visible sources, current QA, and production approval are complete.
2. **Google Drive vs Dropbox** — `/comparisons/google-drive-vs-dropbox`
   - Direct mainstream comparison covering collaboration, sync, ownership, recovery, privacy, and migration.
   - Canonical pairwise research, visible sources, current QA, and production approval are complete.

These assets establish the cluster but do not yet provide a provider review, Apple-versus-Google ecosystem decision, or secure-storage ranking.

## Proposed Next Assets

### 1. Proton Drive Review — APPROVED

This is the best first expansion because it creates a provider-specific anchor for privacy architecture, encryption scope, platform support, recovery/versioning, plan limits, migration, and Proton ecosystem tradeoffs. The review must not assume privacy superiority from brand positioning alone.

### 2. iCloud vs Google Drive — APPROVED

This comparison addresses a mainstream ecosystem decision distinct from Google Drive vs Dropbox. It must cover shared quota accounting, photos and device backups, collaboration, Windows/web access, family sharing, native formats, ownership, recovery, export, and switching costs.

### 3. Best Secure Cloud Storage — APPROVED

This ranking is approved as the third asset, after the shared dossier and provider evidence are mature. It requires a broad candidate set, precise encryption and metadata distinctions, audit/incident review, recovery analysis, and clear separation of security, privacy, backup, and collaboration. It must not use `most secure` or equivalent language without direct comparative evidence.

## Original Contribution

The cluster will contribute more than generic storage tables by providing:

- normalized quota, version-history, recovery, platform, sharing, and pricing evidence;
- explicit separation of sync, backup, archive, collaboration, and disaster recovery;
- file-ownership and offboarding analysis;
- migration guidance for native formats, permissions, photos, and shared folders;
- privacy-field and metadata distinctions rather than broad encryption labels;
- scenario-based recommendations for beginners, families, mixed-device users, privacy-focused users, and small teams;
- documented conflicts and uncertainty where provider terms or support pages disagree;
- current checked dates and refresh triggers for volatile plan facts.

Each article must independently answer the Original Contribution question and receive `PASS` before drafting.

## Evidence Access

Adequate evidence is available through:

- official pricing, billing, quota, and plan pages;
- technical architecture and encryption documentation;
- official desktop, mobile, browser, and platform-support documentation;
- privacy policies, data-processing terms, retention terms, and transparency reports;
- deleted-file, version-history, ransomware-recovery, and restore documentation;
- public security assessments and independent audits where available;
- academic and independent technical research for sync, usability, privacy, or security claims;
- export, migration, ownership, shared-drive, team-space, and offboarding documentation.

Vendor pages may establish documented features and terms but do not independently prove reliability, privacy behavior, ease of use, or recovery success.

## Risk and Volatility

| Area | Risk | Required control |
| --- | --- | --- |
| Pricing and renewals | High | Official sources, billing period, checked date, renewal/introductory distinction |
| Plan and member limits | High | Claim ledger plus volatile-claims register |
| Free storage and quota accounting | High | Explain shared pools, bonuses, and account dependencies |
| Recovery and version windows | High | Record plan, deletion state, retention window, and exclusions |
| Feature availability | High | Verify plan, platform, region, and account type |
| Platform support | High | Distinguish native apps, web access, third-party clients, and Linux gaps |
| Privacy and encryption claims | High | Map encrypted and unencrypted fields; separate vendor claims from audits |
| Ownership and offboarding | High | Verify terms for personal, family, shared, and business accounts |
| Account-sharing rules | High | Distinguish family membership, shared folders, seats, guests, and credential sharing |

All Critical and High claims require direct traceability and reviewer status in an article-specific claim ledger.

## Testing Needs

Documentation-only review may be acceptable, when disclosed, for plan comparisons, architecture explanation, ownership and terms analysis, platform-support documentation, privacy-policy analysis, and audit interpretation.

Hands-on testing is normally required before strong claims about:

- sync speed or upload/download performance;
- conflict handling;
- offline-file behavior;
- setup or migration friction;
- desktop/mobile usability;
- photo-upload reliability;
- cross-platform compatibility in practice;
- recovery success;
- support responsiveness;
- cancellation difficulty;
- import/export accuracy.

Without testing, use documentation-based or evidence-based fit language and do not claim `fastest`, `most reliable`, `seamless`, `flawless`, `tested`, or `proven`.

## Internal Linking Plan

- **Best Cloud Storage for Beginners** remains the cluster entry point and links selectively to the provider review, comparisons, and secure-storage ranking.
- **Proton Drive Review** links to the beginner guide, secure-storage ranking when live, relevant privacy/password-manager education, and only genuinely relevant comparisons.
- **Google Drive vs Dropbox** and **iCloud vs Google Drive** link to the beginner guide and migration/ownership guidance without forcing unrelated provider links.
- **Best Secure Cloud Storage** links to full reviews, the beginner guide, privacy methodology, and relevant password-manager/privacy education.
- Password-manager and privacy pages may link to cloud-storage coverage only where account security, encryption, recovery, exports, or ecosystem ownership makes the connection useful.
- No new article will be added mechanically to every existing page.

## Monetization Independence

Affiliate availability does not determine cluster inclusion, candidate selection, ranking, verdict, recommendation label, criticism, CTA prominence, or publication order. A provider without an affiliate relationship must receive equal editorial consideration. Raw affiliate destinations remain isolated in `src/data/affiliateLinks.ts`.

## Maintenance Capacity

The cluster is approved as a narrow, controlled expansion: two existing assets plus three approved next assets. This five-asset scope is maintainable if publication remains one article at a time and volatile facts are registered. No additional Cloud Storage article should be added until these assets are complete and a maintenance review confirms capacity.

## Approval Decision

**APPROVED**

Approved sequence:

1. Proton Drive Review
2. iCloud vs Google Drive
3. Best Secure Cloud Storage

Binding execution conditions:

- create a shared Cloud Storage research dossier before the first article;
- create a separate research record for each article;
- create a separate claim ledger for each article;
- use a separate dedicated branch and pull request for each article;
- research, draft, review, deploy, and close one article at a time;
- require an independent reviewer pass;
- require a score of at least `34/40` with all category floors satisfied;
- publish no more than two substantial pages in one calendar day without explicit authorization;
- do not draft before distinct-intent, original-contribution, research, and evidence gates pass;
- pause if a serious search anomaly, expired-claim backlog, unresolved QA failure, or material correction requires it.
