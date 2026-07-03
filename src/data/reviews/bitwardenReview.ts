import type { ReviewPageContent } from "../../types/review";

export const bitwardenReview: ReviewPageContent = {
  categoryLabel: "Password Manager Review",
  title: "Bitwarden Review (2026): Is It Worth It for Free Plans and Self-Hosting?",
  subtitle: "An evidence-based review of Bitwarden's free plan, transparency, security model, self-hosting, business fit, UX tradeoffs, and open-source licensing nuance.",
  path: "/reviews/bitwarden-review",
  productName: "Bitwarden",
  applicationCategory: "Password Manager",
  affiliateProvider: "bitwarden",
  ctaLabel: "See How We Review Software",
  executiveSummary: [
    "Bitwarden is strongest for readers who want value, transparency, flexibility, and technical optionality. The approved research says its free plan includes unlimited passwords, unlimited devices, cross-device sync, password generation, passkey management, and free sharing with one other user.",
    "Its trust case is unusually evidence-heavy for a mainstream password manager: public technical documentation, public audit history, public repositories, a security whitepaper, and a public vulnerability disclosure program.",
    "The main tradeoff is not safety versus danger. It is value and transparency versus premium polish. Bitwarden is good enough for beginners, but the approved research says 1Password is usually the safer recommendation for the smoothest mainstream UX.",
    "Bitwarden is not a universal winner. It is best for free-plan seekers, transparency-minded users, technical users, self-hosters, value-conscious families, and many business admins. 1Password may be better for polish, Proton Pass for privacy ecosystem and aliases, and NordPass for simpler mainstream UX."
  ],
  quickSummary: [
    { label: "Overall Rating", value: "Recommended for value and transparency" },
    { label: "Good Fit For", value: "Free-plan seekers, technical users, families, and self-hosters" },
    { label: "Best Strength", value: "Free plan plus public security evidence" },
    { label: "Main Caveat", value: "Less polished than premium-first rivals" },
    { label: "Recommendation", value: "Strong fit, not a universal winner" }
  ],
  decisionSnapshot: [
    { label: "Good Fit For", value: "Free-plan seekers, open-source/transparency-minded users, technical users, self-hosting users, value-conscious families, and business or enterprise admins." },
    { label: "Avoid If", value: "You want maximum premium polish, the simplest mainstream UX, Proton-style privacy ecosystem and aliases, or self-hosting without operational work." },
    { label: "Learning Curve", value: "Low for basic hosted use; moderate when explaining recovery limits, licensing nuance, and self-hosting responsibilities." },
    { label: "Value for Money", value: "Very strong in the approved research because the free tier is unusually complete and paid tiers remain value-oriented." },
    { label: "Privacy Confidence", value: "Medium-high: strong architecture and transparency, with open questions around legal-request handling and some telemetry details." },
    { label: "Our Confidence", value: "High for free-plan, security-evidence, transparency, business, and self-hosting fit; moderate for UX polish, support reputation, and volatile licensing details." },
    { label: "Recommendation", value: "Recommended when value, transparency, flexibility, or self-hosting matter more than maximum polish." }
  ],
  scoringCategories: [
    { label: "Security & Privacy", weight: "30%" },
    { label: "Free Plan & Value", weight: "20%" },
    { label: "Transparency", weight: "20%" },
    { label: "Ease of Use", weight: "10%" },
    { label: "Self-Hosting & Admin", weight: "15%" },
    { label: "Reliability", weight: "5%" }
  ],
  pros: [
    "Unusually complete free plan in the approved research",
    "Unlimited passwords, unlimited devices, sync, passkeys, and one-to-one sharing on the free plan",
    "Public security whitepaper, public audits, public repositories, and public vulnerability disclosure",
    "Strong transparency compared with most mainstream password managers",
    "Real self-hosting path for technical users and organizations",
    "Broad platform support, including CLI and F-Droid references in the approved research",
    "Credible Teams and Enterprise feature set"
  ],
  cons: [
    "Not the most polished mainstream UX option",
    "Family product is solid but not obviously easiest-in-class",
    "Open-source wording needs nuance because current docs include AGPL, Bitwarden License v1.0, and source-available language",
    "Standard users cannot have Bitwarden retrieve or reset a forgotten master password",
    "Self-hosting requires Docker, patching, certificates, backups, and maintenance",
    "Legal-request handling was not verified from a dedicated legal-process document",
    "Pricing, platform support, passkey workflows, and licensing language are volatile"
  ],
  whoItIsFor: [
    { title: "Free-plan seekers", description: "A strong fit because the approved research says the free plan already includes unlimited passwords, unlimited devices, sync, passkeys, generation, and sharing with one other user." },
    { title: "Transparency-minded users", description: "A strong fit for readers who value public code, public audits, a security whitepaper, and public vulnerability disclosure." },
    { title: "Technical users and self-hosters", description: "A strong fit if you understand the operational work behind Docker, certificates, patching, backups, and maintenance." },
    { title: "Value-conscious families", description: "A good fit for households that want lower-cost sharing and six premium accounts in the Families plan described by the approved research." },
    { title: "Business and enterprise admins", description: "A good fit for teams that need sharing, event logs, API access, Directory Connector, SCIM, SSO on Enterprise, account recovery, or optional self-hosting." }
  ],
  whoShouldSkipIt: [
    { title: "Premium-polish shoppers", description: "1Password is more often the safer recommendation when the goal is the smoothest onboarding, family UX maturity, and premium-feeling interface." },
    { title: "Simplest-UX buyers", description: "NordPass may appeal more if you want a simpler consumer-friendly interface and do not prioritize open-source visibility." },
    { title: "Privacy ecosystem and alias users", description: "Proton Pass may be a better fit if Swiss privacy framing, Proton ecosystem integration, and built-in aliases matter most." },
    { title: "Nontechnical self-hosting hopefuls", description: "Do not choose self-hosting just because it sounds more private. The approved research says serious self-hosting requires real operational responsibility." }
  ],
  freeVsPaid: {
    title: "Free Plan, Paid Plans, and Value",
    description: "Bitwarden's strongest mainstream advantage is its free-plan value. Pricing, plan names, trial terms, refund policy, family details, business features, and passkey workflows are volatile and should be rechecked before purchase-focused updates.",
    freeLabel: "Free-plan strengths",
    limitationsLabel: "Free-plan and plan caveats",
    paidLabel: "Paid-plan reasons",
    freeStrengths: [
      "Unlimited passwords and unlimited devices in the approved research",
      "Cross-device sync, password generation, and passkey management",
      "Free sharing with one other user"
    ],
    freeLimitations: [
      "Some premium features require payment, including integrated TOTP, encrypted attachments, and broader emergency features",
      "Broader family and team sharing require paid plans",
      "Pricing, plan names, trial terms, refund policy, and feature boundaries are volatile"
    ],
    paidBenefits: [
      "Integrated TOTP, attachments, emergency access, advanced 2FA options, and vault-health tools",
      "Families plan for more than one free-share relationship and low-cost household sharing",
      "Teams and Enterprise features such as event logs, API access, Directory Connector, SCIM, SSO on Enterprise, account recovery, and optional self-hosting"
    ]
  },
  fullReviewSections: [
    {
      id: "what-is-bitwarden",
      title: "What Is Bitwarden?",
      body: [
        "Bitwarden is a freemium password manager for individuals, families, businesses, and enterprises. The approved research also identifies adjacent developer products such as Secrets Manager and Passwordless.dev.",
        "For mainstream readers, Bitwarden is best understood as a serious password manager with unusually strong free value, public security evidence, visible code, low-cost family options, business credibility, and real self-hosting optionality.",
        "Its strongest fit is not luxury UX. It is value, transparency, flexibility, and technical control."
      ]
    },
    {
      id: "free-plan-value",
      title: "Free Plan and Paid Value",
      body: [
        "Bitwarden's free plan is one of the clearest strengths in the approved research. It includes unlimited passwords, unlimited devices, cross-device sync, password generation, passkey management, and free sharing with one other user.",
        "For many casual or mainstream users, that may be enough. Paid plans become more relevant when users want integrated TOTP, encrypted attachments, emergency access, advanced two-step login options, vault-health tools, broader household sharing, or business controls.",
        "The approved research treats current pricing as directly documented but still volatile. Pricing, plan names, trial terms, refund policy, family details, business features, and passkey workflows should be rechecked before purchase-focused updates."
      ]
    },
    {
      id: "security-privacy",
      title: "Security and Privacy",
      body: [
        "Bitwarden's primary security model is local encryption with documented zero-knowledge claims. The approved research says Bitwarden's whitepaper describes client-side key generation, local encryption, and client-side decryption.",
        "Bitwarden says it never stores or can access the master password or cryptographic keys, and that Vault Data is encrypted and inaccessible to Bitwarden. Treat those as vendor claims supported by public technical documentation and audit history, not as a reason to stop thinking about threat models.",
        "Privacy has a practical SaaS nuance. The approved research says Bitwarden distinguishes encrypted Vault Data from Administrative Data, uses subprocessors, and relies on a normal SaaS stack. It did not verify detailed legal-request handling from a dedicated legal-process document."
      ],
      note: "Preserved open question: current legal-request handling and law-enforcement transparency positioning were not verified from a dedicated legal-process document."
    },
    {
      id: "open-source-transparency",
      title: "Open Source and Transparency Nuance",
      body: [
        "Bitwarden is more transparent than most mainstream password managers, but the wording needs care. The approved research says public repositories exist and that official materials describe the codebase as available on GitHub.",
        "The same research says current official wording includes repositories covered by either AGPL v3.0 or the Bitwarden License v1.0, while the whitepaper uses the phrase open source and source available code.",
        "The safest editorial phrasing is that Bitwarden is substantially open and inspectable, but not uniformly open source in the strictest simple sense."
      ],
      note: "Preserved open question: exact present licensing boundaries across newer SDK/client components should be rechecked."
    },
    {
      id: "recovery-mfa-passkeys",
      title: "Master Password Recovery, MFA, and Passkeys",
      body: [
        "Bitwarden's zero-knowledge model has a real recovery tradeoff. The approved research says Bitwarden cannot access, retrieve, or reset a standard user's master password.",
        "Recovery depends on prior setup or account context: password hint, emergency access, enterprise account recovery, login with a known device, or a registered passkey. If none of those work, the account must be deleted and recreated.",
        "Two-step login support is broad. The approved research says free users can use FIDO2/WebAuthn security keys, authenticator apps, and email codes, while premium adds Duo and YubiKey OTP. Bitwarden also supports saving and using passkeys and supports logging in to Bitwarden itself with passkeys under certain conditions."
      ],
      note: "Do not imply Bitwarden can recover a standard user's forgotten master password."
    },
    {
      id: "audits-security-history",
      title: "Audits and Security History",
      body: [
        "Bitwarden's audit record is unusually public in the approved research. Its compliance materials list annual or near-annual third-party assessments across multiple layers, plus SOC 2 Type 2, SOC 3, and ISO 27001 representations.",
        "The research also identifies a public HackerOne vulnerability disclosure program and a long-running public disclosure history. That is a positive trust signal, but it does not mean Bitwarden is invulnerable.",
        "The approved research preserves several caution points: an April 2026 npm CLI supply-chain incident affecting `@bitwarden/cli@2026.4.0`, older disclosed vulnerabilities, a fixed biometric-key storage issue affecting certain Windows desktop versions, and 2026 coverage of ETH Zurich malicious-server research involving multiple password managers."
      ],
      note: "Best framing: stronger openness than most rivals, not a spotless security history."
    },
    {
      id: "self-hosting",
      title: "Self-Hosting",
      body: [
        "Bitwarden's self-hosting path is a real differentiator. The approved research says official docs support multiple deployment models and frame self-hosting around IT professionals, system administrators, prosumers, and DevOps.",
        "That does not make self-hosting the mainstream default. It requires Docker, patching, certificates, backups, and operational maintenance.",
        "For most mainstream users, cloud-hosted Bitwarden is the better default. Self-hosting is best reserved for technical users or organizations with a clear reason and the ability to maintain it."
      ],
      note: "Do not recommend self-hosting to nontechnical users just because it sounds more private."
    },
    {
      id: "ease-platforms",
      title: "Ease of Use and Platform Support",
      body: [
        "Bitwarden is good enough for beginners, especially because the free tier removes cost friction and the approved research identifies broad documentation, import guides, and mainstream platform support.",
        "It is not the most polished option. The approved research says major reviewers regularly position Bitwarden as the value or free pick while preferring 1Password for overall polish, and some describe Bitwarden as more utilitarian than consumer-smooth.",
        "Platform support is broad in the approved research, including desktop, mobile, browser, CLI, and F-Droid references. Platform support, app-store ratings, extension behavior, and support reputation should be rechecked before future refreshes."
      ],
      note: "Preserved volatile information: platform support and passkey workflows are especially volatile."
    },
    {
      id: "family-business",
      title: "Family, Business, and Enterprise Fit",
      body: [
        "Bitwarden is a good family fit on value. The approved research says Families includes six premium accounts, unlimited sharing, and shared storage, while also noting that it is not obviously the easiest or warmest family UX in the category.",
        "Bitwarden is also a credible business contender. The approved research identifies Teams and Enterprise features such as event logs, API access, Directory Connector, SCIM, SSO on Enterprise, account recovery, and optional self-hosting.",
        "The business conclusion should stay conditional: Bitwarden is compelling for organizations that value admin breadth, self-hosting, and transparency, while 1Password may still win for polish in some workflows."
      ]
    }
  ],
  userFeedback: {
    praise: [
      "Free-plan value",
      "Public audits and security documentation",
      "Visible code and transparency",
      "Self-hosting optionality",
      "Developer-friendly tooling",
      "Low-cost family and business fit"
    ],
    complaints: [
      "Less premium-feeling UX than 1Password",
      "More utilitarian interface",
      "Family UX is not clearly easiest-in-class",
      "Open-source licensing story is nuanced",
      "Master password recovery is strict",
      "Self-hosting is operationally demanding"
    ]
  },
  alternatives: [
    { title: "1Password", description: "Better aligned with users who want premium polish, family UX maturity, and the dual-key security model described in the approved research." },
    { title: "Proton Pass", description: "Better aligned with Proton ecosystem users, Swiss privacy framing, and built-in hide-my-email aliases." },
    { title: "NordPass", description: "Better aligned with users who want simpler mainstream UX and do not prioritize open-source visibility." },
    { title: "Browser password managers", description: "Worth comparing for the simplest built-in workflow, though the approved research says Bitwarden appears meaningfully safer than browser-default password storage." }
  ],
  faqs: [
    { question: "Is Bitwarden safe?", answer: "The approved research supports a reasonably yes answer for mainstream use because Bitwarden combines local encryption, zero-knowledge claims, strong two-step login support, passkeys, public audits, and public vulnerability disclosure. Safe does not mean invulnerable; the research also documents disclosed vulnerabilities and a 2026 CLI supply-chain incident." },
    { question: "Is Bitwarden zero knowledge?", answer: "Bitwarden describes its architecture as zero knowledge and says team members cannot see passwords, access the master password or cryptographic keys, or access encrypted vault data. Treat this as a vendor claim backed by public technical documentation and audits." },
    { question: "Can Bitwarden see my passwords?", answer: "According to the approved research, Bitwarden says vault data is encrypted locally and servers store encrypted or hashed data rather than plaintext passwords." },
    { question: "Is Bitwarden open source?", answer: "Bitwarden is substantially open and inspectable, but the exact answer needs nuance. The approved research says current wording includes AGPL/GPL components, Bitwarden License v1.0 repositories, and the phrase open source and source available code." },
    { question: "Does Bitwarden have a free plan?", answer: "Yes. The approved research says Bitwarden's free plan includes unlimited passwords, unlimited devices, cross-device sync, password generation, passkey management, and free sharing with one other user." },
    { question: "Is Bitwarden good for beginners?", answer: "Yes, with a caveat. It is good enough for beginners because the free tier is strong and documentation is broad. It is not the most polished beginner option; 1Password is more often the premium recommendation for frictionless UX." },
    { question: "Should I self-host Bitwarden?", answer: "Only if you are technically comfortable with Docker, patching, certificates, backups, and maintenance, or you have an IT team. For most mainstream users, cloud-hosted Bitwarden is the better default." },
    { question: "What happens if I forget my master password?", answer: "Bitwarden cannot reset it for a standard user. Recovery depends on a hint, emergency access, enterprise account recovery, a known device, or a registered passkey. Otherwise, the account must be deleted and recreated." },
    { question: "Is Bitwarden better than 1Password?", answer: "Not universally. Bitwarden is better aligned with free value, transparency, and self-hosting. 1Password is better aligned with premium polish, family UX maturity, and its dual-key security model." },
    { question: "Is Bitwarden better than Proton Pass?", answer: "Not universally. Bitwarden is stronger for self-hosting, admin breadth, and technical flexibility. Proton Pass is stronger for Swiss privacy framing, aliases, and Proton ecosystem integration." },
    { question: "Is Bitwarden better than NordPass?", answer: "For transparency, value, and self-hosting, the approved research favors Bitwarden. For a simpler consumer-friendly interface when open-source visibility is not a priority, NordPass may appeal more." },
    { question: "Is Bitwarden worth paying for?", answer: "Often yes if you need integrated TOTP, attachments, emergency access, advanced two-step login options, vault-health tools, broader family sharing, or business controls. Many casual users may be fine on the free plan." }
  ],
  relatedGuides: [
    { title: "Password Manager Decision Hub", href: "/password-managers", description: "Compare Bitwarden against the existing password-manager paths by fit." },
    { title: "Bitwarden vs 1Password", href: "/comparisons/bitwarden-vs-1password", description: "Compare Bitwarden free value, transparency, and self-hosting against 1Password premium polish and family workflows." },
    { title: "Bitwarden vs Proton Pass", href: "/comparisons/bitwarden-vs-proton-pass", description: "Compare Bitwarden value and technical flexibility against Proton Pass privacy ecosystem and aliases." },
    { title: "1Password Review", href: "/reviews/1password-review", description: "Compare Bitwarden against a polished premium password manager with mature family workflows." },
    { title: "Proton Pass Review", href: "/reviews/proton-pass-review", description: "Compare Bitwarden against a privacy-focused password manager with aliases and Proton ecosystem fit." },
    { title: "NordPass Review", href: "/reviews/nordpass-review", description: "Compare Bitwarden against a simpler mainstream password manager in the Nord ecosystem." },
    { title: "1Password vs Proton Pass", href: "/comparisons/1password-vs-proton-pass", description: "Compare two major alternatives when the choice is polish versus privacy ecosystem." },
    { title: "1Password vs NordPass", href: "/comparisons/1password-vs-nordpass", description: "Compare premium polish against simpler mainstream value." },
    { title: "Proton Pass vs NordPass", href: "/comparisons/proton-pass-vs-nordpass", description: "Compare privacy transparency and aliases against mainstream simplicity." },
    { title: "How We Review Software", href: "/about/how-we-review-software", description: "Learn how Choose Better Tech separates evidence, vendor claims, open questions, and recommendations." }
  ],
  finalCtaHeadline: "Choose Bitwarden for fit, not hype",
  finalCtaNote: "Review the tradeoffs, then verify current pricing, plan terms, platform support, passkey workflows, licensing language, and self-hosting requirements before buying or deploying.",
  finalVerdictLabel: "Recommended for value, transparency, flexibility, and self-hosting.",
  finalVerdictBody: "Bitwarden is a strong password manager for free-plan seekers, transparency-minded users, technical users, self-hosters, value-conscious families, and many business admins. Its unusually capable free tier, public security evidence, visible code, audit history, passkey support, low-cost paid paths, and real self-hosting option make it one of the clearest value recommendations in the category. It is weaker for users who want maximum premium polish, the simplest mainstream UX, Proton-style privacy ecosystem and aliases, or self-hosting without operational work. The right conclusion is conditional: choose Bitwarden for value, transparency, flexibility, and self-hosting; choose 1Password for polish, Proton Pass for privacy ecosystem and aliases, and NordPass for simpler mainstream UX."
};
