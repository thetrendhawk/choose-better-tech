import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const reviewProcess = [
  "Research",
  "Evidence organization",
  "Editorial planning",
  "Article creation",
  "Editorial review",
  "Publication",
  "Ongoing updates"
];

const evidenceStandards = [
  {
    term: "Verified Facts",
    description: "Details we can support with direct evidence, such as product ownership, published policies, official documentation, or confirmed feature behavior."
  },
  {
    term: "Vendor Claims",
    description: "Statements made by the company that need context, verification, or careful wording before they become part of a recommendation."
  },
  {
    term: "Independent Findings",
    description: "Evidence from third-party testing, audits, reporting, expert reviews, or hands-on evaluation when available."
  },
  {
    term: "Industry Consensus",
    description: "Patterns that appear across reliable sources or established security and software guidance."
  },
  {
    term: "Open Questions",
    description: "Important details that are missing, unclear, disputed, volatile, or not safe to treat as settled."
  }
];

const promiseItems = [
  "We will never intentionally misrepresent products.",
  "We will clearly distinguish facts from opinions.",
  "We will update reviews when important information changes.",
  "We will prioritize reader trust over short-term conversions."
];

export function HowWeReviewSoftwarePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How We Review Software",
    description: "Learn how Choose Better Tech researches, evaluates, and updates every review before making a recommendation.",
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: site.url + "/about/how-we-review-software"
  };

  return (
    <>
      <SEO
        title="How We Review Software"
        description="Learn how Choose Better Tech researches, evaluates, writes, updates, and maintains software reviews with an evidence-first process."
        path="/about/how-we-review-software"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PageHeader
        title="How We Review Software"
        eyebrow="Editorial methodology"
        description="Learn how Choose Better Tech researches, evaluates, and updates every review before making a recommendation."
      />

      <Section containerClassName="max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <h2>Why We Exist</h2>
          <p>Software decisions are harder than they should be. A reader may see product claims, affiliate rankings, forum complaints, technical documentation, pricing changes, and outdated reviews all pointing in different directions.</p>
          <p>Choose Better Tech exists to make those decisions easier. Our goal is to slow the process down, separate evidence from noise, and explain which tradeoffs matter for ordinary buyers.</p>

          <h2>Our Review Process</h2>
          <p>Every review starts with research before a recommendation is made. We organize the evidence first, plan the article around reader questions, then write in plain English so the final page helps someone make a real decision.</p>
        </div>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2">
          {reviewProcess.map((step, index) => (
            <li key={step} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Step {index + 1}</p>
              <p className="mt-2 text-base font-semibold text-slate-950">{step}</p>
            </li>
          ))}
        </ol>

        <div className="prose prose-slate mt-10 max-w-none">
          <p>Publication is not the end of the process. Software changes, so important reviews are revisited when facts, pricing, plans, features, policies, or product behavior change.</p>

          <h2>Our Evidence Standards</h2>
          <p>Not every claim deserves the same confidence. A product page, an audit, an independent test, and an unresolved question should not be treated as if they carry the same weight.</p>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="px-4 py-4 font-semibold sm:px-6" scope="col">Evidence Type</th>
                <th className="px-4 py-4 font-semibold sm:px-6" scope="col">What It Means</th>
              </tr>
            </thead>
            <tbody>
              {evidenceStandards.map((standard) => (
                <tr key={standard.term} className="border-b border-slate-200 last:border-0">
                  <th className="bg-slate-50 px-4 py-4 font-semibold text-slate-950 sm:px-6" scope="row">{standard.term}</th>
                  <td className="px-4 py-4 leading-6 text-slate-700 sm:px-6">{standard.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-slate mt-10 max-w-none">
          <p>These distinctions matter because a recommendation should be honest about what is known, what is claimed, and what still needs verification.</p>

          <h2>Editorial Independence</h2>
          <p>Recommendations are based on evidence, product fit, and reader needs. Affiliate relationships never determine our conclusions. A product can be useful and still have weaknesses. A product can be popular and still be wrong for some readers.</p>
          <p>When information is uncertain, we say so. We would rather explain a limitation clearly than hide it inside a confident-sounding recommendation.</p>

          <h2>Keeping Reviews Current</h2>
          <p>Software changes over time. Prices change, plans move, features are added or removed, support policies shift, and compatibility can break or improve. Reviews are periodically revisited so important changes can be reflected.</p>
          <p>Volatile information such as pricing, plan tiers, device limits, feature availability, platform support, refund terms, and compatibility should be checked during updates rather than treated as permanent.</p>

          <h2>Corrections</h2>
          <p>If you find a factual error, we want to know. Send a note through the <Link to="/contact">contact page</Link> with the detail you believe is wrong and, if possible, where you found the correction.</p>
          <p>When a correction is verified, we will update the relevant page. Clear corrections make the site more useful for everyone.</p>

          <h2>Affiliate Transparency</h2>
          <p>Some links on Choose Better Tech may earn a commission if a reader makes a purchase. That does not add extra cost for the reader, and it does not change our conclusions or rankings.</p>
          <p>Affiliate links should be disclosed clearly. You can read the full <Link to="/affiliate-disclosure">Affiliate Disclosure</Link> for more detail.</p>

          <h2>Our Promise</h2>
        </div>

        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <ul className="grid gap-3 text-sm leading-6 text-slate-700">
            {promiseItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
