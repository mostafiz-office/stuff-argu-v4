import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Shield } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const tiers = [
  {
    name: "Starter",
    tier: "Tier 1",
    price: "$1,900",
    hours: "160 hrs",
    value: "Top 5% BD talent",
    color: "hsl(var(--pres-accent))",
    gradient: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))",
  },
  {
    name: "Growth",
    tier: "Tier 2",
    price: "$4,299",
    hours: "160 hrs",
    value: "Mid-senior specialists",
    color: "hsl(142 71% 45%)",
    gradient: "linear-gradient(135deg, hsl(142 71% 45%), hsl(160 60% 50%))",
  },
  {
    name: "Expert",
    tier: "Tier 3.A",
    price: "$6,800",
    hours: "160 hrs",
    value: "Skilled domain experts",
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #a78bfa, #c4b5fd)",
  },
  {
    name: "Leadership",
    tier: "Tier 3.B",
    price: "$7,500",
    hours: "160 hrs",
    value: "Tech leads & architects",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, #f472b6, #f9a8d4)",
  },
];

const benefits = [
  { icon: TrendingUp, text: "Scale your team without overhead" },
  { icon: Users, text: "Pre-vetted senior engineers ready Day 1" },
  { icon: Zap, text: "No recruitment fees or onboarding delays" },
  { icon: Shield, text: "Risk-free — cancel anytime" },
];

export default function PricingSavingsSlideV2() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Subtle glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: 300,
            top: "45%",
            width: 700,
            height: 500,
            transform: "translateY(-50%)",
            background:
              "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        {/* LEFT COLUMN — Value proposition */}
        <div
          className="absolute z-10 flex flex-col justify-center"
          style={{ left: 80, top: 120, bottom: 80, width: 520 }}
        >
          <motion.h1
            {...fade(0)}
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 58,
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "hsl(var(--pres-text))" }}>Get More</span>
            <br />
            <span style={{ color: "hsl(var(--pres-accent))" }}>Done Faster</span>
          </motion.h1>

          <motion.div
            {...fade(1)}
            style={{
              width: 60,
              height: 4,
              borderRadius: 2,
              background: "hsl(var(--pres-accent))",
              marginTop: 28,
            }}
          />

          <motion.p
            {...fade(2)}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 20,
              color: "hsl(var(--pres-text-muted))",
              marginTop: 28,
              lineHeight: 1.7,
              maxWidth: 440,
            }}
          >
            Dedicated full-time engineers embedded in your workflow.{" "}
            <strong style={{ color: "hsl(var(--pres-accent))" }}>
              160 hours/month
            </strong>{" "}
            of focused output — no distractions, no context-switching.
          </motion.p>

          {/* Benefits list */}
          <div className="flex flex-col gap-4" style={{ marginTop: 36 }}>
            {benefits.map((b, i) => (
              <motion.div
                key={b.text}
                {...fade(3 + i)}
                className="flex items-center gap-3"
              >
                <div
                  className="rounded-lg flex items-center justify-center"
                  style={{
                    width: 36,
                    height: 36,
                    background: "hsl(var(--pres-accent) / 0.12)",
                  }}
                >
                  <b.icon
                    size={18}
                    style={{ color: "hsl(var(--pres-accent))" }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 17,
                    color: "hsl(var(--pres-text))",
                    fontWeight: 500,
                  }}
                >
                  {b.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — Tier pricing cards */}
        <div
          className="absolute z-10 flex flex-col justify-center gap-5"
          style={{ left: 700, right: 80, top: 100, bottom: 80 }}
        >
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 + i * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="rounded-2xl flex items-center justify-between"
              style={{
                padding: "20px 28px",
                background: "hsl(var(--pres-bg-surface))",
                border: `1px solid ${t.color}20`,
              }}
            >
              {/* Left: tier info */}
              <div className="flex items-center gap-4">
                <div
                  className="rounded-xl"
                  style={{
                    width: 48,
                    height: 48,
                    background: t.gradient,
                    opacity: 0.85,
                  }}
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        fontFamily: "'Ubuntu', sans-serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "hsl(var(--pres-text))",
                      }}
                    >
                      {t.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 13,
                        color: "hsl(var(--pres-text-dim))",
                      }}
                    >
                      {t.tier}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 14,
                      color: "hsl(var(--pres-text-muted))",
                    }}
                  >
                    {t.value}
                  </span>
                </div>
              </div>

              {/* Right: price + hours */}
              <div className="flex items-center gap-5">
                <span
                  className="rounded-full px-3 py-1"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: t.color,
                    background: `${t.color}15`,
                  }}
                >
                  {t.hours}/mo
                </span>
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 28,
                    fontWeight: 700,
                    color: t.color,
                  }}
                >
                  {t.price}
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: "hsl(var(--pres-text-dim))",
                    }}
                  >
                    /mo
                  </span>
                </span>
              </div>
            </motion.div>
          ))}

          {/* Bottom note */}
          <motion.p
            {...fade(8)}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 15,
              color: "hsl(var(--pres-text-dim))",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            All tiers include{" "}
            <strong style={{ color: "hsl(var(--pres-accent))" }}>
              Alim Ul Karim's expert oversight
            </strong>{" "}
            at no extra cost
          </motion.p>
        </div>
      </div>
    </ScaledSlide>
  );
}
