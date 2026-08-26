# Canonical Research Repository: Dashlane Review

---
Document Type: Canonical Research Repository
Topic: Dashlane Review
Category: Password Manager Review
Cluster: Password Management
Version: 1.0
Status: Approved Research Repository

Repository Owner: Choose Better Tech
Research Date: 2026-08-26
Next Review: Before publication and after any material plan/security change

Commercial Status: CJ advertiser relationship approved 2026-08-26
Affiliate Network: CJ Affiliate
Editorial Independence: Affiliate approval occurred after Dashlane had already been evaluated as a contextual family-plan alternative in CBT's July 2026 family-password-manager research. Affiliate economics do not determine the verdict, ranking, or inclusion criteria.
---

# Executive Summary

## Verdict

Dashlane is a credible, security-focused mainstream password manager with strong cross-device usability, detailed public security architecture, passkey support, breach/password-health monitoring, account-recovery options, proactive phishing/scam protection, and an unusually large Friends & Family plan supporting 10 independent accounts.

The evidence supports a positive recommendation, but not a universal best-overall label.

Best fits:

- Households or friend groups that need more than the 5–6 seats common among competing family plans.
- Mainstream users who want a polished managed password manager with unlimited passwords and devices.
- Users who value proactive phishing/scam alerts, dark-web/breach monitoring, password-health tooling, and a bundled VPN on the Premium account/plan-manager account.
- Users who prefer a vendor that publishes unusually detailed architecture and incident-response material.

Poorer fits:

- Users who require a permanent free plan. Dashlane ended its Free plan in September 2025.
- Families prioritizing delegated organizer recovery or a mature trusted-contact emergency-access workflow; Dashlane's current personal recovery model is more self-service-oriented through recovery keys, biometrics, backups, and identity verification.
- Users whose top priority is maximum open-source scope or self-hosting.
- Buyers who do not value bundled scam/phishing protection or VPN enough to justify Dashlane's paid-only personal model.

## Editorial Position

Recommended positioning for a dedicated CBT review:

**Best for large households and proactive account protection, with strong security transparency but a paid-only personal model.**

Dashlane should not be inserted into `/best-free-password-managers`, because there is no permanent free personal plan. It should not displace the existing privacy-guide leaders merely because of affiliate approval; CBT's existing privacy research remains defensible. The clearest earned ranking opportunity is a deliberate update to `/best-password-managers-for-families` as the **best option for larger households / groups needing up to 10 accounts**, after the dedicated review is published or simultaneously reviewed.

# Product & Plan Findings

## Personal Plans

Official Dashlane materials checked 2026-08-26 show two consumer plans:

- Premium — one member, unlimited stored passwords, unlimited devices, unlimited secure sharing, dark-web monitoring, passkeys, passwordless login for eligible/new-user contexts, proactive phishing/scam protection, and VPN for Wi-Fi protection.
- Friends & Family — 10 independent accounts under one subscription. The plan manager receives Premium including VPN; invited members receive the listed password-manager/security features without VPN.

Exact current prices are intentionally not frozen in this research record because Dashlane changed personal-plan pricing in 2026 and the public pricing page is dynamic/locale-sensitive. Reverify immediately before publication.

### Evidence classification

| Claim | Classification | Confidence | Checked |
| --- | --- | --- | --- |
| Premium and Friends & Family are current consumer plans | Verified Fact / Volatile | High | 2026-08-26 |
| Friends & Family supports 10 accounts | Verified Fact / Volatile | High | 2026-08-26 |
| Unlimited password storage and unlimited devices | Verified Fact / Volatile | High | 2026-08-26 |
| Plan manager gets VPN; invited family members do not | Verified Fact / Volatile | High | 2026-08-26 |
| Permanent Dashlane Free plan ended September 16, 2025 | Verified Fact | High | 2026-08-26 |
| A 14-day Premium trial is advertised in current personal-plan materials | Verified Fact / Volatile | High | 2026-08-26 |

## Family Differentiation

CBT's July 2026 family-password-manager research had already identified Dashlane Friends & Family as the strongest member-count alternative among the candidate set, with 10 accounts. Current August 2026 official materials reconfirm that limit.

This creates a legitimate editorial distinction independent of monetization:

- 1Password Families: 5 included users in the current CBT evidence.
- Bitwarden Families: 6 users.
- Proton Pass Family: 6 users.
- NordPass Family: 6 accounts.
- RoboForm Family: 5 accounts.
- Dashlane Friends & Family: 10 accounts.

The tradeoff is recovery design. Dashlane's current personal-account recovery is centered on each member's own recovery key, identity verification, biometric recovery where supported, and backups. Friends & Family members are independent; each member must configure their own recovery key. This is less organizer-centric than 1Password family recovery and less like Bitwarden/NordPass trusted-contact emergency access.

