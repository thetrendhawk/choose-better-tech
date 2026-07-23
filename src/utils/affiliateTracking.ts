import type { AffiliateLinkRecord } from "../data/affiliateLinks";

type AffiliateClickDetails = Pick<AffiliateLinkRecord, "provider" | "destination"> & {
  href: string;
  text: string;
};
type ActivationEvent = Event | { nativeEvent: Event };

const trackedActivations = new WeakSet<Event>();

export function trackAffiliateClick(details: AffiliateClickDetails, event?: ActivationEvent) {
  if (event) {
    const nativeEvent = "nativeEvent" in event ? event.nativeEvent : event;
    if (trackedActivations.has(nativeEvent)) return;
    trackedActivations.add(nativeEvent);
  }

  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  try {
    window.gtag("event", "affiliate_click", {
      affiliate_provider: details.provider,
      affiliate_destination: details.destination || details.href,
      link_url: details.href,
      link_text: details.text,
      page_path: window.location.pathname
    });
  } catch {
    // Analytics must never interrupt affiliate navigation.
  }
}
