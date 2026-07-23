import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { affiliateLinks } from "./affiliateLinks";
import { getAffiliateLink } from "../utils/affiliate";

describe("Proton affiliate mappings", () => {
  it("resolves Proton Drive to the verified CJ paid-offer destination", () => {
    const link = getAffiliateLink("protondrive");

    expect(link.href).toBe("https://www.anrdoezrs.net/click-101816242-17168972");
    expect(link.status).toBe("ACTIVE");
    expect(link.network).toBe("CJ / Proton Partners Program");
    expect(link.isAffiliateLink).toBe(true);
  });

  it("preserves the verified Proton product mappings", () => {
    expect(affiliateLinks.protonvpn).toMatchObject({ status: "ACTIVE", network: "CJ / Proton Partners Program", trackingEnabled: true });
    expect(affiliateLinks.protonmail).toMatchObject({ status: "ACTIVE", network: "CJ / Proton Partners Program", trackingEnabled: true });
    expect(affiliateLinks.protonpass).toMatchObject({ status: "ACTIVE", network: "MaxBounty", trackingEnabled: true });
    expect(affiliateLinks.protonunlimited).toMatchObject({ status: "ACTIVE", network: "MaxBounty", trackingEnabled: true });
  });

  it("does not leave Proton Drive marked as non-affiliate", () => {
    const source = readFileSync(join(process.cwd(), "src", "pages", "ProtonDriveReviewPage.tsx"), "utf8");

    expect(source).toContain('<AffiliateButton provider="protondrive">Get Proton Drive</AffiliateButton>');
    expect(source).toContain("Affiliate link; Proton Drive currently offers 80% off the first month or 40% off the annual plan.");
    expect(source).not.toContain("Non-affiliate link; no Proton Drive tracking is used.");
    expect(source).not.toContain("Proton Drive has no verified affiliate link in CBT's registry");
  });
});