# Security Architecture

## Zero-Knowledge Design

Dashlane's current security architecture states that vault data is encrypted locally and decrypted only on authorized user devices. Current technical documentation describes AES-256-CBC with HMAC-SHA256 for vault encryption/integrity, separate device authentication, TLS/HSTS/forward secrecy for transport, and confidential-computing components using AWS Nitro Enclaves in relevant enterprise flows.

### Evidence classification

| Claim | Classification | Confidence | Checked |
| --- | --- | --- | --- |
| Local vault encryption/decryption and zero-knowledge architecture | Vendor technical claim with detailed implementation documentation | High | 2026-08-26 |
| AES-256-CBC + HMAC-SHA256 vault protection | Verified in current vendor architecture documentation | High | 2026-08-26 |
| Separate device-authentication/key model | Verified in current vendor architecture documentation | High | 2026-08-26 |
| AWS Nitro Enclaves used for relevant confidential-computing enterprise components | Verified in current vendor architecture documentation | High | 2026-08-26 |

## Key Derivation

Dashlane announced automatic migration of vaults using PBKDF2 to Argon2d during April–June 2026. Current publication work must verify that the migration is complete for the affected account population before describing Argon2d as universal without qualification.

## MFA, Passkeys, and Passwordless Login

Current official materials support:

- Two-factor authentication.
- Passkey storage/use on compatible sites and apps.
- Passwordless Dashlane login for eligible accounts/new-user contexts.
- Biometric recovery on supported devices when configured.
- A 28-character account-recovery key plus identity verification for personal accounts.

Recovery is deliberately zero-knowledge constrained: without a previously configured recovery method, a locked-out user may need an account reset that erases vault data.

# Recovery & Emergency Planning

Dashlane's current account-recovery key is a strong self-recovery mechanism but should not be conflated with delegated emergency access.

Key properties checked 2026-08-26:

- User generates and stores a 28-character recovery key outside Dashlane.
- Recovery requires the key plus an identity-verification step using email verification or an authenticator-app 2FA token.
- For Master Password accounts, the recovery key is single-use and must be regenerated after use.
- Changing the Master Password invalidates the prior recovery key.
- In Friends & Family, every account is independent and each member needs their own recovery key.
- Dashlane suggests a key may be shared with a trusted contact, but the trusted person cannot independently enter the account unless they also have the required identity-verification access.

Editorial conclusion: strong self-recovery, weaker delegated family/emergency recovery than the strongest family-management competitors.

# Security History & Transparency

## February 2026 Cryptography Downgrade Advisory

Dashlane disclosed a cryptography downgrade issue reported by external researchers. Under a scenario involving full compromise of Dashlane servers, an attacker could potentially inject vault items that caused a downgrade in the encryption model used to derive/protect vault keys. Dashlane says the affected browser-extension versions were fixed in version 6.2544.1 on November 5, 2025 and that it found no evidence of exploitation. Mobile applications were not affected according to Dashlane's advisory.

Editorial treatment:

- Do not hide this issue.
- Do not misstate it as a confirmed vault breach.
- Credit the external research/coordinated disclosure and Dashlane's remediation.
- Explain that it is relevant precisely because password-manager threat models must consider malicious/compromised servers.

## May–June 2026 Brute-Force Account Attack

Dashlane disclosed a brute-force attack targeting the device-registration flow for certain user accounts. The attack attempted to brute-force 2FA/device-registration protections; Dashlane's controls suspended targeted accounts. Dashlane later stated its investigation found no evidence that internal Dashlane systems were compromised and no additional customer impact beyond what it had identified.

Editorial treatment:

- Treat as a real account-security incident, not a server/vault breach.
- Note both the attacker objective and the protective account suspensions.
- Include Dashlane's post-incident controls only if independently reverified from the final advisory.

## Audits & Certifications

Current Dashlane security documentation states:

- Annual SOC 2 Type II audits by independent assessors.
- ISO/IEC 27001 certification.
- Independent annual penetration tests across applications and cloud infrastructure.
- A public vulnerability/bug-bounty program.

Full underlying reports and scopes should be checked through Dashlane's Trust Center before publication if CBT intends to make granular audit-scope claims.

## Source Transparency

Dashlane states that client application source code is publicly available and explicitly linked its 2025/2026 external cryptographic review to that openness. Do not overstate this as a fully open-source service or evidence that deployed server behavior is fully inspectable.

# Privacy Position

Dashlane has a strong documented zero-knowledge vault model and detailed technical disclosure. That does not mean Dashlane processes no account, billing, support, security, telemetry, website, anti-abuse, or service-operation data.

