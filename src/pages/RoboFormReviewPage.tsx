import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { roboFormReview } from "../data/reviews/roboFormReview";

export function RoboFormReviewPage() {
  return (
    <>
      <SEO
        title="RoboForm Review (2026): Form Filling, Value, and Security Tradeoffs"
        description="A beginner-focused RoboForm review covering form filling, security, privacy, free-plan limits, family features, business fit, value, and transparency caveats."
        path="/reviews/roboform-review"
      />
      <ReviewPageLayout review={roboFormReview} />
    </>
  );
}
