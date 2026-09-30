"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ChevronDown } from "lucide-react";

export type NavDropdownItem = {
  key: string;
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

type NavDropdownProps = {
  label: string;
  items: NavDropdownItem[];
  panelWidthClassName?: string;
  columnsClassName?: string;
  compact?: boolean;
  sidePanel?: ReactNode;
};

export default function NavDropdown({
  label,
  items,
  panelWidthClassName = "w-[62rem]",
  columnsClassName = "sm:grid-cols-2 lg:grid-cols-3",
  compact = false,
  sidePanel,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearCloseTimeout();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => clearCloseTimeout, []);

  return (
    <div ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors ${
          open
            ? "bg-primary-50 text-primary-800"
            : "text-neutral-700 hover:bg-primary-50 hover:text-primary-800"
        }`}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div
          className={`absolute left-1/2 top-full z-50 mt-3 max-w-[92vw] -translate-x-1/2 ${panelWidthClassName}`}
        >
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-primary-900/15">
            <div className="grid lg:grid-cols-[1fr_auto]">
              <div className={`grid gap-1 p-5 ${columnsClassName}`}>
                {items.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-xl transition-colors hover:bg-primary-50 ${
                      compact ? "p-2" : "items-start p-3"
                    }`}
                  >
                    <span
                      className={`flex shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700 ${
                        compact ? "h-8 w-8" : "h-9 w-9"
                      }`}
                    >
                      <item.icon className={compact ? "h-4 w-4" : "h-4.5 w-4.5"} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-neutral-900">
                        {item.title}
                      </span>
                      {compact ? null : (
                        <span className="mt-0.5 block text-xs leading-snug text-neutral-500">
                          {item.description}
                        </span>
                      )}
                    </span>
                  </Link>
                ))}
              </div>

              {sidePanel ?? (
                <div className="hidden w-56 shrink-0 flex-col justify-between gap-4 bg-gradient-to-br from-primary-700 to-secondary-500 p-6 text-white lg:flex">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                      Not sure what fits?
                    </p>
                    <p className="mt-2 text-lg font-bold leading-snug">
                      Check your eligibility in 60 seconds
                    </p>
                  </div>
                  <Link
                    href="/check-eligibility"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 transition-colors hover:bg-primary-50"
                  >
                    Check Eligibility
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
