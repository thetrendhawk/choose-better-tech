import type { ReviewPageContent } from "../../types/review";

export const nordPassReview: ReviewPageContent = {
  categoryLabel: "Password Manager Review",
  title: "NordPass Review (2026): Is It Worth It for Beginners and Families?",
  subtitle: "An evidence-based review of NordPass's beginner-friendly password manager, free plan, family features, security model, value, transparency limits, and Nord ecosystem fit.",
  path: "/reviews/nordpass-review",
  productName: "NordPass",
  applicationCategory: "Password Manager",
  affiliateProvider: "nordpass",
  ctaLabel: "Compare Password Manager Fit",
  executiveSummary: [
    "NordPass is strongest for beginners and mainstream users who want a clean, low-friction password manager with a real free plan, paid family features, broad platform support, and strong value positioning.",
    "The approved research supports a credible security story for mainstream use: NordPass documents device-side encryption, a zero-knowledge model, XChaCha20/Poly1305, Argon2id, MFA, biometrics, passkeys, recovery options, and Cure53 audit claims.",
    "The main tradeoff is usability and value versus maximum transparency. NordPass is closed source, its legal-entity and jurisdiction story is not especially simple, and its trust model depends on audits, documentation, certifications, and vendor behavior rather than open-code verification.",
    "Overall, NordPass is recommended for beginners, families, Nord ecosystem users, value-focused buyers, and small businesses that want credential management without a steep learning curve. It is weaker for open-source-first users, self-hosters, local-control users, and travelers who specifically need 1Password-style Travel Mode."
  ],
  quickSummary: [
    { label: "Overall Rating", value: "Recommended for beginner value" },
    { label: "Good Fit For", value: "Beginners, families, Nord users, and value buyers" },
    { label: "Best Strength", value: "Ease of use and value" },
    { label: "Main Caveat", value: "Closed source and transparency limits" },
    { label: "Recommendation", value: "Strong mainstream option, with caveats" }
  ],
  decisionSnapshot: [
    { label: "Good Fit For", value: "Beginners, mainstream individuals, families, NordVPN/Nord ecosystem users, value-focused buyers, and small-business credential management." },
    { label: "Avoid If", value: "You require open-source apps, self-hosting, maximum local control, the clearest jurisdiction story, or 1Password-style Travel Mode." },
    { label: "Learning Curve", value: "Low for everyday use; moderate when explaining Nord Account plus Master Password, Recovery Code, and closed-source trust tradeoffs." },
    { label: "Value for Money", value: "Strong in the approved research, especially because NordPass has a real free plan and competitively positioned paid tiers." },
    { label: "Privacy Confidence", value: "Medium for mainstream use: vault privacy claims are strong, but metadata, telemetry, and public transparency limits remain." },
    { label: "Our Confidence", value: "High for beginner and family fit; moderate for reliability, jurisdiction clarity, exact pricing, and volatile support details." },
    { label: "Recommendation", value: "Recommended with transparency and reliability caveats." }
  ],
  scoringCategories: [
    { label: "Security & Privacy", weight: "30%" },
    { label: "Ease of Use", weight: "25%" },
    { label: "Value", weight: "20%" },
    { label: "Family & Business Fit", weight: "15%" },
    { label: "Transparency", weight: "5%" },
    { label: "Reliability", weight: "5%" }
  ],
  pros: [
    "Beginner-friendly interface and onboarding",
    "Real free plan with essential vault features",
    "Strong value positioning for mainstream buyers",
    "Family plan includes six separate Premium accounts/vaults in the approved research",
    "Device-side encryption, XChaCha20/Poly1305, Argon2id, MFA, biometrics, and passkeys",
    "Password Health, Data Breach Scanner, secure sharing, documents, and Emergency Access",
    "Useful business plans for small-business credential management"
  ],
  cons: [
    "Closed source",
    "Not self-hostable based on the approved research",
    "Legal-entity and jurisdiction presentation is not especially simple",
    "Free plan is limited to one active session/device context at a time",
    "Recurring complaints around autofill, sync, relogins, bugs, and cancellation friction",
    "No 1Password-style Travel Mode in the reviewed materials",
    "Exact pricing and plan terms are volatile"
  ],
  whoItIsFor: [
    { title: "Beginner password manager buyers", description: "A strong fit for readers who want clean onboarding, simple defaults, broad support, and low setup effort." },
    { title: "Families", description: "A strong fit when six separate Premium vaults, sharing, and Emergency Access match the household's needs." },
    { title: "Nord ecosystem users", description: "A good fit for readers already comfortable with NordVPN or other Nord products and the shared account ecosystem." },
    { title: "Small businesses", description: "A good fit for organizations that need password management, SSO options, shared folders, policies, integrations, and compliance-friendly signals without heavy complexity." }
  ],
  whoShouldSkipIt: [
    { title: "Open-source-first users", description: "NordPass is officially closed source, so Bitwarden is structurally cleaner for open-code review expectations." },
    { title: "Self-hosting or local-control users", description: "NordPass does not present itself as a self-hostable or local-vault-control password manager in the approved research." },
    { title: "Maximum-transparency buyers", description: "The approved research flags jurisdiction and legal-entity ambiguity plus limited public transparency artifacts." },
    { title: "Travel Mode shoppers", description: "Travelers who specifically need 1Password-style Travel Mode should compare 1Password first." }
  ],
  freeVsPaid: {
    title: "Free Plan, Paid Plans, and Value",
    description: "NordPass has a real free plan, but pricing, plan names, trial terms, refund policy, family details, business minimums, and bundle availability are volatile and should be rechecked before purchase-focused updates.",
    freeLabel: "Free-plan strengths",
    limitationsLabel: "Free-plan and commercial caveats",
    paidLabel: "Paid-plan reasons",
    freeStrengths: [
      "Free plan is described as free for life in the approved research",
      "Core vault functions remain available on the free tier",
      "A real free tier makes NordPass stronger for value-focused buyers than paid-only products"
    ],
    freeLimitations: [
      "Free users are limited to one active session/device context at a time",
      "Exact pricing renders inconsistently by market and term length",
      "Trial terms, refund policy, family details, and business details are volatile"
    ],
    paidBenefits: [
      "Easier multi-device use",
      "Secure sharing, Password Health, Data Breach Scanner, documents, and Emergency Access",
      "Family and business workflows that meaningfully differentiate NordPass from the free tier"
    ]
  },
  fullReviewSections: [
    {
      id: "what-is-nordpass",
      title: "What Is NordPass?",
      body: [
        "NordPass is a proprietary password manager launched in 2019 under the Nord Security product family. The approved research places it alongside products such as NordVPN, NordLayer, NordLocker, NordStellar, Coveron, and Saily.",
        "For mainstream readers, NordPass is best understood as a low-friction password manager for individuals, families, and small businesses. Its strongest fit is not maximum transparency; it is ease of use, value, family sharing, and a security model that is credible for ordinary password management."
      ]
    },
    {
      id: "security-privacy",
      title: "Security and Privacy",
      body: [
        "NordPass says vault data is encrypted and decrypted on the user's device under a zero-knowledge model, and that the Master Password, encryption keys, and decryption keys never reach NordPass servers.",
        "The approved research says NordPass uses XChaCha20 for secret-key encryption, Poly1305 for message authentication, and Argon2id with a unique per-user salt to derive the Master Key from the Master Password.",
        "That is a credible mainstream security architecture, but the cipher choice should not be oversold. Implementation quality, key management, app hardening, and operational controls matter more than treating XChaCha20 as an automatic win over every AES-256 competitor."
      ],
      note: "Research confidence: medium-high for mainstream security; medium for privacy because account metadata, telemetry disclosures, and transparency limits remain."
    },
    {
      id: "recovery-mfa-passkeys",
      title: "Master Password, Recovery, MFA, Biometrics, and Passkeys",
      body: [
        "NordPass uses both a Nord Account sign-in and a separate Master Password to unlock the vault. The approved research notes that this two-layer setup can feel clumsy or confusing for some users.",
        "Recovery is practical but strict. A 24-symbol Recovery Code can reset the Master Password if saved. If the user loses both the Master Password and Recovery Code, NordPass offers a full account reset that deletes vault contents.",
        "NordPass supports MFA at the Nord Account layer, biometrics on supported platforms, passkey storage and sharing, and a built-in authenticator for personal accounts in the approved research."
      ],
      note: "Do not imply NordPass can recover vault contents if both Master Password and Recovery Code are lost."
    },
    {
      id: "audits-transparency",
      title: "Audits, Transparency, and Security History",
      body: [
        "NordPass says its consumer and business products have undergone independent Cure53 audits, and the approved research also identifies Nord Security's HackerOne bug bounty program. Business materials cite SOC 2 Type 2 and ISO/IEC 27001:2022.",
        "Those are useful trust signals, but NordPass remains closed source. Its trust model is audited proprietary software, not verifiable-by-design open source.",
        "The approved research did not find a public, well-documented NordPass-specific breach in the reviewed sources. It also did not find a NordPass-specific public transparency report for government or legal requests."
      ],
      note: "Best framing: strong enough for mainstream use, weaker for maximum transparency."
    },
    {
      id: "ease-platforms",
      title: "Ease of Use and Platform Support",
      body: [
        "Ease of use is NordPass's standout strength. WIRED, TechRadar, Tom's Guide, and Security.org broadly describe NordPass as straightforward, accessible, and friendly to everyday users.",
        "The approved research lists support for Windows, macOS, Linux, Android, iOS, a web vault, and major browser extensions, including Chrome, Firefox, Edge, Safari, Opera, Brave, and Chromium-based browsers.",
        "Platform details still require care. Safari extension support is macOS-only in the approved research, and extension biometric unlock is not yet available for Firefox and Safari on macOS."
      ],
      note: "Platform support, biometric support, passkey support, and browser behavior are volatile."
    },
    {
      id: "family-business",
      title: "Family and Business Features",
      body: [
        "NordPass is a strong family fit in the approved research. Family includes six separate Premium accounts/vaults, sharing, and Emergency Access.",
        "For small businesses, the approved research identifies Teams, Business, and Enterprise plans with shared folders, password policies, breach monitoring, SSO options, and integrations such as Vanta, Microsoft Sentinel, and Splunk.",
        "The right framing is small-business credential management, not advanced secrets management. NordPass is strongest when a business wants usability and admin basics without a steep learning curve."
      ]
    },
    {
      id: "pricing-value",
      title: "Pricing, Free Plan, and Value",
      body: [
        "NordPass's strongest commercial fit is value. The approved research identifies a real free plan, competitive advertised starting prices, trial and money-back options, and paid extras such as Password Health, breach monitoring, documents, email masking, and family workflows.",
        "The free plan matters, but it has a meaningful limitation: one active session/device context at a time. Premium removes that friction and adds broader security and sharing features.",
        "Exact pricing renders inconsistently across official pages by market and term length, so purchase-focused content should verify live checkout-facing numbers right before publication."
      ],
      note: "Verify pricing, plan names, trial terms, refund policy, family limits, business minimums, and bundle availability before active promotion."
    }
  ],
  userFeedback: {
    praise: [
      "Beginner-friendly interface",
      "Strong value",
      "Real free plan",
      "Family sharing and Emergency Access",
      "Solid mainstream security architecture",
      "Useful business admin surface"
    ],
    complaints: [
      "Closed-source transparency limits",
      "Autofill failures",
      "Sync delays or stale vault state",
      "Frequent relogin or session friction",
      "Buggy behavior in some environments",
      "Cancellation frustration"
    ]
  },
  alternatives: [
    { title: "1Password", description: "Better for travelers who specifically need Travel Mode and users who prefer 1Password's additional Secret Key model." },
    { title: "Bitwarden", description: "Better for open-source-first users, self-hosters, and buyers who make transparency the top priority." },
    { title: "Browser password managers", description: "Worth considering if the simplest built-in workflow matters more than dedicated password-manager features." },
    { title: "Other premium password managers", description: "Worth comparing if the buyer wants polish but is sensitive to NordPass's legal-entity clarity, support experience, or cancellation concerns." }
  ],
  faqs: [
    { question: "Is NordPass safe?", answer: "Probably yes for mainstream use, with medium-high confidence. The approved research says NordPass documents device-side encryption, a zero-knowledge model, XChaCha20/Poly1305, Argon2id, Cure53 audit claims, and a Nord Security bug bounty. The main caution is that it remains proprietary software." },
    { question: "Is NordPass zero knowledge?", answer: "NordPass says vault data is encrypted and decrypted on the device, and that the Master Password and encryption/decryption keys never reach its servers. Treat this as a vendor claim supported by official technical documentation." },
    { question: "Can NordPass see my passwords?", answer: "Based on the documented architecture, NordPass should not be able to read vault contents. It can still see limited account and service metadata needed for billing, authentication, operations, and legal compliance." },
    { question: "Does NordPass have a free plan?", answer: "Yes. The approved research says the Free plan is free for life with essential vault features, but it limits simultaneous use to one active session or device context at a time." },
    { question: "What happens if I forget my master password?", answer: "If you saved your Recovery Code, you can reset the Master Password. If you lose both the Master Password and Recovery Code, NordPass offers a full account reset that deletes vault contents." },
    { question: "Is NordPass good for families?", answer: "Yes. The approved research says the Family plan includes six separate Premium accounts/vaults, sharing, and Emergency Access." },
    { question: "Is NordPass better than 1Password?", answer: "For beginners and value-focused buyers, NordPass can be a better fit. For travelers who need Travel Mode or users who prefer 1Password's Secret Key model, 1Password remains differentiated." },
    { question: "Is NordPass better than Bitwarden?", answer: "For convenience-first mainstream users, NordPass can be a better fit. For open-source advocates and self-hosters, Bitwarden is usually the clearer choice." },
    { question: "Is NordPass worth paying for?", answer: "Usually yes for individuals and families who want a low-friction mainstream manager. Paid tiers unlock easier multi-device use, sharing, Password Health, breach monitoring, documents, and family workflows." }
  ],
  relatedGuides: [
    { title: "1Password vs NordPass", href: "/comparisons/1password-vs-nordpass", description: "Compare NordPass value and simplicity against 1Password premium family polish." },
    { title: "1Password Review", href: "/reviews/1password-review", description: "Compare NordPass against a premium password manager with Travel Mode and a Secret Key model." },
    { title: "Proton Pass Review", href: "/reviews/proton-pass-review", description: "Compare NordPass against a privacy-focused password manager with open-source apps, aliases, and a strong free plan." },
    { title: "How We Review Software", href: "/about/how-we-review-software", description: "Learn how Choose Better Tech separates evidence, vendor claims, open questions, and recommendations." },
    { title: "Affiliate Disclosure", href: "/affiliate-disclosure", description: "See how affiliate relationships are disclosed without controlling editorial conclusions." },
    { title: "About Choose Better Tech", href: "/about", description: "Learn more about the publication and its reader-first software guidance." }
  ],
  finalCtaHeadline: "Choose a password manager by fit, not hype",
  finalCtaNote: "Review NordPass against your needs, then verify current pricing, trial terms, platform support, family details, and business features before buying.",
  finalVerdictLabel: "Recommended for beginner value, with transparency caveats.",
  finalVerdictBody: "NordPass is a strong mainstream password manager for beginners, families, value-focused buyers, Nord ecosystem users, and small businesses that want credential management without a steep learning curve. Its ease of use, free plan, family setup, XChaCha20-based security architecture, passkeys, breach monitoring, and business admin surface make it easy to recommend for ordinary buyers. It is weaker for open-source-first users, self-hosters, maximum-transparency buyers, and travelers who specifically need 1Password-style Travel Mode. The right conclusion is not that NordPass is universally best, but that it is a strong fit when simplicity, value, and mainstream security matter more than open-source control."
};
