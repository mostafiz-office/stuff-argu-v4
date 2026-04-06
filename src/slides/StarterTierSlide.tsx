import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import HoverVideoPreview from "@/components/presentation/HoverVideoPreview";
import RocketAnimation from "@/components/presentation/RocketAnimation";
import { motion } from "framer-motion";
import { Rocket, CheckCircle, Star, ArrowRight, Plus, Crown, Lightbulb, Zap, Target, Wallet, TrendingDown } from "lucide-react";

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
  { text: "Budget-conscious teams needing quality", icon: Wallet },
];

export default function StarterTierSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Ambient glow */}
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

        {/* Title */}
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
          Start <span style={{ color: "hsl(var(--pres-accent))" }}>Smart</span>, Scale Later
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
          The perfect entry point for founders who need quality engineering without enterprise budgets.
        </motion.p>

        {/* Two-column layout */}
        <div className="absolute left-[80px] right-[80px] top-[200px] bottom-[60px] flex gap-8 z-10">

          {/* LEFT — Pricing Card with hover video */}
          <HoverVideoPreview youtubeId="uveR9C5CgSY" position="right">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-2xl flex flex-col relative overflow-hidden h-full"
              style={{
                width: 560,
                flexShrink: 0,
                background: "linear-gradient(180deg, hsl(var(--pres-accent) / 0.1) 0%, hsl(var(--pres-bg-surface)) 100%)",
                border: "2px solid hsl(var(--pres-accent))",
                padding: "28px 24px",
              }}
            >
              {/* Badge */}
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
                <motion.span
                  animate={{
                    y: [0, -3, 0],
                    x: [0, 1, 0],
                    rotate: [-10, 0, 8, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex"
                >
                  <Rocket size={14} />
                </motion.span>
                TIER 1
              </div>

              {/* Tier label */}
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
                Tier 1 — Starter
              </p>

              {/* Experience */}
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

              {/* Price */}
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

              {/* Hours badge */}
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

              {/* Rocket animation */}
              <RocketAnimation intensity={1} />

              {/* Features */}
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
                      style={{
                        color: "hsl(var(--pres-accent))",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
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

              {/* Alim add-on */}
              <div
                className="mt-3 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--pres-accent) / 0.08), hsl(var(--pres-accent) / 0.03))",
                  border: "1px solid hsl(var(--pres-accent) / 0.2)",
                  padding: "10px 14px",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Plus size={14} style={{ color: "hsl(var(--pres-accent))" }} />
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "hsl(var(--pres-accent))",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Premium Add-on
                  </span>
                  <Crown size={12} style={{ color: "hsl(var(--pres-accent))" }} />
                </div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
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
                    fontSize: 12,
                    color: "hsl(var(--pres-text-muted))",
                    lineHeight: 1.4,
                    marginTop: 2,
                  }}
                >
                  4h/day dedicated · <strong style={{ color: "hsl(var(--pres-accent))" }}>$625/hr</strong> · $50,000/mo
                </p>
              </div>
            </motion.div>
          </HoverVideoPreview>

          {/* RIGHT — Redesigned */}
          <motion.div
            {...fade(2)}
            className="flex flex-col justify-center gap-5 flex-1"
          >
            {/* Big savings stat */}
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
                <TrendingDown size={18} style={{ color: "hsl(var(--pres-accent))" }} />
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
                  vs US Market Rate
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
                  76%
                </span>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "hsl(var(--pres-text))",
                  }}
                >
                  Savings
                </span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 15,
                    color: "hsl(var(--pres-text-dim))",
                    textDecoration: "line-through",
                  }}
                >
                  $6,000–$8,000/mo
                </span>
                <ArrowRight size={16} style={{ color: "hsl(var(--pres-accent))" }} />
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  $1,900/mo
                </span>
              </div>
            </motion.div>

            {/* Built for Founders text */}
            <div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  color: "hsl(var(--pres-text-muted))",
                  lineHeight: 1.7,
                }}
              >
                Tight on budget but ready to build?{" "}
                <strong style={{ color: "hsl(var(--pres-text))" }}>
                  Get a dedicated developer
                </strong>{" "}
                at a price that won't break the bank — then scale when you're ready.
              </p>
            </div>

            {/* Ideal For with icons */}
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
