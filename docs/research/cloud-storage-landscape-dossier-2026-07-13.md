# Cloud Storage Landscape Dossier

Checked date: 2026-07-13

Status: Shared category research complete for the approved Cloud Storage sequence

Scope: Consumer and small-team cloud file storage, sync, sharing, collaboration, recovery, privacy, and portability

Planned sequence: Proton Drive Review -> iCloud vs Google Drive -> Best Secure Cloud Storage

## Research Objective

Create one reusable evidence map for the approved Cloud Storage cluster so later pages can make consistent distinctions, reuse primary sources, and expose uncertainty rather than independently rebuilding the category from vendor marketing.

The dossier is not a ranking. It does not declare a safest, most private, fastest, or best secure-cloud provider. It establishes the candidate landscape, normalized evaluation fields, likely reader-fit questions, testing needs, and claims that require refresh before publication.

## Category Boundaries

### Included

- consumer cloud file storage;
- desktop and mobile file sync;
- online-only or placeholder files;
- public-link and invited-user sharing;
- document collaboration where bundled;
- photo-library and automatic photo-backup workflows where the service supports them;
- deleted-file and version recovery;
- client-side or end-to-end encryption;
- client-side encryption layered over a mainstream storage provider;
- mainstream provider-managed encryption;
- individual, family, and small-team plans;
- business document management where it materially changes ownership, administration, retention, or offboarding;
- import, export, and switching friction.

### Not equivalent and not to be conflated

- **Sync is not backup.** A synchronized deletion, encryption event, or corruption can propagate across devices.
- **Version history is not a tested ransomware-recovery system.** Retention and restore usability require separate evidence.
- **Provider-managed encryption is not zero-knowledge encryption.** Both can protect data, but they create different access and recovery models.
- **End-to-end encryption is not anonymity.** Account identifiers, billing data, access records, timestamps, file sizes, or sharing metadata may remain visible.
- **A lifetime plan is not perpetual technical availability.** It is governed by contract definitions, provider continuity, and fair-use terms.
- **A desktop client is not necessarily a synchronized folder.** Some products use virtual drives, selective sync, backup folders, or web-only workflows.

### Excluded from this dossier

- dedicated endpoint backup services;
- object storage and developer infrastructure;
- NAS-only software;
- enterprise records-management procurement;
- legal advice about data residency;
- unverified performance rankings;
- hands-on recovery, migration, or conflict-resolution results.

## Reader Segments

| Segment | Primary decision | Common failure mode |
| --- | --- | --- |
| Mainstream beginner | A reliable default that works with existing devices | Choosing by free gigabytes alone |
| Apple household | Whether iCloud integration outweighs mixed-platform limits | Assuming all iCloud data is E2EE by default |
| Google/Android household | Collaboration, photos, and Google-account convenience | Ignoring shared storage across services |
| Windows/Microsoft 365 user | OneDrive/Office value and recovery | Treating the bundle as equivalent to independent backup |
| Privacy-focused individual | Who can access file content and metadata | Treating “zero knowledge” as a universal audited standard |
| Mixed-device household | Cross-platform apps, sharing, and recovery | Underestimating platform gaps or family roles |
| Linux user | Native workflow, CLI, mount, or sync support | Treating a CLI or web app as a full desktop sync client |
| Photographer | Automatic photo backup, albums, formats, and export | Assuming photo backup covers every folder and format |
| Freelancer | Client sharing, file requests, ownership, and predictable billing | Giving clients links without checking expiry, revocation, or download rights |
| Small business | Permissions, administration, recovery, ownership, and offboarding | Applying consumer privacy claims to managed accounts |
| Journalist or activist | Adversary-aware confidentiality, metadata, device security, and safe sharing | Treating encrypted storage as a complete operational-security plan |
| Sensitive-document user | Field-level encryption, recovery, and sharing discipline | Assuming E2EE protects an unlocked or infected device |
| Collaboration-first team | Live editing, comments, permissions, and native formats | Choosing privacy architecture without checking workflow depth |
| Portability-first user | Open formats, bulk export, metadata, and switching | Assuming downloaded bytes preserve workflow state |
| Switcher | Import/export, native-document conversion, and lock-in | Forgetting permissions, versions, links, and metadata do not migrate cleanly |

## Candidate Landscape

The following candidates are in the reusable research universe. Inclusion here does not guarantee inclusion in a future ranking.

