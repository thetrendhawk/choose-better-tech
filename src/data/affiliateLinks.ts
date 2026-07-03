export type AffiliateStatus = "ACTIVE" | "PENDING" | "DISABLED" | "INTERNAL_ONLY";

export type AffiliateProvider = "nordvpn" | "protonvpn" | "surfshark" | "vpn-comparison" | "onepassword" | "nordpass";

export type AffiliateLinkRecord = {
  provider: AffiliateProvider;
  network: string;
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
    network: "",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/guides/best-vpns-for-beginners",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-02"
  },
  protonvpn: {
    provider: "protonvpn",
    network: "",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/guides/is-proton-vpn-free-good-enough",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-02"
  },
  surfshark: {
    provider: "surfshark",
    network: "",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/guides/vpn-buying-guide",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-02"
  },
  "vpn-comparison": {
    provider: "vpn-comparison",
    network: "",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/guides/vpn-buying-guide",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-02"
  },
  onepassword: {
    provider: "onepassword",
    network: "",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/about/how-we-review-software",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-02"
  },
  nordpass: {
    provider: "nordpass",
    network: "CJ",
    status: "ACTIVE",
    destination: "https://www.jdoqocy.com/click-101816242-17262576",
    internalFallback: "/reviews/nordpass-review",
    disclosureRequired: true,
    trackingEnabled: true,
    lastVerified: "2026-07-03"
  }
};
