import React from "react";

/**
 * UsdNote — the single "Everything is USD" corner note (G-06).
 *
 * All pricing slides show this once, small, in a corner. Everywhere else the
 * "$" symbol alone suffices — never repeat "USD" in body copy.
 */
export const UsdNote: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`absolute bottom-8 right-10 z-10 text-[16px] tracking-wide text-pres-text-dim ${className}`}
  >
    Everything is USD
  </div>
);
