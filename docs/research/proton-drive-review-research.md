# Proton Drive Review — Research Record

Checked date: 2026-07-13

Article type: Provider review

Planned slug: `proton-drive-review`

Planned URL: `https://choosebettertech.com/reviews/proton-drive-review`

Workflow status: Research complete; drafting not started

Related claim ledger: `docs/research/proton-drive-review-claim-ledger.md`

## Research Objective

Determine whether Proton Drive is a defensible recommendation for mainstream and privacy-focused cloud-storage buyers by examining its encryption scope, remaining metadata, recovery model, sharing and collaboration, platform support, pricing, migration, business administration, and documented limitations.

The review must answer a fit question rather than convert Proton’s privacy positioning into an automatic recommendation.

## Distinct Search Intent

Primary reader question: **Is Proton Drive a good cloud-storage service for my files, devices, sharing needs, recovery expectations, and privacy threat model?**

This intent is distinct from:

- `/best-cloud-storage-for-beginners`: a category-level beginner ranking;
- `/comparisons/google-drive-vs-dropbox`: a direct mainstream comparison;
- planned `iCloud vs Google Drive`: an ecosystem decision;
- planned `Best Secure Cloud Storage`: a multi-provider security/privacy ranking;
- Proton Mail, Proton VPN, and Proton Pass coverage: different services and threat models.

Repository search found no existing Proton Drive review route or page targeting this primary intent.

## Adjacent or Potentially Competing Pages

- `docs/research/best-cloud-storage-for-beginners-research.md`
- `docs/research/google-drive-vs-dropbox-research.md`
- `docs/research/cloud-storage-landscape-dossier-2026-07-13.md`
- `docs/strategy/cloud-storage-cluster-approval.md`

The planned review should link to the Cloud Storage hub and relevant comparison/ranking pages only after those routes exist. It must not create broken future links.

## Scope

- Proton ownership, operating entity, and jurisdiction;
- consumer Drive encryption architecture and metadata boundaries;
- Windows, macOS, Android, iOS, web, and Linux access;
- sync, online-only files, offline files, photo backup, Docs, and Sheets;
- public links, invited collaborators, permissions, and disclosure tradeoffs;
- deleted files, version history, account reset, and data recovery;
- Free, Drive Plus, Unlimited, Duo, Family, and business plan shapes;
- cancellation, downgrade, over-quota, refund, and account deletion;
- audit, attestation, bug-bounty, open-source, and incident evidence;
- import/export, leaving Proton, and lock-in;
- fit for individuals, families, and managed businesses;
- documentation-based verdict and a future hands-on test plan.

## Exclusions

This research does not perform:

- upload or download speed benchmarks;
- long-running sync reliability testing;
- conflict-resolution testing;
- ransomware recovery testing;
- live account or billing testing;
- cancellation or refund execution;
- password-reset/data-recovery execution;
- family or business organization setup;
- administrator-access testing;
- source-code review, cryptographic audit, or penetration testing;
- support-response testing;
- full-library migration or native-document fidelity testing.

## Candidate and Competitor Context

This is a single-provider review, but the verdict was tested against category baselines:

- Google Drive / Google One;
- Apple iCloud Drive / iCloud+;
- Microsoft OneDrive / Microsoft 365;
- Dropbox;
- Sync.com;
- Tresorit;
- pCloud / pCloud Crypto;
- MEGA;
- Filen;
- Internxt;
- Box.

Competitors were used to identify decision criteria, not to support Proton facts. No candidate or conclusion was selected because of affiliate availability.

## Evaluation Criteria

1. Encryption coverage by data field.
2. Provider-access and account-recovery boundaries.
3. Platform support and client type.
4. Sync, offline access, and photo workflows.
5. Sharing, permissions, identity disclosure, and revocation.
6. Collaboration depth and format portability.
7. Deleted-file, version, and account recovery.
8. Storage, plan, billing, and downgrade behavior.
9. Import/export and switching friction.
10. Independent audits, incidents, open source, and security transparency.
11. Family and business administration.
12. Documentation quality and unresolved evidence gaps.

## Source Hierarchy

1. Proton technical architecture and threat-model documentation.
2. Proton privacy policies, legal entity disclosures, terms, pricing, and support documentation.
3. Public independent audit reports or formal attestations, interpreted within scope.
4. Academic/technical research relevant to encrypted cloud sharing.
5. Existing canonical CBT category research.
6. Community reports only as leads, not evidence.

Official sources establish Proton’s current documented behavior and claims. They do not independently prove real-world speed, reliability, secure implementation, or support quality.

## Original Contribution

