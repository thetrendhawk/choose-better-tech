# Best Secure Cloud Storage — Research Record

Checked date: 2026-07-13

Article type: Major multi-provider ranking / commercial investigation

Planned slug: `best-secure-cloud-storage`

Planned URL: `https://choosebettertech.com/best-secure-cloud-storage`

Workflow status: Research author pass complete; drafting not started

Related claim ledger: `docs/research/best-secure-cloud-storage-claim-ledger.md`

Shared category dossier: `docs/research/cloud-storage-landscape-dossier-2026-07-13.md`

## Research Objective

Determine which cloud-storage approaches are defensible for different security and privacy threat models without treating end-to-end encryption (E2EE), jurisdiction, open source, audit badges, or affiliate availability as automatic proof of superiority.

The article must answer **secure from whom, for which data, with what recovery and collaboration tradeoffs?** It must distinguish content confidentiality, metadata exposure, integrity, account recovery, endpoint risk, sharing, operational resilience, portability, and independent backup.

## Distinct Search Intent

Primary reader question: **Which cloud-storage service best protects my files for my threat model without creating unacceptable recovery, collaboration, or migration risk?**

This differs from:

- `/best-cloud-storage-for-beginners`: broad mainstream fit and ease of adoption;
- `/reviews/proton-drive-review`: one-provider evaluation;
- `/comparisons/icloud-vs-google-drive`: ecosystem choice;
- `/comparisons/google-drive-vs-dropbox`: mainstream sync/collaboration choice.

Repository search found no existing page targeting a security-first, multi-provider decision.

## Original Contribution

Original Contribution: A threat-model-first ranking that evaluates security by field and workflow rather than reducing it to an E2EE checkbox. It normalizes content, filename/folder, thumbnail, file-size/time, account, access, and sharing metadata; key-access and recovery exceptions; default versus optional encrypted areas; cryptographic audit freshness and incident history; sharing/collaboration/recovery/portability tradeoffs; and the independent-backup boundary.

Evidence of Contribution: The research applies the 2024 ACM CCS/ETH Zurich cryptographic analysis directly to Sync, pCloud, Icedrive, and Tresorit; separates scoped independent audits from marketing claims; records Proton's server-visible fields; identifies recovery paths that can change provider access; distinguishes a full-service E2EE provider from an optional encrypted vault and from a client-side overlay; and retains mainstream providers as security baselines rather than calling them categorically insecure.

Competing Coverage Reviewed: Current category pages from Cloudwards, TechRadar, Tom's Guide, Cybernews, Privacy Guides, and several smaller ranking sites were reviewed only to identify candidate and coverage patterns. Common patterns included universal numbered winners, E2EE as a binary checkbox, jurisdiction as a proxy for implementation quality, undifferentiated broker/audit badges, and little treatment of cryptographic incidents or field-level metadata.

Information Gap: Readers are rarely shown that providers advertising E2EE can differ materially in integrity protection, malicious-server resistance, recovery exceptions, metadata leakage, audit scope, encrypted-area defaults, and migration consequences. They are also rarely told when Cryptomator-style client-side encryption or a mainstream provider with a separate backup is the more defensible architecture.

Pass/Fail: **PASS**

## Scope and Exclusions

Included:

- consumer and small-team cloud-storage services with security/privacy relevance;
- mainstream baselines used to explain provider-managed encryption and ecosystem tradeoffs;
- client-side encryption overlays as a non-provider alternative;
- current official architecture, privacy, support, plan, audit, incident, and academic evidence;
- fit-based recommendations rather than one universal security winner.

Not performed:

- live account setup;
- upload/download or sync benchmarks;
- conflict-handling tests;
- malware or ransomware recovery tests;
- sharing-recipient identity tests;
- billing, refund, downgrade, or support tests;
- source-code review, cryptographic verification, penetration testing, or audit reproduction;
- full-library migrations;
- business-admin/offboarding exercises.

## Threat Models

The article must separate at least these readers:

