import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TierDetailSlide } from "@/slides/TierDetailSlide";
import { TierPlanDetail } from "@/slides/TierPlanDetail";
import { motion } from "framer-motion";
import { Award, Check, ArrowLeft, Columns3 } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, staggerDelay } from "@/lib/presentationMotion";
import { TIER_DIFFERENTIATORS, TierKey } from "@/data/tierFeatures";
import {
  getUrlOffer,
  isDiscounted,
  anyUrlHighlight,
  formatOfferPrice,
  offerBadgeText,
} from "@/lib/urlOffers";
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
      meaning: "A full time developer who clears your backlog.",
      experience: "4+ Years",
      price: "$4,299",
      priceSuffix: "/M",
      hours: "160 hrs/M",
      badge: null,
      highlight: false,
      position: "left" as const,
      features: [
        "Fixes fragile vibe code & debt",
        "Saves 80% hiring effort",
        "Daily standups & Slack sync",
      ],
    },
    {
      name: "Tier 3.A Skilled",
      key: "skilled" as TierKey,
      meaning: "A mentor level developer with architecture oversight.",
      experience: "6+ Years",
      price: "$6,800 to $8,000",
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
      experience: "8+ Years",
      price: "$7,500 to $10,000",
      priceSuffix: "/M",
      hours: "160 hrs/M",
      badge: null,
      highlight: false,
      position: "right" as const,
      features: [
        "CTO level architecture oversight",
        "Audits complex AI systems",
        "24/7 priority SLA",
      ],
    },
  ];

  // Batch 74: URL offers (see src/lib/urlOffers.ts). effectiveTiers carries
  // the display price (offer price when discounted), the struck real price,
  // and the featured/badge state after the URL highlight rules. Without
  // parameters this is exactly the deck's normal state.
  const urlHighlightActive = anyUrlHighlight();
  const effectiveTiers = tiers.map((tier) => {
    const offer = getUrlOffer(tier.key);
    const discounted = isDiscounted(tier.key);
    const featured = urlHighlightActive ? !!offer?.featured : tier.highlight;
    return {
      ...tier,
      price: discounted ? formatOfferPrice(offer!.amount!) : tier.price,
      wasPrice: discounted ? tier.price : null,
      offerBadge: discounted ? offerBadgeText(tier.key) : null,
      highlight: featured,
      badge: discounted
        ? tier.badge
        : urlHighlightActive
          ? (offer?.badge ?? (offer?.featured ? tier.badge : null))
          : tier.badge,
    };
  });

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
          {/* Batch 83 (owner: make pricing like the v1 deck's slide 2):
              v1's subline above the grid; 160 hrs/M is this deck's own
              data, already shown on every card's hours pill. */}
          <p className="text-center text-[18px] text-pres-text-muted mb-10">
            All plans include 160 dedicated hours/month. Scale anytime.
          </p>
          {/* 3-Column Tier Cards Grid */}
          <TooltipProvider>
          <div className="grid grid-cols-3 gap-8 w-full">
            {effectiveTiers.map((tier, idx) => (
              <div key={idx} className="flex flex-col">
                <Tooltip>
                <TooltipTrigger asChild>
                <motion.div
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${tier.name} details`}
                  onClick={(e) => { e.stopPropagation(); setOverlay(idx); }}
                  // Batch 65 (owner): hover timing copied from
                  // present-v1's card system (.player-card): EVERY
                  // hover property — lift, border, background,
                  // shadow — runs on ONE 450ms cubic-bezier
                  // (0.22, 1, 0.36, 1) clock, in and out. Before,
                  // the lift took 0.35s while border/shadow snapped
                  // in 200ms, which felt fast and unpremium.
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: staggerDelay(idx, 0.3, 0.12), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
                  whileTap={{ scale: 0.99 }}
                  // Batch 83: card chrome transplanted from the v1 deck's
                  // pricing slide (same 3 tiers, same price family):
                  // rounded-2xl, 28px/24px padding, 2px borders, gradient
                  // wash on the featured card, opaque surface otherwise.
                  // Hover lift + 450ms clock (Batch 65) and the View
                  // details reveal are this deck's own systems, kept.
                  className={`group cursor-pointer relative flex flex-col h-full p-7 px-6 rounded-2xl border-2 overflow-hidden transition-[border-color,background-color,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-2xl ${
                    tier.highlight
                      ? "bg-[linear-gradient(180deg,hsl(var(--pres-accent)/0.1)_0%,hsl(var(--pres-bg-surface))_100%)] border-pres-accent/40 shadow-[0_0_35px_rgba(255,173,1,0.2)]"
                      : "bg-pres-surface border-white/10 hover:border-pres-accent hover:bg-pres-surface/90 hover:shadow-[0_0_35px_hsl(var(--pres-accent)/0.25)]"
                  }`}
                >
                  {/* Best Value Badge — v1 corner badge: flush top-right,
                      solid amber, dark text, small caps tracking. */}
                  {tier.badge && (
                    <div className="absolute top-0 right-0 px-4 py-2 rounded-bl-xl bg-pres-accent text-pres-bg pres-dark-safe-accent text-[14px] font-bold tracking-[0.05em] flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 fill-current" />
                      <span>{tier.badge}</span>
                    </div>
                  )}

                  <div className="flex flex-col">
                    {/* Tier Name — v1: small uppercase dim name */}
                    <h3 className="text-[16px] font-semibold uppercase tracking-[0.12em] text-pres-text-dim">
                      {tier.name}
                    </h3>

                    {/* Experience — v1: amber line under the name */}
                    <p className="text-[18px] font-medium text-pres-accent mt-2 leading-[1.3]">
                      {tier.experience} Experience
                    </p>

                    {/* Price — v1 size/weight, this deck's price face kept */}
                    <div className="flex items-baseline gap-1 mt-5">
                      <span
                        className={`font-price text-[48px] font-bold leading-none ${
                          tier.wasPrice ? "text-pres-accent" : "text-white"
                        }`}
                      >
                        {tier.price}
                      </span>
                      <span className="text-[20px] text-pres-text-dim font-medium">
                        {tier.priceSuffix}
                      </span>
                    </div>

                    {/* Batch 74: URL offer area — struck real price +
                        offer badge, only when this tier is discounted
                        via the link (supersedes the FB-19 config render) */}
                    {tier.wasPrice && (
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-[22px] text-pres-text-muted line-through">
                          {tier.wasPrice}
                          {tier.priceSuffix}
                        </span>
                        <span className="rounded-full bg-pres-accent px-3 py-1 text-[16px] font-bold text-pres-bg pres-dark-safe-accent">
                          {tier.offerBadge}
                        </span>
                      </div>
                    )}

                    {/* Hours Badge — v1 text-only subtle pill */}
                    <div className="mt-2 inline-flex items-center rounded-lg px-3 py-1.5 bg-pres-accent/10 border border-pres-accent/20 text-pres-accent text-[16px] font-semibold self-start">
                      <span>{tier.hours}</span>
                    </div>

                    {/* FB-18: differentiator focus block — the "why this price" */}
                    <ul className="mt-3 space-y-2.5 flex-1">
                      {TIER_DIFFERENTIATORS[tier.key].map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3">
                          <Check className="mt-[3px] h-[18px] w-[18px] shrink-0 text-pres-accent" />
                          <span className="text-[18px] text-pres-text-muted leading-[1.4]">
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
                    <div className="mt-6 font-heading text-[20px] font-semibold text-pres-accent opacity-0 translate-y-1 transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0">
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
              tiers={effectiveTiers}
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
