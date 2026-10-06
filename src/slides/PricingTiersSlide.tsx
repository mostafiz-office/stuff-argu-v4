import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Clock } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { HoverVideoPreview } from "@/components/presentation/HoverVideoPreview";

interface PricingTiersSlideProps {
  onNavigate?: (index: number) => void;
}

export const PricingTiersSlide: React.FC<PricingTiersSlideProps> = () => {
  const tiers = [
    {
      name: "Tier 2 — Growth",
      experience: "2-3+ Years",
      price: "$4,299",
      priceSuffix: "/mo",
      hours: "160 hrs/month",
      badge: null,
      highlight: false,
      position: "left" as const,
      features: [
        "Fixes fragile vibe-code & debt",
        "Saves 80% hiring efforts (160 hrs/mo)",
        "Daily standups, Slack & sprint sync",
        "Fluent, autonomous senior execution",
      ],
    },
    {
      name: "Tier 3.A — Skilled",
      experience: "7-15+ Years",
      price: "$6,800–$8,000",
      priceSuffix: "/mo",
      hours: "160 hrs/month",
      badge: "BEST VALUE",
      highlight: true,
      position: "center" as const,
      features: [
        "Fixes AI hallucinations & fragile logic",
        "Saves 80% hiring efforts (ready in 20m)",
        "Architectural review stops 2 AM panic",
        "Best-in-class deep stack leadership",
      ],
    },
    {
      name: "Tier 3.B — Leadership",
      experience: "7-15+ Years",
      price: "$7,500–$10,000",
      priceSuffix: "/mo",
      hours: "160 hrs/month",
      badge: null,
      highlight: false,
      position: "right" as const,
      features: [
        "CTO-level architecture oversight",
        "Audits complex AI systems & scale",
        "Saves 80% hiring drag across teams",
        "24/7 SLA & priority senior response",
      ],
    },
  ];

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* 45 degree repeating line texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 18px, hsl(var(--pres-accent) / 0.08) 18px, hsl(var(--pres-accent) / 0.08) 19px)",
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-pres-accent/5 blur-[160px] pointer-events-none" />

        {/* Flexbox Centered Main Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col justify-center">
          {/* Title Area - Clean, focused headline without redundant explanation */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[52px] font-bold font-heading tracking-tight text-white"
            >
              End Stalled Projects: <span className="text-pres-accent">Guaranteed Engineering Relief</span>
            </motion.h1>
          </div>

          {/* 3-Column Tier Cards Grid */}
          <div className="grid grid-cols-3 gap-8 w-full">
            {tiers.map((tier, idx) => (
              <HoverVideoPreview
                key={idx}
                videoId="uveR9C5CgSY"
                position={tier.position}
                className="flex flex-col"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                  className={`relative flex flex-col p-6 rounded-3xl border transition-all duration-300 backdrop-blur-md shadow-2xl ${
                    tier.highlight
                      ? "bg-pres-surface/95 border-pres-accent shadow-[0_0_35px_rgba(255,173,1,0.2)]"
                      : "bg-pres-surface/75 border-white/10 hover:border-pres-accent/40 hover:bg-pres-surface/90"
                  }`}
                >
                  {/* Best Value Badge */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 right-7 px-3.5 py-1 rounded-full bg-pres-accent text-pres-bg pres-dark-safe-accent text-xs font-bold font-heading flex items-center gap-1.5 shadow-lg">
                      <Award className="w-3.5 h-3.5 fill-current" />
                      <span>{tier.badge}</span>
                    </div>
                  )}

                  <div>
                    {/* Tier Name */}
                    <h3 className="text-[22px] font-bold font-heading text-white mb-0.5">
                      {tier.name}
                    </h3>

                    {/* Experience */}
                    <p className="text-[11px] font-medium text-pres-text-dim uppercase tracking-wider mb-3">
                      {tier.experience} Experience
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-[38px] font-bold font-heading text-pres-accent leading-none">
                        {tier.price}
                      </span>
                      <span className="text-sm text-pres-text-muted font-medium">
                        {tier.priceSuffix}
                      </span>
                    </div>

                    {/* Hours Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pres-accent/10 border border-pres-accent/20 text-pres-accent text-xs font-semibold mb-4">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{tier.hours}</span>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-white/10 mb-3.5" />

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-4">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-pres-accent shrink-0 mt-0.5" />
                          <span className="text-[14px] text-pres-text-muted leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer prompt */}
                  <div className="pt-3.5 text-xs text-pres-text-dim font-medium tracking-wide flex items-center justify-between border-t border-white/5">
                    <span>Hover card for video overview</span>
                    <span className="text-pres-accent opacity-80 font-semibold">▶ Preview</span>
                  </div>
                </motion.div>
              </HoverVideoPreview>
            ))}
          </div>
        </div>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