1. **Ordinary loss/theft exposure:** stolen device, weak account recovery, accidental sharing, deletion.
2. **Provider-access concern:** user wants the provider unable to decrypt file content under normal architecture.
3. **Compromised or malicious server:** server can read, modify, inject, or substitute data and keys.
4. **Account takeover:** attacker obtains credentials, session, recovery channel, or trusted device.
5. **Endpoint compromise:** malware or an attacker controls an unlocked device.
6. **Recipient risk:** an authorized recipient downloads, copies, or redistributes content.
7. **Business administration:** administrators, ownership, recovery, offboarding, and legal continuity.
8. **Availability/recovery:** deletion, corruption, ransomware, outage, or provider closure.

E2EE can reduce provider access to content. It does not automatically protect endpoints, weak passwords, recovery channels, recipients, server-supplied malicious client code, exposed metadata, deletion, or lack of an independent backup.

## Evaluation Framework

1. Default encryption model and key custody.
2. File-content confidentiality.
3. Filename, folder, thumbnail, size, time, ownership, access, and sharing metadata.
4. Integrity/authentication against a malicious server.
5. Recovery and administrator exceptions.
6. Sharing/link design and recipient requirements.
7. Public architecture documentation and source availability.
8. Independent cryptographic review, audit scope/freshness, and incident history.
9. Platform support, including Linux.
10. Versions, deleted-file recovery, and backup boundaries.
11. Collaboration and business administration.
12. Export, migration, and lock-in.
13. Plan structure and encrypted-feature paywalls.
14. Documentation quality and unresolved evidence gaps.

No score may imply that a dated audit guarantees current deployed security.

## Candidate Universe and Disposition

| Candidate | Why evaluated | Research disposition | Reason |
| --- | --- | --- | --- |
| Proton Drive | E2EE by default, field-level documentation, mainstream ecosystem | Shortlist | Strong documentation-supported privacy fit; current full-service independent audit remains limited |
| Tresorit | E2EE collaboration/business focus and current tests | Shortlist | Strong business fit and meaningful audit evidence, with ETH sharing/metadata qualifications |
| Sync.com | E2EE, controlled sharing, recovery | Shortlist with warning | Useful fit, but 2024 ETH attacks and email-recovery key-access exception materially weaken broad claims |
| Filen | E2EE, open clients, Linux, metadata claims | Shortlist/conditional | Strong documented field coverage and portability; whitepaper says it is slightly outdated and no current public independent audit was verified |
| pCloud + pCloud Encryption | Mainstream storage plus optional client-side vault | Shortlist as specialized fit | Useful encrypted-vault/Linux option; Crypto is optional and the 2024 ETH findings prohibit blanket security claims |
| Internxt | E2EE, Linux, public audit/SOC material | Conditional/monitor | Broad feature and audit evidence, but unusually absolute marketing and fast-moving plans require restraint |
| MEGA | Large E2EE provider with public research history | Conditional/monitor | Include for completeness; 2022 and later cryptographic research requires current-state caution |
| NordLocker | Local/cloud encryption product and public plans | Conditional/monitor | Viable architecture; no current independent public audit or full Linux desktop workflow verified |
| Koofr Vault | Free open-source client-side vault inside Koofr, with Linux-capable parent service | Shortlist/conditional | Directly challenges Filen and pCloud Crypto for open/selective-vault fit; no current independent cryptographic audit verified |
| Icedrive | Paid client-side encrypted area | Exclude from recommended shortlist | 2024 ETH integrity attacks and disclosure conflict outweigh marketing; no independent current remediation retest found |
| Cryptomator + provider | Open-source client-side overlay | Alternative architecture | Not a storage provider; useful when readers want provider-independent encryption and accept workflow/recovery complexity |
| Tuta Drive | Default-E2EE encrypted drive in development | Exclude until generally available | Officially invite-only closed beta as of 2026-04-16 |
| Nextcloud E2EE | Optional E2EE app for hosted/self-hosted Nextcloud | Separate operational category | Requires administrator enablement and host/self-hosting analysis; prior cryptographic research warrants dedicated evaluation |
| IDrive private-key backup | Backup-first service with optional user-held private key | Backup alternative, not sync-ranking candidate | Relevant to data-loss protection; Cloud Drive sync is separately activated and backup workflows dominate |
| Google Drive | Mainstream provider-managed baseline | Baseline, not privacy shortlist | Strong account/security/collaboration ecosystem, but ordinary consumer Drive is not E2EE against Google |
| iCloud Drive + ADP | Opt-in consumer E2EE baseline | Scenario alternative | Strong Apple-household option where ADP is available, with recovery, geography, and sharing exceptions |
| OneDrive | Mainstream/provider-managed baseline | Baseline, not privacy shortlist | Strong Microsoft ecosystem and business controls; no consumer full-content E2EE verified |
| Dropbox | Mainstream/provider-managed baseline | Baseline, not privacy shortlist | Strong sync/collaboration context; no ordinary consumer E2EE against Dropbox verified |
| Box / Box KeySafe | Enterprise key-control baseline | Exclude from consumer shortlist | Customer-managed KMS control is not consumer zero-knowledge E2EE and targets enterprise buyers |
| Seafile | Self-hosted/E2EE option studied by ETH | Exclude from consumer shortlist | Self-hosting/admin burden and 2024 protocol findings make it a different operational category |

