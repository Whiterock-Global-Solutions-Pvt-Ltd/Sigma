import {
  BadgePoundSterling,
  MousePointerClick,
  ScaleIcon,
  Sparkles,
  UserCog,
  Zap,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: ScaleIcon,
    title: "Whole-of-market comparison",
    description:
      "We're not tied to one lender — we compare 50+ specialist funders to find your best rate.",
  },
  {
    icon: MousePointerClick,
    title: "Effortless application",
    description:
      "Apply online in minutes. We handle the forms, the follow-ups, and the paperwork.",
  },
  {
    icon: Zap,
    title: "Fast, flexible decisions",
    description:
      "Most applications receive a decision within 24–48 hours, with funding to follow quickly.",
  },
  {
    icon: Sparkles,
    title: "Tailored to your business",
    description:
      "Every recommendation is matched to your sector, cash flow, and growth plans — not generic.",
  },
  {
    icon: UserCog,
    title: "One dedicated contact",
    description:
      "A named account manager guides you from first enquiry through to funds landing.",
  },
  {
    icon: BadgePoundSterling,
    title: "No upfront fees",
    description:
      "Our service to you is completely free — we're only paid by our lending partners.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow="Why Sigma"
          title="Business finance, without the finance fuss"
          description="We built Sigma to replace the slow, opaque process of business borrowing with something clear, fast, and genuinely on your side."
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm shadow-primary-900/5 ring-1 ring-neutral-200"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
                <reason.icon className="h-5 w-5" />
              </span>
              <h3 className="font-bold text-neutral-900">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
