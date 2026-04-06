import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const comparisons = [
  {
    role: "Starter Developer",
    tier: "Tier 1",
    us: "$6,000–$8,000",
    riseup: "$1,900",
    saving: "Up to 76%",
    barUs: 100,
    barRiseup: 24,
  },
  {
    role: "Mid-Level Developer",
    tier: "Tier 2",
    us: "$10,000–$15,000",
    riseup: "$4,299",
    saving: "Up to 71%",
    barUs: 100,
    barRiseup: 29,
  },
  {
    role: "Skilled Expert",
    tier: "Tier 3.A",
    us: "$18,000–$25,000",
    riseup: "$6,800–$8,000",
    saving: "Up to 68%",
    barUs: 100,
    barRiseup: 32,
  },
  {
    role: "Tech Leadership",
    tier: "Tier 3.B",
    us: "$22,000–$30,000",
    riseup: "$7,500–$10,000",
    saving: "Up to 67%",
    barUs: 100,
    barRiseup: 33,
  },
];

export default function PricingSavingsSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Glow */}
        <div
          className="absolute z-[1]"
          style={{
            right: 100, top: "50%", width: 700, height: 500,
            transform: "translateY(-50%)",
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        {/* Left column */}
        <div className="absolute left-[80px] top-[80px] z-10" style={{ maxWidth: 520 }}>
          <motion.h1
            {...fade(0)}
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 64,
              fontWeight: 700,
              color: "hsl(var(--pres-text))",
              lineHeight: 1.05,
            }}
          >
            <span style={{ color: "hsl(var(--pres-accent))" }}>Save</span> Up To
            <br />
            <span style={{ color: "hsl(var(--pres-accent))", fontSize: 88 }}>76%</span>
          </motion.h1>

          <motion.p
            {...fade(1)}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 20,
              color: "hsl(var(--pres-text-muted))",
              marginTop: 20,
              lineHeight: 1.6,
            }}
          >
            Compare monthly costs: <strong style={{ color: "hsl(var(--pres-accent))" }}>US market rates</strong> vs RiseUp Asia.
          </motion.p>
        </div>

        {/* Comparison bars */}
        <div className="absolute left-[80px] right-[80px] top-[360px] bottom-[50px] z-10 flex flex-col justify-center gap-7">
          {comparisons.map((c, i) => (
            <motion.div
              key={c.role}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
            >
              <div className="flex items-baseline justify-between mb-2">
                <div className="flex items-baseline gap-3">
                  <span
                    style={{
                      fontFamily: "'Ubuntu', sans-serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "hsl(var(--pres-text))",
                    }}
                  >
                    {c.role}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 14,
                      color: "hsl(var(--pres-text-dim))",
                    }}
                  >
                    {c.tier}
                  </span>
                </div>
                <span
                  className="rounded-full px-3 py-0.5"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "hsl(var(--pres-bg))",
                    background: "hsl(var(--pres-accent))",
                  }}
                >
                  {c.saving}
                </span>
              </div>

              {/* US bar */}
              <div className="flex items-center gap-3 mb-1.5">
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    color: "hsl(var(--pres-text-dim))",
                    width: 75,
                    flexShrink: 0,
                  }}
                >
                  US Rate
                </span>
                <div
                  className="flex-1 rounded-md overflow-hidden"
                  style={{ height: 16, background: "hsl(var(--pres-bg-surface))" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${c.barUs}%` }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.8 }}
                    className="h-full rounded-md"
                    style={{ background: "linear-gradient(90deg, #7c3aed, #7c3aed88)" }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#7c3aed",
                    width: 160,
                    textAlign: "right",
                  }}
                >
                  {c.us}/mo
                </span>
              </div>

              {/* RiseUp bar */}
              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    color: "hsl(var(--pres-text-dim))",
                    width: 75,
                    flexShrink: 0,
                  }}
                >
                  RiseUp
                </span>
                <div
                  className="flex-1 rounded-md overflow-hidden"
                  style={{ height: 16, background: "hsl(var(--pres-bg-surface))" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${c.barRiseup}%` }}
                    transition={{ delay: 0.6 + i * 0.12, duration: 0.8 }}
                    className="h-full rounded-md"
                    style={{
                      background: "linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))",
                      boxShadow: "0 0 16px hsl(var(--pres-accent) / 0.3)",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "hsl(var(--pres-accent))",
                    width: 160,
                    textAlign: "right",
                  }}
                >
                  {c.riseup}/mo
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}
