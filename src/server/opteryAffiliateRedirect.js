/* global URL */

const configuredAffiliateHost = "get.optery.com";
const approvedPlacements = new Set(["review_top", "review_verdict", "review_footer"]);

export const opteryAffiliateUnavailableMessage = "This link is temporarily unavailable. Please try again later.";

export function getOpteryAffiliateDestination(environment, placement) {
  const configuredValue = environment.OPTERY_AFFILIATE_URL;

  if (!configuredValue) return null;

  try {
    const destination = new URL(configuredValue);

    if (destination.protocol !== "https:" || destination.hostname !== configuredAffiliateHost) return null;

    // Only fixed, non-personal review placements may reach PartnerStack.
    // Preserve any tracking already configured privately rather than overwrite it.
    const hasSubId = [...destination.searchParams.keys()].some((key) => /^sid\d*$/.test(key));
    if (approvedPlacements.has(placement) && !hasSubId) {
      destination.searchParams.set("sid", `cbt_optery_${placement}`);
    }

    return destination;
  } catch {
    return null;
  }
}
