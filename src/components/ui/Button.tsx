import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary";
type BaseProps = { children: ReactNode; variant?: Variant; className?: string };
type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };
type ButtonAnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-600 text-white shadow-lift hover:bg-brand-700",
  secondary: "border border-slate-300 bg-white/90 text-slate-900 hover:border-brand-200 hover:bg-white"
};
const baseClasses = "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={[baseClasses, variantClasses[variant], className].join(" ")} {...props}>{children}</button>;
}

export function ButtonLink({ children, variant = "primary", className = "", to, ...props }: ButtonLinkProps) {
  return <Link className={[baseClasses, variantClasses[variant], className].join(" ")} to={to} {...props}>{children}</Link>;
}

export function ButtonAnchor({ children, variant = "primary", className = "", href, ...props }: ButtonAnchorProps) {
  return <a className={[baseClasses, variantClasses[variant], className].join(" ")} href={href} {...props}>{children}</a>;
}
