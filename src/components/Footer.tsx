import { Link } from "react-router-dom";
import { footerLinks, site } from "../utils/site";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm"><Link className="text-lg font-semibold" to="/">{site.name}</Link><p className="mt-3 text-sm leading-6 text-slate-300">Honest software guidance built around clarity, research, and transparency.</p></div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300" aria-label="Footer navigation">{footerLinks.map((item) => <Link key={item.key} className="hover:text-white" to={item.href}>{item.label}</Link>)}</nav>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-400">Copyright 2026 Choose Better Tech. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
