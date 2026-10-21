import React from "react";
import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, staggerDelay } from "@/lib/presentationMotion";
import { UsdNote } from "@/components/presentation/UsdNote";

interface PricingSavingsSlideProps {
  onNavigate?: (index: number) => void;
}

export const PricingSavingsSlide: React.FC<PricingSavingsSlideProps> = () => {
  const comparisons = [
    {
      role: "Starter Developer",
      tier: "Tier 1",
      usRate: "$6,000 to $8,000/M",
      riseUpRate: "$1,900/M",
      savings: "Up to 76% Savings",
      riseUpWidth: "24%",
      color: "from-red-500 to-rose-600",
      accentBg: "bg-red-500/10",
      accentText: "text-red-400",
    },
    {
      role: "Mid Level Developer",
      tier: "Tier 2",
      usRate: "$10,000 to $15,000/M",
      riseUpRate: "$4,299/M",
      savings: "Up to 71% Savings",
      riseUpWidth: "29%",
      color: "from-amber-500 to-yellow-500",
      accentBg: "bg-amber-500/10",
      accentText: "text-amber-400",
    },
    {
      role: "Skilled Expert",
      tier: "Tier 3.A",
      usRate: "$18,000 to $25,000/M",
      riseUpRate: "$6,800 to $8,000/M",
      savings: "Up to 68% Savings",
      riseUpWidth: "32%",
      color: "from-purple-500 to-indigo-600",
      accentBg: "bg-purple-500/10",
      accentText: "text-purple-400",
    },
    {
      role: "Tech Leadership",
      tier: "Tier 3.B",
      usRate: "$22,000 to $30,000/M",
      riseUpRate: "$7,500 to $10,000/M",
      savings: "Up to 67% Savings",
      riseUpWidth: "33%",
      color: "from-pink-500 to-rose-500",
      accentBg: "bg-pink-500/10",
      accentText: "text-pink-400",
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Ambient right glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[600px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

        {/* Flexbox Centered Main Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex items-center justify-between gap-16">
          {/* Left Column (Title & Value Callout) */}
          <div className="w-[650px] flex flex-col justify-center">
            {/* Title Area - Clean, focused headline without redundant explanation */}
            <div className="mb-10">
              <motion.h1
                {...fadeUp(0)}
                className="pres-title font-bold font-heading tracking-tight text-white mb-4"
              >
                Pay Less.
                <br />
                Ship More.
              </motion.h1>
              <p className="text-[26px] text-pres-text-muted">Top talent, a fraction of US rates.</p>
              {/* FB-31: the slide's ONE yellow highlight — top saving figure, no "up to" */}
              <motion.div {...fadeUp(0.12)} className="mt-6 inline-block">
                <span className="font-heading text-[34px] font-bold text-pres-accent">
                  76% saving
                </span>
              </motion.div>
            </div>

            <motion.div
              {...fadeUp(0.2)}
              className="p-9 rounded-3xl bg-pres-surface/80 border border-pres-accent/30 shadow-2xl backdrop-blur-md max-w-[480px]"
            >
              <div className="text-[64px] font-bold font-heading text-white leading-none mb-3">80%</div>
              <div className="text-[30px] font-bold font-heading text-white mb-2">Hiring effort saved</div>
              <p className="text-[22px] text-pres-text-muted">We source, vet, and match. You skip the recruiting cycle.</p>
            </motion.div>
          </div>

          <div className="flex-1 max-w-[960px] flex flex-col justify-center gap-5">
            {comparisons.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(staggerDelay(idx, 0.18, 0.07), 14)}
                className="px-7 py-5 rounded-2xl bg-pres-surface/70 border border-white/10 hover:border-pres-accent/25 backdrop-blur-md shadow-lg transition-[border-color,background-color] duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[30px] font-bold font-heading text-white">{item.role}</span>
                    <span className="text-[18px] font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80">{item.tier}</span>
                  </div>
                  <span className="text-[20px] font-semibold px-4 py-1 rounded-full bg-pres-accent text-pres-bg pres-dark-safe-accent">{item.savings}</span>
                </div>
                <div className="flex items-center justify-between text-[22px]">
                  <span className="text-pres-text-dim">US <span className="line-through">{item.usRate}</span></span>
                  <span className="text-white font-medium">{item.riseUpRate}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <UsdNote />

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
