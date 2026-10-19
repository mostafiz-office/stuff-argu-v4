import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { presentationEase } from "@/lib/presentationMotion";
import { presentationSound } from "@/lib/presentationSound";
import { MarkerHighlight, UnderlineSweep } from "@/components/presentation/reveal";
import { PyramidVisual } from "@/components/presentation/PyramidVisual";

interface SolutionBridgeSlideProps {
  onNavigate?: (index: number) => void;
}

const PHRASES = [
  { before: "Find Top ", focus: "5%", after: " Talent" },
  { before: "Avoid ", focus: "Missing", after: " Deadlines" },
  { before: "Save Time ", focus: "Hiring", after: "" },
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
        <MarkerHighlight colorClassName="bg-pres-accent/70" delay={0.25}>
          {p.focus}
        </MarkerHighlight>
      )}
      {index === 1 && (
        <UnderlineSweep colorClassName="bg-destructive" delay={0.25}>
          {p.focus}
        </UnderlineSweep>
      )}
      {index === 2 && <span className="font-extrabold">{p.focus}</span>}
      {p.after}
    </motion.div>
  );
};

/**
 * SolutionBridgeSlide (FB-12, FB-13) — replaces the standalone "We have
 * solutions for you." slide AND the separate pyramid slide with one
 * continuous beat.
 *
 * The solution line opens big and centered. On Next it shrinks and glides
 * left (near-3D: slight rotateY) while the hiring pyramid rises on the
 * right — the viewer feels no slide change. Three more Next presses reveal
 * the phrases one by one next to the pyramid. Uses the deck's navigation
 * gate pattern (same as the starter tier slide).
 */
export const SolutionBridgeSlide: React.FC<SolutionBridgeSlideProps> = () => {
  const [split, setSplit] = useState(false);
  const [phraseCount, setPhraseCount] = useState(0);

  useEffect(() => {
    const step = !split ? 0 : phraseCount + 1;
    const tooltips = [
      "Press Next: shrink the solution line & reveal the pyramid",
      "Press Next: phrase 1 of 3",
      "Press Next: phrase 2 of 3",
      "Press Next: phrase 3 of 3",
    ];
    window.__slideNavigationGate = {
      trigger: () => {
        if (!split) {
          presentationSound.play("reveal");
          setSplit(true);
          return true;
        }
        if (phraseCount < 3) {
          presentationSound.play("reveal");
          setPhraseCount((c) => c + 1);
          return true;
        }
        return false;
      },
      tooltip: step < 4 ? tooltips[step] : "Press Next to continue",
      step,
      totalSteps: 4,
    };
    return () => {
      window.__slideNavigationGate = undefined;
    };
  }, [split, phraseCount]);

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
                ? { x: -700, y: -300, scale: 0.32, rotateY: -8, opacity: 1 }
                : { x: 0, y: 0, scale: 1, rotateY: 0, opacity: 1 }
            }
            transition={{ duration: 0.9, ease: presentationEase }}
          >
            We have <span className="text-pres-accent">solutions</span> for you.
          </motion.h1>
        </div>

        {/* Accent bar under the big line — fades away in the split */}
        <div className="absolute bottom-[126px] left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: split ? 0 : 1, scaleX: split ? 0 : 1 }}
            transition={{ delay: split ? 0 : 0.22, duration: 0.5 }}
            className="h-[6px] w-[180px] origin-center rounded-full bg-pres-accent"
          />
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
              How We Find the <span className="text-pres-accent">Top 5%</span>
            </h2>
            <div className="mt-8 flex items-start gap-14">
              <PyramidVisual className="w-[560px] shrink-0" />
              <div className="flex flex-col justify-center gap-10 pt-16">
                {phraseCount >= 1 && <Phrase index={0} />}
                {phraseCount >= 2 && <Phrase index={1} />}
                {phraseCount >= 3 && <Phrase index={2} />}
              </div>
            </div>
          </motion.div>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </section>
    </ScaledSlide>
  );
};