1. Proton Drive
2. Google Drive / Google One
3. Apple iCloud Drive / iCloud+
4. Microsoft OneDrive / Microsoft 365
5. Dropbox
6. Sync.com
7. Tresorit
8. pCloud
9. MEGA
10. Box
11. Filen
12. Internxt

Affiliate availability did not determine this set. A strong non-affiliate provider must remain eligible, and a monetized provider receives no presumption of inclusion or favorable placement.

## Evaluation Framework

1. Account ownership, jurisdiction, business model, and transparency.
2. Encryption in transit, provider-side encryption at rest, client-side encryption, and E2EE.
3. File-content, filename, folder-name, thumbnail, size, timestamp, sharing, and account-metadata protection.
4. Key generation, key storage, account recovery, data recovery, and provider-access model.
5. Platform support and the precise client type, including Linux, mobile, browser, CLI, and virtual-drive distinctions.
6. Sync behavior, selective sync, online-only files, offline access, conflict handling, and independent-backup needs.
7. Sharing, link passwords/expiry, file requests, permissions, collaboration, file ownership, and offboarding.
8. Deleted-file, version, ransomware, and whole-account recovery.
9. Storage accounting, file-size limits, transfer limits, and photo-library behavior.
10. Family sharing, member privacy, pooled storage, and organizer powers.
11. Business administration, retention, user removal, export, and employee departure.
12. Free, monthly, annual, family, team, promotional, and lifetime plan structure.
13. Renewal, taxes, regional variation, refunds, trials, cancellation, downgrade, over-quota behavior, and account deletion.
14. Import, export, proprietary/native-document conversion, permissions, comments, versions, albums, and switching friction.
15. Independent audits, incident history, vulnerability disclosure, and public security evidence.
16. Support documentation and independently tested support quality where available.
17. Fit for mainstream convenience, collaboration, portability, and privacy-focused threat models.

## Source Hierarchy

1. Official technical architecture and cryptography documentation.
2. Official privacy policies, terms, support, pricing, and platform documentation.
3. Public independent audit reports and formal attestations, interpreted within scope.
4. Government and standards guidance where the category question requires it.
5. Academic or reputable independent technical research.
6. Official incident disclosures.
7. Existing canonical CBT research.
8. Community reports only as leads or secondary context.

Search snippets, affiliate rankings, vendor-versus-vendor pages, and marketing superlatives are not evidence.

## Normalized Provider Matrix

| Provider | Primary ecosystem/workflow | Encryption posture to verify | Linux posture | Collaboration posture | Recovery posture | Main research caution |
| --- | --- | --- | --- | --- | --- | --- |
| Proton Drive | Privacy-first storage plus Proton Docs/Sheets | E2EE for content and names; some operational metadata remains visible | CLI verified; native GUI sync client not verified | Viewer/editor links and encrypted Docs/Sheets | Version history plus separate account/data recovery | Recovery complexity, business-admin access, dynamic pricing, no independent performance test |
| Google Drive | Google Workspace, Android, and browser collaboration | Provider-managed encryption for ordinary consumer Drive | Web; no official consumer Linux sync client established | Category-leading document collaboration | Trash/version/account recovery vary by file and account | Shared quota, content processing, native-format portability |
| iCloud Drive | Apple-device integration | Standard protection plus optional Advanced Data Protection for expanded E2EE | Web; no native Linux client | Apple sharing and iWork collaboration | Apple-account recovery and deleted-file windows | ADP scope, recovery tradeoffs, shared quota, mixed-platform friction |
| OneDrive | Windows and Microsoft 365 | Provider-managed encryption; Personal Vault adds controls, not consumer zero knowledge | No official Linux sync client established | Office collaboration and Microsoft account integration | Version history and whole-Drive restore are plan dependent | Bundle dependence, account recovery, Linux gap |
| Dropbox | Focused cross-platform sync and sharing | Standard service is not positioned as zero knowledge | Native Linux support documented | Strong sync/sharing; integrations rather than owned office suite | Plan-dependent version and deleted-file history | Small free tier, plan jumps, encryption-provider access model |
| Sync.com | Privacy-focused storage and sharing | Vendor positions client-side E2EE/zero knowledge | No official Linux desktop client established | Controlled links and team features | Plan-dependent versions/deleted files | Documentation depth, collaboration breadth, independent evidence |
| Tresorit | High-security collaboration and business sharing | Client-side E2EE documented in whitepaper | Native Linux support documented | Secure workspaces, links, permissions | Plan-dependent recovery/versioning | Price, plan scope, consumer fit, current public audit coverage |
| pCloud | Virtual drive, Linux support, flexible billing | Standard storage and separately sold Crypto folder must be separated | Native Linux support documented | File sharing; less office-suite centric | Trash/revisions/Rewind are plan/add-on dependent | Crypto add-on, lifetime terms, recovery-key consequences |
| MEGA | Broad-platform encrypted storage | User-controlled encryption model; recovery-key consequences | Native Linux support documented | Sharing and transfer workflows | Version/recovery plan dependent | Transfer quotas, account recovery, current plan limits |
| Box | Business collaboration and governance | Enterprise security model, not consumer zero knowledge | Browser/enterprise tooling; exact desktop support by distro needs verification | Strong business workflows and integrations | Plan-dependent versions/retention | Consumer free file-size limit, business-first fit, admin visibility |
| Filen | Privacy-focused storage, sync, and sharing | Vendor whitepaper documents zero-knowledge E2EE including encrypted metadata fields | Linux client availability indicated by vendor | Sharing and collaboration require current feature verification | Recovery/version behavior needs current verification | Smaller-provider durability, audit recency/scope, operational evidence |
| Internxt | Privacy-marketed cross-platform storage | Vendor claims E2EE/zero knowledge; exact scope needs source/audit normalization | Linux client advertised | Sharing/collaboration maturity needs verification | Recovery/version behavior needs verification | Absolute marketing language, audit scope, pricing volatility, durability |

