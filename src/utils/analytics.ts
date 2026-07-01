const GA_MEASUREMENT_ID = "G-3CPY0G0G65";
const GA_SCRIPT_ID = "ga4-gtag";

type GtagCommand = "js" | "config";
type Gtag = (command: GtagCommand, target: string | Date, config?: Record<string, unknown>) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

let isInitialized = false;
let lastTrackedPath = "";

export const initializeGoogleAnalytics = () => {
  if (typeof window === "undefined" || isInitialized) {
    return;
  }

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.async = true;
    script.id = GA_SCRIPT_ID;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  } as Gtag;

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  isInitialized = true;
};

export const trackPageView = (path: string) => {
  if (typeof window === "undefined" || !window.gtag || path === lastTrackedPath) {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: document.title
  });
  lastTrackedPath = path;
};