Candidate inclusion/exclusion is based on reader relevance and evidence, not affiliate availability.

## Independent Cryptographic Evidence

### 2024 ACM CCS / ETH Zurich study

The peer-reviewed paper **End-to-End Encrypted Cloud Storage in the Wild: A Broken Ecosystem** analyzed Sync, pCloud, Icedrive, Seafile, and Tresorit against a malicious-server threat model.

Its accompanying disclosure site reports:

- Sync: confidentiality attacks on files uploaded after key substitution, link-sharing leakage, metadata/file-name tampering, and file/folder injection.
- pCloud: file/name confidentiality and integrity attacks, chunk removal, metadata tampering, and injection/substitution attacks against Crypto.
- Icedrive: unauthenticated encryption/chunking enabling integrity violations, truncation, reordering, metadata tampering, and fragment-based injection.
- Seafile: password-downgrade and integrity attacks; one downgrade issue was patched after disclosure.
- Tresorit: no completed plaintext-file attack was demonstrated, but researchers described a conditional public-key substitution risk for sharing and unauthenticated metadata tampering. They explicitly said the end-to-end key-substitution exploit was not run because it would have required infrastructure compromise.

The study does not analyze Proton Drive, Filen, Internxt, NordLocker, Cryptomator, Google Drive, iCloud ADP, OneDrive, Dropbox, or Box. Absence from the study is not proof of security.

Sources:

- https://doi.org/10.1145/3658644.3690309
- https://eprint.iacr.org/2024/1616.pdf
- https://brokencloudstorage.info/
- https://appliedcrypto.ethz.ch/news-events/news-events-archive/2024.html

### Disclosure and remediation limits

The researchers say they disclosed to Sync, pCloud, Seafile, and Icedrive in April 2024; as of their October 2024 publication, Sync and pCloud had not responded to repeated attempts, Icedrive acknowledged but opted not to address the reported issues, and Seafile patched the downgrade issue. Tresorit acknowledged contact in September 2024.

BleepingComputer subsequently published provider responses:

- Sync said the link-leak issue had been fixed and remaining fixes were being fast-tracked.
- Icedrive disputed practical danger, said its integrity checks would detect tampering, and said it would review/update its encryption methods.
- pCloud disputed the threat model/findings as unrealistic or inaccurate and said it would implement actionable enhancements.
- Tresorit disputed the metadata-tampering implication, said some metadata was authenticated, and said user-visible public-key fingerprints for folder sharing were on its 2025 roadmap.

These are provider-reported positions and remediation intentions, not independent validation. No complete current independent retest was verified.

This record is dated. Before publication, search again for direct provider remediation statements or independent retests. Distinguish provider-reported fixes from independent validation and never assert that every issue remains exploitable in every current client.

Additional source:

- https://www.bleepingcomputer.com/news/security/severe-flaws-in-e2ee-cloud-storage-platforms-used-by-millions/

## Provider Findings

### Proton Drive — leading documentation-supported privacy fit

Proton documents E2EE for file contents, filenames, folder names, and thumbnail previews. Its Drive privacy policy also documents server-visible operational data, including creation/modification times, permissions, uploader username, public-link events, and encrypted size. Public links and account recovery remain workflow-specific trust boundaries. Proton's threat model rejects absolute security claims and identifies endpoint, account, phishing, and client-delivery risks.

