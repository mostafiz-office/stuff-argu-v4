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
 * slides 2 to 4. The $35,000 is the deck's own amber (pres-accent), not
 * red. Text RIGHT: the empty desk reads left, the window side takes the
 * right overlay fade, no flip.
 * Batch 91 (owner-approved loop framing, Oct 28 2026): the four beats are
 * already told on slides 2 to 5, so they stop pretending to be new. They
 * become short recap steps in ONE LOOP that repeats — the loop and the
 * repeat are the new information — and the punch line is the hero. The
 * sub-lines and the big title are gone (about 75 words down to about 25).
 * An extra dark wash deepens the right text zone so white type never
 * fights the bright window again.
 */
const LOOP_STEPS = [
  { num: "01", text: "Production breaks again." },
  { num: "02", text: "Nobody can fix it." },
  { num: "03", text: "Deadlines slip again." },
  { num: "04", text: "You hire again from zero." },
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
        {/* Extra wash: the window side alone is too bright for small type */}
        <div className="absolute inset-0 bg-gradient-to-l from-pres-bg/90 via-pres-bg/50 to-transparent" />
        <SlideHeader />

        <div className="relative z-10 h-full flex flex-col justify-center pt-[40px] pl-[980px] pr-[100px] text-right items-end">
          <motion.p
            {...fadeUp(0)}
            className="text-[20px] font-semibold uppercase tracking-[0.2em] text-pres-text-muted mb-10"
          >
            Behind the $35,000
          </motion.p>

          <div className="flex flex-col gap-5 mb-8">
            {LOOP_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp(staggerDelay(i, 0.15, 0.12))}
                className="flex items-baseline gap-4"
              >
                <span className="text-[34px] font-bold font-heading text-pres-accent">
                  {step.num}
                </span>
                <span className="text-[34px] font-bold font-heading text-white leading-tight">
                  {step.text}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp(0.7)}
            className="text-[24px] font-semibold text-pres-accent mb-12"
          >
            and it starts again.
          </motion.p>

          <motion.p
            {...fadeUp(0.9)}
            className="text-[48px] font-bold font-heading text-white leading-tight"
          >
            The <span className="text-pres-accent">$35,000</span> was only round one.
          </motion.p>
        </div>
      </div>
    </ScaledSlide>
  );
};
