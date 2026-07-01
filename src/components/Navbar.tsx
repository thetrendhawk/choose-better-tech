import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems, site } from "../utils/site";
import { Container } from "./ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileItems = [...navItems, { label: "Affiliate Disclosure", href: "/affiliate-disclosure" }];
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Link className="flex items-center gap-3 font-semibold text-slate-950" to="/" aria-label="Choose Better Tech home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white">CB</span>
          <span>{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex" aria-label="Primary navigation">
          {mobileItems.map((item) => <NavLink key={item.href} to={item.href} className={({ isActive }) => isActive ? "text-brand-700" : "hover:text-slate-950"}>{item.label}</NavLink>)}
        </nav>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 md:hidden" type="button" aria-label="Toggle navigation menu" aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </Container>
      {isOpen ? <nav className="border-t border-slate-200 bg-white md:hidden" aria-label="Mobile navigation"><Container className="grid gap-1 py-3">{mobileItems.map((item) => <NavLink key={item.href} to={item.href} onClick={() => setIsOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">{item.label}</NavLink>)}</Container></nav> : null}
    </header>
  );
}
