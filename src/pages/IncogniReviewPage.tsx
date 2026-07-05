import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { incogniReview } from "../data/reviews/incogniReview";

export function IncogniReviewPage() {
  return (
    <>
      <SEO
        title="Incogni Review (2026): Data Broker Removal, Limits, and Value"
        description="A beginner-focused Incogni review covering broker removal, Deloitte assurance, recurring requests, privacy tradeoffs, family plans, dashboard limits, and alternatives."
        path="/reviews/incogni-review"
      />
      <ReviewPageLayout review={incogniReview} />
    </>
  );
}