## Architecture and Privacy Findings

### A field-level matrix is required

Future privacy claims must distinguish at least:

- file content;
- filenames and folder names;
- thumbnails;
- original and encrypted file size;
- timestamps;
- account email and billing identity;
- IP/access logs;
- permissions and collaborators;
- public-link creation and access data;
- document metadata;
- diagnostic/telemetry data.

“End-to-end encrypted” does not answer every field above. Proton Drive, for example, documents E2EE for file content, filenames, folder names, and thumbnail previews while also documenting server-visible operational metadata. Apple’s Advanced Data Protection is opt-in and scope-sensitive. pCloud Crypto is a separate protected area rather than the default architecture for every file. Those distinctions must remain visible in later pages.

### Recovery changes the threat model

Provider-assisted recovery can improve usability but may require additional keys, trusted devices, contacts, or organizational authority. A design that prevents provider decryption can also make account loss permanent. Reviews must explain both the protection and the failure mode.

### Business accounts can differ materially

Consumer privacy descriptions cannot automatically be carried into managed business accounts. Admin recovery, user impersonation, organization keys, audit logs, retention, and offboarding can create legitimate administrative access paths. These must be stated at the plan/account level.

### Open source and audits are scoped evidence

Open-source clients improve inspectability but do not prove the deployed service, server operations, build pipeline, or incident response. An audit is a dated, scoped assessment. SOC 2 is evidence about controls, not independent proof that a product’s encryption design is invulnerable.

## Pricing and Plan Structure

### Normalization fields

Every planned comparison should capture:

- usable storage at signup versus storage unlocked by tasks;
- whether quotas are shared with mail, photos, backups, or other products;
- monthly and annual billing;
- introductory versus standard/renewal pricing;
- taxes, currency, and region variation;
- individual, family, and team member limits;
- per-user versus pooled storage;
- add-ons such as client-side encryption or extended history;
- refund terms;
- cancellation and downgrade behavior;
- consequences of remaining over quota.

### Current plan-shape observations

- Google, Apple, and Microsoft plans derive substantial value from broader ecosystems and shared storage pools.
- Proton sells Drive-specific and broader Proton bundles; displayed checkout prices can be dynamic and region dependent.
- Dropbox typically has a small free tier and a larger paid-tier step.
- pCloud’s subscription and lifetime structures require contract-level qualification.
- secure-storage specialists often charge more for privacy architecture, controls, or business workflows.
- plan names, quotas, and promotions are volatile and must be rechecked at drafting and publication.

No cross-provider price winner is established by this dossier.

### Provider-specific current official plan evidence

Checked 2026-07-13. Prices below are source-displayed examples, not a promise of the reader's checkout price. Currency, tax, promotion, renewal, and region must be rechecked before any article table. `Not verified` means the current official page did not expose a sufficiently unambiguous value in this pass; it does not mean no paid plan exists.

