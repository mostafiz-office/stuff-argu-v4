import React from "react";
import { motion } from "framer-motion";
import { Clock, DollarSign, Gift } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, scaleIn, staggerDelay } from "@/lib/presentationMotion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ExpertValuationBreakdownSlideProps {
  onNavigate?: (index: number) => void;
}

const steps = [
  { icon: DollarSign, title: "Market Rate", value: "$625 / hr", sub: "Enterprise CTO standard" },
  { icon: Clock, title: "Dedicated Hours", value: "2 to 4 hrs / wk", sub: "8 to 16 hrs per month" },
  { icon: Gift, title: "Your Value", value: "Up to $10k / M", sub: "100% free with your tier", highlight: true },
];

const tiers = [
  { name: "Tier 1 · Starter", value: "$2,500" },
  { name: "Tier 2 · Growth", value: "$5,000" },
  { name: "Tier 3.A · Skilled", value: "$7,500" },
  { name: "Tier 3.B · Leadership", value: "$10,000", highlight: true },
];

export const ExpertValuationBreakdownSlide: React.FC<ExpertValuationBreakdownSlideProps> = () => (
  <TooltipProvider>
  <ScaledSlide>
    <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
      <SlideHeader />
      <div className="absolute top-1/3 right-1/4 w-[850px] h-[480px] rounded-full bg-pres-accent/8 blur-[180px] pointer-events-none" />

      <div className="relative z-10 w-full px-[100px] pt-[60px] flex flex-col">
        <motion.h1
          {...fadeUp(0)}
          className="pres-title font-bold font-heading tracking-tight mb-10"
        >
          What the Chief Architect Is Worth
        </motion.h1>

        <div className="grid grid-cols-3 gap-8 mb-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            if (!s.highlight) {
              return (
                <motion.div
                  key={s.title}
                  {...scaleIn(staggerDelay(i, 0.16, 0.08))}
                  className="p-8 rounded-3xl border shadow-xl bg-pres-surface/75 border-white/10 transition-[border-color,background-color,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-pres-accent/60 hover:shadow-[0_0_35px_hsl(var(--pres-accent)/0.25)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-pres-accent/15 text-pres-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[22px] font-semibold uppercase tracking-wider text-pres-text-dim">
                      {i + 1}. {s.title}
                    </span>
                  </div>
                  <div className="text-[56px] font-bold font-heading leading-tight mb-2">{s.value}</div>
                  <p className="text-[24px] text-pres-text-muted">{s.sub}</p>
                </motion.div>
              );
            }
            // FB-24: gift block — benefit focus (≤2 lines + visual), hover reveals detail
            return (
              <Tooltip key={s.title}>
                <TooltipTrigger asChild>
                  <motion.div
                    {...scaleIn(staggerDelay(i, 0.16, 0.08))}
                      className="p-8 rounded-3xl border shadow-xl bg-pres-surface/95 border-pres-accent shadow-[0_0_35px_rgba(255,173,1,0.25)] cursor-pointer transition-[border-color,background-color,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_0_50px_rgba(255,173,1,0.4)]"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-pres-accent text-pres-bg pres-dark-safe-accent shadow-[0_0_20px_rgba(255,173,1,0.4)]">
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="text-[22px] font-semibold uppercase tracking-wider text-pres-text-dim">
                        {i + 1}. {s.title}
                      </span>
                    </div>
                    <div className="text-[40px] font-bold font-heading text-white leading-tight">
                      Chief Architect
                    </div>
                    <div className="text-[30px] font-bold font-heading text-pres-accent">
                      FREE with your tier
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-[320px] p-4 text-center">
                  <div className="text-[16px] text-pres-text-muted">
                    Up to $10k/M in architecture oversight ($625/hr value) included
                    with your tier at no extra cost.
                  </div>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        <motion.div
          {...fadeUp(0.42)}
          className="grid grid-cols-4 gap-6"
        >
          <p className="col-span-4 -mb-2 text-[20px] font-semibold uppercase tracking-[0.2em] text-pres-text-muted">
            Bonus value included free with each tier
          </p>
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-6 rounded-2xl border transition-[border-color,background-color,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-pres-accent/60 hover:shadow-[0_0_35px_hsl(var(--pres-accent)/0.25)] ${t.highlight ? "bg-pres-accent/10 border-pres-accent" : "bg-pres-surface/70 border-white/10"}`}
            >
              <div className="text-[24px] font-bold font-heading mb-2">{t.name}</div>
              <div className="text-[34px] font-bold text-green-400 font-mono">
                {t.value}<span className="text-[22px]">/M FREE</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
    </div>
  </ScaledSlide>
  </TooltipProvider>
);
