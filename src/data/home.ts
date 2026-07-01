import { BookOpen, Bot, CheckCircle2, Eye, KeyRound, LockKeyhole, SearchCheck, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import type { ArticlePreview, Category, TrustPoint } from "../types/content";

export const categories: Category[] = [
  { title: "Privacy & Security", description: "Plain-English guidance for tools that protect your accounts, devices, and data.", icon: ShieldCheck },
  { title: "AI Tools", description: "Practical comparisons that explain where AI software helps and where it does not.", icon: Bot },
  { title: "Productivity", description: "Simple recommendations for apps that make everyday work easier to manage.", icon: Workflow },
  { title: "Software Guides", description: "Beginner-friendly explainers for choosing, comparing, and using software well.", icon: BookOpen }
];

export const featuredGuides: ArticlePreview[] = [
  { title: "Proton VPN Review", excerpt: "A practical review framework is being prepared for this software guide." },
  { title: "Best VPNs for Beginners", excerpt: "A beginner-focused comparison is being prepared for this software guide." },
  { title: "How VPNs Actually Work", excerpt: "A clear explainer is being prepared for this software guide." },
  { title: "Best Password Managers", excerpt: "A practical comparison is being prepared for this software guide." },
  { title: "TotalAV Review", excerpt: "A research-first review framework is being prepared for this software guide." },
  { title: "Choosing Software with Confidence", excerpt: "A decision-making guide is being prepared for this software guide." }
];

export const trustPoints: TrustPoint[] = [
  { title: "Evidence First", description: "Recommendations begin with research, not commissions.", icon: SearchCheck },
  { title: "Beginner Friendly", description: "Clear explanations without unnecessary technical jargon.", icon: CheckCircle2 },
  { title: "Transparent", description: "If we earn a commission, we tell you.", icon: Eye }
];

export const processHighlights = [
  { label: "Security basics", icon: LockKeyhole },
  { label: "Account protection", icon: KeyRound },
  { label: "Useful AI", icon: Sparkles }
];
