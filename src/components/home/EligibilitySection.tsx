import { Clock, Lock, SearchCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CheckEligibilityButton from "@/components/eligibility/CheckEligibilityButton";

const points = [
  {
    icon: Clock,
    title: "60-second check",
    description: "Answer four quick questions to see what you qualify for.",
  },
  {
    icon: Lock,
    title: "No credit check required",
    description: "A soft search only — your credit score is never affected.",
  },
  {
    icon: SearchCheck,
    title: "Whole-of-market search",
    description: "We instantly compare offers from 50+ specialist lenders.",
  },
];

export default function EligibilitySection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Smart Eligibility Checker"
            title="See what you qualify for in 60 seconds"
            description="No paperwork, no obligation, and it won't affect your credit score. Just a quick, honest read on your funding options."
          />

          <div className="flex flex-col gap-5">
            {points.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <point.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-neutral-900">
                    {point.title}
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 rounded-3xl border border-primary-100 bg-neutral-50 p-10 text-center shadow-xl shadow-primary-900/5 sm:p-12">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-700">
            <Sparkles className="h-7 w-7" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              Get your instant estimate
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-600">
              Answer a few quick questions and see what you could borrow —
              no paperwork, no obligation.
            </p>
          </div>
          <CheckEligibilityButton size="lg" />
        </div>
      </div>
    </section>
  );
}
