"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { Building2, Loader2, Search } from "lucide-react";
import { formatCompanyStatus, type CompanySuggestion } from "./funding-assessment";

type CompanySearchProps = {
  value: string;
  selected: CompanySuggestion | null;
  onChange: (value: string) => void;
  onSelect: (company: CompanySuggestion | null) => void;
  inputClassName: string;
  disabled?: boolean;
  required?: boolean;
};

export default function CompanySearch({
  value,
  selected,
  onChange,
  onSelect,
  inputClassName,
  disabled,
  required,
}: CompanySearchProps) {
  const listId = useId();
  const [results, setResults] = useState<CompanySuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [highlighted, setHighlighted] = useState(-1);
  const timer = useRef<number | undefined>(undefined);
  const controller = useRef<AbortController | null>(null);

  useEffect(
    () => () => {
      window.clearTimeout(timer.current);
      controller.current?.abort();
    },
    []
  );

  const search = async (query: string) => {
    controller.current?.abort();
    const request = new AbortController();
    controller.current = request;
    setLoading(true);

    try {
      const response = await fetch(`/api/companies/search?q=${encodeURIComponent(query)}`, {
        signal: request.signal,
      });
      const data: { items?: CompanySuggestion[]; error?: string } = await response.json();
      if (!response.ok) throw new Error(data.error);
      setResults(data.items ?? []);
      setError("");
      setHighlighted(-1);
      setOpen(true);
    } catch (err) {
      if (request.signal.aborted) return;
      setResults([]);
      setError(err instanceof Error && err.message ? err.message : "Company lookup failed.");
      setOpen(true);
    } finally {
      if (!request.signal.aborted) setLoading(false);
    }
  };

  const handleInput = (next: string) => {
    onChange(next);
    if (selected) onSelect(null);
    window.clearTimeout(timer.current);

    if (next.trim().length < 2) {
      controller.current?.abort();
      setLoading(false);
      setResults([]);
      setOpen(false);
      return;
    }
    timer.current = window.setTimeout(() => search(next.trim()), 300);
  };

  const choose = (company: CompanySuggestion) => {
    onChange(company.name);
    onSelect(company);
    setOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!open || results.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlighted((index) => (index + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlighted((index) => (index <= 0 ? results.length - 1 : index - 1));
    } else if (event.key === "Enter" && highlighted >= 0) {
      event.preventDefault();
      choose(results[highlighted]);
    } else if (event.key === "Escape") {
      event.stopPropagation();
      setOpen(false);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          role="combobox"
          aria-label="Company name"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={highlighted >= 0 ? `${listId}-${highlighted}` : undefined}
          autoComplete="off"
          required={required}
          disabled={disabled}
          type="text"
          placeholder="Start typing your company name..."
          value={value}
          onChange={(event) => handleInput(event.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && !selected && setOpen(true)}
          onBlur={() => setOpen(false)}
          className={`${inputClassName} pr-10 ${
            selected ? "border-emerald-400/40 bg-emerald-500/[0.06] font-semibold" : ""
          }`}
        />
        <span
          className={`pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 ${
            selected ? "text-emerald-400" : "text-primary-400"
          }`}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : selected ? (
            <Building2 className="h-4 w-4" />
          ) : (
            <Search className="h-4 w-4" />
          )}
        </span>
      </div>

      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-20 mt-1.5 max-h-64 overflow-y-auto rounded-xl border border-white/10 bg-primary-900 py-1 shadow-2xl no-scrollbar"
        >
          {error ? (
            <li className="px-4 py-3 text-xs text-primary-300">
              {error} You can still enter your company name manually.
            </li>
          ) : results.length === 0 ? (
            <li className="px-4 py-3 text-xs text-primary-300">
              No companies found. Check the spelling or enter the name manually.
            </li>
          ) : (
            results.map((company, index) => (
              <li
                key={company.number}
                id={`${listId}-${index}`}
                role="option"
                aria-selected={index === highlighted}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(company)}
                onMouseEnter={() => setHighlighted(index)}
                className={`flex cursor-pointer items-start gap-3 px-4 py-2.5 ${
                  index === highlighted ? "bg-white/10" : ""
                }`}
              >
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary-400" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-white">{company.name}</div>
                  <div className="truncate text-xs text-primary-300">
                    {company.number} · {formatCompanyStatus(company.status)}
                    {company.address && ` · ${company.address}`}
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      )}

    </div>
  );
}
