import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";

interface TierDetailSlideProps {
  onNavigate?: (index: number) => void;
}

export const TierDetailSlide: React.FC<TierDetailSlideProps> = () => {
  const columns = [
    {
      name: "Tier 2 — Growth",
      price: "$4,299/mo",
      color: "hsl(var(--pres-accent))",
      textColor: "text-pres-accent",
      bgColor: "bg-pres-accent/[0.06]",
      borderColor: "border-pres-accent/30",
      badge: null,
      tagline: null,
    },
    {
      name: "Tier 3.A — Skilled",
      price: "$6,800–8K/mo",
      color: "#22c55e",
      textColor: "text-green-400",
      bgColor: "bg-green-500/[0.06]",
      borderColor: "border-green-500/30",
      badge: "⭐ BEST VALUE",
      tagline: null,
    },
    {
      name: "Tier 3.B — Leadership",
      price: "$7.5K–10K/mo",
      color: "#c084fc",
      textColor: "text-purple-400",
      bgColor: "bg-purple-500/[0.06]",
      borderColor: "border-purple-500/30",
      badge: "👑 PREMIUM",
      tagline: "✨ Full Tech Management",
    },
  ];

  type FeatureRow = {
    feature: string;
    growth: boolean | string;
    skilled: boolean | string;
    leadership: boolean | string;
  };

  const rows: FeatureRow[] = [
    { feature: "Dedicated developer · 160 hrs/mo", growth: true, skilled: true, leadership: true },
    { feature: "Weekly progress reports", growth: true, skilled: true, leadership: true },
    { feature: "Daily standups & sync", growth: true, skilled: true, leadership: true },
    { feature: "Sprint participation", growth: true, skilled: true, leadership: true },
    { feature: "Task breakdown & delegation", growth: true, skilled: true, leadership: true },
    { feature: "Team management scope", growth: "Up to 2", skilled: "3–5", leadership: "Up to 15" },
    { feature: "Architecture decisions", growth: true, skilled: true, leadership: true },
    { feature: "Dedicated project management", growth: false, skilled: false, leadership: true },
    { feature: "CTO-level strategic oversight", growth: false, skilled: false, leadership: true },
    { feature: "Priority Slack · 24/7 SLA", growth: "Slack only", skilled: true, leadership: "Versatile" },
    { feature: "QA Automation Engineers", growth: false, skilled: false, leadership: "2" },
    { feature: "Alim Expert Oversight", growth: "2 hrs/wk", skilled: "3 hrs/wk", leadership: "4 hrs/wk" },
    { feature: "Min. Developer Experience", growth: "4+ yrs", skilled: "6+ yrs", leadership: "8+ yrs" },
    { feature: "Onboarding Deposit", growth: "$2K", skilled: "$2K", leadership: "$2K" },
  ];

  const renderCell = (val: boolean | string, colColor: string) => {
    if (val === true) {
      return <CheckCircle className="w-4 h-4 mx-auto" style={{ color: colColor }} />;
    }
    if (val === false) {
      return <X className="w-4 h-4 mx-auto text-red-500/80" />;
    }
    return (
      <span className="font-bold text-[16px]" style={{ color: colColor }}>
        {val}
      </span>
    );
  };

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-pres-accent/5 blur-[150px] pointer-events-none" />

        {/* Flexbox Centered Main Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col justify-center h-[820px]">
          {/* Title Area */}
          <div className="mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[62px] leading-[1.08] font-bold font-heading tracking-tight text-white"
            >
              Feature <span className="text-pres-accent">Comparison</span>
            </motion.h1>
          </div>

          {/* Table Container */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Header Row */}
            <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr] items-end pb-2 border-b border-white/10">
              <div className="text-left font-heading font-semibold text-[16px] text-pres-text-dim uppercase tracking-wider pl-4">
                Features &amp; Deliverables
              </div>
              {columns.map((col, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                  className={`text-center py-2 px-3 mx-1 rounded-t-xl ${col.bgColor} border-t border-x ${col.borderColor}`}
                >
                  {col.badge && (
                    <span className="inline-block text-[13px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-white mb-1 shadow-sm">
                      {col.badge}
                    </span>
                  )}
                  <div className="font-heading font-bold text-[17px] text-white">{col.name}</div>
                  <div className={`text-[15px] font-semibold ${col.textColor}`}>{col.price}</div>
                </motion.div>
              ))}
            </div>

            {/* Rows */}
            <div className="flex-1 flex flex-col justify-evenly">
              {rows.map((row, rIdx) => (
                <motion.div
                  key={rIdx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.25 + rIdx * 0.02 }}
                  className={`grid grid-cols-[1.8fr_1fr_1fr_1fr] items-center py-1.5 px-1 border-b border-white/5 hover:bg-white/[0.02] transition-colors rounded ${
                    rIdx % 2 === 0 ? "bg-white/[0.01]" : ""
                  }`}
                >
                  {/* Feature Label */}
                  <div className="text-left font-medium text-[16px] text-white/90 pl-4">
                    {row.feature}
                  </div>

                  {/* Growth */}
                  <div className="text-center mx-1 py-0.5">
                    {renderCell(row.growth, columns[0].color)}
                  </div>

                  {/* Skilled */}
                  <div className="text-center mx-1 py-0.5">
                    {renderCell(row.skilled, columns[1].color)}
                  </div>

                  {/* Leadership */}
                  <div className="text-center mx-1 py-0.5">
                    {renderCell(row.leadership, columns[2].color)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
