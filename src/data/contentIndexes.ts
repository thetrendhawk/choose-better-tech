import type { ArticlePreview } from "../types/content";

export type ArticleGroup = {
  title: string;
  description: string;
  articles: ArticlePreview[];
};

export const reviewGroups: ArticleGroup[] = [
  {
    title: "VPN Reviews",
    description: "Evidence-based VPN reviews focused on privacy, usability, performance fit, pricing uncertainty, and beginner-friendly tradeoffs.",
    articles: [
      { key: "nordvpn-review", title: "NordVPN Review", excerpt: "A beginner-focused review of NordVPN's security, speed, streaming fit, pricing uncertainty, and tradeoffs.", href: "/reviews/nordvpn-review", status: "Published Review" },
      { key: "proton-vpn-review", title: "Proton VPN Review", excerpt: "A beginner-focused review of Proton VPN's privacy, free plan, pricing, performance, and tradeoffs.", href: "/reviews/proton-vpn-review", status: "Published Review" },
      { key: "surfshark-review", title: "Surfshark VPN Review", excerpt: "A beginner-focused review of Surfshark's value, unlimited devices, privacy nuance, audits, and tradeoffs.", href: "/reviews/surfshark-review", status: "Published Review" }
    ]
  },
  {
    title: "Password Manager Reviews",
    description: "Fit-based password manager reviews for premium polish, free-plan value, privacy transparency, family workflows, form filling, and mainstream use.",
    articles: [
      { key: "onepassword-review", title: "1Password Review", excerpt: "A beginner-focused review of 1Password's Secret Key model, family features, paid value, audits, and transparency tradeoffs.", href: "/reviews/1password-review", status: "Published Review" },
      { key: "nordpass-review", title: "NordPass Review", excerpt: "A beginner-focused review of NordPass's free plan, value, family features, Nord ecosystem fit, security, and transparency limits.", href: "/reviews/nordpass-review", status: "Published Review" },
      { key: "proton-pass-review", title: "Proton Pass Review", excerpt: "A beginner-focused review of Proton Pass's privacy model, open-source apps, free plan, aliases, audits, and tradeoffs.", href: "/reviews/proton-pass-review", status: "Published Review" },
      { key: "bitwarden-review", title: "Bitwarden Review", excerpt: "A beginner-focused review of Bitwarden's free plan, transparency, self-hosting, security model, and UX tradeoffs.", href: "/reviews/bitwarden-review", status: "Published Review" },
      { key: "roboform-review", title: "RoboForm Review", excerpt: "A beginner-focused review of RoboForm's form filling, affordability, mainstream fit, security model, and transparency caveats.", href: "/reviews/roboform-review", status: "Published Review" }
    ]
  },
  {
    title: "Privacy Tool Reviews",
    description: "Evidence-based privacy tool reviews focused on practical exposure reduction, trust tradeoffs, limitations, and ongoing maintenance.",
    articles: [
      { key: "incogni-review", title: "Incogni Review", excerpt: "A beginner-focused review of Incogni's data broker removal, Deloitte assurance, recurring requests, dashboard limits, privacy tradeoffs, and alternatives.", href: "/reviews/incogni-review", status: "Published Review" },
      { key: "optery-review", title: "Optery Review", excerpt: "A beginner-focused review of Optery's people-search removal, screenshot reporting, exposure scans, privacy tradeoffs, and category limits.", href: "/reviews/optery-review", status: "Published Review" }
    ]
  }
];

export const comparisonGroups: ArticleGroup[] = [
  {
    title: "VPN Comparisons",
    description: "Reader-fit VPN comparisons that explain privacy, value, streaming, performance, usability, and uncertainty without declaring a universal winner.",
    articles: [
      { key: "nordvpn-vs-protonvpn", title: "NordVPN vs Proton VPN", excerpt: "An evidence-based comparison of privacy, speed, streaming, free plans, support, pricing uncertainty, and reader-fit tradeoffs.", href: "/comparisons/nordvpn-vs-protonvpn", status: "Published Comparison" },
      { key: "nordvpn-vs-surfshark", title: "NordVPN vs Surfshark", excerpt: "An evidence-based comparison of premium VPN fit, household value, privacy, streaming, torrenting, gaming, and plan uncertainty.", href: "/comparisons/nordvpn-vs-surfshark", status: "Published Comparison" },
      { key: "proton-vpn-vs-surfshark", title: "Proton VPN vs Surfshark", excerpt: "An evidence-based comparison of privacy transparency, free plans, household value, unlimited devices, and performance uncertainty.", href: "/comparisons/proton-vpn-vs-surfshark", status: "Published Comparison" }
    ]
  },
  {
    title: "Password Manager Comparisons",
    description: "Side-by-side password manager comparisons organized around premium polish, privacy transparency, free-plan value, family workflows, and ecosystem fit.",
    articles: [
      { key: "onepassword-vs-nordpass", title: "1Password vs NordPass", excerpt: "An evidence-based comparison of premium family polish, value, free plans, security architecture, Travel Mode, and Nord ecosystem fit.", href: "/comparisons/1password-vs-nordpass", status: "Published Comparison" },
      { key: "proton-pass-vs-nordpass", title: "Proton Pass vs NordPass", excerpt: "An evidence-based comparison of privacy transparency, free plans, aliases, beginner UX, paid value, and ecosystem fit.", href: "/comparisons/proton-pass-vs-nordpass", status: "Published Comparison" },
      { key: "onepassword-vs-proton-pass", title: "1Password vs Proton Pass", excerpt: "An evidence-based comparison of premium polish, family workflows, Travel Mode, privacy transparency, free plans, and aliases.", href: "/comparisons/1password-vs-proton-pass", status: "Published Comparison" },
      { key: "bitwarden-vs-1password", title: "Bitwarden vs 1Password", excerpt: "An evidence-based comparison of free-plan value, premium polish, family workflows, transparency, self-hosting, recovery, and Travel Mode.", href: "/comparisons/bitwarden-vs-1password", status: "Published Comparison" },
      { key: "bitwarden-vs-proton-pass", title: "Bitwarden vs Proton Pass", excerpt: "An evidence-based comparison of free-plan value, privacy ecosystem, aliases, transparency, self-hosting, and technical flexibility.", href: "/comparisons/bitwarden-vs-proton-pass", status: "Published Comparison" },
      { key: "bitwarden-vs-nordpass", title: "Bitwarden vs NordPass", excerpt: "An evidence-based comparison of free-plan value, mainstream simplicity, transparency, self-hosting, Nord ecosystem fit, and business fit.", href: "/comparisons/bitwarden-vs-nordpass", status: "Published Comparison" }
    ]
  }
];
