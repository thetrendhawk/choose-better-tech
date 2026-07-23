import type { AffiliateLinkRecord } from "../data/affiliateLinks";

type AffiliateClickDetails = Pick<AffiliateLinkRecord, "provider" | "destination"> & {
  href: string;
  text: string;
};
type ActivationEvent = Event | { nativeEvent: Event };
type AffiliateEventArguments = ["event", "affiliate_click", Record<string, unknown>];

const trackedActivations = new WeakSet<Event>();

function pushAffiliateEventToDataLayer(...args: AffiliateEventArguments) {
  // Keep the same arguments-object shape as the existing Google tag shim.
  void args;
  // eslint-disable-next-line prefer-rest-params -- Google tag reads the arguments object from dataLayer.
  window.dataLayer?.push(arguments);
}

export function trackAffiliateClick(details: AffiliateClickDetails, event?: ActivationEvent) {
  if (event) {
    const nativeEvent = "nativeEvent" in event ? event.nativeEvent : event;
    if (trackedActivations.has(nativeEvent)) return;
    trackedActivations.add(nativeEvent);
  }

  try {
    if (typeof window === "undefined") return;
    const eventParameters = {
      affiliate_provider: details.provider,
      affiliate_destination: details.destination || details.href,
      link_url: details.href,
      link_text: details.text,
      page_path: window.location.pathname
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", "affiliate_click", eventParameters);
      return;
    }
    if (Array.isArray(window.dataLayer)) {
      pushAffiliateEventToDataLayer("event", "affiliate_click", eventParameters);
    }
  } catch {
    // Analytics must never interrupt affiliate navigation.
  }
}
