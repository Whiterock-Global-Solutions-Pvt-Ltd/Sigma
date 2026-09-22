import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import CheckEligibilityButton from "@/components/eligibility/CheckEligibilityButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-950">
      <video
        className="absolute inset-0 hidden h-full w-full object-cover motion-safe:block"
        src="/videos/hero.mp4"
        poster="/videos/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/videos/hero-poster.jpg"
        alt=""
        className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/55 to-secondary-800/25"
        aria-hidden
      />

      <div className="container-page relative py-24 lg:py-32">
        <div className="flex max-w-2xl flex-col items-start gap-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
            Trusted UK Business Finance Broker
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            You Built The Business.
            <br />
            <span className="text-gradient">We&apos;ll Help You Fund It.</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-primary-100">
            Sigma Business Finance matches you with the right lender from a
            panel of <strong className="text-white">50+ specialist funders</strong> —
            with decisions in as little as 24–48 hours, and absolutely no
            upfront fees.
          </p>

          <div className="flex w-full flex-row gap-2.5 sm:w-auto sm:gap-3">
            <CheckEligibilityButton
              size="lg"
              className="flex-1 !px-3.5 !py-2.5 !text-sm sm:flex-initial sm:!px-7 sm:!py-3.5 sm:!text-base"
            >
              Check Your Eligibility
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </CheckEligibilityButton>
            <Button
              href="/funding-options"
              variant="white"
              size="lg"
              className="flex-1 !px-3.5 !py-2.5 !text-sm sm:flex-initial sm:!px-7 sm:!py-3.5 sm:!text-base"
            >
              Explore Solutions
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-primary-100">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-secondary-400" />
              No impact on credit score
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-secondary-400" />
              Whole-of-market panel
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-secondary-400" />
              Dedicated account manager
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
