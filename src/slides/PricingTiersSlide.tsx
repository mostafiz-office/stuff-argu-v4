import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TierDetailSlide } from "@/slides/TierDetailSlide";
import { TierPlanDetail } from "@/slides/TierPlanDetail";
import { motion } from "framer-motion";
import { Award, Clock, ArrowLeft, Columns3 } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, staggerDelay } from "@/lib/presentationMotion";
import { TIER_DIFFERENTIATORS, TierKey } from "@/data/tierFeatures";
import { PRICING_OFFER } from "@/lib/pricingConfig";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UsdNote } from "@/components/presentation/UsdNote";

interface PricingTiersSlideProps {
  onNavigate?: (index: number) => void;
}

export const PricingTiersSlide: React.FC<PricingTiersSlideProps> = () => {
  const [overlay, setOverlay] = useState<null | "compare" | number>(null);
  const compareOpen = overlay !== null;
  const setCompareOpen = (open: boolean) => setOverlay(open ? "compare" : null);

  useEffect(() => {
    window.__comparisonOpen = compareOpen;
    if (!compareOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setCompareOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.__comparisonOpen = false;
    };
  }, [compareOpen]);

  const tiers = [
    {
      name: "Tier 2 Growth",
      key: "growth" as TierKey,
      meaning: "A full-time developer who clears your backlog.",
      experience: "2-3+ Years",
      price: "$4,299",
      priceSuffix: "/M",
      hours: "160 hrs/M",
      badge: null,
      highlight: false,
      position: "left" as const,
      features: [
        "Fixes fragile vibe-code & debt",
        "Saves 80% hiring effort",
        "Daily standups & Slack sync",
      ],
    },
    {
      name: "Tier 3.A Skilled",
      key: "skilled" as TierKey,
      meaning: "A mentor-grade developer with architecture oversight.",
      experience: "7-15+ Years",
      price: "$6.8K–$8K",
      priceSuffix: "/M",
      hours: "160 hrs/M",
      badge: "BEST VALUE",
      highlight: true,
      position: "center" as const,
      features: [
        "Fixes AI & fragile logic",
        "Ready in 20 minutes",
        "Deep stack leadership",
      ],
    },
    {
      name: "Tier 3.B Leadership",
      key: "leadership" as TierKey,
      meaning: "A tech lead managing up to 15 engineers.",
      experience: "7-15+ Years",
      price: "$7.5K–$10K",
      priceSuffix: "/M",
      hours: "160 hrs/M",
      badge: null,
      highlight: false,
      position: "right" as const,
      features: [
        "CTO-level architecture oversight",
        "Audits complex AI systems",
        "24/7 priority SLA",
      ],
    },
  ];

  return (
    <>
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* 45 degree repeating line texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 18px, hsl(var(--pres-accent) / 0.08) 18px, hsl(var(--pres-accent) / 0.08) 19px)",
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

        {/* Flexbox Centered Main Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col justify-center">
          {/* 3-Column Tier Cards Grid */}
          <TooltipProvider>
          <div className="grid grid-cols-3 gap-10 w-full">
            {tiers.map((tier, idx) => (
              <div key={idx} className="flex flex-col">
                <Tooltip>
                <TooltipTrigger asChild>
                <motion.div
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${tier.name} details`}
                  onClick={(e) => { e.stopPropagation(); setOverlay(idx); }}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: staggerDelay(idx, 0.22, 0.1), duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
                  whileTap={{ scale: 0.99 }}
                  className={`group cursor-pointer relative flex flex-col h-full p-12 rounded-3xl border transition-[border-color,background-color,box-shadow] duration-200 backdrop-blur-md shadow-2xl ${
                    tier.highlight
                      ? "bg-pres-surface/95 border-pres-accent shadow-[0_0_35px_rgba(255,173,1,0.2)]"
                      : "bg-pres-surface/75 border-white/10 hover:border-pres-accent hover:bg-pres-surface/90 hover:shadow-[0_0_35px_hsl(var(--pres-accent)/0.25)]"
                  }`}
                >
                  {/* FB-15: subtle dot texture */}
                  <div aria-hidden className="tier-card-dots pointer-events-none absolute inset-0 rounded-3xl" />

                  {/* Best Value Badge */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 right-7 px-3.5 py-1 rounded-full bg-pres-accent text-pres-bg pres-dark-safe-accent text-[18px] font-bold font-heading flex items-center gap-1.5 shadow-lg">
                      <Award className="w-3.5 h-3.5 fill-current" />
                      <span>{tier.badge}</span>
                    </div>
                  )}

                  <div className="flex flex-col">
                    {/* Tier Name */}
                    <h3 className="text-[36px] font-bold font-heading text-white mb-1">
                      {tier.name}
                    </h3>

                    {/* Experience */}
                    <p className="text-[18px] font-medium text-pres-text-dim uppercase tracking-wider mb-6">
                      {tier.experience} Experience
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-5">
                      <span className="font-price text-[44px] font-medium text-white leading-none">
                        {tier.price}
                      </span>
                      <span className="text-[22px] text-pres-text-muted font-medium">
                        {tier.priceSuffix}
                      </span>
                    </div>

                    {/* FB-19: offer area — only renders when an offer is active */}
                    {PRICING_OFFER.active && PRICING_OFFER.wasPrices[tier.key] && (
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-[22px] text-pres-text-muted line-through">
                          {PRICING_OFFER.wasPrices[tier.key]}/M
                        </span>
                        <span className="rounded-full bg-pres-accent px-3 py-1 text-[16px] font-bold text-pres-bg pres-dark-safe-accent">
                          {PRICING_OFFER.badgeText}
                        </span>
                      </div>
                    )}

                    {/* Hours Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pres-accent/10 border border-pres-accent/20 text-pres-accent text-[20px] font-semibold mb-6 self-start">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{tier.hours}</span>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-white/10 mb-6" />

                    {/* FB-18: differentiator focus block — the "why this price" */}
                    <ul className="space-y-4">
                      {TIER_DIFFERENTIATORS[tier.key].map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3">
                          <span className="mt-[10px] h-[8px] w-[8px] shrink-0 rounded-full bg-pres-accent" />
                          <span className="text-[24px] font-medium text-white leading-snug">
                            {d.highlight ? (
                              <>
                                {d.text.split(d.highlight)[0]}
                                <span className="text-pres-accent font-semibold">{d.highlight}</span>
                                {d.text.split(d.highlight)[1]}
                              </>
                            ) : (
                              d.text
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 font-heading text-[20px] font-semibold text-pres-accent opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                      View details →
                    </div>
                  </div>
                </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-[300px] p-4 text-left">
                  <div className="font-heading text-[18px] font-bold text-white">{tier.name}</div>
                  <div className="mt-1 text-[15px] text-pres-text-muted">{tier.meaning}</div>
                  <div className="mt-2 text-[15px] text-white">{tier.price}{tier.priceSuffix}</div>
                </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
          </TooltipProvider>

          <motion.div {...fadeUp(0.42)} className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setCompareOpen(true); }}
              className="inline-flex items-center gap-3 rounded-full border-2 border-pres-accent px-10 py-4 font-heading text-[26px] font-bold text-pres-accent transition-colors duration-200 hover:bg-pres-accent hover:text-pres-bg"
            >
              <Columns3 className="h-7 w-7" />
              Compare pricing
            </button>
          </motion.div>
        </div>

        <UsdNote />

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
    {compareOpen &&
      createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={overlay === "compare" ? "Features comparison" : "Plan details"}
          className="fixed inset-0 z-[200] bg-pres-bg"
          onClick={(e) => e.stopPropagation()}
        >
          {overlay === "compare" ? (
            <TierDetailSlide />
          ) : (
            <TierPlanDetail
              tiers={tiers}
              index={overlay as number}
              onSelect={(i) => setOverlay(i)}
              onCompare={() => setOverlay("compare")}
            />
          )}
          <button
            type="button"
            autoFocus
            onClick={() => setCompareOpen(false)}
            className="fixed right-6 top-5 z-[210] inline-flex items-center gap-2 rounded-full border border-pres-accent/60 bg-pres-surface/90 px-5 py-2.5 font-heading text-[16px] font-semibold text-pres-accent hover:bg-pres-accent hover:text-pres-bg"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to pricing
          </button>
        </div>,
        document.body
      )}
    </>
  );
};
