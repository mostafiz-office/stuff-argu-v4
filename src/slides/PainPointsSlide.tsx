import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Flame,
  Layers,
  UserX,
  TrendingDown,
  HeartCrack,
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
      title: "Engineering Burnout",
      badge: "The 2 AM Panic",
      accentBorder: "border-red-500/35",
      accentBg: "bg-red-500/5",
      accentBadge: "bg-red-500/15 text-red-400 border-red-500/30",
      emotionalTitle: "The Emotional Toll",
      emotionalDetail:
        "Waking up at midnight to fix fragile vibe-code, hallucinated queries, and broken webhooks alone in the dark while customers churn.",
      financialMetric: "$18,500/mo",
      financialLabel: "Outage & Churn Bleed",
      financialDetail: "Emergency bug firefights, broken payment flows, and damaged trust.",
      statHighlight: "Zero Sleep · Crippling Anxiety",
      cure: "Pre-vetted seniors unblock production and guard against bugs",
    },
    {
      icon: Layers,
      title: "Technical Debt Trap",
      badge: "Compounding Fragility",
      accentBorder: "border-amber-500/40",
      accentBg: "bg-amber-500/5",
      accentBadge: "bg-pres-accent/15 text-pres-accent border-pres-accent/30",
      emotionalTitle: "The Architect Trap",
      emotionalDetail:
        "Your top engineers are stuck babysitting junior PRs, patching security holes, and untangling prompt spaghetti instead of building core features.",
      financialMetric: "$50,000+",
      financialLabel: "Stalled Roadmap Cost",
      financialDetail: "Delayed market launch, missed quarters, and lost enterprise deals.",
      statHighlight: "3× Slower Delivery Velocity",
      cure: "Chief Architect code reviews enforce scalable architecture",
    },
    {
      icon: UserX,
      title: "Recruitment Exhaustion",
      badge: "The 90-Day Sinkhole",
      accentBorder: "border-orange-500/35",
      accentBg: "bg-orange-500/5",
      accentBadge: "bg-orange-500/15 text-orange-400 border-orange-500/30",
      emotionalTitle: "The Founder Drain",
      emotionalDetail:
        "Screening 200+ unqualified resumes and running 15 coding interviews, only to get burned by contractors who create more bugs than they fix.",
      financialMetric: "$32,000+",
      financialLabel: "Wasted Per Bad Hire",
      financialDetail: "Agency retainers, executive screening hours, and lost momentum.",
      statHighlight: "80% Hiring Effort Wasted",
      cure: "Bench-ready top 5% engineers start in as fast as 20 minutes",
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans">
        <SlideHeader />

        {/* Ambient warning atmospheric glows */}
        <div className="absolute top-1/4 left-1/4 w-[750px] h-[480px] rounded-full bg-red-500/5 blur-[170px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[480px] rounded-full bg-pres-accent/5 blur-[170px] pointer-events-none" />

        {/* Title Area */}
        <div className="absolute left-[80px] top-[65px] z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-widest mb-2 w-fit"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>The Real Toll On Founders &amp; CTOs</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[50px] font-bold font-heading tracking-tight text-white mb-1.5"
          >
            Losing Sleep to <span className="text-pres-accent">Technical Debt &amp; Burnout?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] text-pres-text-muted max-w-[1050px]"
          >
            When technical debt compounds and hiring stalls, founders pay with their sanity and their runway. RiseUp eliminates this tax with bench-ready engineers supervised by our 20+ year Chief Architect:
          </motion.p>
        </div>

        {/* 3 Core Cards Grid - Strict 150px clearance ending at bottom-[150px] */}
        <div className="absolute left-[80px] right-[80px] top-[205px] bottom-[150px] z-10 grid grid-cols-3 gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                className={`p-6 rounded-3xl border ${item.accentBorder} ${item.accentBg} backdrop-blur-md flex flex-col justify-between hover:border-pres-accent/50 transition-all hover:bg-pres-surface/90 shadow-2xl group`}
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-md ${item.accentBadge}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-pres-text-dim uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[21px] font-bold font-heading text-white mb-2 leading-tight">
                    {item.title}
                  </h3>

                  {/* Emotional Toll Box */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 mb-2.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <HeartCrack className="w-3 h-3 text-amber-400" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                        {item.emotionalTitle}
                      </span>
                    </div>
                    <p className="text-[12px] text-pres-text leading-relaxed">
                      {item.emotionalDetail}
                    </p>
                  </div>

                  {/* Financial Bleed Box */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 mb-2">
                    <div className="flex items-center justify-between mb-0.5">
                      <div className="flex items-center gap-1.5">
                        <TrendingDown className="w-3 h-3 text-red-400" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-pres-text-dim">
                          Financial Bleed
                        </span>
                      </div>
                      <span className="text-[10px] text-pres-accent font-semibold">
                        {item.financialLabel}
                      </span>
                    </div>
                    <div className="text-[26px] font-bold font-heading text-white leading-tight mb-0.5">
                      {item.financialMetric}
                    </div>
                    <p className="text-[11px] text-pres-text-muted leading-tight">
                      {item.financialDetail}
                    </p>
                  </div>
                </div>

                {/* RiseUp Cure Footer */}
                <div className="pt-2.5 border-t border-white/10 flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-red-400 font-semibold text-[11px]">{item.statHighlight}</span>
                    <span className="text-green-400 font-medium flex items-center gap-1 text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>RiseUp Solution</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-pres-text-dim italic leading-snug">
                    {item.cure}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ScaledSlide>
  );
};
