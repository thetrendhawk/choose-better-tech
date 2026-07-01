import { Route, Routes } from "react-router-dom";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { SiteLayout } from "./layouts/SiteLayout";
import { AboutPage } from "./pages/AboutPage";
import { AffiliateDisclosurePage } from "./pages/AffiliateDisclosurePage";
import { BestVpnsForBeginnersPage } from "./pages/BestVpnsForBeginnersPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ProtonVpnReviewPage } from "./pages/ProtonVpnReviewPage";
import { TermsPage } from "./pages/TermsPage";
import { VpnGuidePage } from "./pages/VpnGuidePage";

export default function App() {
  return (
    <>
      <GoogleAnalytics />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="affiliate-disclosure" element={<AffiliateDisclosurePage />} />
          <Route path="guides/best-vpns-for-beginners" element={<BestVpnsForBeginnersPage />} />
          <Route path="guides/how-vpns-work" element={<VpnGuidePage slug="how-vpns-work" />} />
          <Route path="guides/free-vpn-vs-paid" element={<VpnGuidePage slug="free-vpn-vs-paid" />} />
          <Route path="guides/vpn-buying-guide" element={<VpnGuidePage slug="vpn-buying-guide" />} />
          <Route path="guides/vpn-myths" element={<VpnGuidePage slug="vpn-myths" />} />
          <Route path="guides/is-proton-vpn-free-good-enough" element={<VpnGuidePage slug="is-proton-vpn-free-good-enough" />} />
          <Route path="reviews/proton-vpn-review" element={<ProtonVpnReviewPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
