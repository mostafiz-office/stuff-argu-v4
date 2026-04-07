import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const },
});

const features: { label: string; included: boolean | string }[] = [
  { label: "Dedicated developer · 160 hrs/mo", included: true },
  { label: "Weekly progress reports", included: true },
  { label: "Daily standups", included: false },
  { label: "Sprint participation", included: false },
  { label: "Task breakdown & delegation", included: false },
  { label: "Team management", included: false },
  { label: "Architecture decisions", included: false },
  { label: "Project management", included: false },
  { label: "CTO-level oversight", included: false },
  { label: "Priority Slack · 24/7 SLA", included: false },
  { label: "QA Engineers", included: false },
  { label: "Alim Expert Oversight", included: "2 hrs/wk*" },
  { label: "Min. Developer Experience", included: "2+ yrs" },
  { label: "Onboarding Deposit", included: "$2K" },
];

export default function StarterTierDetailSlide() {
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
          Tier 1 — <span style={{ color: "hsl(var(--pres-accent))" }}>Starter</span>
        </motion.h1>

        <motion.p
          {...fade(1)}
          className="absolute left-[80px] top-[170px] z-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 28,
            color: "hsl(var(--pres-text-dim))",
          }}
        >
          $2,499/mo
        </motion.p>

        {/* Table */}
        <motion.div
          {...fade(1)}
          className="absolute left-[80px] right-[80px] top-[240px] bottom-[80px] z-10 flex flex-col"
        >
          {/* Header row */}
          <div
            className="grid items-end pb-3"
            style={{
              gridTemplateColumns: "1fr 200px",
              borderBottom: "2px solid hsl(var(--pres-accent) / 0.3)",
            }}
          >
            <span
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "hsl(var(--pres-text-muted))",
              }}
            >
              Feature
            </span>
            <span
              className="text-center"
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "hsl(var(--pres-accent))",
              }}
            >
              Starter
            </span>
          </div>

          {/* Feature rows */}
          <div className="flex flex-col flex-1 justify-evenly">
            {features.map((feat, i) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                className="grid items-center"
                style={{
                  gridTemplateColumns: "1fr 200px",
                  padding: "12px 0",
                  borderBottom: "1px solid hsl(var(--border) / 0.5)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 24,
                    color: "hsl(var(--pres-text-muted))",
                  }}
                >
                  {feat.label}
                </span>
                <div className="flex justify-center">
                  {feat.included === true ? (
                    <CheckCircle size={30} style={{ color: "hsl(var(--pres-accent))" }} />
                  ) : feat.included === false ? (
                    <X size={30} style={{ color: "hsl(0 80% 55%)" }} />
                  ) : (
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 20,
                        fontWeight: 600,
                        color: "hsl(var(--pres-accent))",
                      }}
                    >
                      {feat.included}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
