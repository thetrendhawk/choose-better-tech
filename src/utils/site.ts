import type { NavItem } from "../types/content";

export const site = {
  name: "Choose Better Tech",
  url: "https://choosebettertech.com",
  description: "Honest reviews, practical comparisons, and beginner-friendly guides to help you choose software with confidence.",
  email: "hello@choosebettertech.com"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const footerLinks: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Contact", href: "/contact" }
];