Public 2022 Securitum reports covered mobile clients at that time; no current public independent assessment of the entire 2026 service/client architecture was verified. Open source and audits are evidence, not guarantees.

Sources:

- https://proton.me/blog/protondrive-security
- https://proton.me/blog/proton-drive-threat-model
- https://proton.me/drive/privacy-policy
- `docs/research/proton-drive-review-research.md`

Provisional fit: privacy-conscious individuals and Proton users who accept documentation-only confidence, lighter collaboration than mainstream suites, and independent-backup responsibility.

### Tresorit — leading secure business-collaboration fit

Tresorit publishes an encryption whitepaper and business/admin documentation. The 2024 ETH work did not demonstrate the same direct content-confidentiality break reported for Sync and pCloud, but it identified conditional sharing-key substitution and metadata-integrity concerns in a malicious-server model. Tresorit disputed the metadata-tampering implication and announced public-key-fingerprint work; that is a provider response, not an independent retest.

Tresorit's vendor-published summary dated 2025-12-15 describes a commissioned gray-box test conducted at the end of 2025. It covered selected SecureCloud and Engage components and technical evaluation of E2EE, web, mobile, and desktop applications. The summary says no critical/high cryptographic or other findings were reported and lists a medium server-side race condition plus other medium/low issues. The reviewed public source did not identify the auditor or expose the full report, so this is scoped vendor-reported audit evidence rather than whole-service validation.

Managed administrators can have account-recovery/access powers that differ from personal zero-knowledge expectations. Business continuity and member privacy must be evaluated together.

Sources:

- https://tresorit.com/resources/downloads/tresorit-encryption-whitepaper
- https://support.tresorit.com/hc/en-us/article_attachments/4410825833106
- https://brokencloudstorage.info/
- https://tresorit.com/blog/independent-security-test-eth-zurich-puts-tresorits-e2ee-cloud-solution-to-the-test
- https://tresorit.com/blog/tresorits-security-validated-again-by-independent-third-party-auditor-2025-pentest-results

Provisional fit: teams needing encrypted collaboration, policy/admin tooling, and stronger current audit evidence than most consumer-first candidates. Not a universal winner for price-sensitive personal storage.

### Sync.com — controlled-sharing and recovery fit with material cryptographic caveats

Sync documents E2EE, link controls, versions/deleted-file recovery, and current SOC reporting. However, the 2024 ETH study reported malicious-server confidentiality and integrity attacks against the analyzed design. Sync later told BleepingComputer that the reported link leak had been fixed and other fixes were being fast-tracked; a complete independent retest was not verified. Sync's own current support documentation says email-based password reset gives automated systems temporary access to encryption keys; it is enabled by default on paid plans and cannot be disabled on Teams.

SOC reports evaluate described controls over a period; they do not independently validate the storage cryptography against the ETH attacks.

Sources:

- https://www.sync.com/secure-cloud-storage/
- https://help.sync.com/hc/en-us/articles/48451511025811-How-do-I-enable-or-disable-email-based-password-reset
- https://www.sync.com/soc-report/
- https://www.sync.com/pdf/sync-soc3.pdf
- https://brokencloudstorage.info/
- https://www.bleepingcomputer.com/news/security/severe-flaws-in-e2ee-cloud-storage-platforms-used-by-millions/

Provisional fit: users prioritizing price, sharing controls, and recovery convenience over the strongest malicious-server assurance. Article language must foreground—not bury—the evidence conflict.

### Filen — open, Linux-friendly, but independently under-validated

Filen documents E2EE, encrypted metadata including file type/size in its whitepaper, open clients, web/mobile/Windows/macOS/Linux access, and file versioning. It also says the current whitepaper is slightly outdated. The reviewed public security page does not establish a current independent cryptographic audit, and Filen says it currently has no public bug-bounty program while accepting reproducible high/critical reports.

Sources:

- https://filen.io/hub/resources/filen-whitepaper-secure-cloud-storage-redefined/
- https://filen.io/hub/content/files/2025/06/whitepaper.pdf
- https://filen.io/security
- https://docs.filen.io/docs/web/facts/

Provisional fit: technical/privacy-focused users who value open clients and Linux and accept a smaller evidence base. Do not call it independently proven or most secure.

### pCloud Encryption — specialized encrypted-vault fit, not default account-wide E2EE

