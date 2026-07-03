import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { bitwardenReview } from "../data/reviews/bitwardenReview";

export function BitwardenReviewPage() {
  return (
    <>
      <SEO
        title="Bitwarden Review (2026): Free Plan, Security, Self-Hosting, and Tradeoffs"
        description="An evidence-based Bitwarden review covering free-plan value, transparency, security, self-hosting, business fit, UX tradeoffs, and licensing nuance."
        path="/reviews/bitwarden-review"
      />
      <ReviewPageLayout review={bitwardenReview} />
    </>
  );
}
