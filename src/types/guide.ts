export type GuideLink = {
  title: string;
  href: string;
  description: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideCard = {
  title: string;
  description: string;
};

export type GuideSection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
  note?: string;
};

export type GuideDecisionItem = {
  label: string;
  recommendation: string;
  reasoning: string;
};

export type GuideComparison = {
  title: string;
  description?: string;
  columns: string[];
  rows: {
    label: string;
    cells: string[];
  }[];
};

export type VpnGuideContent = {
  slug: string;
  path: string;
  categoryLabel: string;
  title: string;
  description: string;
  subtitle: string;
  updatedAt: string;
  executiveSummary: string[];
  keyTakeaways: string[];
  examples: GuideCard[];
  sections: GuideSection[];
  comparison?: GuideComparison;
  decisionFramework: GuideDecisionItem[];
  productFit?: GuideLink[];
  sourceNotes?: GuideLink[];
  faqs: GuideFaq[];
  relatedGuides: GuideLink[];
  cta: {
    headline: string;
    note: string;
    primaryLabel: string;
    primaryHref: string;
  };
};
