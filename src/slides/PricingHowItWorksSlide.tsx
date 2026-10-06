import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, UserCheck, Rocket, HeartHandshake } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";

interface PricingHowItWorksSlideProps {
  onNavigate?: (index: number) => void;
}

export const PricingHowItWorksSlide: React.FC<PricingHowItWorksSlideProps> = () => {
  const steps = [
    {
      num: "STEP 01",
      icon: MessageSquare,
      title: "Discovery Call",
      desc: "Share your requirements, stack, and goals. We match your ideal tier.",
      time: "Day 1",
    },
    {
      num: "STEP 02",
      icon: UserCheck,
      title: "7-Stage Vetting",
      desc: "Review pre-screened top 5% candidates and make your final pick.",
      time: "In 20 min",
    },
    {
      num: "STEP 03",
      icon: Rocket,
      title: "Rapid Onboarding",
      desc: "Your engineer joins your Slack, attends standups, and starts shipping.",
      time: "Day 3–7",
    },
    {
      num: "STEP 04",
      icon: HeartHandshake,
      title: "Ongoing Support",
      desc: "Chief Architect supervision, quality audits, and flexible scaling.",
      time: "Ongoing",
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* -45 degree repeating line texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 18px, hsl(var(--pres-accent) / 0.08) 18px, hsl(var(--pres-accent) / 0.08) 19px)",
          }}
        />

        {/* Ambient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

        {/* Flexbox Centered Main Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col items-center justify-center">
          {/* Title Area - Clean, focused headline without redundant explanation */}
          <div className="mb-12 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[52px] font-bold font-heading tracking-tight text-white"
            >
              How It <span className="text-pres-accent">Works</span>
            </motion.h1>
          </div>

          {/* Steps Container with connecting line */}
          <div className="relative w-full">
            {/* Connecting Gradient Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              className="absolute left-[120px] right-[120px] top-[56px] h-[3px] bg-gradient-to-r from-pres-accent/20 via-pres-accent to-pres-accent/20 origin-left z-0"
            />

            {/* 4 Step Cards Grid */}
            <div className="relative z-10 grid grid-cols-4 gap-7 w-full">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                    className="flex flex-col items-center text-center p-6 rounded-3xl bg-pres-surface/85 border border-white/10 hover:border-pres-accent/40 backdrop-blur-md transition-all shadow-xl"
                  >
                    {/* Circle Icon */}
                    <div className="w-[66px] h-[66px] rounded-full bg-pres-surface border-[3px] border-pres-accent flex items-center justify-center text-pres-accent mb-3.5 shadow-[0_0_25px_rgba(255,173,1,0.3)] z-10">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Step Label */}
                    <span className="text-[11px] font-semibold text-pres-accent tracking-[0.15em] mb-1 uppercase">
                      {step.num}
                    </span>

                    {/* Title */}
                    <h2 className="text-[20px] font-bold font-heading text-white mb-2 leading-snug">
                      {step.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[13.5px] text-pres-text-muted leading-[1.45] mb-4 min-h-[40px]">
                      {step.desc}
                    </p>

                    {/* Time Badge */}
                    <div className="px-3.5 py-1 rounded-full bg-pres-accent/10 border border-pres-accent/25 text-pres-accent text-xs font-semibold">
                      {step.time}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
