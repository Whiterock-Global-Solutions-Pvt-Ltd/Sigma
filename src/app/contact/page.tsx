import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ApplyNowFormCard from "@/components/contact/ApplyNowFormCard";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sigma Business Finance or check your funding eligibility online in 60 seconds — no credit check, no obligation.",
};

const details = [
  { icon: Phone, label: "Call us", value: "0151 837 3528", href: "tel:01518373528" },
  {
    icon: Mail,
    label: "Email us",
    value: "contact@sigmabusinessfinance.co.uk",
    href: "mailto:contact@sigmabusinessfinance.co.uk",
  },
  { icon: MapPin, label: "Visit us", value: "Commerce Park, Campbeltown Road, Birkenhead, CH41 9HP" },
  { icon: Clock, label: "Opening hours", value: "Mon – Fri, 9:00am – 5:00pm" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's find the right funding for your business"
        description="Apply online in minutes and a funding specialist will be in touch within one working day."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            eyebrow="Apply Now"
            title="Ready to get funded?"
            description="Start your application below — no obligation, and a funding specialist will be in touch within one working day."
            align="center"
            className="mx-auto"
          />
          <div id="eligibility" className="scroll-mt-24">
            <ApplyNowFormCard />
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="container-page grid gap-6 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-4">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 [transform-style:preserve-3d] transition-all duration-300 ease-out hover:[transform:rotateX(6deg)_rotateY(-6deg)_translateY(-4px)] hover:shadow-xl hover:shadow-primary-900/10 hover:ring-1 hover:ring-primary-300"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                <detail.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  {detail.label}
                </p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="break-words font-semibold text-neutral-900 hover:text-primary-700"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="break-words font-semibold text-neutral-900">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
