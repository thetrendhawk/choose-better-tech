const configuredAffiliateHost = "get.optery.com";

export const opteryAffiliateUnavailableMessage = "This link is temporarily unavailable. Please try again later.";

export function getOpteryAffiliateDestination(environment: Record<string, string | undefined>): URL | null {
  const configuredValue = environment.OPTERY_AFFILIATE_URL;

  if (!configuredValue) return null;

  try {
    const destination = new URL(configuredValue);

    if (destination.protocol !== "https:" || destination.hostname !== configuredAffiliateHost) return null;

    return destination;
  } catch {
    return null;
  }
}
