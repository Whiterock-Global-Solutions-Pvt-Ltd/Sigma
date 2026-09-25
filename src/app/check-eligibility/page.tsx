import type { Metadata } from "next";
import CheckEligibilityForm from "@/components/eligibility/CheckEligibilityForm";

export const metadata: Metadata = {
  title: "Check Your Funding Eligibility",
  description:
    "See what your business could borrow in 60 seconds — no credit check, no obligation. Instant estimate and funding readiness score using live Companies House data.",
};

export default function CheckEligibilityPage() {
  return (
    // overflow-clip (not hidden) keeps the results panel's `sticky` working.
    <section className="relative overflow-clip bg-primary-950 py-10 sm:py-14">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-secondary-500/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      <div className="container-page relative">
        <CheckEligibilityForm />
      </div>
    </section>
  );
}
