import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, Sparkles, Check, Linkedin } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import marekImg from "@/assets/marek.png";

interface PricingCoverV1Props {
  onNavigate?: (index: number) => void;
  onToggleCover?: () => void;
  coverVariant?: string;
}

export const PricingCoverV1: React.FC<PricingCoverV1Props> = ({
  onNavigate,
  onToggleCover,
}) => {
  const handleExploreTiers = () => {
    if (onNavigate) {
      onNavigate(1);
    }
  };

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Ambient radial glows */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-pres-accent/5 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />

        {/* Center Photo: Marek Portrait */}
        <div className="absolute left-[650px] bottom-0 w-[780px] h-[920px] z-4 pointer-events-none flex items-end justify-center overflow-visible">
          <img
            src={marekImg}
            alt="Marek K."
            className="max-w-full max-h-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] scale-105 origin-bottom"
          />
        </div>

        {/* Main Content Layout: Flexbox Centered (justify-content: center; align-items: center;) */}
        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex items-center justify-between">
          {/* Left Content Area (w-[650px]) */}
          <div className="w-[650px] flex flex-col justify-center">
            {/* Badge with Cover Variant indicator & Switch button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-3.5"
            >
              <div className="w-[42px] h-[42px] rounded-xl bg-black/40 border border-white/15 flex items-center justify-center text-pres-accent shadow-sm">
                <Users className="w-5 h-5 text-pres-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-white/50 block">
                    Cover V1 · Direct Execution
                  </span>
                  {onToggleCover && (
                    <button
                      onClick={onToggleCover}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pres-accent/15 hover:bg-pres-accent/25 text-pres-accent border border-pres-accent/30 text-[10px] font-mono transition-all cursor-pointer"
                      title="Click to alternate to Cover V3"
                    >
                      <span>⇄ Switch to Cover V3</span>
                    </button>
                  )}
                </div>
                <span className="text-xs text-pres-accent font-medium block">
                  Stop Losing Sleep Over Tech Debt
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[60px] leading-[1.08] font-bold font-heading mb-3 tracking-tight"
            >
              Stop Losing Sleep
              <br />
              <span className="text-pres-accent">Over Tech Debt.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[17px] leading-[1.48] text-pres-text-muted mb-4 max-w-[580px]"
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
              className="flex items-center gap-4 mb-4"
            >
              <a
                href="https://client.rasia.pro/hiring-v1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-pres-accent hover:bg-pres-accent-glow text-pres-bg pres-dark-safe-accent font-semibold text-base transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(255,173,1,0.35)] cursor-pointer"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4 text-pres-bg pres-dark-safe-accent" />
              </a>

              <button
                onClick={handleExploreTiers}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-pres-accent/40 hover:border-pres-accent hover:bg-pres-accent/10 text-pres-accent font-medium text-base transition-all transform hover:scale-105 cursor-pointer"
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
              className="relative block w-full max-w-[540px] p-3.5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md hover:border-white/30 hover:bg-black/80 transition-all duration-300 group cursor-pointer shadow-xl"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 bg-zinc-900 shrink-0">
                    <img
                      src={marekImg}
                      alt="Marek K."
                      className="w-full h-full object-cover object-[center_12%] scale-135"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white text-[14px] font-heading leading-tight">
                      Marek K.
                    </div>
                    <div className="text-[11px] text-white/50 leading-tight">
                      Tech Founder &amp; CEO · Client Partner
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-medium tracking-wide">
                  <Linkedin className="w-3 h-3 fill-current text-blue-400" />
                  <span>Verified</span>
                </div>
              </div>
              <p className="text-[12.5px] text-white/80 italic leading-relaxed">
                "Solid and high quality work... the smoothest on-boarding process I have had in my whole career."
              </p>
              <div className="text-right text-white/40 group-hover:text-pres-accent group-hover:translate-x-1 transition-all text-xs mt-0.5">
                →
              </div>
            </motion.a>
          </div>

          {/* Right Content Area (w-[440px]) */}
          <div className="w-[440px] flex flex-col justify-center">
            {/* Marek Recommendation Card 2 (In the upper head area on the right) */}
            <motion.a
              href="https://www.linkedin.com/in/alimkarim/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative block w-full p-3.5 mb-3.5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md hover:border-white/30 hover:bg-black/80 transition-all duration-300 group cursor-pointer shadow-xl"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 bg-zinc-900 shrink-0">
                    <img
                      src={marekImg}
                      alt="Marek K."
                      className="w-full h-full object-cover object-[center_12%] scale-135"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white text-[14px] font-heading leading-tight">
                      Marek K.
                    </div>
                    <div className="text-[11px] text-white/50 leading-tight">
                      Engineering Leader | AI-Powered Platforms
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-medium tracking-wide">
                  <Linkedin className="w-3 h-3 fill-current text-blue-400" />
                  <span>Verified</span>
                </div>
              </div>
              <p className="text-[12.5px] text-white/80 italic leading-relaxed">
                "A skillful professional and kind communicator."
              </p>
              <div className="text-right text-white/40 group-hover:text-pres-accent group-hover:translate-x-1 transition-all text-xs mt-0.5">
                →
              </div>
            </motion.a>

            {/* Clean Title-Only Badges */}
            <div className="flex flex-col gap-2.5 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-black/50 border border-white/15 text-white backdrop-blur-md hover:border-pres-accent/50 hover:bg-black/75 transition-all shadow-lg"
              >
                <div className="w-8 h-8 rounded-lg bg-pres-accent/15 border border-pres-accent/30 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-pres-accent" />
                </div>
                <p className="text-[15px] font-bold font-heading">Top 5% Vetted Talent</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-black/50 border border-white/15 text-white backdrop-blur-md hover:border-pres-accent/50 hover:bg-black/75 transition-all shadow-lg"
              >
                <div className="w-8 h-8 rounded-lg bg-pres-accent/15 border border-pres-accent/30 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-pres-accent" />
                </div>
                <p className="text-[15px] font-bold font-heading">Hire in 20 Minutes</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-black/50 border border-white/15 text-white backdrop-blur-md hover:border-pres-accent/50 hover:bg-black/75 transition-all shadow-lg"
              >
                <div className="w-8 h-8 rounded-lg bg-pres-accent/15 border border-pres-accent/30 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-pres-accent" />
                </div>
                <p className="text-[15px] font-bold font-heading">Zero Risk Guarantee</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
