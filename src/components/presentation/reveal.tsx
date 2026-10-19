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

/** WaterFill — text/number that fills up like water to `percent` (cover "80%"). */
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
  <span className={`relative inline-block overflow-hidden ${className}`}>
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
  <span className={`relative inline-block ${className}`}>
    <motion.span
      aria-hidden
      className={`absolute inset-[-0.14em_-0.28em] rounded-[0.28em] ${
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