Original Contribution: A field-level privacy, recovery, administration, and portability analysis that separates Proton Drive’s consumer E2EE promise from server-visible metadata, account-recovery failure modes, business-admin access, Linux CLI versus GUI support, and migration limitations.

Evidence of Contribution: The research normalizes exactly which fields Proton says it encrypts; records remaining metadata; maps password reset separately from data recovery; distinguishes personal privacy from managed-business admin access; reconciles Free-storage and performance-claim ambiguity; and converts import/export documentation into a practical lock-in assessment.

Competing Coverage Reviewed: Existing CBT records `best-cloud-storage-for-beginners-research.md` and `google-drive-vs-dropbox-research.md`; TechRadar's Proton Drive review (updated 2024-07-08); Digital Trends' 2025 hands-on review; Cloudwards' 2026 review; and The Independent's 2025 review. These pages were used only to identify coverage patterns and gaps, never as evidence for Proton plan, architecture, privacy, or legal claims.

Information Gap: The competing coverage commonly emphasizes privacy, price, and app experience but does not consistently provide a current field-level metadata table, key hierarchy, scoped public-audit findings, Foundation/control structure, business-admin/offboarding model, Linux CLI-versus-GUI distinction, downgrade deletion risk, or structured account/data-recovery and portability analysis.

Pass/Fail: **PASS**

## Company, Ownership, and Jurisdiction

- Proton Drive is operated by Proton AG.
- Proton’s current privacy policy lists Proton AG at Route de la Galaise 32, 1228 Plan-les-Ouates, Geneva, Switzerland.
- Proton states that Swiss law governs the general privacy relationship and identifies Proton Europe sàrl as its EU representative.
- The general privacy policy was last modified 2026-05-12; the Drive-specific privacy policy was last modified 2025-07-31 when checked.
- Proton says the non-profit Proton Foundation is Proton AG's primary/largest voting shareholder and can block changes of control. Proton AG remains the for-profit operating company.
- Proton describes a hybrid model in which subscriptions fund a profitable operating business while the Foundation supervises the mission. This is Proton's own governance/business-model description, not an independent financial audit.
- Proton says it began with a 2014 crowdfunding campaign of more than $500,000 from about 10,000 contributors and had no venture-capital investors when it announced the Foundation transition in 2024. Treat both as attributed company history and recheck if ownership or funding changes.
- Drive uses the same Proton Account and is sold both as a Drive-focused plan and inside broader bundles with Mail, VPN, Pass, Calendar, Docs, and Sheets. A bundle can improve value for existing Proton users while increasing account and ecosystem dependence.

Sources:

- https://proton.me/legal/privacy
- https://proton.me/drive/privacy-policy
- https://proton.me/blog/proton-non-profit-foundation
- https://proton.me/support/proton-plans

Qualification: Swiss jurisdiction is relevant but not a substitute for architecture analysis, account security, or a verified legal opinion. Do not claim that Switzerland makes stored data categorically immune from legal process.

## Security and Privacy Architecture

### Documented encrypted fields

Proton states that Drive applies end-to-end encryption to:

- file content;
- filenames;
- folder names;
- thumbnail previews.

Its security model describes client-generated keys/passphrases, a file-and-folder tree, encrypted node metadata, signatures, and encrypted public-link sharing. The architecture article was originally published in 2020 and updated in 2022; it remains useful but must be read alongside the 2026 shared-SDK changes and current privacy policy.

Sources:

- https://proton.me/blog/protondrive-security
- https://proton.me/drive/privacy-policy
- https://proton.me/blog/proton-drive-threat-model
- https://proton.me/blog/drive-sdk-june-2026

### Documented key hierarchy

The older public security model describes:

- a Proton address key associated with each account address and used to grant and authenticate share access;
- a random 32-byte share passphrase and asymmetric share key;
- the share key locked by the share passphrase, with that passphrase encrypted and signed by a member's address key;
- one encrypted copy of the share passphrase for each share member;
- a symmetric session key for payload encryption, wrapped for authorized asymmetric keys or passwords;
- per-file and per-folder node keys and node passphrases;
- each node passphrase encrypted by its parent node key or the share key at a share root;
- file blocks encrypted with the file's node key and uploader signatures intended to detect malicious tree/content substitution;
- URL-sharing passwords generated or entered by the user, with the decryption secret withheld from the server under the documented design.

The article does not by itself document every current account-key derivation parameter, local key-store implementation, recovery-key path, or 2026 SDK change. Proton separately documents Secure Remote Password authentication and password/data-recovery behavior, but those should not be collapsed into the file-tree key hierarchy. The June 2026 shared SDK is described as a rebuilt common engine; no current public diff or independent assessment was found that revalidates every older architecture statement against the deployed 2026 clients.

