import type { ReviewPageContent } from "../../types/review";

export const dashlaneReview: ReviewPageContent = {
  categoryLabel: "Password Manager Review",
  title: "Dashlane Review 2026: Strong Security, But Is It Worth Paying For?",
  subtitle: "A documentation-based review of Dashlane's security architecture, 2026 security advisories, passkeys, recovery, proactive phishing protection, family plan, and paid-only tradeoffs.",
  path: "/reviews/dashlane-review",
  productName: "Dashlane",
  applicationCategory: "Password Manager",
  affiliateProvider: "dashlane",
  ctaLabel: "See Dashlane Personal Plans",
  editorialMeta: {
    authorName: "Aaron Evans",
    datePublished: "2026-08-26",
    dateModified: "2026-08-26",
    displayDate: "August 26, 2026"
  },
  executiveSummary: [
    "Dashlane is a credible paid password manager with detailed public security documentation, unlimited password and device support on current personal plans, passkeys, breach and password-health tools, proactive phishing/scam alerts, and a standout Friends & Family plan for up to 10 independent accounts.",
    "Its security story is stronger than a marketing badge. Dashlane documents local vault encryption and decryption, a zero-knowledge design, separate device authentication, AES-256-CBC with HMAC-SHA256, and a 2026 migration from older PBKDF2 vaults to Argon2d. It also publishes security advisories instead of pretending problems never happen.",
    "Two 2026 events deserve direct treatment: a cryptographic downgrade issue disclosed after a fix, and a brute-force attack that targeted certain account device-registration flows. Dashlane reported no evidence of exploitation of the cryptographic issue and no evidence that its internal systems were compromised in the account attack.",
    "Overall, Dashlane is recommended for larger households and mainstream users who value proactive account protection. It is weaker for permanent-free-plan seekers, self-hosters, maximum-open-source buyers, and families that prioritize organizer-driven recovery or trusted-contact emergency access."
  ],
  quickSummary: [
    { label: "Overall Rating", value: "Recommended with clear tradeoffs" },
    { label: "Good Fit For", value: "Large households and proactive-security buyers" },
    { label: "Best Strength", value: "10-account family plan plus security transparency" },
    { label: "Main Caveat", value: "Paid-only personal model and weaker delegated recovery" },
    { label: "Review Type", value: "Documentation-based; no hands-on UX claim" }
  ],
  decisionSnapshot: [
    { label: "Good Fit For", value: "Mainstream users, larger households, and buyers who value phishing/scam alerts, breach monitoring, passkeys, and detailed security documentation." },
    { label: "Avoid If", value: "You need a permanent free plan, self-hosting, maximum open-source scope, or organizer-driven family recovery." },
    { label: "Family Fit", value: "Strong for larger groups: Friends & Family supports 10 independent accounts." },
    { label: "Recovery", value: "Strong self-recovery through a recovery key and identity verification; less delegated than the strongest family-recovery competitors." },
    { label: "Privacy Confidence", value: "Medium-high for vault protection; account, billing, support, and operational data still exist outside zero-knowledge vault claims." },
    { label: "Our Confidence", value: "High on documented security, plan structure, family size, and incident history; lower on untested day-to-day UX." },
    { label: "Recommendation", value: "Recommended for the right buyer, not a universal best password manager." }
  ],
  scoringCategories: [
    { label: "Security & Privacy", weight: "30%" },
    { label: "Family & Recovery", weight: "20%" },
    { label: "Features", weight: "20%" },
    { label: "Value", weight: "15%" },
    { label: "Transparency", weight: "10%" },
    { label: "Ease of Use Evidence", weight: "5%" }
  ],
  pros: [
    "Detailed current zero-knowledge and cryptographic architecture documentation",
    "Unlimited passwords and devices on current paid personal plans",
    "Friends & Family supports 10 independent accounts",
    "Passkey support, 2FA, Password Health, breach notifications, and dark-web monitoring",
    "Proactive phishing/scam alerts add protection beyond basic vault storage",
    "28-character account recovery key plus identity verification",
    "Transparent public advisories for the 2026 cryptographic and account-attack events",
    "VPN included for the Premium user or Friends & Family plan manager"
  ],
  cons: [
    "No permanent free personal plan",
    "Exact pricing and renewal terms are volatile and changed in 2026",
    "Friends & Family recovery is member-by-member rather than organizer-centric",
    "VPN access is not included for every Friends & Family member",
    "Not a self-hosting choice and should not be described as a fully open-source service",
    "Recent security issues require context even though Dashlane reported no vault breach from them",
    "This review does not claim hands-on UX or reliability testing"
  ],
  whoItIsFor: [
    { title: "Larger households", description: "Dashlane's 10-account Friends & Family plan is a real differentiator when five or six seats are not enough." },
    { title: "Proactive-security buyers", description: "A strong fit if phishing/scam warnings, breach notifications, Password Health, dark-web monitoring, and passkeys matter alongside password storage." },
    { title: "Mainstream paid-plan users", description: "A reasonable fit if you want unlimited devices and passwords without managing your own sync or server." },
    { title: "Transparency-minded mainstream users", description: "Dashlane publishes unusually detailed architecture and incident material, even though the whole service is not fully open source." }
  ],
  whoShouldSkipIt: [
    { title: "Permanent-free-plan seekers", description: "Dashlane ended its Free plan in 2025, so Bitwarden, Proton Pass, or NordPass are better places to start if paying is a dealbreaker." },
    { title: "Self-hosters", description: "Dashlane is a managed cloud service, not a self-hosting or local-vault-control product." },
    { title: "Families prioritizing delegated recovery", description: "Each Friends & Family member manages an independent account and recovery key; 1Password and Bitwarden offer more explicit family/trusted-contact recovery models." },
    { title: "Buyers who already have overlapping tools", description: "If you already pay for a VPN and separate phishing/security tools, some of Dashlane's bundle value may be redundant." }
  ],
  freeVsPaid: {
    title: "Free Trial, Paid Plans, and Value",
    description: "Dashlane no longer has a permanent Free plan. Current personal offerings are paid plans, and exact prices should be checked at purchase because Dashlane changed personal-plan pricing in 2026.",
    freeLabel: "What you can try",
    limitationsLabel: "Commercial caveats",
    paidLabel: "Paid-plan reasons",
    freeStrengths: [
      "Current personal-plan materials advertise a limited Premium trial",
      "You can evaluate the product before committing to a full annual subscription",
      "Dashlane supports imports from browsers and competing password managers"
    ],
    freeLimitations: [
      "No permanent Free plan",
      "Exact prices and renewal terms are volatile and locale-sensitive",
      "The bundled VPN benefits the Premium user or family plan manager, not every family member"
    ],
    paidBenefits: [
      "Unlimited passwords and devices",
      "Unlimited secure sharing on current personal plans",
      "Passkeys, breach monitoring, Password Health, and proactive phishing/scam protection",
      "Friends & Family coverage for up to 10 independent accounts"
    ]
  },
  fullReviewSections: [
    {
      id: "what-is-dashlane",
      title: "What Is Dashlane in 2026?",
      body: [
        "Dashlane is a cloud-managed password manager for individuals, families, and organizations. For consumers, the current lineup centers on Premium and Friends & Family rather than a permanent free tier.",
        "The product is broader than basic password storage. Current official materials include passkeys, Password Health, breach notifications, dark-web monitoring, secure sharing, proactive phishing/scam alerts, and a VPN benefit for the Premium user or family plan manager."
      ]
    },
    {
      id: "security-architecture",
      title: "Security Architecture and Zero Knowledge",
      body: [
        "Dashlane says vault data is encrypted locally and decrypted only on authorized devices under a zero-knowledge architecture. Its current technical documentation describes AES-256-CBC with HMAC-SHA256 for vault protection, separate device authentication, and protected transport using TLS and related controls.",
        "Dashlane also documents confidential-computing components using AWS Nitro Enclaves for relevant enterprise flows. That is useful architecture evidence, but enterprise secure-enclave features should not be confused with the basic consumer vault model.",
        "Zero knowledge does not mean Dashlane knows nothing about the account. Billing, support, security, website, anti-abuse, and service-operation data sit outside the narrow claim that the provider cannot decrypt protected vault contents."
      ],
      note: "Security confidence is high for what Dashlane documents, but implementation quality and operational behavior matter more than cipher names alone."
    },
    {
      id: "argon2-migration",
      title: "Argon2d Migration and Key Protection",
      body: [
        "In 2026, Dashlane announced an automatic migration of vaults using PBKDF2 to Argon2d. The migration was intended to strengthen resistance to brute-force attacks against encrypted vault material.",
        "That is directionally positive, but it should not be reduced to an algorithm-marketing claim. Key derivation is only one layer of account protection, alongside device trust, MFA, recovery, application hardening, and server-side controls."
      ]
    },
    {
      id: "security-events",
      title: "The Two 2026 Security Events You Should Know About",
      body: [
        "In February 2026, Dashlane publicly described a cryptographic downgrade issue reported by external researchers. Under a scenario involving full compromise of Dashlane servers, an attacker could have injected vault items that weakened the encryption model used to derive or protect keys. Dashlane says the affected browser extension was fixed in November 2025 and that it found no evidence of exploitation.",
        "In late May and early June 2026, an external party launched a brute-force attack against certain Dashlane user accounts by targeting the device-registration flow and attempting to defeat verification protections. Dashlane's controls suspended targeted accounts. After investigation, Dashlane said it found no evidence that its internal systems were compromised and no additional impact beyond the identified account targeting.",
        "Neither event should be hidden, and neither should be exaggerated into a confirmed vault-data breach without evidence. The useful signal is how the product was attacked, what failed or held, how quickly it was fixed, and how clearly the company disclosed the result."
      ]
    },
    {
      id: "passkeys-recovery",
      title: "Passkeys, MFA, Passwordless Login, and Recovery",
      body: [
        "Dashlane supports passkey storage and use on compatible sites and apps, along with two-factor authentication and passwordless Dashlane login in eligible account contexts.",
        "For personal recovery, Dashlane offers an optional 28-character recovery key. Recovery requires the saved key plus an identity-verification step such as an email verification code or authenticator-app token. For Master Password accounts, the recovery key is single-use and must be regenerated after it is used.",
        "This is strong self-recovery, but it is not the same as delegated emergency access. A trusted contact can hold a recovery key, yet that person cannot independently enter the vault unless they also have the required identity-verification access."
      ]
    },
    {
      id: "family-plan",
      title: "Friends & Family: Dashlane's Clearest Differentiator",
      body: [
        "Dashlane Friends & Family supports the subscriber plus nine other members, for 10 independent accounts under one subscription. Each member's account remains private unless the member deliberately shares items.",
        "That member count is stronger than the five- or six-person limits in CBT's current primary family recommendations. If your household includes partners, children, parents, roommates, or chosen family, the extra seats can matter more than small feature differences.",
        "The tradeoff is recovery governance. Each person needs to configure their own recovery method. Families that want an organizer to help recover another member's account should compare 1Password carefully, while trusted-contact emergency-access users should also compare Bitwarden or NordPass."
      ],
      note: "The family member-count advantage is independently supported and predates CBT's Dashlane affiliate approval."
    },
    {
      id: "privacy-transparency",
      title: "Privacy, Audits, and Transparency",
      body: [
        "Dashlane's current materials state that it undergoes annual SOC 2 Type II audits, maintains ISO/IEC 27001 certification, performs independent annual penetration testing, and operates a public vulnerability program.",
        "Dashlane also says client application source code is publicly available and explicitly connected that openness to the external research that uncovered the cryptographic downgrade issue. That is a meaningful transparency signal, but it is not the same as a fully open-source service or a guarantee that deployed server behavior is independently inspectable.",
        "For privacy-first buyers, Dashlane is credible but not uniquely dominant. Proton Pass offers a stronger integrated privacy-and-alias story, Bitwarden offers broader open-source and self-hosting visibility, and KeePassXC minimizes mandatory provider knowledge through local storage."
      ]
    },
    {
      id: "pricing-value",
      title: "Pricing and Value",
      body: [
        "Dashlane's consumer model is now paid-first. That makes the value question more demanding than it is for password managers with permanent free tiers.",
        "The strongest value case is not just password storage. It is the combination of unlimited passwords and devices, proactive phishing/scam protection, breach and password-health tooling, secure sharing, passkeys, the family plan's 10-account capacity, and the VPN benefit for the Premium user or family plan manager.",
        "Exact prices, renewal terms, discounts, and checkout conditions change, so this review intentionally avoids freezing a number that can age badly. Verify the current checkout terms before buying."
      ]
    },
    {
      id: "alternatives-context",
      title: "How Dashlane Compares With the Strongest Alternatives",
      body: [
        "Choose 1Password if polished family administration, organizer recovery, and its Secret Key model matter more than Dashlane's larger family seat count.",
        "Choose Bitwarden if a permanent free tier, open-source visibility, self-hosting, and value are higher priorities.",
        "Choose Proton Pass if encrypted metadata, email aliases, and Proton ecosystem privacy are the main attraction.",
        "Choose NordPass if you want a simpler value-oriented option with a permanent free tier and a six-account family plan. Choose Dashlane when its 10-account family capacity and proactive scam/phishing protection are the features you will actually use."
      ]
    }
  ],
  userFeedbackTitle: "Evidence Strengths and Remaining Unknowns",
  userFeedbackDescription: "This review does not claim hands-on testing. These are the strongest documented signals and the areas that still require user-specific evaluation.",
  userFeedbackPraiseLabel: "Strong documented signals",
  userFeedbackComplaintLabel: "What remains uncertain",
  userFeedback: {
    praise: [
      "Detailed current security architecture",
      "Transparent 2026 incident advisories",
      "10-account Friends & Family structure",
      "Passkeys and multiple recovery options",
      "Proactive phishing/scam protection"
    ],
    complaints: [
      "No permanent free plan",
      "Exact renewal pricing is volatile",
      "Day-to-day autofill and sync reliability were not hands-on tested for this review",
      "Family recovery is less organizer-centric than 1Password",
      "The VPN bundle may be redundant for users who already pay for a VPN"
    ]
  },
  alternatives: [
    { title: "1Password", description: "Better for polished family administration, organizer recovery, and users who value the additional Secret Key model." },
    { title: "Bitwarden", description: "Better for free-plan value, open-source visibility, self-hosting, and buyers who prioritize transparency." },
    { title: "Proton Pass", description: "Better for privacy-focused users who want email aliases, encrypted metadata positioning, and Proton ecosystem integration." },
    { title: "NordPass", description: "Better for value-focused buyers who still want a permanent free tier and simpler mainstream positioning." }
  ],
  faqs: [
    { question: "Is Dashlane safe?", answer: "Dashlane has a credible documented security architecture for mainstream password management, including local vault encryption, zero-knowledge design, device authentication, MFA, recovery options, and public security advisories. No password manager is risk-free, so recent vulnerabilities and account attacks still deserve context." },
    { question: "Has Dashlane been hacked?", answer: "Dashlane disclosed a fixed cryptographic downgrade vulnerability and a separate 2026 brute-force attack targeting certain user-account device-registration flows. Dashlane reported no evidence that the cryptographic issue was exploited and no evidence that its internal systems were compromised in the account attack. Those events are not the same as a confirmed vault-data breach." },
    { question: "Does Dashlane have a free plan?", answer: "No permanent Free plan. Dashlane ended its Free plan in September 2025 and now centers its consumer offering on paid personal plans, with trial availability that can change." },
    { question: "How many people can use Dashlane Friends & Family?", answer: "Current official materials say the Friends & Family subscription supports 10 independent accounts: the plan manager plus nine other members." },
    { question: "Can Dashlane family members see each other's passwords?", answer: "Not by default. Each Friends & Family account is independent and private. Members see items only when someone deliberately shares them." },
    { question: "What happens if I forget my Dashlane Master Password?", answer: "If you previously configured an account recovery key, you can use the saved key plus an identity-verification step to regain access. Without a configured recovery method, a locked-out user may need to reset the account and lose stored vault data." },
    { question: "Does Dashlane support passkeys?", answer: "Yes. Dashlane documents support for saving, using, and deleting passkeys on compatible websites and apps." },
    { question: "Is Dashlane better than 1Password?", answer: "Dashlane is more compelling for large households because Friends & Family supports 10 accounts. 1Password remains stronger for polished family administration and organizer recovery. The better choice depends on which tradeoff matters more." },
    { question: "Is Dashlane better than Bitwarden?", answer: "Dashlane offers a more paid, bundled approach with proactive scam/phishing protection and a 10-account family plan. Bitwarden is stronger for free-plan value, open-source visibility, self-hosting, and low-cost family sharing." },
    { question: "Does Dashlane include a VPN?", answer: "Current personal-plan materials include VPN access for the Premium user and for the Friends & Family plan manager. Other Friends & Family members do not receive the VPN benefit." }
  ],
  sourceLinks: [
    { title: "Dashlane Personal Plans", publisher: "Dashlane", href: "https://www.dashlane.com/pricing-personal", note: "Current personal-plan structure and feature comparison." },
    { title: "Compare Dashlane Personal Plans", publisher: "Dashlane Support", href: "https://support.dashlane.com/hc/en-us/articles/360001166969-Compare-Dashlane-personal-plans", note: "Plan feature details; updated in August 2026." },
    { title: "Dashlane Friends & Family Plan", publisher: "Dashlane Support", href: "https://support.dashlane.com/hc/en-us/articles/360013369820-Dashlane-Friends-Family-plan", note: "Ten-account structure and independent-member model." },
    { title: "Security Principles & Architecture", publisher: "Dashlane", href: "https://www.dashlane.com/security/white-paper", note: "Zero-knowledge, encryption, device-authentication, and architecture detail." },
    { title: "Account Recovery Key", publisher: "Dashlane Support", href: "https://support.dashlane.com/hc/en-us/articles/11004803881490-Set-up-and-use-Dashlane-s-account-recovery-key", note: "Personal recovery requirements and Friends & Family member independence." },
    { title: "Cryptography Downgrade Advisory", publisher: "Dashlane Support", href: "https://support.dashlane.com/hc/en-us/articles/33346483084050-Security-advisory-Cryptography-downgrade-issue", note: "Fixed browser-extension issue and no-evidence-of-exploitation statement." },
    { title: "Brute Force Account Attack Advisory", publisher: "Dashlane Support", href: "https://support.dashlane.com/hc/en-us/articles/36038764990866-Security-advisory-Brute-force-attack-on-Dashlane-user-accounts", note: "May/June 2026 account-targeting incident and final investigation result." },
    { title: "Compliance & Certifications", publisher: "Dashlane Support", href: "https://support.dashlane.com/hc/en-us/articles/32877605633042-9-Compliance-certifications", note: "SOC 2 Type II and ISO/IEC 27001 statements." }
  ],
  relatedGuides: [
    { title: "Best Password Managers for Families", href: "/best-password-managers-for-families", description: "Compare family size, recovery, sharing, privacy, and household tradeoffs." },
    { title: "Best Password Managers for Privacy", href: "/best-password-managers-for-privacy", description: "Compare Dashlane's privacy posture with Proton Pass, Bitwarden, 1Password, KeePassXC, NordPass, and Enpass." },
    { title: "Best Free Password Managers", href: "/best-free-password-managers", description: "Compare permanent free alternatives now that Dashlane no longer has a Free plan." },
    { title: "Are Password Managers Safe?", href: "/are-password-managers-safe", description: "Understand vault threats, server compromise, recovery, passkeys, MFA, and incident history." }
  ],
  finalCtaHeadline: "Dashlane is worth considering if its specific strengths match your needs",
  finalCtaNote: "The strongest case is for larger households and users who value proactive phishing/scam protection. Verify current plan pricing before buying.",
  finalVerdictLabel: "Recommended for larger households and proactive-security buyers",
  finalVerdictBody: "Dashlane is a credible, security-forward password manager with a real 10-account family advantage and unusually detailed public security documentation. It is not the best fit for free-plan seekers, self-hosters, or families that prioritize organizer-driven recovery, but it earns a clear recommendation when those tradeoffs are acceptable."
};
