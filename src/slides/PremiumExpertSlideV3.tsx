import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Crown, CheckCircle, ArrowRight, Clock, DollarSign, TrendingUp, Gift, Zap } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" as const },
});

const whatYouGet = [
  "4 hours/day of dedicated Chief Engineer time",
  "Architecture reviews & code quality oversight",
  "Direct Slack, video calls & emergency support",
  "Sprint planning & strategic tech roadmap",
  "Team mentorship & knowledge transfer",
];

export default function PremiumExpertSlideV3() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Background */}
        <div className="absolute inset-0 z-[1]" style={{ backgroundImage: `repeating-linear-gradient(135deg, transparent, transparent 40px, hsl(var(--pres-accent) / 0.015) 40px, hsl(var(--pres-accent) / 0.015) 41px)` }} />
        <div className="absolute z-[1]" style={{ left: "50%", top: "50%", width: 900, height: 700, transform: "translate(-50%, -50%)", background: "radial-gradient(ellipse, hsl(var(--pres-accent) / 0.05) 0%, transparent 65%)", filter: "blur(80px)" }} />

        {/* Left side — Value proposition */}
        <div className="absolute left-[100px] top-[90px] z-10 flex flex-col gap-[36px]" style={{ width: 860 }}>
          {/* Header */}
          <motion.div {...fade(0)}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center rounded-xl" style={{ width: 48, height: 48, background: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.7))" }}>
                <Crown size={26} style={{ color: "hsl(var(--pres-bg))" }} />
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: "hsl(var(--pres-accent))", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                The Unfair Advantage
              </p>
            </div>
            <h1 style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 50, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.1 }}>
              Buy Any Tier, Get a{" "}
              <span style={{ color: "hsl(var(--pres-bg))", background: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.8))", padding: "2px 14px", borderRadius: 8 }}>
                $50K/mo Expert
              </span>
              {" "}Bonus
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 19, color: "hsl(var(--pres-text-muted))", marginTop: 10, lineHeight: 1.5 }}>
              Alim Ul Karim — Chief Software Engineer with 20+ years — dedicates{" "}
              <strong style={{ color: "hsl(var(--pres-text))" }}>80 hours/month</strong> to your project. No extra charge.
            </p>
          </motion.div>

          {/* Value breakdown row */}
          <motion.div {...fade(2)} className="flex gap-5">
            {[
              { icon: Clock, label: "80 hrs/mo", desc: "4 hrs/day dedicated" },
              { icon: DollarSign, label: "$625/hr", desc: "Market rate value" },
              { icon: TrendingUp, label: "$50,000/mo", desc: "You pay $0 extra" },
              { icon: Gift, label: "BONUS", desc: "Included in every tier" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                {...fade(i + 3)}
                className="rounded-xl flex-1 text-center"
                style={{
                  padding: "20px 14px",
                  background: i === 3 ? "linear-gradient(135deg, hsl(var(--pres-accent) / 0.15), hsl(var(--pres-accent) / 0.05))" : "hsl(var(--pres-bg-surface))",
                  border: `1.5px solid ${i === 3 ? "hsl(var(--pres-accent) / 0.4)" : "hsl(var(--border))"}`,
                }}
              >
                <s.icon size={22} style={{ color: "hsl(var(--pres-accent))", margin: "0 auto 6px" }} />
                <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 24, fontWeight: 700, color: i === 3 ? "hsl(var(--pres-accent))" : "hsl(var(--pres-text))" }}>{s.label}</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "hsl(var(--pres-text-dim))", marginTop: 2 }}>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Checklist */}
          <motion.div {...fade(6)} className="grid grid-cols-2 gap-x-8 gap-y-4">
            {whatYouGet.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle size={20} style={{ color: "hsl(var(--pres-accent))", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, color: "hsl(var(--pres-text-muted))", lineHeight: 1.35 }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right side — Per-tier value */}
        <motion.div
          {...fade(4)}
          className="absolute right-[80px] top-[90px] z-10 rounded-2xl flex flex-col"
          style={{
            width: 500,
            background: "linear-gradient(180deg, hsl(var(--pres-accent) / 0.08) 0%, hsl(var(--pres-bg-surface)) 100%)",
            border: "1.5px solid hsl(var(--pres-accent) / 0.25)",
            padding: "28px 24px",
          }}
        >
          <div className="flex items-center gap-2 mb-5">
            <Zap size={18} style={{ color: "hsl(var(--pres-accent))" }} />
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, color: "hsl(var(--pres-accent))", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              What Each Tier Actually Gets You
            </p>
          </div>

          <div className="space-y-4">
            {[
              { tier: "Tier 1 — Starter", pay: "$1,900", value: "$51,900", label: "27× value" },
              { tier: "Tier 2 — Growth", pay: "$4,299", value: "$54,299", label: "13× value" },
              { tier: "Tier 3.A — Skilled", pay: "$6,800", value: "$56,800", label: "8× value" },
              { tier: "Tier 3.B — Leadership", pay: "$7,500", value: "$57,500", label: "8× value" },
            ].map((t, i) => (
              <motion.div
                key={t.tier}
                {...fade(i + 7)}
                className="rounded-xl"
                style={{
                  background: "hsl(var(--pres-bg) / 0.5)",
                  border: "1px solid hsl(var(--pres-accent) / 0.15)",
                  padding: "16px 20px",
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600, color: "hsl(var(--pres-text-dim))" }}>{t.tier}</p>
                  <span className="rounded-full px-3 py-0.5" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: "hsl(var(--pres-accent))", background: "hsl(var(--pres-accent) / 0.12)" }}>
                    {t.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "hsl(var(--pres-text-muted))" }}>Pay {t.pay}/mo</span>
                  <ArrowRight size={14} style={{ color: "hsl(var(--pres-accent))" }} />
                  <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 22, fontWeight: 700, color: "hsl(var(--pres-accent))" }}>{t.value} value</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom highlight */}
          <div
            className="mt-5 rounded-xl text-center"
            style={{
              background: "linear-gradient(135deg, hsl(var(--pres-accent) / 0.15), hsl(var(--pres-accent) / 0.05))",
              border: "1.5px solid hsl(var(--pres-accent) / 0.3)",
              padding: "16px 20px",
            }}
          >
            <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 21, fontWeight: 700, color: "hsl(var(--pres-text))" }}>
              <span style={{ color: "hsl(var(--pres-accent))" }}>$50,000/mo</span> expert · <span style={{ color: "hsl(var(--pres-accent))" }}>80 hrs/mo</span> · <span style={{ color: "hsl(var(--pres-accent))" }}>$0 extra</span>
            </p>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p {...fade(10)} className="absolute bottom-[80px] left-0 right-0 text-center z-10" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, color: "hsl(var(--pres-text-dim))", fontStyle: "italic" }}>
          "Your competitors pay $50K/mo for this level of expertise. You get it as a bonus with every tier."
        </motion.p>
      </div>
    </ScaledSlide>
  );
}
