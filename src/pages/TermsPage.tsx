import { SEO } from "../components/SEO";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";

export function TermsPage() {
  return <><SEO title="Terms of Service" description="Read the placeholder terms of service for Choose Better Tech." path="/terms" /><PageHeader title="Terms of Service" eyebrow="Legal" description="This professional placeholder sets expectations for using Choose Better Tech content." /><Section containerClassName="max-w-4xl"><div className="prose prose-slate max-w-none"><p>These terms are a placeholder and should be reviewed before launch. By using Choose Better Tech, readers agree to use the site for informational purposes only.</p><h2>Editorial content</h2><p>Content is provided to help readers compare software options. It should not be treated as legal, financial, security, or professional advice.</p><h2>Accuracy</h2><p>We aim to keep information useful and current, but software pricing, features, and policies can change. Readers should verify details with the provider before purchasing.</p><h2>External links</h2><p>The site may link to third-party websites. Choose Better Tech is not responsible for the content, policies, or practices of external websites.</p><h2>Updates</h2><p>These terms may be updated as the website grows and adds new features or content.</p></div></Section></>;
}
