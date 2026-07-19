import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { opteryReview } from "../data/reviews/opteryReview";

export function OpteryReviewPage() {
  return (
    <>
      <SEO
        title="Optery Review (2026): Is It Worth Paying For?"
        description="An evidence-based Optery review covering the free exposure scan, paid plans, screenshot reports, effectiveness, privacy tradeoffs, and who should pay."
        path="/reviews/optery-review"
      />
      <ReviewPageLayout review={opteryReview} />
    </>
  );
}