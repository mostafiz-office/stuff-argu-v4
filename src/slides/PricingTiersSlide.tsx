import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TierDetailSlide } from "@/slides/TierDetailSlide";
import { TierPlanDetail } from "@/slides/TierPlanDetail";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ArrowLeft } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, presentationEase, staggerDelay } from "@/lib/presentationMotion";
import { TierKey } from "@/data/tierFeatures";
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
      name: "Tier 2 — Growth",
      key: "growth" as TierKey,
      meaning: "A full time developer who clears your backlog.",
      experience: "2-3+ Years",
      price: "$4,299",
      priceSuffix: "/mo",
      hours: "160 hrs/month",
      badge: null,
      highlight: false,
      position: "left" as const,
      features: [
        "Fluent, autonomous coder",
        "Breaks down & delegates tasks",
        "Full sprint participation",
        "Daily standups & Slack access",
      ],
    },
    {
      name: "Tier 3.A — Skilled",
      key: "skilled" as TierKey,
      meaning: "A mentor level developer with architecture oversight.",
      experience: "7-15+ Years",
      price: "$6,800–$8,000",
      priceSuffix: "/mo",
      hours: "160 hrs/month",
      badge: "BEST VALUE",
      highlight: true,
      position: "center" as const,
      features: [
        "Best-in-class developer",
        "Deep expertise in their stack",
        "Manages 3-5 team members",
        "Architecture & code quality",
      ],
    },
    {
      name: "Tier 3.B — Leadership",
      key: "leadership" as TierKey,
      meaning: "A tech lead managing up to 15 engineers.",
      experience: "7-15+ Years",
      price: "$7,500–$10,000",
      priceSuffix: "/mo",
      hours: "160 hrs/month",
      badge: null,
      highlight: false,
      position: "right" as const,
      features: [
        "Project management focus",
        "Manages up to 15 developers",
        "CTO-level strategic oversight",
        "24/7 SLA & priority support",
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

        {/* 45 degree repeating line texture — v1 exact: 28px, 3% */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.03) 28px, hsl(var(--pres-accent) / 0.03) 29px)",
          }}
        />


        {/* Batch 100 (owner: slide 8 exactly like v1 slide 2):
              headline + subline + grid all absolutely positioned at
              v1's exact coordinates. Full AI-executable spec:
              spec/feedback/ai-plan-slide-8-exact-match.md */}
        <motion.h1
          {...fadeUp(0)}
          className="absolute left-[80px] top-[90px] z-10 font-heading text-[52px] font-bold text-white"
        >
          Choose Your{" "}<span className="text-pres-accent">Plan</span>
        </motion.h1>
        <motion.p
          {...fadeUp(0.15)}
          className="absolute left-[80px] top-[178px] z-10 text-[18px] text-pres-text-muted"
        >
          All plans include 160 dedicated hours/month. Scale anytime.
        </motion.p>
          {/* 3-Column Tier Cards Grid */}
          <TooltipProvider>
          <div className="absolute left-[80px] right-[80px] top-[240px] bottom-[80px] z-10 grid grid-cols-3 gap-8">
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
                  whileTap={{ scale: 0.99 }}
                  // Batch 83: card chrome transplanted from the v1 deck's
                  // pricing slide (same 3 tiers, same price family):
                  // rounded-2xl, 28px/24px padding, 2px borders, gradient
                  // wash on the featured card, opaque surface otherwise.
                  // Hover lift + 450ms clock (Batch 65) and the View
                  // details reveal are this deck's own systems, kept.
                  className={`cursor-pointer relative flex flex-col h-full p-7 px-6 rounded-2xl border-2 overflow-hidden transition-[border-color,background-color,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-2xl ${
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
                        className={`font-heading font-bold leading-none ${
                          tier.price.length > 8 ? "text-[36px]" : "text-[48px]"
                        } ${
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
                    <div
                      className="mt-2 inline-flex items-center rounded-lg px-3 py-1.5 text-pres-accent text-[16px] font-semibold self-start"
                      style={{
                        background: "hsl(var(--pres-accent) / 0.08)",
                        border: "1px solid hsl(var(--pres-accent) / 0.15)",
                      }}
                    >
                      <span>{tier.hours}</span>
                    </div>

                    {/* Batch 100: v1's card feature lists (card-local).
                        The shared differentiators stay untouched for
                        the detail views' focus blocks. */}
                    <ul className="mt-3 space-y-2.5 flex-1">
                      {tier.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-[4px] h-[22px] w-[22px] shrink-0 text-pres-accent" />
                          <span className="text-[22px] text-pres-text-muted leading-[1.4]">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                </TooltipTrigger>
                {/* 2026-11-03: force black tooltip background. The
                    default alone let the live build show a solid
                    yellow background with white text (unreadable).
                    !bg-black wins over any theme/default background,
                    matching the example image's black tooltip. */}
                <TooltipContent side="top" className="max-w-[300px] p-4 text-left !bg-black border-white/15 text-white shadow-xl">
                  <div className="font-heading text-[18px] font-bold text-white">{tier.name}</div>
                  <div className="mt-1 text-[15px] text-pres-text-muted">{tier.meaning}</div>
                  <div className="mt-2 text-[15px] text-white">{tier.price}{tier.priceSuffix}</div>
                </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
          </TooltipProvider>


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
          <motion.button
            type="button"
            autoFocus
            onClick={() => setCompareOpen(false)}
            transition={{ duration: 0.45, ease: presentationEase }}
            className="fixed right-6 top-5 z-[210] inline-flex items-center gap-2 rounded-full border border-pres-accent/60 bg-pres-surface/90 px-5 py-2.5 font-heading text-[16px] font-semibold text-pres-accent hover:bg-pres-accent hover:text-[#181208] hover:shadow-[0_18px_40px_rgba(0,0,0,0.45),0_0_32px_rgba(255,173,1,0.25)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to pricing
          </motion.button>
        </div>,
        document.body
      )}
    </>
  );
};
