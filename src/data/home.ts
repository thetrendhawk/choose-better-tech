import { BookOpen, Bot, CheckCircle2, Eye, KeyRound, LockKeyhole, SearchCheck, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import type { ArticlePreview, Category, ProcessHighlight, TrustPoint } from "../types/content";

export const categories: Category[] = [
  { key: "privacy-security", title: "Privacy & Security", description: "Plain-English guidance for tools that protect your accounts, devices, and data.", icon: ShieldCheck },
  { key: "ai-tools", title: "AI Tools", description: "Practical comparisons that explain where AI software helps and where it does not.", icon: Bot },
  { key: "productivity", title: "Productivity", description: "Simple recommendations for apps that make everyday work easier to manage.", icon: Workflow },
  { key: "software-guides", title: "Software Guides", description: "Beginner-friendly explainers for choosing, comparing, and using software well.", icon: BookOpen }
];

export const featuredReviews: ArticlePreview[] = [
  { key: "nordvpn-review", title: "NordVPN Review", excerpt: "A beginner-focused review of NordVPN's security, speed, streaming fit, pricing uncertainty, and tradeoffs.", href: "/reviews/nordvpn-review", status: "Published Review" },
  { key: "proton-vpn-review", title: "Proton VPN Review", excerpt: "A beginner-focused review of Proton VPN's privacy, free plan, pricing, performance, and tradeoffs.", href: "/reviews/proton-vpn-review", status: "Published Review" },
  { key: "surfshark-review", title: "Surfshark VPN Review", excerpt: "A beginner-focused review of Surfshark's value, unlimited devices, privacy nuance, audits, and tradeoffs.", href: "/reviews/surfshark-review", status: "Published Review" },
  { key: "onepassword-review", title: "1Password Review", excerpt: "A beginner-focused review of 1Password's Secret Key model, family features, paid value, audits, and transparency tradeoffs.", href: "/reviews/1password-review", status: "Published Review" },
  { key: "bitwarden-review", title: "Bitwarden Review", excerpt: "A beginner-focused review of Bitwarden's free plan, transparency, self-hosting, security model, and UX tradeoffs.", href: "/reviews/bitwarden-review", status: "Published Review" },
  { key: "nordpass-review", title: "NordPass Review", excerpt: "A beginner-focused review of NordPass's free plan, value, family features, Nord ecosystem fit, security, and transparency limits.", href: "/reviews/nordpass-review", status: "Published Review" },
  { key: "proton-pass-review", title: "Proton Pass Review", excerpt: "A beginner-focused review of Proton Pass's privacy model, open-source apps, free plan, aliases, audits, and tradeoffs.", href: "/reviews/proton-pass-review", status: "Published Review" }
];

export const featuredGuides: ArticlePreview[] = [
  { key: "password-manager-decision-hub", title: "Password Manager Decision Hub", excerpt: "A beginner-friendly decision tool for choosing between 1Password, Proton Pass, and NordPass by privacy, family workflows, free-plan value, aliases, and fit.", href: "/password-managers", status: "Decision Hub" },
  { key: "vpn-decision-hub", title: "VPN Decision Hub", excerpt: "A beginner-friendly decision tool for choosing between NordVPN, Proton VPN, and Surfshark by privacy, value, streaming, family use, and fit.", href: "/vpn", status: "Decision Hub" },
  { key: "best-vpns-for-beginners", title: "Best VPNs for Beginners", excerpt: "A beginner-first buying guide comparing privacy, streaming, price, simplicity, and free-plan tradeoffs.", href: "/guides/best-vpns-for-beginners", status: "Published Guide" },
  { key: "how-vpns-work", title: "How VPNs Work", excerpt: "A plain-English explainer covering VPN tunnels, IP masking, provider trust, and common limits.", href: "/guides/how-vpns-work", status: "Published Guide" },
  { key: "free-vpn-vs-paid", title: "Free VPN vs Paid VPN", excerpt: "A practical comparison of free VPN risks, reputable free tiers, and when paid plans make sense.", href: "/guides/free-vpn-vs-paid", status: "Published Guide" },
  { key: "vpn-buying-guide", title: "VPN Buying Guide", excerpt: "A beginner checklist for choosing a VPN based on privacy evidence, audits, features, pricing, and fit.", href: "/guides/vpn-buying-guide", status: "Published Guide" },
  { key: "vpn-myths", title: "VPN Myths", excerpt: "A calm myth-check explaining what VPNs can protect, what they cannot, and when claims go too far.", href: "/guides/vpn-myths", status: "Published Guide" },
  { key: "is-proton-vpn-free-good-enough", title: "Is Proton VPN Free Good Enough?", excerpt: "A decision guide for when Proton VPN's free plan is enough and when upgrading makes more sense.", href: "/guides/is-proton-vpn-free-good-enough", status: "Published Guide" }
];

export const featuredComparisons: ArticlePreview[] = [
  {
    key: "nordvpn-vs-protonvpn",
    title: "NordVPN vs ProtonVPN",
    excerpt: "An evidence-based comparison of privacy, speed, streaming, free plans, support, pricing uncertainty, and reader-fit tradeoffs.",
    href: "/comparisons/nordvpn-vs-protonvpn",
    status: "Published Comparison"
  },
  {
    key: "nordvpn-vs-surfshark",
    title: "NordVPN vs Surfshark",
    excerpt: "An evidence-based comparison of premium VPN fit, household value, privacy, streaming, torrenting, gaming, and plan uncertainty.",
    href: "/comparisons/nordvpn-vs-surfshark",
    status: "Published Comparison"
  },
  {
    key: "proton-vpn-vs-surfshark",
    title: "Proton VPN vs Surfshark",
    excerpt: "An evidence-based comparison of privacy transparency, free plans, household value, unlimited devices, and performance uncertainty.",
    href: "/comparisons/proton-vpn-vs-surfshark",
    status: "Published Comparison"
  },
  {
    key: "onepassword-vs-nordpass",
    title: "1Password vs NordPass",
    excerpt: "An evidence-based comparison of premium family polish, value, free plans, security architecture, Travel Mode, and Nord ecosystem fit.",
    href: "/comparisons/1password-vs-nordpass",
    status: "Published Comparison"
  },
  {
    key: "proton-pass-vs-nordpass",
    title: "Proton Pass vs NordPass",
    excerpt: "An evidence-based comparison of privacy transparency, free plans, aliases, beginner UX, paid value, and ecosystem fit.",
    href: "/comparisons/proton-pass-vs-nordpass",
    status: "Published Comparison"
  },
  {
    key: "onepassword-vs-proton-pass",
    title: "1Password vs Proton Pass",
    excerpt: "An evidence-based comparison of premium polish, family workflows, Travel Mode, privacy transparency, free plans, and aliases.",
    href: "/comparisons/1password-vs-proton-pass",
    status: "Published Comparison"
  }
];

export const trustPoints: TrustPoint[] = [
  { key: "evidence-first", title: "Evidence First", description: "Recommendations begin with research, not commissions.", icon: SearchCheck },
  { key: "beginner-friendly", title: "Beginner Friendly", description: "Clear explanations without unnecessary technical jargon.", icon: CheckCircle2 },
  { key: "transparent", title: "Transparent", description: "If we earn a commission, we tell you.", icon: Eye }
];

export const processHighlights: ProcessHighlight[] = [
  { key: "security-basics", label: "Security basics", icon: LockKeyhole },
  { key: "account-protection", label: "Account protection", icon: KeyRound },
  { key: "useful-ai", label: "Useful AI", icon: Sparkles }
];
