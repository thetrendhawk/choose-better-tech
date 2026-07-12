# How Password Managers Actually Work — Research Record

Checked: 2026-07-12

## Intent

This guide explains the lifecycle of a credential inside a password manager: generation, local encryption, key derivation, authentication, cloud synchronization, local decryption, autofill, sharing, recovery, export, and deletion. It does not rank products or repeat the broader safety verdict.

## Technical framework

1. A user creates an account password or master password.
2. A key-derivation function turns that human-memorable secret into cryptographic key material. Implementations differ; Bitwarden documents PBKDF2 and optional Argon2id, while 1Password combines the account password with a device-generated Secret Key.
3. Vault items are encrypted on the client before cloud synchronization in documented end-to-end encrypted systems.
4. Authentication proves account access; encryption controls whether vault content can be read. These are related but distinct.
5. The service stores encrypted vault data plus operational account information needed to deliver the service.
6. An authorized client downloads ciphertext and decrypts it locally after unlock.
7. Browser extensions and mobile integrations match domains or apps and fill credentials.
8. Sharing normally encrypts a vault or item key for another authorized account rather than sending plaintext.
9. Recovery changes who can restore access and can introduce tradeoffs.
10. Exports may be encrypted or plaintext; plaintext exports must be protected and removed after migration.

## Primary sources reviewed

- NIST password guidance: https://www.nist.gov/cybersecurity-and-privacy/how-do-i-create-good-password
- Bitwarden security white paper: https://bitwarden.com/help/bitwarden-security-white-paper/
- Bitwarden key derivation: https://bitwarden.com/help/kdf-algorithms/
- Bitwarden encryption-key rotation: https://bitwarden.com/help/account-encryption-key/
- 1Password authentication and encryption: https://support.1password.com/authentication-encryption/
- 1Password Secret Key: https://support.1password.com/secret-key-security/
- 1Password Secure Remote Password: https://support.1password.com/secure-remote-password/
- Proton Pass security model: https://proton.me/pass/security
- NordPass security: https://nordpass.com/security/

## Important limits

- Exact algorithms, work factors, metadata treatment, and recovery designs vary by provider.
- “Local encryption” does not protect an already-unlocked or malware-compromised device.
- MFA can protect online account access but generally does not add entropy to an already stolen encrypted vault unless the provider architecture explicitly binds it into encryption.
- Biometric unlock normally releases a locally stored key; the biometric is not the vault encryption key itself.
- Cloud sync is not inherently plaintext sync.
- Self-hosting changes who operates the server but does not remove client, backup, update, and administrator risks.

