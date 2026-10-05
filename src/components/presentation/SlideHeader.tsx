import React from "react";
import logoImg from "@/assets/riseup-asia-logo.png";

export const SlideHeader: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 pointer-events-none px-[60px] py-[36px] flex items-center justify-between">
      <img
        src={logoImg}
        alt="RiseUp Asia"
        className="h-[48px] w-auto opacity-80 object-contain"
      />
    </header>
  );
};
