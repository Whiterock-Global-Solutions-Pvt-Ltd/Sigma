"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  CircleAlert,
  Clock,
  Loader2,
  Lock,
  Pencil,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";
import CompanySearch from "./CompanySearch";
import CompanyProfilePanel, { OTHER_CONTACT, type CompanyAddress } from "./CompanyProfilePanel";
import {
  MAX_AMOUNT,
  MIN_AMOUNT,
  assessFunding,
  formatCompactCurrency,
  tradingOptions,
  yearsSince,
  type CompanyDetails,
  type CompanySuggestion,
  type FactorKind,
  type FundingAssessment,
} from "./funding-assessment";

type Step = 1 | 2 | 3;

const stepLabels = ["Business", "Details", "Review"];

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-white placeholder-primary-400 outline-none transition-colors focus:border-secondary-400/60 focus:ring-1 focus:ring-secondary-400/60 disabled:opacity-50";
const checkboxClasses =
  "h-4 w-4 shrink-0 rounded border-white/20 bg-black/20 accent-secondary-400";

const formatCurrency = (value: number) =>
  value.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });

const clampAmount = (value: number) => Math.min(MAX_AMOUNT, Math.max(MIN_AMOUNT, value));

const purposeOptions = [
  "Working capital / cash flow",
  "Stock/Inventory",
  "Equipment or machinery",
  "Business expansion",
  "Refinancing existing debt",
  "Property purchase",
  "Tax bill / VAT",
  "Other",
];

const urgencyOptions = [
  "Immediately (1 week)",
  "Soon (1 month)",
  "Planning ahead (1-3 months)",
  "Just exploring",
];

const revenueOptions = [
  "Under £100k",
  "£100k – £250k",
  "£250k – £500k",
  "£500k – £1m",
  "£1m – £5m",
  "Over £5m",
];

const generateReferenceId = () =>
  `SIG-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

const trustCards = [
  {
    icon: Clock,
    iconClasses: "bg-secondary-500/10 text-secondary-400",
    title: "24–48hrs",
    titleClasses: "text-xl",
    description: "average time from enquiry to funding decision",
    note: "* For loans up to £100,000",
  },
  {
    icon: Sparkles,
    iconClasses: "bg-blue-500/10 text-blue-300",
    title: "Instant Results",
    titleClasses: "text-base",
    description: "Know your options in seconds",
  },
  {
    icon: ShieldCheck,
    iconClasses: "bg-emerald-500/10 text-emerald-400",
    title: "No Credit Check",
    titleClasses: "text-base",
    description: "Your credit score stays protected",
  },
];

function InfoPanel({ insights, className = "" }: { insights?: ReactNode; className?: string }) {
  return (
    <div
      className={`relative flex flex-col gap-6 rounded-t-3xl bg-white/[0.02] p-6 animate-fade-up sm:p-8 lg:rounded-l-3xl lg:rounded-tr-none ${className}`}
    >
      <div className="flex flex-col gap-5 lg:sticky lg:top-24">
        <div>
          <h1
            className={`bg-gradient-to-r from-white via-white to-secondary-300 bg-clip-text font-heading font-bold leading-tight text-transparent ${
              insights ? "mb-1 text-2xl" : "mb-3 text-2xl sm:text-3xl"
            }`}
          >
            Check Your <span className="text-secondary-400">Funding</span> Eligibility.
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-primary-200">
            {insights
              ? "Your results update live as you complete the form."
              : "Find out what you qualify for — no credit score impact. No obligation."}
          </p>
        </div>

        {insights ?? (
          <div className="flex flex-col gap-3">
            <div className="text-[11px] uppercase tracking-widest text-primary-400">
              We never share your information without consent.
            </div>

            {trustCards.map(({ icon: Icon, iconClasses, title, titleClasses, description, note }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
                <div className="flex items-center gap-4">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClasses}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className={`mb-0.5 font-bold text-white ${titleClasses}`}>{title}</div>
                    <div className="text-sm text-primary-300">{description}</div>
                    {note && <div className="mt-1 text-[10px] text-primary-400">{note}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SuccessPanel({ referenceId }: { referenceId: string }) {
  const nextSteps = [
    "We'll review the details you've provided",
    "Match you with the right lenders from our panel",
    "A funding specialist will call to discuss your options",
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-5 border-t border-white/10 p-8 text-center sm:p-10 lg:border-l lg:border-t-0">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-300">
        <CheckCircle2 className="h-7 w-7" />
      </span>
      <div>
        <h3 className="text-xl font-bold text-white">You&apos;re pre-qualified to apply</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-primary-200">
          Thanks — based on your answers, our panel has options that could work
          for you. A funding specialist will call you within one working day.
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
        <span className="text-primary-300">Your reference: </span>
        <span className="font-mono font-bold text-white">{referenceId}</span>
      </div>

      <ul className="flex w-full max-w-xs flex-col gap-2.5 text-left">
        {nextSteps.map((step) => (
          <li key={step} className="flex items-start gap-2.5 text-sm text-primary-100">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary-400" />
            {step}
          </li>
        ))}
      </ul>

      <Button href="/" variant="secondary">
        Back to home
      </Button>
    </div>
  );
}

function StepProgress({ step }: { step: Step }) {
  return (
    <div className="relative flex items-center justify-between pb-1">
      <div className="absolute left-3.5 right-3.5 top-3.5 h-px bg-white/10" aria-hidden />
      {stepLabels.map((label, index) => {
        const stepNumber = (index + 1) as Step;
        const completed = step > stepNumber;
        const active = step === stepNumber;
        return (
          <div key={label} className="relative z-10 flex flex-col items-center gap-1">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-xs font-bold ${
                completed
                  ? "border-emerald-400 bg-emerald-400/10 text-emerald-400"
                  : active
                    ? "border-secondary-400 bg-secondary-400 text-primary-950"
                    : "border-white/15 bg-primary-950 text-primary-400"
              }`}
            >
              {completed ? <CheckCircle2 className="h-4 w-4" /> : stepNumber}
            </span>
            <span className={`text-[11px] font-medium ${active || completed ? "text-white" : "text-primary-400"}`}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function FieldLabel({ children, required }: { children: ReactNode; required?: boolean }) {
  return (
    <span className="ml-1 text-sm font-medium text-primary-100">
      {children}
      {required && <span className="ml-0.5 text-secondary-400">*</span>}
    </span>
  );
}

