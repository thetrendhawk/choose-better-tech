import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { opteryReview } from "../data/reviews/opteryReview";

export function OpteryReviewPage() {
  return (
    <>
      <SEO
        title="Optery Review (2026): Proof-First Data Broker Removal"
        description="A beginner-focused Optery review covering people-search removal, screenshot reports, free exposure scans, privacy tradeoffs, pricing volatility, and data-removal limits."
        path="/reviews/optery-review"
      />
      <ReviewPageLayout review={opteryReview} />
    </>
  );
}
