import React from "react";
import logoImg from "@/assets/riseup-asia-logo.png";

/**
 * Brand lockup — the Riseup Asia logo with the tagline under it.
 * Owner direction Oct 20: no "RISE ASIA LLC" text beside the logo; the
 * tagline sits below the logo instead.
 */
export const BRAND_TAGLINE = "Top 5% Engineers, On Demand";

export const SlideHeader: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 pointer-events-none px-[60px] py-[36px] flex items-center justify-between">
      <div className="flex flex-col items-start gap-[10px]">
        <img
          src={logoImg}
          alt="Riseup Asia"
          className="h-[48px] w-auto opacity-80 object-contain"
        />
        <span className="text-[14px] tracking-[0.08em] text-pres-text-muted">
          {BRAND_TAGLINE}
        </span>
      </div>
    </header>
  );
};
