import { BookOpen, Bot, CheckCircle2, Eye, KeyRound, LockKeyhole, SearchCheck, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import type { ArticlePreview, Category, ProcessHighlight, TrustPoint } from "../types/content";

export const categories: Category[] = [
  { key: "privacy-security", title: "Privacy & Security", description: "Plain-English guidance for tools that protect your accounts, devices, and data.", icon: ShieldCheck },
  { key: "ai-tools", title: "AI Tools", description: "Practical comparisons that explain where AI software helps and where it does not.", icon: Bot },
  { key: "productivity", title: "Productivity", description: "Simple recommendations for apps that make everyday work easier to manage.", icon: Workflow },
  { key: "software-guides", title: "Software Guides", description: "Beginner-friendly explainers for choosing, comparing, and using software well.", icon: BookOpen }
];

export const featuredGuides: ArticlePreview[] = [
  { key: "proton-vpn-review", title: "Proton VPN Review", excerpt: "A beginner-focused review of Proton VPN's privacy, free plan, pricing, performance, and tradeoffs.", href: "/reviews/proton-vpn-review", status: "Published Review" },
  { key: "best-vpns-for-beginners", title: "Best VPNs for Beginners", excerpt: "A beginner-first buying guide comparing privacy, streaming, price, simplicity, and free-plan tradeoffs.", href: "/guides/best-vpns-for-beginners", status: "Published Guide" },
  { key: "how-vpns-actually-work", title: "How VPNs Actually Work", excerpt: "A clear explainer is being prepared for this software guide." },
  { key: "best-password-managers", title: "Best Password Managers", excerpt: "A practical comparison is being prepared for this software guide." },
  { key: "totalav-review", title: "TotalAV Review", excerpt: "A research-first review framework is being prepared for this software guide." },
  { key: "choosing-software-with-confidence", title: "Choosing Software with Confidence", excerpt: "A decision-making guide is being prepared for this software guide." }
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
