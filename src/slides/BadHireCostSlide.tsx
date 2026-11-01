import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, fadeIn, staggerDelay } from "@/lib/presentationMotion";
import { slide5CostImage } from "@/assets/slide5CostImageData";

/**
 * 2026-11-01 feedback update: slides 5 + 6 merged into ONE unified slide.
 * Previously slide 5 gave the $35,000 anchor alone and slide 6 repeated
 * the same anchor with the three unpriced consequences. This slide keeps
 * every element from both: the anchor, the bridge line, the "is not the
 * whole cost" line, and the three unpriced lines. Nothing is dropped.
 * The layout is slightly larger than either old slide and the right-hand
 * panel is lighter (white/10 with a soft border and blur) so the merged
 * section reads cleanly and the $35,000 stays prominent. Single-step
 * slide, no gate.
 */
const UNPRICED_LINES = [
  "Customers who stop waiting.",
  "A team stuck rewriting.",
  "Nights you don't get back.",
];

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

        <div className="relative z-10 h-full flex items-center px-[100px] gap-[80px]">
          {/* Left: the anchor, slightly larger than before */}
          <div className="w-[880px] shrink-0">
            <motion.p
              {...fadeUp(0)}
              className="text-[22px] font-semibold uppercase tracking-[0.2em] text-pres-text-muted mb-6"
            >
              The cost of a cheap hire
            </motion.p>
            <motion.div
              {...fadeUp(0.1)}
              className="font-price text-[180px] font-bold leading-none text-pres-accent"
            >
              $35,000
            </motion.div>
            <motion.p {...fadeUp(0.2)} className="text-[30px] text-white/85 mt-4 mb-10">
              lost on one bad hire
            </motion.p>
            <motion.p
              {...fadeUp(0.3)}
              className="text-[38px] font-bold font-heading text-white"
            >
              That is what you can count.
            </motion.p>
          </div>

          {/* Hairline divider */}
          <div className="h-[360px] w-px bg-white/20 shrink-0" />

          {/* Right: what the money does not cover, in a lighter panel */}
          <div className="flex-1 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md px-10 py-10">
            <motion.p
              {...fadeUp(0.15)}
              className="text-[38px] font-bold font-heading text-white mb-8"
            >
              is not the whole cost.
            </motion.p>
            <div className="flex flex-col items-start gap-6">
              {UNPRICED_LINES.map((line, i) => (
                <motion.div
                  key={line}
                  {...fadeUp(staggerDelay(i, 0.3, 0.12))}
                  className="flex items-center gap-4"
                >
                  <span className="h-[10px] w-[10px] shrink-0 rounded-full bg-pres-accent" />
                  <span className="text-[32px] text-white/90 leading-tight">{line}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
};
