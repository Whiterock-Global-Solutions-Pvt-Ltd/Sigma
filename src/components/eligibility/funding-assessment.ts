export type CompanySuggestion = {
  name: string;
  number: string;
  status: string;
  type: string;
  incorporatedOn: string | null;
  address: string;
};

export type CompanyDirector = { name: string; firstName: string; lastName: string };

export type CompanyDetails = {
  name: string;
  status: string;
  incorporatedOn: string | null;
  sicCodes: string[];
  outstandingCharges: number;
  activeDirectors: number;
  directors: CompanyDirector[];
  hasInsolvencyHistory: boolean;
  filingsOverdue: boolean;
  address: { line: string; city: string; postcode: string };
};

// UK SIC 2007 divisions grouped into their broad industry sections.
const sicSections: [number, number, string][] = [
  [1, 3, "Agriculture, forestry & fishing"],
  [5, 9, "Mining & quarrying"],
  [10, 33, "Manufacturing"],
  [35, 35, "Energy supply"],
  [36, 39, "Water & waste management"],
  [41, 43, "Construction"],
  [45, 47, "Wholesale & retail"],
  [49, 53, "Transport & storage"],
  [55, 56, "Accommodation & food services"],
  [58, 63, "Information & communication"],
  [64, 66, "Financial & insurance services"],
  [68, 68, "Real estate"],
  [69, 75, "Professional, scientific & technical"],
  [77, 82, "Administrative & support services"],
  [84, 84, "Public administration"],
  [85, 85, "Education"],
  [86, 88, "Health & social work"],
  [90, 93, "Arts, entertainment & recreation"],
  [94, 96, "Other services"],
  [97, 98, "Household activities"],
  [99, 99, "Extraterritorial organisations"],
];

export const describeSicCode = (code: string) => {
  const division = Number(code.slice(0, 2));
  return sicSections.find(([from, to]) => division >= from && division <= to)?.[2] ?? "Other";
};

export type FactorKind = "age" | "sector" | "charges" | "directors" | "status" | "amount";

export type AssessmentFactor = {
  kind: FactorKind;
  label: string;
  points: number;
};

export type FundingProduct = { name: string; href: string };

export type FundingAssessment = {
  score: number;
  message: string;
  factors: AssessmentFactor[];
  isActive: boolean;
  minEstimate: number;
  maxEstimate: number;
  reasoning: string;
  tags: string[];
  recommended: FundingProduct;
  alternative: FundingProduct;
};

export const MIN_AMOUNT = 10000;
export const MAX_AMOUNT = 500000;

export const tradingOptions = [
  { label: "Less than 6 months", months: 3 },
  { label: "6 – 12 months", months: 9 },
  { label: "1 – 2 years", months: 18 },
  { label: "2 – 5 years", months: 42 },
  { label: "More than 5 years", months: 72 },
];

export const yearsSince = (isoDate: string) =>
  Math.floor(((Date.now() - new Date(isoDate).getTime()) / (365.25 * 24 * 60 * 60 * 1000)) * 10) / 10;

export const formatCompanyStatus = (status: string) =>
  status ? status.charAt(0).toUpperCase() + status.slice(1).replace(/-/g, " ") : "Unknown";

export const formatCompactCurrency = (value: number) =>
  value >= 1000000
    ? `£${Number((value / 1000000).toFixed(2))}m`
    : `£${Math.round(value / 1000)}k`;

const products = {
  businessLoans: { name: "Business Loans", href: "/funding-options/business-loans" },
  revolvingCredit: { name: "Revolving Credit Facility", href: "/funding-options/revolving-credit-facility" },
  merchantCashAdvance: { name: "Merchant Cash Advance", href: "/funding-options/merchant-cash-advance" },
  assetFinance: { name: "Asset & Equipment Finance", href: "/funding-options/asset-finance" },
  commercialProperty: { name: "Commercial Property Finance", href: "/funding-options/commercial-property-finance" },
  invoiceFinance: { name: "Invoice Finance", href: "/funding-options/invoice-finance" },
} satisfies Record<string, FundingProduct>;

// Primary SIC code divisions by lender risk appetite.
const lowRiskSicDivisions = ["62", "63", "69", "70", "71", "72", "73", "74", "85", "86", "87", "88"];
const highRiskSicDivisions = ["92", "64", "66"];