Sources:

- https://proton.me/blog/protondrive-security
- https://proton.me/blog/centalized-vs-p2p-protondrive
- https://proton.me/blog/drive-sdk-june-2026
- https://proton.me/support/set-account-recovery-methods

### Documented server-visible or operational fields

The Drive privacy policy says Proton stores or can process operational metadata including:

- encrypted file size rather than the original size;
- file creation and modification times;
- permissions;
- uploader username;
- public-link creation and last-access time;
- public-link access count;
- link creator;
- account, payment, fraud-prevention, and service data described in the broader Proton privacy policy.

The policy also says Proton can access shared content when a third party supplies the public URL and any password, for example in an abuse report. Proton can associate documented operational link metadata with the creator, while invited workflows can disclose account/email identity. This does not prove that every public-link recipient is identified; avoid a universal anonymity claim.

Source: https://proton.me/drive/privacy-policy

### Field-level privacy, operations, and request map

| Field/workflow | What current public evidence supports | Evidence limit |
| --- | --- | --- |
| File content | E2EE before upload under Proton's documented design | No CBT cryptographic verification |
| Filenames/folder names/thumbnails | Drive policy says E2EE | No current independent 2026 full-client audit |
| File size | Policy says encrypted size is stored; support simplifies this as file size not encrypted | Proton can process a size value; exact leakage relationship requires technical verification |
| Creation/modification times, permissions, uploader | Stored or processed as operational metadata | Retention details beyond policy are Not verified |
| Public-link events | Creation/last access, count, and creator documented | Does not establish every recipient's identity |
| Invited sharing | Email/account and role are part of the workflow | Identity disclosure differs from bearer public links |
| Search | Web Drive can search partial/full filenames in `My files`; current Sheets support says `Shared with me` and Trash are excluded from Drive search | Mobile/client parity and search-index implementation are Not verified |
| File requests/uploads | An Editor public link or editable shared folder can allow uploads; no separate dedicated file-request product was verified | Do not claim recipient-anonymous drop-box behavior or ownership semantics beyond sharing docs |
| Diagnostics/telemetry | General Proton policy permits limited app/service data and optional diagnostics where applicable | Drive-specific event schema, retention, identifiers, and opt-out behavior are Not verified |
| IP/access/account data | General policy covers account creation, security, fraud/abuse, payment, and service-access data | Exact Drive-specific log fields and retention are Not verified |
| Abuse handling | Shared content can be reviewed if a third party supplies URL/password; hash-based malicious-file checks can be user initiated | Broader abuse workflows and disclosure volumes are Not verified |
| Legal requests | Proton says Swiss law applies and it must respond to valid Swiss orders | No claim that Swiss jurisdiction blocks all requests; Drive-specific transparency counts are Not verified |
| Storage/backups | Drive policy lists servers in Switzerland, Germany, and Norway; offline backups are encrypted and retained up to 30 days | File placement by user/plan is not exposed; deletion timing across backups is policy-based, not tested |

Additional sources:

- https://proton.me/support/sheets-search
- https://proton.me/support/share-proton-drive-account
- https://proton.me/support/proton-drive-malware-protection
- https://proton.me/legal/privacy
- https://proton.me/blog/proton-drive-threat-model

### Threat-model boundaries

E2EE reduces provider access to file content but does not protect against every risk:

- malware or an attacker controlling an unlocked device;
- account takeover and compromised recovery channels;
- malicious or exposed public links;
- data recipients copying shared content;
- metadata the service must process;
- bugs or compromised client updates;
- user-created plaintext exports/downloads;
- managed-business administrator powers;
- permanent data loss when recovery material is unavailable.

Do not use “unhackable,” “anonymous,” “military-grade,” “100% private,” or “Proton cannot see anything.”

## Platforms and Access

| Platform/workflow | Current documented status | Qualification |
| --- | --- | --- |
| Web | Supported | Browser delivery remains part of the trust model |
| Windows | Native desktop app with sync and on-demand files | Hands-on stability not tested |
| macOS | Native desktop app with sync and on-demand/offline files | Hands-on stability not tested |
| Android | Mobile app and photo backup | Supported formats/behavior can vary by OS/device |
| iOS/iPadOS | Mobile app and photo backup | Uses platform capabilities for some previews |
| Linux | Cross-platform Proton Drive CLI available | No native Linux GUI desktop sync app verified as of checked date |

Sources:

