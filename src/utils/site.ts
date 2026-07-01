import type { NavItem } from "../types/content";

export const site = {
  name: "Choose Better Tech",
  url: "https://choosebettertech.com",
  description: "Honest reviews, practical comparisons, and beginner-friendly guides to help you choose software with confidence.",
  email: "hello@choosebettertech.com"
};

export const navItems: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Contact", href: "/contact" }
];

export const footerLinks: NavItem[] = [
  { key: "about", label: "About", href: "/about" },
  { key: "privacy", label: "Privacy", href: "/privacy" },
  { key: "terms", label: "Terms", href: "/terms" },
  { key: "affiliate-disclosure", label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { key: "contact", label: "Contact", href: "/contact" }
];
