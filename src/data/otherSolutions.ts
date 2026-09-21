import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import businessBankAccountsImage from "@/assets/BusinessBankAccounts.jpg";
import merchantServicesImage from "@/assets/MerchantServices.jpg";
import businessCreditCardsImage from "@/assets/BusinessCreditCards.jpg";
import bridgingLoansImage from "@/assets/BridgingLoans.jpg";
import machineryVehicleFinanceImage from "@/assets/Machinery&VehicleFinance.jpg";
import {
  Landmark,
  ShoppingCart,
  CreditCard,
  Layers,
  Cog,
  Banknote,
  ShieldCheck,
  Eye,
  Headset,
  Repeat,
  Rocket,
  UserX,
  Wallet,
  Percent,
  Wifi,
  Phone,
  MonitorSmartphone,
  TrendingUp,
  Users2,
  Clock,
  RefreshCw,
  Home,
  ClipboardCheck,
  Truck,
  Sparkles,
  ArrowUpCircle,
  PiggyBank,
  HardHat,
  Building2,
} from "lucide-react";

export type OtherSolutionFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type OtherSolutionFaq = {
  question: string;
  answer: string;
};

export type OtherSolution = {
  // --- used on the nav dropdown ---
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;

  // --- detail page: hero section ---
  heroTitle: string;
  heroDescription: string;
  image: StaticImageData;

  // --- detail page: intro section ---
  introTitle: string;
  introDescription: string;
  benefits: OtherSolutionFeature[];

  // --- detail page: "options" / "how it works" section ---
  optionsSectionTitle: string;
  optionsSectionDescription: string;
  options: OtherSolutionFeature[];

  useCaseBullets: string[];
  faqs: OtherSolutionFaq[];
};

