import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { protonVpnReview } from "../data/reviews/protonVpnReview";

export function ProtonVpnReviewPage() {
  return (
    <>
      <SEO
        title="Proton VPN Review (2026): Is It Worth It for Beginners?"
        description="A beginner-focused Proton VPN review page built to evaluate privacy, pricing, ease of use, and whether it is a good fit for everyday users."
        path="/reviews/proton-vpn-review"
      />
      <ReviewPageLayout review={protonVpnReview} />
    </>
  );
}
