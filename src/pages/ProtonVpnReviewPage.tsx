import { ReviewPageLayout } from "../components/reviews/ReviewPageLayout";
import { SEO } from "../components/SEO";
import { protonVpnReview } from "../data/reviews/protonVpnReview";

export function ProtonVpnReviewPage() {
  return (
    <>
      <SEO
        title="Proton VPN Review (2026): Is It Worth It for Beginners?"
        description="A beginner-focused Proton VPN review evaluating privacy, pricing, ease of use, free vs paid plans, performance, alternatives, and whether Proton VPN is worth it."
        path="/reviews/proton-vpn-review"
      />
      <ReviewPageLayout review={protonVpnReview} />
    </>
  );
}
