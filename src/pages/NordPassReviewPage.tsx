import { ArticleMeta } from "../components/editorial/ArticleMeta";
import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { nordPassReview } from "../data/reviews/nordPassReview";

const reviewedNordPassContent = {
  ...nordPassReview,
  quickSummary: [
    { label: "Reviewed by", value: "Aaron Evans" },
    { label: "Last updated", value: "July 18, 2026" },
    ...nordPassReview.quickSummary
  ]
};

export function NordPassReviewPage() {
  return (
    <>
      <SEO
        title="NordPass Review (2026): Is It Worth It for Beginners and Families?"
        description="A beginner-focused NordPass review covering security, privacy, free plan, family features, business fit, value, transparency limits, and alternatives."
        path="/reviews/nordpass-review"
      />
      <ArticleMeta
        title={nordPassReview.title}
        description={nordPassReview.subtitle}
        path={nordPassReview.path}
        authorName="Aaron Evans"
        dateModified="2026-07-18"
        displayDate="July 18, 2026"
        showVisibleDetails={false}
      />
      <ReviewPageLayout review={reviewedNordPassContent} />
    </>
  );
}
