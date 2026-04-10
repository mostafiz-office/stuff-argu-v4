import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" as const },
});

const barData = [
  { year: "2005", value: 72, badge: "+5%", projects: 3 },
  { year: "2010", value: 82, badge: "+14%", projects: 12 },
  { year: "2015", value: 91, badge: "+22%", projects: 28 },
  { year: "2020", value: 96, badge: "+35%", projects: 42 },
  { year: "2024", value: 99.2, badge: "+48%", projects: 56 },
  { year: "2025", value: 99.9, badge: "+60%", projects: 72 },
];

const maxBarH = 440;

export default function SoftwareEngineeringSlide() {
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
            right: 200, top: 180, width: 700, height: 600,
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.07) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* LEFT — vertically centered title + description */}
        <div
          className="absolute left-[80px] top-[80px] bottom-[60px] z-10 flex items-center"
          style={{ width: 620 }}
        >
          <div>
            <motion.h1
              {...fade(0)}
              className="font-heading"
              style={{
                fontSize: 96,
                fontWeight: 700,
                color: "hsl(var(--pres-text))",
                lineHeight: 1.02,
              }}
            >
              <span style={{ color: "hsl(var(--pres-accent))" }}>Software</span>
              <br />
              Engineering
            </motion.h1>

            <motion.p
              {...fade(1)}
              className="font-body"
              style={{
                marginTop: 32,
                fontSize: 26,
                color: "hsl(var(--pres-text-muted))",
                lineHeight: 1.6,
                maxWidth: 520,
              }}
            >
              Engineering the future — building{" "}
              <strong style={{ color: "hsl(var(--pres-accent))" }}>
                scalable software
              </strong>{" "}
              that turns ideas into real business impact. Custom solutions and{" "}
              <strong style={{ color: "hsl(var(--pres-accent))" }}>
                AI built to scale
              </strong>{" "}
              for enterprises worldwide.
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
              Riseup-Asia · Engineering Division (2005–2025)
            </motion.p>
          </div>
        </div>

        {/* RIGHT — Bar chart, also vertically centered */}
        <div
          className="absolute z-10 flex items-center"
          style={{ right: 60, top: 80, bottom: 60, width: 880 }}
        >
          <div className="w-full">
            {/* Chart title */}
            <motion.p
              {...fade(1)}
              className="font-heading italic"
              style={{
                fontSize: 36,
                color: "hsl(var(--pres-text))",
                textAlign: "center",
                marginBottom: 2,
              }}
            >
              Engineering Growth &amp; Reliability
            </motion.p>
            <motion.p
              {...fade(1)}
              className="font-body"
              style={{
                fontSize: 18,
                color: "hsl(var(--pres-text-dim))",
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              2005 – 2025
            </motion.p>

            {/* Legend */}
            <motion.div
              {...fade(2)}
              className="flex items-center justify-center"
              style={{ gap: 32, marginBottom: 16 }}
            >
              {[
                { label: "Uptime %", opacity: "1" },
                { label: "Projects Delivered", opacity: "0.35" },
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
                <span>90%</span>
                <span>80%</span>
              </div>

              {/* Grid lines */}
              {[0, 0.5, 1].map((frac, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: 56, right: 0, top: frac * maxBarH,
                    height: 1, background: "hsl(var(--pres-text-dim) / 0.15)",
                  }}
                />
              ))}

              {/* Bars */}
              <div
                className="absolute flex items-end"
                style={{
                  left: 56, right: 0, top: 0, height: maxBarH,
                  gap: 20, justifyContent: "space-around",
                }}
              >
                {barData.map((d, i) => {
                  const barH = ((d.value - 75) / 25) * maxBarH;
                  const projectBarH = (d.projects / 80) * maxBarH;
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
                      style={{ flex: 1, transformOrigin: "bottom" }}
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
                      <div className="relative w-full flex justify-center" style={{ height: barH, gap: 5 }}>
                        <div
                          className="rounded-t-lg"
                          style={{
                            width: 42, height: barH,
                            background: "linear-gradient(to top, hsl(var(--pres-accent) / 0.6) 0%, hsl(var(--pres-accent)) 100%)",
                          }}
                        />
                        <div
                          className="rounded-t-lg self-end"
                          style={{
                            width: 42, height: projectBarH,
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
                  left: 56, right: 0, top: maxBarH + 10,
                  justifyContent: "space-around",
                  fontSize: 20, color: "hsl(var(--pres-text-muted))",
                }}
              >
                {barData.map((d) => (
                  <span key={d.year} className="text-center" style={{ flex: 1 }}>{d.year}</span>
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
