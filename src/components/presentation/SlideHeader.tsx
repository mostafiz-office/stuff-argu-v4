import React from "react";
import logoImg from "@/assets/riseup-asia-logo.png";

/**
 * Brand lockup — the Riseup Asia logo with the tagline under it.
 * Owner direction Oct 20: no "RISE ASIA LLC" text beside the logo; the
 * tagline sits below the logo instead.
 *
 * Lockup width (owner direction Oct 20: logo at 100% opacity, and the
 * tagline exactly as wide as the logo): the logo PNG is 854×214 with the
 * visible artwork at 820×168 (transparent padding). At h-[54px] the box
 * is 54 × 854/214 ≈ 216px wide; the artwork spans x ≈ 6px → 213px
 * (≈207px wide). The tagline box is set to that artwork span and the
 * line is justified to fill it exactly (Poppins 400 measures ≈204px at
 * 13.5px, so justification adds under 1px per word gap).
 */
export const BRAND_TAGLINE = "Top 5% Engineers, On Demand";

export const SlideHeader: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 pointer-events-none px-[60px] py-[36px] flex items-center justify-between">
      <div className="flex flex-col items-start gap-[10px]">
        <img
          src={logoImg}
          alt="Riseup Asia"
          className="h-[54px] w-auto object-contain"
        />
        <span className="ml-[6px] block w-[207px] whitespace-nowrap text-[13.5px] text-pres-text-muted [text-align:justify] [text-align-last:justify]">
          {BRAND_TAGLINE}
        </span>
      </div>
    </header>
  );
};
