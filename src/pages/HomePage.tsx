import { Eraser, KeyRound, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ArticleCard } from "../components/home/ArticleCard";
import { CategoryCard } from "../components/home/CategoryCard";
import { Hero } from "../components/home/Hero";
import { TrustCard } from "../components/home/TrustCard";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Section } from "../components/ui/Section";
import { featuredComparisons, featuredGuides, featuredReviews, trustPoints } from "../data/home";
import { site } from "../utils/site";

function SectionIntro({ eyebrow, title, description }: { eyebrow?: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-700">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold text-slate-950">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-700">{description}</p>
    </div>
  );
}

const homepageTopics = [
  {
    key: "vpn",
    title: "VPNs",
    description: "Compare VPN services, understand privacy limits, and choose based on your actual needs.",
    icon: ShieldCheck,
    href: "/vpn"
  },
  {
    key: "password-managers",
    title: "Password Managers",
    description: "Find the right password manager for security, privacy, families, free plans, and everyday use.",
    icon: KeyRound,
    href: "/password-managers"
  },
  {
    key: "data-removal",
    title: "Data Removal Services",
    description: "Understand what data-removal services can do, how they differ, and when paying is worthwhile.",
    icon: Eraser,
    href: "/data-removal"
  }
];

const homepageComparisonKeys = new Set([
  "icloud-vs-google-drive",
  "nordvpn-vs-protonvpn",
  "nordvpn-vs-surfshark",
  "bitwarden-vs-1password",
  "bitwarden-vs-proton-pass",
  "onepassword-vs-proton-pass"
]);

const homepageComparisons = featuredComparisons.filter((article) => homepageComparisonKeys.has(article.key));
const homepageGuides = featuredGuides.slice(0, 6);

export function HomePage() {
  return (
    <>
      <SEO title={site.name} description={site.description} path="/" />
      <Hero />

      <Section className="bg-white">
        <SectionIntro
          eyebrow="Explore by topic"
          title="Start with what you need help choosing"
          description="These are the software topics we currently cover in depth, with dedicated guides, reviews, and comparisons."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {homepageTopics.map((category) => <CategoryCard key={category.key} category={category} />)}
        </div>
      </Section>

      <Section id="reviews" className="bg-slate-50">
        <SectionIntro
          eyebrow="Research-backed"
          title="Featured reviews"
          description="Product reviews that explain fit, tradeoffs, uncertainty, and reader-specific recommendations."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((article) => <ArticleCard key={article.key} article={article} />)}
        </div>
        <div className="mt-8">
          <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-brand-200 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/reviews">View All Reviews</Link>
        </div>
      </Section>

      <Section id="comparisons" className="bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_55%,#f0fdfa_100%)]">
        <SectionIntro
          eyebrow="Side by side"
          title="Featured comparisons"
          description="Evidence-based comparisons that help readers choose based on fit, tradeoffs, and use case instead of one-size-fits-all winners."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homepageComparisons.map((article) => <ArticleCard key={article.key} article={article} />)}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/comparisons">View All Comparisons</Link>
          <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-brand-200 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/vpn">Open VPN Hub</Link>
          <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-brand-200 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" to="/password-managers">Open Password Manager Hub</Link>
        </div>
      </Section>

      <Section id="guides" className="bg-white">
        <SectionIntro
          eyebrow="Beginner-friendly"
          title="Beginner guides"
          description="Plain-English explainers and buying guides for readers who want the important details without the noise."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homepageGuides.map((article) => <ArticleCard key={article.key} article={article} />)}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionIntro
          eyebrow="Editorial standards"
          title="Why trust us"
          description="Choose Better Tech is built around clear standards, careful language, and visible disclosure."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {trustPoints.map((point) => <TrustCard key={point.key} point={point} />)}
        </div>
      </Section>

      <Newsletter />
    </>
  );
}