- https://proton.me/drive
- https://proton.me/support/drive-cli
- https://proton.me/support/proton-drive-windows-on-demand-sync
- https://proton.me/support/proton-drive-macos-on-demand-sync
- https://proton.me/support/enable-photo-backup
- https://proton.me/support/drive-previewable-file-types

Editorial rule: state “Linux CLI available,” not “full Linux desktop app available.”

## Core Features and Usability

### Sync and offline access

Windows and macOS documentation supports synchronized folders, online-only placeholders, and making files available offline. That supports a mainstream desktop workflow, but it is not evidence of comparative reliability or speed.

### Photo backup

Proton documents automatic Android and iOS photo backup in original quality with E2EE. Backup stops when storage is full. Albums and shared-album permissions exist, but current support documentation notes at least one evolving limitation around saving large shared selections.

Sources:

- https://proton.me/support/enable-photo-backup
- https://proton.me/support/drive-album-share-manage

### Docs and Sheets

Proton Drive includes encrypted Docs and Sheets collaboration. Docs can import/open `.docx`, `.txt`, `.md`, and `.html`, and export `.docx`, `.html`, `.txt`, `.md`, and `.pdf`. Sheets supports CSV, TSV, and XLSX import and those formats for export, while release notes describe ODS work as beta.

Sources:

- https://proton.me/support/drive-import-export-docs
- https://proton.me/support/sheets-import-export
- https://proton.me/support/drive-release-notes

Qualification: Format lists do not establish perfect fidelity with Google Workspace or Microsoft Office. That requires hands-on document testing.

## Sharing and Collaboration

Proton documents:

- sharing by public link or email;
- Viewer and Editor permissions;
- passwords and expiry dates for public links;
- revocation and access changes;
- Docs/Sheets editing by non-Proton recipients through public links;
- uploads to shared folders counting against the owner’s storage;
- free-plan limit of up to three editor-access sharing links;
- collaborator visibility of the sharer’s email in some workflows;
- Windows access to items in “Shared with me.”

Sources:

- https://proton.me/support/drive-shareable-link
- https://proton.me/support/drive-manage-access-shared-files
- https://proton.me/support/drive-share-docs
- https://proton.me/support/shared-with-me-windows
- https://proton.me/support/share-proton-drive-account

### Interpretation

Proton Drive supports meaningful sharing and collaborative editing. The evidence does not support calling it the best collaboration platform, a full Google Workspace replacement, or a business document-management leader. Public links transfer trust to possession of the link and password. Revocation cannot claw back copies already downloaded.

No separate dedicated file-request object was verified. Proton documents using Editor access on a public link or shared folder so another person can upload files. The draft should call this an upload-capable shared folder or link, not imply an independently verified anonymous intake workflow.

## Deleted Files, Versions, and Recovery

### Version history

- Free: up to 10 versions for up to 7 days, fixed.
- Eligible paid plans: up to 200 versions for up to 10 years, configurable.

Source: https://proton.me/support/version-history

Plan eligibility and exact defaults must be rechecked before publication. Version history is not evidence of tested ransomware recovery.

### Trash

Moving files to Trash does not permanently delete them, and trashed items continue to count toward storage. Proton documents restore and permanent deletion workflows, but an exact automatic Trash-expiry window was not verified in public support material.

Sources:

- https://proton.me/support/proton-drive-delete-restore-synced-files
- https://proton.me/drive/privacy-policy

### Password reset versus data recovery

Proton explicitly separates resetting account access from recovering encrypted data:

- a recovery phrase can reset the password and recover data;
- recovery email/phone can reset the password but not by itself decrypt old data;
- a recovery file, recovery device, or contact-assisted recovery can recover data but not reset the password;
- a signed-in reset may cover both;
- old Drive data can become temporarily inaccessible after a password reset;
- recovery may require the old password, recovery phrase, or recovery file;
- backed-up photos can require an additional merge step;
- if recovery is impossible, the locked Drive data may need to be deleted.

Sources:

- https://proton.me/support/set-account-recovery-methods
- https://proton.me/support/drive-data-recovery
- https://proton.me/support/recovery-file

This recovery model is a core review limitation and original-contribution area. Do not promise provider-assisted recovery of all encrypted files.

## Plans, Storage, Pricing, and Refunds

### Current documented plan shapes

| Plan | Storage/structure | Price status |
| --- | --- | --- |
| Proton Free | Drive starts at 2 GB and can reach 5 GB after setup tasks; up to 6 GB total across Mail and Drive after both sets of tasks | Free |
| Drive Plus | 200 GB Drive-focused plan | Exact current checkout price not independently captured; dynamic by region/currency |
| Proton Unlimited | 500 GB plus broader Proton bundle | Official support listed EUR monthly/annual figures when checked; recheck before draft/publication |
| Proton Duo | 2 TB shared, up to 2 users | Official support listed EUR monthly/annual figures; recheck |
| Proton Family | 3 TB shared, up to 6 users | Official support listed EUR monthly/annual figures; recheck |
| Drive Professional | 1 TB per user | Business pricing/terms volatile |
| Workspace Premium | 3 TB per user | Business pricing/terms volatile |

