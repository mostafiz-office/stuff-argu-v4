import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Calendar, Users, Clock, ClipboardList, RefreshCw, Target, BookOpen } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const },
});

const steps = [
  {
    icon: Calendar,
    title: "Weekly Kick-off Call",
    desc: "Team sync to plan the week's priorities and goals.",
    bg: "hsl(45, 100%, 85%)",
    iconColor: "hsl(30, 80%, 35%)",
    arrowColor: "hsl(30, 100%, 55%)",
    position: "below" as const,
  },
  {
    icon: Users,
    title: "Daily Stand-Up",
    desc: "15–20 min meeting to align tasks, remove blockers, and share progress.",
    bg: "hsl(25, 90%, 78%)",
    iconColor: "hsl(20, 70%, 30%)",
    arrowColor: "hsl(25, 100%, 55%)",
    position: "above" as const,
  },
  {
    icon: Clock,
    title: "4-Hour Status Updates",
    desc: "Submit short text updates every 4 hours to track micro-progress.",
    bg: "hsl(0, 70%, 85%)",
    iconColor: "hsl(0, 60%, 40%)",
    arrowColor: "hsl(0, 70%, 55%)",
    position: "below" as const,
  },
  {
    icon: ClipboardList,
    title: "Post Stand-Up Summary",
    desc: "Brief recap of completed tasks and key achievements.",
    bg: "hsl(210, 60%, 85%)",
    iconColor: "hsl(210, 60%, 40%)",
    arrowColor: "hsl(210, 70%, 55%)",
    position: "above" as const,
  },
  {
    icon: RefreshCw,
    title: "Weekly Retrospective",
    desc: "Discuss what worked, what didn't, and how to improve.",
    bg: "hsl(270, 50%, 85%)",
    iconColor: "hsl(270, 50%, 40%)",
    arrowColor: "hsl(270, 60%, 55%)",
    position: "below" as const,
  },
  {
    icon: Target,
    title: "Performance & Goal Tracking",
    desc: "Support team members and ensure consistent progress toward goals.",
    bg: "hsl(0, 0%, 30%)",
    iconColor: "hsl(0, 70%, 55%)",
    arrowColor: "hsl(0, 0%, 40%)",
    position: "above" as const,
  },
  {
    icon: BookOpen,
    title: "Policy & Frameworks",
    desc: "Clear policies and workflows for alignment and long-term growth.",
    bg: "hsl(0, 0%, 25%)",
    iconColor: "hsl(120, 40%, 45%)",
    arrowColor: "hsl(0, 0%, 40%)",
    position: "below" as const,
  },
];

const CARD_W = 200;
const GAP = 30;
const TOTAL_W = steps.length * CARD_W + (steps.length - 1) * GAP;
const START_X = (1920 - TOTAL_W) / 2;
const CENTER_Y = 520;
const CARD_H = 120;
const TEXT_OFFSET = 30;
const ARROW_LEN = 50;

export default function DailyWorkCultureSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <motion.h1
          {...fade(0)}
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 72,
            fontWeight: 700,
            fontStyle: "italic",
            color: "hsl(var(--pres-accent))",
            lineHeight: 1.1,
            position: "absolute",
            left: 80,
            top: 120,
            maxWidth: 900,
          }}
        >
          Our Daily Work Culture
        </motion.h1>
        <motion.p
          {...fade(1)}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 24,
            color: "hsl(var(--pres-text-muted))",
            position: "absolute",
            left: 80,
            top: 210,
          }}
        >
          Step-by-Step Process
        </motion.p>

        {/* Timeline row */}
        {steps.map((step, i) => {
          const x = START_X + i * (CARD_W + GAP);
          const isAbove = step.position === "above";
          const IconComp = step.icon;
          const isDark = i >= 5;

          return (
            <motion.g
              key={i}
              {...fade(i + 2)}
              style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080 }}
            >
              {/* Card */}
              <div
                style={{
                  position: "absolute",
                  left: x,
                  top: CENTER_Y - CARD_H / 2,
                  width: CARD_W,
                  height: CARD_H,
                  borderRadius: 16,
                  background: step.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconComp
                  size={48}
                  color={step.iconColor}
                  strokeWidth={1.8}
                />
              </div>

              {/* Arrow */}
              <div
                style={{
                  position: "absolute",
                  left: x + CARD_W / 2 - 1,
                  top: isAbove ? CENTER_Y - CARD_H / 2 - ARROW_LEN : CENTER_Y + CARD_H / 2,
                  width: 2,
                  height: ARROW_LEN,
                  background: step.arrowColor,
                }}
              />
              {/* Arrow head */}
              <div
                style={{
                  position: "absolute",
                  left: x + CARD_W / 2 - 6,
                  top: isAbove
                    ? CENTER_Y - CARD_H / 2 - ARROW_LEN - 4
                    : CENTER_Y + CARD_H / 2 + ARROW_LEN - 4,
                  width: 0,
                  height: 0,
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  ...(isAbove
                    ? { borderBottom: `10px solid ${step.arrowColor}` }
                    : { borderTop: `10px solid ${step.arrowColor}` }),
                }}
              />

              {/* Text block */}
              <div
                style={{
                  position: "absolute",
                  left: x - 10,
                  width: CARD_W + 20,
                  textAlign: "center",
                  ...(isAbove
                    ? { bottom: 1080 - (CENTER_Y - CARD_H / 2 - ARROW_LEN - TEXT_OFFSET), top: "auto" }
                    : { top: CENTER_Y + CARD_H / 2 + ARROW_LEN + TEXT_OFFSET }),
                }}
              >
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: isDark ? "hsl(var(--pres-text))" : "hsl(var(--pres-text))",
                    lineHeight: 1.3,
                    marginBottom: 6,
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    color: "hsl(var(--pres-text-muted))",
                    lineHeight: 1.5,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.g>
          );
        })}
      </div>
    </ScaledSlide>
  );
}
