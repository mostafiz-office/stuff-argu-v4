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
      desc: "Share your requirements, tech stack, and team culture. We'll recommend the right tier.",
      time: "Day 1",
    },
    {
      num: "STEP 02",
      icon: UserCheck,
      title: "7-Stage Vetting",
      desc: "We present candidates who passed our 7-stage assessment. You interview & select.",
      time: "As fast as 20 min",
    },
    {
      num: "STEP 03",
      icon: Rocket,
      title: "Onboarding",
      desc: "Your new team member joins your tools, attends standups, and starts contributing.",
      time: "Day 6–14",
    },
    {
      num: "STEP 04",
      icon: HeartHandshake,
      title: "Ongoing Support",
      desc: "Continuous performance monitoring, monthly check-ins, and scaling as needed.",
      time: "Ongoing",
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans">
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

        {/* Title Area Centered */}
        <div className="absolute left-0 right-0 top-[70px] text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[56px] font-bold font-heading tracking-tight text-white mb-1.5"
          >
            How It <span className="text-pres-accent">Works</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[19px] text-pres-text-muted"
          >
            From first call to productive developer — in under 2 weeks.
          </motion.p>
        </div>

        {/* Connecting Gradient Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          className="absolute left-[200px] right-[200px] top-[320px] h-[3px] bg-gradient-to-r from-pres-accent/30 via-pres-accent to-pres-accent/30 origin-left z-0"
        />

        {/* 4 Step Cards - Strict 145px clearance ending at bottom-[145px] */}
        <div className="absolute left-[80px] right-[80px] top-[270px] bottom-[145px] z-10 grid grid-cols-4 gap-7">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.12 }}
                className="flex flex-col items-center text-center p-6 rounded-3xl bg-pres-surface/80 border border-white/10 hover:border-pres-accent/40 backdrop-blur-md transition-all justify-between"
              >
                <div className="flex flex-col items-center">
                  {/* Circle Icon */}
                  <div className="w-[72px] h-[72px] rounded-full bg-pres-surface border-[3px] border-pres-accent flex items-center justify-center text-pres-accent mb-4 shadow-[0_0_25px_rgba(255,173,1,0.3)] z-10">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Step Label */}
                  <span className="text-[12px] font-semibold text-pres-accent tracking-[0.15em] mb-1.5 uppercase">
                    {step.num}
                  </span>

                  {/* Title */}
                  <h2 className="text-[22px] font-bold font-heading text-white mb-2 leading-snug">
                    {step.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[14px] text-pres-text-muted leading-[1.45]">
                    {step.desc}
                  </p>
                </div>

                {/* Time Badge */}
                <div className="mt-4 px-3.5 py-1 rounded-full bg-pres-accent/10 border border-pres-accent/25 text-pres-accent text-xs font-semibold">
                  {step.time}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ScaledSlide>
  );
};
