import { ArticleCard } from "../components/home/ArticleCard";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { reviewGroups } from "../data/contentIndexes";

function LibraryHero() {
  return (
    <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#fbfcff_0%,#ffffff_45%,#eefdf9_100%)] py-16 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Review Library</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">All Software Reviews</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Browse every published Choose Better Tech review. Each review is evidence-based, fit-based, and written to explain who a product is for, who should avoid it, and what uncertainty still needs to be checked.
        </p>
      </Container>
    </section>
  );
}

export function ReviewsIndexPage() {
  return (
    <>
      <SEO
        title="Software Reviews"
        description="Browse all Choose Better Tech software reviews, grouped by category and focused on evidence, fit, tradeoffs, and reader-specific recommendations."
        path="/reviews"
      />
      <LibraryHero />
      {reviewGroups.map((group, index) => (
        <Section key={group.title} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Reviews</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">{group.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-700">{group.description}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {group.articles.map((article) => <ArticleCard key={article.key} article={article} />)}
          </div>
        </Section>
      ))}
    </>
  );
}
