import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, Sparkles, Check, Linkedin } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import marekImg from "@/assets/marek.png";

export const MAREK_URL =
  "https://www.linkedin.com/in/marekflejszman/details/recommendations/?detailScreenTabIndex=0";

export interface CoverCopy {
  label: string;
  line1: string;
  line2: string;
  body: string;
  chips: string[];
  stats: string[];
}

interface Props {
  copy: CoverCopy;
  onNavigate?: (index: number) => void;
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const MarekAvatar = () => (
  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pres-accent/50 bg-zinc-900 shrink-0">
    <img src={marekImg} alt="Marek F." className="w-full h-full object-cover object-[center_12%] scale-135" />
  </div>
);

const VerifiedTag = () => (
  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pres-accent/15 border border-pres-accent/40 text-pres-accent text-[15px] font-semibold">
    <Linkedin className="w-4 h-4 fill-current" />
    <span>Verified</span>
  </div>
);

export const PricingCoverShared: React.FC<Props> = ({ copy, onNavigate }) => (
  <ScaledSlide>
    <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans">
      <SlideHeader />

      <div className="absolute top-1/3 left-[5%] w-[700px] h-[700px] rounded-full bg-pres-accent/5 blur-[140px] pointer-events-none" />

      {/* Marek portrait — featured */}
      <div className="absolute left-[860px] bottom-0 w-[600px] h-[1000px] z-[4] pointer-events-none flex items-end justify-center">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-pres-accent/25 blur-[110px]" />
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[620px] h-[860px] rounded-t-full border-2 border-pres-accent/40" />
        <img
          src={marekImg}
          alt="Marek F."
          className="relative max-w-full max-h-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        />
      </div>

      {/* Name tag on photo */}
      <motion.a
        href={MAREK_URL}
        target="_blank"
        rel="noopener noreferrer"
        {...fade(0.7)}
        className="absolute left-[1010px] bottom-[70px] z-20 flex items-center gap-3 px-5 py-3 rounded-full bg-black/75 border border-pres-accent/60 backdrop-blur-md shadow-[0_0_30px_rgba(255,173,1,0.3)] hover:border-pres-accent transition-all"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-pres-accent animate-pulse" />
        <span className="text-[20px] font-bold font-heading">Marek F.</span>
        <span className="text-[17px] text-white/70">· Engineering Leader</span>
        <Linkedin className="w-5 h-5 text-pres-accent fill-current" />
      </motion.a>

      {/* Left column */}
      <div className="absolute left-[64px] top-[150px] bottom-[60px] w-[820px] z-10 flex flex-col justify-center">
        <motion.div {...fade(0)} className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/15 flex items-center justify-center">
            <Users className="w-6 h-6 text-pres-accent" />
          </div>
          <span className="text-[19px] text-pres-accent font-semibold">{copy.label}</span>
        </motion.div>

        <motion.h1 {...fade(0.1)} className="text-[84px] leading-[1.05] font-bold font-heading mb-6 tracking-tight">
          <span className="block">{copy.line1}</span>
          <span className="block text-pres-accent">{copy.line2}</span>
        </motion.h1>

        <motion.p {...fade(0.25)} className="text-[25px] leading-[1.45] text-pres-text-muted mb-6 max-w-[780px]">
          {copy.body}
        </motion.p>

        <motion.div {...fade(0.35)} className="flex flex-wrap gap-3 mb-7">
          {copy.chips.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/15 text-[18px]">
              <Check className="w-4 h-4 text-pres-accent" />
              {c}
            </span>
          ))}
        </motion.div>

        <motion.div {...fade(0.45)} className="flex items-center gap-4 mb-7">
          <a
            href="https://client.rasia.pro/hiring-v1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-pres-accent hover:bg-pres-accent-glow text-pres-bg pres-dark-safe-accent font-semibold text-[22px] transition-all hover:scale-105 shadow-[0_0_25px_rgba(255,173,1,0.35)]"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <button
            onClick={() => onNavigate?.(1)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-pres-accent/50 hover:border-pres-accent hover:bg-pres-accent/10 text-pres-accent font-medium text-[22px] transition-all hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            <span>Explore Tiers</span>
          </button>
        </motion.div>

        <motion.a
          {...fade(0.55)}
          href={MAREK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-[700px] p-5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md hover:border-pres-accent/50 transition-all shadow-xl"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <MarekAvatar />
              <div>
                <div className="font-bold text-[22px] font-heading leading-tight">Marek F.</div>
                <div className="text-[16px] text-white/55">Tech Founder &amp; CEO · Client Partner</div>
              </div>
            </div>
            <VerifiedTag />
          </div>
          <p className="text-[20px] text-white/85 italic leading-relaxed">
            "Solid and high quality work... the smoothest on-boarding process I have had in my whole career."
          </p>
        </motion.a>
      </div>

      {/* Right column */}
      <div className="absolute right-[64px] top-[150px] bottom-[60px] w-[440px] z-10 flex flex-col justify-center gap-4">
        <motion.a
          {...fade(0.6)}
          href={MAREK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-5 rounded-2xl bg-black/65 border border-white/15 backdrop-blur-md hover:border-pres-accent/50 transition-all shadow-xl"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <MarekAvatar />
              <div>
                <div className="font-bold text-[22px] font-heading leading-tight">Marek F.</div>
                <div className="text-[15px] text-white/55">Engineering Leader · AI Platforms</div>
              </div>
            </div>
            <VerifiedTag />
          </div>
          <p className="text-[19px] text-white/85 italic leading-relaxed">"A skillful professional and kind communicator."</p>
        </motion.a>

        {copy.stats.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-black/55 border border-white/15 backdrop-blur-md shadow-lg"
          >
            <div className="w-10 h-10 rounded-lg bg-pres-accent/15 border border-pres-accent/30 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-pres-accent" />
            </div>
            <p className="text-[20px] font-bold font-heading">{s}</p>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
    </div>
  </ScaledSlide>
);
