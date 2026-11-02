import React from "react";
import { motion } from "framer-motion";
import { Clock, Shield, MessageSquare, Zap, Users, RefreshCw } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, staggerDelay } from "@/lib/presentationMotion";

interface WhatsIncludedSlideProps {
  onNavigate?: (index: number) => void;
}

export const WhatsIncludedSlide: React.FC<WhatsIncludedSlideProps> = () => {
  const guarantees = [
    {
      icon: Zap,
      title: "80% Less Hiring Effort",
      desc: "Seniors ready fast.",
    },
    {
      icon: Shield,
      title: "Fragile Code Fixed",
      desc: "Reviews make it clean.",
    },
    {
      icon: RefreshCw,
      title: "No AI Surprises",
      desc: "Tests catch bad logic.",
    },
    {
      icon: Clock,
      title: "Sleep at Night",
      desc: "No midnight firefights.",
    },
    {
      icon: Users,
      title: "160 Hrs/M",
      desc: "Embedded in your tools.",
    },
    {
      icon: MessageSquare,
      title: "Free Replacement",
      desc: "Not a fit? Swapped.",
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Ambient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

        {/* Flexbox Centered Main Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col justify-center">
          {/* Title Area - Clean, focused headline without redundant explanation */}
          <div className="mb-8">
            <motion.h1
              {...fadeUp(0)}
              className="pres-title font-bold font-heading tracking-tight text-white"
            >
              What's <span className="text-pres-accent">Included</span>
            </motion.h1>
            <motion.p {...fadeUp(0.08)} className="mt-4 text-[24px] text-pres-text-muted">
              Every plan comes with these guarantees — no extra charges.
            </motion.p>
          </div>

          {/* 3×2 Grid of Guarantee Cards */}
          <div className="grid grid-cols-3 gap-6 w-full mb-8">
            {guarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeUp(staggerDelay(idx, 0.16, 0.055))}
                  // 2026-11-02 feedback round 2: card redesign to
                  // match the v1 reference slide 6 — vertical flat cards
                  // (icon on top, title below, description below), dark
                  // slate surface, subtle border, NO shadow at all, so
                  // hover can never overlap a neighbouring card. Main
                  // deck's own card titles/descriptions are kept; only
                  // the design follows the reference.
                  className="bg-[#14141B] border border-white/5 rounded-[18px] p-8 flex flex-col items-start gap-0 backdrop-blur-md transition-[border-color,background-color] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-pres-accent/30 hover:bg-[#17171F] shadow-none hover:shadow-none"
                >
                  <div className="w-[48px] h-[48px] rounded-xl bg-[#1B1A1F] border border-pres-accent/20 flex items-center justify-center text-pres-accent shrink-0 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h2 className="text-[30px] font-bold font-heading text-white mb-2 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-[22px] text-pres-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trial Note Badge */}
          <motion.div
            {...fadeUp(0.5, 12)}
            className="self-center flex items-center gap-3 px-6 py-2.5 rounded-full bg-pres-surface/90 border border-pres-accent/30 backdrop-blur-md shadow-lg"
          >
            <Shield className="w-4 h-4 text-pres-accent shrink-0" />
            <span className="text-[25px] text-pres-text-muted font-medium">
              14 day trial with money back guarantee (conditions apply).
            </span>
          </motion.div>
        </div>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
