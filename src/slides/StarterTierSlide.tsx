import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import HoverVideoPreview from "@/components/presentation/HoverVideoPreview";
import RocketAnimation from "@/components/presentation/RocketAnimation";
import { motion } from "framer-motion";
import { Rocket, CheckCircle, Star, ArrowRight, Plus, Crown } from "lucide-react";

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
  "Pre-seed & seed-stage startups",
  "Bootstrapped founders shipping fast",
  "MVPs & well-defined sprints",
  "Budget-conscious teams needing quality",
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
            fontSize: 58,
            fontWeight: 700,
            color: "hsl(var(--pres-text))",
          }}
        >
          Start <span style={{ color: "hsl(var(--pres-accent))" }}>Smart</span>, Scale Later
        </motion.h1>

        <motion.p
          {...fade(1)}
          className="absolute left-[80px] top-[162px] z-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 20,
            color: "hsl(var(--pres-text-muted))",
            maxWidth: 700,
          }}
        >
          The perfect entry point for founders who need quality engineering without enterprise budgets.
        </motion.p>

        {/* Two-column layout */}
        <div className="absolute left-[80px] right-[80px] top-[230px] bottom-[80px] flex gap-10 z-10">

          {/* LEFT — Pricing Card with hover video */}
          <HoverVideoPreview youtubeId="uveR9C5CgSY" position="right">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-2xl flex flex-col relative overflow-hidden h-full"
              style={{
                width: 620,
                flexShrink: 0,
                background: "linear-gradient(180deg, hsl(var(--pres-accent) / 0.1) 0%, hsl(var(--pres-bg-surface)) 100%)",
                border: "2px solid hsl(var(--pres-accent))",
                padding: "40px 32px",
              }}
            >
              {/* Badge */}
              <div
                className="absolute top-0 right-0 flex items-center gap-2 px-4 py-2 rounded-bl-xl"
                style={{
                  background: "hsl(var(--pres-accent))",
                  color: "hsl(var(--pres-bg))",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                <Rocket size={18} /> STARTER
              </div>

              {/* Tier label */}
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "hsl(var(--pres-text-dim))",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Starter
              </p>

              {/* Experience */}
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 24,
                  color: "hsl(var(--pres-accent))",
                  fontWeight: 500,
                  marginTop: 8,
                }}
              >
                3+ Years Coding · 1+ Year Industry
              </p>

              {/* Price */}
              <div className="mt-5">
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 64,
                    fontWeight: 700,
                    color: "hsl(var(--pres-text))",
                  }}
                >
                  $1,900
                </span>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 28,
                    color: "hsl(var(--pres-text-dim))",
                  }}
                >
                  /mo
                </span>
              </div>

              {/* Hours badge */}
              <div
                className="mt-3 inline-flex items-center rounded-lg px-4 py-2"
                style={{
                  background: "hsl(var(--pres-accent) / 0.08)",
                  border: "1px solid hsl(var(--pres-accent) / 0.15)",
                  width: "fit-content",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 22,
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
              <div className="mt-4 space-y-4 flex-1">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={26}
                      style={{
                        color: "hsl(var(--pres-accent))",
                        flexShrink: 0,
                        marginTop: 3,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 26,
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
                className="mt-4 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--pres-accent) / 0.08), hsl(var(--pres-accent) / 0.03))",
                  border: "1px solid hsl(var(--pres-accent) / 0.2)",
                  padding: "14px 16px",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Plus size={16} style={{ color: "hsl(var(--pres-accent))" }} />
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "hsl(var(--pres-accent))",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Premium Add-on
                  </span>
                  <Crown size={14} style={{ color: "hsl(var(--pres-accent))" }} />
                </div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
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
                  4h/day dedicated · <strong style={{ color: "hsl(var(--pres-accent))" }}>$625/hr</strong> · $50,000/mo
                </p>
              </div>
            </motion.div>
          </HoverVideoPreview>

          {/* RIGHT — Explanation */}
          <motion.div
            {...fade(2)}
            className="flex flex-col justify-center gap-8 flex-1"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: 44,
                    height: 44,
                    background: "hsl(var(--pres-accent) / 0.12)",
                    border: "1px solid hsl(var(--pres-accent) / 0.25)",
                  }}
                >
                  <Star size={22} style={{ color: "hsl(var(--pres-accent))" }} />
                </div>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  Built for Founders
                </span>
              </div>

              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 19,
                  color: "hsl(var(--pres-text-muted))",
                  lineHeight: 1.7,
                  marginBottom: 8,
                }}
              >
                Tight on budget but ready to build?{" "}
                <strong style={{ color: "hsl(var(--pres-text))" }}>
                  Get a dedicated developer
                </strong>{" "}
                at a price that won't break the bank — then scale to higher tiers when you're ready.
              </p>
            </div>

            {/* Ideal For box */}
            <div
              className="rounded-2xl px-7 py-6"
              style={{
                background: "hsl(var(--pres-bg-surface) / 0.7)",
                border: "1px solid hsl(var(--pres-accent) / 0.15)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "hsl(var(--pres-accent))",
                  marginBottom: 16,
                }}
              >
                Ideal For
              </p>
              <div className="space-y-3.5">
                {idealFor.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <ArrowRight size={14} style={{ color: "hsl(var(--pres-accent))", flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 16,
                        color: "hsl(var(--pres-text-muted))",
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
