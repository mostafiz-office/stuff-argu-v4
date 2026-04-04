import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Award, CheckCircle, X } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const },
});

type ColKey = "starter" | "growth" | "skilled" | "leadership";

const features: { label: string; starter: boolean | string; growth: boolean | string; skilled: boolean | string; leadership: boolean | string }[] = [
  { label: "Dedicated developer · 160 hrs/mo", starter: true, growth: true, skilled: true, leadership: true },
  { label: "Weekly progress reports", starter: true, growth: true, skilled: true, leadership: true },
  { label: "Daily standups", starter: false, growth: true, skilled: true, leadership: true },
  { label: "Sprint participation", starter: false, growth: true, skilled: true, leadership: true },
  { label: "Task breakdown & delegation", starter: false, growth: true, skilled: true, leadership: true },
  { label: "Team management", starter: false, growth: "Up to 2", skilled: "3–5", leadership: "Up to 15" },
  { label: "Architecture decisions", starter: false, growth: false, skilled: true, leadership: true },
  { label: "Project management", starter: false, growth: false, skilled: false, leadership: true },
  { label: "CTO-level oversight", starter: false, growth: false, skilled: false, leadership: true },
  { label: "Priority Slack · 24/7 SLA", starter: false, growth: "Slack only", skilled: "Slack only", leadership: true },
];

const columns: { key: ColKey; name: string; price: string; bestValue?: boolean }[] = [
  { key: "starter", name: "Tier 1", price: "$1,900/mo" },
  { key: "growth", name: "Tier 2", price: "$4,299/mo" },
  { key: "skilled", name: "Tier 3.A", price: "$6,800–8K/mo", bestValue: true },
  { key: "leadership", name: "Tier 3.B", price: "$7.5K–10K/mo" },
];

export default function TierDetailSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <motion.h1
          {...fade(0)}
          className="absolute left-[80px] top-[90px] z-10"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 64,
            fontWeight: 700,
            color: "hsl(var(--pres-text))",
          }}
        >
          Feature <span style={{ color: "hsl(var(--pres-accent))" }}>Comparison</span>
        </motion.h1>

        {/* Table */}
        <motion.div
          {...fade(1)}
          className="absolute left-[80px] right-[80px] top-[190px] bottom-[40px] z-10"
        >
          {/* Header row */}
          <div
            className="grid items-end pb-3"
            style={{
              gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr",
              borderBottom: "2px solid hsl(var(--pres-accent) / 0.3)",
            }}
          >
            <div />
            {columns.map((col, i) => (
              <motion.div
                key={col.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="text-center relative"
                style={{
                  background: col.bestValue ? "hsl(142 71% 45% / 0.08)" : "transparent",
                  borderRadius: "12px 12px 0 0",
                  padding: "10px 4px",
                }}
              >
                {col.bestValue && (
                  <div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-0.5 rounded-full"
                    style={{
                      background: "hsl(142 71% 45%)",
                      color: "#fff",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Award size={10} /> BEST VALUE
                  </div>
                )}
                <p
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: col.bestValue ? "hsl(142 71% 45%)" : col.key === "growth" ? "hsl(var(--pres-accent))" : "hsl(var(--pres-text))",
                    marginTop: col.bestValue ? 14 : 0,
                  }}
                >
                  {col.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    color: "hsl(var(--pres-text-dim))",
                    marginTop: 3,
                  }}
                >
                  {col.price}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Feature rows */}
          <div className="flex flex-col">
            {features.map((feat, i) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                className="grid items-center"
                style={{
                  gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr",
                  padding: "13px 0",
                  borderBottom: "1px solid hsl(var(--border) / 0.5)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 17,
                    color: "hsl(var(--pres-text-muted))",
                  }}
                >
                  {feat.label}
                </span>
                {columns.map((col) => {
                  const val = feat[col.key];
                  return (
                    <div
                      key={col.key}
                      className="flex justify-center"
                      style={{
                        background: col.bestValue ? "hsl(142 71% 45% / 0.06)" : "transparent",
                        padding: "4px 0",
                      }}
                    >
                      {val === true ? (
                        <CheckCircle size={20} style={{ color: col.bestValue ? "hsl(142 71% 45%)" : "hsl(var(--pres-accent))" }} />
                      ) : val === false ? (
                        <X size={20} style={{ color: "hsl(var(--pres-text-dim) / 0.4)" }} />
                      ) : (
                        <span
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 14,
                            fontWeight: 600,
                            color: col.bestValue ? "hsl(142 71% 45%)" : "hsl(var(--pres-accent))",
                          }}
                        >
                          {val}
                        </span>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