Sources:

- https://proton.me/support/increase-storage-space
- https://proton.me/drive/pricing
- https://proton.me/support/proton-plans
- https://proton.me/support/proton-for-business

### Pricing evidence limitation

The public pricing page dynamically rendered plan prices and did not expose every numeric Drive Plus checkout price in the research reader. Do not invent or hard-code a Drive Plus price. Exact currency, taxes, promotions, billing period, and renewal must be captured from the actual checkout region immediately before drafting and publication if prices are shown.

### Refund and cancellation

The Drive pricing page advertises a 30-day money-back guarantee, while its detailed wording describes a prorated unused portion within the first 30 days of the initial purchase and discretion afterward. The review must quote neither broadly nor call it an unconditional full refund without checking the governing terms.

When a user downgrades above the new storage limit:

- Drive devices stop syncing;
- new uploads and mobile photo backup stop;
- after 12 months unresolved excess data could be deleted;
- Proton says it cannot selectively delete encrypted files, so affected app data can be deleted in full;
- users should download or delete data before downgrading.

Sources:

- https://proton.me/support/manage-subscription
- https://proton.me/support/free-plan-limits
- https://proton.me/support/delete-account

Account deletion permanently deletes the Proton account and data across Proton services; it is not Drive-only deletion.

## Family and Business Use

### Families

Duo and Family use shared storage with separate Proton accounts rather than one shared login. Proton explicitly advises against sharing a single Drive account. The current Family guide says:

- Family supports up to six members and 3 TB pooled storage allocated by the primary administrator;
- invited members are private users, and the administrator cannot see their files unless they share them;
- a removed member keeps their data and moves to a 30-day Proton Unlimited trial;
- a member who voluntarily leaves also keeps files/folders during that trial but loses Family storage/features;
- the primary administrator cannot currently be changed.

After the 30-day trial, ordinary downgrade/over-quota rules become relevant if the departing member's data exceeds the resulting plan. Exact post-trial automation was not account-tested.

Source: https://proton.me/support/get-started-proton-family

### Managed businesses

Proton business documentation states that files are private to team members by default, but administrators on supported Workspace plans can use “Sign in to a user” and view, open, download, delete, or restore that user’s files. A user cannot disable this administrator capability, and administrator notification can be discretionary.

Sources:

- https://proton.me/support/access-account-proton-drive
- https://proton.me/support/proton-for-business
- https://proton.me/support/creating-an-organization

This does not make the consumer encryption description false; it means managed-business authority changes the access model. The review must not imply that business administrators can never access user files.

### Business offboarding

Current official evidence distinguishes several operations:

- reducing paid license count can create prorated account credit but is not the same as removing an organization identity;
- removing/deleting an organization-created user can permanently delete that user's account, address, and all account data;
- existing accounts added to an organization can be removed from the organization when plan limits change, while organization-created members can receive 0 MB allocations under over-limit conditions;
- admins on supported Drive business plans can access managed user Drive data before removal through the documented sign-in capability;
- private/non-private organization-user rules are separately documented and should not be generalized from Mail to every Drive plan without plan-specific confirmation.

Sources:

- https://proton.me/support/add-remove-users
- https://proton.me/support/vpn-manage-users
- https://proton.me/support/private-users
- https://proton.me/support/access-account-proton-drive
- https://proton.me/support/free-plan-limits

Not verified: a supported workflow to transfer Drive file ownership to another user; a complete organization-wide Drive export; whether links or permissions survive user deletion; exact behavior for every invited-existing-account versus organization-created-account removal path. The safe operational recommendation is to export or transfer required data and rotate/rebuild sharing before deletion, not assume automatic ownership transfer.

## Import, Export, and Portability

### Moving into Proton Drive

Official guides document manual migration from Google Drive, iCloud, Dropbox, and OneDrive. Google migration uses Google Takeout followed by upload through the Proton web or Windows/macOS desktop app. Split archives may need manual reorganization.

Sources:

- https://proton.me/support/import-files-google-drive
- https://proton.me/support/drive/using-drive

### Moving out

Ordinary files can be downloaded through the web app, desktop sync apps, or CLI. The web app can package multi-item downloads. Proton Docs and Sheets offer documented common-format exports.

