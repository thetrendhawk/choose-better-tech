import { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { ScrollToTop } from "./components/ScrollToTop";
import { SiteLayout } from "./layouts/SiteLayout";

const AboutPage = lazy(() => import("./pages/AboutPage").then((module) => ({ default: module.AboutPage })));
const AffiliateDisclosurePage = lazy(() => import("./pages/AffiliateDisclosurePage").then((module) => ({ default: module.AffiliateDisclosurePage })));
const BestVpnsForBeginnersPage = lazy(() => import("./pages/BestVpnsForBeginnersPage").then((module) => ({ default: module.BestVpnsForBeginnersPage })));
const BitwardenReviewPage = lazy(() => import("./pages/BitwardenReviewPage").then((module) => ({ default: module.BitwardenReviewPage })));
const BitwardenVsNordPassPage = lazy(() => import("./pages/BitwardenVsNordPassPage").then((module) => ({ default: module.BitwardenVsNordPassPage })));
const BitwardenVsOnePasswordPage = lazy(() => import("./pages/BitwardenVsOnePasswordPage").then((module) => ({ default: module.BitwardenVsOnePasswordPage })));
const BitwardenVsProtonPassPage = lazy(() => import("./pages/BitwardenVsProtonPassPage").then((module) => ({ default: module.BitwardenVsProtonPassPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((module) => ({ default: module.ContactPage })));
const HomePage = lazy(() => import("./pages/HomePage").then((module) => ({ default: module.HomePage })));
const HowWeReviewSoftwarePage = lazy(() => import("./pages/HowWeReviewSoftwarePage").then((module) => ({ default: module.HowWeReviewSoftwarePage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((module) => ({ default: module.NotFoundPage })));
const NordPassReviewPage = lazy(() => import("./pages/NordPassReviewPage").then((module) => ({ default: module.NordPassReviewPage })));
const NordVpnReviewPage = lazy(() => import("./pages/NordVpnReviewPage").then((module) => ({ default: module.NordVpnReviewPage })));
const NordVpnVsProtonVpnPage = lazy(() => import("./pages/NordVpnVsProtonVpnPage").then((module) => ({ default: module.NordVpnVsProtonVpnPage })));
const NordVpnVsSurfsharkPage = lazy(() => import("./pages/NordVpnVsSurfsharkPage").then((module) => ({ default: module.NordVpnVsSurfsharkPage })));
const OnePasswordReviewPage = lazy(() => import("./pages/OnePasswordReviewPage").then((module) => ({ default: module.OnePasswordReviewPage })));
const OnePasswordVsNordPassPage = lazy(() => import("./pages/OnePasswordVsNordPassPage").then((module) => ({ default: module.OnePasswordVsNordPassPage })));
const OnePasswordVsProtonPassPage = lazy(() => import("./pages/OnePasswordVsProtonPassPage").then((module) => ({ default: module.OnePasswordVsProtonPassPage })));
const PasswordManagersHubPage = lazy(() => import("./pages/PasswordManagersHubPage").then((module) => ({ default: module.PasswordManagersHubPage })));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage").then((module) => ({ default: module.PrivacyPage })));
const ProtonPassReviewPage = lazy(() => import("./pages/ProtonPassReviewPage").then((module) => ({ default: module.ProtonPassReviewPage })));
const ProtonPassVsNordPassPage = lazy(() => import("./pages/ProtonPassVsNordPassPage").then((module) => ({ default: module.ProtonPassVsNordPassPage })));
const ProtonVpnReviewPage = lazy(() => import("./pages/ProtonVpnReviewPage").then((module) => ({ default: module.ProtonVpnReviewPage })));
const ProtonVpnVsSurfsharkPage = lazy(() => import("./pages/ProtonVpnVsSurfsharkPage").then((module) => ({ default: module.ProtonVpnVsSurfsharkPage })));
const RoboFormReviewPage = lazy(() => import("./pages/RoboFormReviewPage").then((module) => ({ default: module.RoboFormReviewPage })));
const SurfsharkReviewPage = lazy(() => import("./pages/SurfsharkReviewPage").then((module) => ({ default: module.SurfsharkReviewPage })));
const TermsPage = lazy(() => import("./pages/TermsPage").then((module) => ({ default: module.TermsPage })));
const VpnDecisionHubPage = lazy(() => import("./pages/VpnDecisionHubPage").then((module) => ({ default: module.VpnDecisionHubPage })));
const VpnGuidePage = lazy(() => import("./pages/VpnGuidePage").then((module) => ({ default: module.VpnGuidePage })));

function RouteFallback() {
  return (
    <div className="px-6 py-16 text-center text-sm font-semibold text-slate-600" role="status">
      Loading page...
    </div>
  );
}

function LazyRouteOutlet() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Outlet />
    </Suspense>
  );
}

export default function App() {
  return (
    <>
      <GoogleAnalytics />
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route element={<LazyRouteOutlet />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="about/how-we-review-software" element={<HowWeReviewSoftwarePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="affiliate-disclosure" element={<AffiliateDisclosurePage />} />
            <Route path="vpn" element={<VpnDecisionHubPage />} />
            <Route path="password-managers" element={<PasswordManagersHubPage />} />
            <Route path="guides/best-vpns-for-beginners" element={<BestVpnsForBeginnersPage />} />
            <Route path="guides/how-vpns-work" element={<VpnGuidePage slug="how-vpns-work" />} />
            <Route path="guides/free-vpn-vs-paid" element={<VpnGuidePage slug="free-vpn-vs-paid" />} />
            <Route path="guides/vpn-buying-guide" element={<VpnGuidePage slug="vpn-buying-guide" />} />
            <Route path="guides/vpn-myths" element={<VpnGuidePage slug="vpn-myths" />} />
            <Route path="guides/is-proton-vpn-free-good-enough" element={<VpnGuidePage slug="is-proton-vpn-free-good-enough" />} />
            <Route path="comparisons/nordvpn-vs-protonvpn" element={<NordVpnVsProtonVpnPage />} />
            <Route path="comparisons/nordvpn-vs-surfshark" element={<NordVpnVsSurfsharkPage />} />
            <Route path="comparisons/proton-vpn-vs-surfshark" element={<ProtonVpnVsSurfsharkPage />} />
            <Route path="comparisons/1password-vs-nordpass" element={<OnePasswordVsNordPassPage />} />
            <Route path="comparisons/proton-pass-vs-nordpass" element={<ProtonPassVsNordPassPage />} />
            <Route path="comparisons/1password-vs-proton-pass" element={<OnePasswordVsProtonPassPage />} />
            <Route path="comparisons/bitwarden-vs-1password" element={<BitwardenVsOnePasswordPage />} />
            <Route path="comparisons/bitwarden-vs-proton-pass" element={<BitwardenVsProtonPassPage />} />
            <Route path="comparisons/bitwarden-vs-nordpass" element={<BitwardenVsNordPassPage />} />
            <Route path="reviews/nordvpn-review" element={<NordVpnReviewPage />} />
            <Route path="reviews/proton-vpn-review" element={<ProtonVpnReviewPage />} />
            <Route path="reviews/surfshark-review" element={<SurfsharkReviewPage />} />
            <Route path="reviews/1password-review" element={<OnePasswordReviewPage />} />
            <Route path="reviews/bitwarden-review" element={<BitwardenReviewPage />} />
            <Route path="reviews/nordpass-review" element={<NordPassReviewPage />} />
            <Route path="reviews/proton-pass-review" element={<ProtonPassReviewPage />} />
            <Route path="reviews/roboform-review" element={<RoboFormReviewPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
