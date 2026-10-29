import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { presentationEase } from "@/lib/presentationMotion";
import { presentationSound } from "@/lib/presentationSound";
import { MarkerHighlight } from "@/components/presentation/reveal";
import { PyramidVisual } from "@/components/presentation/PyramidVisual";

interface SolutionBridgeSlideProps {
  onNavigate?: (index: number) => void;
}

interface PhraseDef {
  before: string;
  focus: string;
  after: string;
  focus2?: string;
}

// Batch 64 (owner): in "Save Time Hiring" BOTH "Save" and "Hiring"
// carry the marker (it previously had none — "Hiring" was only
// extrabold). Batch 82 (owner): the markers must match OUR colours —
// L3 "Save"/"Hiring" switch from band orange to our yellow
// (pres-accent); L4 "Missing" switches from destructive red to its
// own band red hsl(350, 75%, 55%) = rgb(226, 54, 83) at 70%; L5 "5%"
// goes SOLID pres-accent with dark text, so the yellow on "Top 5%"
// is exactly our yellow, not a faded wash.
// Batch 99 (owner Oct 29: markers = the 5% color, a little bigger,
// then the padding is right): ALL phrase markers are now solid
// pres-accent with dark text, like the 5% marker already was —
// Missing loses its band red, Save/Hiring lose their amber/70
// wash. Markers are also a little wider: px-2 on these calls
// overrides the component's px-1 (Tailwind scale order). The
// shared MarkerHighlight default is untouched, so pain-slide
// markers (PainBeats) keep their size. Pyramid bands and the
// numbered circles are untouched.
const PHRASES: PhraseDef[] = [
  { before: "Find Top ", focus: "5%", after: " Talent" },
  { before: "Avoid ", focus: "Missing", after: " Deadlines" },
  { before: "", focus: "Save", after: " Time ", focus2: "Hiring" },
];

const Phrase: React.FC<{ index: number }> = ({ index }) => {
  const p = PHRASES[index];
  return (
    <motion.div
      initial={{ opacity: 0, x: 48 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: presentationEase }}
      className="font-heading text-[40px] leading-tight text-white"
    >
      {p.before}
      {index === 0 && (
        <MarkerHighlight
          colorClassName="bg-pres-accent"
          className="pres-dark-safe-accent px-2"
          delay={0.25}
        >
          {p.focus}
        </MarkerHighlight>
      )}
      {index === 1 && (
        <MarkerHighlight
          colorClassName="bg-pres-accent"
          className="pres-dark-safe-accent px-2"
          delay={0.25}
        >
          {p.focus}
        </MarkerHighlight>
      )}
      {index === 2 && (
        <MarkerHighlight
          colorClassName="bg-pres-accent"
          className="pres-dark-safe-accent px-2"
          delay={0.25}
        >
          {p.focus}
        </MarkerHighlight>
      )}
      {p.after}
      {p.focus2 && (
        <MarkerHighlight
          colorClassName="bg-pres-accent"
          className="pres-dark-safe-accent px-2"
          delay={0.45}
        >
          {p.focus2}
        </MarkerHighlight>
      )}
    </motion.div>
  );
};

/**
 * StageLine — the big text for pyramid levels 1 and 2 (owner direction
 * Oct 20: EVERY level gets a big text that comes up with it, like the
 * phrase levels — lighting only the legend row was too subtle).
 * Index 0 pairs with level 1, index 1 with level 2.
 */
const STAGE_TEXTS = ["Initial Sign Up", "Training & Assessment"];

const StageLine: React.FC<{ index: number }> = ({ index }) => (
  <motion.div
    initial={{ opacity: 0, x: 48 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: presentationEase }}
    className="font-heading text-[40px] font-semibold leading-tight text-white"
  >
    {STAGE_TEXTS[index]}
  </motion.div>
);

/**
 * SolutionBridgeSlide (FB-12, FB-13) — replaces the standalone "We have
 * solutions for you." slide AND the separate pyramid slide with one
 * continuous beat.
 *
 * The solution line opens big and centered. On Next it shrinks and glides
 * left while the hiring pyramid rises on the right (all levels dimmed).
 * Each further Next press lights one pyramid level BOTTOM to TOP — bright
 * and slightly bigger, earlier levels stay lit — and every level brings its
 * own big text on the right: level 1 "Initial Sign-Up", level 2 "Training
 * & Assessment", level 3 "Save Time Hiring", level 4 "Avoid Missing
 * Deadlines", level 5 "Find Top 5% Talent". Only when the pyramid is
 * complete does Next move on to the next slide.
 * (Owner-approved walk, Oct 20 — supersedes the earlier one-by-one and
 * all-at-once variants.)
 */
