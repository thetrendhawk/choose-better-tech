import { ArticleCard } from "../components/home/ArticleCard";
import { SEO } from "../components/SEO";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { comparisonGroups } from "../data/contentIndexes";

function LibraryHero() {
  return (
    <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#fbfcff_0%,#ffffff_45%,#eefdf9_100%)] py-16 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Comparison Library</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">All Software Comparisons</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          Browse every published Choose Better Tech comparison. These articles are built around reader fit, practical tradeoffs, and use cases instead of fake universal winners.
        </p>
      </Container>
    </section>
  );
}

export function ComparisonsIndexPage() {
  return (
    <>
      <SEO
        title="Software Comparisons"
        description="Browse all Choose Better Tech software comparisons, grouped by category and focused on reader fit, practical tradeoffs, and evidence-based choices."
        path="/comparisons"
      />
      <LibraryHero />
      {comparisonGroups.map((group, index) => (
        <Section key={group.title} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Comparisons</p>
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
