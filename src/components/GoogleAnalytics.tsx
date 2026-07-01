import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initializeGoogleAnalytics, trackPageView } from "../utils/analytics";

export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    initializeGoogleAnalytics();
    const timeoutId = window.setTimeout(() => {
      trackPageView(location.pathname + location.search + location.hash);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.hash, location.pathname, location.search]);

  return null;
}
