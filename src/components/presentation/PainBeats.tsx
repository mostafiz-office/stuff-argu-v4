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
      const inner = (
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
      const content =
        i === highlightIndex ? (
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
          initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay, duration: 0.85, ease: presentationEase }}
        >
          {content}
        </motion.span>
      );
    })}
  </h1>
);