Portability limitations to state:

- permissions, collaborator relationships, public links, and audit history are not documented as portable;
- version history is not documented as portable;
- native-document conversion can lose fidelity;
- bulk export success with a very large library is untested;
- downloaded exports are decrypted local files and must be protected;
- Linux CLI availability is not equivalent to GUI migration tooling.

### Lock-in assessment

File-level lock-in is moderate because ordinary files and Proton-created documents/spreadsheets have export paths. Workflow lock-in may be higher because links, permissions, versions, shared albums, and organization state need rebuilding. This is a provisional documentation-based judgment, not a measured migration result.

## Audits, Open Source, Bug Bounty, and Incidents

- Proton publishes mobile, web, desktop, and SDK source repositories and states that Drive apps are open source. Exact client, SDK, build, and server coverage must be described rather than generalized to “the entire service.”
- Proton maintains a public bug-bounty and vulnerability-disclosure program.
- Proton announced a SOC 2 Type II attestation by Schellman in 2025. This addresses scoped operational controls, not a product-specific cryptographic guarantee.
- Proton's March 2023 open-source announcement links public Securitum mobile-app audits performed in 2022:
  - iOS: testing 2022-08-23 through 2022-09-06; report v1.0 dated 2022-09-07; app and automated source analysis, explicitly excluding API/backend; 0 Critical/High/Medium, 1 Low, and 4 Informational findings.
  - Android: testing 2022-07-29 through 2022-08-22; report v1.0 dated 2022-08-22; app, REST API, and automated source analysis; 0 Critical/High/Medium, 2 Low, and 6 Informational findings.
- The iOS Low finding concerned unencrypted cookies/HTTP responses in app files under a physical-device-access prerequisite. The Android Low findings concerned similar local artifacts/certificates and an API CORS configuration. Informational items covered rooted/jailbroken warnings, local access safeguards, app-integrity protections, minimize-screen masking on Android, and one API header item.
- Both report covers say `RETEST DATE N/A`; the PDFs do not provide retest/remediation evidence. Proton's later summary says there were no outstanding vulnerabilities, but that vendor summary does not replace a public retest record.
- These dated mobile audits do not validate the current Windows, macOS, web, server, or 2026 shared-SDK implementation.
- A comprehensive incident-history conclusion was not established. The research reviewed Proton's current security, privacy, threat-model, open-source, audit, and bug-bounty disclosures and did not identify a Drive incident report within that bounded source set, but this is not evidence that no incident occurred. The future draft should omit a “never breached” or negative-incident claim unless a reproducible broader incident review is completed.

Sources:

- https://proton.me/security/bug-bounty
- https://proton.me/blog/soc-2
- https://proton.me/blog/drive-mobile-apps-open-source
- https://res.cloudinary.com/dbulfrlrz/images/v1707564693/wp-pme/Securitum_Proton_Drive_mobile_iOS/Securitum_Proton_Drive_mobile_iOS.pdf?_i=AA
- https://res.cloudinary.com/dbulfrlrz/images/v1707564691/wp-pme/Securitum_Proton_Drive_mobile_Android/Securitum_Proton_Drive_mobile_Android.pdf?_i=AA
- https://github.com/ProtonDriveApps/sdk-tech-demo
- https://proton.me/drive

## Independent Sources Reviewed

### Direct independent product evidence

- Securitum, Proton Drive iOS audit report v1.0 (2022-09-07): narrow mobile-app/source scope, backend excluded, findings and no-retest status recorded above.
- Securitum, Proton Drive Android audit report v1.0 (2022-08-22): Android app, selected REST API, and source scope, findings and no-retest status recorded above.
- Schellman's SOC 2 Type II work is described by Proton; the full attestation/report was not publicly reviewed in this pass, so only Proton's announcement and the limited control-attestation interpretation are supported.

### Independent editorial/testing context — not factual sources for the CBT review

- TechRadar review, updated 2024-07-08: documented its own Windows/web speed, recovery, and version tests. Its results are dated and environment-specific and are not imported as CBT performance evidence.
- Digital Trends review (2025), Cloudwards review (2026), and The Independent review (2025): reviewed for coverage patterns and usability questions only. Their experiential conclusions are not adopted without CBT testing.

### Evidence limitation

No current independent audit of the complete 2026 Proton Drive service, shared SDK, all desktop/web clients, deployment pipeline, and server infrastructure was found. No independent CBT security, performance, migration, recovery, or support testing occurred.

## Performance Evidence

Proton’s June 2026 product updates state that its rebuilt Drive engine and cryptography changes produced “up to” 3x/4x improvements under different scopes. These are vendor benchmark claims and should appear, if at all, with attribution and methodology caveats.

