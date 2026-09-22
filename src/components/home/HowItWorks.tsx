"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ClipboardCheck,
  FileSearch,
  HandCoins,
  LucideIcon,
  Wallet2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Enquiry",
    description:
      "Tell us about your business and check your eligibility in 60 seconds — with no impact on your credit score.",
  },
  {
    icon: FileSearch,
    title: "Application",
    description:
      "Your dedicated account manager searches our panel of 50+ lenders and handles the paperwork for you.",
  },
  {
    icon: HandCoins,
    title: "Approval",
    description:
      "Receive a clear offer with rates and terms explained in plain English — no jargon, no surprises.",
  },
  {
    icon: Wallet2,
    title: "Payout",
    description:
      "Sign your agreement and receive funds — often the very next day after approval.",
  },
];

const STEP_DURATION = 3200;
const TILT_RANGE = 10;
const MAGNETIC_STRENGTH = 14;
const MAGNETIC_RADIUS = 90;

function MagneticButton({
  onClick,
  ariaLabel,
  ariaCurrent,
  className,
  enabled = true,
  children,
}: {
  onClick: () => void;
  ariaLabel: string;
  ariaCurrent?: "step";
  className: string;
  enabled?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;

    function handlePointerMove(event: PointerEvent) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const distance = Math.hypot(dx, dy);

      if (distance < MAGNETIC_RADIUS) {
        const pull = (1 - distance / MAGNETIC_RADIUS) * MAGNETIC_STRENGTH;
        const angle = Math.atan2(dy, dx);
        x.set(Math.cos(angle) * pull);
        y.set(Math.sin(angle) * pull);
      } else {
        x.set(0);
        y.set(0);
      }
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [enabled, x, y]);

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

function FlipIcon({
  Icon,
  isActive,
  animateFlip,
  size = "h-6 w-6",
}: {
  Icon: LucideIcon;
  isActive: boolean;
  animateFlip: boolean;
  size?: string;
}) {
  return (
    <span style={{ perspective: 600 }}>
      <motion.span
        className="flex"
        style={{ transformStyle: "preserve-3d" }}
        animate={animateFlip ? { rotateY: isActive ? 360 : 0 } : { rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Icon className={size} />
      </motion.span>
    </span>
  );
}

function StepCard({
  step,
  index,
  isActive,
  tiltEnabled,
  onSelect,
}: {
  step: (typeof steps)[number];
  index: number;
  isActive: boolean;
  tiltEnabled: boolean;
  onSelect: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [TILT_RANGE, -TILT_RANGE]), {
    stiffness: 300,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-TILT_RANGE, TILT_RANGE]), {
    stiffness: 300,
    damping: 22,
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (!tiltEnabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tiltEnabled ? rotateX : 0,
        rotateY: tiltEnabled ? rotateY : 0,
        transformPerspective: 800,
      }}
      className="relative flex flex-col gap-4 rounded-2xl p-2 will-change-transform"
    >
      <MagneticButton
        onClick={onSelect}
        ariaLabel={`View step ${index + 1}: ${step.title}`}
        ariaCurrent={isActive ? "step" : undefined}
        enabled={tiltEnabled}
        className="flex items-center gap-3 self-start rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950 lg:hidden"
      >
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-500 to-primary-500 text-white ring-4 transition-shadow duration-500 ${
            isActive ? "ring-secondary-400/40" : "ring-transparent"
          }`}
        >
          <FlipIcon Icon={step.icon} isActive={isActive} animateFlip={tiltEnabled} />
        </span>
        <span className="text-sm font-bold text-primary-300">Step {index + 1}</span>
      </MagneticButton>
      <h3
        className={`text-lg font-bold transition-colors duration-500 ${
          isActive ? "text-white" : "text-white lg:text-primary-100"
        }`}
      >
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-primary-200">{step.description}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const tiltEnabled = !prefersReducedMotion;

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, STEP_DURATION);
    return () => clearInterval(interval);
  }, [prefersReducedMotion, isPaused]);

  return (
    <section className="bg-primary-950 py-20 sm:py-28" id="how-it-works">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="How It Works"
          title="From enquiry to funded, in four simple steps"
          description="We do the legwork of comparing the market so you can get back to running your business."
          align="center"
          tone="dark"
        />

        <p className="sr-only" aria-live="polite">
          Step {activeStep + 1} of {steps.length}: {steps[activeStep].title}
        </p>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setIsPaused(false);
            }
          }}
          className="flex flex-col gap-8"
        >
          {/* Animated stepper track — desktop only */}
          <div className="hidden items-center lg:flex">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isDone = activeStep > index;
              return (
                <div
                  key={step.title}
                  className={`flex items-center ${
                    index < steps.length - 1 ? "flex-1" : ""
                  }`}
                >
                  <MagneticButton
                    onClick={() => setActiveStep(index)}
                    ariaLabel={`View step ${index + 1}: ${step.title}`}
                    ariaCurrent={isActive ? "step" : undefined}
                    enabled={tiltEnabled}
                    className="flex flex-col items-center gap-2 rounded-xl p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950"
                  >
                    <span
                      className={`relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-500 to-primary-500 text-white ring-4 transition-shadow duration-500 ${
                        isActive || isDone
                          ? "ring-secondary-400/40"
                          : "ring-transparent"
                      }`}
                    >
                      <FlipIcon
                        Icon={step.icon}
                        isActive={isActive}
                        animateFlip={tiltEnabled}
                      />
                    </span>
                    <span
                      className={`text-sm font-bold transition-colors duration-500 ${
                        isActive || isDone ? "text-secondary-300" : "text-primary-400"
                      }`}
                    >
                      Step {index + 1}
                    </span>
                  </MagneticButton>

                  {index < steps.length - 1 && (
                    <div className="relative mx-3 h-0.5 flex-1 overflow-hidden rounded-full bg-primary-800">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-300"
                        initial={false}
                        animate={{
                          width: isDone ? "100%" : isActive ? "100%" : "0%",
                        }}
                        transition={{
                          duration:
                            isActive && !prefersReducedMotion
                              ? STEP_DURATION / 1000
                              : 0.4,
                          ease: "linear",
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid gap-8 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                step={step}
                index={index}
                isActive={activeStep === index}
                tiltEnabled={tiltEnabled}
                onSelect={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
