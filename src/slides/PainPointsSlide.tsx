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
  /** FB-06: owner to supply final copywriting. Beats are the staging
   *  structure — words below are placeholders mapped from the old copy. */
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
    beats: [
      { text: "Outage Panic", size: "xl" },
      { text: "2 AM", size: "md" },
      { text: "Production Break", size: "xl" },
    ],
    short: "Production breaks while you sleep.",
    metric: "$18,500/M",
    metricLabel: "Outage & Churn Bleed",
    resolution: "One incident can erase months of engineering savings.",
    image: outageImage,
    imageAlt: "A technology leader responding to a late-night production incident",
    highlight: "red",
    highlightStyle: "marker",
    highlightIndex: 0,
    align: "left",
  },
  {
    eyebrow: "Problem 02 · Technical Debt",
    beats: [
      { text: "Fragile Vibe &", size: "xl" },
      { text: "AI Code", size: "xl" },
    ],
    short: "Unreviewed AI code piles up debt.",
    metric: "3× Slower",
    metricLabel: "Velocity & Bug Bleed",
    resolution: "Fast shortcuts become slow releases when architecture is ignored.",
    image: fragileCodeImage,
    imageAlt: "Software engineers investigating unstable code on office monitors",
    highlight: "yellow",
    highlightStyle: "underline",
    highlightIndex: 1,
    align: "right",
  },
  {
    eyebrow: "Problem 03 · Hiring Drag",
    beats: [
      { text: "The 90-Day", size: "xl" },
      { text: "Hiring Sinkhole", size: "xl" },
    ],
    short: "Three months lost to unvetted hires.",
    metric: "Save 80%",
    metricLabel: "Recruiting Time Saved",
    resolution: "Every empty engineering seat delays the roadmap.",
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
