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
    usColor: "hsl(220 70% 55%)",
    riseupColor: "hsl(var(--pres-accent))",
    usGradient: "linear-gradient(90deg, hsl(220 70% 55%), hsl(220 60% 65%))",
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
    usColor: "hsl(280 50% 55%)",
    riseupColor: "hsl(var(--pres-accent))",
    usGradient: "linear-gradient(90deg, hsl(280 50% 55%), hsl(280 40% 65%))",
    riseupGradient: "linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))",
  },
  {
    role: "Skilled Expert",
    tier: "Tier 3.A",
    us: "$18,000–$25,000",
    riseup: "$6,800–$8,000",
    saving: "Up to 68%",
    barUs: 100,
    barRiseup: 32,
    usColor: "hsl(340 55% 55%)",
    riseupColor: "hsl(var(--pres-accent))",
    usGradient: "linear-gradient(90deg, hsl(340 55% 55%), hsl(340 45% 65%))",
    riseupGradient: "linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))",
  },
  {
    role: "Tech Leadership",
    tier: "Tier 3.B",
    us: "$22,000–$30,000",
    riseup: "$7,500–$10,000",
    saving: "Up to 67%",
    barUs: 100,
    barRiseup: 33,
    usColor: "hsl(200 60% 50%)",
    riseupColor: "hsl(var(--pres-accent))",
    usGradient: "linear-gradient(90deg, hsl(200 60% 50%), hsl(200 50% 60%))",
    riseupGradient: "linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))",
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
          style={{ left: 80, top: 80, bottom: 60, maxWidth: 640 }}
        >
          <motion.h1
            {...fade(0)}
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 76,
              fontWeight: 700,
              fontStyle: "italic",
              color: "hsl(var(--pres-text))",
              lineHeight: 1.05,
            }}
          >
            <span style={{ color: "hsl(var(--pres-text))" }}>Get Up To</span>
            <br />
            <span style={{ color: "hsl(var(--pres-accent))" }}>4× Value</span>
          </motion.h1>

          <motion.div {...fade(1)} className="accent-bar mt-5" style={{ width: 80 }} />

          <motion.p
            {...fade(2)}
            className="mt-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 21,
              color: "hsl(var(--pres-text-muted))",
              lineHeight: 1.7,
              maxWidth: 480,
            }}
          >
            Compare the value you receive: {" "}
            <strong style={{ color: "hsl(var(--pres-accent))" }}>
              more output, more expertise
            </strong>{" "}
            than US market alternatives.
          </motion.p>

          {/* Value callout */}
          <motion.div
            {...fade(3)}
            className="glass-card mt-8 px-7 py-5 inline-flex items-center gap-5"
          >
            <span
              className="metric-glow"
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: 48,
                fontWeight: 700,
              }}
            >
              4×
            </span>
            <div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "hsl(var(--pres-text))",
                }}
              >
                More Value
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  color: "hsl(var(--pres-text-dim))",
                }}
              >
                vs. hiring directly in the US
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — resized to match reference proportions */}
        <motion.div
          {...fade(2)}
          className="absolute right-[80px] z-10 flex flex-col justify-center"
          style={{ width: 780, top: 110, bottom: 60 }}
        >
          <div className="space-y-8">
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
                  style={{ marginBottom: 10 }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: c.usColor,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 20,
                        fontWeight: 600,
                        color: c.usColor,
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
                      color: "hsl(var(--pres-bg))",
                      background: "hsl(var(--pres-accent))",
                    }}
                  >
                    {c.saving}
                  </span>
                </div>

                {/* US bar */}
                <div className="flex items-center gap-4 mb-3">
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      color: "hsl(var(--pres-text-dim))",
                      width: 68,
                      flexShrink: 0,
                    }}
                  >
                    US Rate
                  </span>
                  <div
                    className="flex-1 rounded-full overflow-hidden"
                    style={{
                      height: 18,
                      background: "hsl(var(--pres-bg-surface) / 0.55)",
                      border: "1px solid hsl(var(--pres-text-dim) / 0.12)",
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
                      fontSize: 18,
                      fontWeight: 600,
                      color: c.usColor,
                      width: 190,
                      textAlign: "right",
                      flexShrink: 0,
                    }}
                  >
                    {c.us}
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 400,
                        color: "hsl(var(--pres-text-dim))",
                      }}
                    >
                      /mo
                    </span>
                  </span>
                </div>

                {/* RiseUp bar */}
                <div className="flex items-center gap-4">
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      color: "hsl(var(--pres-text-dim))",
                      width: 68,
                      flexShrink: 0,
                    }}
                  >
                    RiseUp
                  </span>
                  <div
                    className="flex-1 rounded-full overflow-hidden"
                    style={{
                      height: 18,
                      background: "hsl(var(--pres-bg-surface) / 0.55)",
                      border: "1px solid hsl(var(--pres-text-dim) / 0.12)",
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
                      fontSize: 18,
                      fontWeight: 700,
                      color: c.riseupColor,
                      width: 190,
                      textAlign: "right",
                      flexShrink: 0,
                    }}
                  >
                    {c.riseup}
                    <span
                      style={{
                        fontSize: 15,
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
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
