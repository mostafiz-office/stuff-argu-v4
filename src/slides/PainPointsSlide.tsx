import React from "react";
import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeIn, fadeUp } from "@/lib/presentationMotion";
import {
  PainBeats,
  PainBeat,
  PainHighlightColor,
  PainHighlightStyle,
} from "@/components/presentation/PainBeats";
import outageImage from "@/assets/problem-outage.jpg";
import fragileCodeImage from "@/assets/problem-fragile-code.jpg";
import hiringImage from "@/assets/problem-hiring.jpg";

interface ProblemSlideProps {
  onNavigate?: (index: number) => void;
}

type Problem = {
  eyebrow: string;
  /** FB-06: plain human copywriting (owner direction Oct 19: write it, confirm on review).
   *  Beats are the staging structure — headline fragments below stay as-is. */
  beats: PainBeat[];
  short: string;
  metric: string;
  metricLabel: string;
  resolution: string;
  image: string;
  imageAlt: string;
  /** FB-08: middle-segment highlight color, configurable yellow/red */
  highlight: PainHighlightColor;
  /** FB-11: each slide gets a different highlight treatment */
  highlightStyle: PainHighlightStyle;
  highlightIndex: number;
  /** FB-11: mirrored layouts — text block alternates sides */
  align: "left" | "right";
  /** Batch 47 (owner, red-marked screenshot): heading only — no
   *  eyebrow, short line, metric or resolution on this slide */
  bare?: boolean;
};

const problems: Problem[] = [
  {
    eyebrow: "Problem 01 · Production Risk",
    // Split-hook title design (Batches 39–42, owner direction Oct 20):
    // no marker highlight in this design, so highlightIndex is -1.
    // The block is PACKED — negative top margins interlock the lines
    // and every line carries the reference's strong soft shadow.
    // Batch 42 (owner: "update slide 2 with same word"): the heading
    // now carries the reference's EXACT words — বাংলাদেশ যেখানে /
    // copy business / জন্য বিখ্যাত — so the design can be judged 1:1.
    // Batch 43 (owner: "why you add dot after Bangladesh?"): there is
    // NO dot in the reference — pixel analysis of his image proved
    // the red mark is the tittle of the "i" in "business" (a 25×24
    // cluster at x≈699,y≈361, directly above the 21px "i" stem at
    // x≈701), rising into the notch between the white words because
    // the lines are packed. The invented dotAfter is removed.
    // Batch 44 (owner: "the gap — copy business and top and bottom
    // words gap is not matching"): fresh pixel gap analysis of the
    // reference — line 1 ink bottom → hook body top = 14px air,
    // hook ink bottom → closing line ink top = 26px OVERLAP (the
    // closing line tucks INTO the hook's band). Scaled to this
    // slide (×0.786): +11px air on top, 20px overlap below. A PIL
    // Batch 46 (owner: "fix it"): the Bengali face is now Noto Sans
    // Bengali 900 — a traditional text face whose proportions
    // (ink width/height 6.67, ink starting 0.20em into the em) match
    // both the reference's class and what the owner's screen
    // actually rendered, unlike Baloo Da 2's rounded, compressed
    // forms (7.94, ink at 0.45em). EVERYTHING was re-solved against
    // Noto's measured ink: sizes 106 / 56 / 87px (band ratios 0.83 /
    // 0.53 / 0.68 of the hook), margins hook −39px, closing −5px —
    // verified in the stack simulation at exactly +11px top air and
    // the closing line's ink top 4px below the hook's baseline.
    // Bengali set in Noto Sans Bengali 900 (loaded by PainBeats'
    // BengaliFontLoader and index.html), the hook in Plus Jakarta
    // Sans 800.
    // the original. Indents follow the reference's rightward cascade
    // (line 1 +20% of hook width, closing line +45%).
    // Batch 49 (owner picked the copy): the slide now speaks to the
    // SaaS owner who vibe coded his app — deadline coming, production
    // down, no sleep. "Deadline" + small "coming" / hook "production
    // is down" / closing "no sleep tonight", all Plus Jakarta Sans
    // 800, sizes and gaps solved from PJS ink boxes and verified in
    // the stack simulation (top air +11px, closing ink top = hook
    // baseline +4px): 96 + 41 / 94 / 63px, margins −5 / −7px,
    // cascade indents 171 / 385px (20% / 45% of the hook's 856px).
    // Batch 50 (owner): word-by-word entrance (wordAnim) — Deadline
    // from the left, coming from the right, the hook's words
    // alternating sides, the closing line's words dropping down,
    // one word every 0.5s; every word carries a soft drop shadow
    // (WORD_SHADOW in PainBeats) instead of the old line shadow.
    beats: [
      {
        text: "Deadline",
        size: "md",
        sizePx: 96,
        smallAfter: "coming",
        smallSizePx: 41,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800,
        wordAnim: true,
        indentClass: "ml-[171px]",
        className:
          "whitespace-nowrap",
      },
      {
        text: "production is down",
        size: "xl",
        sizePx: 94,
        hook: true,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800,
        wordAnim: true,
        className:
          "whitespace-nowrap -mt-[5px]",
      },
      {
        text: "no sleep tonight",
        size: "md",
        sizePx: 63,
        soft: true,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800,
        wordAnim: true,
        indentClass: "ml-[385px]",
        className:
          "whitespace-nowrap -mt-[7px]",
      },
    ],
    short: "Your customers find the bug before you do.",
    metric: "$18,500/M",
    metricLabel: "Outage & Churn Bleed",
    resolution: "Every hour down loses customers you paid to win.",
    image: outageImage,
    imageAlt: "A technology leader responding to a late night production incident",
    highlight: "red",
    highlightStyle: "marker",
    highlightIndex: -1,
    align: "left",
    bare: true,
  },
  {
    eyebrow: "Problem 02 · Technical Debt",
    beats: [
      { text: "Fragile Vibe &", size: "xl" },
      { text: "AI Code", size: "xl" },
    ],
    short: "Nobody can explain what the AI wrote.",
    metric: "3× Slower",
    metricLabel: "Velocity & Bug Bleed",
    resolution: "Shortcuts today, stalled releases tomorrow.",
    image: fragileCodeImage,
    imageAlt: "Software engineers investigating unstable code on office monitors",
    highlight: "yellow",
    highlightStyle: "marker",
    highlightIndex: 1,
    // Batch 51 (owner): left-side placement like slide 2 — was the
    // mirrored right layout from FB-11.
    align: "left",
  },
  {
    eyebrow: "Problem 03 · Hiring Drag",
    beats: [
      { text: "The 90-Day", size: "xl" },
      { text: "Hiring Sinkhole", size: "xl" },
    ],
    short: "Three months to hire. Zero guarantee they deliver.",
    metric: "Save 80%",
    metricLabel: "Recruiting Time Saved",
    resolution: "Every empty seat pushes the roadmap back.",
    image: hiringImage,
    imageAlt: "A hiring manager beside an empty engineering workstation",
    highlight: "yellow",
    highlightStyle: "drag",
    highlightIndex: 1,
    align: "left",
  },
];