function CardLoading({ label }: { label: string }) {
  return (
    <div className="flex flex-1 items-center justify-center gap-2 py-4 text-xs text-primary-300">
      <Loader2 className="h-3.5 w-3.5 animate-spin" />
      {label}
    </div>
  );
}

function EstimateCard({ assessment, loading }: { assessment: FundingAssessment | null; loading: boolean }) {
  return (
    <div className="relative flex animate-fade-up flex-col overflow-hidden rounded-2xl border border-secondary-400/20 bg-gradient-to-br from-secondary-500/5 to-blue-500/5 p-4">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-secondary-400 to-blue-400" />
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-secondary-300">
          <Sparkles className={`h-3.5 w-3.5 ${loading ? "animate-pulse" : ""}`} />
          Instant estimate
        </span>
        {!loading && assessment?.isActive && (
          <span className="text-[10px] text-primary-400">Based on similar businesses</span>
        )}
      </div>

      {loading || !assessment ? (
        <CardLoading label="Checking Companies House..." />
      ) : !assessment.isActive ? (
        <p className="text-sm leading-relaxed text-amber-300">
          This company isn&apos;t listed as active on Companies House, so we can&apos;t estimate a
          range. A specialist can still review your options.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-3xl font-bold leading-tight text-white">
                {formatCompactCurrency(assessment.minEstimate)} – {formatCompactCurrency(assessment.maxEstimate)}
              </span>
              <span className="text-xs text-primary-400">likely approval range</span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-primary-200">{assessment.reasoning}</p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {assessment.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { label: "Recommended", product: assessment.recommended, tone: "text-secondary-300" },
              { label: "Alternative", product: assessment.alternative, tone: "text-amber-300" },
            ].map(({ label, product, tone }) => (
              <Link
                key={label}
                href={product.href}
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 transition-colors hover:border-white/20 hover:bg-white/[0.08]"
              >
                <span className="min-w-0">
                  <span className={`block text-[10px] font-bold uppercase tracking-wider ${tone}`}>{label}</span>
                  <span className="block truncate text-sm font-medium text-white">{product.name}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-primary-400 transition-colors group-hover:text-white" />
              </Link>
            ))}
          </div>

          <p className="text-[10px] text-primary-400">
            Indicative estimate only. Actual funding depends on business assessment.
          </p>
        </div>
      )}
    </div>
  );
}

