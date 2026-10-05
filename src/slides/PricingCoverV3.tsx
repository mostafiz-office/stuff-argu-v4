import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, CheckCircle, Sparkles, Linkedin } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import marekImg from "@/assets/marek.png";

interface PricingCoverV3Props {
  onNavigate?: (index: number) => void;
}

export const PricingCoverV3: React.FC<PricingCoverV3Props> = ({ onNavigate }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const hoverCards = [
    {
      title: "<span class='text-pres-accent font-bold'>20+ Years</span> in Software Engineering",
      desc: "Two decades of hands-on experience across startups, enterprises, and everything in between — from architecture to deployment.",
    },
    {
      title: "Led <span class='text-pres-accent font-bold'>50+ Enterprise</span> Projects",
      desc: "From Fortune 500 platforms to high-growth SaaS — proven delivery across healthcare, fintech, e-commerce, and more.",
    },
    {
      title: "<span class='text-pres-accent font-bold'>Chief Software Engineer</span> & Your Dedicated Expert",
      desc: "Not a manager watching from the sidelines — Alim reviews your code, guides architecture, and mentors your developer directly.",
    },
  ];

  const handleExploreTiers = () => {
    if (onNavigate) {
      onNavigate(1);
    }
  };

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans">
        <SlideHeader />

        {/* Ambient radial glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-pres-accent/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />

        {/* Left Content Area - Vertically Centered (top-1/2 -translate-y-1/2) */}
        <div className="absolute left-[80px] top-1/2 -translate-y-1/2 w-[660px] z-10 flex flex-col justify-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3.5 mb-4"
          >
            <div className="w-[46px] h-[46px] rounded-xl bg-black/40 border border-white/15 flex items-center justify-center text-pres-accent shadow-sm">
              <Users className="w-5 h-5 text-pres-accent" />
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-white/50 block">
                Engineering Relief · riseup-asia.com
              </span>
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
            className="text-[66px] leading-[1.08] font-bold font-heading mb-4 tracking-tight"
          >
            Losing Sleep Over
            <br />
            <span className="text-pres-accent">Engineering Debt?</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] leading-[1.5] text-pres-text-muted mb-5 max-w-[620px]"
          >
            Stop waking up at midnight to fix fragile vibe-code and hallucinated AI bugs. Get battle-tested top 5% engineers supervised by a 20+ year Chief Architect — ready in 20 minutes.
          </motion.p>

          {/* Keyword Pills */}
          <div className="flex flex-wrap gap-2.5 mb-6">
            {[
              "Top 5% Talent",
              "Hire in 20 Min",
              "7-Stage Vetted",
              "60% Cost Savings",
            ].map((kw, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                  delay: 0.3 + i * 0.05,
                }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/15 text-white/90 font-medium text-xs backdrop-blur-sm"
              >
                <CheckCircle className="w-3.5 h-3.5 text-pres-accent shrink-0" />
                <span>{kw}</span>
              </motion.div>
            ))}
          </div>

          {/* Dual CTA Buttons */}
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
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-pres-accent hover:bg-pres-accent-glow text-pres-bg pres-dark-safe-accent font-semibold text-base transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(255,173,1,0.35)] cursor-pointer"
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

        {/* Center Photo: Marek Portrait - Clean executive presence anchored to floor */}
        <div className="absolute left-[650px] bottom-0 w-[780px] h-[920px] z-4 pointer-events-none flex items-end justify-center overflow-visible">
          <img
            src={marekImg}
            alt="Marek K."
            className="max-w-full max-h-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] scale-105 origin-bottom"
          />
        </div>

        {/* Right Content Area - Vertically Centered (top-1/2 -translate-y-1/2) matching left side balance */}
        <div className="absolute right-[80px] top-1/2 -translate-y-1/2 w-[440px] z-20 flex flex-col justify-between h-[640px]">
          {/* Marek Recommendation Card 2 (In the head area, matching screenshot layout) */}
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

          {/* Hover Cards Stack on Right (Bottom half of right column, matching screenshot design) */}
          <div className="flex flex-col gap-3.5 w-full">
            {hoverCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + idx * 0.12 }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-4 rounded-xl border transition-all duration-300 backdrop-blur-md cursor-pointer ${
                  hoveredCard === idx
                    ? "bg-black/75 border-pres-accent shadow-[0_0_25px_rgba(255,173,1,0.25)]"
                    : "bg-black/40 border-white/15 hover:border-pres-accent/40"
                }`}
              >
                <h2
                  className="text-[16px] font-medium font-heading text-white leading-snug"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    hoveredCard === idx ? "grid-rows-[1fr] mt-2 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs text-pres-text-muted leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
