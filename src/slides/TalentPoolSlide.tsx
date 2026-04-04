import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" as const },
});

const talents = [
  { label: "JavaScript", count: "50+", height: 380, color: "#4ade80" },
  { label: "App Dev", count: "22+", height: 200, color: "#fcd99e" },
  { label: "Game Dev", count: "5+", height: 60, color: "#fde047" },
  { label: "SQA", count: "18+", height: 160, color: "#d8b4fe" },
  { label: "AI/ML", count: "8+", height: 80, color: "#fde047" },
  { label: "Database", count: "25+", height: 230, color: "#4ade80" },
  { label: "DevOps", count: "5+", height: 60, color: "#fcd99e" },
  { label: "Node Js", count: "32+", height: 290, color: "#4ade80" },
  { label: "PHP", count: "20+", height: 180, color: "#c4b5fd" },
  { label: ".NET", count: "23+", height: 210, color: "#fcd99e" },
  { label: "Python", count: "20+", height: 180, color: "#c4b5fd" },
  { label: "WordPress", count: "15+", height: 130, color: "#f0abfc" },
  { label: "GoLang", count: "27+", height: 250, color: "#fcd99e" },
  { label: "UI/UX Dev", count: "8+", height: 80, color: "#fde047" },
];

export default function TalentPoolSlide() {
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
            left: 200, top: 300, width: 800, height: 500,
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Title */}
        <div className="absolute left-[80px] top-[80px] z-10">
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
            Our <span style={{ color: "hsl(var(--pres-accent))" }}>Talent Pool</span>
          </motion.h1>
        </div>

        {/* Bar Chart */}
        <div
          className="absolute z-10 flex items-end justify-center"
          style={{ left: 80, right: 80, bottom: 160, height: 440, gap: 14 }}
        >
          {talents.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                delay: 0.3 + i * 0.06,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center"
              style={{ transformOrigin: "bottom", flex: 1, minWidth: 0 }}
            >
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                className="font-body font-bold"
                style={{
                  fontSize: 20,
                  color: "hsl(var(--pres-text))",
                  marginBottom: 6,
                }}
              >
                {t.count}
              </motion.span>
              <div
                className="rounded-t-lg w-full"
                style={{
                  height: t.height,
                  maxWidth: 80,
                  margin: "0 auto",
                  background: `linear-gradient(to top, ${t.color}60 0%, ${t.color} 100%)`,
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
                {t.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom badge */}
        <motion.div
          {...fade(3)}
          className="absolute z-10"
          style={{ right: 80, bottom: 80 }}
        >
          <span
            className="font-body font-semibold"
            style={{
              fontSize: 22,
              color: "hsl(var(--pres-bg))",
              background: "hsl(var(--pres-accent))",
              padding: "10px 28px",
              borderRadius: 30,
            }}
          >
            180+ talents are waiting to be hired
          </span>
        </motion.div>

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
