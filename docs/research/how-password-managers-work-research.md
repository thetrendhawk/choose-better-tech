# How Password Managers Actually Work — Canonical Research Record

Checked date: 2026-07-12
Article type: Educational technical guide
Production URL: `https://choosebettertech.com/guides/how-password-managers-work`
Research status: Complete for a conceptual, architecture-qualified guide; no code review, cryptographic test, extension test, telemetry capture, or recovery exercise is supported

## Research Objective

Explain the technical lifecycle of a credential inside a password manager: generation, local key derivation, authentication, vault encryption, cloud synchronization, local unlock, autofill, sharing, recovery, export, passkeys, deletion, and failure modes.

The guide must separate common architecture patterns from provider-specific implementations and avoid implying that every product uses the same algorithms, fields, recovery model, or sharing scheme.

## Distinct Search Intent

Primary reader question: What happens technically from the moment I save a password until a manager fills, shares, recovers, exports, or deletes it?

This intent is distinct from:

- `/are-password-managers-safe`: whether the risk tradeoff is acceptable;
- `/best-password-managers-for-privacy`: provider-knowledge and privacy selection;
- `/password-manager-vs-browser-passwords`: built-in versus dedicated manager;
- ranking, review, family, free-plan, and pairwise product pages.

No duplicate route or conflicting primary intent was found. The existing educational slug remains correct.

## Scope

Explain:

- password generation and saving;
- salts and key-derivation functions;
- work factors and parameter upgrades;
- authentication versus encryption;
- local key material and secure storage;
- biometric unlock;
- client-side encryption and encrypted fields;
- cloud synchronization and server-visible metadata;
- offline use and cached vaults;
- browser extensions, mobile autofill, and phishing boundaries;
- shared-vault and item-key handling;
- account, key, emergency, family, and organization recovery;
- MFA and passkeys;
- exports, migration, and deletion;
- local-only and self-hosted designs;
- server breaches, malware, sessions, rollback, and malicious updates;
- what providers can still know.

## Exclusions

This remediation does not:

- rank products;
- verify provider implementations through source review;
- reproduce cryptography;
- test KDF performance;
- inspect local keychains or keystores;
- test browser extensions, autofill, clickjacking, or phishing;
- inspect mobile autofill frameworks;
- reproduce sharing or recovery flows;
- test passkey interoperability;
- capture telemetry;
- self-host a service;
- simulate a provider breach or malicious update;
- verify secure deletion from storage media or backups.

## Conceptual Lifecycle

1. The user creates or imports a credential.
2. The client serializes the item into the provider's vault format.
3. A random salt and configured KDF parameters help derive key material from the account/master password, or the product combines multiple secrets.
4. Authentication proves account access; encryption keys protect vault data. These functions may share inputs but are not the same.
5. The client encrypts supported vault fields before cloud upload in an end-to-end encrypted design.
6. The service stores and synchronizes ciphertext plus operational account and synchronization data.
7. An authorized client obtains encrypted state and reconstructs or releases keys locally.
8. A browser extension or OS autofill service matches a site or app and fills according to configured rules.
9. Sharing encrypts item or vault keys for authorized recipients or organization keys, depending on design.
10. Recovery changes how keys or account access can be re-established.
11. Exports may be plaintext, encrypted, or vendor-bound.
12. Deletion removes active references according to product rules, while retention, backups, recipient copies, and local exports may persist.

## Source Hierarchy

1. Current official security white papers and architecture documentation.
2. NIST, FIDO, Apple, Android, browser, and platform documentation.
3. Peer-reviewed and major academic security research.
4. CERT vulnerability notes and public incident disclosures.
5. Existing canonical CBT safety, browser, family, and privacy research.

Provider documentation establishes a documented implementation, not a universal password-manager rule or independent proof.

## Authoritative and Provider Sources

### Cross-cutting standards and platform behavior

- NIST SP 800-63B: https://pages.nist.gov/800-63-4/sp800-63b.html
- FIDO passkeys: https://fidoalliance.org/passkeys/
- Apple Keychain access with Face ID / Touch ID: https://developer.apple.com/documentation/localauthentication/accessing-keychain-items-with-face-id-or-touch-id
- Android Keystore features: https://source.android.com/docs/security/features/keystore/features
- Android authentication and hardware-backed Keystore: https://source.android.com/docs/security/features/authentication
- CERT VU#516608 on password-manager extension clickjacking: https://www.kb.cert.org/vuls/id/516608

### Bitwarden architecture examples

