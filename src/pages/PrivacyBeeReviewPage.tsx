import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { privacyBeeReview } from "../data/reviews/privacyBeeReview";

export function PrivacyBeeReviewPage() {
  return (
    <>
      <SEO
        title="Privacy Bee Review 2026: Does It Work, and Is It Worth It?"
        description="Our hands-on Privacy Bee review examines data removal, monitoring, pricing, support, Search Presence, Identity Vault, and the limits of its completion metrics."
        path="/reviews/privacy-bee-review"
      />
      <ReviewPageLayout review={privacyBeeReview} />
    </>
  );
}

