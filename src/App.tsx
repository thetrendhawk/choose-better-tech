import { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { ScrollToTop } from "./components/ScrollToTop";
import { SiteLayout } from "./layouts/SiteLayout";

const AboutPage = lazy(() => import("./pages/AboutPage").then((module) => ({ default: module.AboutPage })));
const AffiliateDisclosurePage = lazy(() => import("./pages/AffiliateDisclosurePage").then((module) => ({ default: module.AffiliateDisclosurePage })));
const AreDataRemovalServicesWorthItPage = lazy(() => import("./pages/AreDataRemovalServicesWorthItPage").then((module) => ({ default: module.AreDataRemovalServicesWorthItPage })));
const ArePasswordManagersSafePage = lazy(() => import("./pages/ArePasswordManagersSafePage").then((module) => ({ default: module.ArePasswordManagersSafePage })));
const AreVpnsWorthItPage = lazy(() => import("./pages/AreVpnsWorthItPage").then((module) => ({ default: module.AreVpnsWorthItPage })));
const BestDataRemovalServicesPage = lazy(() => import("./pages/BestDataRemovalServicesPage").then((module) => ({ default: module.BestDataRemovalServicesPage })));
const BestFreePasswordManagersPage = lazy(() => import("./pages/BestFreePasswordManagersPage").then((module) => ({ default: module.BestFreePasswordManagersPage })));
const BestFreeVpnsPage = lazy(() => import("./pages/BestFreeVpnsPage").then((module) => ({ default: module.BestFreeVpnsPage })));
const BestVpnsForFamiliesPage = lazy(() => import("./pages/BestVpnsForFamiliesPage").then((module) => ({ default: module.BestVpnsForFamiliesPage })));
const BestVpnsForStudentsPage = lazy(() => import("./pages/BestVpnsForStudentsPage").then((module) => ({ default: module.BestVpnsForStudentsPage })));
const BestVpnsForTravelPage = lazy(() => import("./pages/BestVpnsForTravelPage").then((module) => ({ default: module.BestVpnsForTravelPage })));
const BestVpnsForStreamingPage = lazy(() => import("./pages/BestVpnsForStreamingPage").then((module) => ({ default: module.BestVpnsForStreamingPage })));
const BestCloudStorageForBeginnersPage = lazy(() => import("./pages/BestCloudStorageForBeginnersPage").then((module) => ({ default: module.BestCloudStorageForBeginnersPage })));
const BestAntivirusSoftwarePage = lazy(() => import("./pages/BestAntivirusSoftwarePage").then((module) => ({ default: module.BestAntivirusSoftwarePage })));
const BestSecureCloudStoragePage = lazy(() => import("./pages/BestSecureCloudStoragePage").then((module) => ({ default: module.BestSecureCloudStoragePage })));
const GoogleDriveVsDropboxPage = lazy(() => import("./pages/GoogleDriveVsDropboxPage").then((module) => ({ default: module.GoogleDriveVsDropboxPage })));
const ICloudVsGoogleDrivePage = lazy(() => import("./pages/ICloudVsGoogleDrivePage").then((module) => ({ default: module.ICloudVsGoogleDrivePage })));
const ProtonDriveReviewPage = lazy(() => import("./pages/ProtonDriveReviewPage").then((module) => ({ default: module.ProtonDriveReviewPage })));
const BestVpnsForBeginnersPage = lazy(() => import("./pages/BestVpnsForBeginnersPage").then((module) => ({ default: module.BestVpnsForBeginnersPage })));
const BestPasswordManagersForBeginnersPage = lazy(() => import("./pages/BestPasswordManagersForBeginnersPage").then((module) => ({ default: module.BestPasswordManagersForBeginnersPage })));
const BestPasswordManagersForFamiliesPage = lazy(() => import("./pages/BestPasswordManagersForFamiliesPage").then((module) => ({ default: module.BestPasswordManagersForFamiliesPage })));
const BestPasswordManagersForPrivacyPage = lazy(() => import("./pages/BestPasswordManagersForPrivacyPage").then((module) => ({ default: module.BestPasswordManagersForPrivacyPage })));
const BitwardenReviewPage = lazy(() => import("./pages/BitwardenReviewPage").then((module) => ({ default: module.BitwardenReviewPage })));
const BitwardenVsNordPassPage = lazy(() => import("./pages/BitwardenVsNordPassPage").then((module) => ({ default: module.BitwardenVsNordPassPage })));
const BitwardenVsOnePasswordPage = lazy(() => import("./pages/BitwardenVsOnePasswordPage").then((module) => ({ default: module.BitwardenVsOnePasswordPage })));
const BitwardenVsProtonPassPage = lazy(() => import("./pages/BitwardenVsProtonPassPage").then((module) => ({ default: module.BitwardenVsProtonPassPage })));
const ComparisonsIndexPage = lazy(() => import("./pages/ComparisonsIndexPage").then((module) => ({ default: module.ComparisonsIndexPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((module) => ({ default: module.ContactPage })));
const DataRemovalHubPage = lazy(() => import("./pages/DataRemovalHubPage").then((module) => ({ default: module.DataRemovalHubPage })));
const DeleteMeReviewPage = lazy(() => import("./pages/DeleteMeReviewPage").then((module) => ({ default: module.DeleteMeReviewPage })));
const HomePage = lazy(() => import("./pages/HomePage").then((module) => ({ default: module.HomePage })));
const HowWeReviewSoftwarePage = lazy(() => import("./pages/HowWeReviewSoftwarePage").then((module) => ({ default: module.HowWeReviewSoftwarePage })));
const IncogniReviewPage = lazy(() => import("./pages/IncogniReviewPage").then((module) => ({ default: module.IncogniReviewPage })));
const IncogniVsDeleteMePage = lazy(() => import("./pages/IncogniVsDeleteMePage").then((module) => ({ default: module.IncogniVsDeleteMePage })));
const IncogniVsOpteryPage = lazy(() => import("./pages/IncogniVsOpteryPage").then((module) => ({ default: module.IncogniVsOpteryPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((module) => ({ default: module.NotFoundPage })));
const NordPassReviewPage = lazy(() => import("./pages/NordPassReviewPage").then((module) => ({ default: module.NordPassReviewPage })));
const NordVpnReviewPage = lazy(() => import("./pages/NordVpnReviewPage").then((module) => ({ default: module.NordVpnReviewPage })));
const NordVpnVsProtonVpnPage = lazy(() => import("./pages/NordVpnVsProtonVpnPage").then((module) => ({ default: module.NordVpnVsProtonVpnPage })));
const NordVpnVsSurfsharkPage = lazy(() => import("./pages/NordVpnVsSurfsharkPage").then((module) => ({ default: module.NordVpnVsSurfsharkPage })));
const OnePasswordReviewPage = lazy(() => import("./pages/OnePasswordReviewPage").then((module) => ({ default: module.OnePasswordReviewPage })));
const OnePasswordVsNordPassPage = lazy(() => import("./pages/OnePasswordVsNordPassPage").then((module) => ({ default: module.OnePasswordVsNordPassPage })));
const OnePasswordVsProtonPassPage = lazy(() => import("./pages/OnePasswordVsProtonPassPage").then((module) => ({ default: module.OnePasswordVsProtonPassPage })));
const OpteryReviewPage = lazy(() => import("./pages/OpteryReviewPage").then((module) => ({ default: module.OpteryReviewPage })));
const OpteryVsDeleteMePage = lazy(() => import("./pages/OpteryVsDeleteMePage").then((module) => ({ default: module.OpteryVsDeleteMePage })));
const PasswordManagersHubPage = lazy(() => import("./pages/PasswordManagersHubPage").then((module) => ({ default: module.PasswordManagersHubPage })));
const PasswordManagerVsBrowserPasswordsPage = lazy(() => import("./pages/PasswordManagerVsBrowserPasswordsPage").then((module) => ({ default: module.PasswordManagerVsBrowserPasswordsPage })));
const HowPasswordManagersWorkPage = lazy(() => import("./pages/HowPasswordManagersWorkPage").then((module) => ({ default: module.HowPasswordManagersWorkPage })));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage").then((module) => ({ default: module.PrivacyPage })));
const ProtonPassReviewPage = lazy(() => import("./pages/ProtonPassReviewPage").then((module) => ({ default: module.ProtonPassReviewPage })));
const ProtonPassVsNordPassPage = lazy(() => import("./pages/ProtonPassVsNordPassPage").then((module) => ({ default: module.ProtonPassVsNordPassPage })));
const ProtonVpnReviewPage = lazy(() => import("./pages/ProtonVpnReviewPage").then((module) => ({ default: module.ProtonVpnReviewPage })));
const ProtonVpnVsSurfsharkPage = lazy(() => import("./pages/ProtonVpnVsSurfsharkPage").then((module) => ({ default: module.ProtonVpnVsSurfsharkPage })));
const RoboFormReviewPage = lazy(() => import("./pages/RoboFormReviewPage").then((module) => ({ default: module.RoboFormReviewPage })));
const ReviewsIndexPage = lazy(() => import("./pages/ReviewsIndexPage").then((module) => ({ default: module.ReviewsIndexPage })));
const SurfsharkReviewPage = lazy(() => import("./pages/SurfsharkReviewPage").then((module) => ({ default: module.SurfsharkReviewPage })));
const TermsPage = lazy(() => import("./pages/TermsPage").then((module) => ({ default: module.TermsPage })));
const VpnDecisionHubPage = lazy(() => import("./pages/VpnDecisionHubPage").then((module) => ({ default: module.VpnDecisionHubPage })));
const VpnGuidePage = lazy(() => import("./pages/VpnGuidePage").then((module) => ({ default: module.VpnGuidePage })));
const VpnPrivacyGuidePage = lazy(() => import("./pages/VpnPrivacyGuidePage").then((module) => ({ default: module.VpnPrivacyGuidePage })));

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
            <Route path="data-removal" element={<DataRemovalHubPage />} />
            <Route path="reviews" element={<ReviewsIndexPage />} />
            <Route path="comparisons" element={<ComparisonsIndexPage />} />
            <Route path="are-data-removal-services-worth-it" element={<AreDataRemovalServicesWorthItPage />} />
            <Route path="are-password-managers-safe" element={<ArePasswordManagersSafePage />} />
            <Route path="are-vpns-worth-it" element={<AreVpnsWorthItPage />} />
            <Route path="best-data-removal-services" element={<BestDataRemovalServicesPage />} />
            <Route path="best-free-password-managers" element={<BestFreePasswordManagersPage />} />
            <Route path="password-manager-vs-browser-passwords" element={<PasswordManagerVsBrowserPasswordsPage />} />
            <Route path="best-free-vpns" element={<BestFreeVpnsPage />} />
            <Route path="best-vpns-for-families" element={<BestVpnsForFamiliesPage />} />
            <Route path="best-vpns-for-students" element={<BestVpnsForStudentsPage />} />
            <Route path="best-vpns-for-travel" element={<BestVpnsForTravelPage />} />
            <Route path="best-vpns-for-streaming" element={<BestVpnsForStreamingPage />} />
            <Route path="best-cloud-storage-for-beginners" element={<BestCloudStorageForBeginnersPage />} />
            <Route path="best-antivirus-software" element={<BestAntivirusSoftwarePage />} />
            <Route path="best-secure-cloud-storage" element={<BestSecureCloudStoragePage />} />
            <Route path="comparisons/google-drive-vs-dropbox" element={<GoogleDriveVsDropboxPage />} />
            <Route path="comparisons/icloud-vs-google-drive" element={<ICloudVsGoogleDrivePage />} />
            <Route path="reviews/proton-drive-review" element={<ProtonDriveReviewPage />} />
            <Route path="best-password-managers-for-beginners" element={<BestPasswordManagersForBeginnersPage />} />
            <Route path="best-password-managers-for-families" element={<BestPasswordManagersForFamiliesPage />} />
            <Route path="best-password-managers-for-privacy" element={<BestPasswordManagersForPrivacyPage />} />
            <Route path="guides/how-password-managers-work" element={<HowPasswordManagersWorkPage />} />
            <Route path="guides/best-vpns-for-beginners" element={<BestVpnsForBeginnersPage />} />
            <Route path="guides/how-vpns-work" element={<VpnGuidePage slug="how-vpns-work" />} />
            <Route path="guides/free-vpn-vs-paid" element={<VpnGuidePage slug="free-vpn-vs-paid" />} />
            <Route path="guides/vpn-buying-guide" element={<VpnGuidePage slug="vpn-buying-guide" />} />
            <Route path="guides/vpn-privacy-guide" element={<VpnPrivacyGuidePage />} />
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
            <Route path="comparisons/incogni-vs-optery" element={<IncogniVsOpteryPage />} />
            <Route path="comparisons/incogni-vs-deleteme" element={<IncogniVsDeleteMePage />} />
            <Route path="comparisons/optery-vs-deleteme" element={<OpteryVsDeleteMePage />} />
            <Route path="reviews/nordvpn-review" element={<NordVpnReviewPage />} />
            <Route path="reviews/proton-vpn-review" element={<ProtonVpnReviewPage />} />
            <Route path="reviews/surfshark-review" element={<SurfsharkReviewPage />} />
            <Route path="reviews/1password-review" element={<OnePasswordReviewPage />} />
            <Route path="reviews/bitwarden-review" element={<BitwardenReviewPage />} />
            <Route path="reviews/nordpass-review" element={<NordPassReviewPage />} />
            <Route path="reviews/proton-pass-review" element={<ProtonPassReviewPage />} />
            <Route path="reviews/roboform-review" element={<RoboFormReviewPage />} />
            <Route path="reviews/incogni-review" element={<IncogniReviewPage />} />
            <Route path="reviews/optery-review" element={<OpteryReviewPage />} />
            <Route path="reviews/deleteme-review" element={<DeleteMeReviewPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
