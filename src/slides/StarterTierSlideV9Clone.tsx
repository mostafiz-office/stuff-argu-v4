import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  BadgeCheck,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { RocketAnimation } from "@/components/presentation/RocketAnimation";
import { presentationSound } from "@/lib/presentationSound";
import { fadeUp, scaleIn, staggerDelay } from "@/lib/presentationMotion";
import { UsdNote } from "@/components/presentation/UsdNote";
import {
  getUrlOffer,
  isDiscounted,
  formatOfferPrice,
  offerBadgeText,
} from "@/lib/urlOffers";
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

  // Batch 74: t1 URL offer for the Starter card (see src/lib/urlOffers.ts)
  const starterOffer = getUrlOffer("starter");
  const starterDiscounted = isDiscounted("starter");

  // FB-30 gate, Batch 72: the logo brand beat is REMOVED (owner: no
  // Next press should bring the Riseup Asia logo). Two beats remain:
  // Step 0 -> Step 1: Reveal Alim box (block slide advance)
  // Step 1 -> Step 2: Trigger rocket animation (block slide advance)
  // Step 2 -> advance: Unblock advance
  useEffect(() => {
    const tooltipText =
      gateStep === 0
        ? "Reveal bonus (1 of 2)"
        : gateStep === 1
        ? "Growth booster (2 of 2)"
        : "Continue";

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


  const results = [
    {
      metric: "80%",
      label: "Hiring effort saved",
      tooltip: "Save 80% hiring effort, skip 3 month recruiting cycles, start in 20 minutes",
      flat: false,
    },
    {
      metric: "160 hrs",
      label: "Pure dev time/M",
      tooltip: "160 dedicated hours per month fixing fragile vibe code and shipping roadmap features",
      flat: false,
    },
    {
      metric: "$2,500/M",
      label: "Chief Architect Bonus",
      tooltip: "Your Tier 1 architect bonus is worth $2,500/M, up to $10,000/M on higher tiers",
      flat: true,
    },
  ];

  const guarantees = [
    {
      icon: BadgeCheck,
      title: "1+ Year Industry Experience",
      desc: "A full year shipping in production.",
      tooltip:
        "One full year building real products with production teams. A real engineer, not a trainee.",
    },
    {
      icon: Clock,
      title: "Startup Benefit",
      desc: "Senior output at a startup price.",
      tooltip:
        "80% less hiring effort. Matched and shipping fast, no recruiting cycle.",
    },
    {
      icon: Shield,
      title: "Stop Waking at Night",
      desc: "Seniors keep production stable.",
      tooltip: "Architecture guardrails stop AI bugs before they reach production.",
    },
  ];

  return (
    <TooltipProvider>
      <ScaledSlide>
        <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
          <RocketAnimation
            active={rocketActive}
            flyingLabel="Growth booster"
            onComplete={() => setRocketActive(false)}
          />
          <SlideHeader />

          {/* Ambient center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

          {/* Flexbox Centered Main Content Wrapper */}
          <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col justify-center">
            {/* Header row */}
            <div className="mb-10">
              <motion.h1
                {...fadeUp(0)}
                className="pres-title font-bold font-heading tracking-tight text-white whitespace-nowrap"
              >
                Startup <span className="text-pres-accent">Offer</span>
              </motion.h1>

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

                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[20px] font-bold tracking-wider text-pres-text-dim uppercase">
                        Tier 1
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-pres-accent text-pres-bg pres-dark-safe-accent text-[18px] font-bold font-heading">
                        STARTER
                      </span>
                    </div>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="mb-5 rounded-2xl border border-pres-accent/30 bg-pres-accent/[0.07] px-5 py-4 cursor-pointer">
                          <p className="text-[26px] font-bold font-heading text-white leading-tight">
                            1+ Year Industry Experience
                          </p>
                          <p className="text-[20px] text-pres-text-muted mt-1">
                            3+ years coding · 1+ year in industry
                          </p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-[340px] p-4 text-left">
                        <div className="text-[16px] text-pres-text-muted">
                          Doing coding for 3 years, plus one full year shipping
                          real products with production teams. A real engineer,
                          not a trainee.
                        </div>
                      </TooltipContent>
                    </Tooltip>

                    {(starterDiscounted || starterOffer?.featured) && (
                      <div className="flex items-center gap-3 mb-2">
                        {starterDiscounted && (
                          <span className="text-[20px] text-pres-text-muted line-through">$1,900/M</span>
                        )}
                        <span className="rounded-full bg-pres-accent px-3 py-1 text-[15px] font-bold text-pres-bg pres-dark-safe-accent">
                          {offerBadgeText("starter")}
                        </span>
                      </div>
                    )}
                    <div className="flex items-baseline gap-2 mb-1">
                      <span
                        className={`text-[56px] font-medium font-heading leading-none ${
                          starterDiscounted ? "text-pres-accent" : "text-white"
                        }`}
                      >
                        {starterDiscounted ? formatOfferPrice(starterOffer!.amount!) : "$1,900"}
                      </span>
                      <span className="text-[26px] text-pres-text-muted font-medium">/M</span>
                    </div>

                    <div className="flex items-center gap-3 text-[18px] text-pres-text-dim mt-4 mb-5 font-medium">
                      <span className="px-3 py-1 rounded-lg border border-white/20 text-white/80 text-[20px] font-semibold">160 hrs/M</span>
                      <span>+ $2K onboarding deposit</span>
                    </div>

                    <div className="w-full h-[1px] bg-white/10 mb-3" />

                    {/* Batch 71: Tier 1 feature checklist restored (was on the
                        slide in the review video; dropped in the FB-29 rewrite) */}
                    <ul className="mb-5 space-y-2.5">
                      {[
                        "Fixes fragile vibe & AI code",
                        "Starts in 20 minutes",
                        "Works in your timezone & stack",
                        "Slack, GitHub & Jira access",
                      ].map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-[20px] text-white/85"
                        >
                          <CheckCircle className="w-5 h-5 shrink-0 text-pres-accent" />
                          {feature}
                        </li>
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
                          <span className="text-[20px] font-bold text-white uppercase tracking-wider">
                            Chief Architect Bonus Included
                          </span>
                          <Sparkles className="w-3.5 h-3.5 text-pres-accent" />
                        </div>
                        <p className="text-[20px] font-bold text-white mb-0.5">
                          Alim Ul Karim · 20+ Yr Enterprise Veteran
                        </p>
                        <p className="text-[20px] text-pres-text-muted mb-1.5">
                          Kickoff audit included · <span className="text-white">$2,500/M</span> value FREE
                        </p>
                        <div className="text-[20px] font-semibold text-pres-text-muted bg-white/5 px-2 py-0.5 rounded-lg text-center">
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
                          <div className="text-[56px] font-heading leading-none mb-3 font-medium text-white">
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
                      <Tooltip key={idx}>
                        <TooltipTrigger asChild>
                          <motion.div
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: staggerDelay(idx, 0.4, 0.07) }}
                            className="px-6 py-5 rounded-2xl bg-pres-surface/60 border border-white/10 hover:border-pres-accent/40 flex items-center gap-3.5 backdrop-blur-md cursor-pointer transition-colors"
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
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-[340px] p-4 text-left">
                          <div className="text-[16px] text-pres-text-muted">
                            {item.tooltip}
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>

                {/* Bottom Guarantee Banner */}
                <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-[18px] text-pres-text-dim">
                  <span>Backed by RISE ASIA LLC 14 Day Money Back Guarantee</span>
                  <span className="text-white/80 font-semibold font-mono">100% Risk Free</span>
                </div>
              </div>
            </div>
          </div>

          <UsdNote />


        {/* Bottom subtle accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
        </div>
      </ScaledSlide>
    </TooltipProvider>
  );
};
