import { affiliateLinks, type AffiliateLinkRecord, type AffiliateProvider } from "../data/affiliateLinks";

export type ResolvedAffiliateLink = AffiliateLinkRecord & {
  href: string;
  isExternal: boolean;
};

const educationalFallback = "/guides/vpn-buying-guide";

export function getAffiliateLink(provider: AffiliateProvider): ResolvedAffiliateLink {
  const record = affiliateLinks[provider];

  const href = (() => {
    if (record.status === "ACTIVE" && record.destination) return record.destination;
    if (record.status === "PENDING") return record.internalFallback;
    if (record.status === "DISABLED") return record.internalFallback;
    return record.internalFallback || educationalFallback;
  })();

  return {
    ...record,
    href,
    isExternal: href.startsWith("http")
  };
}