Sources:

- https://proton.me/blog/drive-sdk-june-2026
- https://proton.me/blog/drive-cryptography-update
- https://proton.me/drive/roadmap

No independent CBT speed, latency, reliability, or battery-use conclusion is supported.

## Best-Fit Users

Provisional best fits:

- privacy-focused individuals who want E2EE for file content and names;
- current Proton users who value one account and bundled services;
- Windows/macOS users who need mainstream sync plus encrypted storage;
- mobile users seeking encrypted photo backup;
- users who can maintain recovery material and understand reset consequences;
- small collaborators whose needs fit Viewer/Editor links and encrypted Docs/Sheets.

## Poor-Fit Users

Provisional poor fits:

- Linux users who require a native GUI synchronized folder rather than CLI/web access;
- teams that depend on deep Microsoft/Google collaboration workflows or complex content governance;
- users who expect the provider to recover encrypted data without recovery material;
- buyers who need independently tested fastest sync or recovery claims;
- users unwilling to manage downgrade/over-quota risk;
- businesses assuming administrators can never access managed user files;
- buyers needing verified large-library migration or full offboarding behavior.

## Provisional Verdict

Proton Drive is a strong documentation-based privacy option for people who value broad E2EE coverage, mainstream Windows/macOS/mobile access, and the Proton ecosystem. It is not a universal best cloud-storage choice. The tradeoffs include a Linux CLI rather than a verified native GUI sync client, less mature collaboration than Google or Microsoft, complex encrypted-data recovery, dynamic pricing, a managed-business admin-access caveat, and untested performance, migration, and recovery execution.

Provisional review framing:

> Proton Drive is compelling when privacy architecture matters more than office-suite depth, but its strongest security promises do not remove metadata, recovery, administration, collaboration, or portability tradeoffs.

No numerical score, “best secure cloud storage” label, or “safest” claim is authorized by this research.

## Prohibited Claims

- “Proton Drive is unhackable.”
- “Proton cannot see anything.”
- “All metadata is encrypted.”
- “Swiss law guarantees privacy.”
- “No one but you can ever access shared files.”
- “The business administrator cannot access employee files.”
- “Proton Drive has a full Linux desktop app.”
- “Version history guarantees ransomware recovery.”
- “Proton Drive is faster than Google Drive/Dropbox.”
- “Proton Drive has never been breached.”
- “Open source proves the service is secure.”
- “SOC 2 proves the encryption is safe.”
- “The refund is always full and unconditional.”
- “Cancellation preserves data indefinitely.”
- “Migration preserves permissions, versions, links, and collaboration.”
- “We tested,” “our testing,” or “hands-on” for product behavior without a completed test record.

## Hands-On Testing Status and Future Test Plan

Hands-on product testing status: **Not performed.**

Documentation and site-level research can support architecture, policy, feature, and plan descriptions. The draft must disclose that CBT did not independently test the encryption implementation, sync reliability, speed, recovery, migration, support, billing, or cancellation.

Before making experiential claims, test:

1. Windows and macOS install/on-demand/offline behavior.
2. Mobile photo backup and album sharing.
3. 10 GB mixed-file sync plus offline/conflict scenarios.
4. Public link with password/expiry, revocation, and recipient behavior.
5. Docs/Sheets import/export fidelity.
6. File version restoration and Trash behavior.
7. Password-reset and data-recovery flow using nonessential test data.
8. Google Takeout import and full-library export.
9. CLI authentication, upload/download, and sharing on Linux.
10. Downgrade/cancellation only if a controlled paid test account is authorized.

## Visible Source Plan

The future review must include an on-page `Evidence checked` or `Research sources` section with at least:

- Proton Drive privacy policy;
- Proton general privacy/legal entity policy;
- security architecture and threat model;
- platform/CLI documentation;
- sharing permissions;
- version history and recovery;
- current storage/pricing sources;
- downgrade/over-quota behavior;
- business admin-access source;
- import/export source;
- bug bounty and the verified attestation/audit evidence.

Sources must appear near high-impact claims where the current site pattern supports it. A hidden research record alone is insufficient.

## Planned Internal Links

Use real routes only at drafting time:

- `/cloud-storage` or the current Cloud Storage hub route;
- `/best-cloud-storage-for-beginners`;
- `/comparisons/google-drive-vs-dropbox` where contextually useful;
- How We Review Software;
- Privacy Policy;
- Affiliate Disclosure;
- Better Software Buyer Checklist.

Do not link to the planned iCloud comparison or secure-storage ranking until those routes are live.

## Affiliate Handling

