import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { site } from "../utils/site";

const steps = [
  ["1. Problem fit", "Write the problem in one sentence. If the problem is vague, a longer feature list will not make the choice clearer."],
  ["2. Required outcomes", "Describe what success looks like: a reliable connection, fewer forgotten passwords, simpler file access, less exposure, or better malware coverage."],
  ["3. Friction and usability", "Try the important workflow. Can you find the setting, understand the warning, and complete the task without repeated workarounds?"],
  ["4. True cost", "Add the recurring price, taxes or regional differences, renewal price, required add-ons, and the cost of your time to set up and maintain it."],
  ["5. Limits and tradeoffs", "Look for device, storage, seat, platform, recovery, support, and feature limits. A smaller plan may be enough—or may fail at the one task you care about."],
  ["6. Privacy and security", "Ask what data the service collects, why it needs it, what defaults apply, who can access it, and what evidence supports its security claims. Privacy is contextual, not absolute."],
  ["7. Provider reliability", "Check the provider’s documentation, status history, support routes, ownership information, and track record. Do not treat polished marketing as independent proof."],
  ["8. Exit difficulty", "Before committing, find the cancellation, refund, export, recovery, and migration instructions. A cheap service is not cheap if leaving is painful."],
  ["9. Real-world testing", "Use a trial or free tier for one real task, on the device and workflow you actually use. Test the failure path too: recovery, export, or cancellation."],
  ["10. Evidence-based decision", "Record what is verified, what is a provider claim, what you tested, and what remains unknown. Buy only when the likely benefit justifies the cost and friction."],
];

const examples = [
  ["VPNs", "Define whether you need public-Wi-Fi privacy, a travel use case, or a particular network feature. Test connection reliability and your actual routes; do not assume a VPN provides anonymity."],
  ["Password managers", "Prioritize reliable capture, autofill, recovery, sharing, and access across your devices. Check the recovery model before storing anything important."],
  ["Cloud storage", "Separate sync from backup. Test sharing, version recovery, file access, storage growth, and export before moving a large library."],
  ["Data-removal services", "Define which exposure you want to reduce and what ongoing maintenance is realistic. Check coverage, reporting, reappearance, and cancellation terms."],
  ["Cybersecurity tools", "Start with the protection gap, not the largest bundle. Check what your operating system already does, then test alerts, performance, support, and overlap."],
];

const faqs = [
  ["Should I always choose the software with the most features?", "No. Features matter only when they support a required outcome. Extra features can add cost, setup work, confusion, or unused capability."],
  ["Is a free plan enough?", "Sometimes. Compare its limits with your actual workflow, how the provider funds it, what data practices apply, and what happens if you outgrow it."],
  ["What should I test before subscribing?", "Test the one task that motivated the purchase, plus one failure path such as recovery, export, support, or cancellation. Test on your real device and account setup."],
  ["When should I not buy software?", "Do not buy when the problem is minor, an existing tool already solves it, the evidence is too weak, switching is too difficult, or the recurring cost exceeds the likely benefit."],
];

export function HowToChooseSoftwarePage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "How to Choose Software: A Practical Buyer's Guide", description: "A practical framework for evaluating software fit, cost, privacy, usability, limits, and switching risk before you subscribe.", author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name }, mainEntityOfPage: site.url + "/guides/how-to-choose-software" };

  return <>
    <SEO title="How to Choose Software: A Practical Buyer's Guide" description="Use a practical, evidence-based framework to choose software based on fit, cost, usability, privacy, limits, and switching risk." path="/guides/how-to-choose-software" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageHeader eyebrow="Software buying guide" title="How to Choose Software: A Practical Buyer’s Guide" description="Choose software by the problem it solves, the friction it creates, and the evidence behind its claims—not by feature count alone." />
    <Section containerClassName="max-w-4xl">
      <div className="prose prose-slate max-w-none">
        <h2>Quick answer</h2><p>Start with the problem, define the outcome, and write down the few things the software must do. Then compare real cost, usability, limits, privacy and security context, provider reliability, and how difficult it would be to leave. Test one real task before paying, record what is known and unknown, and be willing not to buy.</p>
        <h2>The Better Software Decision Framework</h2><p>This ten-step framework works across software categories. Treat it as a worksheet: each step should produce an answer you can compare, not another pile of features.</p>
      </div>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2">{steps.map(([title, text]) => <li key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft"><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{text}</p></li>)}</ol>
      <div className="prose prose-slate mt-12 max-w-none"><h2>Apply the framework to common software</h2><p>The same questions change slightly by category:</p></div>
      <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft"><table className="w-full min-w-[620px] border-collapse text-left text-sm"><thead className="bg-slate-950 text-white"><tr><th className="px-4 py-4" scope="col">Category</th><th className="px-4 py-4" scope="col">What to prioritize</th></tr></thead><tbody>{examples.map(([category, text]) => <tr key={category} className="border-b border-slate-200 last:border-0"><th className="bg-slate-50 px-4 py-4 font-semibold text-slate-950" scope="row">{category}</th><td className="px-4 py-4 leading-6 text-slate-700">{text}</td></tr>)}</tbody></table></div>
      <div className="prose prose-slate mt-12 max-w-none"><h2>When not buying is the right decision</h2><p>A software purchase is not automatically a better outcome. Pause when the problem is not important, the current tool is good enough, the provider cannot answer basic questions, the trial cannot test the real task, or the ongoing cost and switching risk outweigh the benefit. “No purchase” is a valid result of an evidence-based comparison.</p><h2>Your final buyer checklist</h2></div>
      <ul className="mt-6 grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6 text-sm leading-6 text-slate-700 sm:grid-cols-2">{["I can state the problem in one sentence.","I know the outcome that matters.","I separated requirements from extras.","I calculated first-term and renewal cost.","I found the limits and failure cases.","I checked privacy and security evidence.","I know how to cancel and export.","I tested a real task and a failure path.","I recorded uncertainty.","I am comfortable not buying."].map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />{item}</li>)}</ul>
      <p className="mt-5 text-sm leading-6 text-slate-600">Want a reusable version of these checks? The Better Software Buyer Checklist is available through the newsletter signup below, alongside future beginner-friendly software guidance.</p>
      <div className="prose prose-slate mt-12 max-w-none"><h2>Frequently asked questions</h2>{faqs.map(([q, a]) => <div key={q}><h3>{q}</h3><p>{a}</p></div>)}<h2>Sources and methodology</h2><p>This guide synthesizes the <Link to="/about/how-we-review-software">Choose Better Tech review methodology</Link> with usability guidance from <a href="https://www.nist.gov/publications/common-industry-specification-usability-requirements" rel="noreferrer">NIST</a>, subscription guidance from the <a href="https://consumer.ftc.gov/articles/getting-and-out-free-trials-auto-renewals-and-negative-option-subscriptions" rel="noreferrer">FTC</a>, and privacy-by-design guidance from the <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/guide-to-accountability-and-governance/data-protection-by-design-and-by-default/" rel="noreferrer">ICO</a>. No product was ranked or hands-on tested for this cross-category guide. For category-specific decisions, continue to the <Link to="/guides/vpn-buying-guide">VPN Buying Guide</Link>, <Link to="/best-password-managers-for-beginners">password-manager guide</Link>, <Link to="/best-cloud-storage-for-beginners">cloud-storage guide</Link>, <Link to="/best-data-removal-services">data-removal guide</Link>, or <Link to="/best-antivirus-software">cybersecurity tools guide</Link>. See the <Link to="/affiliate-disclosure">Affiliate Disclosure</Link> for our commercial policy.</p></div>
    </Section>
  </>;
}
