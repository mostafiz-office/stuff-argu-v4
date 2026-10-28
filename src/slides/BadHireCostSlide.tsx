import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, fadeIn } from "@/lib/presentationMotion";
import { slide5CostImage } from "@/assets/slide5CostImageData";

/**
 * Batch 88 (owner-approved plan, Oct 28 2026): price anchoring slide 1 of 2.
 * Sits between Hiring Sinkhole and the solution pyramid. Plants the anchor:
 * one bad hire costs around $35,000 — the owner's figure. Single-step
 * slide, no gate.
 * Batch 90 (owner direction 1): rebuilt into the pain-slide family —
 * full-bleed photo + problem-story overlay + text block, same shell as
 * slides 2 to 4. The $35,000 is the deck's own amber (pres-accent), not
 * red. Text LEFT: the photo's clean dark curtain sits left, the founder
 * right, no flip.
 * Batch 94 (owner pick, Direction 1, Oct 28 2026): stripped to a pure
 * anchor. The four loss lines and the closing question are gone — they
 * made the slide a generic number-plus-bullet template, repeated pains
 * from slides 2 to 4, and doubled slide 6's dot list. What remains is
 * the number, the photo, and air, plus one bridge line: "That is what
 * you can count." It frames $35,000 as the countable part and sets up
 * slide 6's uncountable part without giving it away. Count-up animation
 * on the number was offered but not picked — still available as a small
 * addition on his word.
 */
export const BadHireCostSlide = () => {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg problem-story relative w-[1920px] h-[1080px] overflow-hidden text-pres-text font-sans">
        <motion.img
          {...fadeIn(0)}
          src={slide5CostImage}
          alt="Founder working late at a laptop"
          width={1920}
          height={1088}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 problem-story-overlay" />
        <SlideHeader />

        <div className="relative z-10 h-full flex flex-col justify-center pt-[40px] pl-[100px] pr-[980px] text-left items-start">
          <motion.p
            {...fadeUp(0)}
            className="text-[20px] font-semibold uppercase tracking-[0.2em] text-pres-text-muted mb-6"
          >
            The cost of a cheap hire
          </motion.p>

          {/* The anchor: deck amber, the deck's own focus colour */}
          <motion.div
            {...fadeUp(0.1)}
            className="font-price text-[160px] font-bold leading-none text-pres-accent"
          >
            $35,000
          </motion.div>
          <motion.p {...fadeUp(0.2)} className="text-[28px] text-white/85 mt-4 mb-14">
            lost on one bad hire
          </motion.p>

          <motion.p
            {...fadeUp(0.5)}
            className="text-[36px] font-bold font-heading text-white"
          >
            That is what you can count.
          </motion.p>
        </div>
      </div>
    </ScaledSlide>
  );
};
