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

const tierBonuses = [
  { tier: "Tier 1 — Starter", price: "$1,900/mo", bonus: "$5,000/mo", hours: "2 hrs/wk", limited: true },
  { tier: "Tier 2 — Growth", price: "$4,299/mo", bonus: "$5,000/mo", hours: "2 hrs/wk" },
  { tier: "Tier 3.A — Skilled", price: "$6,800/mo", bonus: "$7,500/mo", hours: "3 hrs/wk" },
  { tier: "Tier 3.B — Leadership", price: "$7,500/mo", bonus: "$10,000/mo", hours: "4 hrs/wk" },
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

        {/* FREE Bonus per tier — no totals, no confusion */}
        <motion.div
          {...fade(5)}
          className="absolute left-[120px] top-[680px] z-10 rounded-2xl"
          style={{
            width: 840,
            background: "hsl(var(--pres-bg-surface))",
            border: "1.5px solid hsl(var(--pres-accent) / 0.25)",
            padding: "24px 32px 20px",
          }}
        >
          {/* Panel heading — high emphasis */}
          <div className="flex items-center gap-3 mb-2">
            <div
              className="flex items-center justify-center rounded-lg"
              style={{ width: 36, height: 36, background: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.7))" }}
            >
              <Gift size={20} style={{ color: "hsl(var(--pres-bg))" }} />
            </div>
            <h2 style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 22, fontWeight: 700, color: "hsl(var(--pres-text))" }}>
              🎁 FREE Expert Bonus — Included With Every Tier
            </h2>
          </div>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "hsl(var(--pres-text-muted))", marginBottom: 16, fontStyle: "italic" }}>
            You pay for execution. Expert oversight is included at no extra cost.
          </p>

          <div className="flex flex-col gap-3">
            {tierBonuses.map((t, i) => (
              <motion.div
                key={t.tier}
                {...fade(i + 6)}
                className="flex items-center rounded-xl"
                style={{
                  background: "hsl(var(--pres-accent) / 0.05)",
                  border: "1px solid hsl(var(--pres-accent) / 0.12)",
                  padding: "14px 20px",
                  gap: 16,
                }}
              >
                {/* Tier name */}
                <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 17, fontWeight: 700, color: "hsl(var(--pres-text))", minWidth: 200 }}>
                  {t.tier}
                </span>

                {/* You Pay */}
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "hsl(var(--pres-text-dim))" }}>
                  You pay
                </span>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 600, color: "hsl(var(--pres-text))", minWidth: 110 }}>
                  {t.price}
                </span>

                {/* Arrow → */}
                <ArrowRight size={20} style={{ color: "hsl(var(--pres-accent) / 0.5)", flexShrink: 0 }} />

                {/* FREE bonus badge */}
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "hsl(var(--pres-text-dim))" }}>
                  You get
                </span>
                <span
                  className="rounded-full flex items-center gap-2"
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "hsl(130 60% 45%)",
                    background: "hsl(130 60% 40% / 0.14)",
                    padding: "6px 18px",
                  }}
                >
                  <Gift size={15} style={{ color: "hsl(130 60% 45%)" }} />
                  {t.bonus} FREE
                </span>

                {/* Hours badge */}
                <span
                  className="rounded-full ml-auto"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "hsl(var(--pres-text-dim))",
                    background: "hsl(var(--pres-accent) / 0.1)",
                    padding: "4px 12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.hours}
                </span>

                {/* Limited badge for Starter */}
                {(t as any).limited && (
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "hsl(0 80% 55%)", fontWeight: 700, whiteSpace: "nowrap" }}>
                    ⏳ 2 months only
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