export const SolutionBridgeSlide: React.FC<SolutionBridgeSlideProps> = () => {
  const [split, setSplit] = useState(false);
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    const step = !split ? 0 : litCount + 1;
    const tooltips = [
      "Reveal solution",
      "Level 1 (1 of 5)",
      "Level 2 (2 of 5)",
      "Level 3 (3 of 5)",
      "Level 4 (4 of 5)",
      "Level 5 (5 of 5)",
      "Continue",
    ];
    window.__slideNavigationGate = {
      // Batch 87: sub-dot jumps — tapping sub-dot N (1..6) lands exactly
      // on that pyramid step: 1 = reveal, 2..6 = levels 1..5. Works both
      // ways, so the dots can be tapped in order one by one or jumped
      // to directly. Sound only when moving forward.
      goToStep: (target: number) => {
        if (target < 1 || target > 6) return;
        if (target > step) presentationSound.play("reveal");
        setSplit(true);
        setLitCount(target - 1);
      },
      trigger: () => {
        if (!split) {
          presentationSound.play("reveal");
          setSplit(true);
          return true;
        }
        // Owner-approved plan (Oct 20): walk the pyramid BOTTOM to TOP,
        // one level per Next press; only when all 5 levels are lit does
        // the gate release to slide 6.
        if (litCount < 5) {
          presentationSound.play("reveal");
          setLitCount((c) => c + 1);
          return true;
        }
        return false;
      },
      tooltip: tooltips[step],
      step,
      totalSteps: 6,
    };
    return () => {
      window.__slideNavigationGate = undefined;
    };
  }, [split, litCount]);

  return (
    <ScaledSlide>
      <section className="slide-dark-bg relative h-[1080px] w-[1920px] overflow-hidden font-sans text-pres-text">
        <SlideHeader />

        <div className="absolute left-1/2 top-1/2 h-[430px] w-[1080px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pres-accent/5 blur-[150px]" />

        {/* The solution line: one continuous element, big center -> small left */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <motion.h1
            className="whitespace-nowrap font-heading font-bold text-pres-text"
            style={{ fontSize: 124, transformPerspective: 1400 }}
            initial={{ x: 0, y: 0, scale: 1, rotateY: 0, opacity: 0 }}
            animate={
              split
                ? { x: -640, y: -300, scale: 0.32, rotateY: 0, opacity: 1 }
                : { x: 0, y: 0, scale: 1, rotateY: 0, opacity: 1 }
            }
            transition={{ duration: 0.9, ease: presentationEase }}
          >
            We have <span className="text-pres-accent">solutions</span> for you.
          </motion.h1>
        </div>

        {/* Pyramid + phrases rise on the right — near-3D entrance */}
        {split && (
          <motion.div
            className="absolute z-10"
            style={{ right: 80, top: 140, width: 1180, transformPerspective: 1400 }}
            initial={{ opacity: 0, x: 160, scale: 0.92, rotateY: 14 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.9, ease: presentationEase }}
          >
            <h2 className="font-heading text-[44px] font-bold text-white">
              How We Find the Top 5%
            </h2>
            <div className="mt-8 flex items-start gap-14">
              <PyramidVisual className="w-[560px] shrink-0" litCount={litCount} />
              {/* Fixed slots: each text keeps its final position from the
                  start and appears when its pyramid level lights — bottom to
                  top: Initial Sign-Up (1), Training & Assessment (2),
                  Save Time Hiring (3), Avoid Missing Deadlines (4),
                  Find Top 5% Talent (5). */}
              <div className="flex flex-col justify-center gap-10 pt-16">
                <div className="h-[52px]">{litCount >= 5 && <Phrase index={0} />}</div>
                <div className="h-[52px]">{litCount >= 4 && <Phrase index={1} />}</div>
                <div className="h-[52px]">{litCount >= 3 && <Phrase index={2} />}</div>
                <div className="h-[52px]">{litCount >= 2 && <StageLine index={1} />}</div>
                <div className="h-[52px]">{litCount >= 1 && <StageLine index={0} />}</div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </section>
    </ScaledSlide>
  );
};
