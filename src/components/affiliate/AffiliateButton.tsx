import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { AffiliateProvider } from "../../data/affiliateLinks";
import { getAffiliateLink } from "../../utils/affiliate";

const primaryButtonClasses = "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600";

export function AffiliateButton({ children, provider }: { children: string; provider: AffiliateProvider }) {
  const link = getAffiliateLink(provider);

  if (link.isExternal || link.isAffiliateLink) {
    return (
      <a aria-label={`${children} (opens in a new tab)`} className={primaryButtonClasses} href={link.href} rel={link.trackingEnabled ? "nofollow sponsored noopener noreferrer" : "noopener noreferrer"} target="_blank">
        {children}
        <ExternalLink size={16} aria-hidden="true" />
      </a>
    );
  }

  return <Link className={primaryButtonClasses} to={link.href}>{children}</Link>;
}
