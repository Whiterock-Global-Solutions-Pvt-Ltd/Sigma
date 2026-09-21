import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import businessLoansImage from "@/assets/ServiceSectors-Finance.jpg";
import invoiceFinanceImage from "@/assets/Transport&Logistics-Finance.jpg";
import assetFinanceImage from "@/assets/Manufacturing&Engineering-Finance.jpg";
import merchantCashAdvanceImage from "@/assets/Retail-Finance.jpg";
import businessCashAdvanceImage from "@/assets/Garage&Car-Sales-Finance.jpg";
import commercialPropertyFinanceImage from "@/assets/Construction-Finance.jpg";
import propertyFinanceImage from "@/assets/Construction-Finance.jpg";
import growthGuaranteeSchemeImage from "@/assets/Technology&Media-Finance.jpg";
import recoveryLoanSchemeImage from "@/assets/Hospitality-Finance.jpg";
import revolvingCreditFacilityImage from "@/assets/Energy-Finance.jpg";
import refinanceImage from "@/assets/Wholesale-Finance.jpg";
import {
  Banknote,
  FileStack,
  Truck,
  CreditCard,
  Building2,
  ShieldCheck,
  RefreshCw,
  LifeBuoy,
  Landmark,
  PiggyBank,
  Repeat,
  Percent,
  Zap,
  Wallet,
  Eye,
  TrendingUp,
  Clock,
  Layers,
  HardHat,
  Users2,
} from "lucide-react";

export type SolutionFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type SolutionFaq = {
  question: string;
  answer: string;
};

export type Solution = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  summary: string;
  range: string;
  term: string;
  decision: string;
  bullets: string[];

  // --- detail page: hero section ---
  heroTitle: string;
  heroDescription: string;
  image: StaticImageData;
  heroGif?: string;
  heroGifScale?: number;

  // --- detail page: intro / benefits section ---
  introTitle: string;
  introDescription: string;
  benefits: SolutionFeature[];

  // --- detail page: options section ---
  optionsSectionTitle: string;
  optionsSectionDescription: string;
  options: SolutionFeature[];

  useCaseBullets: string[];
  faqs: SolutionFaq[];
};

