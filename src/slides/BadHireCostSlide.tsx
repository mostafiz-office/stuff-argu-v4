import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, staggerDelay } from "@/lib/presentationMotion";

/**
 * Batch 88 (owner-approved plan, Oct 28 2026): price anchoring slide 1 of 2.
 * Sits between Hiring Sinkhole and the solution pyramid. Plants the anchor:
 * one bad hire costs around $35,000 — the owner's figure. No invented
 * splits, so the loss lines stay qualitative. Single-step slide, no gate,
 * so the story keeps moving into the comparison.
 */
const LOSS_LINES = [
  "Months of salary, paid while nothing ships",
  "Recruiting and onboarding, paid twice",
  "Fragile AI code the next engineer must rewrite",
  "Deadlines missed while you hire again",
];

export const BadHireCostSlide = () => {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Ambient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col items-center text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-[20px] font-semibold uppercase tracking-[0.2em] text-pres-text-muted mb-6"
          >
            The cost of a cheap hire
          </motion.p>

          {/* The anchor: loss red, same red as slide 2's "down" */}
          <motion.div
            {...fadeUp(0.1)}
            className="font-price text-[160px] font-bold leading-none text-[#FF0000]"
          >
            $35,000
          </motion.div>
          <motion.p {...fadeUp(0.2)} className="text-[28px] text-white/85 mt-4 mb-12">
            lost on one bad hire
          </motion.p>

          <div className="flex flex-col items-start gap-4 mb-14">
            {LOSS_LINES.map((line, i) => (
              <motion.div
                key={line}
                {...fadeUp(staggerDelay(i, 0.3, 0.12))}
                className="flex items-center gap-3"
              >
                <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-pres-accent" />
                <span className="text-[26px] text-white/90">{line}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp(0.85)}
            className="text-[36px] font-bold font-heading text-white"
          >
            Do you want to lose $35,000 hiring a cheap developer?
          </motion.p>
        </div>
      </div>
    </ScaledSlide>
  );
};