const ProblemStorySlide: React.FC<{ problem: Problem }> = ({ problem }) => {
  const mirrored = problem.align === "right";
  const beatsEnd = 0.15 + (problem.beats.length - 1) * 0.55;
  return (
    <ScaledSlide>
      <div className="slide-dark-bg problem-story relative w-[1920px] h-[1080px] overflow-hidden text-pres-text font-sans">
        <motion.img
          {...fadeIn(0)}
          src={problem.image}
          alt={problem.imageAlt}
          width={1920}
          height={1088}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 ${
            mirrored ? "problem-story-overlay-right" : "problem-story-overlay"
          }`}
        />
        <SlideHeader />

        <div
          className={`relative z-10 h-full flex flex-col justify-center pt-[40px] ${
            mirrored
              ? "pl-[980px] pr-[100px] text-right items-end"
              : "pl-[100px] pr-[980px] text-left items-start"
          }`}
        >
          {!problem.bare && (
            <motion.p
              {...fadeUp(0.03, 14)}
              className="text-[20px] font-semibold uppercase text-pres-text-muted"
            >
              {problem.eyebrow}
            </motion.p>
          )}

          <div className={problem.bare ? "" : "mt-5"}>
            <PainBeats
              beats={problem.beats}
              highlight={problem.highlight}
              highlightStyle={problem.highlightStyle}
              highlightIndex={problem.highlightIndex}
            />
          </div>

          {!problem.bare && (
            <motion.p
              {...fadeUp(beatsEnd + 0.55, 20)}
              className="mt-7 text-[30px] leading-snug text-pres-text/90"
            >
              {problem.short}
            </motion.p>
          )}

          {!problem.bare && (
            <motion.div
              {...fadeUp(beatsEnd + 0.85, 18)}
              className={`mt-11 flex items-end gap-7 ${
                mirrored ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div>
                <div className="font-heading font-bold text-[66px] leading-none text-pres-accent">
                  {problem.metric}
                </div>
                <div className="mt-3 text-[18px] font-semibold uppercase text-pres-text-muted">
                  {problem.metricLabel}
                </div>
              </div>
              <div className="mb-1 h-[70px] w-px bg-pres-text/15" />
              <p className="mb-1 max-w-[340px] text-[20px] leading-relaxed text-pres-text-muted">
                {problem.resolution}
              </p>
            </motion.div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};

export const OutagePanicSlide: React.FC<ProblemSlideProps> = () => (
  <ProblemStorySlide problem={problems[0]} />
);
export const FragileCodeSlide: React.FC<ProblemSlideProps> = () => (
  <ProblemStorySlide problem={problems[1]} />
);
export const HiringSinkholeSlide: React.FC<ProblemSlideProps> = () => (
  <ProblemStorySlide problem={problems[2]} />
);

// Kept as the first problem export for compatibility with existing imports.
export const PainPointsSlide = OutagePanicSlide;
