import { AlertCircle } from "lucide-react";
import { Container } from "../ui/Container";

const disclosureText = "We may earn a commission if you purchase through links on this page, at no extra cost to you. Our recommendations are based on research, product fit, and reader needs.";

export function AffiliateDisclosure() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-4" aria-label="Affiliate disclosure">
      <Container>
        <div className="flex gap-3 rounded-lg border border-brand-100 bg-white p-4 text-sm leading-6 text-slate-700 shadow-soft">
          <AlertCircle className="mt-0.5 shrink-0 text-brand-700" size={18} aria-hidden="true" />
          <p>{disclosureText}</p>
        </div>
      </Container>
    </section>
  );
}
