import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface RocketAnimationProps {
  active?: boolean;
  intensity?: number;
  profile?: "compact" | "full";
  flyingLabel?: string;
  onComplete?: () => void;
}

/** Upright rocket drawn pointing exactly straight up (no rotation needed). */
const UprightRocket: React.FC = () => (
  <svg viewBox="0 0 100 200" className="h-[220px] w-[110px]" aria-hidden="true">
    <defs>
      <linearGradient id="rk-body" x1="0" x2="1">
        <stop offset="0" stopColor="hsl(var(--pres-text))" stopOpacity="0.75" />
        <stop offset="0.5" stopColor="hsl(var(--pres-text))" />
        <stop offset="1" stopColor="hsl(var(--pres-text))" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="rk-flame" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="hsl(var(--pres-accent))" />
        <stop offset="1" stopColor="hsl(var(--pres-accent))" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* flame */}
    <path d="M38 150 Q50 205 62 150 Z" fill="url(#rk-flame)">
      <animate attributeName="d" dur="0.18s" repeatCount="indefinite"
        values="M38 150 Q50 205 62 150 Z;M40 150 Q50 190 60 150 Z;M38 150 Q50 205 62 150 Z" />
    </path>
    {/* fins */}
    <path d="M30 110 L12 150 L30 145 Z" fill="hsl(var(--pres-accent))" />
    <path d="M70 110 L88 150 L70 145 Z" fill="hsl(var(--pres-accent))" />
    {/* body */}
    <path d="M50 8 C72 30 72 80 70 148 L30 148 C28 80 28 30 50 8 Z" fill="url(#rk-body)" />
    {/* nose */}
    <path d="M50 8 C60 18 65 30 67 40 L33 40 C35 30 40 18 50 8 Z" fill="hsl(var(--pres-accent))" />
    {/* window */}
    <circle cx="50" cy="72" r="11" fill="hsl(var(--pres-bg))" stroke="hsl(var(--pres-accent))" strokeWidth="4" />
    {/* center fin */}
    <rect x="47" y="118" width="6" height="32" rx="3" fill="hsl(var(--pres-accent))" />
  </svg>
);

export const RocketAnimation: React.FC<RocketAnimationProps> = ({
  active = false,
  flyingLabel = "Growth booster",
  onComplete,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (active) {
      setIsPlaying(true);
      const timer = setTimeout(() => {
        setIsPlaying(false);
        onComplete?.();
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, [active, onComplete]);

  return (
    <AnimatePresence>
      {isPlaying && (
        <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
          <motion.div
            initial={reduce ? { opacity: 0 } : { y: 1180 }}
            animate={reduce ? { opacity: [0, 1, 1, 0] } : { y: [1180, 640, 380, -420] }}
            transition={{ duration: 2.4, times: [0, 0.35, 0.6, 1], ease: "easeInOut" }}
            className="absolute left-[34%] top-0 -ml-[110px] flex w-[220px] flex-col items-center"
          >
            <div className="drop-shadow-[0_0_40px_hsl(var(--pres-accent)/0.7)]">
              <UprightRocket />
            </div>
            {/* smoke trail */}
            <div className="-mt-6 h-[260px] w-[46px] rounded-full bg-gradient-to-b from-pres-accent/50 via-pres-accent/10 to-transparent blur-xl" />
            {flyingLabel && (
              <span className="pres-dark-safe-accent absolute top-[90px] left-[190px] whitespace-nowrap rounded-full bg-pres-accent px-4 py-1.5 font-heading text-[22px] font-bold uppercase text-pres-bg shadow-lg">
                {flyingLabel}
              </span>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