export const solutions: Solution[] = [
  {
    slug: "business-loans",
    name: "Business Loans",
    icon: Banknote,
    tagline: "Simple, scalable finance for any business purpose",
    summary:
      "Unsecured and secured business loans to fund stock, hiring, marketing or expansion, matched to your cash flow.",
    range: "£10k – £2M",
    term: "Up to 6 years",
    decision: "24–48 hours",
    bullets: [
      "Fixed or flexible repayment terms",
      "Secured and unsecured options available",
      "Funds released in as little as 48 hours",
    ],
    heroTitle: "Business finance that fits how you actually trade",
    heroDescription:
      "Unsecured and secured business loans from £10k to £2m, structured around your cash flow — decisions in as little as 24 hours.",
    image: businessLoansImage,
    heroGif: "/gifs/business-loans.gif?v=5",
    introTitle: "Getting the right business loan made simple",
    introDescription:
      "A business loan gives you a lump sum today, repaid over an agreed term — used to fund stock, hire staff, launch a marketing push, or simply smooth out cash flow. We compare secured and unsecured options across our lender panel so the structure fits your business, not the other way round.",
    benefits: [
      { icon: Percent, title: "Flexible funding that fits", description: "Fixed or variable repayments, arranged around your revenue cycle rather than a rigid monthly schedule." },
      { icon: Zap, title: "Fast, hassle-free access", description: "Apply online in minutes, with most decisions returned within 24–48 hours and funds released shortly after." },
      { icon: Building2, title: "Custom solutions for larger goals", description: "Facilities up to £2m for expansion, acquisitions or major capital projects, secured against business or personal assets where needed." },
      { icon: Banknote, title: "Rapid capital when you need it", description: "Unsecured lending for smaller, faster needs — no security required, funded in as little as 48 hours." },
    ],
    optionsSectionTitle: "Loan types available",
    optionsSectionDescription: "Every business borrows differently — here's how we typically structure a facility.",
    options: [
      { icon: ShieldCheck, title: "Unsecured business loans", description: "Borrow without offering an asset as security, based on your business's trading history and turnover." },
      { icon: Landmark, title: "Secured business loans", description: "Larger facilities secured against property, equipment or other business assets, often at a lower rate." },
      { icon: Clock, title: "Fixed-term loans", description: "A lump sum repaid in equal instalments over an agreed term, for predictable monthly budgeting." },
      { icon: Repeat, title: "Flexible drawdown facilities", description: "Draw down funds as you need them within an agreed limit, only paying interest on what you use." },
    ],
    useCaseBullets: [
      "Scaling up operations or opening a new location",
      "Funding a marketing push or new product launch",
      "Smoothing out seasonal or irregular cash flow",
      "Consolidating existing business debt into one repayment",
      "Purchasing stock or inventory ahead of demand",
      "Covering payroll during a growth phase",
      "Renovating or fitting out business premises",
      "Handling an unexpected cost or opportunity",
    ],
    faqs: [
      { question: "How much can I borrow with a business loan?", answer: "Facilities typically range from £10,000 to £2 million, depending on your trading history, turnover and whether the loan is secured or unsecured." },
      { question: "What's the difference between a secured and unsecured business loan?", answer: "A secured loan is backed by an asset such as property or equipment, usually unlocking a larger amount at a lower rate. An unsecured loan doesn't require security but is generally smaller and priced slightly higher to reflect the risk." },
      { question: "How quickly can I get a business loan?", answer: "Many lenders on our panel can return a decision within 24–48 hours, with funds released shortly after acceptance." },
      { question: "Will checking my eligibility affect my credit score?", answer: "No. Our initial check uses a soft search that has no impact on your personal or business credit score." },
      { question: "Can I get a business loan with a limited trading history?", answer: "Possibly. While most lenders prefer at least 6–12 months of trading history, some specialist lenders on our panel will consider newer businesses on a case-by-case basis." },
    ],
  },
  {
    slug: "invoice-finance",
    name: "Invoice Finance",
    icon: FileStack,
    tagline: "Turn unpaid invoices into working capital today",
    summary:
      "Release up to 90% of the value of your outstanding invoices immediately, instead of waiting 30, 60 or 90 days to get paid.",
    range: "£10k – £5M",
    term: "Rolling facility",
    decision: "24–72 hours",
    bullets: [
      "Improve cash flow without new debt on the balance sheet",
      "Confidential or disclosed facilities",
      "Scales automatically with your sales ledger",
    ],
    heroTitle: "Turn unpaid invoices into working capital today",
    heroDescription:
      "Release up to 90% of the value of your outstanding invoices immediately, instead of waiting 30, 60 or 90 days to get paid.",
    image: invoiceFinanceImage,
    heroGif: "/gifs/invoice-finance.gif?v=5",
    introTitle: "How invoice finance works",
    introDescription:
      "Invoice finance advances you cash against invoices you've already issued, so your cash flow isn't held hostage by customer payment terms. As your sales ledger grows, so does the facility — with the balance settled once your customer pays.",
    benefits: [
      { icon: Wallet, title: "Immediate cash flow", description: "Access up to 90% of an invoice's value within 24 hours of raising it, rather than waiting weeks or months." },
      { icon: ShieldCheck, title: "No new debt on the balance sheet", description: "You're releasing money you're already owed, not borrowing against future income." },
      { icon: Eye, title: "Confidential or disclosed", description: "Choose whether your customers know a finance provider is involved, depending on the facility you select." },
      { icon: TrendingUp, title: "Scales with your sales", description: "The facility grows automatically as your invoicing increases, without renegotiating terms." },
    ],
    optionsSectionTitle: "Invoice finance options",
    optionsSectionDescription: "Two core structures, plus variations to suit how your business collects payment.",
    options: [
      { icon: FileStack, title: "Factoring", description: "The lender manages credit control and collects payment directly from your customers on your behalf." },
      { icon: Eye, title: "Confidential invoice discounting", description: "You keep control of collections; your customers are unaware a finance provider is involved." },
      { icon: Users2, title: "Selective invoice finance", description: "Release funds against single invoices or specific customers, rather than your whole ledger." },
      { icon: ShieldCheck, title: "Bad debt protection", description: "Add credit insurance to the facility to protect against a customer failing to pay." },
    ],
    useCaseBullets: [
      "Bridging the gap on 30, 60 or 90-day payment terms",
      "Funding payroll or supplier payments while awaiting payment",
      "Taking on larger contracts without cash flow strain",
      "Replacing an overdraft with a facility that scales with sales",
    ],
    faqs: [
      { question: "How much of an invoice's value can I release?", answer: "Typically up to 90%, with the remaining balance (minus fees) paid once your customer settles the invoice." },
      { question: "Will my customers know I'm using invoice finance?", answer: "Only if you choose a disclosed facility such as factoring. Confidential invoice discounting keeps your arrangement private." },
      { question: "Does invoice finance count as debt?", answer: "No. You're accessing money already owed to you rather than taking on new borrowing, so it doesn't sit on the balance sheet the way a loan would." },
      { question: "What if my customer doesn't pay?", answer: "Depending on the facility, bad debt protection can be added to cover non-payment risk — we'll talk you through the options." },
      { question: "Can new businesses use invoice finance?", answer: "Yes, provided you're issuing invoices to other businesses (B2B) on credit terms — many lenders will consider newer companies on this basis." },
    ],
  },
  {
    slug: "asset-finance",
    name: "Asset & Equipment Finance",
    icon: Truck,
    tagline: "Spread the cost of vehicles, machinery and technology",
    summary:
      "Fund almost any business asset — from vans and manufacturing equipment to IT infrastructure — without draining reserves.",
    range: "£5k – £2M",
    term: "Up to 7 years",
    decision: "24–48 hours",
    bullets: [
      "Hire purchase, leasing and refinance options",
      "Preserve capital for other areas of the business",
      "New and used assets, including private sales",
    ],
    heroTitle: "Fund equipment without draining your reserves",
    heroDescription:
      "Spread the cost of vehicles, machinery and technology over time — preserving working capital for everything else.",
    image: assetFinanceImage,
    heroGif: "/gifs/asset-finance.gif?v=5",
    introTitle: "How asset finance works",
    introDescription:
      "Rather than paying the full cost of an asset upfront, asset finance lets you spread payments over an agreed term while you use the equipment to generate revenue. Facilities are available for new and used assets, including private sales.",
    benefits: [
      { icon: PiggyBank, title: "Preserve working capital", description: "Keep cash reserves free for day-to-day running costs instead of tying it up in a single purchase." },
      { icon: Truck, title: "Almost any asset covered", description: "From vans and manufacturing equipment to IT infrastructure, most business-critical assets can be financed." },
      { icon: RefreshCw, title: "New or used assets", description: "Finance is available for brand-new equipment or used assets, including those bought through a private sale." },
      { icon: Clock, title: "Fast decisions", description: "Most applications are decided within 24–48 hours, so you're not left waiting to get equipment on-site." },
    ],
    optionsSectionTitle: "Ways to finance an asset",
    optionsSectionDescription: "The right structure depends on whether you want to own the asset outright at the end of the term.",
    options: [
      { icon: ShieldCheck, title: "Hire purchase", description: "Fixed monthly payments with ownership transferring to you once the final payment is made." },
      { icon: Repeat, title: "Leasing", description: "Rent the asset for an agreed term, then return, renew or upgrade at the end." },
      { icon: RefreshCw, title: "Asset refinance", description: "Release capital tied up in equipment you already own, using it as security for further funding." },
      { icon: Truck, title: "Vehicle & fleet finance", description: "Finance a single vehicle or an entire fleet, with flexible mileage and term options." },
    ],
    useCaseBullets: [
      "Replacing or expanding a vehicle fleet",
      "Investing in new machinery ahead of a contract",
      "Upgrading IT infrastructure without a large outlay",
      "Releasing equity from equipment you already own",
    ],
    faqs: [
      { question: "Can I finance used equipment?", answer: "Yes, including assets bought through a private sale, provided they meet the lender's age and condition criteria." },
      { question: "What happens at the end of a hire purchase agreement?", answer: "Once the final payment is made, ownership of the asset transfers to your business." },
      { question: "Can I release cash from equipment I already own?", answer: "Yes — asset refinance lets you borrow against equipment you own outright, releasing capital for other uses." },
      { question: "How quickly can equipment finance be arranged?", answer: "Straightforward applications are often decided within 24–48 hours, with funds released shortly after." },
      { question: "Is a deposit required?", answer: "This depends on the lender and asset, though many facilities can be arranged with little or no deposit." },
    ],
  },
  {
    slug: "merchant-cash-advance",
    name: "Merchant Cash Advance",
    icon: CreditCard,
    tagline: "Funding that flexes with your card revenue",
    summary:
      "An advance against future card sales with no fixed monthly repayment — you repay a small percentage of turnover as it comes in.",
    range: "£5k – £300k",
    term: "4 – 12 months",
    decision: "24 hours",
    bullets: [
      "Repayments rise and fall with your takings",
      "No fixed monthly payment or missed-payment fees",
      "Popular with retail, hospitality and leisure businesses",
    ],
    heroTitle: "Funding that flexes with your card revenue",
    heroDescription:
      "An advance against future card sales, repaid as a small percentage of turnover — with no fixed monthly repayment to worry about.",
    image: merchantCashAdvanceImage,
    heroGif: "/gifs/merchant-cash-advance.gif?v=5",
    introTitle: "How a merchant cash advance works",
    introDescription:
      "Rather than a fixed loan repayment, a merchant cash advance is repaid automatically as a percentage of your daily card takings. When trade is quiet, repayments fall; when trade picks up, they rise — so the facility moves with your business.",
    benefits: [
      { icon: TrendingUp, title: "Repayments track your takings", description: "No fixed monthly amount — you repay more in busy periods and less when trade slows." },
      { icon: Clock, title: "Fast approval", description: "Decisions are often returned within 24 hours, based largely on your card sales history." },
      { icon: ShieldCheck, title: "No missed payment fees", description: "Because repayment is a percentage of turnover, there's no fixed date to miss and no late payment penalty." },
      { icon: Percent, title: "No collateral required", description: "Approval is based on your card sales, not on providing an asset as security." },
    ],
    optionsSectionTitle: "Who a merchant cash advance suits",
    optionsSectionDescription: "Popular with businesses that take a high proportion of card payments.",
    options: [
      { icon: Building2, title: "Retail", description: "Cover stock, seasonal peaks or refurbishment costs, with repayments that flex around footfall." },
      { icon: Users2, title: "Hospitality", description: "Fund refurbishments, equipment or staffing, repaid in line with daily card takings." },
      { icon: Zap, title: "Leisure", description: "Manage seasonal cash flow swings without committing to a fixed monthly repayment." },
    ],
    useCaseBullets: [
      "Covering a seasonal dip in cash flow",
      "Funding a refurbishment or refit",
      "Purchasing stock ahead of a busy period",
      "Accessing funding without collateral",
    ],
    faqs: [
      { question: "How is a merchant cash advance repaid?", answer: "As a small, agreed percentage of your daily or weekly card sales, collected automatically until the advance is repaid." },
      { question: "What if my business has a quiet month?", answer: "Repayments fall in line with your card takings, so a quieter period reduces what you repay that month." },
      { question: "Do I need good credit to qualify?", answer: "Approval is based mainly on your card sales history and turnover, so it can suit businesses that wouldn't qualify for a traditional loan." },
      { question: "How much can I access?", answer: "Facilities typically range from £5,000 to £300,000, based on your average monthly card turnover." },
      { question: "How quickly can I get funded?", answer: "Many providers can approve and fund within 24 hours of receiving your card sales history." },
    ],
  },
  {
    slug: "business-cash-advance",
    name: "Business Cash Advance",
    icon: PiggyBank,
    tagline: "Revenue-based cash advance with flexible repayments",
    summary:
      "A lump sum advance repaid through small, regular payments linked to your overall business revenue — not just card takings.",
    range: "£5k – £250k",
    term: "3 – 12 months",
    decision: "24 hours",
    bullets: [
      "Available to businesses without significant card sales",
      "Repayments scale automatically with turnover",
      "Fast, largely paperwork-free application",
    ],
    heroTitle: "Revenue-based funding that flexes with your turnover",
    heroDescription:
      "A lump sum advance repaid through small, regular payments linked to your overall business revenue — not just card sales.",
    image: businessCashAdvanceImage,
    heroGif: "/gifs/business-cash-advance.gif?v=5",
    introTitle: "How a business cash advance works",
    introDescription:
      "Similar to a merchant cash advance but based on total business revenue rather than card takings alone, this makes it accessible to businesses without significant card sales — repayments scale automatically as turnover rises or falls.",
    benefits: [
      { icon: TrendingUp, title: "Scales with turnover", description: "Repayments are linked to overall revenue, not just card sales, so the facility works even if most income arrives by bank transfer or invoice." },
      { icon: Clock, title: "Fast, largely paperwork-free", description: "Applications are quick to complete, with decisions often returned within 24 hours." },
      { icon: ShieldCheck, title: "No fixed collateral", description: "Approval is based on your revenue and trading history rather than requiring a specific asset as security." },
      { icon: Percent, title: "Predictable structure", description: "A clear, agreed repayment percentage set upfront, so you know exactly how the facility works before you commit." },
    ],
    optionsSectionTitle: "Where a business cash advance fits",
    optionsSectionDescription: "A flexible option for businesses whose income doesn't flow mainly through card payments.",
    options: [
      { icon: Banknote, title: "Service businesses", description: "Suited to businesses invoicing clients directly rather than taking card payments." },
      { icon: Building2, title: "Wholesale & trade", description: "Access working capital linked to overall turnover rather than a single sales channel." },
      { icon: Users2, title: "Growing SMEs", description: "A flexible bridge for businesses scaling revenue but not yet ready for traditional lending criteria." },
    ],
    useCaseBullets: [
      "Accessing funding without significant card sales",
      "Smoothing cash flow tied to overall revenue",
      "Funding growth without a lengthy application process",
      "Bridging a short-term working capital gap",
    ],
    faqs: [
      { question: "How is this different from a merchant cash advance?", answer: "A merchant cash advance is repaid against card sales specifically, while a business cash advance is based on your total business revenue." },
      { question: "What businesses qualify?", answer: "Any business with a consistent revenue history, regardless of how much of that comes through card payments." },
      { question: "How much can I borrow?", answer: "Facilities typically range from £5,000 to £250,000, depending on your turnover." },
      { question: "How are repayments collected?", answer: "Usually through small, regular payments linked to your revenue, agreed upfront as part of the facility." },
      { question: "Will this affect my credit score to check?", answer: "No. Our initial eligibility check uses a soft search only." },
    ],
  },
  {
    slug: "commercial-property-finance",
    name: "Commercial Property Finance",
    icon: Building2,
    tagline: "Purchase or refinance owner-occupied premises",
    summary:
      "Competitive commercial mortgages for businesses buying, refinancing or releasing equity from the premises they trade from.",
    range: "£100k – £10M",
    term: "Up to 30 years",
    decision: "48–72 hours",
    bullets: [
      "Up to 75% loan-to-value as standard",
      "Owner-occupier premises across most sectors",
      "Fixed and variable rate options available",
    ],
    heroTitle: "Purchase, refinance or release equity from property",
    heroDescription:
      "Competitive commercial mortgages for businesses buying, refinancing or releasing capital from the property they trade from.",
    image: commercialPropertyFinanceImage,
    heroGif: "/gifs/commercial-property-finance.gif?v=5",
    introTitle: "How commercial property finance works",
    introDescription:
      "A commercial mortgage lets you purchase or refinance the premises your business operates from, typically up to 75% loan-to-value, with fixed or variable rate options over terms of up to 30 years.",
    benefits: [
      { icon: Building2, title: "Own your premises", description: "Stop paying rent to a landlord and build equity in a property your business already occupies." },
      { icon: Percent, title: "Competitive rates", description: "Access rates comparable to residential mortgages, reflecting the security of the property." },
      { icon: RefreshCw, title: "Release equity", description: "Refinance an owned property to release capital for expansion, investment or other business needs." },
      { icon: Clock, title: "Long terms available", description: "Spread repayments over up to 30 years, keeping monthly costs manageable." },
    ],
    optionsSectionTitle: "Commercial property finance options",
    optionsSectionDescription: "Whether you're buying, refinancing or releasing equity, here's how facilities are typically structured.",
    options: [
      { icon: Landmark, title: "Owner-occupier mortgages", description: "Purchase or refinance the premises your business trades from, up to 75% loan-to-value." },
      { icon: RefreshCw, title: "Equity release", description: "Release capital tied up in a property you already own outright or with significant equity." },
      { icon: Percent, title: "Fixed or variable rates", description: "Choose the rate structure that best suits your business's appetite for risk and predictability." },
    ],
    useCaseBullets: [
      "Buying the premises your business currently rents",
      "Refinancing an existing commercial mortgage onto a better rate",
      "Releasing equity from a property you already own",
      "Purchasing a second site as your business expands",
    ],
    faqs: [
      { question: "What loan-to-value can I borrow at?", answer: "Up to 75% as standard, though this varies by lender, property type and your business's financials." },
      { question: "Can I release equity from a property I already own?", answer: "Yes, provided you have sufficient equity — this is a common way to fund expansion or other business investment." },
      { question: "How long does a commercial mortgage take to arrange?", answer: "Typically 48–72 hours for an initial decision, with completion taking longer depending on valuation and legal work." },
      { question: "Can I get a fixed rate?", answer: "Yes, fixed and variable rate options are both available depending on the lender and product." },
      { question: "What property types are eligible?", answer: "Most owner-occupied commercial premises across retail, office, industrial and other sectors are eligible." },
    ],
  },
  {
    slug: "property-finance",
    name: "Property Finance",
    icon: Landmark,
    tagline: "Development and investment funding for property professionals",
    summary:
      "Bridging, development and portfolio finance for property investors and developers — from single refurbishments to ground-up builds.",
    range: "£100k – £10M",
    term: "Up to 24 months",
    decision: "48–72 hours",
    bullets: [
      "Bridging finance for time-sensitive purchases",
      "Development finance released in stages against build costs",
      "Portfolio and buy-to-let finance for investors",
    ],
    heroTitle: "Development finance for property professionals",
    heroDescription:
      "Bridging, development and portfolio finance for property investors and developers — from single refurbishments to ground-up builds.",
    image: propertyFinanceImage,
    heroGif: "/gifs/property-finance.gif?v=5",
    heroGifScale: 1.4,
    introTitle: "How property finance works",
    introDescription:
      "Property finance covers short-term and project-based funding for professionals working with property as an investment — released in stages against build costs, or as a lump sum against a portfolio.",
    benefits: [
      { icon: Clock, title: "Fast turnaround", description: "Decisions within 48–72 hours, so you can move quickly on time-sensitive opportunities." },
      { icon: HardHat, title: "Staged development funding", description: "Funds released in stages against build costs, keeping your cash flow aligned with project progress." },
      { icon: Layers, title: "Bridging finance", description: "Short-term funding for time-sensitive purchases, bridging you to a sale, remortgage or longer-term facility." },
      { icon: Building2, title: "Portfolio finance", description: "Funding secured against a portfolio of properties rather than a single asset." },
    ],
    optionsSectionTitle: "Types of property finance",
    optionsSectionDescription: "Structured around the stage and scale of your project.",
    options: [
      { icon: Layers, title: "Bridging finance", description: "Fast, short-term funding for time-sensitive purchases or gaps between transactions." },
      { icon: HardHat, title: "Development finance", description: "Released in stages against build costs, from refurbishments to ground-up construction." },
      { icon: Building2, title: "Portfolio & buy-to-let finance", description: "Funding for investors managing multiple properties or expanding a rental portfolio." },
    ],
    useCaseBullets: [
      "Funding a ground-up development project",
      "Refurbishing a property ahead of resale or letting",
      "Bridging the gap on a time-sensitive purchase",
      "Expanding or refinancing a buy-to-let portfolio",
    ],
    faqs: [
      { question: "What's the difference between bridging and development finance?", answer: "Bridging finance is a short-term lump sum for time-sensitive situations, while development finance is released in stages against build costs over the life of a project." },
      { question: "Can I finance a ground-up build?", answer: "Yes, development finance covers everything from light refurbishment to full ground-up construction." },
      { question: "How is portfolio finance different from a single property mortgage?", answer: "Portfolio finance is secured against multiple properties under one facility, often simplifying management for investors with several assets." },
      { question: "How quickly can property finance be arranged?", answer: "Initial decisions are typically returned within 48–72 hours, with completion timing depending on valuations and legal work." },
      { question: "Do I need previous development experience?", answer: "It can help secure better terms, but lenders on our panel work with both experienced developers and those undertaking a first project." },
    ],
  },
  {
    slug: "growth-guarantee-scheme",
    name: "Growth Guarantee Scheme",
    icon: ShieldCheck,
    tagline: "Government-backed lending to fuel expansion",
    summary:
      "Access the UK Growth Guarantee Scheme to borrow for expansion, working capital or asset purchase with a government-backed guarantee.",
    range: "£25k – £2M",
    term: "Up to 6 years",
    decision: "48–72 hours",
    bullets: [
      "Backed by the British Business Bank",
      "Competitive rates versus standard unsecured lending",
      "Available to viable businesses across most sectors",
    ],
    heroTitle: "Government-backed lending to fuel your growth",
    heroDescription:
      "Access the UK Growth Guarantee Scheme to borrow for growth — backed by a government guarantee.",
    image: growthGuaranteeSchemeImage,
    heroGif: "/gifs/growth-guarantee-scheme.gif?v=5",
    introTitle: "How the Growth Guarantee Scheme works",
    introDescription:
      "Delivered through accredited lenders and backed by the British Business Bank, the scheme gives lenders a partial government guarantee — often unlocking finance for viable businesses that might not otherwise meet standard lending criteria.",
    benefits: [
      { icon: ShieldCheck, title: "Backed by the British Business Bank", description: "A government guarantee to the lender can open up finance that might otherwise be declined." },
      { icon: Percent, title: "Competitive rates", description: "Often priced more competitively than standard unsecured lending, reflecting the reduced lender risk." },
      { icon: Landmark, title: "Multiple uses", description: "Funds can support working capital, expansion or asset purchase, depending on your business's needs." },
      { icon: Clock, title: "Efficient decisions", description: "Typical decisions within 48–72 hours through our accredited lender panel." },
    ],
    optionsSectionTitle: "What the scheme can be used for",
    optionsSectionDescription: "Flexible lending for viable UK businesses across most sectors.",
    options: [
      { icon: TrendingUp, title: "Business expansion", description: "Fund growth plans such as new premises, staff or equipment." },
      { icon: Wallet, title: "Working capital", description: "Support day-to-day cash flow during a period of growth or change." },
      { icon: Truck, title: "Asset purchase", description: "Acquire equipment or vehicles needed to support expansion." },
    ],
    useCaseBullets: [
      "Expanding into a new market or location",
      "Supporting working capital during a growth phase",
      "Purchasing assets to support increased capacity",
      "Accessing finance where standard criteria weren't met",
    ],
    faqs: [
      { question: "What is the Growth Guarantee Scheme?", answer: "A government-backed lending scheme, delivered through accredited lenders and supported by the British Business Bank, designed to help viable businesses access finance." },
      { question: "Who is eligible?", answer: "Most viable UK businesses across most sectors can apply, subject to the accredited lender's standard assessment." },
      { question: "How much can I borrow?", answer: "Facilities typically range from £25,000 to £2 million, depending on the lender and your business's circumstances." },
      { question: "Does the guarantee mean I'm not liable for the loan?", answer: "No — the guarantee is between the lender and the government; your business remains fully responsible for repaying the loan." },
      { question: "How long does approval take?", answer: "Typically 48–72 hours for an initial decision through our accredited lender panel." },
    ],
  },
  {
    slug: "recovery-loan-scheme",
    name: "Recovery Loan Scheme",
    icon: LifeBuoy,
    tagline: "Government-backed support to stabilise and rebuild",
    summary:
      "Support for businesses navigating a period of disruption, offering government-backed lending to stabilise cash flow and rebuild.",
    range: "£25k – £2M",
    term: "Up to 6 years",
    decision: "48–72 hours",
    bullets: [
      "Government-backed guarantee to the lender",
      "Suitable where standard lending criteria aren't met",
      "Applicable across most viable UK sectors",
    ],
    heroTitle: "Government-backed support to rebuild and grow",
    heroDescription:
      "Lending to help businesses navigating disruption stabilise cash flow, restructure and rebuild — backed by a government guarantee.",
    image: recoveryLoanSchemeImage,
    heroGif: "/gifs/recovery-loan-scheme.gif?v=5",
    introTitle: "How the Recovery Loan Scheme works",
    introDescription:
      "Designed for businesses that have faced disruption but remain viable, the scheme uses a government-backed guarantee to help lenders support recovery lending where standard criteria might not otherwise be met.",
    benefits: [
      { icon: ShieldCheck, title: "Government-backed guarantee", description: "Reduces lender risk, helping viable but disrupted businesses access the funding they need." },
      { icon: LifeBuoy, title: "Built for recovery", description: "Specifically designed to support businesses stabilising after a period of disruption." },
      { icon: Landmark, title: "Flexible use of funds", description: "Support cash flow, restructuring or investment as your business rebuilds." },
      { icon: Clock, title: "Efficient process", description: "Typical decisions within 48–72 hours through our accredited lender panel." },
    ],
    optionsSectionTitle: "What the scheme supports",
    optionsSectionDescription: "Lending built around recovery and stabilisation, not just growth.",
    options: [
      { icon: Wallet, title: "Cash flow stabilisation", description: "Support day-to-day operations while your business recovers." },
      { icon: RefreshCw, title: "Restructuring", description: "Reorganise existing borrowing onto a more sustainable footing." },
      { icon: TrendingUp, title: "Rebuilding for growth", description: "Reinvest in the business once stability is restored." },
    ],
    useCaseBullets: [
      "Stabilising cash flow after a period of disruption",
      "Restructuring existing debt onto more manageable terms",
      "Rebuilding working capital reserves",
      "Accessing lending where standard criteria weren't met",
    ],
    faqs: [
      { question: "Who is the Recovery Loan Scheme for?", answer: "Viable UK businesses that have experienced a period of disruption and need support to stabilise or rebuild." },
      { question: "How much can I borrow?", answer: "Facilities typically range from £25,000 to £2 million, depending on the lender and your circumstances." },
      { question: "Is my business still responsible for repaying the loan?", answer: "Yes — the government guarantee is to the lender, not a write-off of your liability to repay." },
      { question: "How is this different from the Growth Guarantee Scheme?", answer: "Both use a similar government-backed guarantee structure, but the Recovery Loan Scheme is specifically aimed at businesses stabilising after disruption." },
      { question: "How long does a decision take?", answer: "Typically 48–72 hours through our accredited lender panel." },
    ],
  },
  {
    slug: "revolving-credit-facility",
    name: "Revolving Credit Facility",
    icon: Repeat,
    tagline: "On-demand credit that flexes with your needs",
    summary:
      "An agreed credit limit you can draw down, repay and reuse as needed — like a flexible overdraft built for growing businesses.",
    range: "£10k – £1M",
    term: "Rolling facility",
    decision: "24–48 hours",
    bullets: [
      "Only pay interest on what you draw down",
      "Reuse the facility as you repay it",
      "Ideal for managing ongoing working capital needs",
    ],
    heroTitle: "On-demand credit that flexes with your needs",
    heroDescription:
      "A flexible credit limit you can draw down, repay and reuse whenever your business needs it.",
    image: revolvingCreditFacilityImage,
    heroGif: "/gifs/revolving-credit-facility.gif?v=5",
    introTitle: "How a revolving credit facility works",
    introDescription:
      "Once approved, you can draw funds up to an agreed limit whenever needed, repay them, and draw again — only paying interest on the amount you've actually used, not the full facility.",
    benefits: [
      { icon: Repeat, title: "Reuse the facility", description: "Draw down, repay and redraw as needed, without reapplying each time." },
      { icon: Percent, title: "Interest on what you use", description: "Only pay interest on funds actually drawn, not the full agreed limit." },
      { icon: Wallet, title: "Ongoing working capital", description: "A ready source of funds for managing day-to-day cash flow fluctuations." },
      { icon: Clock, title: "Fast access to funds", description: "Draw down quickly once the facility is in place, without a fresh application each time." },
    ],
    optionsSectionTitle: "Where a revolving facility fits",
    optionsSectionDescription: "Built for ongoing, flexible access rather than a one-off lump sum.",
    options: [
      { icon: Wallet, title: "Working capital management", description: "Cover fluctuations in cash flow without applying for new finance each time." },
      { icon: Repeat, title: "Seasonal buffers", description: "Draw down during quieter periods and repay as trade picks up." },
      { icon: TrendingUp, title: "Opportunity funding", description: "Access funds quickly to act on time-sensitive opportunities." },
    ],
    useCaseBullets: [
      "Managing ongoing working capital fluctuations",
      "Covering seasonal dips without a new application",
      "Acting quickly on a time-sensitive opportunity",
      "Replacing a rigid loan with more flexible access to funds",
    ],
    faqs: [
      { question: "How is this different from a business loan?", answer: "A business loan provides a fixed lump sum repaid over a set term. A revolving credit facility gives you an ongoing limit you can draw down, repay and reuse." },
      { question: "Do I pay interest on the full facility limit?", answer: "No — interest is only charged on the amount you've actually drawn down at any given time." },
      { question: "How much can I access?", answer: "Facilities typically range from £10,000 to £1 million, depending on your business's turnover and trading history." },
      { question: "Can I redraw funds after repaying?", answer: "Yes — that's the core feature of a revolving facility. Once repaid, the funds become available to draw down again." },
      { question: "How quickly can a facility be set up?", answer: "Initial decisions are typically returned within 24–48 hours." },
    ],
  },
  {
    slug: "refinance",
    name: "Refinance & Consolidation",
    icon: RefreshCw,
    tagline: "Release equity and simplify your repayments",
    summary:
      "Refinance existing debt or assets to release equity, lower your rate, or combine multiple repayments into one manageable facility.",
    range: "£10k – £3M",
    term: "Up to 7 years",
    decision: "48–72 hours",
    bullets: [
      "Consolidate multiple facilities into one repayment",
      "Free up equity tied up in owned assets or property",
      "Potential to reduce your overall cost of borrowing",
    ],
    heroTitle: "Release equity and simplify your repayments",
    heroDescription:
      "Refinance existing debt or assets to release equity, lower your rate, or combine multiple repayments into one manageable facility.",
    image: refinanceImage,
    heroGif: "/gifs/refinance.gif?v=5",
    introTitle: "How refinancing and consolidation work",
    introDescription:
      "Refinancing replaces an existing facility — or several — with a new one, often on better terms, releasing equity from assets you already own or combining multiple repayments into a single, simpler facility.",
    benefits: [
      { icon: RefreshCw, title: "Consolidate multiple facilities", description: "Combine several repayments into one, simplifying cash flow management." },
      { icon: Percent, title: "Reduce borrowing costs", description: "Refinancing onto a better rate can lower your overall cost of borrowing." },
      { icon: PiggyBank, title: "Release tied-up equity", description: "Access capital tied up in property or other owned assets." },
      { icon: Clock, title: "Efficient process", description: "Typical decisions within 48–72 hours, depending on the complexity of the refinance." },
    ],
    optionsSectionTitle: "Ways to refinance",
    optionsSectionDescription: "The right structure depends on what you're refinancing and why.",
    options: [
      { icon: Landmark, title: "Property refinance", description: "Refinance a commercial mortgage or release equity from owned premises." },
      { icon: Truck, title: "Asset refinance", description: "Release capital tied up in equipment or vehicles you already own." },
      { icon: RefreshCw, title: "Debt consolidation", description: "Combine multiple existing facilities into a single, simplified repayment." },
    ],
    useCaseBullets: [
      "Combining several repayments into one facility",
      "Releasing equity from property or owned assets",
      "Moving existing debt onto a more competitive rate",
      "Simplifying cash flow management across the business",
    ],
    faqs: [
      { question: "What can be refinanced?", answer: "Existing business loans, commercial mortgages, and owned assets such as equipment or vehicles can typically all be refinanced." },
      { question: "Will refinancing reduce my monthly costs?", answer: "It can, particularly if you're moving from a higher rate or combining several repayments into one, though this depends on your current facilities and the new terms available." },
      { question: "Can I release equity as part of a refinance?", answer: "Yes — refinancing an asset or property you own outright, or with substantial equity, can release capital for other uses." },
      { question: "How long does refinancing take?", answer: "Typically 48–72 hours for an initial decision, though property refinances may take longer due to valuation requirements." },
      { question: "Is there an early repayment charge on my existing facility?", answer: "This depends on your current lender and agreement — we'll help you check before proceeding so there are no surprises." },
    ],
  },
];

export const getSolutionBySlug = (slug: string) =>
  solutions.find((solution) => solution.slug === slug);
