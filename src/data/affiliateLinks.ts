export type AffiliateStatus = "ACTIVE" | "PENDING" | "DISABLED" | "INTERNAL_ONLY";

export type AffiliateProvider = "nordvpn" | "protonvpn" | "surfshark" | "vpn-comparison" | "onepassword" | "bitwarden" | "nordpass" | "protonpass" | "roboform" | "incogni";

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
    network: "MaxBounty",
    status: "ACTIVE",
    destination: "https://afflat3e3.com/trk/lnk/5A4FD2F0-60F5-4AE7-BF9C-2C65F2AA3E4B/?o=24611&c=918271&a=796553&k=AF67A50FC15AC856D44DAB303ABA87EC&l=33159",
    internalFallback: "/reviews/nordvpn-review",
    disclosureRequired: true,
    trackingEnabled: true,
    lastVerified: "2026-07-03"
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
    network: "CJ",
    status: "ACTIVE",
    destination: "https://www.dpbolvw.net/click-101816242-15736773",
    internalFallback: "/reviews/surfshark-review",
    disclosureRequired: true,
    trackingEnabled: true,
    lastVerified: "2026-07-03"
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
  bitwarden: {
    provider: "bitwarden",
    network: "",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/about/how-we-review-software",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-03"
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
  },
  protonpass: {
    provider: "protonpass",
    network: "",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/about/how-we-review-software",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-03"
  },
  roboform: {
    provider: "roboform",
    network: "CJ",
    status: "ACTIVE",
    destination: "https://www.kqzyfj.com/click-101816242-13790972",
    internalFallback: "/reviews/roboform-review",
    disclosureRequired: true,
    trackingEnabled: true,
    lastVerified: "2026-07-04"
  },
  incogni: {
    provider: "incogni",
    network: "",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/reviews",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-05"
  }
};
