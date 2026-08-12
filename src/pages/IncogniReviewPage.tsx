import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { incogniReview } from "../data/reviews/incogniReview";

export function IncogniReviewPage() {
  return (
    <>
      <SEO
        title="Incogni Review 2026: Does It Work and Is It Worth It?"
        description="Does Incogni work? Our 2026 review examines data-broker removals, pricing, recurring requests, Deloitte assurance, privacy tradeoffs, and who should use it."
        path="/reviews/incogni-review"
      />
      <ReviewPageLayout review={incogniReview} />
    </>
  );
}
