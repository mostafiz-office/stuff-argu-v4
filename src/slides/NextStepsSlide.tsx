import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Phone, FileText, Users, Rocket } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const steps = [
  { num: "01", title: "Schedule a Discovery Call", desc: "Free 30-minute consultation to understand your needs and goals.", icon: Phone, link: "https://meet.rasia.pro/intro-call" },
  { num: "02", title: "Receive Custom Proposal", desc: "Detailed scope, timeline & pricing delivered within 48 hours.", icon: FileText },
  { num: "03", title: "Meet Your Team", desc: "Interview and select your dedicated engineers from our talent pool.", icon: Users },
  { num: "04", title: "Kick Off Sprint 1", desc: "Value delivery from week one. Real results, real fast.", icon: Rocket },
];

export default function NextStepsSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Ambient glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: "50%",
            top: "50%",
            width: 900,
            height: 600,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.05) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        {/* Left column — Title */}
        <div className="absolute left-[80px] top-[110px] z-10" style={{ maxWidth: 500 }}>
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
            Next{" "}
            <span style={{ color: "hsl(var(--pres-accent))" }}>Steps</span>
          </motion.h1>

          <motion.div {...fade(1)} className="accent-bar mt-5" style={{ width: 80 }} />

          <motion.p
            {...fade(1)}
            className="mt-5"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 20,
              color: "hsl(var(--pres-text-muted))",
              lineHeight: 1.6,
              maxWidth: 400,
            }}
          >
            From first call to first delivery in under two weeks.
          </motion.p>

          {/* Bottom timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 flex items-center gap-3"
          >
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex items-center gap-3">
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 28,
                    height: 28,
                    background: "hsl(var(--pres-accent) / 0.15)",
                    border: "1px solid hsl(var(--pres-accent) / 0.2)",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  {n}
                </span>
                {n < 4 && (
                  <div style={{ width: 24, height: 1, background: "hsl(var(--pres-accent) / 0.2)" }} />
                )}
              </div>
            ))}
            <span className="ml-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "hsl(var(--pres-text-dim))" }}>
              ~2 weeks to launch
            </span>
          </motion.div>
        </div>

        {/* Right column — Vertical Timeline */}
        <div
          className="absolute z-10"
          style={{ right: 80, top: 120, width: 820, bottom: 60 }}
        >
          <div className="relative h-full flex flex-col justify-center">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="absolute"
              style={{
                left: 25,
                top: 40,
                bottom: 40,
                width: 2,
                background: "linear-gradient(180deg, hsl(var(--pres-accent) / 0.4), hsl(var(--pres-accent) / 0.1))",
                transformOrigin: "top",
              }}
            />

            <div className="flex flex-col gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: "easeOut" }}
                    className="flex items-center gap-5 relative"
                    style={{ cursor: step.link ? "pointer" : "default" }}
                    onClick={step.link ? () => window.open(step.link, '_blank') : undefined}
                  >
                    {/* Timeline dot */}
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-full relative z-10"
                      style={{
                        width: 50,
                        height: 50,
                        background: "hsl(var(--pres-accent) / 0.12)",
                        border: "2px solid hsl(var(--pres-accent) / 0.4)",
                        boxShadow: "0 0 20px hsl(var(--pres-accent) / 0.15)",
                      }}
                    >
                      <Icon size={22} style={{ color: "hsl(var(--pres-accent))" }} />
                    </div>

                    {/* Content card */}
                    <div
                      className="flex-1 rounded-xl px-7 py-5"
                      style={{
                        background: "hsl(var(--pres-bg-surface))",
                        border: "1px solid hsl(var(--pres-accent) / 0.08)",
                        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "hsl(var(--pres-accent) / 0.25)";
                        e.currentTarget.style.boxShadow = "0 4px 20px hsl(var(--pres-accent) / 0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "hsl(var(--pres-accent) / 0.08)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          style={{
                            fontFamily: "'Ubuntu', sans-serif",
                            fontSize: 28,
                            fontWeight: 700,
                            color: "hsl(var(--pres-accent))",
                            opacity: 0.3,
                          }}
                        >
                          {step.num}
                        </span>
                        <h3
                          style={{
                            fontFamily: "'Ubuntu', sans-serif",
                            fontSize: 24,
                            fontWeight: 700,
                            color: "hsl(var(--pres-text))",
                          }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className="mt-2"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 16,
                          color: "hsl(var(--pres-text-dim))",
                          lineHeight: 1.5,
                          marginLeft: 52,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}
