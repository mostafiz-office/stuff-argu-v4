import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Cpu,
  Users,
  Sparkles,
  Award,
  DollarSign,
} from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import alimImg from "@/assets/alim-updated.png";

interface PremiumExpertSlideV2Props {
  onNavigate?: (index: number) => void;
}

export const PremiumExpertSlideV2: React.FC<PremiumExpertSlideV2Props> = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "Architecture & Scale Strategy",
      desc: "High-scale system design and database modeling to stop technical debt before code is written.",
    },
    {
      icon: ShieldCheck,
      title: "Strict Code & Security Audits",
      desc: "Weekly pull request reviews, automated CI/CD guardrails, and enterprise security hardening.",
    },
    {
      icon: Code2,
      title: "Rapid Blocker Resolution",
      desc: "Direct veteran intervention whenever complex concurrency bugs or production edge cases strike.",
    },
    {
      icon: Users,
      title: "Senior Engineer Mentorship",
      desc: "Continuous technical guidance so your dedicated engineer consistently delivers at a 10x standard.",
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/3 left-1/4 w-[850px] h-[480px] rounded-full bg-pres-accent/8 blur-[170px] pointer-events-none" />

        {/* Flexbox Centered Main Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col justify-center">
          {/* Title Area - Clean, focused headline without redundant explanation */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[62px] leading-[1.08] font-bold font-heading tracking-tight text-white"
            >
              Executive Oversight: <span className="text-pres-accent">Chief Software Engineer</span> Included
            </motion.h1>
          </div>

          {/* Main Content Layout: Left Profile & Right 4 Pillars */}
          <div className="flex gap-8 w-full">
            {/* Left: Alim Executive Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-[430px] p-5 rounded-3xl bg-pres-surface/90 border border-pres-accent/30 shadow-2xl backdrop-blur-md flex flex-col justify-between"
            >
              <div className="relative w-full h-[240px] rounded-2xl overflow-hidden mb-3.5 border border-white/10 bg-black/50 shadow-inner group">
                <img
                  src={alimImg}
                  alt="Alim Ul Karim"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-[17px]">Alim Ul Karim</p>
                    <p className="text-[14px] text-pres-accent font-semibold">Chief Software Engineer</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-pres-accent/20 border border-pres-accent/30 text-pres-accent text-[14px] font-mono font-bold">
                    20+ Yrs Exp
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-3.5">
                <div className="flex items-center gap-2 text-[15px] text-pres-text">
                  <div className="w-1.5 h-1.5 rounded-full bg-pres-accent shrink-0" />
                  <span>Enterprise Architect for 10M+ Concurrent User Systems</span>
                </div>
                <div className="flex items-center gap-2 text-[15px] text-pres-text">
                  <div className="w-1.5 h-1.5 rounded-full bg-pres-accent shrink-0" />
                  <span>Led Architecture Across 50+ High-Stakes Tech Platforms</span>
                </div>
                <div className="flex items-center gap-2 text-[15px] text-pres-text">
                  <div className="w-1.5 h-1.5 rounded-full bg-pres-accent shrink-0" />
                  <span>Personally Vets &amp; Supervises Every Single Engineer</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <p className="text-[15px] text-pres-text-muted italic leading-relaxed">
                  "Our clients don't just get code. They get architecture that scales and peace of mind at 2 AM."
                </p>
              </div>
            </motion.div>

            {/* Right: 4 Core Pillars (2x2 Grid) */}
            <div className="flex-1 grid grid-cols-2 gap-5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 + idx * 0.08 }}
                    className="p-5 rounded-3xl bg-pres-surface/75 border border-white/10 hover:border-pres-accent/40 backdrop-blur-md flex flex-col justify-between transition-all hover:bg-pres-surface/90 shadow-xl"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-pres-accent/15 border border-pres-accent/30 flex items-center justify-center text-pres-accent mb-3 shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-[24px] font-bold font-heading text-white mb-1.5 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-[16px] text-pres-text-muted leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1.5 text-[14px] font-semibold text-pres-accent">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Included 100% Free In Your Tier</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
