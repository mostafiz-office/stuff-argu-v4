import React from "react";
import { motion } from "framer-motion";
import { presentationEase } from "@/lib/presentationMotion";
import {
  MarkerHighlight,
  UnderlineSweep,
  DragReveal,
} from "@/components/presentation/reveal";
import { blackHoleImage } from "@/assets/blackHoleData";

export type PainHighlightColor = "yellow" | "red";
export type PainHighlightStyle = "marker" | "underline" | "drag";

export interface PainBeat {
  text: string;
  /** xl = big headline beat, md = smaller supporting beat */
  size?: "xl" | "md";
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
  /** Batch 62: words wrapped in a design-tool selection box
   * (amber outline, corner handles, mouse arrow) instead of a pill. */
  selectWords?: string[];
  /** Batch 82: per-word text colours for wordAnim lines, keyed by the
   * word without punctuation (slide 2 hook: production amber, is
   * white, down red). Inline colour beats the line-level hook class. */
  wordColors?: Record<string, string>;
  /** Batch 57: character index replaced by a gradient letter tile
   *  (the letter-tile device from the owner's Design/Publish ref). */
  tileAt?: number;
  /** What the tile bears: an hourglass symbol or the letter itself. */
  tileSymbol?: "hourglass" | "letter" | "person";
  /** Batch 57: character index replaced by an object (the
   *  object-letter device from the same reference). */
  objectAt?: number;
  /** The object that replaces the letter. */
  objectKind?: "blackhole";
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

// Batch 62: selection-box device (owner's design-tool reference) —
// the highlight is a rectangle SELECTION drawn over the word: amber
// outline, white corner handles, a mouse arrow settling at the
// bottom-right corner. The word itself stays plain (bold white) —
// a selection never recolors its text. The frame draws in from the
// top-left like a mouse drag (clip-path), handles reveal as the
// drag passes their corner.
function SelectWord({
  children,
  delay,
}: {
  children: string;
  delay: number;
}) {
  const handle = (pos: React.CSSProperties) => (
    <span
      style={{
        position: "absolute",
        width: "0.085em",
        height: "0.085em",
        background: "#ffffff",
        border: "0.018em solid #ffad01",
        zIndex: 2,
        ...pos,
      }}
    />
  );
  return (
    <span
      className="relative inline-block"
      style={{ lineHeight: 1, padding: "0.14em 0.14em", margin: "0 0.08em" }}
    >
      {children}
      <motion.span
        aria-hidden
        style={{
          position: "absolute",
          top: "-0.055em",
          left: "-0.055em",
          right: "-0.055em",
          bottom: "-0.055em",
          zIndex: 1,
        }}
        initial={{ clipPath: "inset(0% 100% 100% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 0.5, delay: delay + 0.35, ease: presentationEase }}
      >
        <span
          style={{
            position: "absolute",
            top: "0.055em",
            left: "0.055em",
            right: "0.055em",
            bottom: "0.055em",
            border: "0.025em solid #ffad01",
          }}
        />
        {handle({ top: "0.0125em", left: "0.0125em" })}
        {handle({ top: "0.0125em", right: "0.0125em" })}
        {handle({ bottom: "0.0125em", left: "0.0125em" })}
        {handle({ bottom: "0.0125em", right: "0.0125em" })}
      </motion.span>
      <motion.svg
        aria-hidden
        viewBox="0 0 24 24"
        style={{
          position: "absolute",
          width: "0.3em",
          height: "0.3em",
          right: "-0.19em",
          bottom: "-0.22em",
          zIndex: 3,
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
        }}
        initial={{ opacity: 0, x: 10, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.35, delay: delay + 0.95, ease: presentationEase }}
      >
        <path
          d="M5 3l14 7-6.2 1.6L9.5 18z"
          fill="#ffad01"
          stroke="rgba(0,0,0,0.55)"
          strokeWidth="1"
        />
      </motion.svg>
    </span>
  );
}


// 2026-11-02 feedback round 2, slide 3 "AI":
// a circular outline draws around the word, then a yellow
// background fills behind it and stays. Equal 0.14em padding.
function CircleFillWord({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="relative inline-block" style={{ lineHeight: 1, padding: "0.14em 0.14em", margin: "0 0.08em" }}>
      <motion.span
        aria-hidden
        style={{ position: "absolute", inset: "-0.14em", borderRadius: "50%", border: "0.025em solid #ffad01", zIndex: 1 }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.35, ease: presentationEase }}
      />
      <motion.span
        aria-hidden
        style={{ position: "absolute", inset: "-0.14em", borderRadius: "50%", background: "#ffad01", zIndex: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.95, ease: presentationEase }}
      />
      <motion.span
        className="relative"
        style={{ zIndex: 2 }}
        initial={{ color: "rgba(255,255,255,1)" }}
        animate={{ color: "rgba(24,18,8,1)" }}
        transition={{ delay: delay + 1.05, duration: 0.3, ease: presentationEase }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// 2026-11-02 feedback round 2, slide 2 "sleep": yellow background
// with equal 0.14em padding that appears, holds, disappears,
// looping so the appear/disappear cycle repeats.
// 2026-11-03 fix (slide 2/13): the word must never be plain.
// A yellow border outline in the EXACT same box (same inset,
// same corner radius) crossfades against the fill, so when the
// fill hides the outline shows, and when the outline hides the
// fill shows. Only opacity animates — no position, scale, or
// size change anywhere — so "sleep" and its neighbours ("no",
// "tonight") cannot move. Outer box, padding, and margin are
// unchanged from the 2026-11-02 version.
// 2026-11-03 fix (slide 2/13, "sleep" padding): equal CSS padding does NOT
// give equal VISUAL padding for this word. Measured with the real Plus
// Jakarta Sans ExtraBold metrics at 63px (ascent 66, descent 14, ink of
// "sleep" 9.5px below the line-box top and 6.5px below the line-box
// bottom, left bearing 1px, right bearing 2.2px), the old 0.14em-all-sides
// padding gave visual gaps of left 9.8px, right 11.0px, top 18.3px,
// bottom 2.3px — tight at the bottom and left, roomy at the top, exactly
// as seen in the user's screenshot. The padding below is therefore
// deliberately asymmetric in code so the MEASURED ink-to-edge gaps are
// all 11px: top 0.024em, right 0.140em, bottom 0.278em, left 0.159em.
// Do not "tidy" these back to equal values — that reintroduces the bug.
// Colour (#ffad01) and animation are unchanged; only opacity animates,
// so the word and its neighbours cannot move.
function LoopHighlightWord({ children, delay }: { children: string; delay: number }) {
  const times = [0, 0.25, 0.6, 0.85, 1];
  const transition = { delay, duration: 3.2, times, repeat: Infinity, repeatDelay: 0.8, ease: presentationEase };
  return (
    <span className="relative inline-block" style={{ lineHeight: 1, padding: "0.024em 0.140em 0.278em 0.159em", margin: "0 0.08em" }}>
      <motion.span
        aria-hidden
        style={{ position: "absolute", inset: 0, borderRadius: "0.13em", background: "#ffad01", zIndex: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0, 0] }}
        transition={transition}
      />
      <motion.span
        aria-hidden
        style={{ position: "absolute", inset: 0, borderRadius: "0.13em", border: "0.025em solid #ffad01", background: "transparent", zIndex: 1 }}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 0, 1, 1] }}
        transition={transition}
      />
      <motion.span
        className="relative"
        style={{ zIndex: 2, lineHeight: 1 }}
        initial={{ color: "rgba(255,255,255,1)" }}
        animate={{ color: ["rgba(255,255,255,1)", "rgba(24,18,8,1)", "rgba(24,18,8,1)", "rgba(255,255,255,1)", "rgba(255,255,255,1)"] }}
        transition={transition}
      >
        {children}
      </motion.span>
    </span>
  );
}

// Batch 57: letter-tile device (owner's Design/Publish reference) — a
// letter is replaced by an amber gradient tile, slightly rotated,
// bearing a symbol that means the word's pain (an hourglass for the
// hiring wait) or the letter itself in black.
// Batch 58 (owner): the tile acts like the reference's — oversized
// (0.92em) with negative margins so it overlaps its neighbours and
// sits centred on the cap-height band; hourglass enlarged.
function TileLetter({
  delay,
  symbol,
  letter,
}: {
  delay: number;
  symbol: "hourglass" | "letter" | "person";
  letter: string;
}) {
  return (
    <motion.span
      className="inline-flex items-center justify-center"
      style={{
        width: "0.92em",
        height: "0.92em",
        borderRadius: "0.15em",
        background:
          "linear-gradient(135deg, #ffd97a 0%, #ffad01 55%, #dd8f00 100%)",
        verticalAlign: "-0.1em",
        margin: "0 -0.05em",
        boxShadow: "0 14px 32px rgba(0,0,0,0.55)",
      }}
      initial={{ opacity: 0, scale: 0.7, rotate: -16 }}
      animate={{ opacity: 1, scale: 1, rotate: -6 }}
      transition={{ duration: 0.5, delay: delay + 0.35, ease: presentationEase }}
    >
      {symbol === "hourglass" ? (
        <svg
          viewBox="0 0 64 64"
          aria-hidden
          style={{ height: "0.56em", width: "0.56em" }}
        >
          <path
            fill="#1a1206"
            d="M14 8h36v7H14zM14 49h36v7H14zM20 15h24c0 11-6.6 14.3-12 17 5.4 2.7 12 6 12 17H20c0-11 6.6-14.3 12-17-5.4-2.7-12-6-12-17z"
          />
        </svg>
      ) : symbol === "person" ? (
        // Batch 82 (owner: the hourglass tile does not read as hiring):
        // a person silhouette — head + shoulders — the hire itself.
        <svg
          viewBox="0 0 64 64"
          aria-hidden
          style={{ height: "0.56em", width: "0.56em" }}
        >
          <circle cx="32" cy="20" r="11" fill="#1a1206" />
          <path
            fill="#1a1206"
            d="M10 56c0-10 9.5-18 22-18s22 8 22 18z"
          />
        </svg>
      ) : (
        <span
          style={{
            color: "#1a1206",
            fontWeight: 700,
            fontSize: "0.62em",
            lineHeight: 1,
          }}
        >
          {letter}
        </span>
      )}
    </motion.span>
  );
}

// Batch 57: object-letter device (same reference) — a letter is
// replaced by an object that means the word.
// Batch 58 (owner): the object is a REAL photograph, like the rocket
// in the reference (first the EHT M87 image; Batch 60: the owner's
// own black hole image with a transparent background, kept inside
// its letter space so it never overlaps the h or the l).
function BlackHoleLetter({ delay }: { delay: number }) {
  return (
    <motion.span
      className="inline-block"
      style={{
        // Batch 60 (owner): his own black hole image, pre-cut with a
        // transparent background, sized to sit INSIDE its letter
        // space. Batch 61 (owner-approved growth): box 0.86em, ring
        // ~0.68em; the asset's bright extent (0.409 of box) reaches
        // 0.352em from centre vs the measured 0.370em to the h/l ink
        // — still no touch.
        width: "0.86em",
        height: "0.86em",
        verticalAlign: "-0.16em",
        margin: "0 -0.14em",
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: delay + 0.35, ease: presentationEase }}
    >
      <img
        src={blackHoleImage}
        alt=""
        aria-hidden
        draggable={false}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
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
      // Batch 62: line text with selection-box words (slide 3).
      const renderSelectText = () => {
        const parts = beat.text.split(" ");
        return (
          <>
            {parts.map((w, wi) => {
              const clean = w.replace(/[^A-Za-z]/g, "");
              const isSelect = beat.selectWords!.includes(clean);
              return (
                <React.Fragment key={wi}>
                  {isSelect ? (
                    clean === "AI" ? (
                      <CircleFillWord delay={delay}>{w}</CircleFillWord>
                    ) : (
                      <SelectWord delay={delay}>{w}</SelectWord>
                    )
                  ) : (
                    w
                  )}
                  {wi < parts.length - 1 ? " " : null}
                </React.Fragment>
              );
            })}
          </>
        );
      };
      // Batch 57: line text with letter devices (tile / object letter).
      const renderDeviceText = () => {
        const chars = beat.text.split("");
        return (
          <>
            {chars.map((ch, ci) => {
              if (beat.tileAt === ci)
                return (
                  <TileLetter
                    key={ci}
                    delay={delay}
                    symbol={beat.tileSymbol ?? "letter"}
                    letter={ch}
                  />
                );
              if (beat.objectAt === ci && beat.objectKind === "blackhole")
                return <BlackHoleLetter key={ci} delay={delay} />;
              return <React.Fragment key={ci}>{ch}</React.Fragment>;
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
          // Batch 82: wordAnim lines can now carry per-word colours
          // (slide 2 hook) and selection boxes (slide 2 "sleep", same
          // device as slide 3 "explain"). The box draws after its word
          // lands: entrance delay + 0.6s settle, then the outline
          // sweeps (SelectWord adds +0.35) and the cursor lands (+0.95).
          const clean = word.replace(/[^A-Za-z]/g, "");
          const wordColor = beat.wordColors?.[clean];
          const isSelect = beat.selectWords?.includes(clean);
          const enterDelay = 0.25 + gi * 0.5;
          return (
            <motion.span
              key={wi}
              className="inline-block"
              style={{
                textShadow: WORD_SHADOW,
                ...(wordColor ? { color: wordColor } : {}),
                ...(wi < parts.length - 1
                  ? { marginRight: "0.27em" }
                  : {}),
              }}
              initial={{ opacity: 0, ...from, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: enterDelay,
                duration: 0.6,
                ease: presentationEase,
              }}
            >
              {isSelect ? (
                clean === "sleep" ? (
                  <LoopHighlightWord delay={enterDelay + 0.6}>{word}</LoopHighlightWord>
                ) : (
                  <SelectWord delay={enterDelay + 0.6}>{word}</SelectWord>
                )
              ) : (
                word
              )}
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
      ) : beat.selectWords && beat.selectWords.length > 0 ? (
        renderSelectText()
      ) : beat.pillWords && beat.pillWords.length > 0 ? (
        renderPillText()
      ) : beat.tileAt !== undefined || beat.objectAt !== undefined ? (
        renderDeviceText()
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
      ) : i === highlightIndex &&
        !beat.selectWords &&
        !beat.pillWords &&
        beat.tileAt === undefined &&
        beat.objectAt === undefined ? (
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
