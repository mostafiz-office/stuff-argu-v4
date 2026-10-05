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
      desc: "High-scale system design, database modeling, and eliminating technical debt before a single line of fragile code is written.",
    },
    {
      icon: ShieldCheck,
      title: "Strict Code & Security Audits",
      desc: "Weekly pull request reviews, automated CI/CD guardrails, and enterprise security hardening to guarantee bulletproof delivery.",
    },
    {
      icon: Code2,
      title: "24/7 Complex Bug Unblocking",
      desc: "When race conditions, AI hallucinations, or production bottlenecks strike, a 20+ year veteran steps in directly to resolve them.",
    },
    {
      icon: Users,
      title: "Engineering Team Mentorship",
      desc: "Continuous technical coaching and standards enforcement so your assigned engineers consistently perform at a 10x senior level.",
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans">
        <SlideHeader />

        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/3 left-1/4 w-[850px] h-[520px] rounded-full bg-pres-accent/8 blur-[170px] pointer-events-none" />

        {/* Title Area */}
        <div className="absolute left-[80px] top-[65px] z-10">
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-pres-accent/15 border border-pres-accent/30 text-pres-accent text-xs font-semibold uppercase tracking-widest w-fit"
            >
              <Award className="w-3.5 h-3.5 text-pres-accent" />
              <span>Executive Benefit · Included Free</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-semibold uppercase tracking-wider"
            >
              <DollarSign className="w-3.5 h-3.5 text-green-400" />
              <span>$5,000 – $10,000/mo Consulting Value Included</span>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-[48px] font-bold font-heading tracking-tight text-white mb-1.5"
          >
            Executive Oversight: <span className="text-pres-accent">Chief Software Engineer</span> Included
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] text-pres-text-muted max-w-[1100px]"
          >
            Most agencies assign unvetted contractors and walk away. Every RiseUp engineer is actively supervised by our 20+ year Enterprise Chief Software Engineer (2 to 4 hrs/wk) at zero extra cost.
          </motion.p>
        </div>

        {/* Main Content Layout: Left Profile (w: 440px), Right 4 Responsibilities (w: 1240px) - Strict 145px bottom clearance */}
        <div className="absolute left-[80px] right-[80px] top-[205px] bottom-[145px] z-10 flex gap-8">
          {/* Left: Alim Ul Karim Executive Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-[440px] h-full p-6 rounded-3xl bg-pres-surface/90 border border-pres-accent/30 shadow-2xl backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-[300px] rounded-2xl overflow-hidden mb-4 border border-white/10 bg-black/50 shadow-inner group">
                <img
                  src={alimImg}
                  alt="Alim Ul Karim"
                  className="w-full h-full object-cover object-top filter grayscale-15 contrast-105 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-sm">Alim Ul Karim</p>
                    <p className="text-[11px] text-pres-accent font-semibold">Chief Software Engineer</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-pres-accent/20 border border-pres-accent/30 text-pres-accent text-[11px] font-mono font-bold">
                    20+ Yrs Exp
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-pres-text">
                  <div className="w-1.5 h-1.5 rounded-full bg-pres-accent shrink-0" />
                  <span>Former Tech Lead for Enterprise Scale Platforms</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-pres-text">
                  <div className="w-1.5 h-1.5 rounded-full bg-pres-accent shrink-0" />
                  <span>Architected Systems for 10M+ Concurrent Users</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-pres-text">
                  <div className="w-1.5 h-1.5 rounded-full bg-pres-accent shrink-0" />
                  <span>Personally Vets and Supervises Every Single Engineer</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/10 mt-2">
              <p className="text-[11px] text-pres-text-muted italic leading-relaxed">
                "Our clients don't just get code. They get architecture that scales, code that passes enterprise audits, and peace of mind at 2 AM."
              </p>
            </div>
          </motion.div>

          {/* Right: 4 Core Oversight Responsibilities */}
          <div className="flex-1 grid grid-cols-2 gap-5 h-full">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + idx * 0.1 }}
                  className="p-6 rounded-3xl bg-pres-surface/75 border border-white/10 hover:border-pres-accent/40 backdrop-blur-md flex flex-col justify-between transition-all hover:bg-pres-surface/90 shadow-xl"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-pres-accent/15 border border-pres-accent/30 flex items-center justify-center text-pres-accent mb-3.5 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[20px] font-bold font-heading text-white mb-2 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-[14px] text-pres-text-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold text-pres-accent">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Included in every active tier engagement</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
};
