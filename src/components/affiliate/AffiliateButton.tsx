import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { AffiliateProvider } from "../../data/affiliateLinks";
import { getAffiliateLink } from "../../utils/affiliate";
import { trackAffiliateClick } from "../../utils/affiliateTracking";

const primaryButtonClasses = "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";

export function AffiliateButton({ children, provider, opteryPlacement }: { children: string; provider: AffiliateProvider; opteryPlacement?: "review_top" | "review_verdict" | "review_footer" }) {
  const link = getAffiliateLink(provider);
  const href = provider === "optery" && link.isAffiliateLink && link.href === "/api/go/optery" && opteryPlacement
    ? `${link.href}?placement=${opteryPlacement}`
    : link.href;

  if (link.isExternal || link.isAffiliateLink) {
    return (
      <a aria-label={`${children} (opens in a new tab)`} className={primaryButtonClasses} href={href} onClick={link.isAffiliateLink ? (event) => trackAffiliateClick({ provider: link.provider, destination: link.destination, href, text: children }, event) : undefined} rel={link.trackingEnabled ? "nofollow sponsored noopener noreferrer" : "noopener noreferrer"} target="_blank">
        {children}
        <ExternalLink size={16} aria-hidden="true" />
      </a>
    );
  }

  return <Link className={primaryButtonClasses} to={link.href}>{children}</Link>;
}
