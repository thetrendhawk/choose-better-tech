export type ReviewSummaryItem = {
  label: string;
  value: string;
};

export type DecisionSnapshotRow = {
  label: string;
  value: string;
};

export type ScoringCategory = {
  label: string;
  weight: string;
};

export type ReviewCardItem = {
  title: string;
  description: string;
};

export type ReviewSection = {
  id: string;
  title: string;
  body: string;
};

export type ChecklistItem = {
  label: string;
  status: "Pending";
};

export type RelatedGuide = {
  title: string;
  href: string;
  description: string;
};

export type ReviewPageContent = {
  categoryLabel: string;
  title: string;
  subtitle: string;
  affiliateUrl: string;
  quickSummary: ReviewSummaryItem[];
  decisionSnapshot: DecisionSnapshotRow[];
  scoringCategories: ScoringCategory[];
  pros: string[];
  cons: string[];
  whoItIsFor: ReviewCardItem[];
  whoShouldSkipIt: ReviewCardItem[];
  fullReviewSections: ReviewSection[];
  researchChecklist: ChecklistItem[];
  relatedGuides: RelatedGuide[];
  finalCtaHeadline: string;
};
