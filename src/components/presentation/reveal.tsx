import React from "react";
import { motion } from "framer-motion";
import { presentationEase } from "@/lib/presentationMotion";

/**
 * Reusable reveal/highlight effects for the deck (G-07).
 *
 * Yellow is the deck's highlighter color — these are the ONLY sanctioned ways
 * to apply it. Build new highlight ideas here, never inline in a slide, so
 * they stay reusable across slides and projects (spec sample library).
 */

/** WaterFill — text/number that fills up like water to `percent` (cover "80%").
 *
 * GEOMETRY CONTRACT (Batches 22 + 25): WaterFill and LabelDrop paint the
 * exact same box and sit in the exact same place:
 *  - Same painted extent: the fill spans inset-0 of its wrapper; the label
 *    rect is inset-[0em_-0.13em] (flush vertically, bleeding only
 *    sideways). Same top, same bottom, same 0.2em corner radius.
 *  - Same alignment: BOTH wrappers are `align-bottom` (vertical-align:
 *    bottom). This matters because WaterFill's wrapper has
 *    overflow:hidden, and CSS aligns such a box by its bottom margin
 *    edge instead of the text baseline — left on baseline alignment it
 *    rides ~0.15em HIGHER than the label (measured on the owner's
 *    screenshot, Batch 25). Bottom-aligning both makes their boxes
 *    coincide by construction.
 * Do not remove the align-bottom or re-add vertical bleed to either one. */
export const WaterFill: React.FC<{
  children: React.ReactNode;
  percent?: number;
  fillClassName?: string;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({
  children,
  percent = 80,
  fillClassName = "bg-pres-accent",
  delay = 0,
  duration = 1.1,
  className = "",
}) => (
  <span className={`relative inline-block overflow-hidden rounded-[0.2em] align-bottom ${className}`}>
    <span className="relative z-10">{children}</span>
    <motion.span
      aria-hidden
      className={`absolute bottom-0 left-0 right-0 ${fillClassName}`}
      initial={{ height: "0%" }}
      animate={{ height: `${percent}%` }}
      transition={{ delay, duration, ease: presentationEase }}
    />
  </span>
);

type LabelTone = "amber" | "white";

/**
 * LabelDrop — a label badge drops from above onto the word; the word sinks in
 * and pops back up in dark text on the label (cover "Time" treatment).
 * `tone="white"` is preferred when the slide already uses a lot of yellow.
 */
export const LabelDrop: React.FC<{
  children: React.ReactNode;
  tone?: LabelTone;
  delay?: number;
  className?: string;
}> = ({ children, tone = "amber", delay = 0, className = "" }) => (
  <span className={`relative inline-block align-bottom ${className}`}>
    <motion.span
      aria-hidden
      className={`absolute inset-[0em_-0.13em] rounded-[0.2em] ${
        tone === "white" ? "bg-white" : "bg-pres-accent"
      }`}
      initial={{ y: "-130%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ delay, type: "spring", stiffness: 280, damping: 21 }}
    />
    <motion.span
      className="relative z-10 pres-dark-safe-accent"
      initial={{ color: "rgba(255,255,255,1)" }}
      animate={{ color: "rgba(24,18,8,1)" }}
      transition={{ delay: delay + 0.28, duration: 0.3, ease: presentationEase }}
    >
      {children}
    </motion.span>
  </span>
);

/**
 * MarkerHighlight — a marker streak sweeps behind the text (scaleX), for
 * varied per-slide highlight treatments (pain slides).
 */
export const MarkerHighlight: React.FC<{
  children: React.ReactNode;
  colorClassName?: string;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({
  children,
  colorClassName = "bg-pres-accent/70",
  delay = 0,
  duration = 0.5,
  className = "",
}) => (
  <span className={`relative inline-block px-1 ${className}`}>
    <motion.span
      aria-hidden
      className={`absolute inset-0 origin-left ${colorClassName}`}
      style={{ clipPath: "polygon(0 14%, 100% 0, 100% 86%, 0 100%)" }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay, duration, ease: presentationEase }}
    />
    <span className="relative z-10">{children}</span>
  </span>
);

/**
 * UnderlineSweep — an underline draws itself left→right under the text.
 * Pain-slide highlight variant #2 (FB-11), brand colors via colorClassName.
 */
export const UnderlineSweep: React.FC<{
  children: React.ReactNode;
  colorClassName?: string;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({
  children,
  colorClassName = "bg-pres-accent",
  delay = 0,
  duration = 0.6,
  className = "",
}) => (
  <span className={`relative inline-block ${className}`}>
    <span className="relative z-10">{children}</span>
    <motion.span
      aria-hidden
      className={`absolute left-[0.05em] right-[0.05em] -bottom-[0.1em] h-[0.12em] origin-left rounded-full ${colorClassName}`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay, duration, ease: presentationEase }}
    />
  </span>
);

/**
 * DragReveal — a solid cover panel is "dragged" aside, pulling a reveal
 * across the text (the "mouse drags and pulls a reveal" concept, FB-11).
 * Pain-slide highlight variant #3.
 */
export const DragReveal: React.FC<{
  children: React.ReactNode;
  coverClassName?: string;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({
  children,
  coverClassName = "bg-pres-bg",
  delay = 0,
  duration = 0.9,
  className = "",
}) => (
  <span className={`relative inline-block overflow-hidden align-bottom ${className}`}>
    <motion.span
      className="relative z-10 inline-block"
      initial={{ opacity: 0.25 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay + duration * 0.4, duration: 0.4, ease: presentationEase }}
    >
      {children}
    </motion.span>
    <motion.span
      aria-hidden
      className={`absolute inset-0 z-20 ${coverClassName}`}
      initial={{ x: "0%" }}
      animate={{ x: "102%" }}
      transition={{ delay, duration, ease: presentationEase }}
    />
  </span>
);

/**
 * CinematicLine — a single line arriving the "cinematic" way (FB-09,
 * Narrative Institute rhythm): drifts up while resolving from blur.
 */
export const CinematicLine: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 0.85, className = "" }) => (
  <motion.span
    className={`block ${className}`}
    initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ delay, duration, ease: presentationEase }}
  >
    {children}
  </motion.span>
);
