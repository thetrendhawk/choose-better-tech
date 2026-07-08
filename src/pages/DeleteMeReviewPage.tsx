import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { deleteMeReview } from "../data/reviews/deletemeReview";

export function DeleteMeReviewPage() {
  return (
    <>
      <SEO
        title="DeleteMe Review (2026): Data Broker Removal, Limits, and Value"
        description="A beginner-focused DeleteMe review covering human-assisted data broker removal, reports, Consumer Reports findings, privacy tradeoffs, pricing caveats, and alternatives."
        path="/reviews/deleteme-review"
      />
      <ReviewPageLayout review={deleteMeReview} />
    </>
  );
}
