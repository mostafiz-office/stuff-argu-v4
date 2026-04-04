import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { MessageSquare, UserCheck, Rocket, HeartHandshake } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2 * i, duration: 0.7, ease: "easeOut" as const },
});

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    desc: "Share your requirements, tech stack, and team culture. We'll recommend the right tier.",
    time: "Day 1",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "7-Stage Vetting",
    desc: "We present candidates who passed our 7-stage assessment. You interview & select.",
    time: "As fast as 20 min",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Onboarding",
    desc: "Your new team member joins your tools, attends standups, and starts contributing.",
    time: "Day 6–14",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Ongoing Support",
    desc: "Continuous performance monitoring, monthly check-ins, and scaling as needed.",
    time: "Ongoing",
  },
];

export default function PricingHowItWorksSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Crosshatch */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.03) 28px, hsl(var(--pres-accent) / 0.03) 29px)`,
          }}
        />

        <motion.h1
          {...fade(0)}
          className="absolute left-[80px] top-[90px] z-10"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 68,
            fontWeight: 700,
            color: "hsl(var(--pres-text))",
          }}
        >
          How It <span style={{ color: "hsl(var(--pres-accent))" }}>Works</span>
        </motion.h1>

        <motion.p
          {...fade(1)}
          className="absolute left-[80px] top-[178px] z-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 22,
            color: "hsl(var(--pres-text-muted))",
          }}
        >
          From first call to productive developer — in under 2 weeks.
        </motion.p>

        {/* Timeline connector line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="absolute z-10"
          style={{
            left: 140,
            right: 140,
            top: 390,
            height: 3,
            background: "linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.2))",
            transformOrigin: "left center",
            borderRadius: 2,
          }}
        />

        {/* Step cards */}
        <div className="absolute left-[80px] right-[80px] top-[280px] bottom-[60px] grid grid-cols-4 gap-8 z-10">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.18, duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div
                  className="flex items-center justify-center rounded-full relative z-20"
                  style={{
                    width: 80, height: 80,
                    background: "hsl(var(--pres-bg-surface))",
                    border: "3px solid hsl(var(--pres-accent))",
                    boxShadow: "0 0 24px hsl(var(--pres-accent) / 0.2)",
                    marginTop: 70,
                  }}
                >
                  <Icon size={32} style={{ color: "hsl(var(--pres-accent))" }} />
                </div>

                {/* Step number */}
                <p
                  className="mt-6"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "hsl(var(--pres-accent))",
                    letterSpacing: "0.15em",
                  }}
                >
                  STEP {s.step}
                </p>

                {/* Title */}
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: "hsl(var(--pres-text))",
                  }}
                >
                  {s.title}
                </p>

                {/* Description */}
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 17,
                    color: "hsl(var(--pres-text-muted))",
                    lineHeight: 1.5,
                  }}
                >
                  {s.desc}
                </p>

                {/* Time badge */}
                <div
                  className="mt-4 rounded-full px-4 py-1.5"
                  style={{
                    background: "hsl(var(--pres-accent) / 0.1)",
                    border: "1px solid hsl(var(--pres-accent) / 0.2)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "hsl(var(--pres-accent))",
                    }}
                  >
                    {s.time}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ScaledSlide>
  );
}
