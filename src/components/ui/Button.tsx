import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary";
type BaseProps = { children: ReactNode; variant?: Variant; className?: string };
type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
};
const baseClasses = "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={[baseClasses, variantClasses[variant], className].join(" ")} {...props}>{children}</button>;
}

export function ButtonLink({ children, variant = "primary", className = "", to, ...props }: ButtonLinkProps) {
  return <Link className={[baseClasses, variantClasses[variant], className].join(" ")} to={to} {...props}>{children}</Link>;
}
