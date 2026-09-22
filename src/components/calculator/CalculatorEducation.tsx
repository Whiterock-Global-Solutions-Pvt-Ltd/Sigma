"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, Calculator, HelpCircle, Percent, Scale, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const STAGGER_MS = 90;

const definitions = [
  {
    icon: Percent,
    title: "Annual Interest Rate",
    description:
      "The annual rate charged on a loan. Expressed as a percentage, it represents the actual yearly cost of funding over the term. Annual interest is calculated by multiplying the monthly rate charged by the number of payment periods in a year (e.g., Annual Rate = Monthly Rate × 12).",
  },
  {
    icon: TrendingUp,
    title: "Yield",
    description:
      "Yield denotes the total interest paid in a year as a percentage of the loan amount. It is calculated by dividing the total amount of interest paid in one year by the funded amount. For example, if £2,500 interest was paid on £10,000 funding, the yield would be 25%.",
  },
  {
    icon: Calculator,
    title: "Factor Rate",
    description:
      "Commonly associated with Merchant Cash Advances. Instead of a percentage, it's written as a decimal, typically ranging from 1.1 to 1.5. To find the total repayable, multiply the advance amount by the factor rate (e.g., £10,000 × 1.5 = £15,000 total repayable).",
  },
];

export default function CalculatorEducation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const revealStyle = (index: number) =>
    inView ? ({ animationDelay: `${index * STAGGER_MS}ms` } as React.CSSProperties) : undefined;
  const revealClass = inView ? "animate-fade-up" : "opacity-0";

  return (
    <section ref={sectionRef} className="bg-white py-20 sm:py-28">
      <div className="container-page flex flex-col gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Understanding The Numbers"
            title="Definitions of business loan rates"
            description="We've provided the following key definitions to give you a better understanding of your funding options and allow you to make an informed decision."
            align="center"
            className="mx-auto"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {definitions.map((item, index) => (
              <div
                key={item.title}
                style={revealStyle(index)}
                className={`group rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200 transition-colors hover:ring-primary-300 ${revealClass}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors duration-300 group-hover:bg-primary-700 group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-full w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-200/30 to-secondary-200/20 blur-3xl"
            aria-hidden
          />

          <div
            style={revealStyle(3)}
            className={`rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8 ${revealClass}`}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-900 text-white">
                <HelpCircle className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold text-neutral-900">
                Why did we create this tool?
              </h3>
            </div>
            <div className="space-y-4 leading-relaxed text-neutral-600">
              <p>
                At Sigma, we believe business loans should be priced fairly and
                transparently. Since much of SME lending is unregulated,
                providers aren&apos;t always obliged to disclose comparable
                rates, making it difficult for businesses to compare quotes
                effectively.
              </p>
              <p>
                We created this rate comparison tool to offer much-needed
                clarity. By revealing the true cost of finance, we ensure
                business owners like you can make the best funding decisions
                for your company&apos;s growth without hidden surprises.
              </p>
            </div>
          </div>

          <div
            style={revealStyle(4)}
            className={`rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8 ${revealClass}`}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-500 text-white">
                <Scale className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold text-neutral-900">
                How does the tool work?
              </h3>
            </div>
            <div className="space-y-4 leading-relaxed text-neutral-600">
              <p>
                Our rate comparison tool uses a bespoke algorithm that
                automatically converts your business loan quote into a range
                of other common rate types. This allows you to compare apples
                to apples, even if lenders present their costs differently.
              </p>
              <p>
                Input your loan amount, term, rate, and any fees, and
                we&apos;ll break down exactly what that means in terms of
                Annual Rate, Yield, Daily Interest, and total payable amount.
              </p>
            </div>
          </div>
        </div>

        <div
          style={revealStyle(5)}
          className={`relative overflow-hidden rounded-3xl bg-primary-950 ${revealClass}`}
        >
          <div
            className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-secondary-500/20 blur-3xl"
            aria-hidden
          />

          <div className="relative flex flex-col gap-8 p-8 text-neutral-300 md:p-12">
            <div className="flex items-center gap-3 text-secondary-400">
              <AlertCircle className="h-6 w-6" />
              <h3 className="text-xl font-bold uppercase tracking-wider">
                Important information
              </h3>
            </div>

            <div className="grid gap-8 text-sm leading-relaxed md:grid-cols-2">
              <ul className="list-disc space-y-4 pl-5 marker:text-secondary-400">
                <li>
                  <strong className="text-white">Estimates only:</strong> This
                  tool provides an estimate of the cost of a loan and
                  doesn&apos;t take specific lending criteria of various
                  lenders into account.
                </li>
                <li>
                  <strong className="text-white">Personal circumstances:</strong>{" "}
                  Results are based solely on the information provided and
                  don&apos;t account for your specific business history or
                  credit score.
                </li>
                <li>
                  <strong className="text-white">Eligibility:</strong> This
                  tool is not a measure of your eligibility for a loan, just
                  the estimated cost. You will still need to meet the lending
                  criteria of your chosen lender(s).
                </li>
              </ul>
              <ul className="list-disc space-y-4 pl-5 marker:text-secondary-400">
                <li>
                  <strong className="text-white">Payment assumption:</strong>{" "}
                  Calculations assume payments will be the same each month
                  (standard for most business finance).
                </li>
                <li>
                  <strong className="text-white">Fee assumption:</strong> We
                  assume all arrangement fees will be absorbed into (added to)
                  your loan principal.
                </li>
                <li>
                  <strong className="text-white">Rate stability:</strong> This
                  tool assumes rates won&apos;t change for the duration of the
                  loan.
                </li>
                <li>
                  <strong className="text-white">Seek advice:</strong> We
                  recommend taking advice from a licensed finance professional
                  before making major financial decisions.
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-xs text-neutral-500">
                Sigma Business Finance Ltd is a credit broker, not a lender,
                and works with a panel of lenders. Sigma Business Finance
                Ltd is not authorised by the Financial Conduct Authority and
                can only complete non-regulated introductions. Registered in
                England &amp; Wales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
