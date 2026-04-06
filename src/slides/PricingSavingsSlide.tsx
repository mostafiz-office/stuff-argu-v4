import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const regions = [
  {
    name: "USA",
    hourly: "$150–250/hr",
    yearly: "$312K–520K/yr",
    barPercent: 100,
    color: "#ef4444",
    gradient: "linear-gradient(90deg, #ef4444, #f87171)",
  },
  {
    name: "UK",
    hourly: "$120–200/hr",
    yearly: "$250K–416K/yr",
    barPercent: 82,
    color: "#3b82f6",
    gradient: "linear-gradient(90deg, #3b82f6, #60a5fa)",
  },
  {
    name: "Eastern Europe",
    hourly: "$50–80/hr",
    yearly: "$104K–166K/yr",
    barPercent: 34,
    color: "#a78bfa",
    gradient: "linear-gradient(90deg, #7c3aed, #a78bfa)",
  },
  {
    name: "Riseup Asia",
    hourly: "$25–50/hr",
    yearly: "$52K–104K/yr",
    barPercent: 20,
    color: "hsl(var(--pres-accent))",
    gradient: "linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))",
    highlight: true,
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
              fontSize: 72,
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1.05,
            }}
          >
            <span style={{ color: "hsl(var(--pres-accent))" }}>Cost</span>
            <br />
            <span style={{ color: "hsl(var(--pres-text))" }}>Comparison</span>
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
            Same quality talent at{" "}
            <strong style={{ color: "hsl(var(--pres-accent))" }}>
              60% less cost
            </strong>
            . No compromise on expertise, process, or delivery standards.
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
              60%
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
                Average Savings
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
                vs. US-based development teams
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — Region bars */}
        <div
          className="absolute z-10 flex flex-col justify-center gap-12"
          style={{ left: 700, right: 80, top: 120, bottom: 80 }}
        >
          {regions.map((r, i) => (
            <motion.div
              key={r.name}
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
                className="flex items-baseline justify-between"
                style={{ marginBottom: 10 }}
              >
                <div className="flex items-center gap-3">
                  {/* Dot */}
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: r.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 22,
                      fontWeight: r.highlight ? 700 : 600,
                      color: r.highlight
                        ? "hsl(var(--pres-accent))"
                        : "hsl(var(--pres-text))",
                    }}
                  >
                    {r.name}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: r.color,
                    }}
                  >
                    {r.hourly}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 16,
                      color: "hsl(var(--pres-text-dim))",
                    }}
                  >
                    {r.yearly}
                  </span>
                </div>
              </div>

              {/* Bar */}
              <div
                className="rounded-full overflow-hidden"
                style={{
                  height: 14,
                  background: "hsl(var(--pres-bg-surface))",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${r.barPercent}%` }}
                  transition={{
                    delay: 0.5 + i * 0.15,
                    duration: 0.9,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full"
                  style={{
                    background: r.gradient,
                    boxShadow: r.highlight
                      ? "0 0 20px hsl(var(--pres-accent) / 0.3)"
                      : "none",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}