pCloud's ordinary storage uses provider-managed encryption; pCloud Encryption adds a paid client-side Crypto folder. The Crypto Pass is not recoverable by pCloud. The 2024 ETH study reported confidentiality and integrity attacks against the analyzed Crypto design. pCloud's historical “hacking challenge” is not a substitute for a current independent audit or retest.

Sources:

- https://www.pcloud.com/encrypted-cloud-storage.html
- https://www.pcloud.com/help/general-help-center/how-are-my-files-secured-if-im-not-subscribed-to-pcloud-encryption
- https://www.pcloud.com/help/how-to-encrypt-files-and-data/does-pcloud-have-access-to-my-encrypted-files
- https://brokencloudstorage.info/

Provisional fit: users wanting a Linux-capable virtual drive and a distinct encrypted vault for selected files. It should not be presented as default whole-account zero knowledge.

### Internxt — promising breadth, fast-moving evidence

Internxt documents E2EE, open-source clients, Windows/macOS/Linux/mobile/web access, backup, sharing, versioning on selected plans/file types, a Securitum public report, and a public SOC 2 Type II report. Its marketing also uses absolute or near-absolute security language and rapidly changing plan/feature claims.

The Securitum report covered the Internxt Drive and Send web applications as an anonymous self-registered user from 2022-07-15 through 2022-09-15, with retests on 2022-12-22, 2023-02-07 through 2023-02-08, and 2023-03-13. The initial report identified high-severity unauthorized metadata and decrypted-file access findings. The final listed retest marked the decrypted-file issue fixed and reduced the open-proxy issue to medium. This dated web-app assessment is not a current whole-service cryptographic audit.

Internxt's SOC 2 Type II report covers described controls for Internxt Drive, S3, Antivirus, Send, VPN, and Cleaner over 2025-09-01 through 2025-11-30 against Security, Availability, and Confidentiality criteria. It evaluates described control design and operation, not the cryptographic correctness of every client or claim. The article must use report scope, not marketing claims that an audit “certified no backdoor.”

Sources:

- https://help.internxt.com/en/articles/7924532-has-internxt-s-security-been-independently-verified
- https://www.securitum.com/public-reports.html
- https://www.securitum.com/public-reports/internxt-web.pdf
- https://blog.internxt.com/content/files/2025/12/Internxt---SOC-2-Type-II-Report.pdf
- https://help.internxt.com/en/articles/13973540-how-does-file-versioning-work-in-internxt-drive

Provisional fit: users who need broad platform support and accept a younger, quickly changing suite. Avoid post-quantum and ransomware claims unless separately validated within precise scope.

### MEGA — major E2EE service with consequential research history

Research disclosed in 2022 and published at IEEE S&P 2023 demonstrated practical key-recovery, plaintext-recovery, and file-forgery attacks against MEGA's architecture. MEGA added lightweight sanity checks intended to block those attacks. EUROCRYPT 2023 research then demonstrated new practical RSA private-key recovery attacks against the sanity-check design. MEGA subsequently described broader client hardening, including removing the relevant ECB oracle, and the researchers said they had not reviewed those later changes in detail. No current post-2023 independent retest of the deployed architecture was verified. The article must imply neither current exploitability nor full resolution.

Sources:

- https://ethz.ch/en/news-and-events/eth-news/news/2022/06/vulnerabilities-in-mega-cloud-service.html
- https://www.research-collection.ethz.ch/items/c119ea3b-3a0e-4a55-864c-cdb45e6461b3
- https://www.research-collection.ethz.ch/items/57d76be3-636e-40a3-b1f2-901a6cec7915

Provisional fit: include as an evidence-rich alternative/monitor, not a top recommendation until current remediation and architecture evidence are clearer.

### NordLocker — local and cloud encryption with audit gap

NordLocker documents local/cloud E2EE and current 3 GB free, 500 GB, and 2 TB plan shapes, but dynamic pricing is volatile. Its support documentation lists Windows, web, Android, and iOS access; a current full Linux desktop workflow was not verified. No current public independent cryptographic audit was verified.

Sources:

- https://support.nordlocker.com/hc/en-us/articles/360015151437-What-is-NordLocker
- https://nordlocker.com/plans/

