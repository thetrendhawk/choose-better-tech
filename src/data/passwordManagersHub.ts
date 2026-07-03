export const passwordManagersHub = {
  path: "/password-managers",
  title: "Which Password Manager Is Right for You?",
  subtitle: "A beginner-friendly guide to choosing between 1Password, Proton Pass, and NordPass based on premium polish, privacy, free-plan value, family workflows, aliases, and overall fit.",
  quickPicks: [
    {
      label: "Best for premium polish and families",
      provider: "1Password",
      description: "Start here if you want a mature paid password manager with polished cross-platform use, family workflows, recovery options, sharing, and Travel Mode.",
      href: "/reviews/1password-review"
    },
    {
      label: "Best for privacy transparency and free plan",
      provider: "Proton Pass",
      description: "Start here if open-source client apps, privacy transparency, hide-my-email aliases, a strong free plan, and Proton ecosystem fit matter most.",
      href: "/reviews/proton-pass-review"
    },
    {
      label: "Best for simple mainstream value",
      provider: "NordPass",
      description: "Start here if you want simple mainstream UX, value-oriented paid plans, Nord ecosystem fit, and a conventional commercial password-manager experience.",
      href: "/reviews/nordpass-review"
    }
  ],
  needs: [
    {
      title: "I want the most polished family password manager",
      recommendation: "Start with 1Password",
      description: "Best fit when family sharing, recovery workflows, organizer controls, cross-platform polish, and a mature premium experience matter most.",
      href: "/reviews/1password-review"
    },
    {
      title: "I want the strongest privacy transparency",
      recommendation: "Start with Proton Pass",
      description: "Best fit when open-source clients, encrypted metadata, audits, aliases, and Proton's privacy ecosystem are the deciding factors.",
      href: "/reviews/proton-pass-review"
    },
    {
      title: "I want simple mainstream value",
      recommendation: "Start with NordPass",
      description: "Best fit when you want a conventional password manager with clean onboarding, value-oriented paid plans, and Nord ecosystem fit.",
      href: "/reviews/nordpass-review"
    },
    {
      title: "I want a free password manager option",
      recommendation: "Compare Proton Pass and NordPass",
      description: "Proton Pass has the stronger free-plan story in the approved research, while NordPass has a real free plan with a meaningful active-session limitation.",
      href: "/comparisons/proton-pass-vs-nordpass"
    },
    {
      title: "I travel and want extra vault control",
      recommendation: "Start with 1Password",
      description: "Travel Mode is a specific 1Password differentiator in the approved research.",
      href: "/reviews/1password-review"
    },
    {
      title: "I want to compare before deciding",
      recommendation: "Use the comparison paths",
      description: "Start with the comparison that matches your top tradeoff: premium polish, privacy transparency, or mainstream value.",
      href: "#comparison-paths"
    }
  ],
  decisionRows: [
    { label: "Premium polish", onePassword: "Strongest fit", protonPass: "Good, but not the most mature premium option", nordPass: "Simple and mainstream, but less premium-polish focused" },
    { label: "Families", onePassword: "Strongest premium family workflow", protonPass: "Good for privacy-forward families", nordPass: "Strong family value fit" },
    { label: "Privacy transparency", onePassword: "Strong mainstream security, but closed source", protonPass: "Strongest fit", nordPass: "Credible mainstream privacy, but closed source" },
    { label: "Free-plan value", onePassword: "No permanent free personal tier was found", protonPass: "Strongest fit", nordPass: "Real free plan with active-session limits" },
    { label: "Aliases/email privacy", onePassword: "Not the main fit", protonPass: "Strongest fit", nordPass: "Not the main differentiator" },
    { label: "Travel Mode", onePassword: "Strongest fit", protonPass: "No comparable feature identified", nordPass: "No comparable feature identified" },
    { label: "Simple mainstream UX", onePassword: "Polished but paid-premium oriented", protonPass: "Best for privacy-aware beginners", nordPass: "Strongest fit" },
    { label: "Self-hosting/open-source maximalism", onePassword: "Not the fit", protonPass: "Open-source clients, but not self-hosting-first", nordPass: "Not the fit" }
  ],
  providers: [
    {
      name: "1Password",
      positioning: "Premium password manager for families and polished cross-platform use",
      bestFor: "Users who want mature family workflows, recovery and sharing, Travel Mode, and a long-established paid password-manager experience",
      href: "/reviews/1password-review"
    },
    {
      name: "Proton Pass",
      positioning: "Privacy-focused password manager with open-source clients and a strong free plan",
      bestFor: "Privacy-conscious users, free-plan seekers, alias/email privacy users, and Proton ecosystem households",
      href: "/reviews/proton-pass-review"
    },
    {
      name: "NordPass",
      positioning: "Simple mainstream password manager for value and Nord ecosystem fit",
      bestFor: "Users who want easy onboarding, value-oriented paid plans, family value, and a conventional commercial password-manager experience",
      href: "/reviews/nordpass-review"
    }
  ],
  comparisons: [
    {
      title: "1Password vs NordPass",
      href: "/comparisons/1password-vs-nordpass",
      description: "Use this if you are choosing between premium family polish and simpler value-oriented password management."
    },
    {
      title: "Proton Pass vs NordPass",
      href: "/comparisons/proton-pass-vs-nordpass",
      description: "Use this if you are choosing between privacy transparency/free-plan strength and mainstream simplicity/value."
    },
    {
      title: "1Password vs Proton Pass",
      href: "/comparisons/1password-vs-proton-pass",
      description: "Use this if you are choosing between premium polish, family workflows, and Travel Mode versus privacy transparency, aliases, and free-plan value."
    }
  ],
  learningPath: [
    { title: "How We Review Software", href: "/about/how-we-review-software", description: "Learn how Choose Better Tech separates verified facts, vendor claims, independent findings, and open questions." },
    { title: "Affiliate Disclosure", href: "/affiliate-disclosure", description: "Understand how affiliate relationships are disclosed without controlling editorial conclusions." },
    { title: "1Password Review", href: "/reviews/1password-review", description: "Read the full review before choosing the premium family path." },
    { title: "Proton Pass Review", href: "/reviews/proton-pass-review", description: "Read the full review before choosing the privacy/free-plan path." },
    { title: "NordPass Review", href: "/reviews/nordpass-review", description: "Read the full review before choosing the simple value-oriented path." },
    { title: "Proton Pass vs NordPass", href: "/comparisons/proton-pass-vs-nordpass", description: "Compare privacy transparency against mainstream value and simplicity." }
  ],
  openQuestions: [
    "Current pricing, plan names, subscription tiers, trial terms, and refund policy wording.",
    "Family limits and family feature details.",
    "Passkey support by plan and platform.",
    "Platform support, OS minimums, browser support, biometric support, and extension reliability.",
    "Current audit status, certifications, Trust Center contents, and newly published security reports.",
    "Privacy policy, telemetry terms, data collection disclosures, transparency-report availability, legal-request artifacts, and Swiss legal-process nuance.",
    "App-store, Play Store, browser-extension, autofill, sync, cancellation, and support reputation signals.",
    "Business feature availability and maturity for buyers evaluating team use.",
    "Bitwarden should remain a mentioned alternative until a full approved review exists."
  ]
};
