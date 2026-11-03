import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, RefreshCw, Moon } from "lucide-react";
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
 *
 * 2026-11-03 redesign (slide 5/13, example-led): left number stays the
 * same count-up but renders WHITE (was pres-accent yellow); the closing
 * line now sits in a dark highlight bar under the subtitle, as in the
 * example; the right side is rebuilt as the example's timeline — heading
 * "WHAT THE MONEY DOESN'T COVER", a vertical gold line, circular
 * gold-ringed badges, and three separate dark cards (not the old single
 * light panel with dot bullets). Per the approved plan's defaults, the
 * current wording is kept (no guessed chip amounts or card subtitles
 * from the blurry example image were printed), the eyebrow is kept, the
 * centre divider is removed, and icon badges are plain gold rings
 * (no guessed glyphs).
 */
const UNPRICED_LINES = [
  "Customers who stop waiting.",
  "A team stuck rewriting.",
  "Nights you don't get back.",
];

// 2026-11-04 slide 5 icon fix (user-approved defaults): one icon per
// timeline badge, paired BY INDEX with UNPRICED_LINES — do not reorder
// either array. Waiting -> Clock, rewriting -> RefreshCw, nights -> Moon.
// Clock and RefreshCw are already used elsewhere in this repo; Moon is a
// core lucide export (verified against lucide's icon list at plan time).
// Icons are decorative (aria-hidden): the card title already names the step.
const UNPRICED_ICONS = [Clock, RefreshCw, Moon];

export const BadHireCostSlide = () => {
  // 2026-11-02 feedback round 2: price counts up from $30,000 to
  // $35,000 over 2.2s when the slide is reached, then stays at $35,000.
  const [price, setPrice] = useState(30000);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 2200);
      setPrice(Math.round(30000 + 5000 * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
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
        <div className="absolute inset-0 problem-story-overlay-treated" />
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
              className="font-price text-[180px] font-bold leading-none text-white"
            >
              ${price.toLocaleString("en-US")}
            </motion.div>
            <motion.p {...fadeUp(0.2)} className="text-[30px] text-white/85 mt-4 mb-8">
              lost on one bad hire
            </motion.p>
            <motion.div
              {...fadeUp(0.3)}
              className="rounded-2xl bg-black/50 border border-white/15 backdrop-blur-md px-8 py-5"
            >
              <p className="text-[38px] font-bold font-heading text-white leading-tight">
                That is what you can count.
              </p>
            </motion.div>
          </div>

          {/* Right: what the money does not cover, as a timeline of dark cards */}
          <div className="flex-1 relative">
            <motion.p
              {...fadeUp(0.15)}
              className="text-[20px] font-semibold uppercase tracking-[0.25em] text-white/70 mb-8"
            >
              What the money doesn&apos;t cover
            </motion.p>
            <div className="relative">
              {/* Vertical gold timeline line, running the full card stack */}
              <div
                aria-hidden
                className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-pres-accent/70"
              />
              <div className="flex flex-col gap-6">
                {UNPRICED_LINES.map((line, i) => {
                  const Icon = UNPRICED_ICONS[i];
                  return (
                  <motion.div
                    key={line}
                    {...fadeUp(staggerDelay(i, 0.3, 0.12))}
                    className="relative flex items-center gap-6"
                  >
                    <span
                      aria-hidden
                      className="h-[56px] w-[56px] shrink-0 rounded-full border-2 border-pres-accent bg-black/60 flex items-center justify-center"
                    >
                      <Icon className="w-7 h-7 shrink-0 text-pres-accent" aria-hidden />
                    </span>
                    <div className="flex-1 rounded-2xl bg-black/50 border border-white/15 backdrop-blur-md px-8 py-6">
                      <p className="text-[32px] font-bold text-white leading-tight">{line}</p>
                    </div>
                  </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
};
