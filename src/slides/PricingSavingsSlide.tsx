import React from "react";
import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";

interface PricingSavingsSlideProps {
  onNavigate?: (index: number) => void;
}

export const PricingSavingsSlide: React.FC<PricingSavingsSlideProps> = () => {
  const comparisons = [
    {
      role: "Starter Developer",
      tier: "Tier 1",
      usRate: "$6,000–$8,000/mo",
      riseUpRate: "$1,900/mo",
      savings: "Up to 76% Savings",
      riseUpWidth: "24%",
      color: "from-red-500 to-rose-600",
      accentBg: "bg-red-500/10",
      accentText: "text-red-400",
    },
    {
      role: "Mid-Level Developer",
      tier: "Tier 2",
      usRate: "$10,000–$15,000/mo",
      riseUpRate: "$4,299/mo",
      savings: "Up to 71% Savings",
      riseUpWidth: "29%",
      color: "from-amber-500 to-yellow-500",
      accentBg: "bg-amber-500/10",
      accentText: "text-amber-400",
    },
    {
      role: "Skilled Expert",
      tier: "Tier 3.A",
      usRate: "$18,000–$25,000/mo",
      riseUpRate: "$6,800–$8,000/mo",
      savings: "Up to 68% Savings",
      riseUpWidth: "32%",
      color: "from-purple-500 to-indigo-600",
      accentBg: "bg-purple-500/10",
      accentText: "text-purple-400",
    },
    {
      role: "Tech Leadership",
      tier: "Tier 3.B",
      usRate: "$22,000–$30,000/mo",
      riseUpRate: "$7,500–$10,000/mo",
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
          <div className="w-[580px] flex flex-col justify-center">
            {/* Title Area - Clean, focused headline without redundant explanation */}
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[52px] font-bold font-heading italic tracking-tight text-white mb-3"
              >
                The Real Cost of <span className="text-pres-accent not-italic">Stalled Projects</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-24 h-1 accent-bar rounded-full origin-left"
              />
            </div>

            {/* Value Callout Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-7 rounded-3xl bg-pres-surface/80 border border-pres-accent/30 shadow-2xl backdrop-blur-md max-w-[440px]"
            >
              <div className="text-[76px] font-bold font-heading text-pres-accent metric-glow leading-none mb-1">
                4×
              </div>
              <div className="text-xl font-bold font-heading text-white mb-1.5">
                More Value
              </div>
              <p className="text-sm text-pres-text-muted leading-relaxed">
                vs. hiring directly in the US with equivalent experience and vetted oversight.
              </p>
            </motion.div>
          </div>

          {/* Right Column (4 Comparison Bar Groups) */}
          <div className="flex-1 max-w-[980px] flex flex-col justify-center gap-4">
            {comparisons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                className="p-5 rounded-2xl bg-pres-surface/70 border border-white/10 hover:border-pres-accent/30 backdrop-blur-md transition-all shadow-lg"
              >
                {/* Header row of card */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base font-bold font-heading text-white">
                      {item.role}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-white/80">
                      {item.tier}
                    </span>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.accentBg} ${item.accentText}`}>
                    {item.savings}
                  </span>
                </div>

                {/* Bars container */}
                <div className="space-y-2">
                  {/* US Market Bar */}
                  <div>
                    <div className="flex justify-between text-xs text-pres-text-dim mb-1 font-mono">
                      <span>US Direct Market Rate</span>
                      <span className="text-white/70 font-semibold">{item.usRate}</span>
                    </div>
                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.7, delay: 0.35 + idx * 0.08 }}
                        className="h-full bg-white/20 rounded-full"
                      />
                    </div>
                  </div>

                  {/* RiseUp Bar */}
                  <div>
                    <div className="flex justify-between text-xs text-pres-accent mb-1 font-mono">
                      <span>RiseUp Dedicated Talent</span>
                      <span className="text-pres-accent font-bold">{item.riseUpRate}</span>
                    </div>
                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: item.riseUpWidth }}
                        transition={{ duration: 0.7, delay: 0.45 + idx * 0.08 }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
