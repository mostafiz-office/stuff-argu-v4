import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import HoverVideoPreview from "@/components/presentation/HoverVideoPreview";
import RocketAnimation from "@/components/presentation/RocketAnimation";
import { motion } from "framer-motion";
import { Award, CheckCircle, Star } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const tiers = [
  {
    name: "Tier 2 — Growth",
    experience: "2-3+ Years Experience",
    price: "$4,299",
    per: "/mo",
    hours: "160 hrs/month",
    features: [
      "Fluent, autonomous coder",
      "Breaks down & delegates tasks",
      "Full sprint participation",
      "Daily standups & Slack access",
    ],
    featured: true,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    name: "Tier 3.A — Skilled",
    experience: "7-15+ Years Experience",
    price: "$6,800–$8,000",
    per: "/mo",
    hours: "160 hrs/month",
    features: [
      "Best-in-class developer",
      "Deep expertise in their stack",
      "Manages 3-5 team members",
      "Architecture & code quality",
    ],
    featured: false,
    bestValue: true,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    name: "Tier 3.B — Leadership",
    experience: "7-15+ Years Experience",
    price: "$7,500–$10,000",
    per: "/mo",
    hours: "160 hrs/month",
    features: [
      "Project management focus",
      "Manages up to 15 developers",
      "CTO-level strategic oversight",
      "24/7 SLA & priority support",
    ],
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
];

export default function PricingTiersSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Background texture */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.03) 28px, hsl(var(--pres-accent) / 0.03) 29px)`,
          }}
        />

        <motion.h1
          {...fade(0)}
          className="absolute left-[80px] top-[90px] z-10"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 68,
            fontWeight: 700,
            color: "hsl(var(--pres-text))",
          }}
        >
          Choose Your <span style={{ color: "hsl(var(--pres-accent))" }}>Plan</span>
        </motion.h1>

        <motion.p
          {...fade(1)}
          className="absolute left-[80px] top-[178px] z-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 22,
            color: "hsl(var(--pres-text-muted))",
          }}
        >
          All plans include 160 dedicated hours/month. Scale anytime.
        </motion.p>

        {/* Tier cards — 3 columns */}
        <div className="absolute left-[80px] right-[80px] top-[240px] bottom-[40px] grid grid-cols-3 gap-8 z-10">
          {tiers.map((tier, index) => {
            const isFeatured = tier.featured;
            const isBestValue = 'bestValue' in tier && tier.bestValue;
            const videoPosition = index === 0 ? "right" : index === 2 ? "left" : "center";

            return (
              <HoverVideoPreview
                key={tier.name}
                youtubeId={tier.youtubeId}
                position={videoPosition as "left" | "right" | "center"}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.12, duration: 0.6 }}
                  className="rounded-2xl flex flex-col relative overflow-hidden h-full"
                  style={{
                    background: isBestValue
                      ? "linear-gradient(180deg, hsl(142 71% 45% / 0.12) 0%, hsl(var(--pres-bg-surface)) 100%)"
                      : isFeatured
                        ? "linear-gradient(180deg, hsl(var(--pres-accent) / 0.1) 0%, hsl(var(--pres-bg-surface)) 100%)"
                        : "hsl(var(--pres-bg-surface))",
                    border: `2px solid ${isBestValue ? "hsl(142 71% 45%)" : isFeatured ? "hsl(var(--pres-accent))" : "hsl(var(--border))"}`,
                    padding: "40px 32px",
                  }}
                >
                  {isFeatured && (
                    <div
                      className="absolute top-0 right-0 flex items-center gap-2 px-4 py-2 rounded-bl-xl"
                      style={{
                        background: "hsl(var(--pres-accent))",
                        color: "hsl(var(--pres-bg))",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 18,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                      }}
                    >
                      <Star size={18} /> MOST POPULAR
                    </div>
                  )}

                  {isBestValue && (
                    <div
                      className="absolute top-0 right-0 flex items-center gap-2 px-4 py-2 rounded-bl-xl"
                      style={{
                        background: "hsl(142 71% 45%)",
                        color: "#fff",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 18,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                      }}
                    >
                      <Award size={18} /> BEST VALUE
                    </div>
                  )}

                  {/* Tier name */}
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 22,
                      fontWeight: 600,
                      color: "hsl(var(--pres-text-dim))",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {tier.name}
                  </p>

                  {/* Experience */}
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 24,
                      color: "hsl(var(--pres-accent))",
                      fontWeight: 500,
                      marginTop: 8,
                      lineHeight: 1.3,
                    }}
                  >
                    {tier.experience}
                  </p>

                  {/* Price */}
                  <div className="mt-5">
                    <span
                      style={{
                        fontFamily: "'Ubuntu', sans-serif",
                        fontSize: tier.price.length > 8 ? 48 : 64,
                        fontWeight: 700,
                        color: "hsl(var(--pres-text))",
                      }}
                    >
                      {tier.price}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 28,
                        color: "hsl(var(--pres-text-dim))",
                      }}
                    >
                      {tier.per}
                    </span>
                  </div>

                  {/* Hours badge */}
                  <div
                    className="mt-3 inline-flex items-center rounded-lg px-4 py-2"
                    style={{
                      background: "hsl(var(--pres-accent) / 0.08)",
                      border: "1px solid hsl(var(--pres-accent) / 0.15)",
                      width: "fit-content",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 22,
                        fontWeight: 600,
                        color: "hsl(var(--pres-accent))",
                      }}
                    >
                      {tier.hours}
                    </span>
                  </div>

                  {/* Rocket animation */}
                  <RocketAnimation intensity={index === 0 ? 1 : index === 1 ? 2 : 3} />
                  {/* Features */}
                  <div className="mt-5 space-y-4 flex-1">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle
                          size={26}
                          style={{
                            color: "hsl(var(--pres-accent))",
                            flexShrink: 0,
                            marginTop: 3,
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 26,
                            color: "hsl(var(--pres-text-muted))",
                            lineHeight: 1.4,
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </HoverVideoPreview>
            );
          })}
        </div>
      </div>
    </ScaledSlide>
  );
}
