import React from "react";
import logoImg from "@/assets/riseup-asia-logo.png";

/**
 * FB-23: brand lockup — "RISE ASIA" in ALL CAPS + "LLC", with the tagline.
 * Owner direction Oct 19: write it plain; final sign-off on review.
 */
export const BRAND_TAGLINE = "Top 5% Engineers, On Demand";

export const SlideHeader: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 pointer-events-none px-[60px] py-[36px] flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={logoImg}
          alt="RISE ASIA LLC"
          className="h-[48px] w-auto opacity-80 object-contain"
        />
        <div className="flex flex-col">
          <span className="font-heading text-[20px] font-bold tracking-[0.18em] text-white">
            RISE ASIA LLC
          </span>
          <span className="text-[13px] tracking-[0.08em] text-pres-text-muted">
            {BRAND_TAGLINE}
          </span>
        </div>
      </div>
    </header>
  );
};
