import React from "react";
import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp } from "@/lib/presentationMotion";
import logo from "@/assets/riseup-asia-logo.png";

export const WhoWeAreSlide: React.FC = () => (
  <ScaledSlide>
    <section className="slide-dark-bg relative flex h-[1080px] w-[1920px] flex-col items-center justify-center overflow-hidden font-sans text-pres-text">
      <SlideHeader />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pres-accent/10 blur-[170px]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 font-heading text-[520px] font-bold leading-[0.9] text-pres-accent drop-shadow-[0_0_60px_hsl(var(--pres-accent)/0.35)]"
      >
        ?
      </motion.div>
      <motion.h1 {...fadeUp(0.35, 24)} className="relative z-10 mt-6 font-heading text-[110px] font-bold leading-none">
        Who we are<span className="text-pres-accent">?</span>
      </motion.h1>
    </section>
  </ScaledSlide>
);

export const BrandLogoSlide: React.FC = () => (
  <ScaledSlide>
    <section className="slide-dark-bg relative flex h-[1080px] w-[1920px] items-center justify-center overflow-hidden font-sans text-pres-text">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pres-accent/10 blur-[170px]" />
      <motion.img
        src={logo}
        alt="Riseup Asia"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-h-[420px] max-w-[1200px] object-contain"
      />
    </section>
  </ScaledSlide>
);
