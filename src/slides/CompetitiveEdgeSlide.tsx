import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Crosshair, Zap, BarChart3 } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const pillars = [
  {
    icon: Crosshair,
    label: "Focus",
    desc: "We identify the highest-impact areas of your business and direct all energy there — no scattered efforts, no busywork.",
  },
  {
    icon: Zap,
    label: "Efficiency",
    desc: "Lean processes, sharp execution. Every sprint, every deliverable is designed to move fast without cutting corners.",
  },
  {
    icon: BarChart3,
    label: "Results",
    desc: "Everything we do ties back to measurable outcomes — revenue growth, user adoption, cost reduction. No vanity metrics.",
  },
];

export default function CompetitiveEdgeSlide() {
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
            left: "50%",
            top: 400,
            width: 900,
            height: 500,
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Content container — vertically centered */}
        <div
          className="absolute z-10 flex flex-col justify-center"
          style={{ left: 80, right: 80, top: 80, bottom: 40 }}
        >
          {/* Title block */}
          <div style={{ marginBottom: 48 }}>
            <motion.h1
              {...fade(0)}
              className="font-heading"
              style={{
                fontSize: 82,
                fontWeight: 700,
                color: "hsl(var(--pres-text))",
                lineHeight: 1.05,
              }}
            >
              How We <span style={{ color: "hsl(var(--pres-accent))" }}>Deliver</span>
            </motion.h1>
            <motion.p
              {...fade(1)}
              className="font-body"
              style={{
                fontSize: 24,
                color: "hsl(var(--pres-text-muted))",
                marginTop: 16,
                maxWidth: 700,
                lineHeight: 1.6,
              }}
            >
              Three principles that drive every engagement — from day one to long-term partnership.
            </motion.p>
          </div>

          {/* Three pillar cards */}
          <div className="flex" style={{ gap: 28 }}>
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.label}
                  {...fade(i + 2)}
                  className="flex-1 rounded-2xl"
                  style={{
                    background: "hsl(var(--pres-bg-surface))",
                    border: "1px solid hsl(var(--pres-accent) / 0.12)",
                    padding: "40px 36px 44px",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{
                      width: 56,
                      height: 56,
                      background: "hsl(var(--pres-accent) / 0.1)",
                      marginBottom: 24,
                    }}
                  >
                    <Icon size={28} style={{ color: "hsl(var(--pres-accent))" }} />
                  </div>

                  <h3
                    className="font-heading"
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      color: "hsl(var(--pres-accent))",
                      marginBottom: 14,
                    }}
                  >
                    {p.label}
                  </h3>

                  <p
                    className="font-body"
                    style={{
                      fontSize: 20,
                      color: "hsl(var(--pres-text-muted))",
                      lineHeight: 1.65,
                    }}
                  >
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
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
