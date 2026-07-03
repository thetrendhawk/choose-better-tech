export type AffiliateStatus = "ACTIVE" | "PENDING" | "DISABLED" | "INTERNAL_ONLY";

export type AffiliateProvider = "nordvpn" | "protonvpn" | "surfshark" | "vpn-comparison" | "onepassword";

export type AffiliateLinkRecord = {
  provider: AffiliateProvider;
  status: AffiliateStatus;
  destination: string;
  internalFallback: string;
  disclosureRequired: boolean;
  trackingEnabled: boolean;
  lastVerified: string;
};

export const affiliateLinks: Record<AffiliateProvider, AffiliateLinkRecord> = {
  nordvpn: {
    provider: "nordvpn",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/guides/best-vpns-for-beginners",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-02"
  },
  protonvpn: {
    provider: "protonvpn",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/guides/is-proton-vpn-free-good-enough",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-02"
  },
  surfshark: {
    provider: "surfshark",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/guides/vpn-buying-guide",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-02"
  },
  "vpn-comparison": {
    provider: "vpn-comparison",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/guides/vpn-buying-guide",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-02"
  },
  onepassword: {
    provider: "onepassword",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/about/how-we-review-software",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-02"
  }
};
