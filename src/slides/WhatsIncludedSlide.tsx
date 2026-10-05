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
      desc: "Guaranteed dedicated hours — full-time commitment to your project.",
    },
    {
      icon: Shield,
      title: "7-Stage Vetting",
      desc: "Technical tests, live coding, English fluency, culture fit, and 4 more stages — only top 5% pass.",
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      desc: "Slack, Teams, or your preferred tool — no middlemen, no delays.",
    },
    {
      icon: Zap,
      title: "Hire in 20 Minutes",
      desc: "Pre-vetted bench talent ready to start immediately. Niche roles filled within 30 days.",
    },
    {
      icon: Users,
      title: "Flexible Scaling",
      desc: "Add or reduce team members as your project evolves. No lock-in.",
    },
    {
      icon: RefreshCw,
      title: "Free Replacement",
      desc: "Not satisfied? We'll replace the developer at no extra cost.",
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans">
        <SlideHeader />

        {/* Ambient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

        {/* Title Area */}
        <div className="absolute left-[80px] top-[70px] z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[56px] font-bold font-heading tracking-tight text-white mb-1.5"
          >
            What's <span className="text-pres-accent">Included</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[19px] text-pres-text-muted"
          >
            Every plan comes with these guarantees — no extra charges.
          </motion.p>
        </div>

        {/* 3×2 Grid of Guarantee Cards */}
        <div className="absolute left-[80px] right-[80px] top-[215px] bottom-[210px] z-10 grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-4">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + idx * 0.08 }}
                className="bg-pres-surface/80 border border-pres-accent/15 hover:border-pres-accent/40 rounded-2xl p-6 flex items-start gap-4 backdrop-blur-md transition-all hover:bg-pres-surface"
              >
                <div className="w-[48px] h-[48px] rounded-xl bg-pres-accent/12 border border-pres-accent/25 flex items-center justify-center text-pres-accent shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h2 className="text-xl font-bold font-heading text-white mb-1.5">
                    {item.title}
                  </h2>
                  <p className="text-[14px] text-pres-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trial Note - Strict 145px clearance ending at bottom-[145px] */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="absolute bottom-[145px] left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 px-6 py-2.5 rounded-full bg-pres-surface/90 border border-pres-accent/25 backdrop-blur-md shadow-lg"
        >
          <Shield className="w-4 h-4 text-pres-accent shrink-0" />
          <span className="text-[17px] text-pres-text-muted font-medium">
            14-day trial with money-back guarantee (conditions apply).
          </span>
        </motion.div>
      </div>
    </ScaledSlide>
  );
};
