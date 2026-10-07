import React from "react";
import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeIn, fadeUp } from "@/lib/presentationMotion";
import outageImage from "@/assets/problem-outage.jpg";
import fragileCodeImage from "@/assets/problem-fragile-code.jpg";
import hiringImage from "@/assets/problem-hiring.jpg";

interface ProblemSlideProps {
  onNavigate?: (index: number) => void;
}

type Problem = {
  eyebrow: string;
  lead: string;
  emphasis: string;
  short: string;
  metric: string;
  metricLabel: string;
  resolution: string;
  image: string;
  imageAlt: string;
  tone: "danger" | "accent";
};

const problems: Problem[] = [
  {
    eyebrow: "Problem 01 · Production Risk",
    lead: "The 2 AM",
    emphasis: "Outage Panic",
    short: "Production breaks while you sleep.",
    metric: "$18,500/mo",
    metricLabel: "Outage & Churn Bleed",
    resolution: "One incident can erase months of engineering savings.",
    image: outageImage,
    imageAlt: "A technology leader responding to a late-night production incident",
    tone: "danger",
  },
  {
    eyebrow: "Problem 02 · Technical Debt",
    lead: "Fragile Vibe &",
    emphasis: "AI Code",
    short: "Unreviewed AI code piles up debt.",
    metric: "3× Slower",
    metricLabel: "Velocity & Bug Bleed",
    resolution: "Fast shortcuts become slow releases when architecture is ignored.",
    image: fragileCodeImage,
    imageAlt: "Software engineers investigating unstable code on office monitors",
    tone: "accent",
  },
  {
    eyebrow: "Problem 03 · Hiring Drag",
    lead: "The 90-Day",
    emphasis: "Hiring Sinkhole",
    short: "Three months lost to unvetted hires.",
    metric: "Save 80%",
    metricLabel: "Recruiting Time Saved",
    resolution: "Every empty engineering seat delays the roadmap.",
    image: hiringImage,
    imageAlt: "A hiring manager beside an empty engineering workstation",
    tone: "accent",
  },
];

const ProblemStorySlide: React.FC<{ problem: Problem }> = ({ problem }) => (
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
      <div className="problem-story-overlay absolute inset-0" />
      <SlideHeader />

      <div className="relative z-10 h-full flex flex-col justify-center pl-[100px] pr-[980px] pt-[40px]">
        <motion.p
          {...fadeUp(0.03, 14)}
          className="text-[20px] font-semibold uppercase text-pres-text-muted"
        >
          {problem.eyebrow}
        </motion.p>

        <motion.h1
          {...fadeUp(0.08, 24)}
          className="mt-5 font-heading font-bold text-[96px] leading-[0.96]"
        >
          <span className="block text-pres-text">{problem.lead}</span>
          <span className={problem.tone === "danger" ? "text-destructive" : "text-pres-accent"}>
            {problem.emphasis}
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.13, 20)}
          className="mt-7 text-[30px] leading-snug text-pres-text/90"
        >
          {problem.short}
        </motion.p>

        <motion.div {...fadeUp(0.18, 18)} className="mt-11 flex items-end gap-7">
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

export const OutagePanicSlide: React.FC<ProblemSlideProps> = () => <ProblemStorySlide problem={problems[0]} />;
export const FragileCodeSlide: React.FC<ProblemSlideProps> = () => <ProblemStorySlide problem={problems[1]} />;
export const HiringSinkholeSlide: React.FC<ProblemSlideProps> = () => <ProblemStorySlide problem={problems[2]} />;

// Kept as the first problem export for compatibility with existing imports.
export const PainPointsSlide = OutagePanicSlide;