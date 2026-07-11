export const vpnDecisionHub = {
  path: "/vpn",
  title: "Which VPN Is Right for You?",
  subtitle: "A beginner-friendly guide to choosing between NordVPN, Proton VPN, and Surfshark based on privacy, value, streaming, family use, and overall fit.",
  quickPicks: [
    {
      label: "Best all-around for most beginners",
      provider: "NordVPN",
      description: "Start here if you want a premium all-around VPN with strong security evidence, broad usability, and mainstream streaming positioning.",
      href: "/reviews/nordvpn-review"
    },
    {
      label: "Best for privacy transparency and free plan",
      provider: "Proton VPN",
      description: "Start here if you value open-source apps, audits, Swiss jurisdiction, transparency, and a credible permanent free plan.",
      href: "/reviews/proton-vpn-review"
    },
    {
      label: "Best for value and many devices",
      provider: "Surfshark",
      description: "Start here if household value, beginner-friendly apps, and unlimited simultaneous connections matter most.",
      href: "/reviews/surfshark-review"
    }
  ],
  needs: [
    {
      title: "I am not sure I need a VPN",
      recommendation: "Read Are VPNs Worth It?",
      description: "Use this when you want a skeptical value decision before comparing products or paying for another subscription.",
      href: "/are-vpns-worth-it"
    },
    {
      title: "I want the easiest all-around VPN",
      recommendation: "Start with NordVPN",
      description: "Best fit when you want one broadly capable mainstream VPN for everyday privacy, public Wi-Fi, streaming, and travel.",
      href: "/reviews/nordvpn-review"
    },
    {
      title: "I want the strongest privacy transparency",
      recommendation: "Start with Proton VPN",
      description: "Best fit when open-source apps, no-logs audits, Swiss jurisdiction, and transparency reporting matter most.",
      href: "/reviews/proton-vpn-review"
    },
    {
      title: "I want the best value for a household",
      recommendation: "Start with Surfshark",
      description: "Best fit when you want to cover many devices and care about price-to-feature value.",
      href: "/reviews/surfshark-review"
    },
    {
      title: "I care most about streaming",
      recommendation: "Compare NordVPN and Surfshark",
      description: "Streaming claims are volatile, so compare the stronger mainstream streaming fit against the value option before deciding.",
      href: "/comparisons/nordvpn-vs-surfshark"
    },
    {
      title: "I want a free VPN option",
      recommendation: "Read the Proton VPN free guide",
      description: "Use this when you want to know whether Proton VPN's free tier is enough before paying.",
      href: "/guides/is-proton-vpn-free-good-enough"
    },
    {
      title: "I want to compare before deciding",
      recommendation: "Use the comparison paths",
      description: "Start with the comparison that matches your top tradeoff: privacy, value, or mainstream fit.",
      href: "#comparison-paths"
    }
  ],
  providers: [
    {
      name: "NordVPN",
      positioning: "Premium all-around VPN",
      bestFor: "Beginners who want strong security and broad usability",
      href: "/reviews/nordvpn-review"
    },
    {
      name: "Proton VPN",
      positioning: "Privacy-focused VPN with a credible free plan",
      bestFor: "Users who value transparency, audits, and open-source apps",
      href: "/reviews/proton-vpn-review"
    },
    {
      name: "Surfshark",
      positioning: "Value-focused VPN for many devices",
      bestFor: "Households, budget-conscious buyers, and mainstream users",
      href: "/reviews/surfshark-review"
    }
  ],
  comparisons: [
    {
      title: "NordVPN vs Proton VPN",
      href: "/comparisons/nordvpn-vs-protonvpn",
      description: "Use this if you are choosing between mainstream all-around fit and privacy transparency."
    },
    {
      title: "NordVPN vs Surfshark",
      href: "/comparisons/nordvpn-vs-surfshark",
      description: "Use this if you are choosing between premium mainstream fit and household value."
    },
    {
      title: "Proton VPN vs Surfshark",
      href: "/comparisons/proton-vpn-vs-surfshark",
      description: "Use this if you are choosing between privacy/free-plan strength and value/many-device strength."
    }
  ],
  learningPath: [
    { title: "Are VPNs Worth It?", href: "/are-vpns-worth-it", description: "Decide whether a VPN solves a real privacy, travel, network, or location problem for you." },
    { title: "How VPNs Work", href: "/guides/how-vpns-work", description: "Learn what a VPN can and cannot protect." },
    { title: "Best Free VPNs", href: "/best-free-vpns", description: "Compare legitimate permanent free VPN tiers by fit, limits, privacy, and upgrade pressure." },
    { title: "Free VPN vs Paid VPN", href: "/guides/free-vpn-vs-paid", description: "Understand free-plan tradeoffs before installing a VPN." },
    { title: "VPN Buying Guide", href: "/guides/vpn-buying-guide", description: "Use a practical checklist for comparing providers." },
    { title: "VPN Myths", href: "/guides/vpn-myths", description: "Avoid exaggerated claims about anonymity and security." },
    { title: "Best VPNs for Beginners", href: "/guides/best-vpns-for-beginners", description: "Compare beginner-friendly VPNs by use case." },
    { title: "Is Proton VPN Free Good Enough?", href: "/guides/is-proton-vpn-free-good-enough", description: "Decide whether Proton VPN's free tier fits your needs." }
  ]
};