- Security white paper: https://bitwarden.com/help/bitwarden-security-white-paper/
- KDF algorithms: https://bitwarden.com/help/kdf-algorithms/
- Account encryption key: https://bitwarden.com/help/account-encryption-key/
- Zero-knowledge white paper: https://bitwarden.com/resources/zero-knowledge-encryption-white-paper/
- Emergency access: https://bitwarden.com/help/emergency-access/
- Export: https://bitwarden.com/help/export-your-data/

### 1Password architecture examples

- Authentication and encryption: https://support.1password.com/authentication-encryption/
- Secret Key: https://support.1password.com/secret-key-security/
- Secure Remote Password: https://support.1password.com/secure-remote-password/
- Security white paper: https://1password.com/files/1Password-White-Paper.pdf
- Recovery: https://support.1password.com/recovery/
- Export: https://support.1password.com/export/

### Proton Pass and NordPass examples

- Proton Pass security model: https://proton.me/blog/proton-pass-security-model
- Proton Pass security: https://proton.me/pass/security
- Proton Pass passkeys: https://proton.me/blog/proton-pass-passkeys
- Proton Pass export: https://proton.me/support/pass-export
- NordPass security: https://nordpass.com/security/
- NordPass emergency access: https://support.nordpass.com/hc/en-us/articles/5691777958929-How-to-give-Emergency-Access-in-NordPass

### Local-only architecture example

- KeePassXC documentation: https://keepassxc.org/docs/
- KeePassXC user guide: https://keepassxc.org/docs/KeePassXC_UserGuide
- KeePassXC browser integration documentation: https://keepassxc.org/docs/KeePassXC_UserGuide#_setup_browser_integration

## Academic and Independent Sources

- Silver et al., “Password Managers: Attacks and Defenses,” USENIX Security 2014: https://www.usenix.org/system/files/conference/usenixsecurity14/sec14-paper-silver.pdf
- Oesch et al., “That Was Then, This Is Now: A Security Evaluation of Password Generation, Storage, and Autofill in Thirteen Password Managers,” USENIX Security 2020: https://www.usenix.org/conference/usenixsecurity20/presentation/oesch
- Mayer et al., “The Emperor's New Autofill Framework,” USENIX Security 2022: https://www.usenix.org/system/files/sec22-mayer.pdf
- Anliker et al., “Phishing Attacks against Password Manager Browser Extensions,” USENIX Security 2025: https://www.usenix.org/conference/usenixsecurity25/presentation/anliker
- CERT VU#516608, DOM-level extension clickjacking: https://www.kb.cert.org/vuls/id/516608
- “Passwords Are Meant to Be Secret,” autofill hardening research: https://arxiv.org/abs/2402.06159
- “Passwords and FIDO2 Are Meant to Be Secret,” secure browser channel research: https://arxiv.org/abs/2509.02289

## Claim-to-Source Matrix

| Conceptual claim | Source basis | Qualification |
| --- | --- | --- |
| KDFs add salt and computational work before keys are used | NIST; Bitwarden KDF docs; provider white papers | Algorithms and parameters differ and change over time |
| Authentication and encryption are distinct layers | 1Password authentication/encryption and SRP docs; Bitwarden white paper | Products may share secrets and state across layers |
| E2EE clients can upload ciphertext and decrypt locally | Bitwarden, 1Password, Proton Pass, NordPass architecture docs | Exact encrypted fields and metadata differ |
| Servers still hold operational account/sync data | Provider architecture and privacy research | This guide does not capture runtime telemetry |
| Biometric unlock authorizes release/use of local protected material | Apple Keychain and Android Keystore docs | Exact app implementation and fallback differ |
| Browser extensions add phishing and clickjacking attack surface | USENIX 2014/2020/2025; CERT VU#516608 | Research applies to tested designs and versions, not every current product |
| Mobile autofill frameworks have distinct confused-deputy risks | USENIX Security 2022 | Platform defenses and app versions evolve |
| Sharing can wrap vault/item keys for authorized recipients | Bitwarden and 1Password white papers | Key hierarchy, authorization, copy, and revocation differ |
| MFA usually protects online authentication, not stolen ciphertext entropy | Provider architecture plus NIST authentication separation | Some architectures can bind additional secrets; verify the product |
| Biometric data is not normally the vault encryption key itself | Apple/Android platform docs | Biometric approval can authorize access to locally protected keys |
| Plaintext exports create a temporary full-vault copy | Bitwarden, 1Password, Proton, KeePassXC export docs | Secure deletion from SSDs/backups cannot be guaranteed by deleting one file |
| Local-only and self-hosting change rather than eliminate trust | KeePassXC and Bitwarden self-hosting/docs; CBT safety research | Operator competence and environment determine the result |
| A malicious software update can bypass otherwise sound vault encryption after install/unlock | General software supply-chain model; client architecture; academic browser research | No provider is accused of delivering a malicious update |

