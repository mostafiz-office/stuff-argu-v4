import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, fadeIn, staggerDelay } from "@/lib/presentationMotion";
import { slide6ProblemsImage } from "@/assets/slide6ProblemsImageData";

/**
 * Batch 89 (owner direction, Oct 28 2026): slide 6 stops being the
 * comparison and becomes the second half of the anchoring story. Slide 5
 * gave the number ($35,000); this slide shows the problems behind it, so
 * the pain peaks right before the solution pyramid. Single-step slide,
 * no gate, no new numbers.
 * Batch 90 (owner direction 1): rebuilt into the pain-slide family —
 * full-bleed photo + problem-story overlay + text block, same shell as
 * slides 2 to 4. The $35,000 in the title is now the deck's own amber
 * (pres-accent), not red. Text RIGHT: the empty desk reads left, the
 * window side takes the right overlay fade, no flip.
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
      <div className="slide-dark-bg problem-story relative w-[1920px] h-[1080px] overflow-hidden text-pres-text font-sans">
        <motion.img
          {...fadeIn(0)}
          src={slide6ProblemsImage}
          alt="Empty office desk with a laptop"
          width={1920}
          height={1088}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 problem-story-overlay-right" />
        <SlideHeader />

        <div className="relative z-10 h-full flex flex-col justify-center pt-[40px] pl-[980px] pr-[100px] text-right items-end">
          <motion.h1
            {...fadeUp(0)}
            className="text-[64px] font-bold font-heading text-white mb-12"
          >
            Behind the <span className="text-pres-accent">$35,000</span>
          </motion.h1>

          <div className="flex flex-col gap-8 w-full mb-14">
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
            className="text-[36px] font-bold font-heading text-white"
          >
            This is what a cheap hire really costs.
          </motion.p>
        </div>
      </div>
    </ScaledSlide>
  );
};
