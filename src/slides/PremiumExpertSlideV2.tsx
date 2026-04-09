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
  { icon: Clock, value: "2–4 hrs/week", sub: "Varies by tier", highlight: false },
  { icon: DollarSign, value: "$625/hr", sub: "Market rate for this expertise", highlight: false },
  { icon: Gift, value: "Up to $10K", sub: "Monthly value — BONUS with your tier", highlight: true },
];

const tierValues = [
  { tier: "Tier 1 — Starter", price: "$1,900/mo", bonus: "$5,000", total: "$6,900", savings: "2 hrs/wk · 2 months only", limited: true },
  { tier: "Tier 2 — Growth", price: "$4,299/mo", bonus: "$5,000", total: "$9,299", savings: "2 hrs/wk" },
  { tier: "Tier 3.A — Skilled", price: "$6,800/mo", bonus: "$7,500", total: "$14,300", savings: "3 hrs/wk" },
  { tier: "Tier 3.B — Leadership", price: "$7,500/mo", bonus: "$10,000", total: "$17,500", savings: "4 hrs/wk" },
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
        <motion.div {...fade(0)} className="absolute left-[120px] top-[100px] z-10">
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
          <h1 style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 46, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.25 }}>
            Buy Any Tier, Get a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.85))",
                color: "hsl(var(--pres-bg))",
                padding: "2px 14px",
                borderRadius: 8,
                fontWeight: 800,
              }}
            >
              $10K/mo Expert
            </span>{" "}
            Bonus
          </h1>
        </motion.div>

        {/* Alim photo — subtle on left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute z-[3] pointer-events-none"
          style={{ left: 120, top: 268, width: 240 }}
        >
          <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid hsl(var(--pres-accent) / 0.3)", boxShadow: "0 12px 40px hsl(var(--pres-bg) / 0.6)" }}>
            <img src={alimPhoto} alt="Alim Ul Karim" className="w-full object-cover" style={{ height: 280, objectPosition: "top", transform: "rotate(6deg) scale(1.06)" }} />
          </div>
          <div className="mt-3 text-center">
            <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 18, fontWeight: 700, color: "hsl(var(--pres-text))" }}>Alim Ul Karim</p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "hsl(var(--pres-accent))" }}>Chief Software Engineer</p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "hsl(var(--pres-text-dim))" }}>20+ Years Experience</p>
          </div>
        </motion.div>

        {/* Value stat cards */}
        <div className="absolute left-[440px] top-[380px] z-10 flex gap-6">
          {valueStats.map((s, i) => (
            <motion.div
              key={s.value}
              {...fade(i + 2)}
              className="rounded-xl text-center"
              style={{
                width: 260, padding: "28px 20px",
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

        {/* Tier value comparison — horizontal equation rows */}
        <motion.div
          {...fade(5)}
          className="absolute left-[120px] top-[700px] right-[120px] z-10 rounded-2xl"
          style={{
            background: "hsl(var(--pres-bg-surface))",
            border: "1.5px solid hsl(var(--pres-accent) / 0.2)",
            padding: "24px 36px",
          }}
        >
          <div className="flex items-center gap-2 mb-5">
            <Sparkles size={16} style={{ color: "hsl(var(--pres-accent))" }} />
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: "hsl(var(--pres-accent))", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Total Value You Receive
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {tierValues.map((t, i) => (
              <motion.div
                key={t.tier}
                {...fade(i + 6)}
                className="flex items-center rounded-xl"
                style={{
                  background: "hsl(var(--pres-accent) / 0.04)",
                  border: "1px solid hsl(var(--pres-accent) / 0.1)",
                  padding: "12px 20px",
                  gap: 16,
                }}
              >
                {/* Tier name */}
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, color: "hsl(var(--pres-text-muted))", minWidth: 200 }}>
                  {t.tier}
                </span>

                {/* You Pay */}
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 500, color: "hsl(var(--pres-text))", minWidth: 110 }}>
                  {t.price}
                </span>

                {/* Plus sign */}
                <span style={{ fontSize: 20, fontWeight: 700, color: "hsl(var(--pres-accent) / 0.6)" }}>+</span>

                {/* Bonus pill */}
                <span
                  className="rounded-full"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "hsl(var(--pres-accent))",
                    background: "hsl(var(--pres-accent) / 0.14)",
                    padding: "4px 16px",
                    minWidth: 130,
                    textAlign: "center",
                  }}
                >
                  {t.bonus} bonus
                </span>

                {/* Arrow */}
                <ArrowRight size={22} style={{ color: "hsl(var(--pres-accent) / 0.5)", flexShrink: 0 }} />

                {/* Total */}
                <span style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: 24,
                  fontWeight: 800,
                  color: "hsl(var(--pres-accent))",
                  minWidth: 130,
                }}>
                  {t.total}/mo
                </span>

                {/* Hours badge */}
                <span
                  className="rounded-full ml-auto"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "hsl(var(--pres-text-dim))",
                    background: "hsl(var(--pres-accent) / 0.08)",
                    padding: "3px 12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.savings}
                </span>

                {/* Limited badge for Starter */}
                {(t as any).limited && (
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "hsl(0 80% 55%)", fontWeight: 700, whiteSpace: "nowrap" }}>
                    ⏳ 2 months
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          {...fade(9)}
          className="absolute top-[980px] left-0 right-0 text-center z-10"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, color: "hsl(var(--pres-text-dim))", fontStyle: "italic" }}
        >
          "You pay for the developer. Alim's expert oversight? That's on us."
        </motion.p>
      </div>
    </ScaledSlide>
  );
}
