import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { onePasswordReview } from "../data/reviews/onePasswordReview";

export function OnePasswordReviewPage() {
  return (
    <>
      <SEO
        title="1Password Review (2026): Is It Worth It for Beginners and Families?"
        description="A beginner-focused 1Password review covering security, Secret Key, family features, audits, pricing tradeoffs, cross-platform use, and transparency limits."
        path="/reviews/1password-review"
      />
      <ReviewPageLayout review={onePasswordReview} />
    </>
  );
}
