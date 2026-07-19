import type { AffiliateProvider } from "../data/affiliateLinks";

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
  body: string[];
  bullets?: string[];
  note?: string;
};

export type FreeVsPaidContent = {
  title?: string;
  description?: string;
  freeLabel?: string;
  limitationsLabel?: string;
  paidLabel?: string;
  freeStrengths: string[];
  freeLimitations: string[];
  paidBenefits: string[];
};

export type RelatedGuide = {
  title: string;
  href: string;
  description: string;
};

export type UserFeedback = {
  praise: string[];
  complaints: string[];
};

export type AlternativeReview = {
  title: string;
  description: string;
};

export type ReviewFaq = {
  question: string;
  answer: string;
};

export type ReviewSource = {
  title: string;
  publisher: string;
  href: string;
  note: string;
};

export type ReviewEditorialMeta = {
  authorName: string;
  datePublished?: string;
  dateModified: string;
  displayDate: string;
};

export type ReviewPageContent = {
  categoryLabel: string;
  title: string;
  subtitle: string;
  path: string;
  productName: string;
  applicationCategory?: string;
  affiliateProvider: AffiliateProvider;
  ctaLabel: string;
  editorialMeta?: ReviewEditorialMeta;
  executiveSummary: string[];
  quickSummary: ReviewSummaryItem[];
  decisionSnapshot: DecisionSnapshotRow[];
  scoringCategories: ScoringCategory[];
  pros: string[];
  cons: string[];
  whoItIsFor: ReviewCardItem[];
  whoShouldSkipIt: ReviewCardItem[];
  freeVsPaid: FreeVsPaidContent;
  fullReviewSections: ReviewSection[];
  userFeedback: UserFeedback;
  alternatives: AlternativeReview[];
  faqs: ReviewFaq[];
  sourceLinks?: ReviewSource[];
  relatedGuides: RelatedGuide[];
  finalCtaHeadline: string;
  finalCtaNote: string;
  finalVerdictLabel: string;
  finalVerdictBody: string;
};
