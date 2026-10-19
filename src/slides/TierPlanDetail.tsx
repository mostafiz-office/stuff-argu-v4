import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Clock, X } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, staggerDelay } from "@/lib/presentationMotion";
import { TIER_FEATURE_GROUPS } from "@/data/tierFeatures";

export type TierSummary = {
  name: string;
  experience: string;
  price: string;
  priceSuffix: string;
  hours: string;
  badge: string | null;
};

const KEYS = ["growth", "skilled", "leadership"] as const;
const AUDIENCE = [
  "For teams that need a reliable engineer to stabilise code and ship weekly.",
  "For products that need senior engineers to fix AI-built logic and lead the stack.",
  "For companies that need CTO-level oversight, a managed team and 24/7 assurance.",
];

interface Props {
  tiers: TierSummary[];
  index: number;
  onSelect: (index: number) => void;
  onCompare: () => void;
}

export const TierPlanDetail: React.FC<Props> = ({ tiers, index, onSelect, onCompare }) => {
  const tier = tiers[index];
  const key = KEYS[index];

  return (
    <ScaledSlide>
      <section className="slide-dark-bg relative h-[1080px] w-[1920px] overflow-hidden font-sans text-pres-text">
        <SlideHeader />
        <div className="pointer-events-none absolute right-[-200px] top-[100px] h-[700px] w-[900px] rounded-full bg-pres-accent/5 blur-[170px]" />

        <motion.div key={`head-${index}`} {...fadeUp(0.02, 18)} className="absolute left-[80px] top-[140px] w-[560px]">
          {tier.badge && (
            <div className="pres-dark-safe-accent mb-5 inline-flex items-center gap-2 rounded-full bg-pres-accent px-4 py-1.5 font-heading text-[18px] font-bold text-pres-bg">
              <Award className="h-4 w-4" /> {tier.badge}
            </div>
          )}
          <h1 className="font-heading text-[64px] font-bold leading-[1.05]">{tier.name}</h1>
          <p className="mt-3 text-[22px] font-medium uppercase tracking-wider text-pres-text-dim">
            {tier.experience} Experience
          </p>
          <div className="mt-8 flex items-baseline gap-2">
            <span className="font-heading text-[64px] font-medium leading-none text-white">{tier.price}</span>
            <span className="text-[28px] font-medium text-pres-text-muted">{tier.priceSuffix}</span>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-pres-accent/20 bg-pres-accent/10 px-4 py-1.5 text-[22px] font-semibold text-pres-accent">
            <Clock className="h-5 w-5" /> {tier.hours}
          </div>
          <p className="mt-10 text-[28px] leading-[1.35] text-pres-text-muted">{AUDIENCE[index]}</p>

          <div className="mt-12 flex flex-wrap gap-3">
            {tiers.map((t, i) =>
              i === index ? null : (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => onSelect(i)}
                  className="rounded-full border border-pres-text/20 px-6 py-3 font-heading text-[22px] font-semibold text-pres-text-muted transition-colors hover:border-pres-accent hover:text-pres-accent"
                >
                  {t.name.split(" — ")[1]}
                </button>
              )
            )}
            <button
              type="button"
              onClick={onCompare}
              className="rounded-full border border-pres-accent/60 px-6 py-3 font-heading text-[22px] font-semibold text-pres-accent transition-colors hover:bg-pres-accent hover:text-pres-bg"
            >
              Compare all plans
            </button>
          </div>
        </motion.div>

        <div className="absolute bottom-[70px] left-[720px] right-[80px] top-[150px] flex flex-col justify-center gap-[56px]">
          {TIER_FEATURE_GROUPS.map((group, gi) => (
            <motion.div key={`${index}-${group.label}`} {...fadeUp(staggerDelay(gi, 0.12, 0.08), 20)}>
              <div className="mb-3 font-heading text-[20px] font-bold uppercase tracking-[0.2em] text-pres-text-muted">
                {group.label}
              </div>
              <div className="grid grid-cols-2 gap-x-8">
                {group.rows.map((row) => {
                  const v = row[key];
                  const off = v === false;
                  return (
                    <div
                      key={row.feature}
                      className={`flex items-center gap-3 border-b border-pres-text/10 py-[14px] ${off ? "opacity-45" : ""}`}
                    >
                      {off ? (
                        <X className="h-7 w-7 shrink-0 text-pres-text-dim" aria-label="Not included" />
                      ) : (
                        <CheckCircle className="h-7 w-7 shrink-0 text-pres-accent" aria-label="Included" />
                      )}
                      <span className="flex-1 text-[26px] leading-tight">{row.feature}</span>
                      {typeof v === "string" && (
                        <span className="font-heading text-[26px] font-bold text-pres-accent">{v}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </ScaledSlide>
  );
};
