import { Navigate } from "react-router-dom";
import { VpnGuidePageLayout } from "../components/guides/VpnGuidePageLayout";
import { SEO } from "../components/SEO";
import { getVpnGuideBySlug } from "../data/vpnGuides";

export function VpnGuidePage({ slug }: { slug: string }) {
  const guide = getVpnGuideBySlug(slug);

  if (!guide) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO title={guide.title} description={guide.description} path={guide.path} />
      <VpnGuidePageLayout guide={guide} />
    </>
  );
}
