import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp } from "@/lib/presentationMotion";

/**
 * Batch 88 (owner-approved plan, Oct 28 2026): price anchoring slide 2 of 2,
 * the comparison — the suit moment. Left: the cheap hire, $35,000 lost.
 * Right: a Riseup engineer from $1,900/M — the deck's own starter price,
 * shown early on the owner's approval so the anchor has a number to work
 * against. No tier details here; full pricing stays on the pricing slide.
 */
const CHEAP_HIRE_ROWS = ["Months lost", "Code to rewrite", "Hire again from zero"];

const RISEUP_ROWS = [
  "Top 5% vetted engineers",
  "Supervised by architects",
  "Works in your timezone and stack",
];

export const AnchorComparisonSlide = () => {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Ambient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col items-center">
          <motion.p
            {...fadeUp(0)}
            className="text-[20px] font-semibold uppercase tracking-[0.2em] text-pres-text-muted mb-10"
          >
            The comparison
          </motion.p>

          <div className="grid grid-cols-2 gap-8 w-full max-w-[1500px] mb-12">
            {/* Left: the cheap hire, muted card, loss red number */}
            <motion.div
              {...fadeUp(0.1)}
              className="p-10 rounded-3xl border border-white/10 bg-pres-surface/75 flex flex-col"
            >
              <p className="text-[20px] font-semibold uppercase tracking-[0.2em] text-pres-text-dim mb-4">
                A cheap hire
              </p>
              <div className="font-price text-[72px] font-bold leading-none text-[#FF0000]">
                $35,000
              </div>
              <p className="text-[24px] text-white/70 mt-2 mb-8">lost</p>
              <div className="flex flex-col gap-3">
                {CHEAP_HIRE_ROWS.map((row) => (
                  <div key={row} className="flex items-center gap-3">
                    <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-white/25" />
                    <span className="text-[24px] text-white/85">{row}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: the Riseup engineer, featured card styling from the v1 pricing transplant */}
            <motion.div
              {...fadeUp(0.25)}
              className="p-10 rounded-3xl border-2 border-pres-accent/40 bg-[linear-gradient(180deg,hsl(var(--pres-accent)/0.1)_0%,hsl(var(--pres-bg-surface))_100%)] shadow-[0_0_35px_rgba(255,173,1,0.2)] flex flex-col"
            >
              <p className="text-[20px] font-semibold uppercase tracking-[0.2em] text-pres-accent mb-4">
                A Riseup engineer
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-[28px] text-pres-text-muted">from</span>
                <span className="font-price text-[72px] font-bold leading-none text-pres-accent">
                  $1,900
                </span>
                <span className="text-[24px] text-pres-text-muted">/M</span>
              </div>
              <p className="text-[24px] text-white/70 mt-2 mb-8">a month</p>
              <div className="flex flex-col gap-3">
                {RISEUP_ROWS.map((row) => (
                  <div key={row} className="flex items-center gap-3">
                    <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-pres-accent" />
                    <span className="text-[24px] text-white/90">{row}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.p
            {...fadeUp(0.5)}
            className="text-[34px] font-bold font-heading text-white text-center"
          >
            Same work. A fraction of the loss.
          </motion.p>
        </div>
      </div>
    </ScaledSlide>
  );
};
