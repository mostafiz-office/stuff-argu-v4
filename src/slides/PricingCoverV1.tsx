import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, CheckCircle, Sparkles, Linkedin } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import marekImg from "@/assets/marek.png";

interface PricingCoverV1Props {
  onNavigate?: (index: number) => void;
}

export const PricingCoverV1: React.FC<PricingCoverV1Props> = ({ onNavigate }) => {
  const handleExploreTiers = () => {
    if (onNavigate) {
      onNavigate(1);
    }
  };

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans">
        <SlideHeader />

        {/* Ambient radial glow */}
        <div className="absolute top-1/3 left-1/5 w-[650px] h-[650px] rounded-full bg-pres-accent/8 blur-[140px] pointer-events-none" />

        {/* Left Content Area - Vertically Centered (top-1/2 -translate-y-1/2) */}
        <div className="absolute left-[80px] top-1/2 -translate-y-1/2 w-[660px] z-10 flex flex-col justify-center">
          {/* Icon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[46px] h-[46px] rounded-xl bg-black/40 border border-white/15 flex items-center justify-center text-pres-accent shadow-sm mb-4"
          >
            <Users className="w-5 h-5 text-pres-accent" />
          </motion.div>

          {/* Subtitle / Category */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-2.5 block"
          >
            Engineering Relief · riseup-asia.com
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[68px] leading-[1.05] font-bold font-heading mb-4 tracking-tight"
          >
            Losing Sleep Over
            <br />
            <span className="text-pres-accent">Engineering Debt?</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[18px] leading-[1.5] text-pres-text-muted mb-5 max-w-[580px]"
          >
            Stop waking up at midnight to fix fragile vibe-code and AI bugs.
            <br />
            Save 80% hiring drag with top 5% engineers ready in 20 minutes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 mb-6"
          >
            <a
              href="https://client.rasia.pro/hiring-v1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-pres-accent hover:bg-pres-accent-glow text-pres-bg pres-dark-safe-accent font-semibold text-base transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(255,173,1,0.35)] cursor-pointer"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-4 h-4 text-pres-bg pres-dark-safe-accent" />
            </a>

            <button
              onClick={handleExploreTiers}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-pres-accent/40 hover:border-pres-accent hover:bg-pres-accent/10 text-pres-accent font-medium text-base transition-all transform hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Tiers</span>
            </button>
          </motion.div>

          {/* Marek Recommendation Card 1 (Below the two buttons on the left) */}
          <motion.a
            href="https://www.linkedin.com/in/alimkarim/details/recommendations/?detailScreenTabIndex=0"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="relative block w-full max-w-[540px] p-4 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md hover:border-white/30 hover:bg-black/80 transition-all duration-300 group cursor-pointer shadow-xl"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-zinc-900 shrink-0">
                  <img
                    src={marekImg}
                    alt="Marek K."
                    className="w-full h-full object-cover object-[center_12%] scale-135"
                  />
                </div>
                <div>
                  <div className="font-bold text-white text-[15px] font-heading leading-tight">
                    Marek K.
                  </div>
                  <div className="text-[12px] text-white/50 leading-tight">
                    Tech Founder &amp; CEO · Client Partner
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-medium tracking-wide">
                <Linkedin className="w-3 h-3 fill-current text-blue-400" />
                <span>Verified</span>
              </div>
            </div>
            <p className="text-[13px] text-white/80 italic leading-relaxed">
              "Solid and high quality work... the smoothest on-boarding process I have had in my whole career."
            </p>
            <div className="text-right text-white/40 group-hover:text-pres-accent group-hover:translate-x-1 transition-all text-xs mt-1">
              →
            </div>
          </motion.a>
        </div>

        {/* Center Photo: Marek Portrait */}
        <div className="absolute left-[650px] bottom-0 w-[780px] h-[920px] z-4 pointer-events-none flex items-end justify-center overflow-visible">
          <img
            src={marekImg}
            alt="Marek K."
            className="max-w-full max-h-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] scale-105 origin-bottom"
          />
        </div>

        {/* Right Content Area - Vertically Centered (top-1/2 -translate-y-1/2) matching left side balance */}
        <div className="absolute right-[80px] top-1/2 -translate-y-1/2 w-[440px] z-20 flex flex-col justify-between h-[640px]">
          {/* Marek Recommendation Card 2 (In the head area on the right) */}
          <motion.a
            href="https://www.linkedin.com/in/alimkarim/details/recommendations/?detailScreenTabIndex=0"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative block w-full p-4 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md hover:border-white/30 hover:bg-black/80 transition-all duration-300 group cursor-pointer shadow-xl"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-zinc-900 shrink-0">
                  <img
                    src={marekImg}
                    alt="Marek K."
                    className="w-full h-full object-cover object-[center_12%] scale-135"
                  />
                </div>
                <div>
                  <div className="font-bold text-white text-[15px] font-heading leading-tight">
                    Marek K.
                  </div>
                  <div className="text-[12px] text-white/50 leading-tight">
                    Engineering Leader | AI-Powered Platforms
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-medium tracking-wide">
                <Linkedin className="w-3 h-3 fill-current text-blue-400" />
                <span>Verified</span>
              </div>
            </div>
            <p className="text-[13px] text-white/80 italic leading-relaxed">
              "A skillful professional and kind communicator."
            </p>
            <div className="text-right text-white/40 group-hover:text-pres-accent group-hover:translate-x-1 transition-all text-xs mt-1">
              →
            </div>
          </motion.a>

          {/* Floating Keyword Badges */}
          <div className="flex flex-col gap-3.5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-black/60 border border-white/15 text-white backdrop-blur-md"
            >
              <CheckCircle className="w-5 h-5 text-pres-accent shrink-0" />
              <div>
                <p className="text-sm font-bold font-heading">Top 5% Talent</p>
                <p className="text-xs text-white/60">Strict 7-stage vetting process</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-black/60 border border-white/15 text-white backdrop-blur-md"
            >
              <CheckCircle className="w-5 h-5 text-pres-accent shrink-0" />
              <div>
                <p className="text-sm font-bold font-heading">Hire in 20 Minutes</p>
                <p className="text-xs text-white/60">Pre-vetted bench engineers ready</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-black/60 border border-white/15 text-white backdrop-blur-md"
            >
              <CheckCircle className="w-5 h-5 text-pres-accent shrink-0" />
              <div>
                <p className="text-sm font-bold font-heading">60% Cost Savings</p>
                <p className="text-xs text-white/60">Compared to direct US hiring</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="absolute bottom-[42px] left-[80px] z-10 text-xs text-pres-text-dim tracking-wider font-mono"
        >
          riseup-asia.com
        </motion.div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
