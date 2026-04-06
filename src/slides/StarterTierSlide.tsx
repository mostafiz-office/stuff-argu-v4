import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Rocket, CheckCircle, Zap, TrendingUp, Users, ArrowRight } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const benefits = [
  { icon: Zap, text: "Tech-stack specific developer ready to ship" },
  { icon: Users, text: "Task guidance from senior Tier 2 lead" },
  { icon: TrendingUp, text: "Perfect for MVPs & well-defined sprints" },
  { icon: Rocket, text: "Scale up to higher tiers as you grow" },
];

const idealFor = [
  "Pre-seed & seed-stage startups",
  "Bootstrapped founders shipping fast",
  "Side-project → product transitions",
  "Budget-conscious teams needing quality",
];

export default function StarterTierSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Ambient glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: "50%",
            top: "50%",
            width: 900,
            height: 700,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        {/* Left column */}
        <div
          className="absolute left-[80px] top-[80px] bottom-[60px] z-10 flex flex-col justify-center"
          style={{ maxWidth: 700 }}
        >
          <motion.div {...fade(0)} className="flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center rounded-xl"
              style={{
                width: 52,
                height: 52,
                background: "hsl(var(--pres-accent) / 0.12)",
                border: "1px solid hsl(var(--pres-accent) / 0.25)",
              }}
            >
              <Rocket size={26} style={{ color: "hsl(var(--pres-accent))" }} />
            </div>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "hsl(var(--pres-accent))",
              }}
            >
              TIER 1 — STARTER
            </span>
          </motion.div>

          <motion.h1
            {...fade(1)}
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 64,
              fontWeight: 700,
              fontStyle: "italic",
              color: "hsl(var(--pres-text))",
              lineHeight: 1.1,
            }}
          >
            Built for{" "}
            <span style={{ color: "hsl(var(--pres-accent))" }}>Founders</span>
            <br />
            Who Ship Fast
          </motion.h1>

          <motion.div {...fade(2)} className="accent-bar mt-5" style={{ width: 80 }} />

          <motion.p
            {...fade(2)}
            className="mt-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 21,
              color: "hsl(var(--pres-text-muted))",
              lineHeight: 1.7,
              maxWidth: 560,
            }}
          >
            Tight on budget but ready to build?{" "}
            <strong style={{ color: "hsl(var(--pres-text))" }}>
              Start with a dedicated developer
            </strong>{" "}
            at a price that won't break the bank — then scale when you're ready.
          </motion.p>

          {/* Price block */}
          <motion.div
            {...fade(3)}
            className="glass-card mt-8 px-8 py-6 inline-flex items-end gap-4"
          >
            <span
              className="metric-glow"
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: 56,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              $1,900
            </span>
            <div className="mb-1.5">
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "hsl(var(--pres-text))",
                }}
              >
                /month
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  color: "hsl(var(--pres-text-dim))",
                }}
              >
                160 dedicated hrs · 1+ yr industry exp
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <motion.div
          {...fade(2)}
          className="absolute right-[80px] z-10 flex flex-col justify-center gap-10"
          style={{ width: 560, top: 110, bottom: 60 }}
        >
          {/* What you get */}
          <div>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "hsl(var(--pres-text-dim))",
                marginBottom: 20,
              }}
            >
              What You Get
            </p>
            <div className="space-y-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="flex items-center justify-center rounded-lg"
                    style={{
                      width: 40,
                      height: 40,
                      background: "hsl(var(--pres-accent) / 0.1)",
                      border: "1px solid hsl(var(--pres-accent) / 0.2)",
                      flexShrink: 0,
                    }}
                  >
                    <b.icon size={20} style={{ color: "hsl(var(--pres-accent))" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 18,
                      color: "hsl(var(--pres-text-muted))",
                      lineHeight: 1.4,
                    }}
                  >
                    {b.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ideal for */}
          <div
            className="rounded-2xl px-7 py-6"
            style={{
              background: "hsl(var(--pres-bg-surface) / 0.7)",
              border: "1px solid hsl(var(--pres-accent) / 0.15)",
            }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "hsl(var(--pres-accent))",
                marginBottom: 16,
              }}
            >
              Ideal For
            </p>
            <div className="space-y-3">
              {idealFor.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <ArrowRight size={14} style={{ color: "hsl(var(--pres-accent))", flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 16,
                      color: "hsl(var(--pres-text-muted))",
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