| Provider | Free/start point | Current official paid-plan evidence | Billing/renewal qualification | Official source |
| --- | --- | --- | --- | --- |
| Proton Drive | 2 GB Drive by default; setup tasks can unlock 5 GB | Drive Plus 200 GB; Unlimited 500 GB; Duo 2 TB/2 users; Family 3 TB/6 users | Exact Drive Plus checkout price Not verified; region/currency dynamic; recheck bundles and renewal | https://proton.me/support/increase-storage-space ; https://proton.me/drive/pricing ; https://proton.me/support/proton-plans |
| Google One | 15 GB shared across Drive, Gmail, and Photos | US-facing plan page displayed Basic 100 GB at US$1.99/month | Annual price and taxes Not verified in this pass; family sharing up to five others; AI bundles change plan mix | https://one.google.com/about/plans ; https://one.google.com/about/ |
| iCloud+ | 5 GB shared iCloud storage | US monthly: 50 GB $0.99; 200 GB $2.99; 2 TB $9.99; 6 TB $29.99; 12 TB $59.99 | Monthly; regional tables and tax treatment differ; share with up to five family members | https://support.apple.com/en-us/108047 |
| OneDrive / Microsoft 365 | 5 GB OneDrive | US Microsoft 365 Basic: 100 GB at $1.99/month or $19.99/year; Personal and Family bundle storage/prices also displayed | Auto-renewing; plan availability/price can be market dependent; bundle value is not storage-only | https://www.microsoft.com/en-us/microsoft-365/onedrive/compare-onedrive-plans |
| Dropbox | Basic 2 GB | Plus, Family, and Professional tiers verified; exact US checkout price Not verified from a stable official US rendering | Monthly/annual toggle and promotions can change displayed effective price | https://www.dropbox.com/plans ; https://help.dropbox.com/plans/dropbox-basic-faq |
| Sync.com | 5 GB free account documented | Personal page displayed 150 GB at $4 monthly or $3.50/month billed annually; 1 TB and 5 TB tiers also displayed | Page carried a first-year promotion; normal and renewal price must be captured at checkout | https://www.sync.com/free-cloud-storage/ ; https://www.sync.com/pricing-individual/ |
| Tresorit | Free Basic account documented | Personal/Professional/Business subscriptions and a 14-day trial verified; exact current checkout price Not verified | Trial converts to selected paid billing cycle unless canceled | https://support.tresorit.com/hc/en-us/articles/360020566694-Account-vs-subscription ; https://support.tresorit.com/hc/en-us/articles/216113977-About-Tresorit-free-trials ; https://tresorit.com/pricing |
| pCloud | Free allowance is signup/action dependent; exact usable amount Not verified | Subscription and lifetime 500 GB/2 TB/10 TB structures verified; page displayed promotional one-time prices | Promotions are volatile; “lifetime” means account owner's lifetime or 99 years under terms; Crypto can be separately priced | https://www.pcloud.com/cloud-storage-pricing-plans.html ; https://www.pcloud.com/help/drive-help-center/how-to-set-up-a-crypto-folder-for-desktop ; https://www.pcloud.com/terms_and_conditions.html |
| MEGA | Exact current signup allowance Not verified in this pass | Pro plan structure verified; exact currency/price and transfer allowances Not verified | Transfer quotas and promotional/account-specific allowances require live checkout | https://mega.io/pricing ; https://help.mega.io/plans-storage/space-storage |
| Box | Individual: 10 GB, 250 MB upload, one version | US page displayed Personal Pro 100 GB at $14 monthly or $10/month on annual billing | Individual and business pricing differ; business plans have minimum seats | https://www.box.com/pricing/individual |
| Filen | New-account free 10 GB is no longer automatic in every case; eligibility is assessed at signup | Pro I 200 GiB €1.99/month; Pro II 500 GiB €3.99/month; Pro III 2 TiB €8.99/month displayed | Annual/lifetime and stacked plans exist; exact renewal/promotion context must be rechecked | https://filen.io/pricing ; https://filen.io/hub/status-update-february-march-2026/ |
| Internxt | 1 GB free | Current help page: Essential 1 TB €1.99 first month then €9.99/month; Premium 3 TB €3.99 then €19.99; Ultimate 5 TB €1.99 then €29.99 | “Annual” commitment is billed monthly; first-month promotion only; lifetime prices dynamic | https://internxt.com/pricing ; https://help.internxt.com/en/articles/15430964-how-do-internxt-annual-subscriptions-and-introductory-discounts-work |

