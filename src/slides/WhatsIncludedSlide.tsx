import React from "react";
import { motion } from "framer-motion";
import { Clock, Shield, MessageSquare, Zap, Users, RefreshCw } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";

interface WhatsIncludedSlideProps {
  onNavigate?: (index: number) => void;
}

export const WhatsIncludedSlide: React.FC<WhatsIncludedSlideProps> = () => {
  const guarantees = [
    {
      icon: Clock,
      title: "160 hrs/month",
      desc: "Guaranteed dedicated hours — full-time senior commitment to your codebase.",
    },
    {
      icon: Shield,
      title: "7-Stage Vetting",
      desc: "Live coding, architecture testing, culture fit & fluency — only top 5% qualify.",
    },
    {
      icon: MessageSquare,
      title: "Direct Slack Access",
      desc: "Embedded in your Slack, Teams, and Jira — zero middlemen, zero delays.",
    },
    {
      icon: Zap,
      title: "Hire in 20 Minutes",
      desc: "Pre-vetted bench talent ready to ship immediately without hiring drag.",
    },
    {
      icon: Users,
      title: "Flexible Scaling",
      desc: "Scale up or down smoothly as your roadmap evolves. Zero lock-in.",
    },
    {
      icon: RefreshCw,
      title: "Free Replacement",
      desc: "Not 100% satisfied? We swap the engineer immediately at zero extra cost.",
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Ambient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

        {/* Flexbox Centered Main Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col justify-center">
          {/* Title Area - Clean, focused headline without redundant explanation */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[52px] font-bold font-heading tracking-tight text-white"
            >
              What's <span className="text-pres-accent">Included</span>
            </motion.h1>
          </div>

          {/* 3×2 Grid of Guarantee Cards */}
          <div className="grid grid-cols-3 gap-6 w-full mb-8">
            {guarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.06 }}
                  className="bg-pres-surface/85 border border-pres-accent/20 hover:border-pres-accent/50 rounded-2xl p-5 flex items-start gap-4 backdrop-blur-md transition-all hover:bg-pres-surface shadow-xl"
                >
                  <div className="w-[44px] h-[44px] rounded-xl bg-pres-accent/15 border border-pres-accent/30 flex items-center justify-center text-pres-accent shrink-0 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h2 className="text-[19px] font-bold font-heading text-white mb-1 leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-[13.5px] text-pres-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trial Note Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="self-center flex items-center gap-3 px-6 py-2.5 rounded-full bg-pres-surface/90 border border-pres-accent/30 backdrop-blur-md shadow-lg"
          >
            <Shield className="w-4 h-4 text-pres-accent shrink-0" />
            <span className="text-[15px] text-pres-text-muted font-medium">
              14-day trial with money-back guarantee (conditions apply).
            </span>
          </motion.div>
        </div>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
