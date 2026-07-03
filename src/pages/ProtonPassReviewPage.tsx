import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { protonPassReview } from "../data/reviews/protonPassReview";

export function ProtonPassReviewPage() {
  return (
    <>
      <SEO
        title="Proton Pass Review (2026): Privacy, Free Plan, Aliases, and Tradeoffs"
        description="A beginner-focused Proton Pass review covering privacy, open-source apps, free plan, aliases, audits, family fit, value, and password-manager tradeoffs."
        path="/reviews/proton-pass-review"
      />
      <ReviewPageLayout review={protonPassReview} />
    </>
  );
}