Provisional fit: monitor or conditional recommendation for local-plus-cloud encryption; do not elevate it because a public affiliate program exists.

### Koofr Vault — open selective-vault challenger

Koofr says ordinary storage is not client-side encrypted by default. Koofr Vault is a free, open-source, client-side, zero-knowledge add-on included in all plans. Encryption/decryption occurs in the browser before transfer; the parent Koofr service has Windows, macOS, and Linux desktop support, while Vault is documented primarily as web/mobile Safe Boxes. No current public independent cryptographic audit of Vault was verified.

Sources:

- https://koofr.eu/blog/posts/client-side-encryption-why-does-koofr-offer-a-client-side-encryption-add-on
- https://koofr.eu/features/
- https://koofr.eu/privacy-matters/

Provisional fit: a strong selective-vault/open-source alternative that directly challenges Filen and pCloud Crypto. Because Vault is an add-on rather than account-wide default E2EE and independent validation is thin, no “best open/Linux” label is authorized.

### Icedrive — excluded from recommendations pending stronger remediation evidence

Icedrive advertises paid client-side encryption. The 2024 ETH study reported integrity, chunking, metadata, and injection attacks against its analyzed design and says Icedrive acknowledged disclosure but opted not to address the issues at that time. No current independent remediation/retest was verified.

Sources:

- https://icedrive.net/encrypted-cloud-storage
- https://brokencloudstorage.info/

Disposition: evaluated and excluded from the recommendation shortlist; retain in “why not selected” with dated qualification.

### Tuta Drive — exclude while closed beta

Tuta announced Tuta Drive as an invite-only closed beta on 2026-04-16 and said broader paid-user availability would follow. Its default-E2EE and post-quantum claims are product-development claims, not evidence of general availability or mature operational performance.

Source: https://tuta.com/blog/tuta-drive-in-beta-launch

Disposition: monitor; exclude until broadly available and independently assessable.

### Nextcloud E2EE — separate self-hosted/administrator category

Nextcloud documents an optional E2EE app that must be enabled server-side and encrypts designated files on clients. The product can be self-hosted or supplied by a host, making administrator configuration, update discipline, availability, and support part of the threat model. The 2024 ETH paper cites prior cryptographic analysis of Nextcloud, so a fair recommendation would require a dedicated current architecture/remediation review.

Sources:

- https://docs.nextcloud.com/server/latest/Nextcloud_User_Manual.pdf
- https://staging.nextcloud.com/wp-content/uploads/2022/03/Nextcloud-end-to-end-encryption-Whitepaper.pdf
- https://eprint.iacr.org/2024/1616.pdf

Disposition: separate operational category; not silently omitted and not ranked beside turnkey consumer services here.

### IDrive private-key storage — backup-first alternative

IDrive documents optional private-key encryption selected during signup and says the key is not stored on its servers; losing it prevents restore. IDrive is primarily a multi-device cloud-backup service with snapshots, versions, and physical transfer, while Cloud Drive sync is separately activated. This makes it relevant to the article's backup boundary but not a like-for-like secure-sync recommendation.

Sources:

- https://www.idrive.com/online-backup-security
- https://www.idrive.com/pricing

Disposition: include as a backup-first alternative for users whose main threat is data loss rather than collaborative sync.

### Cryptomator + a mainstream provider — provider-independent alternative

Cryptomator is an open-source client-side encryption overlay for a vault synchronized through another provider; it is not a cloud-storage provider. Its security documentation and code are public. A 2017 Cure53 audit is dated, and a moderate 2026 Hub token-exchange issue affected version 1.19.1 and was patched in 1.19.2. This advisory does not by itself establish a core vault-content break.

Sources:

- https://docs.cryptomator.org/security/
- https://github.com/cryptomator/cryptomator
- https://cryptomator.org/audits/2017-11-27%20crypto%20cure53.pdf
- https://github.com/cryptomator/cryptomator/security/advisories/GHSA-9q8x-whrw-x44p

Provisional fit: users who want to keep a mainstream provider while managing their own encrypted vault. Tradeoffs include recovery responsibility, reduced web collaboration/search/preview, and more workflow complexity.

## Mainstream Security Baselines

