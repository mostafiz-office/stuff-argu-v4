import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import RocketAnimation from "@/components/presentation/RocketAnimation";
import { motion } from "framer-motion";
import { CheckCircle, Star, Zap, Crown, Rocket } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" as const },
});

const tiers = [
  {
    name: "Starter",
    tier: "Tier 1",
    experience: "1-2+ Years",
    price: "$1,900",
    hours: "160 hrs/mo",
    features: [
      "Dedicated full-time developer",
      "Daily standups & Slack access",
      "Weekly progress reports",
      "Senior lead oversight",
    ],
    accent: "hsl(var(--pres-accent))",
    gradient: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))",
    icon: Rocket,
    highlight: false,
  },
  {
    name: "Growth",
    tier: "Tier 2",
    experience: "2-3+ Years",
    price: "$4,299",
    hours: "160 hrs/mo",
    features: [
      "Fluent, autonomous coder",
      "Breaks down & delegates tasks",
      "Full sprint participation",
      "Architecture guidance",
    ],
    accent: "hsl(142 71% 45%)",
    gradient: "linear-gradient(135deg, hsl(142 71% 45%), hsl(160 60% 50%))",
    icon: Star,
    highlight: true,
  },
  {
    name: "Expert",
    tier: "Tier 3",
    experience: "7-15+ Years",
    price: "$6,800+",
    hours: "160 hrs/mo",
    features: [
      "Best-in-class developer",
      "Deep domain expertise",
      "Manages 3-15 team members",
      "CTO-level strategic oversight",
    ],
    accent: "#a78bfa",
    gradient: "linear-gradient(135deg, #a78bfa, #c4b5fd)",
    icon: Crown,
    highlight: false,
  },
];

const tooltipMessages = [
  "🚀 All tiers include Alim's expert oversight!",
  "⚡ Start building in 20 minutes",
  "🎯 Top 5% vetted talent only",
];

export default function StarterTierSlideV2() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Background texture */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, transparent, transparent 40px, hsl(var(--pres-accent) / 0.02) 40px, hsl(var(--pres-accent) / 0.02) 41px)`,
          }}
        />

        {/* Rocket animation */}
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
          <RocketAnimation intensity={1} profile="compact" />
        </div>

        {/* Flying tooltip that highlights text */}
        {tooltipMessages.map((msg, i) => (
          <motion.div
            key={msg}
            initial={{ opacity: 0, x: -60, y: 0 }}
            animate={{
              opacity: [0, 0, 1, 1, 1, 0],
              x: [-60, -60, 0, 0, 20, 60],
              y: [0, 0, 0, -4, 0, 0],
            }}
            transition={{
              duration: 8,
              delay: 2 + i * 3,
              times: [0, 0.05, 0.15, 0.5, 0.85, 1],
              ease: "easeInOut",
            }}
            className="absolute z-[60] rounded-xl"
            style={{
              right: 60 + i * 30,
              top: 100 + i * 50,
              padding: "10px 20px",
              background: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))",
              color: "hsl(var(--pres-bg))",
              fontFamily: "'Poppins', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              boxShadow: "0 8px 32px hsl(var(--pres-accent) / 0.4)",
              whiteSpace: "nowrap",
            }}
          >
            {msg}
            {/* Arrow */}
            <div
              style={{
                position: "absolute",
                bottom: -6,
                left: 24,
                width: 12,
                height: 12,
                background: "hsl(var(--pres-accent))",
                transform: "rotate(45deg)",
              }}
            />
          </motion.div>
        ))}

        {/* Headline */}
        <motion.div {...fade(0)} className="absolute left-[80px] top-[85px] z-10">
          <h1
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 50,
              fontWeight: 700,
              color: "hsl(var(--pres-text))",
              lineHeight: 1.1,
            }}
          >
            Pick Your{" "}
            <span
              style={{
                color: "hsl(var(--pres-bg))",
                background: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.8))",
                padding: "2px 16px",
                borderRadius: 8,
                display: "inline-block",
              }}
            >
              Perfect Tier
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 18,
              color: "hsl(var(--pres-text-muted))",
              marginTop: 12,
            }}
          >
            160 dedicated hours/month. Expert oversight included as a bonus.
          </p>
        </motion.div>

        {/* 3-column pricing cards */}
        <div className="absolute left-[60px] right-[60px] top-[230px] bottom-[70px] grid grid-cols-3 gap-6 z-10">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              className="rounded-2xl flex flex-col relative overflow-hidden"
              style={{
                background: tier.highlight
                  ? "linear-gradient(180deg, hsl(var(--pres-accent) / 0.1) 0%, hsl(var(--pres-bg-surface)) 100%)"
                  : "hsl(var(--pres-bg-surface))",
                border: `2px solid ${tier.highlight ? "hsl(var(--pres-accent) / 0.4)" : `${tier.accent}25`}`,
                padding: "24px 20px",
              }}
            >
              {/* Badge for highlighted tier */}
              {tier.highlight && (
                <div
                  className="absolute top-0 right-0 flex items-center gap-1.5 px-3 py-1.5 rounded-bl-xl"
                  style={{
                    background: "hsl(var(--pres-accent))",
                    color: "hsl(var(--pres-bg))",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  <Zap size={12} /> MOST POPULAR
                </div>
              )}

              {/* Tier icon + name */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="rounded-lg flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    background: `${tier.accent}18`,
                  }}
                >
                  <tier.icon size={20} style={{ color: tier.accent }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Ubuntu', sans-serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "hsl(var(--pres-text))",
                    }}
                  >
                    {tier.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      color: "hsl(var(--pres-text-dim))",
                    }}
                  >
                    {tier.tier} · {tier.experience}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-3">
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 38,
                    fontWeight: 700,
                    color: tier.accent,
                  }}
                >
                  {tier.price}
                </span>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 15,
                    color: "hsl(var(--pres-text-dim))",
                  }}
                >
                  /mo
                </span>
              </div>

              {/* Hours badge */}
              <div
                className="rounded-lg mb-4 text-center"
                style={{
                  padding: "6px 0",
                  background: `${tier.accent}12`,
                  border: `1px solid ${tier.accent}25`,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: tier.accent,
                  }}
                >
                  {tier.hours} dedicated
                </span>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-2.5 flex-1">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      style={{ color: tier.accent, flexShrink: 0, marginTop: 2 }}
                    />
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 14,
                        color: "hsl(var(--pres-text-muted))",
                        lineHeight: 1.4,
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bonus line */}
              <div
                className="mt-4 pt-3 flex items-center gap-2"
                style={{
                  borderTop: `1px solid ${tier.accent}20`,
                }}
              >
                <Star size={14} style={{ color: "hsl(var(--pres-accent))" }} />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    color: "hsl(var(--pres-accent))",
                    fontWeight: 600,
                  }}
                >
                  + Alim's expert oversight as a bonus
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          {...fade(8)}
          className="absolute bottom-[25px] left-0 right-0 text-center z-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 16,
            color: "hsl(var(--pres-text-dim))",
            fontStyle: "italic",
          }}
        >
          "Start lean, scale with confidence — every tier comes with expert leadership built in."
        </motion.p>
      </div>
    </ScaledSlide>
  );
}
