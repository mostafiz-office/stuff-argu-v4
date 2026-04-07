import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import HoverVideoPreview from "@/components/presentation/HoverVideoPreview";
import { motion } from "framer-motion";
import { CheckCircle, Crown, Shield, Clock, DollarSign, ArrowRight, Flame } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const valueStack = [
  { label: "Full-time developer (160h/mo)", worth: "$4,800" },
  { label: "Senior lead task guidance", worth: "$3,200" },
  { label: "Daily standups & Slack access", worth: "$1,500" },
  { label: "Weekly progress reports", worth: "$800" },
  { label: "Tech-stack specific matching", worth: "$1,200" },
];

const bonusValue = {
  label: "Alim Ul Karim — Chief Engineer Oversight",
  sublabel: "80 hrs/mo · Architecture · Code Reviews · Strategy",
  worth: "$50,000",
};

const trustSignals = [
  { icon: Shield, text: "Cancel anytime — zero risk" },
  { icon: Clock, text: "Start in as fast as 20 minutes" },
  { icon: CheckCircle, text: "7-stage vetting — top 5% engineers" },
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
            left: "50%",
            top: "55%",
            width: 900,
            height: 700,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.08) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        {/* Headline */}
        <div className="absolute left-[230px] right-[80px] top-[24px] z-10">
          <motion.h1
            {...fade(0)}
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 32,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "hsl(var(--pres-text))" }}>You Pay </span>
            <span style={{ color: "hsl(var(--pres-accent))" }}>$1,900</span>
            <span style={{ color: "hsl(var(--pres-text))" }}> — You Get </span>
            <span style={{ color: "hsl(142 71% 45%)" }}>$61,500</span>
            <span style={{ color: "hsl(var(--pres-text-dim))", fontSize: 20 }}> in value</span>
          </motion.h1>
        </div>

        {/* Three-column layout */}
        <div className="absolute left-[80px] right-[80px] top-[72px] bottom-[20px] flex gap-5 z-10 items-stretch">

          {/* LEFT — Value Stack */}
          <HoverVideoPreview youtubeId="uveR9C5CgSY" position="right">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-2xl flex flex-col relative overflow-hidden h-full"
              style={{
                width: 440,
                flexShrink: 0,
                background: "hsl(var(--pres-bg-surface))",
                border: "1.5px solid hsl(var(--pres-accent) / 0.3)",
                padding: "18px 20px",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <DollarSign size={16} style={{ color: "hsl(var(--pres-accent))" }} />
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "hsl(var(--pres-accent))",
                    }}
                  >
                    What's Included
                  </span>
                </div>
                <div
                  className="rounded-full px-3 py-1"
                  style={{
                    background: "hsl(var(--pres-accent))",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "hsl(var(--pres-bg))",
                  }}
                >
                  TIER 1 · STARTER
                </div>
              </div>

              {/* Value items */}
              <div className="flex flex-col gap-2 flex-1">
                {valueStack.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                    className="flex items-center justify-between rounded-xl px-4 py-2.5"
                    style={{
                      background: "hsl(var(--pres-accent) / 0.05)",
                      border: "1px solid hsl(var(--pres-accent) / 0.1)",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle size={15} style={{ color: "hsl(142 71% 45%)", flexShrink: 0 }} />
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 13,
                          color: "hsl(var(--pres-text))",
                          fontWeight: 500,
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Ubuntu', sans-serif",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "hsl(var(--pres-text-muted))",
                      }}
                    >
                      {item.worth}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Subtotal line */}
              <div
                className="flex items-center justify-between mt-3 pt-3"
                style={{ borderTop: "1px solid hsl(var(--pres-accent) / 0.15)" }}
              >
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: "hsl(var(--pres-text-dim))" }}>
                  Subtotal Value
                </span>
                <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 18, fontWeight: 700, color: "hsl(var(--pres-text))" }}>
                  $11,500<span style={{ fontSize: 12, color: "hsl(var(--pres-text-dim))" }}>/mo</span>
                </span>
              </div>

              {/* BONUS — Alim block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="mt-3 rounded-xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, hsl(45 100% 50% / 0.12), hsl(var(--pres-accent) / 0.08))",
                  border: "2px solid hsl(45 100% 50% / 0.4)",
                  padding: "12px 14px",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Crown size={14} style={{ color: "hsl(45 100% 50%)" }} />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(45 100% 50%)" }}>
                    🎁 BONUS — FREE
                  </span>
                </div>
                <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 15, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.2 }}>
                  {bonusValue.label}
                </p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: "hsl(var(--pres-text-muted))", marginTop: 2 }}>
                  {bonusValue.sublabel}
                </p>
                <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 20, fontWeight: 700, color: "hsl(45 100% 50%)" }}>
                  {bonusValue.worth}<span style={{ fontSize: 12, color: "hsl(var(--pres-text-dim))" }}>/mo value</span>
                </span>
              </motion.div>
            </motion.div>
          </HoverVideoPreview>

          {/* MIDDLE — Price + Savings */}
          <motion.div
            {...fade(2)}
            className="flex flex-col gap-4 flex-1"
          >
            {/* Total value card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 120, damping: 14 }}
              className="rounded-2xl relative overflow-hidden flex-1 flex flex-col justify-end"
              style={{
                background: "linear-gradient(160deg, hsl(var(--pres-accent) / 0.12), hsl(var(--pres-bg-surface)))",
                border: "2px solid hsl(var(--pres-accent) / 0.3)",
                padding: "28px 28px",
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 20% 30%, hsl(var(--pres-accent) / 0.08), transparent 50%)",
                }}
              />

              <div className="flex items-center gap-2 mb-4">
                <Flame size={18} style={{ color: "hsl(var(--pres-accent))" }} />
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--pres-accent))" }}>
                  Total Value
                </span>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 36,
                    fontWeight: 700,
                    color: "hsl(var(--pres-text-dim))",
                    textDecoration: "line-through",
                    textDecorationColor: "hsl(0 70% 55%)",
                    textDecorationThickness: 3,
                  }}
                >
                  $61,500
                </span>
                <ArrowRight size={22} style={{ color: "hsl(var(--pres-accent))" }} />
                <div>
                  <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 56, fontWeight: 700, color: "hsl(var(--pres-accent))" }}>
                    $1,900
                  </span>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: "hsl(var(--pres-text-dim))" }}>
                    /mo
                  </span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2"
                style={{
                  background: "linear-gradient(135deg, hsl(142 71% 45% / 0.2), hsl(142 71% 45% / 0.08))",
                  border: "1.5px solid hsl(142 71% 45% / 0.4)",
                  width: "fit-content",
                }}
              >
                <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 22, fontWeight: 700, color: "hsl(142 71% 45%)" }}>
                  You Save 97%
                </span>
              </motion.div>

              {/* Hourly breakdown */}
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 16,
                  color: "hsl(var(--pres-text-muted))",
                  marginTop: 20,
                  lineHeight: 1.6,
                }}
              >
                That's{" "}
                <strong style={{ color: "hsl(var(--pres-accent))", fontSize: 18 }}>$11.87/hour</strong>
                {" "}for a full-time developer +{" "}
                <strong style={{ color: "hsl(45 100% 50%)" }}>$50K/mo expert oversight FREE</strong>
              </p>
            </motion.div>

            {/* Trust signals */}
            <div
              className="rounded-2xl flex flex-col justify-center gap-4"
              style={{
                background: "hsl(var(--pres-bg-surface))",
                border: "1px solid hsl(var(--pres-accent) / 0.1)",
                padding: "22px 24px",
              }}
            >
              {trustSignals.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.12, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="flex items-center justify-center rounded-lg"
                    style={{
                      width: 36,
                      height: 36,
                      background: "hsl(var(--pres-accent) / 0.1)",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={18} style={{ color: "hsl(var(--pres-accent))" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 17,
                      fontWeight: 500,
                      color: "hsl(var(--pres-text))",
                    }}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
