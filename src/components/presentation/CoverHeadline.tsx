import React from "react";
import { motion } from "framer-motion";
import { presentationEase } from "@/lib/presentationMotion";
import { WaterFill, LabelDrop } from "@/components/presentation/reveal";

export interface CoverHeadlineConfig {
  line1: string;
  line2: string;
  /** word (in either line) that gets the water-fill — the single yellow focus */
  fillWord: string;
  fillPercent: number;
  /** word (in either line) that slow-fades in first, in white */
  fadeWord: string;
  /** word (in either line) that gets the dropped label */
  labelWord: string;
  /** label tone — reviewer leans white ("too much yellow already") */
  labelTone?: "amber" | "white";
  /**
   * word that gets the "Alim Karim" name treatment (owner direction
   * Oct 20): first letter in solid amber, the remaining letters in a
   * pale amber gradient. Optional; only the V1 cover sets it ("Cut").
   */
  accentWord?: string;
  /**
   * when true, the fillWord renders with the same name treatment
   * (gradient letters, NO water-fill box) instead of the WaterFill —
   * and it LOADS like water, left to right (owner direction Oct 20):
   * a faint ghost copy sits in place while the gradient copy is
   * revealed through a clip window growing 0% → 100% width with a
   * glowing waterline at the front, replaying on every mount. Words
   * after it in the same line wait an extra 0.5s so the sequence
   * reads: first word, water load, rest of the line.
   */
  fillGradient?: boolean;
}

/**
 * CoverHeadline — the staged cover animation (FB-02).
 *
 * Three steps, word by word: (1) words fade up in order, except `fadeWord`
 * which fades in slowly on its own; (2) `fillWord` fills up like water via
 * <WaterFill>; (3) a label drops from above onto `labelWord` via <LabelDrop>,
 * the word sinking in and popping back in dark text on the label.
 * Data-driven so the V1/V3 cover variants share one implementation.
 */
export const CoverHeadline: React.FC<{
  config: CoverHeadlineConfig;
  className?: string;
}> = ({ config, className = "" }) => {
  const {
    line1,
    line2,
    fillWord,
    fillPercent,
    fadeWord,
    labelWord,
    labelTone = "white",
    accentWord,
    fillGradient = false,
  } = config;

  const renderLine = (line: string, baseDelay: number) => {
    const words = line.split(" ");
    const fillIdx = fillGradient ? words.indexOf(fillWord) : -1;
    return (
    <span className="block">
      {words.map((word, i) => {
        const delay =
          baseDelay + i * 0.08 + (fillIdx >= 0 && i > fillIdx ? 0.5 : 0);
        if (word === fillWord) {
          if (fillGradient) {
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay, duration: 0.3, ease: presentationEase }}
                className="relative mx-[0.09em] inline-block"
              >
                {/* ghost copy — the word's unfilled state */}
                <span className="text-white/[0.16]">
                  {word.charAt(0)}
                  {word.slice(1)}
                </span>
                {/* gradient copy, revealed left to right like water */}
                <motion.span
                  aria-hidden
                  className="absolute inset-0"
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{
                    delay: delay + 0.15,
                    duration: 1.1,
                    ease: presentationEase,
                  }}
                >
                  <span className="text-pres-accent">{word.charAt(0)}</span>
                  <span className="bg-[linear-gradient(90deg,#ffc95e_0%,#ffdf9e_55%,#fff3cf_100%)] bg-clip-text text-transparent">
                    {word.slice(1)}
                  </span>
                </motion.span>
                {/* the moving waterline at the reveal front */}
                <motion.span
                  aria-hidden
                  className="absolute top-0 bottom-0 w-[0.32em] bg-[linear-gradient(90deg,transparent,rgba(255,173,1,0.45),transparent)]"
                  initial={{ left: "0%", opacity: 0 }}
                  animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                  transition={{
                    delay: delay + 0.15,
                    duration: 1.1,
                    ease: presentationEase,
                    times: [0, 0.08, 0.92, 1],
                  }}
                />
                {" "}
              </motion.span>
            );
          }
          return (
            <React.Fragment key={i}>
              <WaterFill
                percent={fillPercent}
                delay={delay + 0.15}
                duration={1.1}
                className="mx-[0.09em]"
              >
                <motion.span
                  initial={{ opacity: 0, y: 14, color: "#ffffff" }}
                  animate={{ opacity: 1, y: 0, color: "rgba(24,18,8,1)" }}
                  transition={{
                    delay,
                    duration: 0.4,
                    ease: presentationEase,
                    color: { delay: delay + 0.95, duration: 0.35 },
                  }}
                >
                  {word}
                </motion.span>
              </WaterFill>
              {" "}
            </React.Fragment>
          );
        }
        if (word === labelWord) {
          return (
            <React.Fragment key={i}>
              <LabelDrop
                tone={labelTone}
                delay={Math.max(delay, 1.6)}
                className="mx-[0.09em]"
              >
                {word}
              </LabelDrop>
              {" "}
            </React.Fragment>
          );
        }
        const slow = word === fadeWord;
        if (word === accentWord) {
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.4, ease: presentationEase }}
            >
              <span className="text-pres-accent">{word.charAt(0)}</span>
              <span className="bg-[linear-gradient(90deg,#ffc95e_0%,#ffdf9e_55%,#fff3cf_100%)] bg-clip-text text-transparent">
                {word.slice(1)}
              </span>
              {" "}
            </motion.span>
          );
        }
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: slow ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              slow
                ? { delay: 0.85, duration: 0.9, ease: presentationEase }
                : { delay, duration: 0.4, ease: presentationEase }
            }
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </span>
    );
  };

  return (
    <h1
      className={`font-cover font-bold tracking-tight leading-[1.04] whitespace-nowrap ${className}`}
    >
      {renderLine(line1, 0.15)}
      {renderLine(line2, 0.9)}
    </h1>
  );
};
