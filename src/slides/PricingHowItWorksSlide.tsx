import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, UserCheck, Rocket, HeartHandshake } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp } from "@/lib/presentationMotion";

interface PricingHowItWorksSlideProps {
  onNavigate?: (index: number) => void;
}

export const PricingHowItWorksSlide: React.FC<PricingHowItWorksSlideProps> = () => {

  // Batch 103 (strict v1): detail overlays removed — v1 steps are not
  // clickable and have no overlays. Step 02 keeps "7 to 21 days": v1's
  // "As fast as 20 min" is NOT restored, per the Batch 67 accuracy ruling
  // (no "20 minutes" for vetting). Restoring it needs his explicit word.
  const steps = [
    {
      num: "STEP 01",
      icon: MessageSquare,
      title: "Discovery Call",
      desc: "Share your requirements, tech stack, and team culture. We'll recommend the right tier.",
      time: "Day 1"
    },
    {
      num: "STEP 02",
      icon: UserCheck,
      title: "7-Stage Vetting",
      desc: "We present candidates who passed our 7-stage assessment. You interview & select.",
      time: "7 to 21 days"
    },
    {
      num: "STEP 03",
      icon: Rocket,
      title: "Onboarding",
      desc: "Your new team member joins your tools, attends standups, and starts contributing.",
      time: "Day 6–14"
    },
    {
      num: "STEP 04",
      icon: HeartHandshake,
      title: "Ongoing Support",
      desc: "Continuous performance monitoring, monthly check-ins, and scaling as needed.",
      time: "Ongoing"
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* -45 degree repeating line texture */}
        {/* Batch 102: v1 slide 7 texture (28px lines, 3% amber); center glow removed */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.03) 28px, hsl(var(--pres-accent) / 0.03) 29px)",
          }}
        />


        {/* Batch 102: v1 slide 7 exact layout — absolute headline,
            subline, timeline line and grid (no centered wrapper) */}
        <motion.h1
          {...fadeUp(0)}
          className="absolute left-0 right-0 top-[90px] z-10 text-center text-[68px] font-bold font-heading tracking-tight text-white"
        >
          How It <span className="text-pres-accent">Works</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="absolute left-0 right-0 top-[178px] z-10 text-center text-[22px] text-pres-text-muted"
        >
          From first call to productive developer — in under 2 weeks.
        </motion.p>

        {/* Connecting line (v1: gradient, 3px, drawn over 1s) */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute z-10 origin-left"
          style={{
            left: 140,
            right: 140,
            top: 410,
            height: 3,
            background: "linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.2))",
            borderRadius: 2,
          }}
        />

        {/* 4 step columns (v1: plain columns, no card chrome) */}
        <div className="absolute left-[80px] right-[80px] top-[300px] bottom-[60px] grid grid-cols-4 gap-8 z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.18, duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                {/* Batch 103: v1 icon node — 80px circle, 70px top margin
                    so it centers on the timeline line. Columns are plain
                    static blocks now, exactly like v1: no click, no lift. */}
                {/* 2026-11-04 step 10 fix: icon background MUST be opaque,
                    otherwise the timeline line shows through the circle
                    interiors. On the new preview the icons measured
                    TRANSPARENT (interior colour = slide background,
                    distance 0-3.2) even though this class was
                    bg-pres-surface — the same class-resolution
                    divergence seen on step 11's text-pres-bg. An
                    explicit dark background (#0B0B0E, the sampled
                    slide background) hides the line behind every
                    circle regardless of how pres-surface resolves
                    in a given build. z-20, size, ring, and position
                    are unchanged; the line itself is untouched. */}
                <div className="relative z-20 mt-[70px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#0B0B0E] border-[3px] border-pres-accent text-pres-accent shadow-[0_0_24px_hsl(var(--pres-accent)/0.2)]">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Step Label */}
                <p className="mt-6 text-[14px] font-bold tracking-[0.15em] text-pres-accent uppercase">
                  {step.num}
                </p>

                {/* Title */}
                <h2 className="mt-2 text-[26px] font-bold font-heading text-white">
                  {step.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-[17px] text-pres-text-muted leading-[1.5]">
                  {step.desc}
                </p>

                {/* Time Badge */}
                <div className="mt-4 rounded-full px-4 py-1.5 bg-pres-accent/10 border border-pres-accent/20">
                  <span className="text-[14px] font-semibold text-pres-accent">
                    {step.time}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
