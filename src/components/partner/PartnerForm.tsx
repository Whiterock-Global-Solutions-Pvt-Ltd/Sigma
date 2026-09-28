"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function PartnerForm({ id }: { id?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 900);
  };

  if (status === "done") {
    return (
      <div
        id={id}
        className="flex flex-col items-center gap-3 rounded-3xl border border-neutral-200 bg-white p-10 text-center shadow-sm"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-700">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-bold text-neutral-900">
          Application received
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
          Thanks for your interest in partnering with Sigma. A member of our
          partnerships team will be in touch within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold text-neutral-900">Become a Partner</h3>
        <p className="text-xs text-neutral-500">
          All fields marked <RequiredMark /> are required.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
          <span>
            First name
            <RequiredMark />
          </span>
          <input
            required
            type="text"
            placeholder="Jane"
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
          <span>
            Last name
            <RequiredMark />
          </span>
          <input
            required
            type="text"
            placeholder="Smith"
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
          <span>
            Work email
            <RequiredMark />
          </span>
          <input
            required
            type="email"
            placeholder="you@company.com"
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
          <span>
            Phone number
            <RequiredMark />
          </span>
          <input
            required
            type="tel"
            placeholder="07123 456789"
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700 sm:col-span-2">
          <span>
            Job title / position
            <RequiredMark />
          </span>
          <input
            required
            type="text"
            placeholder="e.g. Managing Director"
            className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
        <span>
          Tell us about your business
          <RequiredMark />
        </span>
        <textarea
          required
          rows={4}
          placeholder="What do you do, who are your clients, and how would you like to partner with us?"
          className="resize-none rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-100"
        />
      </label>

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>

      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-neutral-500">
        <ShieldCheck className="h-3.5 w-3.5 text-primary-700" />
        Your data is protected by 256-bit encryption.
      </p>
    </form>
  );
}

function RequiredMark() {
  return (
    <span className="ml-0.5 text-secondary-600" aria-hidden>
      *
    </span>
  );
}
