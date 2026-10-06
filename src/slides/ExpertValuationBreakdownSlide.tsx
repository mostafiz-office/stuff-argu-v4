import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Clock,
  DollarSign,
  Gift,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";

interface ExpertValuationBreakdownSlideProps {
  onNavigate?: (index: number) => void;
}

export const ExpertValuationBreakdownSlide: React.FC<ExpertValuationBreakdownSlideProps> = () => {
  const steps = [
    {
      step: "1",
      icon: DollarSign,
      title: "Market Rate",
      value: "$625 / hr",
      sub: "Enterprise CTO Standard",
      detail: "Standard US market rate for a 20+ year Enterprise Chief Software Engineer.",
    },
    {
      step: "2",
      icon: Clock,
      title: "Dedicated Hours",
      value: "2 to 4 hrs / wk",
      sub: "8 to 16 hrs / month",
      detail: "Hands-on architecture reviews, security audits, PR approvals & tech strategy.",
    },
    {
      step: "3",
      icon: Gift,
      title: "Monthly Value",
      value: "Up to $10k / mo",
      sub: "100% Free With Tier",
      detail: "You pay $0 additional fees. Executive oversight is bundled directly into your tier.",
      highlight: true,
    },
  ];

  const tierRows = [
    {
      name: "Tier 1 — Starter",
      price: "$1,900/mo",
      hours: "4 hrs/mo kickoff & audit",
      value: "$2,500 / mo FREE",
      formula: "4 hrs × $625/hr",
    },
    {
      name: "Tier 2 — Growth",
      price: "$4,299/mo",
      hours: "2 hrs/wk (8 hrs/mo)",
      value: "$5,000 / mo FREE",
      formula: "8 hrs × $625/hr",
    },
    {
      name: "Tier 3.A — Skilled",
      price: "$6,800–$8,000/mo",
      hours: "3 hrs/wk (12 hrs/mo)",
      value: "$7,500 / mo FREE",
      formula: "12 hrs × $625/hr",
    },
    {
      name: "Tier 3.B — Leadership",
      price: "$7,500–$10,000/mo",
      hours: "4 hrs/wk (16 hrs/mo)",
      value: "$10,000 / mo FREE",
      formula: "16 hrs × $625/hr",
      highlight: true,
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Ambient atmospheric radial glow */}
        <div className="absolute top-1/3 right-1/4 w-[850px] h-[480px] rounded-full bg-pres-accent/8 blur-[180px] pointer-events-none" />

        {/* Flexbox Centered Main Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col justify-center">
          {/* Title Area - Clean, focused headline without redundant explanation */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[52px] font-bold font-heading tracking-tight text-white"
            >
              How The <span className="text-pres-accent">Chief Architect Valuation</span> Is Calculated
            </motion.h1>
          </div>

          {/* Step Formula Cards */}
          <div className="grid grid-cols-3 gap-6 w-full mb-6">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                  className={`p-5 rounded-3xl border flex flex-col justify-between backdrop-blur-md transition-all shadow-xl ${
                    st.highlight
                      ? "bg-pres-surface/95 border-pres-accent shadow-[0_0_35px_rgba(255,173,1,0.25)]"
                      : "bg-pres-surface/75 border-white/10"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/10 text-pres-text-dim">
                        STEP {st.step}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          st.highlight
                            ? "bg-pres-accent text-pres-bg pres-dark-safe-accent"
                            : "bg-pres-accent/15 text-pres-accent border border-pres-accent/25"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-[11px] font-semibold uppercase tracking-wider text-pres-text-dim mb-1">
                      {st.title}
                    </p>
                    <div
                      className={`text-[28px] font-bold font-heading leading-tight mb-1 ${
                        st.highlight ? "text-pres-accent" : "text-white"
                      }`}
                    >
                      {st.value}
                    </div>
                    <p className="text-[11px] font-medium text-pres-accent mb-1.5">{st.sub}</p>
                    <p className="text-[12.5px] text-pres-text-muted leading-relaxed">{st.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tier-by-Tier Value Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-5 rounded-3xl bg-pres-surface/90 border border-white/10 shadow-2xl backdrop-blur-md w-full"
          >
            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Tier-by-Tier Architecture Allocation &amp; Exact Monthly Value
              </span>
              <span className="text-xs text-green-400 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                <span>Supervised Directly by Alim Ul Karim (Chief Software Engineer)</span>
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-3.5">
              {tierRows.map((row, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border transition-all ${
                    row.highlight
                      ? "bg-pres-accent/10 border-pres-accent shadow-md"
                      : "bg-black/30 border-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white font-heading">{row.name}</span>
                    <span className="text-xs text-pres-accent font-mono font-semibold">{row.price}</span>
                  </div>
                  <div className="text-[11px] text-pres-text-muted mb-2">{row.hours}</div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                    <div className="text-[10px] text-pres-text-dim mb-0.5">{row.formula}</div>
                    <div className="text-[14px] font-bold text-green-400 font-mono">{row.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why We Do This Callout */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
              <HelpCircle className="w-4 h-4 text-pres-accent shrink-0" />
              <p className="text-xs text-pres-text-muted leading-relaxed">
                <strong className="text-white">Why is this included for free?</strong> Proactive senior architecture eliminates bugs before deployment, maintains our 99% client retention, and ensures our engineers deliver 3x faster without accumulating technical debt.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
