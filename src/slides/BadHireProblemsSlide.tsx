import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, fadeIn, staggerDelay } from "@/lib/presentationMotion";
import { slide6ProblemsImage } from "@/assets/slide6ProblemsImageData";

/**
 * Batch 89 (owner direction, Oct 28 2026): slide 6 stops being the
 * comparison and becomes the second half of the anchoring story.
 * Batch 90 (owner direction 1): rebuilt into the pain-slide family.
 * Batch 91 (owner-approved loop framing): recap steps + punch hero.
 * Batch 92 (owner pick, Plan 1, Oct 28 2026): REPLACES the loop. "The
 * $35,000 is only the receipt." Slide 5 gave the money; this slide shows
 * what the money does not cover, so the true cost feels bigger than
 * $35,000 without any new figure being claimed. Split layout: the anchor
 * number repeated at slide 5's size on the left, three unpriced lines on
 * the right. The empty-desk photo stays as a dim backdrop (both story
 * overlays plus a wash, so white type never fights the window). No new
 * numbers, no new prices, no invented claims — the three lines are
 * consequences of what slides 2 to 5 already established. Single-step
 * slide, no gate.
 */
const UNPRICED_LINES = [
  "Customers who stop waiting.",
  "A team stuck rewriting.",
  "Nights you don't get back.",
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
        {/* Dim backdrop: both story fades plus a wash, photo as texture */}
        <div className="absolute inset-0 problem-story-overlay" />
        <div className="absolute inset-0 problem-story-overlay-right" />
        <div className="absolute inset-0 bg-pres-bg/60" />
        <SlideHeader />

        <div className="relative z-10 h-full flex items-center px-[100px]">
          {/* Left: the anchor, repeated at slide 5's size */}
          <div className="w-[840px] shrink-0">
            <motion.div
              {...fadeUp(0)}
              className="font-price text-[160px] font-bold leading-none text-pres-accent"
            >
              $35,000
            </motion.div>
            <motion.p
              {...fadeUp(0.15)}
              className="text-[36px] font-bold font-heading text-white mt-6"
            >
              is only the money.
            </motion.p>
          </div>

          {/* Hairline divider, same language as the pain-slide metric row */}
          <div className="h-[320px] w-px bg-pres-text/15 shrink-0 mx-[80px]" />

          {/* Right: what the money does not cover */}
          <div className="flex flex-col items-start gap-6">
            {UNPRICED_LINES.map((line, i) => (
              <motion.div
                key={line}
                {...fadeUp(staggerDelay(i, 0.3, 0.12))}
                className="flex items-center gap-4"
              >
                <span className="h-[10px] w-[10px] shrink-0 rounded-full bg-pres-accent" />
                <span className="text-[30px] text-white/90 leading-tight">{line}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
};
