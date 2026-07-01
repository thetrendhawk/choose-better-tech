import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "./layouts/SiteLayout";
import { AboutPage } from "./pages/AboutPage";
import { AffiliateDisclosurePage } from "./pages/AffiliateDisclosurePage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ProtonVpnReviewPage } from "./pages/ProtonVpnReviewPage";
import { TermsPage } from "./pages/TermsPage";

export default function App() {
  return <Routes><Route element={<SiteLayout />}><Route index element={<HomePage />} /><Route path="about" element={<AboutPage />} /><Route path="contact" element={<ContactPage />} /><Route path="privacy" element={<PrivacyPage />} /><Route path="terms" element={<TermsPage />} /><Route path="affiliate-disclosure" element={<AffiliateDisclosurePage />} /><Route path="reviews/proton-vpn-review" element={<ProtonVpnReviewPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes>;
}
