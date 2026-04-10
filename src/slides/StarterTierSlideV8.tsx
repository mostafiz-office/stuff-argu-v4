import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import HoverVideoPreview from "@/components/presentation/HoverVideoPreview";
import RocketAnimation from "@/components/presentation/RocketAnimation";
import { motion } from "framer-motion";
import { CheckCircle, Crown, TrendingDown, DollarSign, ArrowRight, Calculator } from "lucide-react";

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

const costComparisons = [
  { label: "US Full-Time Dev", cost: "$8,000–$12,000/mo", saved: true },
  { label: "US Freelancer", cost: "$9,600/mo", detail: "($60/hr × 160h)", saved: true },
  { label: "Offshore Agency", cost: "$4,000–$6,000/mo", saved: true },
  { label: "Riseup-Asia Starter", cost: "$1,900/mo", saved: false, highlight: true },
];

export default function StarterTierSlideV8() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

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
          Do The <span style={{ color: "hsl(var(--pres-accent))" }}>Math</span>
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
          Same output. Fraction of the cost. Here's how Riseup-Asia stacks up against every alternative.
        </motion.p>

        <div className="absolute left-[80px] right-[80px] top-[224px] bottom-[60px] flex gap-8 z-10">
          {/* LEFT — Same pricing card */}
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
              <div className="absolute top-0 right-0 flex items-center gap-2 px-3 py-1.5 rounded-bl-xl" style={{ background: "hsl(var(--pres-accent))", color: "hsl(var(--pres-bg))", fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.05em" }}>
                STARTER
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, color: "hsl(var(--pres-text-dim))", letterSpacing: "0.12em", textTransform: "uppercase" }}>Tier 1</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: "hsl(var(--pres-accent))", fontWeight: 500, marginTop: 6 }}>3+ Years Coding · 1+ Year Industry</p>
              <div className="mt-3">
                <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 48, fontWeight: 700, color: "hsl(var(--pres-text))" }}>$1,900</span>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: "hsl(var(--pres-text-dim))" }}>/mo</span>
              </div>
              <div className="mt-2 inline-flex items-center rounded-lg px-3 py-1.5" style={{ background: "hsl(var(--pres-accent) / 0.08)", border: "1px solid hsl(var(--pres-accent) / 0.15)", width: "fit-content" }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, color: "hsl(var(--pres-accent))" }}>160 hrs/month</span>
              </div>
              <RocketAnimation intensity={1} profile="compact" flyingLabel="Growth booster" />
              <div className="mt-3 space-y-3 flex-1">
                {features.map((feature, i) => (
                  <motion.div key={feature} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }} className="flex items-start gap-2">
                    <CheckCircle size={18} style={{ color: "hsl(var(--pres-accent))", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: "hsl(var(--pres-text-muted))", lineHeight: 1.4 }}>{feature}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-3 rounded-2xl relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(45 90% 55% / 0.15), hsl(45 90% 55% / 0.05))", border: "2px solid hsl(45 90% 55% / 0.5)", padding: "20px 22px", boxShadow: "0 0 30px hsl(45 90% 55% / 0.1)" }}>
                <div className="absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none" style={{ background: "radial-gradient(circle at 90% 50%, hsl(45 90% 55% / 0.12), transparent 70%)" }} />
                <div className="flex items-center gap-2 mb-2">
                  <Crown size={20} style={{ color: "hsl(45 90% 55%)" }} />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, color: "hsl(45 90% 55%)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Want Alim's Direct Support?</span>
                </div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, fontWeight: 600, color: "hsl(var(--pres-text))", lineHeight: 1.4 }}>Alim Ul Karim — Chief Software Engineer</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "hsl(var(--pres-text-muted))", lineHeight: 1.4, marginTop: 4 }}>
                  4h/day · <strong style={{ color: "hsl(var(--pres-accent))", fontSize: 16 }}>$625/hr</strong> · <strong style={{ color: "hsl(45 90% 55%)", fontSize: 16 }}>$50,000/mo</strong> value
                </p>
                <div className="mt-3 flex items-center gap-2 rounded-lg px-4 py-2" style={{ background: "hsl(45 90% 55% / 0.15)", border: "1.5px solid hsl(45 90% 55% / 0.35)", width: "fit-content" }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: "hsl(45 90% 55%)" }}>↑ Upgrade to Tier 2 or 3 to unlock</span>
                </div>
              </div>
            </motion.div>
          </HoverVideoPreview>

          {/* RIGHT — Cost Comparison "The Math" */}
          <motion.div {...fade(2)} className="flex flex-col justify-center gap-5 flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 150, damping: 12 }}
              className="rounded-2xl relative overflow-hidden text-center"
              style={{
                background: "linear-gradient(135deg, hsl(142 71% 45% / 0.15), hsl(var(--pres-bg-surface)))",
                border: "2px solid hsl(142 71% 45% / 0.3)",
                padding: "24px 26px",
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingDown size={20} style={{ color: "hsl(142 71% 45%)" }} />
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(142 71% 45%)" }}>vs US Market Rate</span>
              </div>
              <div className="flex items-baseline justify-center gap-3">
                <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 64, fontWeight: 700, color: "hsl(142 71% 45%)" }}>76%</span>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 600, color: "hsl(var(--pres-text))" }}>Savings</span>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: "hsl(var(--pres-text-dim))", textDecoration: "line-through" }}>$8,000/mo</span>
                <ArrowRight size={18} style={{ color: "hsl(var(--pres-accent))" }} />
                <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 22, fontWeight: 700, color: "hsl(var(--pres-accent))" }}>$1,900/mo</span>
              </div>
            </motion.div>

            <div className="rounded-2xl" style={{ background: "hsl(var(--pres-bg-surface) / 0.7)", border: "1px solid hsl(var(--pres-accent) / 0.15)", padding: "20px 22px" }}>
              <div className="flex items-center gap-2 mb-4">
                <Calculator size={18} style={{ color: "hsl(var(--pres-accent))" }} />
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--pres-accent))" }}>Cost Comparison</span>
              </div>
              <div className="space-y-3">
                {costComparisons.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                    className="flex items-center justify-between rounded-xl px-4 py-3"
                    style={{
                      background: item.highlight ? "linear-gradient(90deg, hsl(var(--pres-accent) / 0.15), hsl(var(--pres-accent) / 0.05))" : "hsl(var(--pres-bg) / 0.5)",
                      border: item.highlight ? "1.5px solid hsl(var(--pres-accent) / 0.4)" : "1px solid hsl(var(--pres-accent) / 0.06)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {item.highlight && <DollarSign size={16} style={{ color: "hsl(var(--pres-accent))" }} />}
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: item.highlight ? 700 : 500, color: item.highlight ? "hsl(var(--pres-accent))" : "hsl(var(--pres-text-muted))" }}>{item.label}</span>
                    </div>
                    <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: item.highlight ? 20 : 16, fontWeight: 700, color: item.highlight ? "hsl(var(--pres-accent))" : "hsl(var(--pres-text-dim))", textDecoration: item.saved ? "line-through" : "none" }}>{item.cost}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p {...fade(6)} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, color: "hsl(var(--pres-text-muted))", lineHeight: 1.6, textAlign: "center" }}>
              Same quality. <strong style={{ color: "hsl(var(--pres-text))" }}>76% less cost.</strong> No compromise.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
