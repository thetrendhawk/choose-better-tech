import { site } from "../../utils/site";

type ArticleMetaProps = {
  title: string;
  description: string;
  path: string;
  authorName: string;
  authorType?: "Person" | "Organization";
  datePublished?: string;
  dateModified: string;
  displayDate: string;
  showVisibleDetails?: boolean;
  visibleCreditLabel?: string;
};

export function ArticleMeta({
  title,
  description,
  path,
  authorName,
  authorType = "Person",
  datePublished,
  dateModified,
  displayDate,
  showVisibleDetails = true,
  visibleCreditLabel = "Reviewed by"
}: ArticleMetaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: site.url + path,
    ...(datePublished ? { datePublished } : {}),
    dateModified,
    author: {
      "@type": authorType,
      name: authorName
    },
    publisher: {
      "@type": "Organization",
      name: site.name
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {showVisibleDetails ? (
        <div className="mt-5 flex flex-col gap-1 text-sm text-slate-600" aria-label="Article details">
          <span>{visibleCreditLabel} <strong className="font-semibold text-slate-900">{authorName}</strong></span>
          <span>Updated <time dateTime={dateModified}>{displayDate}</time></span>
        </div>
      ) : null}
    </>
  );
}
