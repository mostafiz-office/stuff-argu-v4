import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";

interface StarterTierDetailSlideProps {
  onNavigate?: (index: number) => void;
}

export const StarterTierDetailSlide: React.FC<StarterTierDetailSlideProps> = () => {
  const rows = [
    { feature: "Dedicated developer · 160 hrs/mo", status: true },
    { feature: "Weekly progress reports", status: true },
    { feature: "Daily standups", status: false },
    { feature: "Sprint participation", status: false },
    { feature: "Task breakdown & delegation", status: false },
    { feature: "Team management", status: false },
    { feature: "Architecture decisions", status: false },
    { feature: "Project management", status: false },
    { feature: "CTO-level oversight", status: false },
    { feature: "Priority Slack · 24/7 SLA", status: false },
    { feature: "QA Engineers", status: false },
    { feature: "Alim Expert Oversight", status: "2 hrs/wk*" },
    { feature: "Min. Developer Experience", status: "2+ yrs" },
    { feature: "Onboarding Deposit", status: "$2K" },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans">
        <SlideHeader />

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-pres-accent/5 blur-[150px] pointer-events-none" />

        {/* Title */}
        <div className="absolute left-[80px] top-[75px] z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[56px] font-bold font-heading tracking-tight text-white mb-1"
          >
            Tier 1 — <span className="text-pres-accent">Starter</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[24px] text-pres-text-muted font-medium"
          >
            $2,499/mo · 160 dedicated hours
          </motion.p>
        </div>

        {/* Table Container */}
        <div className="absolute left-[80px] right-[80px] top-[180px] bottom-[60px] z-10 flex flex-col justify-evenly">
          {/* Header */}
          <div className="grid grid-cols-[1fr_200px] items-center pb-3 border-b-2 border-pres-accent/30 px-4">
            <span className="font-heading font-bold text-lg text-pres-text-dim uppercase tracking-wider">
              Feature
            </span>
            <span className="font-heading font-bold text-lg text-pres-accent text-center uppercase tracking-wider">
              Starter
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.035 }}
              className={`grid grid-cols-[1fr_200px] items-center py-2 px-4 border-b border-white/5 hover:bg-white/[0.02] rounded ${
                idx % 2 === 0 ? "bg-white/[0.01]" : ""
              }`}
            >
              <span className="text-[17px] text-white/90 font-medium">{row.feature}</span>
              <div className="flex justify-center">
                {row.status === true ? (
                  <CheckCircle className="w-5 h-5 text-pres-accent" />
                ) : row.status === false ? (
                  <X className="w-5 h-5 text-red-500/80" />
                ) : (
                  <span className="text-pres-accent font-bold text-base">{row.status}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
};
