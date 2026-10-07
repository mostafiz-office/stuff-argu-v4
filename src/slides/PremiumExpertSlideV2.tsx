import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Code2, Cpu, Users, Sparkles } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import alimImg from "@/assets/alim-updated.png";
import { fadeUp, staggerDelay } from "@/lib/presentationMotion";

interface PremiumExpertSlideV2Props {
  onNavigate?: (index: number) => void;
}

const pillars = [
  { icon: Cpu, title: "Architecture Strategy", desc: "Stop tech debt before code is written." },
  { icon: ShieldCheck, title: "Code & Security Audits", desc: "Weekly PR reviews and hardening." },
  { icon: Code2, title: "Blocker Resolution", desc: "A veteran steps in on hard bugs." },
  { icon: Users, title: "Engineer Mentorship", desc: "Your engineer delivers at a 10x standard." },
];

export const PremiumExpertSlideV2: React.FC<PremiumExpertSlideV2Props> = () => (
  <ScaledSlide>
    <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
      <SlideHeader />
      <div className="absolute top-1/3 left-1/4 w-[850px] h-[480px] rounded-full bg-pres-accent/8 blur-[170px] pointer-events-none" />

      <div className="relative z-10 w-full px-[100px] pt-[60px] flex flex-col">
        <div className="flex items-end justify-between mb-10">
          <motion.h1
            {...fadeUp(0)}
            className="text-[72px] leading-[1.05] font-bold font-heading tracking-tight"
          >
            Chief Architect <span className="text-pres-accent">Included</span>
          </motion.h1>
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pres-accent/15 border border-pres-accent/40 text-pres-accent text-[24px] font-semibold whitespace-nowrap">
            <Sparkles className="w-6 h-6" /> 100% free in every tier
          </span>
        </div>

        <div className="flex gap-10">
          <motion.div
            {...fadeUp(0.16)}
            className="w-[520px] p-6 rounded-3xl bg-pres-surface/90 border border-pres-accent/30 shadow-2xl"
          >
            <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-5 bg-black/50">
              <img src={alimImg} alt="Alim Ul Karim" className="w-full h-full object-cover object-top" />
            </div>
            <p className="font-bold text-[32px] font-heading leading-tight">Alim Ul Karim</p>
            <p className="text-[24px] text-pres-accent font-semibold mb-4">Chief Software Engineer · 20+ yrs</p>
            <ul className="space-y-2 text-[22px] text-pres-text">
              <li>• Architect for 10M+ user systems</li>
              <li>• Vets every engineer personally</li>
            </ul>
          </motion.div>

          <div className="flex-1 grid grid-cols-2 gap-8">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  {...fadeUp(staggerDelay(i, 0.24, 0.07))}
                  className="p-8 rounded-3xl bg-pres-surface/75 border border-white/10 hover:border-pres-accent/40 hover:bg-pres-surface/90 flex flex-col justify-center shadow-xl transition-[border-color,background-color,box-shadow] duration-200"
                >
                  <div className="w-16 h-16 rounded-2xl bg-pres-accent/15 border border-pres-accent/30 flex items-center justify-center text-pres-accent mb-5">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-[34px] font-bold font-heading mb-2 leading-tight">{p.title}</h3>
                  <p className="text-[24px] text-pres-text-muted leading-snug">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
    </div>
  </ScaledSlide>
);