### Pricing evidence limits

- The table normalizes only facts the official sources exposed clearly on 2026-07-13.
- It does not compare effective cost per terabyte because promotions, bundles, taxes, and renewal inputs are not normalized enough.
- Dropbox, Tresorit, MEGA, and Drive Plus numeric checkout prices remain `Not verified` rather than inferred from third-party pages.
- Specialist-provider “lifetime” plans require terms and provider-continuity analysis, not a simple savings calculation.

## Sync Versus Backup

| Capability | Sync service | Dedicated backup expectation |
| --- | --- | --- |
| Propagate current file changes | Core function | Not primary purpose |
| Keep files aligned across devices | Core function | Usually secondary |
| Recover older versions | Sometimes, plan dependent | Usually expected but retention varies |
| Restore after ransomware | Possible only if history survives and restore works | Requires tested retention and restore process |
| Protect against account loss | No | Not automatically |
| Preserve independent offline copy | Only when deliberately configured | Common design goal |

Editorial rule: never recommend a sync provider as the only backup for irreplaceable data without explaining the need for an independent copy and a tested restore process.

## Migration and Lock-In

Migration has four separate layers:

1. **File bytes:** Can ordinary files be downloaded and re-uploaded?
2. **Native documents:** Can Google Docs, Apple iWork, Microsoft formats, Proton Docs/Sheets, or Box Notes export to interoperable formats without material loss?
3. **Structure and metadata:** Do folder trees, dates, comments, versions, permissions, and ownership survive?
4. **Shared relationships:** Do links, collaborators, albums, automations, and organization policies need to be rebuilt?

Bulk export availability does not mean a frictionless move. Plain files are usually more portable than provider-native documents. Public links, versions, permissions, and audit history generally should be assumed nonportable unless explicitly verified.

## Testing Needs

The shared evidence supports documentation-based drafting, but the following claims require hands-on work before CBT can make them:

- fastest or most reliable sync;
- best conflict resolution;
- easiest large-library migration;
- successful ransomware recovery;
- exact upload/download throughput;
- low-memory or battery performance;
- cross-platform placeholder consistency;
- collaboration latency or format fidelity;
- support response quality;
- cancellation/refund execution;
- account-recovery success;
- complete offboarding behavior;
- real-world photo-library integrity.

Recommended future test fixture:

- 10 GB mixed-file library;
- deep folder tree and duplicate filenames;
- Office, Google-exported, image, video, archive, and large-file samples;
- Windows, macOS, iOS, Android, and Linux where supported;
- offline edits and simultaneous edits;
- delete/restore/version sequence;
- share, revoke, and collaborator removal;
- controlled export and migration to a second provider.

## Evidence Conflicts and Documentation Drift

| Issue | Conflict or drift | Treatment |
| --- | --- | --- |
| Proton Free storage | Marketing commonly presents 5 GB Drive; support says Drive starts at 2 GB and reaches 5 GB after setup tasks | State onboarding condition, not just headline capacity |
| Proton pricing | Pricing page is dynamically rendered and did not expose every numeric checkout price | Use verified plan shapes; label exact price Not verified until checkout evidence is captured |
| Proton performance | 2026 vendor pages state “up to” 3x/4x improvements under different scopes | Treat as vendor benchmark claims, not CBT speed results |
| Linux support | Proton CLI is available on Linux while a native GUI sync client is not verified | Never call CLI support a full desktop sync app |
| Apple encryption | ADP expands E2EE but is opt-in and has recovery/compatibility implications | Qualify scope and setup |
| pCloud privacy | Crypto and ordinary pCloud storage use different models | Never generalize Crypto claims to all files |
| Vendor coverage labels | “Zero knowledge,” “client-side,” and “end-to-end” are used inconsistently | Normalize by data field and key/control model |

## Open Questions

- Which providers publish current, product-specific audit reports with usable scope and remediation detail?
- Which services encrypt filenames, folder names, thumbnails, sizes, timestamps, and sharing metadata?
- What exact permissions and metadata remain after cross-provider migration?
- How do family and business organizers recover, export, or take ownership of member data?
- Which Linux offerings provide continuous sync rather than CLI, web, or mounted-drive access?
- What happens to over-quota data after cancellation for every candidate?
- Which services support encrypted bulk exports rather than decrypted local downloads?
- How reliably do versions recover a realistic ransomware event?
- How do native document formats degrade on export?
- What public incident history materially changes current recommendations?

