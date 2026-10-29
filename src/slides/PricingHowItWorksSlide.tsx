import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, UserCheck, Rocket, HeartHandshake, X } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp } from "@/lib/presentationMotion";

interface PricingHowItWorksSlideProps {
  onNavigate?: (index: number) => void;
}

export const PricingHowItWorksSlide: React.FC<PricingHowItWorksSlideProps> = () => {
  // Batch 66 (owner): every step now opens a detail overlay, not
  // only Step 01 — detailStep holds the open step index (null = closed).
  const [detailStep, setDetailStep] = useState<number | null>(null);

  // FB-27: detail overlays carry 3 segments each, no "20 minutes" label.
  // Batch 102 (D2, approved recommendations): Step 02 keeps "7 to 21 days" —
  // v1's "As fast as 20 min" is NOT restored, per the Batch 67 accuracy correction.
  const steps = [
    {
      num: "STEP 01",
      icon: MessageSquare,
      title: "Discovery Call",
      desc: "Share your requirements, tech stack, and team culture. We'll recommend the right tier.",
      time: "Day 1",
      segments: [
        {
          title: "Requirements",
          desc: "What you're building and why it matters.",
        },
        {
          title: "Stack & workflow",
          desc: "Your tools, your team, and how you ship.",
        },
        {
          title: "Tier match",
          desc: "We match your ideal tier and plan next steps.",
        },
      ],
    },
    {
      num: "STEP 02",
      icon: UserCheck,
      title: "7-Stage Vetting",
      desc: "We present candidates who passed our 7-stage assessment. You interview & select.",
      time: "7 to 21 days",
      segments: [
        {
          title: "Screening",
          desc: "Initial sign up and training, assessed at every step.",
        },
        {
          title: "Real work tests",
          desc: "Practical assignments and a simulation of your real project.",
        },
        {
          title: "Live test & hire",
          desc: "You interview the finalists live and pick your hire.",
        },
      ],
    },
    {
      num: "STEP 03",
      icon: Rocket,
      title: "Onboarding",
      desc: "Your new team member joins your tools, attends standups, and starts contributing.",
      time: "Day 6–14",
      segments: [
        {
          title: "Joins your tools",
          desc: "Slack, repos, and access set up from day one.",
        },
        {
          title: "Learns your codebase",
          desc: "Docs, walkthroughs, and your workflow, fast.",
        },
        {
          title: "Starts shipping",
          desc: "First real tasks inside the first week.",
        },
      ],
    },
    {
      num: "STEP 04",
      icon: HeartHandshake,
      title: "Ongoing Support",
      desc: "Continuous performance monitoring, monthly check-ins, and scaling as needed.",
      time: "Ongoing",
      segments: [
        {
          title: "Architect supervision",
          desc: "A chief architect oversees the work quality.",
        },
        {
          title: "Regular audits",
          desc: "Code and delivery checked on a steady rhythm.",
        },
        {
          title: "Flexible scaling",
          desc: "Scale the team up or down as needs change.",
        },
      ],
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
                role="button"
                tabIndex={0}
                onClick={() => setDetailStep(idx)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setDetailStep(idx); }}
                whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
                className="flex flex-col items-center text-center cursor-pointer"
              >
                {/* Batch 102: v1 icon node — 80px circle, 70px top margin
                    so it centers on the timeline line. Static look is
                    v1-exact; the column stays clickable (D1) and keeps
                    the hover lift (D3) per the approved recommendations. */}
                <div className="relative z-20 mt-[70px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-pres-surface border-[3px] border-pres-accent text-pres-accent shadow-[0_0_24px_hsl(var(--pres-accent)/0.2)]">
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

        {/* FB-26 detail view, Batch 66: one overlay for every step */}
        <AnimatePresence>
          {detailStep !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm"
              onClick={() => setDetailStep(null)}
            >
              <motion.div
                initial={{ scale: 0.92, y: 24 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-[860px] rounded-3xl border border-pres-accent/40 bg-pres-surface p-12 shadow-[0_0_60px_rgba(255,173,1,0.25)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="text-[22px] font-semibold tracking-[0.15em] text-pres-accent uppercase mb-2">
                      {steps[detailStep].num}
                    </div>
                    <h2 className="font-heading text-[52px] font-bold text-white leading-tight">
                      {steps[detailStep].title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setDetailStep(null)}
                    aria-label="Close detail"
                    className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-pres-text-muted hover:text-white hover:border-pres-accent/60 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-5">
                  {steps[detailStep].segments.map((seg, sIdx) => (
                    <motion.div
                      key={seg.title}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + sIdx * 0.09, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                    >
                      <div className="w-11 h-11 shrink-0 rounded-full bg-pres-accent text-pres-bg pres-dark-safe-accent font-heading font-bold text-[22px] flex items-center justify-center">
                        {sIdx + 1}
                      </div>
                      <div>
                        <div className="font-heading text-[28px] font-bold text-white leading-tight">
                          {seg.title}
                        </div>
                        <div className="text-[22px] text-pres-text-muted mt-1">
                          {seg.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
