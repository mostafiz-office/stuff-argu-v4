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
 * Style source: the "Apply" button on the owner's Bootcamp Feedback reference
 * slide — amber pill, dark bold text, fully rounded. `pres-dark-safe-accent`
 * keeps the dark-on-amber contrast safe on mobile browsers that auto-darken.
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
    "presentation-action presentation-focus inline-flex items-center justify-center gap-3 rounded-full font-heading font-bold whitespace-nowrap transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-pres-accent hover:bg-pres-accent-glow text-pres-bg pres-dark-safe-accent text-[24px] px-10 py-5 shadow-[0_0_25px_rgba(255,173,1,0.35)]"
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
