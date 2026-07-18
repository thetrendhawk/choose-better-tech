import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { nordPassReview } from "../data/reviews/nordPassReview";
import { site } from "../utils/site";

const reviewedNordPassContent = {
  ...nordPassReview,
  quickSummary: [
    { label: "Reviewed by", value: "Aaron Evans" },
    { label: "Last updated", value: "July 18, 2026" },
    ...nordPassReview.quickSummary
  ]
};

export function NordPassReviewPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: nordPassReview.title,
    description: nordPassReview.subtitle,
    mainEntityOfPage: site.url + nordPassReview.path,
    dateModified: "2026-07-18",
    author: {
      "@type": "Person",
      name: "Aaron Evans"
    },
    publisher: {
      "@type": "Organization",
      name: site.name
    }
  };

  return (
    <>
      <SEO
        title="NordPass Review (2026): Is It Worth It for Beginners and Families?"
        description="A beginner-focused NordPass review covering security, privacy, free plan, family features, business fit, value, transparency limits, and alternatives."
        path="/reviews/nordpass-review"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <ReviewPageLayout review={reviewedNordPassContent} />
    </>
  );
}
