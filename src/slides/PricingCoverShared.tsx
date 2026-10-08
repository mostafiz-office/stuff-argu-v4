import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check, Linkedin } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import marekImg from "@/assets/marek.webp";
import cristianAsset from "@/assets/recommendations/cristian-stancalau.png.asset.json";
import jakubAsset from "@/assets/recommendations/jakub-szubarga.png.asset.json";
import adamAsset from "@/assets/recommendations/adam-lewkowicz.png.asset.json";
import { fadeUp, scaleIn, staggerDelay } from "@/lib/presentationMotion";

export const MAREK_URL =
  "https://www.linkedin.com/in/marekflejszman/details/recommendations/?detailScreenTabIndex=0";

export interface CoverCopy {
  label: string;
  line1: string;
  line2: string;
  body: string;
  chips: string[];
}

export interface Recommendation {
  name: string;
  role: string;
  image: string;
  quoteBefore: string;
  highlight: string;
  quoteAfter: string;
}

export const COVER_RECOMMENDATIONS = {
  v1: [
    {
      name: "Cristian Stancalău",
      role: "Expert Java Engineer",
      image: cristianAsset.url,
      quoteBefore: "Our code review team had the privilege of being managed by Marek, who ",
      highlight: "successfully led us through troubled times",
      quoteAfter: "… so the team could focus on daily activities with minimum stress until our targets were reached.",
    },
    {
      name: "Jakub Szubarga",
      role: "Platform Systems Engineer",
      image: jakubAsset.url,
      quoteBefore: "I witnessed him as software developer, designer, solution architect, speaker, scrum master and team leader. ",
      highlight: "He was excellent at performing tasks associated with these roles.",
      quoteAfter: "",
    },
  ],
  v3: [
    {
      name: "Adam Lewkowicz",
      role: "Founder & CTO at Vercom S.A.",
      image: adamAsset.url,
      quoteBefore: "Marek is a high level professional, qualified and well organised person. ",
      highlight: "Marek is a kind of person you can rely on!",
      quoteAfter: "",
    },
  ],
} satisfies Record<"v1" | "v3", Recommendation[]>;

interface Props {
  copy: CoverCopy;
  recommendations: Recommendation[];
  onNavigate?: (index: number) => void;
}

const highlights = [
  { a: "20+ Years", b: " in Software Engineering" },
  { a: "50+ Enterprise", b: " Projects Led" },
  { a: "Chief Architect", b: " Included" },
];

const QuoteCard: React.FC<{ recommendation: Recommendation; className?: string; delay: number }> = ({ recommendation, className, delay }) => (
  <motion.a
    {...fadeUp(delay, 12)}
    href={MAREK_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`presentation-action presentation-focus block p-5 rounded-xl bg-black/65 border border-white/15 backdrop-blur-md hover:border-pres-accent/60 shadow-xl ${className ?? ""}`}
  >
    <div className="flex items-center justify-between gap-3 mb-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border-2 border-pres-accent/50 bg-pres-surface">
          <img src={recommendation.image} alt={recommendation.name} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <div className="font-bold text-[20px] font-heading leading-tight">{recommendation.name}</div>
          <div className="text-[15px] text-pres-text-muted truncate">{recommendation.role}</div>
        </div>
      </div>
      <span className="flex shrink-0 items-center gap-1.5 px-2.5 py-1 rounded-full bg-pres-accent/15 border border-pres-accent/40 text-pres-accent text-[14px] font-semibold">
        <Linkedin className="w-3.5 h-3.5 fill-current" /> LinkedIn
      </span>
    </div>
    <p className="text-[18px] text-pres-text italic leading-snug">
      “{recommendation.quoteBefore}<span className="not-italic font-semibold text-pres-accent">{recommendation.highlight}</span>{recommendation.quoteAfter}”
    </p>
  </motion.a>
);

export const PricingCoverShared: React.FC<Props> = ({ copy, recommendations, onNavigate }) => (
  <ScaledSlide>
    <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans">
      <SlideHeader />

      {/* Full-height Marek portrait */}
      <div className="absolute left-[700px] bottom-0 w-[760px] h-[1000px] z-[4] pointer-events-none flex items-end justify-center">
        <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-pres-accent/20 blur-[120px]" />
        <img
          src={marekImg}
          alt="Marek F."
          className="relative h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        />
      </div>

      {/* Left column */}
      <div className="absolute left-[80px] top-[130px] bottom-[60px] w-[720px] z-10 flex flex-col justify-center">
        <motion.p {...fadeUp(0, 12)} className="text-[22px] tracking-[0.2em] uppercase text-pres-accent font-semibold mb-5">
          {copy.label}
        </motion.p>
        <motion.h1 {...fadeUp(0.08)} className="text-[90px] leading-[1.04] whitespace-nowrap font-bold font-heading mb-6 tracking-tight">
          <span className="block">{copy.line1}</span>
          <span className="block text-pres-accent">{copy.line2}</span>
        </motion.h1>
        <motion.p {...fadeUp(0.16)} className="text-[28px] leading-[1.45] text-pres-text-muted mb-7 max-w-[640px]">
          {copy.body}
        </motion.p>
        <motion.div {...fadeUp(0.24, 12)} className="flex flex-wrap gap-3 mb-8">
          {copy.chips.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 border border-white/15 text-[20px] font-medium">
              <Check className="w-5 h-5 text-pres-accent" />
              {c}
            </span>
          ))}
        </motion.div>
        <motion.div {...fadeUp(0.32, 12)} className="flex items-center gap-4 mb-8">
          <a
            href="https://client.rasia.pro/hiring-v1"
            target="_blank"
            rel="noopener noreferrer"
            className="presentation-action presentation-focus inline-flex items-center gap-3 px-10 py-5 rounded-full bg-pres-accent hover:bg-pres-accent-glow text-pres-bg pres-dark-safe-accent font-semibold text-[24px] shadow-[0_0_25px_rgba(255,173,1,0.35)]"
          >
            Book a Call <ArrowRight className="w-6 h-6" />
          </a>
          <button
            onClick={() => onNavigate?.(1)}
            className="presentation-action presentation-focus inline-flex items-center gap-2 px-9 py-5 rounded-full border border-pres-accent/50 hover:border-pres-accent hover:bg-pres-accent/10 text-pres-accent font-medium text-[24px]"
          >
            <Sparkles className="w-6 h-6" /> Explore Tiers
          </button>
        </motion.div>
        {recommendations[0] && (
          <QuoteCard recommendation={recommendations[0]} delay={0.5} className="max-w-[640px]" />
        )}
      </div>

      {/* Right column */}
      <div className="absolute right-[80px] top-[130px] bottom-[60px] w-[420px] z-10 flex flex-col justify-center gap-5">
        {recommendations[1] && <QuoteCard recommendation={recommendations[1]} delay={0.6} />}
        {highlights.map((h, i) => (
          <motion.div
            key={h.a}
            {...scaleIn(staggerDelay(i, 0.54, 0.07))}
            className="px-6 py-5 rounded-2xl bg-black/55 border border-pres-accent/30 backdrop-blur-md text-[24px] font-bold font-heading"
          >
            <span className="text-pres-accent">{h.a}</span>
            {h.b}
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
    </div>
  </ScaledSlide>
);
