"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Coins,
  HeartHandshake,
  Rocket,
  TrendingUp,
  Unlock,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: Unlock,
    title: "Remove budget barriers",
    description: "Help clients say yes to bigger decisions without cash flow getting in the way.",
  },
  {
    icon: TrendingUp,
    title: "Secure larger sales",
    description: "Give clients the option to spread the cost, so budget stops being the objection.",
  },
  {
    icon: Zap,
    title: "Accelerate cash flow",
    description: "Get paid in full up front while your client repays over time through our lenders.",
  },
  {
    icon: HeartHandshake,
    title: "Strengthen customer loyalty",
    description: "Offering finance adds real value to the relationship, not just the transaction.",
  },
  {
    icon: Coins,
    title: "Generate additional revenue",
    description: "Earn a referral incentive on every client you introduce who goes on to be funded.",
  },
  {
    icon: Award,
    title: "Stay ahead of competitors",
    description: "Give clients a reason to choose you over competitors who can't offer finance.",
  },
  {
    icon: Rocket,
    title: "Fuel consistent growth",
    description: "Build a steady, recurring revenue stream alongside your core business.",
  },
];

export default function PartnerBenefits() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primary-100 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-secondary-500/25 hover:ring-transparent"
        >
          {/* Resting tint in the corner */}
          <span
            className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-secondary-200/60 to-primary-200/40 blur-2xl transition-opacity duration-500 group-hover:opacity-0"
            aria-hidden
          />
          {/* Gradient overlay revealed on hover */}
          <span
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-700 to-secondary-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden
          />
          {/* Glow that drifts in from the corner on hover */}
          <span
            className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 translate-x-8 translate-y-8 rounded-full bg-secondary-400/40 opacity-0 blur-3xl transition-all duration-700 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
            aria-hidden
          />
          {/* Accent line across the top */}
          <span
            className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-secondary-400 to-primary-400 transition-transform duration-500 group-hover:scale-x-100"
            aria-hidden
          />

          <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30 ring-2 ring-transparent transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-secondary-500/40 group-hover:ring-white/40">
            <benefit.icon className="h-5 w-5" />
          </span>
          <h3 className="relative font-bold text-neutral-900 transition-colors duration-500 group-hover:text-white">
            {benefit.title}
          </h3>
          <p className="relative text-sm leading-relaxed text-neutral-600 transition-colors duration-500 group-hover:text-primary-100">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
