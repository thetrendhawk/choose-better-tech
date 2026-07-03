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
  { key: "surfshark-review", title: "Surfshark VPN Review", excerpt: "A beginner-focused review of Surfshark's value, unlimited devices, privacy nuance, audits, and tradeoffs.", href: "/reviews/surfshark-review", status: "Published Review" }
];

export const featuredGuides: ArticlePreview[] = [
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
