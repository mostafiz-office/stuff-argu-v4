import React from "react";
import { motion } from "framer-motion";
import { presentationEase } from "@/lib/presentationMotion";
import {
  MarkerHighlight,
  UnderlineSweep,
  DragReveal,
} from "@/components/presentation/reveal";

export type PainHighlightColor = "yellow" | "red";
export type PainHighlightStyle = "marker" | "underline" | "drag";

export interface PainBeat {
  text: string;
  /** xl = big headline beat, md = smaller supporting beat */
  size: "xl" | "md";
  /** exact pixel size override (split-hook design ratios, Batch 39) */
  sizePx?: number;
  /** split-hook design: this beat is the hook — pure red text */
  hook?: boolean;
  /** split-hook design: a red full-stop dot after the text */
  dotAfter?: boolean;
  /** split-hook design: soft white instead of full white */
  soft?: boolean;
  /** split-hook design: stagger indent class, e.g. "ml-[150px]" */
  indentClass?: string;
  /** extra classes for this beat's line (split-hook packing, shadows) */
  className?: string;
  /** split-hook design: small connector word after the red dot, same line */
  smallAfter?: string;
  /** pixel size of the small connector word */
  smallSizePx?: number;
  /** per-beat font family (e.g. the Bengali display face on slide 2) */
  fontFamily?: string;
  /** per-beat font weight */
  fontWeight?: number;
  /** Batch 50: word-by-word entrance — each word arrives on its own
   *  timing and direction with its own soft drop shadow, instead of
   *  the whole line arriving at once (owner direction, slide 2) */
  wordAnim?: boolean;
  /** Batch 52: words (matched without punctuation) that sit on an
   *  amber gradient pill, per the owner's reference design. */
  pillWords?: string[];
}

const Highlight: React.FC<{
  color: PainHighlightColor;
  style: PainHighlightStyle;
  delay: number;
  children: React.ReactNode;
}> = ({ color, style, delay, children }) => {
  const cc = color === "red" ? "bg-destructive" : "bg-pres-accent";
  if (style === "underline") {
    return (
      <UnderlineSweep colorClassName={cc} delay={delay}>
        {children}
      </UnderlineSweep>
    );
  }
  if (style === "drag") {
    return <DragReveal delay={delay}>{children}</DragReveal>;
  }
  return (
    <MarkerHighlight colorClassName={`${cc}/70`} delay={delay}>
      {children}
    </MarkerHighlight>
  );
};

/**
 * PainBeats — the staged pain-slide headline (FB-08, FB-09, FB-10).
 *
 * Beats arrive one by one, cinematic style (drift up + resolve from blur):
 * the big beat lands first, then the supporting beats. The beat at
 * `highlightIndex` gets the slide's highlight treatment in the configured
 * color (FB-08: yellow/red configurable). Each pain slide uses a different
 * `highlightStyle` so no two slides feel the same (FB-11).
 *
 * Split-hook variant (Batch 39, Outage slide): beats can carry the
 * split-sentence hook title design — subject in white with a red dot,
 * the hook beat in pure red at full size, the payoff in soft white,
 * indented. Slides using it set `highlightIndex` to -1 (no marker:
 * the design has no highlight boxes behind text).
 */
/**
 * Slide 2's Bengali beats are typeset in Noto Sans Bengali, and
 * their spacing was measured against that font's ink. The font is
 * ALSO linked from index.html — but preview builds have served a
 * stale index.html while this file was already current, which
 * silently swapped in a fallback Bengali font and broke the
 * measured gaps (Batch 45). Loading the stylesheet from the
 * component itself makes the font travel with the slide code, so
 * it can never be left behind again.
 */
const BengaliFontLoader: React.FC = () => {
  React.useEffect(() => {
    const id = "noto-sans-bengali-font";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@700;900&display=swap";
      document.head.appendChild(link);
    }
  }, []);
  return null;
};

/** Batch 50: a little soft drop shadow carried by every word. */
const WORD_SHADOW =
  "0 8px 22px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.5)";

// Batch 52: gradient pill highlight (owner's reference design) — the key
// word sits on a gradient pill, popping in just after its line arrives.
// Batch 53 (owner): the pill background is TRANSLUCENT like the
// reference — a glassy amber gradient with a light top edge.
// Batch 54 (owner, after comparing with the reference): the pill is a
// DARK amber glass (deep amber, lighter at the top) with a WHITE word —
// the reference's dark-glass structure in our amber, against the bold
// plain words around it.
// Batch 56 (owner: typography is Ubuntu; pill top padding too much):
// pill geometry now MEASURED from the owner's reference — pill height
// ≈ 1.1 × font size (was 1.24em), side padding ≈ 0.24em, radius
// ≈ 0.13em, word at Ubuntu 500. lineHeight 1 on the pill centers the
// ink optically (at the inherited 0.96 the ink sat low, which read as
// excess top padding).
function PillWord({
  children,
  delay,
}: {
  children: string;
  delay: number;
}) {
  return (
    <motion.span
      className="inline-block"
      style={{
        background:
          "linear-gradient(180deg, rgba(158,102,16,0.66) 0%, rgba(110,68,6,0.74) 100%)",
        border: "1px solid rgba(255,196,86,0.38)",
        color: "#ffffff",
        fontWeight: 500,
        lineHeight: 1,
        borderRadius: "0.13em",
        padding: "0.05em 0.24em",
        margin: "0 0.05em",
        boxShadow: "0 12px 28px rgba(0,0,0,0.5)",
        textShadow: "0 2px 10px rgba(0,0,0,0.45)",
      }}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, delay: delay + 0.35, ease: presentationEase }}
    >
      {children}
    </motion.span>
  );
}