## Technical Findings

### 1. Password generation and item creation

A password manager can generate random passwords according to user-selected length and character rules. The generated value is then saved as part of an item with associated fields such as username, URL, notes, TOTP seed, passkey, attachments, or custom fields.

The item is serialized into the product's data model before encryption. Field-level encryption scope matters because a product may encrypt some metadata differently from secret values.

### 2. Salts, KDFs, and work factors

A salt is public random data that makes identical passwords derive different results and frustrates precomputed attacks. The salt does not need to be secret.

A password-based KDF deliberately consumes computation and, for memory-hard functions, memory. This increases the cost of each offline password guess. Bitwarden documents PBKDF2 and Argon2id options; other products use different parameters or combine additional high-entropy secrets.

Work factors are not permanent. Hardware and recommended parameters change. A vault created under older settings may need a deliberate upgrade or key rotation.

### 3. Authentication versus encryption

Authentication answers whether a client may access an account or retrieve encrypted state. Encryption answers whether the client can turn ciphertext into readable vault data.

1Password documents SRP for authentication and a separate key hierarchy using the account password and Secret Key. Bitwarden documents password-derived and account-encryption keys. These examples demonstrate the separation but are not universal templates.

MFA normally adds an online authentication challenge. It generally does not add entropy to a vault an attacker already possesses as ciphertext unless the architecture explicitly binds it into key protection.

### 4. Client-side encryption and server storage

In an E2EE design, supported vault data is encrypted on the client before synchronization. The server stores ciphertext and makes it available to authorized clients.

The server still controls account state, availability, synchronization order, software delivery, and often retains operational metadata. “The provider cannot read vault contents” is therefore narrower than “the provider knows nothing” or “the provider cannot affect the client.”

### 5. Local keys and biometric unlock

After initial unlock, clients may store protected local key material so users can unlock with Face ID, Touch ID, Windows Hello, or Android biometrics.

Apple and Android platform documentation shows a general model: successful device authentication can authorize Keychain/Keystore access or a cryptographic operation. The biometric template is not normally used as the vault encryption key.

The exact fallback, timeout, key invalidation, device-lock requirement, and app implementation differ. Device compromise or malware can still threaten data after unlock.

### 6. Cloud synchronization and offline use

Clients can upload encrypted changes, download ciphertext, and decrypt locally. Previously synchronized vault data may remain cached for offline use.

Offline availability means stolen devices can contain an encrypted local vault and protected key material. Device encryption, lock-screen security, app timeout, and remote session/device controls remain important.

Synchronization systems also face availability, rollback, conflict, deletion, and stale-device problems even when content remains encrypted.

### 7. Browser extensions and mobile autofill

Browser extensions match saved entries to domains and inject or mediate user-interface elements in a hostile web environment. Domain matching can reduce phishing risk, but extensions and autofill create attack surface.

Research from USENIX and CERT shows risks involving automatic fill, iframes, malicious scripts, extension UI spoofing, and DOM-level clickjacking. Findings apply to tested versions and designs; they do not prove every current extension is vulnerable.

Mobile autofill uses OS frameworks rather than exactly the same extension model. USENIX Security 2022 documented confused-deputy and credential-phishing risks in mobile autofill frameworks, reinforcing the need for platform and app updates.

### 8. Sharing and key wrapping

Sharing does not need to send plaintext through the provider. A common design encrypts an item or vault key for another authorized user's public key or for an organization/family key hierarchy.

Bitwarden organizations and 1Password shared vaults provide documented examples. Permissions can be enforced through both cryptography and server authorization. Revoking future access cannot guarantee deletion of copies, exports, screenshots, or data already used by a recipient.

### 9. Recovery types

Recovery must be separated into:

- authentication recovery: regaining the right to sign in;
- device approval: authorizing a new client;
- key or vault recovery: restoring access to decryption material;
- emergency access: a trusted person gains view or takeover rights after a process;
- family recovery: an organizer helps a member;
- organization recovery: an administrator restores a managed member;
- offline recovery: Emergency Kits, recovery codes, key files, or backups.

Each model changes who can restore access and what the provider or administrator can do. “Zero knowledge” does not imply every recovery model is impossible, but it requires careful key design.

### 10. Passkeys

A password manager can store a passkey private key as encrypted vault data and present it only for the correct relying party. The private key remains distinct from the public credential registered with the website.

Passkey sync, sharing, export, account recovery, and Credential Exchange support are still evolving. A passkey in a vault inherits the vault's device, recovery, provider, and export risks.

### 11. Export, migration, and deletion

