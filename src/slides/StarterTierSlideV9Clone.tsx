import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Shield,
  Clock,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { HoverVideoPreview } from "@/components/presentation/HoverVideoPreview";
import { RocketAnimation } from "@/components/presentation/RocketAnimation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import "@/types/navigation";

interface StarterTierSlideV9CloneProps {
  onNavigate?: (index: number) => void;
}

export const StarterTierSlideV9Clone: React.FC<StarterTierSlideV9CloneProps> = () => {
  const [showAlimUpsell, setShowAlimUpsell] = useState(false);
  const [rocketActive, setRocketActive] = useState(false);
  const [gateStep, setGateStep] = useState(0);

  // 3-step navigation gate with dynamic UX tooltip:
  // Step 0 -> Step 1: Reveal Alim box (block slide advance)
  // Step 1 -> Step 2: Trigger rocket animation (block slide advance)
  // Step 2 -> advance: Unblock advance
  useEffect(() => {
    const tooltipText =
      gateStep === 0
        ? "👉 Press Next to reveal Chief Architect Bonus (1/2)"
        : gateStep === 1
        ? "🚀 Press Next to launch Rocket & Guarantee (2/2)"
        : "✅ Perks unlocked! Press Next to continue →";

    window.__slideNavigationGate = {
      trigger: () => {
        if (gateStep === 0) {
          setShowAlimUpsell(true);
          setGateStep(1);
          return true; // handled / blocked advance
        }
        if (gateStep === 1) {
          setRocketActive(true);
          setGateStep(2);
          return true; // handled / blocked advance
        }
        return false; // let presentation advance
      },
      tooltip: tooltipText,
      step: gateStep,
      totalSteps: 2,
    };

    return () => {
      delete window.__slideNavigationGate;
    };
  }, [gateStep]);

  const features = [
    "3+ yrs coding, 1+ yr industry exp",
    "160 dedicated hours/month",
    "Tech-stack specific developer",
    "Task guidance from senior lead",
    "Daily standups & Slack access",
    "Weekly progress reports",
  ];

  const results = [
    {
      metric: "3x",
      label: "Faster than hiring",
      tooltip: "Skip 3-month hiring cycles — your developer starts in 20 minutes",
    },
    {
      metric: "160h",
      label: "Pure dev time/mo",
      tooltip: "160 dedicated hours per month, fully focused on your project",
    },
    {
      metric: "$10,000",
      label: "Expert bonus value",
      tooltip: "Alim's expert oversight valued at up to $10,000/mo ($625/hr standard consulting) — architecture review included",
    },
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Zero Risk",
      desc: "Cancel anytime. No lock-in contracts.",
    },
    {
      icon: Clock,
      title: "20 Min Onboarding",
      desc: "Developer matched & shipping in under an hour.",
    },
    {
      icon: BadgeCheck,
      title: "Top 5% Engineers",
      desc: "Rigorously vetted. Only the best pass.",
    },
  ];

  return (
    <TooltipProvider>
      <ScaledSlide>
        <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans">
          <SlideHeader />

          {/* Ambient center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

          {/* Title Area & Interactive Step Guide */}
          <div className="absolute left-[80px] right-[80px] top-[65px] z-10 flex items-start justify-between">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[48px] font-bold font-heading tracking-tight text-white mb-1.5"
              >
                Stop Losing Sleep Over <span className="text-pres-accent">Engineering Debt</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-[18px] text-pres-text-muted"
              >
                One dedicated senior engineer to eliminate fragile bugs, unblock your backlog, and give you your nights back.
              </motion.p>
            </div>

            {/* Interactive Step Guide Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 px-4.5 py-2 rounded-2xl bg-pres-surface/90 border border-pres-accent/40 shadow-[0_0_30px_rgba(255,173,1,0.2)] backdrop-blur-md mt-1"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pres-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pres-accent"></span>
                </span>
                <span className="text-[11px] font-bold font-heading uppercase tracking-wider text-pres-accent">
                  {gateStep === 0 && "Step 1 of 2: Interactive Perk"}
                  {gateStep === 1 && "Step 2 of 2: Booster Rocket"}
                  {gateStep === 2 && "Perks Unlocked"}
                </span>
              </div>
              <div className="h-3.5 w-[1px] bg-white/20" />
              <span className="text-xs font-medium text-white flex items-center gap-1.5">
                {gateStep === 0 && (
                  <>
                    👉 Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-pres-accent font-mono text-[10px] font-bold">Next ▶</kbd> to reveal Chief Architect Bonus card
                  </>
                )}
                {gateStep === 1 && (
                  <>
                    🚀 Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-pres-accent font-mono text-[10px] font-bold">Next ▶</kbd> to launch Rocket &amp; activate Guarantee
                  </>
                )}
                {gateStep === 2 && (
                  <>
                    ✅ All perks active! Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-green-400 font-mono text-[10px] font-bold">Next ▶</kbd> to advance →
                  </>
                )}
              </span>
            </motion.div>
          </div>

          {/* Main 2-Column Content - Strict 145px clearance ending at bottom-[145px] */}
          <div className="absolute left-[80px] right-[80px] top-[185px] bottom-[145px] z-10 flex gap-10">
            {/* Left Column: Pricing Card (w: 540px) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="w-[540px] flex-shrink-0 flex flex-col justify-between"
            >
              <HoverVideoPreview videoId="uveR9C5CgSY" position="right" className="h-full">
                <div className="relative h-full p-7 rounded-3xl bg-pres-surface/90 border border-pres-accent/40 shadow-2xl backdrop-blur-md flex flex-col justify-between overflow-hidden">
                  {/* Contained Rocket Animation */}
                  <RocketAnimation
                    active={rocketActive}
                    flyingLabel="Growth booster"
                    profile="compact"
                    onComplete={() => setRocketActive(false)}
                  />

                  {/* Card Header */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold tracking-wider text-pres-accent uppercase">
                        Tier 1
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-pres-accent text-pres-bg pres-dark-safe-accent text-[11px] font-bold font-heading">
                        STARTER
                      </span>
                    </div>

                    <p className="text-[11px] text-pres-text-dim uppercase tracking-wider mb-2.5">
                      3+ Years Coding · 1+ Year Industry
                    </p>

                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="text-[48px] font-bold font-heading text-white leading-none">
                        $1,900
                      </span>
                      <span className="text-lg text-pres-text-muted font-medium">/mo</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs text-pres-text-dim mb-4 font-medium">
                      <span>160 dedicated hours/month</span>
                      <span>•</span>
                      <span>+ $2K onboarding deposit</span>
                    </div>

                    <div className="w-full h-[1px] bg-white/10 mb-4" />

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-4">
                      {features.map((feature, fIdx) => (
                        <motion.li
                          key={fIdx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: 0.35 + fIdx * 0.05 }}
                          className="flex items-center gap-2.5"
                        >
                          <CheckCircle className="w-4 h-4 text-pres-accent shrink-0" />
                          <span className="text-[14px] text-pres-text-muted">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Alim Upsell Card (Interactive Reveal) */}
                  {showAlimUpsell ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="p-3.5 rounded-2xl bg-amber-500/10 border border-pres-accent/40 backdrop-blur-md"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-pres-accent uppercase tracking-wider">
                          Chief Architect Bonus Included
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-pres-accent" />
                      </div>
                      <p className="text-xs font-bold text-white mb-0.5">
                        Alim Ul Karim — 20+ Yr Enterprise Veteran
                      </p>
                      <p className="text-[11px] text-pres-text-muted mb-1.5">
                        4 hrs/wk · $625/hr standard consulting · <strong className="text-pres-accent font-bold">$10,000/mo</strong> value
                      </p>
                      <div className="text-[10px] font-semibold text-pres-accent/90 bg-pres-accent/15 px-2 py-0.5 rounded-lg text-center">
                        Kickoff audit included · Upgrade to Tier 2 or 3 for ongoing weekly hours
                      </div>
                    </motion.div>
                  ) : (
                    <div
                      onClick={() => setShowAlimUpsell(true)}
                      className="p-2.5 rounded-xl bg-white/5 border border-dashed border-white/15 text-center text-xs text-pres-text-dim hover:text-pres-accent hover:border-pres-accent/30 cursor-pointer transition-colors"
                    >
                      Click or press Next to reveal Alim Expert Bonus
                    </div>
                  )}
                </div>
              </HoverVideoPreview>
            </motion.div>

            {/* Right Column: Metrics, Guarantees, Urgency */}
            <div className="flex-1 flex flex-col justify-between py-1">
              {/* 3 Result Metrics with Tooltips */}
              <div className="grid grid-cols-3 gap-5">
                {results.map((res, idx) => (
                  <Tooltip key={idx}>
                    <TooltipTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 18,
                          delay: 0.35 + idx * 0.1,
                        }}
                        className="p-5 rounded-2xl bg-pres-surface/80 border border-white/10 hover:border-pres-accent/40 backdrop-blur-md transition-all cursor-pointer group text-center"
                      >
                        <div className="text-[44px] font-bold font-heading text-pres-accent metric-glow leading-none mb-1.5">
                          {res.metric}
                        </div>
                        <div className="text-sm font-semibold text-white/90">
                          {res.label}
                        </div>
                        <span className="text-[10px] text-pres-text-dim block mt-1 group-hover:text-pres-accent transition-colors">
                          Hover for detail
                        </span>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-[280px] p-3 text-center text-xs">
                      {res.tooltip}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>

              {/* 3 Guarantees */}
              <div className="space-y-3">
                {guarantees.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                      className="p-4 rounded-2xl bg-pres-surface/60 border border-white/10 flex items-center gap-4 backdrop-blur-md"
                    >
                      <div className="w-10 h-10 rounded-xl bg-pres-accent/15 border border-pres-accent/25 flex items-center justify-center text-pres-accent shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold font-heading text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs text-pres-text-muted mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-pres-text-dim">
                <span>Backed by RiseUp 14-Day Money-Back Guarantee</span>
                <span className="text-pres-accent font-semibold font-mono">100% Risk Free</span>
              </div>
            </div>
          </div>
        </div>
      </ScaledSlide>
    </TooltipProvider>
  );
};
