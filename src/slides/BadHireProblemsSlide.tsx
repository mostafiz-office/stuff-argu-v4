import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, staggerDelay } from "@/lib/presentationMotion";

/**
 * Batch 89 (owner direction, Oct 28 2026): slide 6 stops being the
 * comparison and becomes the second half of the anchoring story. Slide 5
 * gave the number ($35,000); this slide shows the problems behind it, so
 * the pain peaks right before the solution pyramid. Replaces
 * AnchorComparisonSlide in the slide order; that file stays in the repo
 * unreferenced, so the comparison can return with a one-line change.
 * Single-step slide, no gate, no new numbers.
 */
const PROBLEM_BEATS = [
  {
    lead: "Production breaks again.",
    sub: "The cheap hire's code fails at 2 AM, and you are the one awake.",
  },
  {
    lead: "Nobody can fix what was written.",
    sub: "Fragile AI code piles up, and your seniors rewrite instead of shipping.",
  },
  {
    lead: "Deadlines slip again.",
    sub: "The launch moves, customers wait, competitors ship first.",
  },
  {
    lead: "You hire again from zero.",
    sub: "Recruit, onboard, fail, repeat. The $35,000 was only round one.",
  },
];

export const BadHireProblemsSlide = () => {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Ambient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col items-center">
          <motion.h1
            {...fadeUp(0)}
            className="text-[64px] font-bold font-heading text-white text-center mb-12"
          >
            Behind the <span className="text-[#FF0000]">$35,000</span>
          </motion.h1>

          <div className="flex flex-col gap-8 w-full max-w-[1100px] mb-14">
            {PROBLEM_BEATS.map((beat, i) => (
              <motion.div key={beat.lead} {...fadeUp(staggerDelay(i, 0.15, 0.12))}>
                <p className="text-[28px] font-bold font-heading text-white leading-tight">
                  {beat.lead}
                </p>
                <p className="text-[22px] text-white/70 leading-snug mt-1">{beat.sub}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp(0.75)}
            className="text-[36px] font-bold font-heading text-white text-center"
          >
            This is what a cheap hire really costs.
          </motion.p>
        </div>
      </div>
    </ScaledSlide>
  );
};