Exports can be plaintext, encrypted, or vendor-bound. Plaintext CSV/JSON provides broad compatibility but creates an immediately readable copy of every exported secret.

Migration should include a destination import test, secure handling, and cleanup. Deleting a plaintext file does not guarantee it disappears from SSD history, backups, cloud sync, temporary files, or endpoint monitoring.

Deleting an item, vault, or account may involve trash, retention, backups, shared copies, recipients, or legal records. Active deletion is not the same as provable physical erasure from every system.

### 12. Local-only and self-hosted systems

Local-only vaults avoid a hosted synchronization provider but make the user responsible for backup, multi-device availability, conflict handling, and disaster recovery.

Self-hosting changes the server operator. It does not remove client software, browser extensions, administrators, TLS, patching, backups, logs, availability, or malicious-update risk.

### 13. Provider breaches and stolen ciphertext

A breach can expose account records, source code, sessions, development systems, metadata, encrypted vaults, or plaintext. These are not equivalent events.

Stolen encrypted vaults are serious because attackers can perform offline guesses against weak account passwords using the captured KDF parameters and ciphertext. Strong unique passwords, modern KDF settings, and high-entropy additional secrets can change the cost.

### 14. Malware and unlocked devices

Vault encryption protects stored data. Malware with sufficient privileges on an unlocked device may capture keystrokes, clipboard contents, filled values, screenshots, browser data, memory, or decrypted exports.

A password manager does not replace device encryption, updates, endpoint security, careful extension installation, or phishing awareness.

### 15. Malicious updates and supply-chain risk

A client that legitimately decrypts the vault can be modified to copy data after unlock. That makes software distribution, signing, update channels, build systems, extension stores, code review, and incident response part of the trust model.

This is a general architecture boundary, not an allegation that any provider has delivered a malicious update. Open source can improve review but does not prove that a downloaded build matches reviewed code.

## What Providers Can Still Know

Depending on product and feature:

- account email or identifier;
- billing and payment-processor records;
- support conversations;
- login, device, and abuse-prevention events;
- IP-derived security information;
- optional diagnostics or telemetry;
- website cookies and analytics;
- alias routing;
- encrypted object sizes, timing, and synchronization patterns;
- sharing membership and authorization state;
- retention and deletion records.

The exact list must be verified from current architecture and privacy documentation.

## Common Misconceptions

- The master password is not automatically sent to or stored by the provider in recoverable form.
- The salt is not a secret.
- MFA is not automatically another layer of offline vault encryption.
- A fingerprint or face is not normally the vault encryption key.
- Cloud sync does not require plaintext server storage.
- Zero knowledge does not mean zero account data.
- Revoking a share cannot erase every prior recipient copy.
- Open source and audits are not guarantees.
- Self-hosting is not automatically safer.
- Deleting one export file does not prove secure erasure.

## Conflicting or Ambiguous Evidence

- Providers use “master password,” “account password,” “Secret Key,” “user key,” and “vault key” differently.
- KDF algorithms and parameters can change by platform, account age, or user setting.
- “Biometric unlock” can protect different local secrets and use different fallback behavior.
- “Zero knowledge” does not have one audited definition across products.
- Sharing may combine cryptographic key distribution with server-side authorization.
- Recovery can restore authentication without restoring keys, or rewrap keys through an authorized party.
- Academic extension findings apply to tested versions and threat models, not automatically to every current release.
- Encrypted exports may be safer at rest but less interoperable.

## Volatile Facts Requiring Refresh

- supported KDF algorithms and default parameters;
- key hierarchy and encrypted-field scope;
- biometric implementation and platform requirements;
- browser-extension permissions and fill behavior;
- mobile autofill framework behavior;
- sharing and key-wrapping architecture;
- recovery and emergency-access flows;
- passkey support and portability;
- export formats;
- audit and research findings;
- incident disclosures;
- self-hosting support;
- privacy and telemetry documentation.

## Evidence Gaps

- No code or build verification.
- No cryptographic or KDF benchmark.
- No browser-extension or mobile-autofill test.
- No local Keychain/Keystore inspection.
- No sharing or recovery exercise.
- No passkey migration test.
- No export cleanup verification.
- No self-hosted deployment.
- No malicious-update simulation.
- No telemetry capture.

## Editorial Decision

Retain the current conceptual structure but deepen the explanation of salts, KDF parameters, local key storage, biometrics, shared-vault keys, recovery categories, autofill research, malicious updates, and server-breach boundaries.

Remove the affiliate disclosure from this non-commercial educational page. Add visible authoritative and academic evidence, a formal claim-to-source matrix, and explicit limitations. The guide should remain product-neutral and should never imply all managers implement the same design.
