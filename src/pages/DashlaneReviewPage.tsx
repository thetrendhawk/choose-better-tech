import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { dashlaneReview } from "../data/reviews/dashlaneReview";

export function DashlaneReviewPage() {
  return (
    <>
      <SEO
        title="Dashlane Review 2026: Strong Security, But Is It Worth Paying For?"
        description="An evidence-based Dashlane review covering security, the 2026 security advisories, passkeys, recovery, family accounts, phishing protection, and paid-plan tradeoffs."
        path="/reviews/dashlane-review"
      />
      <ReviewPageLayout review={dashlaneReview} />
    </>
  );
}
