import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" as const },
});

const items = [
  { emoji: "📈", text: "5%–10% Sales Growth – Guaranteed" },
  { emoji: "🎯", text: "25% Monthly Lead Growth (Until Saturation)" },
  { emoji: "📋", text: "Full SEO + Social Media Automation" },
  { emoji: "🎬", text: "1 AI/Faceless Video per Month" },
  { emoji: "🔗", text: "200+ High-Quality Backlinks" },
  { emoji: "✍️", text: "SEO: 120 AI Articles + 12 Human+AI Authority Blogs" },
  { emoji: "💻", text: "Web: Redesign 1–5 Pages (Conditional)" },
  { emoji: "📱", text: "Social Media: 5 Posts/Week" },
  { emoji: "💰", text: "Ad Spend: $400 – $800+/month", note: "* additional ads with current ad cost" },
];

const barData = [
  { label: "Month 1", value: 15, bg: "#5b9bd5", bgFade: "#5b9bd580" },
  { label: "Month 3", value: 35, bg: "#9b6ec6", bgFade: "#9b6ec680" },
  { label: "Month 6", value: 58, bg: "#d6648a", bgFade: "#d6648a80" },
  { label: "Month 9", value: 78, bg: "#e6a832", bgFade: "#e6a83280" },
  { label: "Month 12", value: 100, bg: "hsl(var(--pres-accent))", bgFade: "hsl(var(--pres-accent) / 0.5)" },
];


const maxBarH = 360;

export default function SEOGrowthSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Crosshatch background */}
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

        {/* LEFT — Title + list */}
        <div
          className="absolute left-[80px] z-10 flex items-center"
          style={{ width: 780, top: 100, bottom: 40 }}
        >
          <div>
            <motion.h1
              {...fade(0)}
              className="font-heading"
              style={{
                fontSize: 88,
                fontWeight: 700,
                color: "hsl(var(--pres-text))",
                lineHeight: 1.02,
              }}
            >
              <span style={{ color: "hsl(var(--pres-accent))" }}>Sales Growth</span>
              <br />
              with SEO
            </motion.h1>

            <motion.p
              {...fade(1)}
              className="font-heading"
              style={{
                marginTop: 24,
                fontSize: 30,
                fontWeight: 700,
                color: "hsl(var(--pres-text))",
              }}
            >
              What We Provide
            </motion.p>

            {/* List items */}
            <div style={{ marginTop: 14 }}>
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                  className="flex items-baseline font-body"
                  style={{ gap: 14, marginBottom: 6 }}
                >
                  <span style={{ fontSize: 22 }}>{item.emoji}</span>
                  <span style={{ fontSize: 22, color: "hsl(var(--pres-text-muted))", lineHeight: 1.5 }}>
                    {item.text}
                    {item.note && (
                      <span style={{ fontSize: 16, color: "hsl(var(--pres-text-dim))", marginLeft: 8 }}>
                        {item.note}
                      </span>
                    )}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Bar chart */}
        <div
          className="absolute z-10 flex items-center"
          style={{ right: 60, top: 80, bottom: 60, width: 560 }}
        >
          <div className="w-full">
            <motion.p
              {...fade(1)}
              className="font-heading"
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: "hsl(var(--pres-text))",
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              Growth Trajectory
            </motion.p>

            {/* Bars */}
            <div
              className="flex items-end justify-center"
              style={{ height: maxBarH, gap: 24 }}
            >
              {barData.map((d, i) => {
                const barH = (d.value / 100) * maxBarH;
                return (
                  <motion.div
                    key={d.label}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{
                      delay: 0.4 + i * 0.12,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-col items-center"
                    style={{ transformOrigin: "bottom" }}
                  >
                    <div
                      className="rounded-t-lg"
                      style={{
                        width: 64,
                        height: barH,
                        background: `linear-gradient(to top, ${d.bgFade} 0%, ${d.bg} 100%)`,
                      }}
                    />
                    <span
                      className="font-body"
                      style={{
                        marginTop: 10,
                        fontSize: 16,
                        color: "hsl(var(--pres-text-dim))",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {d.label}
                    </span>
                  </motion.div>
                );
              })}
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
