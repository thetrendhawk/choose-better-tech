import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { incogniReview } from "../data/reviews/incogniReview";

export function IncogniReviewPage() {
  return (
    <>
      <SEO
        title="Incogni Review 2026: Does It Work and Is It Worth It?"
        description="Incogni review: see how recurring broker removals work, what the service cannot erase, privacy tradeoffs, and when to choose an alternative."
        path="/reviews/incogni-review"
      />
      <ReviewPageLayout review={incogniReview} />
    </>
  );
}