- Google Drive, OneDrive, Dropbox, and standard iCloud protection encrypt data in transit and at rest, but the ordinary consumer provider retains service-level key access. That is not “unencrypted”; it is a different provider-access threat model.
- Eligible iCloud users can enable Advanced Data Protection for expanded E2EE, but it is opt-in, recovery-sensitive, geographically limited, and has sharing/collaboration exceptions.
- Box KeySafe provides enterprise customer-managed key controls. It is not equivalent to consumer client-side E2EE in which the provider cannot obtain plaintext through the service design.

Sources are recorded in the shared landscape dossier and `docs/research/icloud-vs-google-drive-research.md`.

## Provisional Recommendation Framework

These are drafting hypotheses, not publication authorization:

1. **Best documentation-supported privacy fit: Proton Drive.** Qualification: no current full-service independent public audit verified; collaboration and migration are not mainstream-suite equivalents.
2. **Best secure business-collaboration fit: Tresorit.** Qualification: expensive/managed-admin tradeoffs; ETH sharing and metadata findings must remain visible.
3. **Open/Linux-friendly contenders: Filen and Koofr Vault.** Filen offers account-wide E2EE and native Linux access; Koofr offers a free open-source selective Vault inside a broader provider-managed service. Neither has enough current independent cryptographic validation for a categorical winner.
4. **Recovery-oriented E2EE contender: Sync.com.** Qualification: ETH findings and email-reset key-access model materially limit the recommendation; pricing is not normalized, so no value winner is authorized.
5. **Selective-vault contenders: Koofr Vault and pCloud Encryption.** Koofr offers a free open-source Vault with thinner independent validation; pCloud offers a mature Crypto workflow with added cost, unrecoverable passphrase risk, and the ETH findings. No overall vault winner is authorized.
6. **Best provider-independent alternative: Cryptomator with an existing provider.** Qualification: not a storage service; adds recovery and collaboration friction.

Internxt, MEGA, and NordLocker remain conditional/monitor candidates. Icedrive is excluded from the recommended shortlist pending stronger public remediation evidence.

No universal “most secure” winner is authorized.

## Reader Decision Rules

- Choose Proton Drive when provider-blind content confidentiality and a documented privacy model matter more than deep office-suite collaboration.
- Choose Tresorit when a managed team needs encrypted collaboration and business controls and accepts admin and cost tradeoffs.
- Consider Filen when Linux/open-client access matters and the user accepts thinner independent validation.
- Consider Sync when sharing and recovery controls matter, but only after understanding the ETH and recovery-key caveats; no value claim is made without normalized pricing.
- Consider Koofr Vault for a free open-source selective vault inside Koofr, or pCloud Crypto for a mature selected-files vault inside pCloud; neither is an overall winner on current independent evidence.
- Use Cryptomator when the user wants to preserve an existing provider and can manage a separate recovery/workflow burden.
- Use iCloud with ADP for eligible Apple-heavy households that understand recovery and sharing exceptions.
- Prefer mainstream providers when collaboration, ecosystem integration, support maturity, and account recovery matter more than provider-blind content confidentiality.

## Recovery, Backup, and Portability

Cloud sync is not automatically an independent backup. Provider versions and trash can help, but their windows, file-type limits, plan eligibility, and synchronized-deletion behavior vary. No candidate was tested for ransomware recovery. The eventual article should recommend a separate, tested backup for irreplaceable data.

Recovery is also a privacy tradeoff. Provider-assisted password reset, managed-admin recovery, public-link recovery, and lost-key behavior can change who can decrypt or permanently destroy access. Each recommendation must disclose its recovery boundary.

Exports preserve files more reliably than they preserve versions, comments, permissions, links, native documents, ownership, and collaboration state. No service earns a portability advantage without documented export scope or hands-on migration.

## Pricing Treatment

Pricing is too volatile to determine the ranking during research. Before drafting and publication:

- recheck current official plan pages;
- distinguish monthly, annual, lifetime, introductory, and renewal terms;
- identify whether E2EE is default or a paid add-on;
- state storage and member limits;
- avoid “cheapest” without normalized inputs;
- avoid hard-coding dynamic promotions into headings or verdicts.

Exact current price claims are intentionally not authorized by this record.

## Evidence Conflicts and Gaps

