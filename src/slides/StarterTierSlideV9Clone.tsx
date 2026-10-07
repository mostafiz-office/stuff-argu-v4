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
import { RocketAnimation } from "@/components/presentation/RocketAnimation";
import { presentationSound } from "@/lib/presentationSound";
import { fadeUp, scaleIn, staggerDelay } from "@/lib/presentationMotion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StarterTierSlideV9CloneProps {
  onNavigate?: (index: number) => void;
}

export const StarterTierSlideV9Clone: React.FC<StarterTierSlideV9CloneProps> = () => {
  const [showAlimUpsell, setShowAlimUpsell] = useState(false);
  const [rocketActive, setRocketActive] = useState(false);
  const [gateStep, setGateStep] = useState<number>(0);

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
          presentationSound.play("reveal");
          setShowAlimUpsell(true);
          setGateStep(1);
          return true; // handled / blocked advance
        }
        if (gateStep === 1) {
          presentationSound.play("launch");
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
      window.__slideNavigationGate = undefined;
    };
  }, [gateStep]);

  const features = [
    "Fixes fragile vibe & AI code",
    "Starts in 20 minutes",
        "Works in your timezone & stack",
    "Slack, GitHub & Jira access",
  ];

  const results = [
    {
      metric: "80%",
      label: "Hiring effort saved",
      tooltip: "Save 80% hiring effort — skip 3-month recruiting cycles, start in 20 minutes",
    },
    {
      metric: "160h",
      label: "Pure senior dev/mo",
      tooltip: "160 dedicated hours per month fixing fragile vibe-code and shipping roadmap features",
    },
    {
      metric: "$10,000",
      label: "Chief Architect Bonus",
      tooltip: "Alim's expert oversight valued at up to $10,000/mo ($625/hr standard consulting) — fixes AI hallucinations",
    },
  ];

  const guarantees = [
    {
      icon: Clock,
      title: "Save 80% Hiring Effort",
      desc: "Matched and shipping in 20 minutes.",
    },
    {
      icon: Shield,
      title: "Fix Fragile Vibe Code",
      desc: "Architecture guardrails stop AI bugs.",
    },
    {
      icon: BadgeCheck,
      title: "Stop Waking at Night",
      desc: "Seniors keep production stable.",
    },
  ];

  return (
    <TooltipProvider>
      <ScaledSlide>
        <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
          <SlideHeader />

          {/* Ambient center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

          {/* Flexbox Centered Main Content Wrapper */}
          <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col justify-center">
            {/* Header row with Title and Step Guide */}
            <div className="flex items-start justify-between gap-8 mb-10">
              <motion.h1
                {...fadeUp(0)}
                className="text-[72px] leading-[1.05] font-bold font-heading tracking-tight text-white whitespace-nowrap"
              >
                Zero Risk. <span className="text-pres-accent">All Upside.</span>
                <span className="block text-[26px] font-normal font-sans text-pres-text-muted tracking-normal mt-3">No contracts. No hiring risk. Just results.</span>
              </motion.h1>

              {/* Interactive Step Guide Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="hidden whitespace-nowrap mt-[40px] flex items-center gap-3 px-4.5 py-2 rounded-2xl bg-pres-surface/90 border border-pres-accent/40 shadow-[0_0_30px_rgba(255,173,1,0.2)] backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pres-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pres-accent"></span>
                  </span>
                  <span className="text-[18px] font-bold font-heading uppercase tracking-wider text-pres-accent">
                    {gateStep === 0 && "Step 1 of 2: Interactive Perk"}
                    {gateStep === 1 && "Step 2 of 2: Booster Rocket"}
                    {gateStep === 2 && "Perks Unlocked"}
                  </span>
                </div>
                <div className="h-3.5 w-[1px] bg-white/20" />
                <span className="text-[18px] font-medium text-white flex items-center gap-1.5">
                  {gateStep === 0 && (
                    <>
                      👉 Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-pres-accent font-mono text-[18px] font-bold">Next ▶</kbd> to reveal Chief Architect Bonus card
                    </>
                  )}
                  {gateStep === 1 && (
                    <>
                      🚀 Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-pres-accent font-mono text-[18px] font-bold">Next ▶</kbd> to launch Rocket &amp; activate Guarantee
                    </>
                  )}
                  {gateStep === 2 && (
                    <>
                      ✅ All perks active! Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-green-400 font-mono text-[18px] font-bold">Next ▶</kbd> to advance →
                    </>
                  )}
                </span>
              </motion.div>
            </div>

            {/* Main 2-Column Content */}
            <div className="flex gap-10 w-full items-start">
              {/* Left Column: Pricing Card (w: 520px) */}
              <motion.div
                {...fadeUp(0.18)}
                className="w-[600px] flex-shrink-0"
              >
                <div>
                  <div className="relative p-9 rounded-3xl bg-pres-surface/90 border border-pres-accent/40 shadow-2xl backdrop-blur-md overflow-hidden">
                    {/* Contained Rocket Animation */}
                    <RocketAnimation
                      active={rocketActive}
                      flyingLabel="Growth booster"
                      profile="compact"
                      onComplete={() => setRocketActive(false)}
                    />

                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[20px] font-bold tracking-wider text-pres-text-dim uppercase">
                        Tier 1
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-pres-accent text-pres-bg pres-dark-safe-accent text-[18px] font-bold font-heading">
                        STARTER
                      </span>
                    </div>

                    <p className="text-[22px] text-pres-accent mb-5">
                      3+ Years Coding · 1+ Year Industry
                    </p>

                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[64px] font-bold font-heading text-white leading-none">
                        $1,900
                      </span>
                      <span className="text-[26px] text-pres-text-muted font-medium">/mo</span>
                    </div>

                    <div className="flex items-center gap-3 text-[18px] text-pres-text-dim mt-4 mb-5 font-medium">
                      <span className="px-3 py-1 rounded-lg border border-pres-accent/40 text-pres-accent text-[20px] font-semibold">160 hrs/month</span>
                      <span>+ $2K onboarding deposit</span>
                    </div>

                    <div className="w-full h-[1px] bg-white/10 mb-3" />

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {features.map((feature, fIdx) => (
                        <motion.li
                          key={fIdx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: staggerDelay(fIdx, 0.28, 0.045) }}
                          className="flex items-center gap-2.5"
                        >
                          <CheckCircle className="w-6 h-6 text-pres-accent shrink-0" />
                          <span className="text-[22px] text-pres-text-muted">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Alim Upsell Card (Interactive Reveal) */}
                    {showAlimUpsell ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="p-3.5 rounded-2xl bg-amber-500/10 border border-pres-accent/40 backdrop-blur-md"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[20px] font-bold text-pres-accent uppercase tracking-wider">
                            Chief Architect Bonus Included
                          </span>
                          <Sparkles className="w-3.5 h-3.5 text-pres-accent" />
                        </div>
                        <p className="text-[20px] font-bold text-white mb-0.5">
                          Alim Ul Karim — 20+ Yr Enterprise Veteran
                        </p>
                        <p className="text-[20px] text-pres-text-muted mb-1.5">
                          Kickoff audit included · <strong className="text-pres-accent font-bold">$2,500/mo</strong> value FREE
                        </p>
                        <div className="text-[20px] font-semibold text-pres-accent/90 bg-pres-accent/15 px-2 py-0.5 rounded-lg text-center">
                          Upgrade to Tier 2 or 3 for ongoing weekly architecture hours
                        </div>
                      </motion.div>
                    ) : (
                      <div
                        onClick={() => setShowAlimUpsell(true)}
                        className="p-2.5 rounded-xl bg-white/5 border border-dashed border-white/15 text-center text-[18px] text-pres-text-dim hover:text-pres-accent hover:border-pres-accent/30 cursor-pointer transition-colors"
                      >
                        Click or press Next to reveal Chief Architect Bonus
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Metrics, Guarantees, Urgency */}
              <div className="flex-1 flex flex-col justify-start gap-5">
                {/* 3 Result Metrics with Tooltips */}
                <div className="grid grid-cols-3 gap-5">
                  {results.map((res, idx) => (
                    <Tooltip key={idx}>
                      <TooltipTrigger asChild>
                        <motion.div
                          {...scaleIn(staggerDelay(idx, 0.22, 0.07))}
                          className="py-7 px-4 rounded-2xl bg-pres-surface/80 border border-white/10 hover:border-pres-accent/40 backdrop-blur-md transition-all cursor-pointer group text-center shadow-lg"
                        >
                          <div className="text-[56px] font-bold font-heading text-pres-accent metric-glow leading-none mb-3">
                            {res.metric}
                          </div>
                          <div className="text-[20px] font-medium text-white/80">
                            {res.label}
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-[320px] p-3 text-center text-[16px]">
                        {res.tooltip}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>

                {/* 3 Guarantees */}
                <div className="space-y-4">
                  {guarantees.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: staggerDelay(idx, 0.4, 0.07) }}
                        className="px-6 py-5 rounded-2xl bg-pres-surface/60 border border-white/10 flex items-center gap-3.5 backdrop-blur-md"
                      >
                        <div className="w-12 h-12 rounded-xl bg-pres-accent/15 border border-pres-accent/25 flex items-center justify-center text-pres-accent shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-[30px] font-bold font-heading text-white">
                            {item.title}
                          </h4>
                          <p className="text-[22px] text-pres-text-muted mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom Guarantee Banner */}
                <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-[18px] text-pres-text-dim">
                  <span>Backed by RiseUp 14-Day Money-Back Guarantee</span>
                  <span className="text-pres-accent font-semibold font-mono">100% Risk Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom subtle accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
        </div>
      </ScaledSlide>
    </TooltipProvider>
  );
};