CBT's existing `/best-password-managers-for-privacy` conclusion remains defensible: Dashlane is credible and transparent but does not currently show a distinct enough privacy advantage to displace Proton Pass, Bitwarden, 1Password, KeePassXC, NordPass, or Enpass for the specific privacy-intent framework used by that guide.

# Feature Positioning

Evidence-backed strengths:

- Unlimited passwords and devices on current paid personal plans.
- Passkey support.
- Password Health and breach notifications.
- Dark Web Monitoring on current paid personal plans.
- Secure sharing.
- Account-recovery key and biometric recovery where configured.
- Proactive website phishing/scam warnings.
- 10-account Friends & Family plan.
- VPN bundled for Premium / family plan manager.
- Detailed current security architecture and incident disclosure.

Evidence-backed limitations/tradeoffs:

- No permanent free personal tier.
- Paid personal pricing changed in 2026 and requires close-to-publication verification.
- Family recovery is primarily member-by-member self-recovery, not an organizer-centric recovery system.
- VPN benefit is not extended to all Friends & Family members.
- Public security history includes a fixed cryptographic downgrade issue and a 2026 brute-force/device-registration attack that should be discussed, not omitted.
- Strong transparency does not equal full open-source scope or self-hosting.

# Recommended CBT Review Verdict

## Best for

- Large families / groups needing up to 10 accounts.
- Mainstream users who want active phishing/scam protection integrated with a password manager.
- Users who value public technical security documentation and transparent incident advisories.
- Buyers who find the bundled VPN useful.

## Skip if

- You need a permanent free plan.
- You want a family organizer to recover other members' accounts through a mature delegated recovery workflow.
- You require self-hosting or broad open-source infrastructure visibility.
- You already have a VPN and do not value Dashlane's additional proactive security features enough to justify its paid-only model.

## Provisional rating approach

Do not assign a numeric rating until the normal CBT review rubric is applied consistently against existing password-manager reviews. Affiliate compensation must not influence scoring.

# Publication Gate

Before publishing `/reviews/dashlane-review`:

1. Reverify current personal-plan prices, renewal terms, refund policy, and trial language.
2. Reverify platform/browser support and passwordless-login availability.
3. Recheck the final June 2026 brute-force advisory and the February 2026 cryptography advisory for any later updates.
4. Recheck Trust Center audit/certification scope if granular claims are used.
5. Confirm the CJ tracking destination still resolves to the intended Dashlane personal-plan landing page.
6. Use only the centralized `src/data/affiliateLinks.ts` registry and existing `AffiliateButton` tracking/disclosure system.
7. Preserve the affiliate-term discrepancies in internal operations records; do not publish commission details unless needed and clarified.

# Primary Sources Checked 2026-08-26

- Dashlane personal pricing: https://www.dashlane.com/pricing-personal
- Compare Dashlane personal plans: https://support.dashlane.com/hc/en-us/articles/360001166969-Compare-Dashlane-personal-plans
- Friends & Family plan: https://support.dashlane.com/hc/en-us/articles/360013369820-Dashlane-Friends-Family-plan
- Free-plan discontinuation: https://www.dashlane.com/blog/dashlane-free-ending
- Security Principles & Architecture: https://www.dashlane.com/security/white-paper
- Architecture overview: https://support.dashlane.com/hc/en-us/articles/32877446916498-3-Architecture-overview
- Credential security detail: https://support.dashlane.com/hc/en-us/articles/32877433567634-4-Credential-security-in-detail
- Passkeys: https://support.dashlane.com/hc/en-us/articles/7888558064274-Passkeys-in-Dashlane
- Account recovery key: https://support.dashlane.com/hc/en-us/articles/11004803881490-Set-up-and-use-Dashlane-s-account-recovery-key
- Compliance/certifications: https://support.dashlane.com/hc/en-us/articles/32877605633042-9-Compliance-certifications
- Security operations: https://support.dashlane.com/hc/en-us/articles/32877595753746-8-Security-operations
- Cryptography downgrade advisory: https://support.dashlane.com/hc/en-us/articles/33346483084050-Security-advisory-Cryptography-downgrade-issue
- Brute-force account advisory: https://support.dashlane.com/hc/en-us/articles/36038764990866-Security-advisory-Brute-force-attack-on-Dashlane-user-accounts
- Cryptography migration FAQ: https://support.dashlane.com/hc/en-us/articles/34419669892242-FAQ-about-updating-your-account-s-cryptography-for-enhanced-security

# Internal CBT Sources

- `docs/research/best-password-managers-for-families-research.md`
- `docs/research/best-password-managers-for-privacy-research.md`
- `docs/research/are-password-managers-safe-research.md`
- `docs/monetization/dashlane-affiliate-readiness-2026-08-26.md`
- `docs/monetization/dashlane-link-capture-2026-08-26.md`
