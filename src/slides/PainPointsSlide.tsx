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
      hook: "Waking up at midnight to fix fragile production crashes alone while customers churn.",
      statMetric: "$18,500/mo",
      statLabel: "Outage & Churn Bleed",
      solution: "Pre-vetted seniors actively guard production so you sleep through the night.",
    },
    {
      icon: Layers,
      title: "Fragile Vibe Code & AI Defects",
      badge: "Brittle Architecture",
      accentBorder: "border-amber-500/35",
      accentBg: "bg-amber-500/5",
      accentBadge: "bg-pres-accent/15 text-pres-accent border-pres-accent/30",
      hook: "AI-generated code and unreviewed vibe coding slip into production, breaking edge cases and compounding debt.",
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
      hook: "Sifting through 200+ resumes and burning 3 months interviewing unvetted contractors who fail to deliver.",
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
          {/* Title Area - Clean, high-impact headline without explanation */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[52px] font-bold font-heading tracking-tight text-white"
            >
              Stop Debugging at 2 AM. <span className="text-pres-accent">Fix Fragile Vibe Code &amp; AI Defects.</span>
            </motion.h1>
          </div>

          {/* 3 Core Cards Grid */}
          <div className="grid grid-cols-3 gap-7 w-full">
            {painPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                  className={`p-6 rounded-3xl border ${item.accentBorder} ${item.accentBg} backdrop-blur-md flex flex-col hover:border-pres-accent/50 transition-all hover:bg-pres-surface/90 shadow-2xl group`}
                >
                  {/* Header: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-md ${item.accentBadge}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-pres-text-dim uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[22px] font-bold font-heading text-white mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  {/* Emotional Hook */}
                  <p className="text-[14px] text-pres-text leading-relaxed mb-4 min-h-[42px]">
                    {item.hook}
                  </p>

                  {/* Financial Bleed Metric Box */}
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <TrendingDown className="w-3.5 h-3.5 text-red-400" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-pres-text-dim">
                          {item.statLabel}
                        </span>
                      </div>
                    </div>
                    <div className="text-[24px] font-bold font-heading text-white tracking-tight">
                      {item.statMetric}
                    </div>
                  </div>

                  {/* RiseUp Relief Solution Banner */}
                  <div className="pt-3.5 border-t border-white/10 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <p className="text-[12px] text-green-300 font-medium leading-snug">
                      {item.solution}
                    </p>
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
