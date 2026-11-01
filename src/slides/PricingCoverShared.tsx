import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check, Linkedin } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { marekCleanImage } from "@/assets/marekCleanImageData";
import cristianImg from "@/assets/recommendations/cristian-stancalau.png";
import jakubImg from "@/assets/recommendations/jakub-szubarga.png";
import adamImg from "@/assets/recommendations/adam-lewkowicz.png";
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
  image: cristianImg,
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
      image: jakubImg,
      quoteBefore: "Witnessed him in each of the following roles: software developer, designer, solution architect, speaker, scrum master and team leader... He was excellent at performing tasks associated with these roles.",
      highlight: "",
      quoteAfter: "",
    },
  ],
  v3: [
    {
      name: "Adam Lewkowicz",
      role: "Founder & CTO at Vercom S.A. · CPaaS",
      image: adamImg,
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

/**
 * Batch 97 (owner-approved, Oct 29 2026): QuoteCard matched to the LIVE
 * present-v1 testimonial cards (measured Oct 29 from
 * present-v1.riseup-asia.com/1). Was bigger, warmer, louder on every
 * dimension; now: flat near-black bg (no warm gradient), faint gold
 * border, 14px radius, 44px plain avatar, 16px name / 13px wrapping
 * role / 14px quote, 11px Verified text, 16px arrow, halo-only hover
 * (no zoom, no lift, no full-amber border, no name-amber). Both cover
 * variants share this component, so V1 and V3 update together. People
 * and quotes unchanged (ours, not present-v1's).
 */
const QuoteCard: React.FC<{ recommendation: Recommendation; className?: string; delay: number }> = ({ recommendation, className, delay }) => (
  <motion.a
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay,
      ease: presentationEase,
    }}
    href={MAREK_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`presentation-focus relative block overflow-hidden p-5 rounded-[14px] bg-[#0d0d0f]/90 border border-pres-accent/15 backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(255,173,1,0.20)] ${className ?? ""}`}
  >
    <div className="flex items-center justify-between gap-3 mb-3">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div className="w-11 h-11 shrink-0 rounded-full overflow-hidden bg-pres-surface">
          <img src={recommendation.image} alt={recommendation.name} loading="eager" decoding="async" className="w-full h-full object-cover object-center" onError={(e) => { e.currentTarget.style.display = "none"; }} />
        </div>
        <div className="min-w-0">
          <div className="font-bold text-[16px] font-heading leading-tight">{recommendation.name}</div>
          <div className="text-[13px] text-pres-text-muted">{recommendation.role}</div>
        </div>
      </div>
      <span className="flex shrink-0 items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0a66c2]/15 border border-[#0a66c2]/45 text-[#63a4e8] text-[11px] font-semibold">
        <Linkedin className="w-3 h-3 fill-current" /> Verified
      </span>
    </div>
    <p className="text-[14px] text-pres-text italic leading-snug pb-6">
      “{recommendation.quoteBefore}{recommendation.highlight}{recommendation.quoteAfter}”
    </p>
    <ArrowRight className="absolute bottom-4 right-5 w-4 h-4 text-pres-accent" />
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
          src={marekCleanImage}
          alt="Marek Flejszman"
          className="relative h-full w-auto max-w-none object-contain object-bottom origin-bottom scale-[1.08] drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
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
          <DeckButton variant="outline" onClick={() => onNavigate?.(6)}>
            <Sparkles className="w-4 h-4 text-pres-accent" /> Explore Tiers
          </DeckButton>
        </motion.div>
        {recommendations[0] && (
          <QuoteCard recommendation={recommendations[0]} delay={0.5} className="max-w-[400px]" />
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
