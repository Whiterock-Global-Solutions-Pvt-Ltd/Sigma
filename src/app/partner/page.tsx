import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CheckCircle2, Palette, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import PartnerForm from "@/components/partner/PartnerForm";
import PartnerBenefits from "@/components/partner/PartnerBenefits";

export const metadata: Metadata = pageMetadata({
  title: "Partner With Us",
  description:
    "Join Sigma Business Finance's partner network and offer your clients industry-leading business finance — with rewarding referral incentives and dedicated support.",
  path: "/partner",
});

const heroBenefits = [
  "Increase sales conversion rates",
  "Bespoke solutions for every client",
  "Rewarding referral incentives",
];

const steps = [
  {
    title: "Apply",
    description: "Tell us about your business in a two-minute application — no cost, no obligation.",
  },
  {
    title: "Get onboarded",
    description: "Your partner manager sets you up with everything you need, including co-branded materials.",
  },
  {
    title: "Refer your clients",
    description: "Introduce clients whenever finance would help them say yes — we handle the rest.",
  },
  {
    title: "Earn rewards",
    description: "Receive a referral incentive for every introduction that goes on to be funded.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Sigma"
        title="Grow With Sigma."
        description="Join our network of partners and offer your clients industry-leading business finance. Empower your sales and build long-term revenue."
      >
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {heroBenefits.map((benefit) => (
            <span
              key={benefit}
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white"
            >
              <CheckCircle2 className="h-4 w-4 text-secondary-400" />
              {benefit}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="bg-neutral-50 py-20 sm:py-28" id="apply">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <SectionHeading
            eyebrow="Become a Partner"
            title="Ready to grow with Sigma?"
            description="Fill in the form and a member of our partnerships team will be in touch within one working day to talk through how we can work together."
          />
          <PartnerForm />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            eyebrow="Why Partner With Us"
            title="A referral partnership that pays for itself"
            description="Whatever your business does, finance can help your clients say yes faster — and reward you for making the introduction."
            align="center"
            className="mx-auto"
          />

          <PartnerBenefits />
        </div>
      </section>

      <section className="bg-primary-950 py-20 sm:py-28">
        <div className="container-page flex flex-col gap-14">
          <SectionHeading
            eyebrow="How It Works"
            title="From application to earning, in four steps"
            align="center"
            tone="dark"
            className="mx-auto"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-500 to-primary-500 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-primary-200">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="Partner Support"
              title="Co-branded marketing support, built for you"
              description="We don't just hand over a referral link. Every partner gets professional, tailored materials to help introduce Sigma to their clients with confidence."
            />
            <ul className="flex flex-col gap-3">
              {[
                "Co-branded brochures and one-pagers",
                "Tailored digital assets for email and social",
                "A dedicated partner manager as your point of contact",
                "Regular updates on your referrals and payouts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Palette, label: "Co-branded materials" },
              { icon: Users, label: "Dedicated partner manager" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-start gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-neutral-800">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
