import React from "react";
import logoImg from "@/assets/riseup-asia-logo.png";

/**
 * Brand lockup — the Riseup Asia logo, on its own.
 * Owner direction Oct 20: no "RISE ASIA LLC" text beside the logo.
 * Owner direction Oct 27 (Batch 77): the "Top 5% Engineers, On Demand"
 * tagline below the logo is DELETED — the header is the logo only,
 * deck-wide (this is the one shared header component).
 */
export const SlideHeader: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 pointer-events-none px-[60px] py-[36px] flex items-center justify-between">
      <div className="flex flex-col items-start">
        <img
          src={logoImg}
          alt="Riseup Asia"
          className="h-[54px] w-auto object-contain"
        />
      </div>
    </header>
  );
};
