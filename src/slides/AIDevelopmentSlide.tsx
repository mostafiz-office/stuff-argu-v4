import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" as const },
});

const barData = [
  { year: "2025", value: 50, badge: "35", projects: 30 },
  { year: "2026", value: 72, badge: "65+", projects: 60 },
];

const maxBarH = 440;

export default function AIDevelopmentSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Diagonal crosshatch background */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.04) 28px, hsl(var(--pres-accent) / 0.04) 29px),
              repeating-linear-gradient(-45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.04) 28px, hsl(var(--pres-accent) / 0.04) 29px)
            `,
          }}
        />

        {/* Accent glow */}
        <div
          className="absolute z-[1]"
          style={{
            right: 280, top: 180, width: 560, height: 520,
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.07) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* LEFT — vertically centered title + description */}
        <div
          className="absolute left-[80px] top-[80px] bottom-[60px] z-10 flex items-center"
          style={{ width: 560 }}
        >
          <div>
            <motion.h1
              {...fade(0)}
              className="font-heading"
              style={{
                fontSize: 84,
                fontWeight: 700,
                color: "hsl(var(--pres-text))",
                lineHeight: 1.02,
              }}
            >
              <span style={{ color: "hsl(var(--pres-accent))" }}>AI</span>
              <br />
              Development
            </motion.h1>

            <motion.p
              {...fade(1)}
              className="font-body"
              style={{
                marginTop: 32,
                fontSize: 24,
                color: "hsl(var(--pres-text-muted))",
                lineHeight: 1.6,
                maxWidth: 500,
              }}
            >
              Turning data into{" "}
              <strong style={{ color: "hsl(var(--pres-accent))" }}>
                intelligent systems
              </strong>{" "}
              that automate, predict, and scale. From{" "}
              <strong style={{ color: "hsl(var(--pres-accent))" }}>
                machine learning models
              </strong>{" "}
              to production-ready AI pipelines.
            </motion.p>

            {/* Source */}
            <motion.p
              {...fade(2)}
              className="font-body"
              style={{
                marginTop: 40,
                fontSize: 16,
                color: "hsl(var(--pres-text-dim))",
              }}
            >
              Riseup-Asia · AI Division (2025–2026)
            </motion.p>
          </div>
        </div>

        {/* RIGHT — Bar chart */}
        <div
          className="absolute z-10 flex items-center"
          style={{ right: 120, top: 90, bottom: 70, width: 760 }}
        >
          <div className="w-full">
            {/* Chart title */}
            <motion.p
              {...fade(1)}
              className="font-heading"
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "hsl(var(--pres-text))",
                textAlign: "center",
                marginBottom: 2,
              }}
            >
              AI Adoption &amp; Model Deployments
            </motion.p>
            <motion.p
              {...fade(1)}
              className="font-body"
              style={{
                fontSize: 18,
                color: "hsl(var(--pres-text-dim))",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              2025 – 2026
            </motion.p>

            {/* Legend */}
              <motion.div
                {...fade(2)}
                className="flex items-center justify-center"
                style={{ gap: 28, marginBottom: 26 }}
              >
              {[
                { label: "AI Accuracy %", opacity: "1" },
                { label: "Models Deployed", opacity: "0.35" },
              ].map((l) => (
                <div key={l.label} className="flex items-center" style={{ gap: 8 }}>
                  <div
                    className="rounded-full"
                    style={{
                      width: 12, height: 12,
                      background: `hsl(var(--pres-accent) / ${l.opacity})`,
                    }}
                  />
                  <span className="font-body" style={{ fontSize: 17, color: "hsl(var(--pres-text-muted))" }}>
                    {l.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Chart area */}
            <div className="relative" style={{ height: maxBarH + 50 }}>
              {/* Y-axis labels */}
              <div
                className="absolute left-0 top-0 flex flex-col justify-between font-body"
                style={{
                  height: maxBarH, width: 50,
                  fontSize: 15, color: "hsl(var(--pres-text-dim))",
                  textAlign: "right", paddingRight: 8,
                }}
              >
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
              </div>

              {/* Grid lines */}
              {[0, 0.5, 1].map((frac, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: 64, right: 0, top: frac * maxBarH,
                    height: 1, background: "hsl(var(--pres-text-dim) / 0.15)",
                  }}
                />
              ))}

              {/* Bars */}
              <div
                className="absolute flex items-end"
                style={{
                  left: 64, right: 0, top: 0, height: maxBarH,
                  gap: 56, justifyContent: "center",
                }}
              >
                {barData.map((d, i) => {
                  const barH = (d.value / 100) * maxBarH;
                  const projectBarH = (d.projects / 100) * maxBarH;
                  const groupH = Math.max(barH, projectBarH);
                  return (
                    <motion.div
                      key={d.year}
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      transition={{
                        delay: 0.35 + i * 0.1,
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex flex-col items-center"
                      style={{ width: 170, transformOrigin: "bottom" }}
                    >
                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                        className="font-body font-semibold"
                        style={{
                          fontSize: 16,
                          color: "hsl(var(--pres-bg))",
                          background: "hsl(var(--pres-accent))",
                          padding: "3px 10px",
                          marginBottom: 8,
                          borderRadius: 6,
                        }}
                      >
                        {d.badge}
                      </motion.div>

                      {/* Grouped bars */}
                      <div className="relative w-full flex justify-center items-end" style={{ height: groupH, gap: 10 }}>
                        <div
                          className="rounded-t-lg"
                          style={{
                            width: 52, height: barH,
                            background: "linear-gradient(to top, hsl(var(--pres-accent) / 0.6) 0%, hsl(var(--pres-accent)) 100%)",
                          }}
                        />
                        <div
                          className="rounded-t-lg"
                          style={{
                            width: 52, height: projectBarH,
                            background: "linear-gradient(to top, hsl(var(--pres-accent) / 0.12) 0%, hsl(var(--pres-accent) / 0.4) 100%)",
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* X-axis labels */}
              <div
                className="absolute flex font-body font-semibold"
                style={{
                  left: 64, right: 0, top: maxBarH + 10,
                  justifyContent: "center",
                  gap: 56,
                  fontSize: 20, color: "hsl(var(--pres-text-muted))",
                }}
              >
                {barData.map((d) => (
                  <span key={d.year} className="text-center" style={{ width: 170 }}>{d.year}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: 4,
            background: "linear-gradient(90deg, hsl(var(--pres-accent)) 0%, hsl(var(--pres-accent) / 0.3) 50%, transparent 100%)",
          }}
        />
      </div>
    </ScaledSlide>
  );
}
