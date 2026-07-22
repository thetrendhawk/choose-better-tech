import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { deleteMeReview } from "../data/reviews/deletemeReview";

export function DeleteMeReviewPage() {
  return (
    <>
      <SEO
        title="DeleteMe Review 2026: Does It Work, and Is It Worth the Cost?"
        description="Our evidence-based DeleteMe review examines its $129 solo plan, human-assisted removals, reports, independent results, privacy tradeoffs, and limits."
        path="/reviews/deleteme-review"
      />
      <ReviewPageLayout review={deleteMeReview} />
    </>
  );
}
