export type AffiliateStatus = "ACTIVE" | "PENDING" | "DISABLED" | "INTERNAL_ONLY";

export type AffiliateProvider = "nordvpn" | "protonvpn" | "surfshark" | "vpn-comparison" | "onepassword" | "bitwarden" | "nordpass" | "protonpass" | "protonmail" | "protonunlimited" | "roboform" | "incogni" | "optery" | "deleteme";

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
    network: "CJ / Proton Partners Program",
    status: "ACTIVE",
    destination: "https://www.jdoqocy.com/click-101816242-13792632",
    internalFallback: "/reviews/proton-vpn-review",
    disclosureRequired: true,
    trackingEnabled: true,
    lastVerified: "2026-07-08"
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
    internalFallback: "/reviews/1password-review",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-02"
  },
  bitwarden: {
    provider: "bitwarden",
    network: "",
    status: "INTERNAL_ONLY",
    destination: "",
    internalFallback: "/reviews/bitwarden-review",
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
    network: "MaxBounty",
    status: "ACTIVE",
    destination: "https://afflat3e3.com/trk/lnk/5A4FD2F0-60F5-4AE7-BF9C-2C65F2AA3E4B/?o=30552&c=918277&a=796553&k=94F302CA3A04FB0902FE65FAB99BE625&l=35298",
    internalFallback: "/reviews/proton-pass-review",
    disclosureRequired: true,
    trackingEnabled: true,
    lastVerified: "2026-07-08"
  },
  protonmail: {
    provider: "protonmail",
    network: "CJ / Proton Partners Program",
    status: "PENDING",
    destination: "https://www.kqzyfj.com/click-101816242-13792584",
    internalFallback: "/about/how-we-review-software",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-08"
  },
  protonunlimited: {
    provider: "protonunlimited",
    network: "MaxBounty",
    status: "PENDING",
    destination: "https://afflat3e3.com/trk/lnk/5A4FD2F0-60F5-4AE7-BF9C-2C65F2AA3E4B/?o=32290&c=918277&a=796553&k=37537A28A5715E1708A893F770EC6765&l=38004",
    internalFallback: "/about/how-we-review-software",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-08"
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
    internalFallback: "/best-data-removal-services",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-18"
  },
  optery: {
    provider: "optery",
    network: "Optery Affiliate Program",
    status: "PENDING",
    destination: "",
    internalFallback: "/reviews/optery-review",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-19"
  },
  deleteme: {
    provider: "deleteme",
    network: "CJ Affiliate / DeleteMe Affiliate Program",
    status: "PENDING",
    destination: "",
    internalFallback: "/best-data-removal-services",
    disclosureRequired: true,
    trackingEnabled: false,
    lastVerified: "2026-07-18"
  }
};
