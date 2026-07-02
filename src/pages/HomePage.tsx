import { ArticleCard } from "../components/home/ArticleCard";
import { CategoryCard } from "../components/home/CategoryCard";
import { Hero } from "../components/home/Hero";
import { TrustCard } from "../components/home/TrustCard";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Section } from "../components/ui/Section";
import { categories, featuredComparisons, featuredGuides, featuredReviews, trustPoints } from "../data/home";
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

export function HomePage() {
  return (
    <>
      <SEO title={site.name} description={site.description} path="/" />
      <Hero />

      <Section className="bg-white">
        <SectionIntro
          eyebrow="Start here"
          title="Featured categories"
          description="Focused software topics for everyday readers who want practical, trustworthy guidance."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => <CategoryCard key={category.key} category={category} />)}
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
      </Section>

      <Section id="comparisons" className="bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_55%,#f0fdfa_100%)]">
        <SectionIntro
          eyebrow="Side by side"
          title="Featured comparisons"
          description="Evidence-based comparisons that help readers choose based on fit, tradeoffs, and use case instead of one-size-fits-all winners."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredComparisons.map((article) => <ArticleCard key={article.key} article={article} />)}
        </div>
      </Section>

      <Section id="guides" className="bg-white">
        <SectionIntro
          eyebrow="Beginner-friendly"
          title="Beginner guides"
          description="Plain-English explainers and buying guides for readers who want the important details without the noise."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((article) => <ArticleCard key={article.key} article={article} />)}
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
