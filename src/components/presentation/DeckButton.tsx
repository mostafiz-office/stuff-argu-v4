import React from "react";

type DeckButtonProps = {
  children: React.ReactNode;
  /** Renders an <a> when provided, otherwise a <button>. */
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  variant?: "primary" | "outline";
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

/**
 * DeckButton — the single shared CTA button for the whole deck (FB-04).
 *
 * Shape source: the "Apply" button on the owner's Bootcamp Feedback reference
 * slide — pill, dark bold text, fully rounded. `pres-dark-safe-accent`
 * keeps the dark-on-amber contrast safe on mobile browsers that auto-darken.
 * Fill (owner direction Oct 20, Batch 36): the primary variant uses the
 * present-v1 deck's "Accent gradient" recipe — linear-gradient(135deg,
 * pres-accent → pres-accent-glow) — instead of flat amber; hover brightens
 * the gradient and lifts the glow shadow.
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
    "presentation-action presentation-focus inline-flex items-center justify-center gap-3 rounded-full font-heading font-bold whitespace-nowrap transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-[linear-gradient(135deg,hsl(var(--pres-accent))_0%,hsl(var(--pres-accent-glow))_100%)] hover:brightness-110 text-pres-bg pres-dark-safe-accent text-[24px] px-10 py-5 shadow-[0_0_25px_rgba(255,173,1,0.35)] hover:shadow-[0_0_38px_rgba(255,173,1,0.5)]"
      : "border-2 border-pres-accent/60 text-pres-accent hover:bg-pres-accent/10 text-[22px] px-9 py-4";
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
