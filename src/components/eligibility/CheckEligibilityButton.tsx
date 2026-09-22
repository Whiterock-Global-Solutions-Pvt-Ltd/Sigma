"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Lock,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";
type Size = "md" | "lg";

type CheckEligibilityButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
  onOpen?: () => void;
};

type Step = 1 | 2 | 3;

const stepLabels = ["Business", "Contact", "Review"];

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-white placeholder-primary-400 outline-none transition-colors focus:border-secondary-400/60 focus:ring-1 focus:ring-secondary-400/60 disabled:opacity-50";
const labelClasses = "ml-1 text-xs font-semibold uppercase tracking-wider text-primary-200";
const checkboxClasses =
  "h-4 w-4 shrink-0 rounded border-white/20 bg-black/20 accent-secondary-400";

const purposeOptions = [
  "Working capital",
  "Equipment or machinery purchase",
  "Business expansion or growth",
  "Refinancing existing debt",
  "Property or asset purchase",
  "Other",
];

const urgencyOptions = [
  "As soon as possible",
  "Within 1 month",
  "1 – 3 months",
  "Just exploring options",
];

const generateReferenceId = () =>
  `SIG-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

function InfoPanel() {
  return (
    <div className="relative flex flex-col gap-4 p-6 animate-fade-up sm:p-8">
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary-400/20 bg-secondary-500/10 px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary-400" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-secondary-300">
            No credit check required
          </span>
        </div>

        <h2 id="check-eligibility-heading" className="mb-2 text-xl font-bold leading-tight text-white sm:text-2xl">
          Check your funding eligibility in{" "}
          <span className="text-gradient">60 seconds</span>
        </h2>

        <p className="max-w-md text-sm leading-relaxed text-primary-200">
          See how much you could borrow without affecting your credit score —
          get an instant, no-obligation estimate.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div className="col-span-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
            <ShieldCheck className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-white">Bank-level security</h3>
            <p className="text-xs text-primary-300">Encrypted &amp; never shared without permission.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-center backdrop-blur-md">
          <div className="text-xl font-bold text-secondary-400">50+</div>
          <div className="text-xs uppercase tracking-wide text-primary-300">
            Specialist lenders
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-center backdrop-blur-md">
          <div className="text-xl font-bold text-secondary-400">24–48h</div>
          <div className="text-xs uppercase tracking-wide text-primary-300">
            Decision time
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 p-2.5">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
            <Lock className="h-3 w-3" />
          </span>
          <span className="text-xs font-medium text-primary-100">Soft search only</span>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 p-2.5">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-300">
            <Zap className="h-3 w-3" />
          </span>
          <span className="text-xs font-medium text-primary-100">Instant estimate</span>
        </div>
      </div>
    </div>
  );
}

function SuccessPanel({ onClose, referenceId }: { onClose: () => void; referenceId: string }) {
  const nextSteps = [
    "We'll review the details you've provided",
    "Match you with the right lenders from our panel",
    "A funding specialist will call to discuss your options",
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-5 border-t border-white/10 p-8 text-center sm:border-l sm:border-t-0 sm:p-10">
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

      <Button variant="secondary" onClick={onClose}>
        Done
      </Button>
    </div>
  );
}

function StepProgress({ step }: { step: Step }) {
  return (
    <div className="relative flex items-center justify-between pb-1 lg:pr-12">
      <div className="absolute left-4 right-4 top-4 h-px bg-white/10" aria-hidden />
      {stepLabels.map((label, index) => {
        const stepNumber = (index + 1) as Step;
        const completed = step > stepNumber;
        const active = step === stepNumber;
        return (
          <div key={label} className="relative z-10 flex flex-col items-center gap-1.5">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold ${
                completed
                  ? "border-secondary-400 bg-secondary-400/20 text-secondary-300"
                  : active
                    ? "border-secondary-400 bg-secondary-400 text-primary-950"
                    : "border-white/15 text-primary-400"
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

function EligibilityFormPanel({ onSuccess }: { onSuccess: (referenceId: string) => void }) {
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const [amount, setAmount] = useState(50000);
  const [isSoleTrader, setIsSoleTrader] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [tradingSince, setTradingSince] = useState("");
  const [purpose, setPurpose] = useState("");
  const [urgency, setUrgency] = useState("");

  const format = (value: number) =>
    value.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
  const minEst = format(amount * 0.85);
  const maxEst = format(amount * 1.25);

  const goBack = () => setStep((current) => (current === 1 ? current : ((current - 1) as Step)));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < 3) {
      setStep((current) => (current + 1) as Step);
      return;
    }
    setStatus("loading");
    window.setTimeout(() => onSuccess(generateReferenceId()), 900);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-4 border-t border-white/10 p-6 sm:border-l sm:border-t-0 sm:p-8"
    >
      <StepProgress step={step} />

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2.5">
            <label className="flex items-center justify-between gap-2 text-sm font-medium text-primary-200 lg:pr-12">
              Desired funding amount
              <span className="shrink-0 text-lg font-bold text-secondary-400">£{amount.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min={10000}
              max={500000}
              step={5000}
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-secondary-400"
            />
            <div className="flex justify-between text-xs text-primary-400">
              <span>£10k</span>
              <span>£500k</span>
            </div>
          </div>

          <div className="relative rounded-xl border border-secondary-400/30 bg-secondary-500/5 p-3.5">
            <span className="absolute -top-3 left-4 bg-primary-950 px-2 text-xs font-bold text-secondary-400">
              ESTIMATED RANGE
            </span>
            <div className="flex items-end justify-between">
              <div>
                <div className="mb-1 text-xs text-primary-400">You could borrow</div>
                <div className="text-lg font-bold text-white">
                  {minEst} – {maxEst}
                </div>
              </div>
              <div className="text-right">
                <div className="mb-1 text-xs text-primary-400">Rate from</div>
                <div className="font-bold text-secondary-400">6.9%</div>
              </div>
            </div>
          </div>

          <div className="grid gap-2.5">
            <label className="flex flex-col gap-1.5">
              <span className={labelClasses}>Company name</span>
              <input
                required={!isSoleTrader}
                disabled={isSoleTrader}
                type="text"
                placeholder="e.g. Acme Trading Ltd"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
                className={inputClasses}
              />
            </label>

            <label className="flex items-center gap-2.5 text-sm text-primary-100">
              <input
                type="checkbox"
                checked={isSoleTrader}
                onChange={(event) => {
                  setIsSoleTrader(event.target.checked);
                  if (event.target.checked) setCompanyName("");
                }}
                className={checkboxClasses}
              />
              I&apos;m a sole trader
            </label>

            <label className="flex flex-col gap-1.5">
              <span className={labelClasses}>Trading since</span>
              <select
                required
                value={tradingSince}
                onChange={(event) => setTradingSince(event.target.value)}
                className={inputClasses}
              >
                <option value="" disabled className="bg-primary-950 text-primary-400">
                  Select a range
                </option>
                <option className="bg-primary-950 text-white">Less than 6 months</option>
                <option className="bg-primary-950 text-white">6 – 12 months</option>
                <option className="bg-primary-950 text-white">1 – 2 years</option>
                <option className="bg-primary-950 text-white">More than 2 years</option>
              </select>
            </label>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className={labelClasses}>First name</span>
              <input
                required
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                className={inputClasses}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className={labelClasses}>Last name</span>
              <input
                required
                type="text"
                placeholder="Smith"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                className={inputClasses}
              />
            </label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className={labelClasses}>Contact number</span>
              <input
                required
                type="tel"
                placeholder="07123 456789"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className={inputClasses}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className={labelClasses}>Contact email</span>
              <input
                required
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={inputClasses}
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className={labelClasses}>What&apos;s the funding for?</span>
            <select
              required
              value={purpose}
              onChange={(event) => setPurpose(event.target.value)}
              className={inputClasses}
            >
              <option value="" disabled className="bg-primary-950 text-primary-400">
                Select a purpose
              </option>
              {purposeOptions.map((option) => (
                <option key={option} className="bg-primary-950 text-white">
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className={labelClasses}>How soon do you need funding?</span>
            <select
              required
              value={urgency}
              onChange={(event) => setUrgency(event.target.value)}
              className={inputClasses}
            >
              <option value="" disabled className="bg-primary-950 text-primary-400">
                Select a timeframe
              </option>
              {urgencyOptions.map((option) => (
                <option key={option} className="bg-primary-950 text-white">
                  {option}
                </option>
              ))}
            </select>
          </label>

          <div className="flex flex-col gap-1.5 pt-1">
            <label className="flex items-start gap-2.5 text-xs leading-relaxed text-primary-200">
              <input required type="checkbox" className={`mt-0.5 ${checkboxClasses}`} />
              I have read and accept the{" "}
              <Link href="/privacy" className="text-secondary-300 hover:underline">
                privacy policy
              </Link>
            </label>
            <label className="flex items-start gap-2.5 text-xs leading-relaxed text-primary-200">
              <input required type="checkbox" className={`mt-0.5 ${checkboxClasses}`} />
              I have read and accept the{" "}
              <Link href="/terms" className="text-secondary-300 hover:underline">
                terms of business
              </Link>
            </label>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            {[
              ["Applicant", isSoleTrader ? `${firstName} ${lastName} (Sole trader)` : companyName],
              ["Contact", `${firstName} ${lastName}`],
              ["Email", email],
              ["Phone", phone],
              ["Trading since", tradingSince],
              ["Desired amount", `£${amount.toLocaleString()}`],
              ["Estimated range", `${minEst} – ${maxEst}`],
              ["Purpose", purpose],
              ["Timeframe", urgency],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 px-3.5 py-2 text-sm">
                <span className="text-primary-300">{label}</span>
                <span className="truncate font-medium text-white">{value || "—"}</span>
              </div>
            ))}
          </div>

          <label className="flex items-start gap-2.5 text-xs leading-relaxed text-primary-200">
            <input required type="checkbox" className={`mt-0.5 ${checkboxClasses}`} />
            I confirm the information above is accurate and consent to being
            contacted about my funding options.
          </label>
        </div>
      )}

      <div className="flex gap-3">
        {step > 1 && (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
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
          ) : step < 3 ? (
            <>
              Continue
              <ArrowRight className="h-4 w-4" />
            </>
          ) : (
            <>
              Submit Application
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-primary-400">
        <Lock className="h-3 w-3" />
        Your data is secure and encrypted.
      </div>
    </form>
  );
}

export default function CheckEligibilityButton({
  variant = "secondary",
  size = "md",
  className = "",
  children,
  onOpen,
}: CheckEligibilityButtonProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleOpen = () => {
    onOpen?.();
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    window.setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <>
      <Button type="button" variant={variant} size={size} className={className} onClick={handleOpen}>
        {children ?? "Check Eligibility"}
      </Button>

      <Modal
        open={open}
        onClose={close}
        labelledBy="check-eligibility-heading"
        className="max-w-5xl overflow-hidden bg-primary-950 p-0 text-white"
      >
        <div className="grid lg:grid-cols-2">
          <InfoPanel />
          {submitted ? (
            <SuccessPanel onClose={close} referenceId={referenceId} />
          ) : (
            <EligibilityFormPanel
              onSuccess={(refId) => {
                setReferenceId(refId);
                setSubmitted(true);
              }}
            />
          )}
        </div>
      </Modal>
    </>
  );
}
