import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  UserX,
  Moon,
  ZapOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";

interface ProblemSlideProps {
  onNavigate?: (index: number) => void;
}

export const ProblemSlide: React.FC<ProblemSlideProps> = ({ onNavigate }) => {
  const painPoints = [
    {
      icon: UserX,
      stat: "80% Time Wasted",
      statSub: "on hiring & screening",
      title: "Recruitment Overhead Sinkhole",
      desc: "Sifting through 200+ unqualified applicants, running 15+ technical screens, and losing 3 months per open headcount — only to get burned by contractors who need constant hand-holding.",
      tag: "3-Month Hiring Lag",
      color: "border-red-500/30 bg-red-500/5",
      statColor: "text-red-400",
      badgeColor: "bg-red-500/15 text-red-400 border-red-500/30",
    },
    {
      icon: Moon,
      stat: "2 AM Firefights",
      statSub: "fixing broken production",
      title: "Night-Time Bugs & AI Hallucinations",
      desc: "Fast vibe-coding and AI prompts build the prototype quickly, until subtle hallucinated queries, race conditions, and unhandled edge cases trigger alerts that wake you up at midnight.",
      tag: "Dangerous Tech Debt",
      color: "border-amber-500/40 bg-amber-500/5",
      statColor: "text-pres-accent",
      badgeColor: "bg-pres-accent/15 text-pres-accent border-pres-accent/30",
    },
    {
      icon: ZapOff,
      stat: "2–3x Slower",
      statSub: "feature velocity drag",
      title: "Development & Delivery Bottlenecks",
      desc: "Your senior architects are trapped babysitting junior mistakes, untangling spaghetti code, and patching security gaps instead of building core features that drive customer revenue.",
      tag: "Missed Roadmap Milestones",
      color: "border-orange-500/30 bg-orange-500/5",
      statColor: "text-orange-400",
      badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    },
  ];

  const handleNext = () => {
    if (onNavigate) {
      onNavigate(2); // Advance to Pricing Tiers (Slide 3, 0-indexed index 2)
    }
  };

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans">
        <SlideHeader />

        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[450px] rounded-full bg-red-500/5 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[450px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

        {/* Title Area */}
        <div className="absolute left-[80px] top-[80px] z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-widest mb-3 w-fit"
          >
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span>The Engineering Bottleneck</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[58px] font-bold font-heading tracking-tight text-white mb-2"
          >
            The Brutal Cost of <span className="text-pres-accent">Stalled Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[20px] text-pres-text-muted max-w-[960px]"
          >
            Losing sleep over mounting engineering debt, 2 AM production fires, and 3-month hiring lags? Here is the real toll on your team:
          </motion.p>
        </div>

        {/* 3 Core Pain Point Cards */}
        <div className="absolute left-[80px] right-[80px] top-[260px] bottom-[160px] z-10 grid grid-cols-3 gap-8">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 + idx * 0.15 }}
                className={`p-8 rounded-3xl border ${item.color} backdrop-blur-md flex flex-col justify-between hover:border-pres-accent/50 transition-all hover:bg-pres-surface/90 shadow-xl group`}
              >
                <div>
                  {/* Top Row: Icon + Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-md ${item.badgeColor}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pres-text-dim uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  {/* Primary Metric Stat */}
                  <div className="mb-4">
                    <div className={`text-[46px] font-bold font-heading leading-tight ${item.statColor}`}>
                      {item.stat}
                    </div>
                    <div className="text-xs text-pres-text-dim uppercase tracking-wider font-semibold">
                      {item.statSub}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-heading text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[16px] text-pres-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs text-pres-text-dim">
                  <span>Founder & Tech Lead Agony</span>
                  <span className="text-red-400 font-semibold">Eliminated with RiseUp</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Solution Bridge Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-[40px] left-[80px] right-[80px] z-10 p-5 rounded-2xl bg-pres-surface/95 border border-pres-accent/30 backdrop-blur-md flex items-center justify-between shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-pres-accent/15 border border-pres-accent/30 flex items-center justify-center text-pres-accent shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[17px] font-bold font-heading text-white">
                The Cure: Bench-Ready Top 5% Engineers in 20 Minutes
              </p>
              <p className="text-sm text-pres-text-muted">
                Pre-vetted through a 7-stage technical gauntlet, backed by our Chief Software Engineer's architectural oversight.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-pres-accent hover:bg-pres-accent-glow text-pres-bg font-bold text-base transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(255,173,1,0.35)] shrink-0 cursor-pointer"
          >
            <span>See Pricing & Plans</span>
            <ArrowRight className="w-4 h-4 text-pres-bg" />
          </button>
        </motion.div>
      </div>
    </ScaledSlide>
  );
};