1. Provider E2EE marketing often conflicts with the malicious-server guarantees demonstrated by independent research.
2. The ETH study is dated 2024; current remediation is not verified for Sync, pCloud, Icedrive, or every later client version.
3. Tresorit's later tests are broader operational evidence but do not erase the conditional sharing/metadata findings or prove every current workflow.
4. Proton's public mobile audits are from 2022; no current whole-service public independent audit was verified.
5. Filen says its whitepaper is slightly outdated; no current public independent audit was verified.
6. Internxt public marketing sometimes describes audit outcomes more broadly than the underlying scoped reports should support.
7. Current public independent cryptographic audits were not verified for NordLocker.
8. Current independent MEGA retest/remediation coverage remains unclear.
9. No candidate has been tested by CBT for speed, reliability, recovery, support, collaboration quality, or migration.
10. Absence of a public incident is not evidence that no incident occurred.

## Claims That Must Not Be Made

- “Most secure cloud storage.”
- “Unhackable,” “breach-proof,” “military-grade,” or “100% private.”
- “Zero knowledge means the provider sees no metadata.”
- “Open source guarantees security.”
- “Audited means safe.”
- “No one but you can ever access the files” without recovery/admin/sharing qualification.
- “Sync/pCloud/Icedrive is currently vulnerable” without dating the study and stating remediation status is not verified.
- “Tresorit passed the ETH study with no findings.”
- “Proton has a current full-service audit.”
- “Filen is independently proven.”
- “Internxt is quantum-proof.”
- “MEGA's historic attacks are all still exploitable” or “fully resolved” without current evidence.
- “Version history is ransomware backup.”
- “Fastest,” “easiest,” “most reliable,” or “best support” without hands-on testing.

## Hands-On Testing Status

Documentation-only research. CBT did not create accounts, install apps, upload a corpus, test shares, inspect source code, measure performance, trigger recovery, simulate ransomware, migrate a library, contact support, or validate cryptographic implementations. The article must use “documented,” “the provider says,” “the audit reported,” and similarly bounded language.

## Visible Source Plan

Group eventual visible sources by:

1. Independent academic/cryptographic research.
2. Provider architecture and privacy documentation.
3. Independent audits and attestations with dates/scopes.
4. Recovery, sharing, platform, and portability documentation.
5. Pricing/plan sources checked near publication.

## Internal-Link Plan

Link naturally to:

- `/best-cloud-storage-for-beginners`;
- `/reviews/proton-drive-review`;
- `/comparisons/icloud-vs-google-drive`;
- `/comparisons/google-drive-vs-dropbox` where mainstream collaboration context helps;
- relevant password-manager/account-security guidance for master-password and MFA advice.

Do not create broken links to future cloud-storage pages.

## Monetization Review

See:

- `docs/monetization/cloud-storage-monetization-opportunity-map.md`
- `docs/monetization/best-secure-cloud-storage-monetization-supplement.md`

Affiliate opportunities exist for several candidates, including pCloud, Sync, Internxt, Tresorit, and NordLocker. Proton outreach is unverified for Drive attribution. Filen, MEGA, Icedrive, Cryptomator, and mainstream-provider paths vary or remain unverified. None affected the candidate universe, exclusions, provisional labels, or evidence interpretation.

**Monetization Independence Check: PASS**

## Volatile Claims and Refresh Triggers

| Claim family | Refresh trigger |
| --- | --- |
| Plans, prices, quotas, promotions, refunds | Recheck within 7 days of drafting and publication |
| Platform and Linux support | Client release or support-page change |
| E2EE/default versus add-on scope | Architecture, plan, or client change |
| Recovery/admin access | Recovery or business-policy change |
| Audit and SOC evidence | New report, expiry, or scope change |
| ETH vulnerabilities/remediation | Provider statement, client release, or independent retest |
| Version/trash windows | Recovery-policy change |
| Sharing controls and metadata | Sharing architecture/policy change |
| Affiliate availability | Before any application, outreach, tracked link, or CTA task |

## Research Gate Status

Author pass: COMPLETE

Original Contribution: PASS

Monetization Independence Check: PASS

Critical/High claim ledger: All 44 claims independently approved with qualification

Independent reviewer decision: **APPROVE FOR DRAFTING**

Drafting authorization: **GRANTED for a separately scoped content task; no draft started in this research task.**
