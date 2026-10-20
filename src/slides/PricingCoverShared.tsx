import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check, Linkedin } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import marekImg from "@/assets/marek.webp";
import cristianAsset from "@/assets/recommendations/cristian-stancalau.png.asset.json";
import jakubAsset from "@/assets/recommendations/jakub-szubarga.png.asset.json";
import adamAsset from "@/assets/recommendations/adam-lewkowicz.png.asset.json";
import { fadeUp, scaleIn, staggerDelay, presentationEase } from "@/lib/presentationMotion";
import { DeckButton } from "@/components/presentation/DeckButton";
import { CoverHeadline, CoverHeadlineConfig } from "@/components/presentation/CoverHeadline";

export const MAREK_URL =
  "https://www.linkedin.com/in/marekflejszman/details/recommendations/?detailScreenTabIndex=0";

export interface CoverCopy {
  label: string;
  line1: string;
  line2: string;
  body: string;
  chips: string[];
  /** FB-02 staged headline animation config */
  headline: CoverHeadlineConfig;
}

export interface Recommendation {
  name: string;
  role: string;
  image: string;
  quoteBefore: string;
  highlight: string;
  quoteAfter: string;
}

const CRISTIAN_RECOMMENDATION: Recommendation = {
  name: "Cristian Stancalău",
  role: "Expert Java Engineer · Best Practices · Reliability",
  image: cristianAsset.url,
  quoteBefore: "...successfully led us through troubled times... so the team could focus on daily activities with minimum stress until our targets were reached.",
  highlight: "",
  quoteAfter: "",
};

export const COVER_RECOMMENDATIONS = {
  v1: [
    CRISTIAN_RECOMMENDATION,
    {
      name: "Jakub Szubarga",
      role: "Platform Systems Engineer · .NET · TS · Architecture",
      image: jakubAsset.url,
      quoteBefore: "Witnessed him in each of the following roles: software developer, designer, solution architect, speaker, scrum master and team leader... He was excellent at performing tasks associated with these roles.",
      highlight: "",
      quoteAfter: "",
    },
  ],
  v3: [
    {
      name: "Adam Lewkowicz",
      role: "Founder & CTO at Vercom S.A. · CPaaS",
      image: adamAsset.url,
      quoteBefore: "Marek is a high level professional, qualified and well organised person. Marek is a kind of person you can rely on!",
      highlight: "",
      quoteAfter: "",
    },
    CRISTIAN_RECOMMENDATION,
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
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    transition={{
      duration: 0.5,
      delay,
      ease: presentationEase,
      scale: { duration: 0.3, delay: 0, ease: presentationEase },
    }}
    href={MAREK_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`presentation-action presentation-focus group relative block overflow-hidden p-5 rounded-xl bg-gradient-to-b from-[#211d15]/90 to-black/90 border border-pres-accent/30 backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-pres-accent hover:shadow-[0_0_44px_rgba(255,173,1,0.25)] ${className ?? ""}`}
  >
    <div className="flex items-center justify-between gap-3 mb-3">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border-2 border-pres-accent/50 bg-pres-surface">
          <img src={recommendation.image} alt={recommendation.name} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <div className="font-bold text-[20px] font-heading leading-tight transition-colors duration-300 group-hover:text-pres-accent">{recommendation.name}</div>
          <div className="text-[15px] text-pres-text-muted truncate">{recommendation.role}</div>
        </div>
      </div>
      <span className="flex shrink-0 items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0a66c2]/15 border border-[#0a66c2]/45 text-[#63a4e8] text-[14px] font-semibold">
        <Linkedin className="w-3.5 h-3.5 fill-current" /> Verified
      </span>
    </div>
    <p className="text-[18px] text-pres-text italic leading-snug pb-6">
      “{recommendation.quoteBefore}{recommendation.highlight}{recommendation.quoteAfter}”
    </p>
    <ArrowRight className="absolute bottom-4 right-5 w-5 h-5 text-pres-accent" />
  </motion.a>
);

export const PricingCoverShared: React.FC<Props> = ({ copy, recommendations, onNavigate }) => (
  <ScaledSlide>
    <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans">
      <SlideHeader />

      {/* Full-height Marek portrait */}
      <div className="absolute left-[700px] bottom-0 w-[760px] h-[1000px] z-[4] pointer-events-none flex items-end justify-center">
        <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-pres-accent/10 blur-[120px]" />
        <img
          src={marekImg}
          alt="Marek F."
          className="relative h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        />
      </div>

      {/* Left column */}
      <div className="absolute left-[80px] top-[130px] bottom-[60px] w-[720px] z-10 flex flex-col justify-center">
        <CoverHeadline config={copy.headline} className="text-[90px] mb-6" />
        <motion.div {...fadeUp(0.24, 12)} className="flex flex-wrap gap-3 mb-8">
          {copy.chips.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 border border-white/15 text-[20px] font-medium">
              <Check className="w-5 h-5 text-white/70" />
              {c}
            </span>
          ))}
        </motion.div>
        <motion.div {...fadeUp(0.32, 12)} className="flex items-center gap-4 mb-8">
          <DeckButton
            href="https://meet.rasia.pro/intro-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call <ArrowRight className="w-[18px] h-[18px]" />
          </DeckButton>
          <DeckButton variant="outline" onClick={() => onNavigate?.(1)}>
            <Sparkles className="w-4 h-4 text-pres-accent" /> Explore Tiers
          </DeckButton>
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
            className="px-6 py-5 rounded-2xl bg-black/55 border border-white/15 backdrop-blur-md text-[24px] font-bold font-heading"
          >
            <span className="text-white">{h.a}</span>
            {h.b}
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
    </div>
  </ScaledSlide>
);