## Volatile Claims and Refresh Triggers

| Claim family | Refresh trigger |
| --- | --- |
| Prices, plan names, quotas, member limits | Recheck at drafting and within 7 days of publication |
| Platform/client availability | Recheck when release notes or roadmap changes appear |
| Linux support | Recheck before any Linux recommendation |
| Version/deleted-file retention | Recheck before recovery claims |
| Sharing and collaboration permissions | Recheck before comparison tables |
| Refund, cancellation, and over-quota behavior | Recheck before value or switching conclusions |
| Encryption scope and metadata | Recheck after architecture/privacy-policy changes |
| Audits, attestations, incidents | Recheck at drafting, publication, and material incident |
| Import/export formats | Recheck before migration guidance |
| Vendor performance claims | Refresh only as attributed vendor claims unless independently tested |

## Provisional Category Conclusions

1. Mainstream ecosystem fit and privacy architecture are separate axes; neither should silently dominate every recommendation.
2. Google Drive, iCloud Drive, and OneDrive remain important baselines because collaboration and device integration can outweigh specialist privacy features for many readers.
3. Proton Drive, Sync.com, Tresorit, Filen, Internxt, MEGA, and pCloud Crypto require field-level architecture comparison before any “secure” ranking.
4. Dropbox remains a useful sync baseline even without a consumer zero-knowledge model.
5. Box is relevant to business collaboration but may be a poor consumer-value comparator.
6. Linux support must identify whether the offering is a GUI sync app, CLI, virtual drive, or web access.
7. Recovery, migration, and offboarding are under-documented across the category and are meaningful original-contribution opportunities for CBT.
8. No secure-cloud-storage ranking is finalized by this dossier.

## Source Register

### Cross-category and existing CBT records

- `docs/research/best-cloud-storage-for-beginners-research.md`
- `docs/research/google-drive-vs-dropbox-research.md`
- `docs/strategy/cloud-storage-cluster-approval.md`

### Proton Drive

- https://proton.me/drive
- https://proton.me/drive/privacy-policy
- https://proton.me/legal/privacy
- https://proton.me/blog/protondrive-security
- https://proton.me/blog/proton-drive-threat-model
- https://proton.me/support/drive
- https://proton.me/support/increase-storage-space
- https://proton.me/drive/pricing
- https://proton.me/support/version-history
- https://proton.me/support/drive-cli
- https://proton.me/support/drive-shareable-link
- https://proton.me/support/set-account-recovery-methods
- https://proton.me/support/free-plan-limits

### Mainstream baselines

- https://one.google.com/about/plans
- https://support.google.com/googleone/answer/6374270
- https://support.google.com/drive/answer/10375054
- https://support.apple.com/en-us/108047
- https://support.apple.com/en-us/121314
- https://support.apple.com/en-us/102651
- https://www.microsoft.com/en-us/microsoft-365/onedrive/compare-onedrive-plans
- https://support.microsoft.com/en-us/onedrive/microsoft-storage-faqs
- https://www.dropbox.com/plans
- https://help.dropbox.com/delete-restore/version-history-overview

### Privacy and specialist candidates

- https://www.sync.com/security/
- https://www.sync.com/pricing-individual/
- https://support.tresorit.com/hc/article_attachments/4410825833106
- https://tresorit.com/blog/content/files/2022/10/Tresorit_EY_3rd_Party_Memo-1.pdf
- https://tresorit.com/pricing
- https://www.pcloud.com/help/drive-help-center/how-to-set-up-a-crypto-folder-for-desktop
- https://www.pcloud.com/cloud-storage-pricing-plans.html
- https://mega.io/security
- https://mega.io/pricing
- https://cdn.filen.io/whitepaper.pdf
- https://filen.io/pricing
- https://filen.io/hub/status-update-february-march-2026/
- https://internxt.com/whitepaper/internxt-white-paper-1.pdf
- https://internxt.com/pricing
- https://help.internxt.com/en/articles/15430964-how-do-internxt-annual-subscriptions-and-introductory-discounts-work
- https://www.box.com/pricing/individual

## Dossier Status

`RESEARCH COMPLETE — CATEGORY DOSSIER ONLY`

The corrected package received independent approval for Proton Drive drafting on 2026-07-13. This dossier never authorizes a secure-storage ranking, article implementation, route, production deployment, or publication claim by itself.
