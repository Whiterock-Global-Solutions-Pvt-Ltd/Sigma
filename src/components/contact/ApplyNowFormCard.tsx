"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Calculator as CalculatorIcon,
  CheckCircle2,
  Clock,
  Loader2,
  Phone,
} from "lucide-react";
import Button from "@/components/ui/Button";
import CheckEligibilityButton from "@/components/eligibility/CheckEligibilityButton";

const benefits = [
  "Decisions in as little as 24–48 hours",
  "Whole-of-market panel of 50+ lenders",
  "No upfront fees",
  "Dedicated account manager",
];

const jobTitles = [
  "Director",
  "Director & Shareholder",
  "Sole Trader",
  "Partner",
  "Other",
];

const inputClasses =
  "rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100";
const labelClasses = "flex flex-col gap-1.5 text-sm font-medium text-neutral-700";

function ApplyNowForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 sm:p-10">
      <div>
        <h2 id="apply-now-form-heading" className="text-2xl font-bold text-neutral-900">
          Business Finance Application
        </h2>
        <p className="mt-1 text-sm text-neutral-500">
          Tell us a bit about you and your business — a funding specialist
          will be in touch to take it from there.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Personal details
          </span>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className={labelClasses}>
              First name
              <input required type="text" placeholder="John" className={inputClasses} />
            </label>
            <label className={labelClasses}>
              Surname
              <input required type="text" placeholder="Doe" className={inputClasses} />
            </label>
            <label className={labelClasses}>
              Email address
              <input required type="email" placeholder="john@example.com" className={inputClasses} />
            </label>
            <label className={labelClasses}>
              Contact number
              <input required type="tel" placeholder="07123 456789" className={inputClasses} />
            </label>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Business details
          </span>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className={`${labelClasses} sm:col-span-2`}>
              Company name
              <input required type="text" placeholder="Acme Trading Ltd" className={inputClasses} />
            </label>
            <label className={labelClasses}>
              Your role
              <select required defaultValue="" className={inputClasses}>
                <option value="" disabled>
                  Select a role
                </option>
                {jobTitles.map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </label>
            <label className={labelClasses}>
              Amount needed
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                  £
                </span>
                <input
                  required
                  type="number"
                  min={0}
                  placeholder="50,000"
                  className={`${inputClasses} w-full pl-7`}
                />
              </div>
            </label>
            <label className={`${labelClasses} sm:col-span-2`}>
              Funding purpose (optional)
              <textarea
                rows={3}
                placeholder="Briefly describe what the funding is for..."
                className={`${inputClasses} resize-none`}
              />
            </label>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Complete Application
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-neutral-500">
        No obligation. A funding specialist will review your application and
        contact you within one working day.
      </p>
    </form>
  );
}

function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-10 text-center sm:p-14">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-700">
        <CheckCircle2 className="h-8 w-8" />
      </span>
      <h2 className="text-2xl font-bold text-neutral-900">Application sent</h2>
      <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
        Thanks for applying — a funding specialist will review your details
        and contact you within one working day.
      </p>
      <Button variant="primary" onClick={onReset}>
        Submit another application
      </Button>
    </div>
  );
}

export default function ApplyNowFormCard() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-neutral-200">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative hidden flex-col justify-between overflow-hidden bg-primary-950 p-10 text-white lg:flex">
          <div
            className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-secondary-500/20 blur-3xl"
            aria-hidden
          />
          <div className="relative flex flex-col gap-10">
            <h2 aria-hidden className="text-4xl font-bold leading-tight">
              Your business
              <br />
              <span className="text-gradient">growth starts here</span>
            </h2>
            <p className="text-base leading-relaxed text-primary-200">
              Join the UK businesses who&apos;ve secured funding through our
              streamlined application process.
            </p>
            <ul className="flex flex-col gap-5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-base text-primary-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary-400" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4">
              <Button href="/#loan-calculator" variant="white" size="lg">
                <CalculatorIcon className="h-4 w-4" />
                Loan Calculator
              </Button>
              <CheckEligibilityButton variant="secondary" size="lg" />
            </div>
          </div>

          <div className="relative flex flex-col gap-5 border-t border-white/10 pt-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-primary-300">Need help?</p>
                <a href="tel:01518373528" className="text-lg font-semibold hover:text-secondary-400">
                  0151 837 3528
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-primary-300">Decision in</p>
                <p className="text-lg font-semibold">24–48 hours</p>
              </div>
            </div>
          </div>
        </div>

        {submitted ? (
          <SuccessPanel onReset={() => setSubmitted(false)} />
        ) : (
          <ApplyNowForm onSuccess={() => setSubmitted(true)} />
        )}
      </div>
    </div>
  );
}
