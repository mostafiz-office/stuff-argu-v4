import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const comparisons = [
  {
    role: "Starter Developer",
    tier: "Tier 1",
    us: "$6,000–$8,000",
    riseup: "$1,900",
    saving: "Up to 76%",
    barUs: 100,
    barRiseup: 24,
    usColor: "#ef4444",
    riseupColor: "hsl(var(--pres-accent))",
    usGradient: "linear-gradient(90deg, #ef4444, #f87171)",
    riseupGradient: "linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))",
  },
  {
    role: "Mid-Level Developer",
    tier: "Tier 2",
    us: "$10,000–$15,000",
    riseup: "$4,299",
    saving: "Up to 71%",
    barUs: 100,
    barRiseup: 29,
    usColor: "#f97316",
    riseupColor: "hsl(142 71% 45%)",
    usGradient: "linear-gradient(90deg, #f97316, #fb923c)",
    riseupGradient: "linear-gradient(90deg, hsl(142 71% 45%), hsl(160 60% 50%))",
  },
  {
    role: "Skilled Expert",
    tier: "Tier 3.A",
    us: "$18,000–$25,000",
    riseup: "$6,800–$8,000",
    saving: "Up to 68%",
    barUs: 100,
    barRiseup: 32,
    usColor: "#7c3aed",
    riseupColor: "#a78bfa",
    usGradient: "linear-gradient(90deg, #7c3aed, #a78bfa)",
    riseupGradient: "linear-gradient(90deg, #a78bfa, #c4b5fd)",
  },
  {
    role: "Tech Leadership",
    tier: "Tier 3.B",
    us: "$22,000–$30,000",
    riseup: "$7,500–$10,000",
    saving: "Up to 67%",
    barUs: 100,
    barRiseup: 33,
    usColor: "#ec4899",
    riseupColor: "#f472b6",
    usGradient: "linear-gradient(90deg, #ec4899, #f472b6)",
    riseupGradient: "linear-gradient(90deg, #f472b6, #f9a8d4)",
  },
];

export default function PricingSavingsSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Subtle glow */}
        <div
          className="absolute z-[1]"
          style={{
            right: 200,
            top: "50%",
            width: 700,
            height: 500,
            transform: "translateY(-50%)",
            background:
              "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.05) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        {/* LEFT COLUMN */}
        <div
          className="absolute z-10 flex flex-col justify-center"
          style={{ left: 80, top: 120, bottom: 80, width: 520 }}
        >
          <motion.h1
            {...fade(0)}
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 64,
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1.05,
            }}
          >
            <span style={{ color: "hsl(var(--pres-accent))" }}>Save</span>{" "}
            <span style={{ color: "hsl(var(--pres-text))" }}>Up To</span>
            <br />
            <span style={{ color: "hsl(var(--pres-accent))", fontSize: 88 }}>76%</span>
          </motion.h1>

          {/* Accent underline */}
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
              fontSize: 21,
              color: "hsl(var(--pres-text-muted))",
              marginTop: 28,
              lineHeight: 1.7,
              maxWidth: 440,
            }}
          >
            Compare monthly costs:{" "}
            <strong style={{ color: "hsl(var(--pres-accent))" }}>
              US market rates
            </strong>{" "}
            vs RiseUp Asia.
          </motion.p>

          {/* Savings stat card */}
          <motion.div
            {...fade(3)}
            className="rounded-2xl flex items-center gap-5"
            style={{
              marginTop: 40,
              padding: "24px 32px",
              background: "hsl(var(--pres-bg-surface))",
              border: "1px solid hsl(var(--pres-accent) / 0.12)",
              maxWidth: 380,
            }}
          >
            <span
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: 52,
                fontWeight: 700,
                color: "hsl(var(--pres-accent))",
                lineHeight: 1,
              }}
            >
              76%
            </span>
            <div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "hsl(var(--pres-text))",
                  lineHeight: 1.3,
                }}
              >
                Max Savings
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  color: "hsl(var(--pres-text-dim))",
                  lineHeight: 1.3,
                  marginTop: 2,
                }}
              >
                vs. US market rates
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — Tier comparison bars */}
        <div
          className="absolute z-10 flex flex-col justify-center gap-8"
          style={{ left: 700, right: 80, top: 100, bottom: 80 }}
        >
          {comparisons.map((c, i) => (
            <motion.div
              key={c.role}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 + i * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {/* Label row */}
              <div
                className="flex items-center justify-between"
                style={{ marginBottom: 8 }}
              >
                <div className="flex items-center gap-3">
                  <span
                    style={{
                      fontFamily: "'Ubuntu', sans-serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "hsl(var(--pres-text))",
                    }}
                  >
                    {c.role}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 14,
                      color: "hsl(var(--pres-text-dim))",
                    }}
                  >
                    {c.tier}
                  </span>
                </div>
                <span
                  className="rounded-full px-3 py-0.5"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                    background: c.usColor,
                  }}
                >
                  {c.saving}
                </span>
              </div>

              {/* US bar */}
              <div className="flex items-center gap-3 mb-2">
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: c.usColor,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    color: "hsl(var(--pres-text-dim))",
                    width: 60,
                    flexShrink: 0,
                  }}
                >
                  US Rate
                </span>
                <div
                  className="flex-1 rounded-full overflow-hidden"
                  style={{
                    height: 12,
                    background: "hsl(var(--pres-bg-surface))",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${c.barUs}%` }}
                    transition={{
                      delay: 0.5 + i * 0.12,
                      duration: 0.8,
                    }}
                    className="h-full rounded-full"
                    style={{ background: c.usGradient }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    color: c.usColor,
                    width: 160,
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {c.us}
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 400,
                      color: "hsl(var(--pres-text-dim))",
                    }}
                  >
                    /mo
                  </span>
                </span>
              </div>

              {/* RiseUp bar */}
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: c.riseupColor,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    color: "hsl(var(--pres-text-dim))",
                    width: 60,
                    flexShrink: 0,
                  }}
                >
                  RiseUp
                </span>
                <div
                  className="flex-1 rounded-full overflow-hidden"
                  style={{
                    height: 12,
                    background: "hsl(var(--pres-bg-surface))",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${c.barRiseup}%` }}
                    transition={{
                      delay: 0.6 + i * 0.12,
                      duration: 0.8,
                    }}
                    className="h-full rounded-full"
                    style={{
                      background: c.riseupGradient,
                      boxShadow: `0 0 16px ${c.riseupColor}40`,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: c.riseupColor,
                    width: 160,
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {c.riseup}
                  <span
                    style={{
                      fontSize: 13,
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
        </div>
      </div>
    </ScaledSlide>
  );
}
