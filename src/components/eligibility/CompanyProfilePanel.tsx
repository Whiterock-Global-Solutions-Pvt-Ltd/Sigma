"use client";

import { CheckCircle2, Loader2, ShieldCheck, Sparkles, TriangleAlert, Users } from "lucide-react";
import {
  describeSicCode,
  type CompanyDetails,
  type CompanySuggestion,
} from "./funding-assessment";

export type CompanyAddress = { line: string; city: string; postcode: string };

type CompanyProfilePanelProps = {
  company: CompanySuggestion;
  details: CompanyDetails | null;
  loading: boolean;
  score: number | null;
  address: CompanyAddress;
  onAddressChange: (address: CompanyAddress) => void;
  primaryContact: string;
  onPrimaryContactChange: (value: string) => void;
  inputClassName: string;
};

export const OTHER_CONTACT = "other";

const fieldLabelClasses = "ml-1 text-[10px] font-semibold uppercase tracking-wider text-primary-400";

const formatDate = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

const eligibilityLine = (score: number | null) => {
  if (score === null) return "";
  if (score >= 85) return "High eligibility detected.";
  if (score >= 70) return "Good eligibility detected.";
  return "Specialist lenders available.";
};

export default function CompanyProfilePanel({
  company,
  details,
  loading,
  score,
  address,
  onAddressChange,
  primaryContact,
  onPrimaryContactChange,
  inputClassName,
}: CompanyProfilePanelProps) {
  const healthIssues = details
    ? [
        details.status !== "active" && "not active",
        details.filingsOverdue && "overdue filings",
        details.hasInsolvencyHistory && "insolvency history",
      ].filter((issue): issue is string => Boolean(issue))
    : [];
  const sicCodes = details?.sicCodes ?? [];
  const industry =
    sicCodes.length > 0 ? `${describeSicCode(sicCodes[0])} (${sicCodes.join(", ")})` : "Not listed";
  const incorporatedOn = details?.incorporatedOn ?? company.incorporatedOn;

  return (
    <div className="animate-fade-up rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.03] p-3.5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-secondary-300">
          <Sparkles className="h-3.5 w-3.5" />
          Company profile
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Live from Companies House
        </span>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-bold text-white">{details?.name || company.name}</div>
          <div className="text-xs text-primary-400">Reg: {company.number}</div>
          {details && (
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {healthIssues.length === 0 ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" /> Health clear
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-amber-300">
                  <TriangleAlert className="h-3 w-3" /> {healthIssues.join(", ")}
                </span>
              )}
              {details.activeDirectors > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full border border-blue-400/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-blue-300">
                  <Users className="h-3 w-3" /> {details.activeDirectors} director
                  {details.activeDirectors === 1 ? "" : "s"}
                </span>
              )}
            </div>
          )}
        </div>
        <p className="hidden max-w-[11rem] text-right text-xs leading-snug text-emerald-400 sm:block">
          {loading ? (
            <span className="inline-flex items-center gap-1.5 text-primary-300">
              <Loader2 className="h-3.5 w-3.5 animate-spin" /> Fetching company record...
            </span>
          ) : details ? (
            <>Verified with Companies House. {eligibilityLine(score)}</>
          ) : (
            <span className="text-primary-300">Full record unavailable — you can still continue.</span>
          )}
        </p>
      </div>

      <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
        <label className="flex flex-col gap-1 sm:col-span-2">
          <span className={fieldLabelClasses}>Registered address</span>
          <input
            type="text"
            autoComplete="address-line1"
            value={address.line}
            onChange={(event) => onAddressChange({ ...address, line: event.target.value })}
            className={inputClassName}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={fieldLabelClasses}>City</span>
          <input
            type="text"
            autoComplete="address-level2"
            value={address.city}
            onChange={(event) => onAddressChange({ ...address, city: event.target.value })}
            className={inputClassName}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={fieldLabelClasses}>Postcode</span>
          <input
            type="text"
            autoComplete="postal-code"
            value={address.postcode}
            onChange={(event) => onAddressChange({ ...address, postcode: event.target.value.toUpperCase() })}
            className={inputClassName}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className={fieldLabelClasses}>Industry</span>
          <input readOnly type="text" value={loading ? "" : industry} className={`${inputClassName} text-primary-200`} />
        </label>
        <label className="flex flex-col gap-1">
          <span className={fieldLabelClasses}>Trading since</span>
          <input
            readOnly
            type="text"
            value={incorporatedOn ? formatDate(incorporatedOn) : ""}
            className={`${inputClassName} text-primary-200`}
          />
        </label>
        {details && details.directors.length > 0 && (
          <label className="flex flex-col gap-1 sm:col-span-2">
            <span className={fieldLabelClasses}>Select primary contact</span>
            <select
              value={primaryContact}
              onChange={(event) => onPrimaryContactChange(event.target.value)}
              className={inputClassName}
            >
              <option value="" disabled className="bg-primary-950 text-primary-400">
                Choose a director...
              </option>
              {details.directors.map((director, index) => (
                <option key={`${director.name}-${index}`} value={String(index)} className="bg-primary-950 text-white">
                  {director.name}
                </option>
              ))}
              <option value={OTHER_CONTACT} className="bg-primary-950 text-white">
                Someone else
              </option>
            </select>
          </label>
        )}
      </div>
    </div>
  );
}
