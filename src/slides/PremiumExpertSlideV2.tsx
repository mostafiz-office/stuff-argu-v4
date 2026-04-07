import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Crown, Gift, Clock, DollarSign, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import alimPhoto from "@/assets/alim-updated.png";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" as const },
});

const valueStats = [
  { icon: Clock, value: "4 hrs/day", sub: "80 hrs/month dedicated", highlight: false },
  { icon: DollarSign, value: "$625/hr", sub: "Market rate for this expertise", highlight: false },
  { icon: Gift, value: "$50,000", sub: "Monthly value — BONUS with your tier", highlight: true },
];

const tierValues = [
  { tier: "Tier 1 — Starter", price: "$1,900/mo", bonus: "$50,000", total: "$51,900", savings: "96%" },
  { tier: "Tier 2 — Growth", price: "$4,299/mo", bonus: "$50,000", total: "$54,299", savings: "92%" },
  { tier: "Tier 3.A — Skilled", price: "$6,800/mo", bonus: "$50,000", total: "$56,800", savings: "88%" },
];

export default function PremiumExpertSlideV2() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Background glow */}
        <div
          className="absolute z-[1]"
          style={{
            width: 800, height: 600, top: "40%", left: "30%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        {/* Title */}
        <motion.div {...fade(0)} className="absolute left-[80px] top-[70px] z-10">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="flex items-center justify-center rounded-xl"
              style={{ width: 44, height: 44, background: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.7))" }}
            >
              <Gift size={24} style={{ color: "hsl(var(--pres-bg))" }} />
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: "hsl(var(--pres-accent))", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Bonus Value — Included With Every Tier
            </p>
          </div>
          <h1 style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 46, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.15 }}>
            <span style={{ color: "hsl(var(--pres-accent))" }}>$50,000/mo</span> of Expert Value
            <br />
            <span style={{ fontSize: 38 }}>Added to Every Tier — As a Bonus</span>
          </h1>
        </motion.div>

        {/* Alim photo — subtle on left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute z-[3] pointer-events-none"
          style={{ left: 80, top: 280, width: 200 }}
        >
          <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid hsl(var(--pres-accent) / 0.3)", boxShadow: "0 12px 40px hsl(var(--pres-bg) / 0.6)" }}>
            <img src={alimPhoto} alt="Alim Ul Karim" className="w-full object-cover" style={{ height: 230, objectPosition: "top" }} />
          </div>
          <div className="mt-3 text-center">
            <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 18, fontWeight: 700, color: "hsl(var(--pres-text))" }}>Alim Ul Karim</p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "hsl(var(--pres-accent))" }}>Chief Software Engineer</p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "hsl(var(--pres-text-dim))" }}>20+ Years Experience</p>
          </div>
        </motion.div>

        {/* Value stat cards */}
        <div className="absolute left-[320px] top-[280px] z-10 flex gap-5">
          {valueStats.map((s, i) => (
            <motion.div
              key={s.value}
              {...fade(i + 2)}
              className="rounded-xl text-center"
              style={{
                width: 220, padding: "20px 16px",
                background: s.highlight
                  ? "linear-gradient(135deg, hsl(var(--pres-accent) / 0.18), hsl(var(--pres-accent) / 0.06))"
                  : "hsl(var(--pres-bg-surface))",
                border: `1.5px solid ${s.highlight ? "hsl(var(--pres-accent) / 0.5)" : "hsl(var(--border))"}`,
              }}
            >
              <s.icon size={24} style={{ color: "hsl(var(--pres-accent))", margin: "0 auto 8px" }} />
              <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 28, fontWeight: 700, color: s.highlight ? "hsl(var(--pres-accent))" : "hsl(var(--pres-text))" }}>
                {s.value}
              </p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "hsl(var(--pres-text-muted))", marginTop: 4, lineHeight: 1.3 }}>
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tier value comparison table */}
        <motion.div
          {...fade(5)}
          className="absolute left-[80px] top-[510px] right-[80px] z-10 rounded-2xl"
          style={{
            background: "hsl(var(--pres-bg-surface))",
            border: "1.5px solid hsl(var(--pres-accent) / 0.2)",
            padding: "20px 24px",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={16} style={{ color: "hsl(var(--pres-accent))" }} />
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, color: "hsl(var(--pres-accent))", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Total Value You Receive
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {tierValues.map((t, i) => (
              <motion.div
                key={t.tier}
                {...fade(i + 6)}
                className="rounded-xl"
                style={{
                  background: "hsl(var(--pres-accent) / 0.05)",
                  border: "1px solid hsl(var(--pres-accent) / 0.15)",
                  padding: "14px 16px",
                }}
              >
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: "hsl(var(--pres-text-dim))", marginBottom: 6 }}>
                  {t.tier}
                </p>
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "hsl(var(--pres-text-muted))" }}>{t.price}</span>
                  <span style={{ fontSize: 14, color: "hsl(var(--pres-text-dim))" }}>+</span>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600, color: "hsl(var(--pres-accent))" }}>{t.bonus} bonus</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 22, fontWeight: 700, color: "hsl(var(--pres-text))" }}>{t.total}</span>
                  <span
                    className="rounded-full px-2 py-0.5"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: "hsl(var(--pres-accent))", background: "hsl(var(--pres-accent) / 0.12)" }}
                  >
                    {t.savings} bonus
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          {...fade(9)}
          className="absolute bottom-[80px] left-0 right-0 text-center z-10"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, color: "hsl(var(--pres-text-dim))", fontStyle: "italic" }}
        >
          "You pay for the developer. Alim's $50,000/mo expertise? That's on us."
        </motion.p>
      </div>
    </ScaledSlide>
  );
}
