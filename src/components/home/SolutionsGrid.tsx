import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { solutions } from "@/data/solutions";

export default function SolutionsGrid() {
  return (
    <section className="bg-white py-20 sm:py-28" id="solutions">
      <div className="container-page flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Funding Solutions"
            title="Whatever stage you're at, there's a facility for it"
            description="From day-to-day cash flow to major expansion, we match you with the finance product built for the job."
          />
          <Button href="/funding-options" variant="outline" className="shrink-0">
            View all solutions
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/funding-options/${solution.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:-translate-y-1 hover:border-primary-200 hover:bg-white hover:shadow-lg hover:shadow-primary-900/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
                <solution.icon className="h-6 w-6" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-bold text-neutral-900">{solution.name}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {solution.tagline}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-end border-t border-neutral-200 pt-4 text-sm">
                <span className="flex items-center gap-1 font-medium text-secondary-600 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
