import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, UserCheck, Rocket, HeartHandshake, X, MousePointerClick } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, staggerDelay } from "@/lib/presentationMotion";

interface PricingHowItWorksSlideProps {
  onNavigate?: (index: number) => void;
}

export const PricingHowItWorksSlide: React.FC<PricingHowItWorksSlideProps> = () => {
  // Batch 66 (owner): every step now opens a detail overlay, not
  // only Step 01 — detailStep holds the open step index (null = closed).
  const [detailStep, setDetailStep] = useState<number | null>(null);

  // FB-27: detail overlays carry 3 segments each, no "20 minutes" label.
  const steps = [
    {
      num: "STEP 01",
      icon: MessageSquare,
      title: "Discovery Call",
      desc: "Share your goals; we match your tier.",
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
      desc: "Pick from prescreened top 5% candidates.",
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
      title: "Rapid Onboarding",
      desc: "Your engineer joins Slack and starts shipping.",
      time: "Day 3 to 7",
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
      desc: "Architect supervision, audits, flexible scaling.",
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
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 18px, hsl(var(--pres-accent) / 0.08) 18px, hsl(var(--pres-accent) / 0.08) 19px)",
          }}
        />

        {/* Ambient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

        {/* Flexbox Centered Main Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col items-center justify-center">
          {/* Title Area - Clean, focused headline without redundant explanation */}
          <div className="mb-12 text-center">
            <motion.h1
              {...fadeUp(0)}
              className="pres-title font-bold font-heading tracking-tight text-white"
            >
              How It <span className="text-pres-accent">Works</span>
            </motion.h1>
          </div>

          {/* Steps Container with connecting line */}
          <div className="relative w-full">
            {/* Connecting Gradient Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[120px] right-[120px] top-[56px] h-[4px] bg-pres-accent origin-left z-0 shadow-[0_0_16px_rgba(255,173,1,0.55)]"
            />

            {/* 4 Step Cards Grid */}
            <div className="relative z-10 grid grid-cols-4 gap-7 w-full">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    {...fadeUp(staggerDelay(idx, 0.16, 0.08))}
                    role="button"
                    tabIndex={0}
                    onClick={() => setDetailStep(idx)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setDetailStep(idx); }}
                    whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
                    className="flex flex-col items-center text-center p-6 rounded-3xl bg-pres-surface/85 border border-pres-accent/40 hover:border-pres-accent cursor-pointer hover:bg-pres-surface/95 backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-xl hover:shadow-[0_0_35px_hsl(var(--pres-accent)/0.25)]"
                  >
                    {/* Circle Icon */}
                    <div className="w-[66px] h-[66px] rounded-full bg-pres-surface border-[3px] border-pres-accent flex items-center justify-center text-pres-accent mb-3.5 shadow-[0_0_25px_rgba(255,173,1,0.3)] z-10">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Step Label */}
                    <span className="text-[25px] font-semibold text-white tracking-[0.15em] mb-1 uppercase">
                      {step.num}
                    </span>

                    {/* Title */}
                    <h2 className="text-[37px] font-bold font-heading text-white mb-2 leading-snug">
                      {step.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[25px] text-pres-text-muted leading-[1.45] mb-4 min-h-[74px]">
                      {step.desc}
                    </p>

                    {/* Time Badge */}
                    <div className="px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/70 text-[25px] font-semibold">
                      {step.time}
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-[19px] font-semibold text-pres-accent">
                      <MousePointerClick className="w-4 h-4 text-pres-accent" />
                      Tap for detail
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
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