No Proton Drive affiliate relationship was verified in the centralized registry. The review must not invent one, reuse a Proton product relationship from another category, or add raw tracking URLs. Editorial conclusions and prominence are independent of monetization.

## Volatile Facts

| Fact family | Current status | Refresh trigger |
| --- | --- | --- |
| Free and paid storage allocations | Verified from current support | Recheck at draft and within 7 days of publication |
| Drive Plus price | Not verified due dynamic checkout rendering | Capture region/currency-specific checkout before price claim |
| Unlimited/Duo/Family prices | Official EUR support figures available | Recheck at draft/publication; confirm currency/tax/renewal |
| Platform support | Windows/macOS/mobile/web plus Linux CLI verified | Recheck on desktop-app or roadmap release |
| Version history | Current Free/paid limits verified | Recheck before table/publication |
| Sharing/editor limits | Current support verified | Recheck before table/publication |
| Refund language | Qualified official wording verified | Recheck governing terms before publication |
| Downgrade behavior | Current support verified | Recheck before cancellation/value section |
| Audits/attestations | 2022 Securitum iOS/Android reports and 2025 SOC 2 announcement reviewed; current full-service audit unresolved | Recheck before security verdict and after any new report |
| Docs/Sheets formats | Current support verified | Recheck release notes and before migration claims |
| Business admin access | Current support verified | Recheck plan eligibility and admin docs |
| Performance improvements | Vendor claims only | Do not convert to CBT result without independent test |

## Source Conflicts and Uncertainty

1. **Free storage:** marketing often says 5 GB Drive, while support describes 2 GB by default plus setup tasks to unlock 5 GB. Use the conditional wording.
2. **Performance multipliers:** 2026 Proton pages use up to 3x and up to 4x for different engine/cryptography scopes. Attribute precisely or omit.
3. **Linux:** the CLI is released, while the rebuilt-engine post says broader Linux support is coming. Do not infer a GUI desktop app.
4. **Pricing:** the current pricing page did not expose every numeric checkout price. Exact Drive Plus pricing remains Not verified.
5. **Business storage examples:** one support example appears inconsistent with updated per-user allocations. Use the explicit current plan table, not the stale example.
6. **Audit scope:** Proton's broad “regularly audited” language must be narrowed to the public 2022 Securitum mobile reports and any later report actually reviewed. The public reports show findings and no retest date; Proton's 2023 summary says there were no outstanding vulnerabilities.
7. **Incident history:** the bounded official-source review did not surface a Drive incident report, but a comprehensive incident history remains unresolved. No negative incident claim is authorized.

## Unresolved Evidence Gaps

- exact current Drive Plus monthly/annual price by region and renewal;
- automatic Trash-expiry timing, if any;
- current post-2022 full-service, desktop, web, shared-SDK audit and public remediation/retest evidence;
- complete source-code/build/server coverage behind “open source” wording;
- comprehensive reproducible Proton Drive incident history;
- post-Family-trial over-quota timing and member data behavior under live account conditions;
- business ownership transfer, link survival, and bulk organization export;
- large-library export reliability;
- sync conflict behavior;
- real-world performance and battery use;
- Docs/Sheets conversion fidelity;
- support and refund execution;
- ransomware recovery effectiveness.

These gaps constrain the draft; they do not justify guesses.

## Inclusion and Exclusion Reasons

### Why Proton Drive warrants a full review

- it is a prominent privacy-focused consumer storage candidate;
- its E2EE scope differs materially from mainstream baselines;
- it now combines sync, photos, Docs, Sheets, and CLI workflows;
- recovery and business administration create important tradeoffs;
- the approved Cloud Storage cluster names Proton Drive Review as the first article.

### What the review must exclude or defer

- unverified numerical pricing;
- speed/reliability rankings;
- a final secure-storage ranking;
- hands-on claims;
- unsupported audit/incident superlatives;
- future internal links that are not live;
- an affiliate CTA unless the central registry is later authorized and verified.

## Research Completion Gate

- Required sections present: corrected; fresh independent review pending
- Original Contribution: PASS
- Distinct intent and duplicate check: PASS
- Critical/High claim ledger corrected and expanded; fresh independent review pending
- Candidate/context completeness appropriate to a provider review: PASS
- Testing disclosure and prohibited claims: PASS
- Unresolved gaps preserved: PASS
- Draft or implementation started: NO

## Research Status

`RESEARCH INCOMPLETE — INDEPENDENT RE-REVIEW PENDING`

This status authorizes only the fresh independent research review. It does not authorize drafting, article creation, route changes, sitemap changes, affiliate changes, deployment, IndexNow, or publication.
