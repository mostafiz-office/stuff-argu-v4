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
};

const problems: Problem[] = [
  {
    eyebrow: "Problem 01 · Production Risk",
    // Split-hook title design (Batches 39–42, owner direction Oct 20):
    // no marker highlight in this design, so highlightIndex is -1.
    // The block is PACKED — negative top margins interlock the lines
    // and every line carries the reference's strong soft shadow.
    // Batch 42 (owner: "update slide 2 with same word"): the heading
    // now carries the reference's EXACT words — বাংলাদেশ • যেখানে /
    // copy business / জন্য বিখ্যাত — so the design can be judged 1:1.
    // Bengali set in Baloo Da 2 (index.html), the hook in Plus Jakarta
    // Sans 800. Sizes solved from PIL band measurements of both fonts
    // against the reference's band ratios (line 1 = 0.79 of the hook's
    // glyph band, closing line = 0.64, small word = 0.45 of line 1);
    // Bengali glyphs sit shorter in their em, so line 1's point size
    // is larger than the hook's while reading smaller, exactly like
    // the original. Indents follow the reference's rightward cascade
    // (line 1 +20% of hook width, closing line +45%).
    beats: [
      {
        text: "বাংলাদেশ",
        size: "md",
        sizePx: 112,
        dotAfter: true,
        smallAfter: "যেখানে",
        smallSizePx: 50,
        fontFamily: "'Baloo Da 2', sans-serif",
        fontWeight: 800,
        indentClass: "ml-[125px]",
        className:
          "whitespace-nowrap [text-shadow:0_14px_34px_rgba(0,0,0,0.65),0_4px_10px_rgba(0,0,0,0.6)]",
      },
      {
        text: "copy business",
        size: "xl",
        sizePx: 94,
        hook: true,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800,
        className:
          "whitespace-nowrap -mt-[16px] [text-shadow:0_14px_34px_rgba(0,0,0,0.65),0_4px_10px_rgba(0,0,0,0.6)]",
      },
      {
        text: "জন্য বিখ্যাত",
        size: "md",
        sizePx: 92,
        soft: true,
        fontFamily: "'Baloo Da 2', sans-serif",
        fontWeight: 800,
        indentClass: "ml-[288px]",
        className:
          "whitespace-nowrap -mt-[18px] [text-shadow:0_14px_34px_rgba(0,0,0,0.65),0_4px_10px_rgba(0,0,0,0.6)]",
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
    align: "right",
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
          <motion.p
            {...fadeUp(0.03, 14)}
            className="text-[20px] font-semibold uppercase text-pres-text-muted"
          >
            {problem.eyebrow}
          </motion.p>

          <div className="mt-5">
            <PainBeats
              beats={problem.beats}
              highlight={problem.highlight}
              highlightStyle={problem.highlightStyle}
              highlightIndex={problem.highlightIndex}
            />
          </div>

          <motion.p
            {...fadeUp(beatsEnd + 0.55, 20)}
            className="mt-7 text-[30px] leading-snug text-pres-text/90"
          >
            {problem.short}
          </motion.p>

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