export const otherSolutions: OtherSolution[] = [
  // ===== Business Bank Accounts =====
  {
    slug: "business-bank-accounts",
    name: "Business Bank Accounts",
    icon: Landmark,
    tagline: "Find the perfect bank account for your business needs",
    image: businessBankAccountsImage,
    heroTitle: "Let's connect your business to the right bank",
    heroDescription:
      "Every business banks differently. We compare business current accounts across the market so you can find one that's actually built around how your business needs to operate.",
    introTitle: "Find the perfect banking match for your business",
    introDescription:
      "Different business bank accounts offer different perks, and the right one depends on what matters most to you. A free account may be the priority for a business just starting out, while an established company may care more about cash deposit costs or branch access. Comparing providers side by side is the quickest way to land on the right fit.",
    benefits: [
      { icon: Wallet, title: "No extra costs", description: "A virtually free service to customers — we're paid by the lender, not by you." },
      { icon: ShieldCheck, title: "Trusted lenders", description: "We only work with verified, regulated fund providers." },
      { icon: Eye, title: "Complete transparency", description: "Clear comparisons that help you make an easy, informed decision." },
      { icon: Headset, title: "Finance specialists", description: "Expert guidance from a team that knows the UK banking market." },
    ],
    optionsSectionTitle: "Business account types to suit every need",
    optionsSectionDescription: "From switching banks to opening your first account, here's how we can help.",
    options: [
      { icon: Repeat, title: "Switching services", description: "Access better banking services at a lower cost — we help you switch to a provider offering stronger features and lower fees." },
      { icon: Rocket, title: "Startup accounts", description: "Banking built for new business owners, with minimal fees and support designed for early-stage companies." },
      { icon: UserX, title: "Bad credit solutions", description: "Banking options for businesses with a low credit score, matched to providers who understand and accommodate credit challenges." },
      { icon: Banknote, title: "Free banking options", description: "Virtually free banking services, ideal for small businesses looking to minimise operational costs." },
      { icon: Truck, title: "Contractor banking", description: "Specialist accounts tailored to the unique needs of contract-based and freelance businesses." },
      { icon: Users2, title: "Individual trader accounts", description: "Simple, straightforward accounts built for sole traders and individual operators." },
    ],
    useCaseBullets: [
      "Switching provider for better rates and lower fees",
      "Opening your first account as a new business",
      "Finding an account despite a poor credit history",
      "Choosing between free and fee-based banking options",
    ],
    faqs: [
      { question: "Can I get a business bank account with bad credit?", answer: "Yes. We work with providers who specialise in accounts for businesses with a lower credit score, so a poor credit history doesn't automatically rule you out." },
      { question: "Is it worth switching business bank accounts?", answer: "Often, yes. Switching can unlock lower fees, better digital tools or improved everyday banking features — we compare the market so you can see what you'd actually gain." },
      { question: "Do I need to be trading already to open an account?", answer: "No. We work with providers offering startup accounts designed specifically for new businesses that haven't traded yet." },
      { question: "Are there completely free business bank accounts?", answer: "Yes, several providers offer accounts with no or very low monthly fees, particularly for smaller businesses with lighter banking needs." },
      { question: "Will comparing accounts affect my credit score?", answer: "No. Comparing options with us doesn't involve a credit check — you'll only go through a provider's own application process once you choose an account." },
    ],
  },

  // ===== Merchant Services =====
  {
    slug: "merchant-services",
    name: "Merchant Services",
    icon: ShoppingCart,
    tagline: "Accept payments securely in person, online, or by phone",
    image: merchantServicesImage,
    heroTitle: "Accept payments securely from customers anywhere",
    heroDescription:
      "A suite of merchant services that lets your business accept card payments in person, online or over the phone — with better cash flow, easier reconciliation and secure, fast transactions.",
    introTitle: "Modern payment solutions for modern business",
    introDescription:
      "The way customers pay has changed. Contactless and online shopping mean customers now expect to pay by card in-store, over the phone, by email or through a web portal — and businesses that can't offer that risk losing the sale.",
    benefits: [
      { icon: Wallet, title: "No extra costs", description: "A virtually free service — we help you find the right provider at no cost to you." },
      { icon: ShieldCheck, title: "Trusted providers", description: "Verified, PCI-compliant payment processors only." },
      { icon: Eye, title: "Complete transparency", description: "Clear, upfront pricing so there are no surprises in your statement." },
      { icon: Headset, title: "Specialist support", description: "Expert guidance to match you with the right payment setup." },
    ],
    optionsSectionTitle: "Merchant service options",
    optionsSectionDescription: "From a single card machine to a full point-of-sale system, here's what we help arrange.",
    options: [
      { icon: CreditCard, title: "Card machines", description: "A range of card machines to improve revenue capture, accepting contactless, chip & PIN and magnetic stripe payments." },
      { icon: Wifi, title: "Online payments", description: "Secure, PCI-compliant payment gateways so you can take card payments through your website." },
      { icon: Phone, title: "Phone payments", description: "Secure telephone payment solutions for mail-order and remote sales businesses." },
      { icon: MonitorSmartphone, title: "EPOS systems", description: "All-in-one EPOS systems that combine payment processing with inventory and sales management." },
    ],
    useCaseBullets: [
      "Taking card payments in-store for the first time",
      "Adding online checkout to an existing website",
      "Handling phone or mail-order payments securely",
      "Replacing an ageing card machine or EPOS system",
    ],
    faqs: [
      { question: "What are typical transaction rates for card payments?", answer: "Rates vary by provider, payment type and your business's turnover — we compare providers to find you competitive, transparent pricing." },
      { question: "Can I accept payments online and in person with one provider?", answer: "Yes. Many merchant service providers offer combined in-person, online and phone payment solutions under a single account." },
      { question: "How quickly does money reach my account?", answer: "Many providers offer next-day settlement, though this depends on the provider and payment type." },
      { question: "Can I get an EPOS system alongside card payments?", answer: "Yes. EPOS systems combine card payment processing with stock and sales management, and can usually be arranged together." },
      { question: "Will checking my options affect my credit score?", answer: "No. Comparing merchant service providers with us doesn't involve a credit check." },
    ],
  },

  // ===== Business Credit Cards =====
  {
    slug: "business-credit-cards",
    name: "Business Credit Cards",
    icon: CreditCard,
    tagline: "Corporate credit cards for expense and cash flow management",
    image: businessCreditCardsImage,
    heroTitle: "Flexible credit solutions for business expenses",
    heroDescription:
      "Business credit cards — also known as corporate credit cards — make it easy to access additional funds when you need them, control cash flow, track expenses and spread costs.",
    introTitle: "How do business credit cards work?",
    introDescription:
      "A business credit card gives you a credit limit based on your business's credit profile. Most providers offer an interest-free period — typically 45 days, sometimes up to 90 — so if you clear the balance in full each month, it can be a genuinely low-cost way to manage short-term spending.",
    benefits: [
      { icon: TrendingUp, title: "Cash flow management", description: "Use it as a revolving facility for short-term expenses — paying suppliers, covering renovations or topping up working capital." },
      { icon: ClipboardCheck, title: "Expense tracking & control", description: "Set individual spending limits for employees and keep on top of day-to-day business costs." },
      { icon: Clock, title: "Interest-free periods", description: "Most providers offer 45–90 days interest-free, so you only pay if you carry a balance beyond that term." },
      { icon: ArrowUpCircle, title: "Build business credit", description: "Paying on time consistently helps build your business credit profile for future finance." },
    ],
    optionsSectionTitle: "What a business credit card can help with",
    optionsSectionDescription: "A flexible tool for everyday spending and short-term cash flow needs.",
    options: [
      { icon: Users2, title: "Employee expense cards", description: "Issue cards to your team with individual limits, so spending stays visible and controlled." },
      { icon: Percent, title: "Interest-free spending", description: "Clear the balance within the interest-free window and effectively borrow at no extra cost." },
      { icon: Wallet, title: "Emergency working capital", description: "A ready credit line for unexpected costs, without needing to apply for a new facility each time." },
      { icon: Repeat, title: "Supplier & operational payments", description: "Cover day-to-day supplier and operational costs while managing your cash flow timing." },
    ],
    useCaseBullets: [
      "Managing short-term expenses without dipping into working capital",
      "Giving employees controlled spending limits",
      "Taking advantage of an interest-free repayment window",
      "Building a business credit profile ahead of larger finance needs",
    ],
    faqs: [
      { question: "How much credit can my business get?", answer: "Your credit limit is based on your business's credit profile and financials — providers assess this individually as part of the application." },
      { question: "Do I have to pay interest on a business credit card?", answer: "Not if you clear the balance in full within the interest-free period, typically 45–90 days depending on the provider." },
      { question: "Can I issue cards to my employees?", answer: "Yes. Most business credit cards let you issue additional cards with individual spending limits for your team." },
      { question: "Will applying affect my personal credit score?", answer: "Business credit cards are typically assessed against the business's credit profile, though some providers may also consider a personal guarantee." },
      { question: "Can a business credit card help build my credit profile?", answer: "Yes. Consistently paying on time helps demonstrate reliability, which can support future finance applications." },
    ],
  },

  // ===== Bridging Loans =====
  {
    slug: "bridging-loans",
    name: "Bridging Loans",
    icon: Layers,
    tagline: "Short-term finance to bridge financial gaps",
    image: bridgingLoansImage,
    heroTitle: "Bridge financial gaps with short-term credit",
    heroDescription:
      "Short-term business credit that bridges the gap between two financial events — commonly used by property owners and business investors to cover a deficit while longer-term finance is arranged.",
    introTitle: "How do bridging loans work?",
    introDescription:
      "A bridging loan lets you purchase a property before selling your current one, or fund renovation and construction work ahead of securing a conventional mortgage. It's designed to be fast and short-term, bridging you to your next stage of finance.",
    benefits: [
      { icon: Clock, title: "Rapid access to funds", description: "Apply online and receive a decision within 24 hours, with funds able to reach your account within two weeks of approval." },
      { icon: Home, title: "Property purchase flexibility", description: "Purchase a new property before selling your current one, using existing equity as a deposit." },
      { icon: Layers, title: "Versatile usage", description: "Suited to property purchases, renovations, new construction, working capital and bridging to long-term finance." },
      { icon: ShieldCheck, title: "No credit barriers", description: "Even with a poor credit history, you may still qualify if you have equity, a clear repayment plan and suitable security." },
    ],
    optionsSectionTitle: "When to use a bridging loan",
    optionsSectionDescription: "Bridging finance is built for situations where speed and flexibility matter most.",
    options: [
      { icon: Home, title: "Buying before selling", description: "Purchase your next property before your current one has sold, using it as security." },
      { icon: HardHat, title: "Renovation & construction", description: "Fund refurbishment or new-build work ahead of arranging a conventional mortgage." },
      { icon: Clock, title: "Awaiting long-term finance", description: "Cover the gap while waiting for a mortgage, sale proceeds or an investment round to complete." },
      { icon: Wallet, title: "Working capital gaps", description: "Access short-term funds to cover cash flow gaps secured against property or other assets." },
      { icon: Building2, title: "Property development", description: "Finance for commercial or residential development projects, released against the asset." },
    ],
    useCaseBullets: [
      "Completing a property purchase before your sale finishes",
      "Funding renovation work ahead of a remortgage",
      "Covering costs while a longer-term facility is arranged",
      "Releasing equity from property quickly for working capital",
    ],
    faqs: [
      { question: "How fast can a bridging loan be arranged?", answer: "Straightforward applications can be approved within 24 hours, with funds often released within two weeks." },
      { question: "What can I use a bridging loan for?", answer: "Common uses include buying a property before selling your current one, funding renovations, new construction, working capital or bridging to a longer-term facility." },
      { question: "Can I get a bridging loan with poor credit?", answer: "Yes, potentially. Lenders focus heavily on the security and exit route — if you have sufficient equity and a clear repayment plan, credit history is less of a barrier than with unsecured lending." },
      { question: "What happens at the end of the bridging term?", answer: "You repay the loan through your 'exit' — typically the sale of a property, a remortgage, or a longer-term finance facility completing." },
      { question: "Will checking my eligibility affect my credit score?", answer: "No. Our initial eligibility check uses a soft search that has no impact on your personal or business credit score." },
    ],
  },

  // ===== Machinery & Vehicle Finance =====
  {
    slug: "machinery-vehicle-finance",
    name: "Machinery & Vehicle Finance",
    icon: Cog,
    tagline: "Lease equipment and vehicles without capital outlay",
    image: machineryVehicleFinanceImage,
    heroTitle: "Acquire assets without the capital outlay",
    heroDescription:
      "Financing options that let you invest in the machinery and vehicles your business needs, without a large upfront cost or draining your working capital.",
    introTitle: "Machinery & vehicle finance explained",
    introDescription:
      "Leasing means renting an asset for a set period rather than buying it outright — letting you start using new equipment immediately while spreading the cost over time, instead of waiting to save up the full purchase price.",
    benefits: [
      { icon: Cog, title: "Financing flexibility", description: "Acquire costly equipment through leasing — spreading the cost over time without a permanent ownership commitment." },
      { icon: Rocket, title: "Immediate equipment access", description: "Start using new equipment straight away and generating revenue from it, rather than waiting to save the capital." },
      { icon: RefreshCw, title: "Upgrade options", description: "At the end of the lease, renew, buy outright, upgrade to a newer model, or simply return the equipment." },
      { icon: PiggyBank, title: "Cash flow protection", description: "Avoid a large capital outlay so working capital stays available for core operations." },
    ],
    optionsSectionTitle: "Financing options for machinery and vehicles",
    optionsSectionDescription: "From heavy plant to a single company van, here's what we typically help arrange.",
    options: [
      { icon: Truck, title: "Vehicle contract hire", description: "Rent vehicles for a fixed term and mileage with a fixed monthly rental — return or purchase at fair market value at the end." },
      { icon: Sparkles, title: "New & used equipment", description: "Financing covers both new and used machinery and vehicles, including private sales." },
      { icon: Cog, title: "Wide equipment range", description: "From heavy machinery and vehicles to IT systems and manufacturing equipment for project-based needs." },
      { icon: RefreshCw, title: "End-of-term flexibility", description: "Renew, upgrade, purchase or return equipment at the end of the agreement — whatever suits your business next." },
    ],
    useCaseBullets: [
      "Replacing or expanding a vehicle fleet without a large outlay",
      "Financing heavy machinery or plant ahead of a new contract",
      "Staying current with equipment without owning it outright",
      "Preserving working capital while still accessing what you need",
    ],
    faqs: [
      { question: "What's the difference between leasing and buying equipment outright?", answer: "Leasing spreads the cost over an agreed term and preserves working capital, while buying outright ties up capital immediately but avoids ongoing rental costs." },
      { question: "Can I finance used machinery or vehicles?", answer: "Yes. Financing is available for new and used equipment, including assets bought through a private sale." },
      { question: "What happens at the end of a lease?", answer: "Depending on the agreement, you can typically renew, purchase the equipment outright, upgrade to a new lease, or return the asset." },
      { question: "Does this affect my credit score to check?", answer: "No. An initial eligibility check uses a soft search that has no impact on your personal or business credit score." },
      { question: "Can I finance a single vehicle or does it need to be a fleet?", answer: "Either. Financing can cover a single vehicle or machine, or a full fleet, depending on what your business needs." },
    ],
  },
];

export const getOtherSolutionBySlug = (slug: string) =>
  otherSolutions.find((solution) => solution.slug === slug);
