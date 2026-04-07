import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import RocketAnimation from "@/components/presentation/RocketAnimation";
import { motion } from "framer-motion";
import { Rocket, CheckCircle, ArrowRight, Zap, TrendingDown, Shield, Clock, Users } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" as const },
});

const highlights = [
  { label: "160 hrs/mo", sub: "Dedicated time" },
  { label: "76% Savings", sub: "vs US rates" },
  { label: "$1,900", sub: "Per month" },
  { label: "Top 5%", sub: "Vetted talent" },
];

const features = [
  { icon: Shield, text: "7-stage vetting — only the best get through" },
  { icon: Clock, text: "Hire in as fast as 20 minutes" },
  { icon: Users, text: "Task guidance from a senior lead included" },
  { icon: Zap, text: "Daily standups, Slack access & weekly reports" },
];

export default function StarterTierSlideV2() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Background radial glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: "50%",
            top: "45%",
            width: 1200,
            height: 800,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.07) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        {/* Diagonal lines */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, transparent, transparent 40px, hsl(var(--pres-accent) / 0.02) 40px, hsl(var(--pres-accent) / 0.02) 41px)`,
          }}
        />

        {/* Rocket flies across the slide */}
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
          <RocketAnimation intensity={1} profile="compact" />
        </div>

        {/* Hero section */}
        <motion.div {...fade(0)} className="absolute left-[80px] top-[80px] z-10">
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              animate={{
                y: [0, -4, 0],
                rotate: [-8, 0, 8, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket size={28} style={{ color: "hsl(var(--pres-accent))" }} />
            </motion.div>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "hsl(var(--pres-accent))",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Tier 1 — Starter
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 56,
              fontWeight: 700,
              color: "hsl(var(--pres-text))",
              lineHeight: 1.1,
            }}
          >
            Launch Your Product{" "}
            <span
              style={{
                color: "hsl(var(--pres-bg))",
                background: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.8))",
                padding: "2px 16px",
                borderRadius: 8,
                display: "inline-block",
              }}
            >
              For Just $1,900/mo
            </span>
          </h1>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 20,
              color: "hsl(var(--pres-text-muted))",
              marginTop: 14,
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            Get a <strong style={{ color: "hsl(var(--pres-text))" }}>dedicated full-time developer</strong> at a
            fraction of the cost. Start building today, scale when you're ready.
          </p>
        </motion.div>

        {/* Highlight stat boxes */}
        <div className="absolute left-[80px] top-[310px] z-10 flex gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              {...fade(i + 2)}
              className="rounded-xl text-center"
              style={{
                width: 200,
                padding: "20px 16px",
                background: i === 1
                  ? "linear-gradient(135deg, hsl(var(--pres-accent) / 0.15), hsl(var(--pres-accent) / 0.05))"
                  : "hsl(var(--pres-bg-surface))",
                border: `1.5px solid ${i === 1 ? "hsl(var(--pres-accent) / 0.4)" : "hsl(var(--border))"}`,
              }}
            >
              <p
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: 28,
                  fontWeight: 700,
                  color: i === 1 ? "hsl(var(--pres-accent))" : "hsl(var(--pres-text))",
                }}
              >
                {h.label}
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  color: "hsl(var(--pres-text-dim))",
                  marginTop: 4,
                }}
              >
                {h.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features list — left side */}
        <div className="absolute left-[80px] top-[480px] z-10" style={{ width: 800 }}>
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.text}
                {...fade(i + 5)}
                className="flex items-center gap-3 rounded-xl"
                style={{
                  background: "hsl(var(--pres-bg-surface) / 0.6)",
                  border: "1px solid hsl(var(--border))",
                  padding: "14px 16px",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{
                    width: 36,
                    height: 36,
                    background: "hsl(var(--pres-accent) / 0.1)",
                  }}
                >
                  <f.icon size={18} style={{ color: "hsl(var(--pres-accent))" }} />
                </div>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 17,
                    color: "hsl(var(--pres-text-muted))",
                    lineHeight: 1.35,
                  }}
                >
                  {f.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side — Big savings CTA card */}
        <motion.div
          {...fade(4)}
          className="absolute right-[80px] top-[310px] z-10 rounded-2xl"
          style={{
            width: 480,
            background: "linear-gradient(160deg, hsl(var(--pres-accent) / 0.12), hsl(var(--pres-bg-surface)))",
            border: "2px solid hsl(var(--pres-accent) / 0.3)",
            padding: "28px 24px",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown size={20} style={{ color: "hsl(var(--pres-accent))" }} />
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "hsl(var(--pres-accent))",
              }}
            >
              Cost Comparison
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  color: "hsl(var(--pres-text-dim))",
                  marginBottom: 2,
                }}
              >
                US Market Rate
              </p>
              <p
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: 28,
                  fontWeight: 700,
                  color: "hsl(var(--pres-text-dim))",
                  textDecoration: "line-through",
                }}
              >
                $8,000/mo
              </p>
            </div>
            <ArrowRight size={24} style={{ color: "hsl(var(--pres-accent))" }} />
            <div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  color: "hsl(var(--pres-accent))",
                  fontWeight: 600,
                  marginBottom: 2,
                }}
              >
                Your Price
              </p>
              <p
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: 36,
                  fontWeight: 700,
                  color: "hsl(var(--pres-accent))",
                }}
              >
                $1,900/mo
              </p>
            </div>
          </div>

          {/* Savings bar */}
          <div className="rounded-lg overflow-hidden mb-4" style={{ height: 8, background: "hsl(var(--pres-bg))" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "76%" }}
              transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
              className="h-full rounded-lg"
              style={{ background: "linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.6))" }}
            />
          </div>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 15,
              color: "hsl(var(--pres-text-muted))",
              textAlign: "center",
            }}
          >
            You save <strong style={{ color: "hsl(var(--pres-accent))" }}>$6,100/mo</strong> — that's{" "}
            <strong style={{ color: "hsl(var(--pres-accent))" }}>$73,200/year</strong>
          </p>

          {/* Quick checklist */}
          <div className="mt-5 space-y-2.5">
            {["Full-time dedicated developer", "Senior lead oversight included", "Scale to higher tiers anytime"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={16} style={{ color: "hsl(var(--pres-accent))", flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 15,
                      color: "hsl(var(--pres-text))",
                    }}
                  >
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          {...fade(9)}
          className="absolute bottom-[45px] left-0 right-0 text-center z-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 18,
            color: "hsl(var(--pres-text-dim))",
            fontStyle: "italic",
          }}
        >
          "The smartest founders start lean and scale with confidence."
        </motion.p>
      </div>
    </ScaledSlide>
  );
}
