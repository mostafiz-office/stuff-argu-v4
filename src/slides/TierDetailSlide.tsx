import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const },
});

const features = [
  { label: "Dedicated developer", starter: true, growth: true, enterprise: true },
  { label: "160 hrs/month", starter: true, growth: true, enterprise: true },
  { label: "Weekly reports", starter: true, growth: true, enterprise: true },
  { label: "Daily standups", starter: false, growth: true, enterprise: true },
  { label: "Sprint participation", starter: false, growth: true, enterprise: true },
  { label: "Team management", starter: false, growth: "Up to 2", enterprise: "Up to 15" },
  { label: "Architecture decisions", starter: false, growth: false, enterprise: true },
  { label: "CTO-level oversight", starter: false, growth: false, enterprise: true },
  { label: "Priority Slack access", starter: false, growth: true, enterprise: true },
  { label: "24/7 SLA", starter: false, growth: false, enterprise: true },
];

const columns = [
  { key: "starter" as const, name: "Starter", price: "$1,900/mo" },
  { key: "growth" as const, name: "Growth", price: "$4,299/mo" },
  { key: "enterprise" as const, name: "Enterprise", price: "$6,800–8K/mo" },
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
          className="absolute left-[80px] right-[80px] top-[200px] bottom-[50px] z-10"
        >
          {/* Header row */}
          <div
            className="grid items-end pb-4"
            style={{
              gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
              borderBottom: "2px solid hsl(var(--pres-accent) / 0.3)",
            }}
          >
            <div />
            {columns.map((col, i) => (
              <motion.div
                key={col.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: col.key === "growth" ? "hsl(var(--pres-accent))" : "hsl(var(--pres-text))",
                  }}
                >
                  {col.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
                    color: "hsl(var(--pres-text-dim))",
                    marginTop: 4,
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
                transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                className="grid items-center"
                style={{
                  gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
                  padding: "16px 0",
                  borderBottom: "1px solid hsl(var(--border) / 0.5)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 19,
                    color: "hsl(var(--pres-text-muted))",
                  }}
                >
                  {feat.label}
                </span>
                {columns.map((col) => {
                  const val = feat[col.key];
                  return (
                    <div key={col.key} className="flex justify-center">
                      {val === true ? (
                        <CheckCircle size={22} style={{ color: "hsl(var(--pres-accent))" }} />
                      ) : val === false ? (
                        <X size={22} style={{ color: "hsl(var(--pres-text-dim) / 0.4)" }} />
                      ) : (
                        <span
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "hsl(var(--pres-accent))",
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