const scoreMessages = {
  excellent: [
    "Exceptional profile! You're in the top 10% of applicants.",
    "Outstanding! Lenders will compete for your business.",
    "Excellent fundability! Expect multiple offers.",
    "Premium profile detected. Priority processing available.",
  ],
  good: [
    "Strong profile! You're in the top 25% of applicants.",
    "Good fundability score. Multiple options available.",
    "Solid business profile. Expect competitive terms.",
    "Above average! Several lenders match your profile.",
  ],
  average: [
    "Decent fundability. Options available through our network.",
    "Standard profile. We have lenders for your situation.",
    "Fair score. Let's find the right fit for you.",
    "Moderate fundability. Specialist lenders available.",
  ],
  belowAverage: [
    "Funding available through alternative routes.",
    "We work with lenders for businesses like yours.",
    "Specialist options exist. Let's explore together.",
    "Alternative funding routes are available.",
  ],
};

const reasoningTemplates = {
  young: [
    "As a company established in {year}, you're in an exciting growth phase. We work with many ambitious young businesses.",
    "Operating since {year} puts you in a strong position. Lenders see fresh companies with clear direction as great prospects.",
    "Founded {years} years ago, you've already proven your commitment. That counts for a lot in funding decisions.",
  ],
  established: [
    "With {years} years of trading history, you've built significant credibility. This opens up preferential rates.",
    "Your {years}-year track record demonstrates stability. Lenders love this kind of proven performance.",
    "Operating since {year}, your established business history qualifies you for our best funding options.",
  ],
  hasCharges: [
    "Your existing finance facilities show lenders take you seriously. This actually works in your favour.",
    "The current charges on file indicate a positive lending history. We can often work around these.",
  ],
  noCharges: [
    "With no existing charges, your assets are unencumbered. This maximises your available options.",
    "A clean charge sheet gives you negotiating power. Lenders compete for businesses like yours.",
  ],
  genericPositive: [
    "Based on your requirements, several funding options are available to you.",
    "Your funding request aligns well with multiple lender criteria.",
    "We're confident we can find competitive options for your business.",
    "Multiple funding solutions match your profile.",
    "Your application shows strong potential for approval.",
  ],
  genericEncouraging: [
    "Every business deserves access to growth capital. Let's explore your options together.",
    "We specialise in finding solutions where others can't. Your journey starts here.",
    "Our lender network includes specialists for every business type.",
    "Complete your application and we'll match you with the right funding partners.",
  ],
};

// Deterministic pick so the copy doesn't change on every re-render.
const pick = <T,>(items: T[], seed: number) => items[Math.abs(Math.floor(seed)) % items.length];

function calculateScore({
  companyAge,
  hasCharges,
  sicCodes,
  directors,
  companyStatus,
  amount,
}: {
  companyAge: number | null;
  hasCharges: boolean | null;
  sicCodes: string[];
  directors: number;
  companyStatus: string | null;
  amount: number;
}) {
  const factors: AssessmentFactor[] = [];

  if (companyAge !== null) {
    const years = Math.floor(companyAge);
    if (companyAge >= 10) factors.push({ kind: "age", label: `${years}+ years trading`, points: 20 });
    else if (companyAge >= 5) factors.push({ kind: "age", label: `${years} years established`, points: 15 });
    else if (companyAge >= 2) factors.push({ kind: "age", label: `${years} years trading`, points: 10 });
    else if (companyAge >= 1) factors.push({ kind: "age", label: "Early-stage business", points: 0 });
    else factors.push({ kind: "age", label: "Start-up (<1 year)", points: -10 });
  }

  if (sicCodes.length > 0) {
    const primarySic = sicCodes[0].slice(0, 2);
    if (lowRiskSicDivisions.includes(primarySic)) {
      factors.push({ kind: "sector", label: "Low-risk sector", points: 15 });
    } else if (highRiskSicDivisions.includes(primarySic)) {
      factors.push({ kind: "sector", label: "Higher-risk sector", points: -10 });
    } else {
      factors.push({ kind: "sector", label: "Standard sector", points: 5 });
    }
  }

  if (hasCharges !== null) {
    factors.push(
      hasCharges
        ? { kind: "charges", label: "Existing finance (refinanceable)", points: -5 }
        : { kind: "charges", label: "No existing charges", points: 10 }
    );
  }

  if (directors >= 2) {
    factors.push({ kind: "directors", label: `${directors} directors (shared liability)`, points: 5 });
  }

  if (companyStatus === "active") {
    factors.push({ kind: "status", label: "Active company status", points: 5 });
  }

  if (amount <= 50000) factors.push({ kind: "amount", label: "Standard funding range", points: 5 });
  else if (amount <= 100000) factors.push({ kind: "amount", label: "Growth funding range", points: 0 });
  else factors.push({ kind: "amount", label: "Larger funding (may need security)", points: -5 });

  const score = Math.max(0, Math.min(100, 50 + factors.reduce((total, factor) => total + factor.points, 0)));
  return { score, factors };
}

