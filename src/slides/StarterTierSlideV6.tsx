import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Heart, XCircle, CheckCircle, Crown, ArrowRight, Sparkles } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const painPoints = [
  "3-month hiring cycles",
  "Recruiters taking 20% fees",
  "Devs who need months to ramp up",
  "Managing freelancers across timezones",
];

const solutions = [
  "Hire in 20 minutes, not 3 months",
  "Zero recruitment fees — ever",
  "Productive from Day 1, your stack",
  "Dedicated full-time, your timezone",
  "Senior lead guiding every task",
  "Daily standups & weekly reports",
];

export default function StarterTierSlideV6() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <div
          className="absolute z-[1]"
          style={{
            left: "50%",
            top: "50%",
            width: 900,
            height: 700,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 55%)",
            filter: "blur(80px)",
          }}
        />

        {/* Header */}
        <div className="absolute left-[80px] right-[80px] top-[70px] z-10">
          <motion.div {...fade(0)} className="flex items-center gap-3 mb-3">
            <div
              className="flex items-center justify-center rounded-xl"
              style={{
                width: 44,
                height: 44,
                background: "hsl(var(--pres-accent) / 0.12)",
                border: "1px solid hsl(var(--pres-accent) / 0.25)",
              }}
            >
              <Heart size={22} style={{ color: "hsl(var(--pres-accent))" }} />
            </div>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "hsl(var(--pres-accent))",
              }}
            >
              Built for Founders
            </span>
          </motion.div>
          <motion.h1
            {...fade(1)}
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 46,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "hsl(var(--pres-text))",
            }}
          >
            Stop Hiring. <span style={{ color: "hsl(var(--pres-accent))" }}>Start Shipping.</span>
          </motion.h1>
          <motion.p
            {...fade(2)}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 18,
              color: "hsl(var(--pres-text-muted))",
              marginTop: 8,
              maxWidth: 700,
            }}
          >
            We built Tier 1 for founders who are tired of the hiring game and just want their product built — well.
          </motion.p>
        </div>

        {/* Three columns: Pain → Solution → Offer */}
        <div className="absolute left-[80px] right-[80px] top-[250px] bottom-[50px] z-10 flex gap-5">
          {/* Column 1: Pain points */}
          <motion.div
            {...fade(3)}
            className="rounded-2xl flex flex-col justify-between"
            style={{
              flex: 1,
              background: "hsl(0 40% 12% / 0.4)",
              border: "1.5px solid hsl(0 60% 40% / 0.3)",
              padding: "24px 22px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "hsl(0 70% 60%)",
                  marginBottom: 18,
                }}
              >
                The Old Way
              </p>
              <div className="space-y-5">
                {painPoints.map((pain, i) => (
                  <motion.div key={pain} {...fade(4 + i)} className="flex items-start gap-3">
                    <XCircle size={18} style={{ color: "hsl(0 70% 55%)", flexShrink: 0, marginTop: 2 }} />
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 16,
                        color: "hsl(var(--pres-text-muted))",
                        lineHeight: 1.4,
                      }}
                    >
                      {pain}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                color: "hsl(0 60% 50%)",
                fontStyle: "italic",
                marginTop: 16,
              }}
            >
              Months wasted, budgets burned.
            </p>
          </motion.div>

          {/* Arrow */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <ArrowRight size={32} style={{ color: "hsl(var(--pres-accent))" }} />
            </motion.div>
          </div>

          {/* Column 2: Solutions */}
          <motion.div
            {...fade(5)}
            className="rounded-2xl flex flex-col justify-between"
            style={{
              flex: 1,
              background: "hsl(var(--pres-bg-surface))",
              border: "1.5px solid hsl(142 71% 45% / 0.25)",
              padding: "24px 22px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "hsl(142 71% 45%)",
                  marginBottom: 18,
                }}
              >
                The Tier 1 Way
              </p>
              <div className="space-y-4">
                {solutions.map((s, i) => (
                  <motion.div key={s} {...fade(6 + i)} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: "hsl(142 71% 45%)", flexShrink: 0, marginTop: 2 }} />
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 15,
                        color: "hsl(var(--pres-text))",
                        lineHeight: 1.4,
                      }}
                    >
                      {s}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 3: The Offer */}
          <motion.div
            {...fade(6)}
            className="rounded-2xl flex flex-col justify-between"
            style={{
              width: 340,
              flexShrink: 0,
              background: "linear-gradient(170deg, hsl(var(--pres-accent) / 0.14), hsl(var(--pres-bg-surface)))",
              border: "2px solid hsl(var(--pres-accent) / 0.35)",
              padding: "24px 22px",
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} style={{ color: "hsl(var(--pres-accent))" }} />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  Tier 1 · Starter
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 52,
                    fontWeight: 700,
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  $1,900
                </span>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: "hsl(var(--pres-text-dim))" }}>
                  /mo
                </span>
              </div>

              <div
                className="rounded-lg px-3 py-1.5 inline-flex items-center gap-2 mb-5"
                style={{
                  background: "hsl(var(--pres-accent) / 0.1)",
                  border: "1px solid hsl(var(--pres-accent) / 0.2)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  ⚡ 160h focused output
                </span>
              </div>

              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  color: "hsl(var(--pres-text-muted))",
                  lineHeight: 1.6,
                }}
              >
                Full-time developer, senior-led, embedded in your workflow. Cancel anytime.
              </p>
            </div>

            {/* Bonus */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="rounded-xl"
              style={{
                background: "hsl(45 100% 50% / 0.08)",
                border: "1.5px solid hsl(45 100% 50% / 0.3)",
                padding: "14px 16px",
                marginTop: 16,
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Crown size={16} style={{ color: "hsl(45 100% 50%)" }} />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "hsl(45 100% 50%)",
                  }}
                >
                  🎁 Free Bonus
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "hsl(var(--pres-text))",
                }}
              >
                $50K/mo Expert Oversight
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  color: "hsl(var(--pres-text-muted))",
                  marginTop: 2,
                }}
              >
                Alim Ul Karim · Chief Engineer
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
