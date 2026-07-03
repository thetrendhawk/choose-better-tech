import { Route, Routes } from "react-router-dom";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { ScrollToTop } from "./components/ScrollToTop";
import { SiteLayout } from "./layouts/SiteLayout";
import { AboutPage } from "./pages/AboutPage";
import { AffiliateDisclosurePage } from "./pages/AffiliateDisclosurePage";
import { BestVpnsForBeginnersPage } from "./pages/BestVpnsForBeginnersPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { HowWeReviewSoftwarePage } from "./pages/HowWeReviewSoftwarePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NordVpnVsProtonVpnPage } from "./pages/NordVpnVsProtonVpnPage";
import { NordVpnVsSurfsharkPage } from "./pages/NordVpnVsSurfsharkPage";
import { NordVpnReviewPage } from "./pages/NordVpnReviewPage";
import { OnePasswordReviewPage } from "./pages/OnePasswordReviewPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ProtonVpnVsSurfsharkPage } from "./pages/ProtonVpnVsSurfsharkPage";
import { ProtonVpnReviewPage } from "./pages/ProtonVpnReviewPage";
import { SurfsharkReviewPage } from "./pages/SurfsharkReviewPage";
import { TermsPage } from "./pages/TermsPage";
import { VpnDecisionHubPage } from "./pages/VpnDecisionHubPage";
import { VpnGuidePage } from "./pages/VpnGuidePage";

export default function App() {
  return (
    <>
      <GoogleAnalytics />
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/how-we-review-software" element={<HowWeReviewSoftwarePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="affiliate-disclosure" element={<AffiliateDisclosurePage />} />
          <Route path="vpn" element={<VpnDecisionHubPage />} />
          <Route path="guides/best-vpns-for-beginners" element={<BestVpnsForBeginnersPage />} />
          <Route path="guides/how-vpns-work" element={<VpnGuidePage slug="how-vpns-work" />} />
          <Route path="guides/free-vpn-vs-paid" element={<VpnGuidePage slug="free-vpn-vs-paid" />} />
          <Route path="guides/vpn-buying-guide" element={<VpnGuidePage slug="vpn-buying-guide" />} />
          <Route path="guides/vpn-myths" element={<VpnGuidePage slug="vpn-myths" />} />
          <Route path="guides/is-proton-vpn-free-good-enough" element={<VpnGuidePage slug="is-proton-vpn-free-good-enough" />} />
          <Route path="comparisons/nordvpn-vs-protonvpn" element={<NordVpnVsProtonVpnPage />} />
          <Route path="comparisons/nordvpn-vs-surfshark" element={<NordVpnVsSurfsharkPage />} />
          <Route path="comparisons/proton-vpn-vs-surfshark" element={<ProtonVpnVsSurfsharkPage />} />
          <Route path="reviews/nordvpn-review" element={<NordVpnReviewPage />} />
          <Route path="reviews/proton-vpn-review" element={<ProtonVpnReviewPage />} />
          <Route path="reviews/surfshark-review" element={<SurfsharkReviewPage />} />
          <Route path="reviews/1password-review" element={<OnePasswordReviewPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
