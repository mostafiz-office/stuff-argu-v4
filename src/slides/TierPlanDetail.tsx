import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Clock } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, presentationEase, staggerDelay } from "@/lib/presentationMotion";
import { TIER_FEATURE_GROUPS, TIER_DIFFERENTIATORS } from "@/data/tierFeatures";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type TierSummary = {
  name: string;
  experience: string;
  price: string;
  priceSuffix: string;
  hours: string;
  badge: string | null;
  /** Batch 74: struck real price + offer badge when URL-discounted */
  wasPrice?: string | null;
  offerBadge?: string | null;
};

const KEYS = ["growth", "skilled", "leadership"] as const;
const AUDIENCE = [
  "For teams that need a reliable engineer to stabilise code and ship weekly.",
  "For products that need senior engineers to fix AI built logic and lead the stack.",
  "For companies that need CTO level oversight, a managed team and 24/7 assurance.",
];

interface Props {
  tiers: TierSummary[];
  index: number;
  onSelect: (index: number) => void;
  onCompare: () => void;
}

/**
 * Batch 95 (owner-approved density fix, Oct 28 2026): the detail pages
 * carried 14 rows with no focus. Delivery (identical on all tiers)
 * becomes one shared line; excluded X-rows leave the detail pages
 * (comparison overlay keeps them); the tier's 3 differentiators lead
 * as the focus block; remaining rows condense. One shared component,
 * so all three tiers (Growth, Skilled, Leadership) change together.
 * Slack values untouched here — Skilled's Slack wording still needs
 * the owner's exact words (see tierFeatures.ts, Skilled cell).
 * Batch 107 (owner-approved premium pass, Oct 29 2026): flat bold
 * price, quiet pills, white values, muted checks, focus panel,
 * shared top edge + pinned bottoms, Batch 65 lift+glow on pills.
 * Batch 108 (owner-approved focus pass, Oct 29 2026): quiet scale
 * (focus 28, labels 20, rows 20, shared 18->16 fallback), single
 * column rows, column gaps 28. Zero words removed.
 */
