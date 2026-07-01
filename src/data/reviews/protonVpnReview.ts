import type { ReviewPageContent } from "../../types/review";

const placeholder = "Research-backed content will be added here before publication.";

export const protonVpnReview: ReviewPageContent = {
  categoryLabel: "VPN Review",
  title: "Proton VPN Review (2026): Is It Worth It for Beginners?",
  subtitle: "A beginner-focused review framework for evaluating whether Proton VPN is the right privacy tool for everyday users.",
  affiliateUrl: "https://protonvpn.com/",
  quickSummary: [
    { label: "Overall Rating", value: "Draft Score Pending" },
    { label: "Best For", value: "Privacy-focused beginners" },
    { label: "Free Version", value: "Yes" },
    { label: "Learning Curve", value: "Low" },
    { label: "Recommendation", value: "Research in progress" }
  ],
  decisionSnapshot: [
    { label: "Best For", value: "Draft: privacy-focused beginners" },
    { label: "Avoid If", value: "Draft: you need a recommendation before final research is complete" },
    { label: "Learning Curve", value: "Draft: low, pending hands-on review" },
    { label: "Value for Money", value: "Pending pricing research" },
    { label: "Privacy Confidence", value: "Pending policy and independent source review" },
    { label: "Our Confidence", value: "Pending final research" },
    { label: "Recommendation", value: "Research in progress" }
  ],
  scoringCategories: [
    { label: "Ease of Use", weight: "20%" },
    { label: "Value", weight: "20%" },
    { label: "Privacy & Security", weight: "20%" },
    { label: "Performance", weight: "15%" },
    { label: "Features", weight: "10%" },
    { label: "Support", weight: "10%" },
    { label: "Beginner Experience", weight: "5%" }
  ],
  pros: [
    "To be verified through research: privacy-focused company background",
    "To be verified through research: free plan available",
    "To be verified through research: beginner-friendly interface"
  ],
  cons: [
    "To be verified through research: free plan limitations",
    "To be verified through research: paid plan may be required for full value",
    "To be verified through research: performance and streaming claims need verification"
  ],
  whoItIsFor: [
    { title: "Privacy-focused beginners", description: "Draft fit statement pending final research." },
    { title: "Travelers using public Wi-Fi", description: "Draft fit statement pending final research." },
    { title: "People who want a no-logs VPN", description: "Draft fit statement pending final research." },
    { title: "Users who prefer a free plan before paying", description: "Draft fit statement pending final research." }
  ],
  whoShouldSkipIt: [
    { title: "Users who want the cheapest VPN only", description: "Draft skip statement pending final research." },
    { title: "Users who need advanced enterprise features", description: "Draft skip statement pending final research." },
    { title: "Users unwilling to compare free vs paid limitations", description: "Draft skip statement pending final research." }
  ],
  fullReviewSections: [
    { id: "problem", title: "What problem does Proton VPN solve?", body: placeholder },
    { id: "ease-of-use", title: "How easy is it for beginners?", body: placeholder },
    { id: "free-vs-paid", title: "Free vs paid: what changes?", body: placeholder },
    { id: "privacy-security", title: "Privacy and security", body: placeholder },
    { id: "speed-performance", title: "Speed and performance", body: placeholder },
    { id: "pricing-value", title: "Pricing and value", body: placeholder },
    { id: "alternatives", title: "Alternatives to consider", body: placeholder },
    { id: "beginner-questions", title: "Common beginner questions", body: placeholder },
    { id: "final-verdict", title: "Final verdict", body: placeholder }
  ],
  researchChecklist: [
    { label: "Official Proton VPN documentation reviewed", status: "Pending" },
    { label: "Pricing reviewed", status: "Pending" },
    { label: "Privacy policy reviewed", status: "Pending" },
    { label: "Independent reviews reviewed", status: "Pending" },
    { label: "Reddit/user discussions reviewed", status: "Pending" },
    { label: "Competitors compared", status: "Pending" },
    { label: "Beginner questions collected", status: "Pending" }
  ],
  relatedGuides: [
    { title: "Best VPNs for Beginners", href: "#", description: "Future beginner-focused VPN comparison." },
    { title: "Proton VPN Free vs Paid", href: "#", description: "Future comparison of plan differences." },
    { title: "Proton VPN vs NordVPN", href: "#", description: "Future head-to-head VPN comparison." },
    { title: "Do You Actually Need a VPN?", href: "#", description: "Future plain-English VPN decision guide." }
  ],
  finalCtaHeadline: "Ready to compare Proton VPN?"
};
