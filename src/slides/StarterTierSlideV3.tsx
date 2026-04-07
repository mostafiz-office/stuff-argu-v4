import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import HoverVideoPreview from "@/components/presentation/HoverVideoPreview";
import RocketAnimation from "@/components/presentation/RocketAnimation";
import { motion } from "framer-motion";
import { Rocket, CheckCircle, Star, Crown, Lightbulb, Zap, Target, Award } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const features = [
  "3+ yrs coding, 1+ yr industry exp",
  "160 dedicated hours/month",
  "Tech-stack specific developer",
  "Task guidance from senior lead",
  "Daily standups & Slack access",
  "Weekly progress reports",
];

const idealFor = [
  { text: "Pre-seed & seed-stage startups", icon: Lightbulb },
  { text: "Bootstrapped founders shipping fast", icon: Zap },
  { text: "MVPs & well-defined sprints", icon: Target },
  { text: "Teams needing senior-led execution", icon: Award },
];

export default function StarterTierSlideV3() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Rocket animation — slide-level overlay */}
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
          <RocketAnimation intensity={1} profile="compact" flyingLabel="Growth booster" />
        </div>

        <div
          className="absolute z-[1]"
          style={{
            left: "35%",
            top: "50%",
            width: 800,
            height: 600,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        <motion.h1
          {...fade(0)}
          className="absolute left-[80px] top-[85px] z-10"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 48,
            fontWeight: 700,
            color: "hsl(var(--pres-text))",
          }}
        >
          Good News for <span style={{ color: "hsl(var(--pres-accent))" }}>Startups</span>
        </motion.h1>

        <motion.p
          {...fade(1)}
          className="absolute left-[80px] top-[148px] z-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 17,
            color: "hsl(var(--pres-text-muted))",
            maxWidth: 700,
          }}
        >
          The right first engineering hire for founders who need real execution, reliable skill, and momentum from day one.
        </motion.p>


        <div className="absolute left-[80px] right-[80px] top-[200px] bottom-[60px] flex gap-8 z-10">
          <HoverVideoPreview youtubeId="uveR9C5CgSY" position="right">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-2xl flex flex-col relative h-full"
              style={{
                width: 560,
                flexShrink: 0,
                background: "linear-gradient(180deg, hsl(var(--pres-accent) / 0.1) 0%, hsl(var(--pres-bg-surface)) 100%)",
                border: "2px solid hsl(var(--pres-accent))",
                padding: "28px 24px",
              }}
            >
              <div
                className="absolute top-0 right-0 flex items-center gap-2 px-3 py-1.5 rounded-bl-xl"
                style={{
                  background: "hsl(var(--pres-accent))",
                  color: "hsl(var(--pres-bg))",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                STARTER
              </div>

              

              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "hsl(var(--pres-text-dim))",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Tier 1
              </p>

              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  color: "hsl(var(--pres-accent))",
                  fontWeight: 500,
                  marginTop: 6,
                }}
              >
                3+ Years Coding · 1+ Year Industry
              </p>

              <div className="mt-3">
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 48,
                    fontWeight: 700,
                    color: "hsl(var(--pres-text))",
                  }}
                >
                  $1,900
                </span>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 20,
                    color: "hsl(var(--pres-text-dim))",
                  }}
                >
                  /mo
                </span>
              </div>

              <div
                className="mt-2 inline-flex items-center rounded-lg px-3 py-1.5"
                style={{
                  background: "hsl(var(--pres-accent) / 0.08)",
                  border: "1px solid hsl(var(--pres-accent) / 0.15)",
                  width: "fit-content",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  160 hrs/month
                </span>
              </div>


              <div className="mt-3 space-y-3 flex-1">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle
                      size={18}
                      style={{ color: "hsl(var(--pres-accent))", flexShrink: 0, marginTop: 2 }}
                    />
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 18,
                        color: "hsl(var(--pres-text-muted))",
                        lineHeight: 1.4,
                      }}
                    >
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div
                className="mt-3 rounded-2xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, hsl(45 90% 55% / 0.15), hsl(45 90% 55% / 0.05))",
                  border: "2px solid hsl(45 90% 55% / 0.5)",
                  padding: "20px 22px",
                  boxShadow: "0 0 30px hsl(45 90% 55% / 0.1)",
                }}
              >
                <div
                  className="absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 90% 50%, hsl(45 90% 55% / 0.12), transparent 70%)",
                  }}
                />
                <div className="flex items-center gap-2 mb-2">
                  <Crown size={20} style={{ color: "hsl(45 90% 55%)" }} />
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "hsl(45 90% 55%)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Want Alim's Direct Support?
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 17,
                    fontWeight: 600,
                    color: "hsl(var(--pres-text))",
                    lineHeight: 1.4,
                  }}
                >
                  Alim Ul Karim — Chief Software Engineer
                </p>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    color: "hsl(var(--pres-text-muted))",
                    lineHeight: 1.4,
                    marginTop: 4,
                  }}
                >
                  4h/day · <strong style={{ color: "hsl(var(--pres-accent))", fontSize: 16 }}>$625/hr</strong> · <strong style={{ color: "hsl(45 90% 55%)", fontSize: 16 }}>$50,000/mo</strong> value
                </p>
                <div
                  className="mt-3 flex items-center gap-2 rounded-lg px-4 py-2"
                  style={{
                    background: "hsl(45 90% 55% / 0.15)",
                    border: "1.5px solid hsl(45 90% 55% / 0.35)",
                    width: "fit-content",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "hsl(45 90% 55%)",
                    }}
                  >
                    ↑ Upgrade to Tier 2 or 3 to unlock
                  </span>
                </div>
              </div>
            </motion.div>
          </HoverVideoPreview>

          <motion.div {...fade(2)} className="flex flex-col justify-center gap-5 flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 150, damping: 12 }}
              className="rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(var(--pres-accent) / 0.12), hsl(var(--pres-bg-surface)))",
                border: "1.5px solid hsl(var(--pres-accent) / 0.25)",
                padding: "22px 26px",
              }}
            >
              <div
                className="absolute top-0 right-0 bottom-0 w-1/3 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 80% 50%, hsl(var(--pres-accent) / 0.08), transparent 70%)",
                }}
              />
              <div className="flex items-center gap-2 mb-2">
                <Star size={18} style={{ color: "hsl(var(--pres-accent))" }} />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  Value Delivered
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 44,
                    fontWeight: 700,
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  160h
                </span>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "hsl(var(--pres-text))",
                  }}
                >
                  Focused Output
                </span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 15,
                    color: "hsl(var(--pres-text-dim))",
                  }}
                >
                  Dedicated developer + senior-led guidance built for reliable execution
                </span>
              </div>
            </motion.div>

            <div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  color: "hsl(var(--pres-text-muted))",
                  lineHeight: 1.7,
                }}
              >
                You are not just hiring for hours. You are buying <strong style={{ color: "hsl(var(--pres-text))" }}>consistent execution</strong>, <strong style={{ color: "hsl(var(--pres-text))" }}>real product momentum</strong>, and a developer with enough skill to contribute from day one.
              </p>
            </div>

            <div
              className="rounded-2xl px-6 py-5"
              style={{
                background: "hsl(var(--pres-bg-surface) / 0.7)",
                border: "1px solid hsl(var(--pres-accent) / 0.15)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "hsl(var(--pres-accent))",
                  marginBottom: 14,
                }}
              >
                Ideal For
              </p>
              <div className="space-y-4">
                {idealFor.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="flex items-center justify-center rounded-lg"
                        style={{
                          width: 30,
                          height: 30,
                          background: "hsl(var(--pres-accent) / 0.1)",
                          border: "1px solid hsl(var(--pres-accent) / 0.2)",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={15} style={{ color: "hsl(var(--pres-accent))" }} />
                      </div>
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 18,
                          color: "hsl(var(--pres-text-muted))",
                        }}
                      >
                        {item.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