function scoreMessage(score: number) {
  if (score >= 85) return pick(scoreMessages.excellent, score);
  if (score >= 70) return pick(scoreMessages.good, score);
  if (score >= 50) return pick(scoreMessages.average, score);
  return pick(scoreMessages.belowAverage, score);
}

function generateReasoning(amount: number, companyAge: number | null, hasCharges: boolean | null) {
  if (companyAge !== null && companyAge > 0 && (companyAge < 2 || companyAge >= 5)) {
    const years = Math.floor(companyAge);
    const templates = companyAge < 2 ? reasoningTemplates.young : reasoningTemplates.established;
    return pick(templates, years)
      .replace(/{years}/g, String(years))
      .replace(/{year}/g, String(new Date().getFullYear() - years));
  }
  if (hasCharges !== null) {
    return pick(hasCharges ? reasoningTemplates.hasCharges : reasoningTemplates.noCharges, amount / 1000);
  }
  return pick(amount > 50000 ? reasoningTemplates.genericPositive : reasoningTemplates.genericEncouraging, amount / 1000);
}

function generateTags(amount: number, companyAge: number | null, hasCharges: boolean | null) {
  const tags: string[] = [];
  if (amount <= 50000) tags.push("Fast-Track Eligible");
  else if (amount <= 150000) tags.push("Standard Process");
  else tags.push("Premium Review");
  if (companyAge !== null && companyAge >= 3) tags.push("Established");
  if (hasCharges === false) tags.push("Clean Assets");
  tags.push("Multiple Options");
  return tags.slice(0, 4);
}

function productRecommendation(amount: number): [FundingProduct, FundingProduct] {
  if (amount <= 25000) return [products.merchantCashAdvance, products.businessLoans];
  if (amount <= 75000) return [products.businessLoans, products.revolvingCredit];
  if (amount <= 150000) return [products.businessLoans, products.assetFinance];
  return [products.commercialProperty, products.invoiceFinance];
}

export function assessFunding({
  amount,
  companyAge,
  isSoleTrader,
  companyStatus,
  details,
}: {
  amount: number;
  // Years trading, to one decimal place.
  companyAge: number | null;
  isSoleTrader: boolean;
  companyStatus: string | null;
  // Full Companies House record; null for sole traders or when the lookup failed.
  details: CompanyDetails | null;
}): FundingAssessment {
  const hasCharges = details ? details.outstandingCharges > 0 : null;
  const { score, factors } = calculateScore({
    companyAge,
    hasCharges,
    sicCodes: details?.sicCodes ?? [],
    directors: details?.activeDirectors ?? 0,
    companyStatus,
    amount,
  });

  let multiplier = 1;
  if (companyAge !== null && companyAge >= 5) multiplier += 0.15;
  if (hasCharges === false) multiplier += 0.1;
  const minEstimate = Math.round((Math.max(5000, amount * 0.8) * multiplier) / 1000) * 1000;
  const maxEstimate = Math.round((Math.min(1000000, amount * 1.2) * multiplier) / 1000) * 1000;

  const [recommended, alternative] = productRecommendation(amount);

  return {
    score,
    message: scoreMessage(score),
    factors,
    isActive: isSoleTrader || companyStatus === "active",
    minEstimate,
    maxEstimate,
    reasoning: generateReasoning(amount, companyAge, hasCharges),
    tags: generateTags(amount, companyAge, hasCharges),
    recommended,
    alternative,
  };
}
