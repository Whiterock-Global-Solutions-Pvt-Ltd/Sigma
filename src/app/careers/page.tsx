import type { Metadata } from "next";
import { Coffee, GraduationCap, Mail, Rocket, TrendingUp } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import StatsBar from "@/components/home/StatsBar";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Unlock your career potential with Sigma Business Finance. See why our team choose to build their career with us.",
};

const perks = [
  {
    icon: TrendingUp,
    title: "Real progression",
    description: "Clear paths from your first day to senior and leadership roles — we promote from within.",
  },
  {
    icon: Rocket,
    title: "Real impact",
    description: "Every deal you work on directly helps a UK business grow. You'll see the difference you make.",
  },
  {
    icon: Coffee,
    title: "A supportive culture",
    description: "Collaborative, straight-talking teams who back each other — not a call-centre script in sight.",
  },
  {
    icon: GraduationCap,
    title: "Ongoing training",
    description: "Structured onboarding and continuous learning in commercial finance, funded by us.",
  },
];

const openRoles = [
  { title: "Business Development Manager", location: "London", type: "Hybrid · Sales" },
  { title: "Senior Account Manager", location: "London", type: "Hybrid · Sales" },
  { title: "Operations Coordinator", location: "London", type: "Full-time" },
];

const benefits = [
  "Base salary with uncapped commission",
  "25 days holiday plus bank holidays",
  "Private healthcare options",
  "Quarterly performance bonuses",
  "Early Friday finish at 4pm",
  "Regular team social events",
];

const hiringSteps = [
  { step: "1", title: "Online application", description: "Send us your CV and a short note about what you're looking for." },
  { step: "2", title: "20-minute call", description: "A quick chat to get to know you and talk through the role." },
  { step: "3", title: "Manager interview", description: "Meet the hiring manager and the team you'd be working with." },
  { step: "4", title: "Offer", description: "We aim to come back with a decision within 48 hours." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join Our Team"
        description="Unlock your career potential with Sigma Business Finance — and help build the future of UK business lending."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            eyebrow="Why Sigma"
            title="Build your career somewhere that means it"
            description="We're growing fast, and we're looking for people who want to grow with us — not just fill a seat."
            align="center"
            className="mx-auto"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex flex-col gap-4 rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <perk.icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-neutral-900">{perk.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="py-20 sm:py-28">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            eyebrow="Current Openings"
            title="Open roles at Sigma"
            align="center"
            className="mx-auto"
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col divide-y divide-neutral-200 overflow-hidden rounded-3xl border border-neutral-200 bg-white">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-bold text-neutral-900">{role.title}</h3>
                  <p className="text-sm text-neutral-500">
                    {role.location} · {role.type}
                  </p>
                </div>
                <Button href="mailto:careers@sigmabusinessfinance.co.uk" variant="outline">
                  Apply now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            eyebrow="Benefits"
            title="What you get, on top of the role"
            align="center"
            className="mx-auto"
          />
          <ul className="mx-auto grid w-full max-w-4xl gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-2xl bg-white p-5 text-sm font-medium text-neutral-800 ring-1 ring-neutral-200"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            eyebrow="How We Hire"
            title="From application to offer in four steps"
            align="center"
            className="mx-auto"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((item) => (
              <div key={item.step} className="flex flex-col gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="font-bold text-neutral-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Don't See Your Role?"
            title="We're always keen to hear from great people"
            description="Even when we're not actively hiring for a specific position, send us your CV and a note about what you're looking for, and we'll keep you in mind as we grow."
            align="center"
            className="mx-auto"
          />
          <Button href="mailto:careers@sigmabusinessfinance.co.uk" variant="secondary" size="lg">
            <Mail className="h-4 w-4" />
            careers@sigmabusinessfinance.co.uk
          </Button>
        </div>
      </section>
    </>
  );
}
