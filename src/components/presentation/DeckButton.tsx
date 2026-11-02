import React from "react";

type DeckButtonProps = {
  children: React.ReactNode;
  /** Renders an <a> when provided, otherwise a <button>. */
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  variant?: "primary" | "outline" | "white";
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

/**
 * DeckButton — the single shared CTA button for the whole deck (FB-04).
 *
 * Spec (owner direction Oct 20, Batch 37): an exact match of the hero
 * "Book a Call" button on present-v1.riseup-asia.com slide 1, read from
 * that deck's own code — flat amber pill (pres-accent, NO gradient, NO
 * shadow), near-black Poppins semibold 17px text, 12px by 30px padding,
 * 8px icon gap; on hover the fill flips to white (pres-text) while the
 * text stays dark, over 0.2s. The outline variant mirrors its sibling
 * outline button on the same row: 1.5px pres-accent/40 border,
 * transparent fill, white text, same size.
 * `pres-dark-safe-accent` keeps the dark-on-amber contrast safe on
 * mobile browsers that auto-darken.
 * Used on the cover, the CTA slide, and every future slide CTA (G-08).
 */
export const DeckButton: React.FC<DeckButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
  rel,
  ariaLabel,
}) => {
  const base =
    "presentation-action presentation-focus deck-button inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold whitespace-nowrap transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-pres-accent hover:bg-pres-text text-pres-bg pres-dark-safe-accent text-[17px] px-[30px] py-[12px]"
      : variant === "white"
        ? "bg-white hover:bg-pres-accent text-pres-bg pres-dark-safe-accent text-[17px] px-[30px] py-[12px]"
        : "border-[1.5px] border-pres-accent/40 text-pres-text hover:bg-pres-accent/10 text-[17px] px-[30px] py-[12px]";
  const cls = `${base} ${styles} ${className}`.trim();

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} aria-label={ariaLabel} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cls}>
      {children}
    </button>
  );
};
