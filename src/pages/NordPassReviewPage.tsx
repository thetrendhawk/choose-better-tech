import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { nordPassReview } from "../data/reviews/nordPassReview";

export function NordPassReviewPage() {
  return (
    <>
      <SEO
        title="NordPass Review (2026): Is It Worth It for Beginners and Families?"
        description="A beginner-focused NordPass review covering security, privacy, free plan, family features, business fit, value, transparency limits, and alternatives."
        path="/reviews/nordpass-review"
      />
      <ReviewPageLayout review={nordPassReview} />
    </>
  );
}