export const TierPlanDetail: React.FC<Props> = ({ tiers, index, onSelect, onCompare }) => {
  const tier = tiers[index];
  const key = KEYS[index];

  return (
    <ScaledSlide>
      <section className="slide-dark-bg relative h-[1080px] w-[1920px] overflow-hidden font-sans text-pres-text">
        <SlideHeader />
        <div className="pointer-events-none absolute right-[-200px] top-[100px] h-[700px] w-[900px] rounded-full bg-pres-accent/5 blur-[170px]" />

        <motion.div key={`head-${index}`} {...fadeUp(0.02, 18)} className="absolute bottom-[70px] left-[80px] top-[150px] flex w-[560px] flex-col">
          {tier.badge && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-heading text-[18px] font-bold text-white/85">
              <Award className="h-4 w-4 text-pres-accent/80" /> {tier.badge}
            </div>
          )}
          <h1 className="font-heading text-[64px] font-bold leading-[1.05]">{tier.name}</h1>
          <p className="mt-3 text-[22px] font-medium uppercase tracking-wider text-pres-text-dim">
            {tier.experience} Experience
          </p>
          {tier.wasPrice && (
            <div className="mt-8 flex items-center gap-3">
              <span className="text-[26px] text-pres-text-muted line-through">
                {tier.wasPrice}
                {tier.priceSuffix}
              </span>
              {tier.offerBadge && (
                <span className="pres-dark-safe-accent rounded-full bg-pres-accent px-3 py-1 font-heading text-[16px] font-bold text-pres-bg">
                  {tier.offerBadge}
                </span>
              )}
            </div>
          )}
          <div className={`${tier.wasPrice ? "mt-3" : "mt-8"} flex items-baseline gap-2`}>
            <span className="font-heading text-[64px] font-bold leading-none text-white">
              {tier.price}
            </span>
            <span className="text-[28px] font-medium text-pres-text-muted">{tier.priceSuffix}</span>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-1.5 text-[22px] font-semibold text-white/85">
            <Clock className="h-5 w-5 text-pres-accent/80" /> {tier.hours}
          </div>
          <p className="mt-10 text-[28px] leading-[1.35] text-pres-text-muted">{AUDIENCE[index]}</p>

          <TooltipProvider delayDuration={300}>
          <div className="mt-auto flex flex-wrap gap-3">
            {tiers.map((t, i) =>
              i === index ? null : (
                <Tooltip key={t.name}>
                  <TooltipTrigger asChild>
                    <motion.button
                      type="button"
                      onClick={() => onSelect(i)}
                      whileHover={{ y: -8, scale: 1.015 }}
                      transition={{ duration: 0.45, ease: presentationEase }}
                      className="rounded-full border border-pres-text/20 px-6 py-3 font-heading text-[22px] font-semibold text-pres-text-muted transition-colors hover:border-pres-accent/60 hover:text-pres-accent hover:shadow-[0_18px_40px_rgba(0,0,0,0.45),0_0_32px_rgba(255,173,1,0.25)]"
                    >
                      {t.name.replace(/^Tier\s+\S+\s+/, "")}
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-[320px] p-4 text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-[18px] font-bold text-white">{t.name}</span>
                      {t.badge && (
                        <span className="pres-dark-safe-accent rounded-full bg-pres-accent px-2 py-0.5 font-heading text-[11px] font-bold text-pres-bg">
                          {t.badge}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-[15px] text-pres-text-muted">{AUDIENCE[i]}</div>
                    <div className="mt-2 text-[15px] text-white">
                      {t.price}
                      {t.priceSuffix}
                    </div>
                    <div className="mt-1 text-[15px] text-pres-text-muted">
                      {t.experience} Experience · {t.hours}
                    </div>
                  </TooltipContent>
                </Tooltip>
              )
            )}
            <motion.button
              type="button"
              onClick={onCompare}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.45, ease: presentationEase }}
              className="rounded-full border border-pres-accent/60 px-6 py-3 font-heading text-[22px] font-semibold text-pres-accent transition-colors hover:bg-pres-accent hover:text-pres-bg hover:shadow-[0_18px_40px_rgba(0,0,0,0.45),0_0_32px_rgba(255,173,1,0.25)]"
            >
              Compare all plans
            </motion.button>
          </div>
          </TooltipProvider>
        </motion.div>

        <div className="absolute bottom-[70px] left-[720px] right-[80px] top-[150px] flex flex-col justify-start gap-[28px]">
          {/* Focus first: the tier's 3 differentiators (already in data,
              already on the tier cards) — the "why this price" landing
              point. The rest below is reference to scan, not to read. */}
          <motion.div key={`focus-${index}`} {...fadeUp(0.12, 20)} className="flex flex-col gap-4 rounded-2xl bg-white/5 p-5">
            {TIER_DIFFERENTIATORS[key].map((d) => (
              <div key={d.text} className="flex items-center gap-3">
                <CheckCircle className="h-7 w-7 shrink-0 text-pres-accent/80" aria-label="Included" />
                <span className="text-[28px] font-bold leading-tight text-white">
                  {d.highlight ? (
                    <>
                      {d.text.split(d.highlight)[0]}
                      <span className="text-pres-accent">{d.highlight}</span>
                      {d.text.split(d.highlight)[1]}
                    </>
                  ) : (
                    d.text
                  )}
                </span>
              </div>
            ))}
          </motion.div>
          {TIER_FEATURE_GROUPS.filter((group) => group.label !== "Delivery").map((group, gi) => {
            const included = group.rows.filter((row) => row[key] !== false);
            if (included.length === 0) return null;
            return (
            <motion.div key={`${index}-${group.label}`} {...fadeUp(staggerDelay(gi, 0.2, 0.08), 20)}>
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden className="h-[22px] w-[6px] shrink-0 rounded-full bg-pres-accent" />
                <span className="font-heading text-[20px] font-bold uppercase tracking-[0.2em] text-pres-text-muted">
                  {group.label}
                </span>
              </div>
              <div className="flex flex-col">
                {included.map((row) => {
                  const v = row[key];
                  return (
                    <div
                      key={row.feature}
                      className="flex items-center gap-3 border-b border-pres-text/10 py-[10px] transition-colors hover:bg-white/[0.03]"
                    >
                      <CheckCircle className="h-7 w-7 shrink-0 text-pres-accent/80" aria-label="Included" />
                      <span className="flex-1 text-[20px] leading-tight">{row.feature}</span>
                      {typeof v === "string" && (
                        <span className="whitespace-nowrap font-heading text-[20px] font-semibold text-white">{v}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
            );
          })}
          {/* Delivery is identical on all three tiers, so it leaves the
              list and becomes one shared line — words already in data. */}
          <motion.p key={`shared-${index}`} {...fadeUp(0.4, 18)} className="mt-auto text-[16px] leading-snug text-pres-text-muted">
            Every plan includes:{" "}
            {TIER_FEATURE_GROUPS.find((g) => g.label === "Delivery")!
              .rows.map((row) => row.feature)
              .join(", ")}
            .
          </motion.p>
        </div>
      </section>
    </ScaledSlide>
  );
};
