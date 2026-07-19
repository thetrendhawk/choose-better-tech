import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { incogniReview } from "../data/reviews/incogniReview";

export function IncogniReviewPage() {
  return (
    <>
      <SEO
        title="Incogni Review (2026): Is It Worth It for Data Removal?"
        description="Our evidence-based Incogni review examines recurring broker removals, current plans, Deloitte assurance, privacy tradeoffs, family coverage, and limitations."
        path="/reviews/incogni-review"
      />
      <ReviewPageLayout review={incogniReview} />
    </>
  );
}