export const PainBeats: React.FC<{
  beats: PainBeat[];
  highlight: PainHighlightColor;
  highlightStyle: PainHighlightStyle;
  highlightIndex?: number;
  className?: string;
}> = ({ beats, highlight, highlightStyle, highlightIndex = 0, className = "" }) => (
  <h1
    className={`pain-headline-shadow font-heading font-bold leading-[0.96] ${className}`}
  >
    <BengaliFontLoader />
    {beats.map((beat, i) => {
      const delay = 0.15 + i * 0.55;
      const sizeClass = beat.size === "xl" ? "text-[96px]" : "text-[54px]";
      // Batch 50 word-by-word mode: words are counted across the
      // whole heading, so the sequence flows line to line — each
      // word arrives 0.5s after the previous one, sliding in from
      // alternating sides; the closing (soft) line's words drop
      // down from above. The small connector word counts as a word
      // and always enters from the right.
      const wordStart = beats
        .slice(0, i)
        .reduce(
          (n, b) => n + b.text.split(" ").length + (b.smallAfter ? 1 : 0),
          0,
        );
      // Batch 52: line text with gradient-pill words (slide 3 design).
      const renderPillText = () => {
        const parts = beat.text.split(" ");
        return (
          <>
            {parts.map((w, wi) => {
              const clean = w.replace(/[^A-Za-z]/g, "");
              const isPill = beat.pillWords!.includes(clean);
              return (
                <React.Fragment key={wi}>
                  {isPill ? <PillWord delay={delay}>{w}</PillWord> : w}
                  {wi < parts.length - 1 ? " " : null}
                </React.Fragment>
              );
            })}
          </>
        );
      };
      const renderWords = () => {
        const parts = beat.text.split(" ");
        const spans = parts.map((word, wi) => {
          const gi = wordStart + wi;
          const from = beat.soft
            ? { y: -46 }
            : gi % 2 === 0
              ? { x: -72 }
              : { x: 72 };
          return (
            <motion.span
              key={wi}
              className="inline-block"
              style={{
                textShadow: WORD_SHADOW,
                ...(wi < parts.length - 1
                  ? { marginRight: "0.27em" }
                  : {}),
              }}
              initial={{ opacity: 0, ...from, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.25 + gi * 0.5,
                duration: 0.6,
                ease: presentationEase,
              }}
            >
              {word}
            </motion.span>
          );
        });
        if (beat.smallAfter) {
          const gi = wordStart + parts.length;
          spans.push(
            <motion.span
              key="small"
              className="inline-block"
              style={{
                fontSize: beat.smallSizePx ?? 28,
                marginLeft: 16,
                textShadow: WORD_SHADOW,
              }}
              initial={{ opacity: 0, x: 72, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.25 + gi * 0.5,
                duration: 0.6,
                ease: presentationEase,
              }}
            >
              {beat.smallAfter}
            </motion.span>,
          );
        }
        return <>{spans}</>;
      };
      const inner = beat.wordAnim ? (
        renderWords()
      ) : beat.pillWords && beat.pillWords.length > 0 ? (
        renderPillText()
      ) : (
        <>
          {beat.text}
          {beat.dotAfter && <span className="text-[#FF0000]">.</span>}
          {beat.smallAfter && (
            <span
              style={{
                fontSize: beat.smallSizePx ?? 28,
                marginLeft: 16,
              }}
            >
              {beat.smallAfter}
            </span>
          )}
        </>
      );
      const content = beat.wordAnim ? (
        inner
      ) : i === highlightIndex && !beat.pillWords ? (
          <Highlight
            color={highlight}
            style={highlightStyle}
            delay={delay + 0.3}
          >
            {inner}
          </Highlight>
        ) : (
          inner
        );
      return (
        <motion.span
          key={i}
          className={`block ${beat.sizePx ? "" : sizeClass} ${
            beat.hook ? "text-[#FF0000]" : ""
          } ${beat.soft ? "text-white/90" : ""} ${beat.indentClass ?? ""} ${
            beat.className ?? ""
          }`}
          style={{
            ...(beat.sizePx ? { fontSize: beat.sizePx } : {}),
            ...(beat.fontFamily ? { fontFamily: beat.fontFamily } : {}),
            ...(beat.fontWeight ? { fontWeight: beat.fontWeight } : {}),
          }}
          {...(beat.wordAnim
            ? {
                initial: { opacity: 1 },
                animate: { opacity: 1 },
                transition: { duration: 0 },
              }
            : {
                initial: { opacity: 0, y: 34, filter: "blur(8px)" },
                animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                transition: { delay, duration: 0.85, ease: presentationEase },
              })}
        >
          {content}
        </motion.span>
      );
    })}
  </h1>
);
