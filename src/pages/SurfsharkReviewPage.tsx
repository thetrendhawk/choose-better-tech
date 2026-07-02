import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { surfsharkReview } from "../data/reviews/surfsharkReview";

export function SurfsharkReviewPage() {
  return (
    <>
      <SEO
        title="Surfshark VPN Review (2026): Is It Worth It for Beginners?"
        description="A beginner-focused Surfshark VPN review covering value, unlimited devices, privacy nuance, audits, streaming uncertainty, pricing risk, and tradeoffs."
        path="/reviews/surfshark-review"
      />
      <ReviewPageLayout review={surfsharkReview} />
    </>
  );
}
