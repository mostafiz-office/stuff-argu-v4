import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const data = [
  { region: "USA", rate: "$150–250/hr", annual: "$312K–520K", bar: 100, highlight: false, color: "#e05a6f", colorDim: "#e05a6f88", colorGlow: "#e05a6f33" },
  { region: "UK", rate: "$120–200/hr", annual: "$250K–416K", bar: 85, highlight: false, color: "#3b82f6", colorDim: "#3b82f688", colorGlow: "#3b82f633" },
  { region: "Eastern Europe", rate: "$50–80/hr", annual: "$104K–166K", bar: 45, highlight: false, color: "#a855f7", colorDim: "#a855f788", colorGlow: "#a855f733" },
  { region: "Riseup-Asia", rate: "$25–50/hr", annual: "$52K–104K", bar: 25, highlight: true, color: "", colorDim: "", colorGlow: "" },
];

export default function CostComparisonSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Ambient glow */}
        <div
          className="absolute z-[1]"
          style={{
            right: 200,
            top: "50%",
            width: 600,
            height: 500,
            transform: "translateY(-50%)",
            background:
              "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        {/* Left column */}
        <div className="absolute left-[80px] top-[80px] bottom-[60px] z-10 flex flex-col justify-center" style={{ maxWidth: 640 }}>
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
            <span style={{ color: "hsl(var(--pres-accent))" }}>Cost</span>
            <br />
            Comparison
          </motion.h1>

          <motion.div {...fade(1)} className="accent-bar mt-5" style={{ width: 80 }} />

          <motion.p
            {...fade(1)}
            className="mt-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 21,
              color: "hsl(var(--pres-text-muted))",
              lineHeight: 1.7,
              maxWidth: 480,
            }}
          >
            Same quality talent at{" "}
            <strong style={{ color: "hsl(var(--pres-accent))" }}>60% less cost</strong>.
            No compromise on expertise, process, or delivery standards.
          </motion.p>

          {/* Savings callout */}
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
              60%
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
                Average Savings
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  color: "hsl(var(--pres-text-dim))",
                }}
              >
                vs. US-based development teams
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right column — bars */}
        <motion.div
          {...fade(2)}
          className="absolute right-[80px] z-10 flex flex-col justify-center"
          style={{ width: 740, top: 110, bottom: 60 }}
        >
          <div className="space-y-7">
            {data.map((d, i) => (
              <motion.div
                key={d.region}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
              >
                {/* Label row */}
                <div className="flex items-baseline justify-between mb-2.5">
                  <div className="flex items-center gap-3">
                    <span
                      className="rounded-full"
                      style={{
                        width: 8,
                        height: 8,
                        background: d.highlight ? "hsl(var(--pres-accent))" : d.color,
                        boxShadow: d.highlight ? "0 0 8px hsl(var(--pres-accent) / 0.5)" : `0 0 8px ${d.colorGlow}`,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 20,
                        fontWeight: d.highlight ? 700 : 500,
                        color: d.highlight
                          ? "hsl(var(--pres-accent))"
                          : "hsl(var(--pres-text))",
                      }}
                    >
                      {d.region}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 18,
                        fontWeight: 600,
                        color: d.highlight
                          ? "hsl(var(--pres-accent))"
                          : d.color,
                      }}
                    >
                      {d.rate}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 15,
                        color: "hsl(var(--pres-text-dim))",
                      }}
                    >
                      {d.annual}/yr
                    </span>
                  </div>
                </div>

                {/* Bar */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    height: 18,
                    borderRadius: 9,
                    background: "hsl(var(--pres-bg-surface) / 0.5)",
                    border: "1px solid hsl(var(--pres-text-dim) / 0.12)",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${d.bar}%` }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.9, ease: "easeOut" }}
                    className="h-full"
                    style={{
                      borderRadius: 9,
                      background: d.highlight
                        ? `linear-gradient(90deg, hsl(var(--pres-accent)) 0%, hsl(var(--pres-accent) / 0.6) 70%, transparent 100%)`
                        : `linear-gradient(90deg, ${d.color} 0%, ${d.colorDim} 70%, transparent 100%)`,
                    }}
                  />
                  {/* Full-width track outline */}
                  <div
                    className="absolute inset-0"
                    style={{
                      borderRadius: 9,
                      border: `1px solid ${d.highlight ? "hsl(var(--pres-text-dim) / 0.15)" : "hsl(var(--pres-text-dim) / 0.1)"}`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