const readinessTone = (score: number) => {
  if (score >= 85) return { text: "text-emerald-400", bar: "from-emerald-500 to-emerald-400" };
  if (score >= 70) return { text: "text-secondary-400", bar: "from-blue-400 to-secondary-400" };
  if (score >= 50) return { text: "text-amber-400", bar: "from-amber-500 to-amber-400" };
  return { text: "text-orange-400", bar: "from-orange-500 to-orange-400" };
};

const factorIcons: Record<FactorKind, LucideIcon> = {
  age: Building2,
  sector: Shield,
  charges: CheckCircle2,
  directors: Users,
  status: CheckCircle2,
  amount: TrendingUp,
};

// Eased count-up from the previously shown value to `target`.
function useCountUp(target: number, duration = 800) {
  const [value, setValue] = useState(0);
  const shown = useRef(0);

  useEffect(() => {
    const from = shown.current;
    const start = performance.now();
    let frame = requestAnimationFrame(function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const next = Math.round(from + (target - from) * (1 - Math.pow(1 - progress, 3)));
      shown.current = next;
      setValue(next);
      if (progress < 1) frame = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

function ReadinessCard({
  assessment,
  loading,
  fromCompaniesHouse,
}: {
  assessment: FundingAssessment | null;
  loading: boolean;
  fromCompaniesHouse: boolean;
}) {
  const score = useCountUp(loading ? 0 : (assessment?.score ?? 0));
  const tone = readinessTone(score);

  return (
    <div className="relative flex animate-fade-up flex-col overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-secondary-500/5 p-4">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-emerald-500 to-secondary-400" />
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
          <TrendingUp className={`h-3.5 w-3.5 ${loading ? "animate-pulse" : ""}`} />
          {loading ? "Analysing profile..." : "Funding readiness"}
        </span>
        {!loading && assessment && (
          <span className="text-[10px] text-primary-400">
            {fromCompaniesHouse ? "Based on Companies House data" : "Based on your answers"}
          </span>
        )}
      </div>

      <div className="flex items-center gap-4">
        <span className="shrink-0">
          <span className={`text-3xl font-bold ${tone.text}`}>{score}</span>
          <span className="text-sm text-primary-400">/100</span>
        </span>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/5">
          <div className={`h-full rounded-full bg-gradient-to-r ${tone.bar}`} style={{ width: `${score}%` }} />
        </div>
      </div>

      {loading ? (
        <CardLoading label="Calculating score..." />
      ) : !assessment ? null : (
        <>
          <p className="mt-2 text-xs text-primary-200">{assessment.message}</p>
          <ul className="mt-2.5 flex flex-col gap-1.5 border-t border-white/5 pt-2.5">
            {assessment.factors.map((factor, index) => {
              const positive = factor.points >= 0;
              const Icon = positive ? factorIcons[factor.kind] : CircleAlert;
              return (
                <li
                  key={factor.kind}
                  className="flex animate-fade-up items-center justify-between gap-2 text-xs"
                  style={{ animationDelay: `${index * 150}ms`, animationDuration: "300ms" }}
                >
                  <span className="flex min-w-0 items-center gap-1.5 text-primary-200">
                    <Icon className={`h-3.5 w-3.5 shrink-0 ${positive ? "text-emerald-400" : "text-amber-400"}`} />
                    <span className="truncate">{factor.label}</span>
                  </span>
                  <span
                    className={`shrink-0 font-bold ${
                      factor.points > 0 ? "text-emerald-400" : factor.points < 0 ? "text-amber-400" : "text-primary-500"
                    }`}
                  >
                    {factor.points > 0 ? `+${factor.points}` : factor.points}
                  </span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

function EligibilityFormPanel({ onSuccess }: { onSuccess: (referenceId: string) => void }) {
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const [companyName, setCompanyName] = useState("");
  const [company, setCompany] = useState<CompanySuggestion | null>(null);
  const [details, setDetails] = useState<CompanyDetails | null>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const detailsRequest = useRef<AbortController | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [address, setAddress] = useState<CompanyAddress>({ line: "", city: "", postcode: "" });
  const [primaryContact, setPrimaryContact] = useState("");
  const [isSoleTrader, setIsSoleTrader] = useState(false);
  const [tradingSince, setTradingSince] = useState("");
  const [amount, setAmount] = useState(50000);
  const [amountInput, setAmountInput] = useState("50,000");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [urgency, setUrgency] = useState("");
  const [revenue, setRevenue] = useState("");

  const selectCompany = (next: CompanySuggestion | null) => {
    setCompany(next);
    setDetails(null);
    setAddress({ line: "", city: "", postcode: "" });
    setPrimaryContact("");
    detailsRequest.current?.abort();
    if (!next) {
      setDetailsLoading(false);
      return;
    }

    const request = new AbortController();
    detailsRequest.current = request;
    setDetailsLoading(true);
    // On failure we fall back to the search result, so errors are deliberately swallowed.
    fetch(`/api/companies/${encodeURIComponent(next.number)}`, { signal: request.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: CompanyDetails | null) => {
        if (request.signal.aborted) return;
        setDetails(data);
        if (data) setAddress(data.address);
      })
      .catch(() => {})
      .finally(() => {
        if (!request.signal.aborted) setDetailsLoading(false);
      });
  };

  const choosePrimaryContact = (value: string) => {
    setPrimaryContact(value);
    const director = value === OTHER_CONTACT ? null : details?.directors[Number(value)];
    setFirstName(director?.firstName ?? "");
    setLastName(director?.lastName ?? "");
  };

  const soleTraderMonths = tradingOptions.find((option) => option.label === tradingSince)?.months;
  const incorporatedOn = details?.incorporatedOn ?? company?.incorporatedOn;
  const assessment =
    !isSoleTrader && company
      ? assessFunding({
          amount,
          companyAge: incorporatedOn ? yearsSince(incorporatedOn) : null,
          isSoleTrader: false,
          companyStatus: details?.status ?? company.status,
          details,
        })
      : isSoleTrader && soleTraderMonths !== undefined
        ? assessFunding({
            amount,
            companyAge: Math.floor((soleTraderMonths / 12) * 10) / 10,
            isSoleTrader: true,
            companyStatus: null,
            details: null,
          })
        : null;
  const assessmentLoading = !isSoleTrader && detailsLoading;

  const setAmountValue = (value: number) => {
    setAmount(value);
    setAmountInput(value.toLocaleString("en-GB"));
  };

  const goToStep = (next: Step) => {
    setStep(next);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goBack = () => goToStep(step === 1 ? step : ((step - 1) as Step));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step === 1) setAmountValue(clampAmount(amount));
    if (step < 3) {
      goToStep((step + 1) as Step);
      return;
    }
    setStatus("loading");
    window.setTimeout(() => onSuccess(generateReferenceId()), 900);
  };

  const tradingYears = incorporatedOn ? Math.floor(yearsSince(incorporatedOn)) : null;
  const reviewSections: { title: string; step: Step; lines: string[] }[] = [
    {
      title: "Business",
      step: 1,
      lines: isSoleTrader
        ? [`${firstName} ${lastName} (Sole trader)`, `Trading ${tradingSince.toLowerCase()}`]
        : [
            companyName,
            [
              details?.sicCodes.length ? `SIC: ${details.sicCodes.join(", ")}` : `Reg: ${company?.number ?? ""}`,
              tradingYears !== null && `${tradingYears} year${tradingYears === 1 ? "" : "s"} trading`,
            ]
              .filter(Boolean)
              .join(" • "),
            [address.line, address.city, address.postcode].filter(Boolean).join(", "),
          ],
    },
    {
      title: "Funding",
      step: 2,
      lines: [
        [formatCurrency(amount), purpose].filter(Boolean).join(" • "),
        [urgency, revenue && `Revenue ${revenue}`].filter(Boolean).join(" • "),
      ],
    },
    {
      title: "Contact",
      step: 1,
      lines: [`${firstName} ${lastName} • ${email}`, phone],
    },
  ];

  const insights =
    assessment || assessmentLoading ? (
      <div className="flex flex-col gap-3">
        <EstimateCard assessment={assessment} loading={assessmentLoading} />
        <ReadinessCard
          assessment={assessment}
          loading={assessmentLoading}
          fromCompaniesHouse={Boolean(details) && !isSoleTrader}
        />
      </div>
    ) : undefined;

  return (
    <>
      {/* On mobile the results sit below the form, next to the fields that drive them. */}
      <InfoPanel insights={insights} className={insights ? "order-last lg:order-none" : ""} />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative flex scroll-mt-24 flex-col gap-4 border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0"
      >
        <div className="flex flex-col gap-0.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-xl font-bold text-white">Tell Us About Your Business</h3>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
              <ShieldCheck className="h-3 w-3" />
              Secure Form
            </span>
          </div>
          <p className="text-sm text-primary-300">Complete this quick form to see your options</p>
        </div>

        <StepProgress step={step} />

        {step === 1 && (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <FieldLabel required={!isSoleTrader}>Company Name</FieldLabel>
                {company && details && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" /> Verified
                  </span>
                )}
              </div>
              <CompanySearch
                value={companyName}
                selected={company}
                onChange={setCompanyName}
                onSelect={selectCompany}
                inputClassName={inputClasses}
                required={!isSoleTrader}
                disabled={isSoleTrader}
              />
            </div>

            {company && !isSoleTrader && (
              <CompanyProfilePanel
                company={company}
                details={details}
                loading={detailsLoading}
                score={assessment?.score ?? null}
                address={address}
                onAddressChange={setAddress}
                primaryContact={primaryContact}
                onPrimaryContactChange={choosePrimaryContact}
                inputClassName={inputClasses}
              />
            )}

            <label className="flex items-center gap-2.5 text-sm text-primary-100">
              <input
                type="checkbox"
                checked={isSoleTrader}
                onChange={(event) => {
                  setIsSoleTrader(event.target.checked);
                  if (event.target.checked) {
                    setCompanyName("");
                    selectCompany(null);
                  }
                }}
                className={checkboxClasses}
              />
              I am a sole trader / not a limited company
            </label>

            {isSoleTrader && (
              <label className="flex flex-col gap-1.5">
                <FieldLabel required>How long have you been trading?</FieldLabel>
                <select
                  required
                  value={tradingSince}
                  onChange={(event) => setTradingSince(event.target.value)}
                  className={inputClasses}
                >
                  <option value="" disabled className="bg-primary-950 text-primary-400">
                    Select a range
                  </option>
                  {tradingOptions.map((option) => (
                    <option key={option.label} className="bg-primary-950 text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="flex flex-col gap-1.5">
                <FieldLabel required>How much would you like to borrow?</FieldLabel>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-primary-300">
                    £
                  </span>
                  <input
                    required
                    inputMode="numeric"
                    type="text"
                    value={amountInput}
                    onChange={(event) => {
                      const digits = event.target.value.replace(/\D/g, "").slice(0, 7);
                      const value = Number(digits);
                      setAmountInput(digits ? value.toLocaleString("en-GB") : "");
                      setAmount(Math.min(MAX_AMOUNT, value));
                    }}
                    onBlur={() => setAmountValue(clampAmount(amount))}
                    className={`${inputClasses} pl-8 font-semibold`}
                  />
                </div>
              </label>
              <input
                type="range"
                aria-label="Funding amount"
                min={MIN_AMOUNT}
                max={MAX_AMOUNT}
                step={5000}
                value={clampAmount(amount)}
                onChange={(event) => setAmountValue(Number(event.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-secondary-400"
              />
              <div className="flex justify-between text-xs text-primary-400">
                <span>{formatCurrency(MIN_AMOUNT)}</span>
                <span>{formatCurrency(MAX_AMOUNT)}+</span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <FieldLabel required>First Name</FieldLabel>
                <input
                  required
                  type="text"
                  autoComplete="given-name"
                  placeholder="John"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className={inputClasses}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <FieldLabel required>Last Name</FieldLabel>
                <input
                  required
                  type="text"
                  autoComplete="family-name"
                  placeholder="Smith"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className={inputClasses}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <FieldLabel required>Contact Number</FieldLabel>
                <input
                  required
                  type="tel"
                  autoComplete="tel"
                  placeholder="07XXX XXXXXX"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className={inputClasses}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <FieldLabel required>Email Address</FieldLabel>
                <input
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="john@company.co.uk"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={inputClasses}
                />
              </label>
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-start gap-2.5 text-sm leading-relaxed text-primary-200">
                <input
                  required
                  type="checkbox"
                  checked={acceptPrivacy}
                  onChange={(event) => setAcceptPrivacy(event.target.checked)}
                  className={`mt-1 ${checkboxClasses}`}
                />
                <span>
                  I have read and accept the{" "}
                  <Link href="/privacy" target="_blank" className="text-secondary-300 hover:underline">
                    privacy policy
                  </Link>
                </span>
              </label>
              <label className="flex items-start gap-2.5 text-sm leading-relaxed text-primary-200">
                <input
                  required
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(event) => setAcceptTerms(event.target.checked)}
                  className={`mt-1 ${checkboxClasses}`}
                />
                <span>
                  I have read and accept the{" "}
                  <Link href="/terms" target="_blank" className="text-secondary-300 hover:underline">
                    terms of business
                  </Link>
                </span>
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <h4 className="text-lg font-bold text-white">A Few More Details</h4>
              <p className="text-sm text-primary-300">Help us find the best options for you</p>
            </div>

            <label className="flex flex-col gap-1.5">
              <FieldLabel required>What do you need funding for?</FieldLabel>
              <select
                required
                value={purpose}
                onChange={(event) => setPurpose(event.target.value)}
                className={inputClasses}
              >
                <option value="" disabled className="bg-primary-950 text-primary-400">
                  Select purpose...
                </option>
                {purposeOptions.map((option) => (
                  <option key={option} className="bg-primary-950 text-white">
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <fieldset className="flex flex-col gap-2">
              <legend className="mb-1.5">
                <FieldLabel required>How soon do you need funding?</FieldLabel>
              </legend>
              {urgencyOptions.map((option) => (
                <label
                  key={option}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                    urgency === option
                      ? "border-secondary-400/60 bg-secondary-500/10 text-white"
                      : "border-white/10 bg-black/20 text-primary-100 hover:border-white/20"
                  }`}
                >
                  <input
                    required
                    type="radio"
                    name="urgency"
                    value={option}
                    checked={urgency === option}
                    onChange={() => setUrgency(option)}
                    className="h-4 w-4 accent-secondary-400"
                  />
                  {option}
                </label>
              ))}
            </fieldset>

            <label className="flex flex-col gap-1.5">
              <FieldLabel>Annual Revenue (Optional)</FieldLabel>
              <select value={revenue} onChange={(event) => setRevenue(event.target.value)} className={inputClasses}>
                <option value="" className="bg-primary-950 text-primary-400">
                  Select range...
                </option>
                {revenueOptions.map((option) => (
                  <option key={option} className="bg-primary-950 text-white">
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-3">
            <div className="text-center">
              <h4 className="text-lg font-bold text-white">Review Your Application</h4>
              <p className="text-sm text-primary-300">Confirm your details are correct</p>
            </div>

            {reviewSections.map((section) => (
              <div key={section.title} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-white">{section.title}</span>
                  <button
                    type="button"
                    onClick={() => goToStep(section.step)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-secondary-300 hover:text-secondary-200"
                  >
                    <Pencil className="h-3 w-3" />
                    Edit
                  </button>
                </div>
                {section.lines.filter(Boolean).map((line, index) => (
                  <p key={index} className={index === 0 ? "text-sm text-primary-100" : "text-xs text-primary-400"}>
                    {line}
                  </p>
                ))}
              </div>
            ))}

            <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-relaxed text-primary-100">
              <input required type="checkbox" className={`mt-1 ${checkboxClasses}`} />
              I confirm the information above is accurate and I consent to Sigma Business Finance
              contacting me about funding options.
            </label>
          </div>
        )}

        <div className="flex gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          )}
          <Button
            type="submit"
            variant="secondary"
            size="md"
            className="flex-1"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : step === 1 ? (
              <>
                Check My Eligibility
                <ArrowRight className="h-4 w-4" />
              </>
            ) : step === 2 ? (
              <>
                Continue
                <ArrowRight className="h-4 w-4" />
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-primary-400">
          <Lock className="h-3 w-3" />
          Your information is encrypted and secure
        </div>
      </form>
    </>
  );
}

export default function CheckEligibilityForm() {
  const [referenceId, setReferenceId] = useState<string | null>(null);

  return (
    <div className="grid rounded-3xl border border-white/10 bg-primary-950 text-white shadow-2xl shadow-primary-950/40 lg:grid-cols-[2fr_3fr]">
      {referenceId ? (
        <>
          <InfoPanel />
          <SuccessPanel referenceId={referenceId} />
        </>
      ) : (
        <EligibilityFormPanel
          onSuccess={(refId) => {
            setReferenceId(refId);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      )}
    </div>
  );
}
