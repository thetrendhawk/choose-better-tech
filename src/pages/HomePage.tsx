import { ArticleCard } from "../components/home/ArticleCard";
import { CategoryCard } from "../components/home/CategoryCard";
import { Hero } from "../components/home/Hero";
import { TrustCard } from "../components/home/TrustCard";
import { Newsletter } from "../components/Newsletter";
import { SEO } from "../components/SEO";
import { Section } from "../components/ui/Section";
import { categories, featuredGuides, trustPoints } from "../data/home";
import { site } from "../utils/site";

export function HomePage() {
  return <><SEO title={site.name} description={site.description} path="/" /><Hero /><Section><div className="max-w-2xl"><h2 className="text-3xl font-bold text-slate-950">Featured categories</h2><p className="mt-4 text-base leading-7 text-slate-700">Focused software topics for everyday readers who want practical, trustworthy guidance.</p></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category) => <CategoryCard key={category.key} category={category} />)}</div></Section><Section id="guides" className="bg-slate-50"><div className="max-w-2xl"><h2 className="text-3xl font-bold text-slate-950">Featured guides</h2><p className="mt-4 text-base leading-7 text-slate-700">The first editorial guides are being prepared with a research-first process.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{featuredGuides.map((article) => <ArticleCard key={article.key} article={article} />)}</div></Section><Section><div className="max-w-2xl"><h2 className="text-3xl font-bold text-slate-950">Why trust us</h2><p className="mt-4 text-base leading-7 text-slate-700">Choose Better Tech is built around clear standards, careful language, and visible disclosure.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{trustPoints.map((point) => <TrustCard key={point.key} point={point} />)}</div></Section><Newsletter /></>;
}
