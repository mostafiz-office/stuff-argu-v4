import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Flame,
  Layers,
  UserX,
  TrendingDown,
  ShieldCheck,
} from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";

interface PainPointsSlideProps {
  onNavigate?: (index: number) => void;
}

export const PainPointsSlide: React.FC<PainPointsSlideProps> = () => {
  const painPoints = [
    {
      icon: Flame,
      title: "The 2 AM Outage Panic",
      badge: "Midnight Firefights",
      accentBorder: "border-red-500/30",
      accentBg: "bg-red-500/5",
      accentBadge: "bg-red-500/15 text-red-400 border-red-500/30",
      hook: "", short: "Production breaks while you sleep.",
      statMetric: "$18,500/mo",
      statLabel: "Outage & Churn Bleed",
      solution: "Pre-vetted seniors actively guard production so you sleep through the night.",
    },
    {
      icon: Layers,
      title: "Fragile Vibe & AI Code",
      badge: "Brittle Architecture",
      accentBorder: "border-amber-500/35",
      accentBg: "bg-amber-500/5",
      accentBadge: "bg-pres-accent/15 text-pres-accent border-pres-accent/30",
      hook: "", short: "Unreviewed AI code piles up debt.",
      statMetric: "3× Slower",
      statLabel: "Velocity & Bug Bleed",
      solution: "Chief Architect audits turn brittle hacks into clean, scalable architecture before deployment.",
    },
    {
      icon: UserX,
      title: "The 90-Day Hiring Sinkhole",
      badge: "Recruitment Drag",
      accentBorder: "border-orange-500/30",
      accentBg: "bg-orange-500/5",
      accentBadge: "bg-orange-500/15 text-orange-400 border-orange-500/30",
      hook: "", short: "3 months lost to unvetted hires.",
      statMetric: "Save 80%",
      statLabel: "Recruiting Time Saved",
      solution: "Save 80% hiring effort — top 5% bench-ready talent shipping in as fast as 20 minutes.",
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Ambient atmospheric warning glow */}
        <div className="absolute top-1/3 left-1/4 w-[750px] h-[450px] rounded-full bg-red-500/5 blur-[170px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[450px] rounded-full bg-pres-accent/5 blur-[170px] pointer-events-none" />

        {/* Flexbox Centered Main Content (justify-content: center; align-items: center;) */}
        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col justify-center">
          <div className="mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[68px] leading-[1.08] font-bold font-heading tracking-tight text-white"
            >
              Stop Debugging at 2 AM. <span className="text-pres-accent">Fix It For Good.</span>
            </motion.h1>
            <p className="text-[26px] text-pres-text-muted mt-3">Three problems that quietly drain your team every month.</p>
          </div>

          <div className="grid grid-cols-3 gap-10 w-full items-stretch">
            {painPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                  className={`p-9 rounded-3xl border ${item.accentBorder} ${item.accentBg} backdrop-blur-md flex flex-col shadow-2xl`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border mb-5 ${item.accentBadge}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-[32px] font-bold font-heading text-white mb-2 leading-tight">{item.title}</h3>
                  <p className="text-[22px] text-pres-text-muted leading-snug">{item.short}</p>
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <div className="text-[60px] font-bold font-heading text-pres-accent leading-none">{item.statMetric}</div>
                    <div className="text-[18px] uppercase tracking-wider text-pres-text-dim mt-2">{item.statLabel}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
