import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Search, ClipboardList, BookOpen, Brain, GraduationCap, Handshake } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const },
});

const steps = [
  {
    icon: Search,
    step: "STEP 1",
    title: "Job Circular Visibility",
    bullets: [
      "Top engineers discover our openings",
      "Targeted outreach & strategic postings",
    ],
  },
  {
    icon: ClipboardList,
    step: "STEP 2",
    title: "Elite Sign-Up Form",
    bullets: [
      "Expert-level screening questions",
      "Only the top 3% qualify to proceed",
    ],
  },
  {
    icon: BookOpen,
    step: "STEP 3",
    title: "Core Training",
    bullets: [
      "Memory enhancement training",
      "Structured note-taking prep",
    ],
  },
  {
    icon: Brain,
    step: "STEP 4",
    title: "Real-World Problem Solving",
    bullets: [
      "Domain-specific challenges",
      "AI-assisted solutions when applicable",
    ],
  },
  {
    icon: GraduationCap,
    step: "STEP 5",
    title: "25-Day Training",
    bullets: [
      "Remote work readiness program",
      "Communication & client service",
    ],
  },
  {
    icon: Handshake,
    step: "STEP 6",
    title: "Curated Client Submission",
    bullets: [
      "Top performers matched to clients",
      "Final selection & onboarding",
    ],
  },
];

export default function StaffAugProcessSlide() {
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

        {/* Title */}
        <div className="absolute left-[80px] top-[90px] right-[80px] z-10">
          <motion.h1
            {...fade(0)}
            className="font-heading"
            style={{ fontSize: 56, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.15 }}
          >
            Our <span style={{ color: "hsl(var(--pres-accent))" }}>Staff Augmentation</span> Process
          </motion.h1>
          <motion.p
            {...fade(1)}
            className="font-body"
            style={{ fontSize: 22, color: "hsl(var(--pres-text-muted))", marginTop: 10 }}
          >
            Only the Top 5% Make It Through — Here's How We Curate Elite Talent
          </motion.p>
        </div>

        {/* 3×2 Grid */}
        <div
          className="absolute z-10"
          style={{
            left: 80,
            right: 80,
            top: 220,
            bottom: 40,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                {...fade(i + 2)}
                className="rounded-2xl flex items-center"
                style={{
                  background: "hsl(var(--pres-bg-surface))",
                  border: "1.5px solid hsl(var(--pres-accent) / 0.19)",
                  padding: "28px 32px",
                  gap: 28,
                }}
              >
                {/* Left: Icon + Step badge */}
                <div className="flex flex-col items-center" style={{ gap: 10, flexShrink: 0, minWidth: 80 }}>
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{
                      width: 60,
                      height: 60,
                      background: "hsl(var(--pres-accent) / 0.09)",
                      border: "1.5px solid hsl(var(--pres-accent) / 0.25)",
                    }}
                  >
                    <Icon size={32} style={{ color: "hsl(var(--pres-accent))" }} />
                  </div>
                  <span
                    className="font-heading"
                    style={{ fontSize: 16, fontWeight: 700, color: "hsl(var(--pres-accent))", letterSpacing: 1.5 }}
                  >
                    {s.step}
                  </span>
                </div>

                {/* Vertical divider */}
                <div style={{ width: 2, alignSelf: "stretch", background: "hsl(var(--pres-accent) / 0.15)", borderRadius: 2 }} />

                {/* Right: Title + Bullets */}
                <div className="flex flex-col justify-center" style={{ gap: 10, flex: 1 }}>
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: "hsl(var(--pres-text))",
                      lineHeight: 1.2,
                    }}
                  >
                    {s.title}
                  </h3>
                  <div className="flex flex-col" style={{ gap: 8 }}>
                    {s.bullets.map((b, bi) => (
                      <div key={bi} className="flex" style={{ gap: 10 }}>
                        <span style={{ color: "hsl(var(--pres-accent))", fontSize: 22, lineHeight: "28px", flexShrink: 0 }}>•</span>
                        <span
                          className="font-body"
                          style={{ fontSize: 22, color: "hsl(var(--pres-text-muted))", lineHeight: 1.4 }}
                        >
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step number watermark */}
                <span
                  className="font-heading"
                  style={{
                    fontSize: 100,
                    fontWeight: 800,
                    color: "hsl(var(--pres-accent) / 0.03)",
                    position: "absolute",
                    right: 20,
                    bottom: 0,
                    lineHeight: 1,
                    pointerEvents: "none",
                  }}
                >
                  {i + 1}
                </span>
              </motion.div>
            );
          })}
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
