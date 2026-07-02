import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { nordVpnReview } from "../data/reviews/nordVpnReview";

export function NordVpnReviewPage() {
  return (
    <>
      <SEO
        title="NordVPN Review (2026): Is It Worth It for Beginners?"
        description="A beginner-focused NordVPN review covering privacy, security, speed, streaming, pricing uncertainty, alternatives, and whether NordVPN is worth it."
        path="/reviews/nordvpn-review"
      />
      <ReviewPageLayout review={nordVpnReview} />
    </>
  );
}

