import React from "react";
import { motion, useAnimationControls } from "framer-motion";
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
   * when true, the fillWord's letters become a vessel for liquid
   * (owner direction Oct 20): the gradient copy is gated by a clip
   * window whose top edge is a travelling wave — on mount the liquid
   * rises inside the letters and STOPS at 80% of the glyph height
   * (the number made literal: water fills only 80% of "80%", the top
   * of each digit stays empty; surface level 32% of the word box =
   * baseline 89% minus 80% of the 71.6% cap span, from the measured
   * Plus Jakarta Sans metrics), then the wave keeps drifting forever
   * at that line. Words after it in the same line wait an extra 1s
   * so the sequence reads: first word, liquid fills, rest of the line.
   */
  fillGradient?: boolean;
}

/**
 * A clip polygon whose top edge is a sine wave at `level` (percent of
 * the word box height, measured from the top) with travelling `phase`.
 * Point count is constant so framer can interpolate between frames.
 */
const liquidPolygon = (level: number, phase: number): string => {
  const pts: string[] = [];
  for (let x = 0; x <= 100; x += 5) {
    const y = level + Math.sin((x / 100) * Math.PI * 3 + phase) * 3;
    pts.push(`${x}% ${y.toFixed(2)}%`);
  }
  return `polygon(${pts.join(", ")}, 100% 100%, 0% 100%)`;
};

/**
 * The liquid fill word ("80%"): gradient letters revealed by a rising,
 * wavy clip window, so the color inside the letters behaves like
 * water — it fills on mount and its surface never stops moving.
 */
const LiquidWord = ({ word, delay }: { word: string; delay: number }) => {
  const controls = useAnimationControls();

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const rise: string[] = [];
      for (let f = 0; f <= 10; f++) {
        rise.push(liquidPolygon(102 - (102 - 32) * (f / 10), (f / 10) * Math.PI * 3));
      }
      await controls.start({
        clipPath: rise,
        transition: { delay: delay + 0.15, duration: 1.25, ease: "easeInOut" },
      });
      if (cancelled) return;
      const loop: string[] = [];
      for (let f = 0; f <= 12; f++) {
        loop.push(liquidPolygon(32 + Math.sin((f / 12) * Math.PI * 2) * 0.7, (f / 12) * Math.PI * 2));
      }
      controls.start({
        clipPath: loop,
        transition: { duration: 2.8, repeat: Infinity, ease: "linear" },
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [controls, delay]);

  return (
    <span className="relative mx-[0.09em] inline-block">
      {/* white base copy — the word is always fully present in white;
          the liquid paints over its bottom 80%, so the top of every
          digit above the waterline stays white text */}
      <span className="text-white">{word}</span>
      {/* the liquid copy: gradient letters under the wavy clip */}
      <motion.span
        aria-hidden
        animate={controls}
        initial={{ clipPath: liquidPolygon(102, 0) }}
        className="absolute inset-0"
      >
        <span className="text-pres-accent">{word.charAt(0)}</span>
        <span className="bg-[linear-gradient(90deg,#ffc95e_0%,#ffdf9e_55%,#fff3cf_100%)] bg-clip-text text-transparent">
          {word.slice(1)}
        </span>
      </motion.span>
      {" "}
    </span>
  );
};

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
          baseDelay + i * 0.08 + (fillIdx >= 0 && i > fillIdx ? 1.0 : 0);
        if (word === fillWord) {
          if (fillGradient) {
            return <LiquidWord key={i} word={word} delay={delay} />;
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
