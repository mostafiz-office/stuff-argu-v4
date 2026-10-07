import React from "react";
import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp } from "@/lib/presentationMotion";

export const SolutionTransitionSlide: React.FC = () => {
  return (
    <ScaledSlide>
      <section className="slide-dark-bg relative flex h-[1080px] w-[1920px] items-center justify-center overflow-hidden font-sans text-pres-text">
        <SlideHeader />

        <div className="absolute left-1/2 top-1/2 h-[430px] w-[1080px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pres-accent/5 blur-[150px]" />

        <motion.h1
          {...fadeUp(0.08, 28)}
          className="relative z-10 max-w-[1840px] whitespace-nowrap px-[60px] text-center font-heading text-[124px] font-bold leading-[1.02] tracking-normal text-pres-text"
        >
          We have <span className="text-pres-accent">solutions</span> for you.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.22, duration: 0.5 }}
          className="absolute bottom-[126px] h-[6px] w-[180px] origin-center rounded-full bg-pres-accent"
        />
      </section>
    </ScaledSlide>
  );
};