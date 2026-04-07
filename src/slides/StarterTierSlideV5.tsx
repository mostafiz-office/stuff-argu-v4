import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Zap, Clock, UserCheck, GitBranch, Headphones, Crown, Shield, CheckCircle } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const timeline = [
  { icon: Clock, time: "20 min", label: "Matched & onboarded", desc: "Developer assigned to your project" },
  { icon: UserCheck, time: "Day 1", label: "Shipping code", desc: "Productive from the first standup" },
  { icon: GitBranch, time: "Week 1", label: "Full sprint velocity", desc: "Embedded in your workflow & tools" },
  { icon: Headphones, time: "Ongoing", label: "Daily communication", desc: "Standups, Slack, progress reports" },
];

const valuePoints = [
  "160 dedicated hours per month",
  "Tech-stack specific developer",
  "Senior lead guiding every task",
  "Weekly progress reports",
  "Full sprint participation",
  "Architecture guidance included",
];

export default function StarterTierSlideV5() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <div
          className="absolute z-[1]"
          style={{
            left: "60%",
            top: "45%",
            width: 800,
            height: 600,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, hsl(142 71% 45% / 0.06) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        {/* Header */}
        <div className="absolute left-[80px] right-[80px] top-[70px] z-10">
          <motion.div {...fade(0)} className="flex items-center gap-3 mb-3">
            <div
              className="flex items-center justify-center rounded-xl"
              style={{
                width: 44,
                height: 44,
                background: "hsl(142 71% 45% / 0.12)",
                border: "1px solid hsl(142 71% 45% / 0.25)",
              }}
            >
              <Zap size={22} style={{ color: "hsl(142 71% 45%)" }} />
            </div>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "hsl(142 71% 45%)",
              }}
            >
              Great News for Startups
            </span>
          </motion.div>
          <motion.h1
            {...fade(1)}
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "hsl(var(--pres-text))",
            }}
          >
            Your Team, <span style={{ color: "hsl(var(--pres-accent))" }}>Day One</span>
          </motion.h1>
          <motion.p
            {...fade(2)}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 19,
              color: "hsl(var(--pres-text-muted))",
              marginTop: 8,
              maxWidth: 650,
            }}
          >
            No 3-month hiring cycle. No onboarding headaches. A dedicated developer shipping code from the first morning.
          </motion.p>
        </div>

        {/* Content: Left timeline + Right value card */}
        <div className="absolute left-[80px] right-[80px] top-[250px] bottom-[50px] z-10 flex gap-7">
          {/* LEFT — Timeline */}
          <div className="flex flex-col gap-4 flex-1 justify-between">
            {timeline.map((step, i) => (
              <motion.div
                key={step.label}
                {...fade(i + 3)}
                className="rounded-xl flex items-center gap-5 flex-1"
                style={{
                  background: "hsl(var(--pres-bg-surface))",
                  border: "1px solid hsl(var(--pres-accent) / 0.08)",
                  padding: "18px 22px",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{
                    width: 52,
                    height: 52,
                    background: i === 0
                      ? "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.7))"
                      : "hsl(var(--pres-accent) / 0.1)",
                  }}
                >
                  <step.icon
                    size={24}
                    style={{ color: i === 0 ? "hsl(var(--pres-bg))" : "hsl(var(--pres-accent))" }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="rounded-full px-3 py-0.5"
                      style={{
                        fontFamily: "'Ubuntu', sans-serif",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "hsl(var(--pres-accent))",
                        background: "hsl(var(--pres-accent) / 0.1)",
                      }}
                    >
                      {step.time}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Ubuntu', sans-serif",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "hsl(var(--pres-text))",
                      }}
                    >
                      {step.label}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 15,
                      color: "hsl(var(--pres-text-muted))",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Value + Price */}
          <motion.div
            {...fade(4)}
            className="flex flex-col justify-between"
            style={{ width: 380, flexShrink: 0 }}
          >
            {/* What you get */}
            <div
              className="rounded-2xl"
              style={{
                background: "hsl(var(--pres-bg-surface))",
                border: "1.5px solid hsl(var(--pres-accent) / 0.2)",
                padding: "22px 22px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "hsl(var(--pres-accent))",
                  marginBottom: 14,
                }}
              >
                Everything Included
              </p>
              <div className="space-y-3">
                {valuePoints.map((vp, i) => (
                  <motion.div key={vp} {...fade(5 + i)} className="flex items-center gap-2.5">
                    <CheckCircle size={16} style={{ color: "hsl(142 71% 45%)", flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 15,
                        color: "hsl(var(--pres-text))",
                      }}
                    >
                      {vp}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Price */}
            <div
              className="rounded-2xl mt-4"
              style={{
                background: "linear-gradient(160deg, hsl(var(--pres-accent) / 0.12), hsl(var(--pres-bg-surface)))",
                border: "2px solid hsl(var(--pres-accent) / 0.3)",
                padding: "20px 22px",
                textAlign: "center",
              }}
            >
              <div className="flex items-baseline justify-center gap-2">
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 48,
                    fontWeight: 700,
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  $1,900
                </span>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: "hsl(var(--pres-text-dim))" }}>
                  /mo
                </span>
              </div>
            </div>

            {/* Bonus */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="rounded-xl mt-4 flex items-center gap-3"
              style={{
                background: "hsl(45 100% 50% / 0.08)",
                border: "1.5px solid hsl(45 100% 50% / 0.3)",
                padding: "14px 16px",
              }}
            >
              <Crown size={20} style={{ color: "hsl(45 100% 50%)" }} />
              <div>
                <p
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "hsl(var(--pres-text))",
                  }}
                >
                  + $50K/mo Expert Bonus
                </p>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    color: "hsl(var(--pres-text-muted))",
                  }}
                >
                  Alim Ul Karim's oversight — free
                </p>
              </div>
              <Shield size={16} style={{ color: "hsl(142 71% 45%)", marginLeft: "auto" }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
