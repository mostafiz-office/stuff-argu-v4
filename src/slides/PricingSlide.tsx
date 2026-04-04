import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import type { PricingPlan } from "@/types/presentation";

const FADE_DELAY_MULTIPLIER = 0.18;
const FADE_DURATION_S = 0.7;
const CARD_BASE_DELAY_S = 0.3;
const CARD_DELAY_INCREMENT_S = 0.15;
const CARD_DURATION_S = 0.6;

const fade = (index: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: FADE_DELAY_MULTIPLIER * index, duration: FADE_DURATION_S, ease: "easeOut" as const },
});

const plans: PricingPlan[] = [
  { title: "Starter", price: "$2,500", per: "/mo", items: ["1-2 developers", "Weekly sprints", "Basic reporting", "Email support"] },
  { title: "Growth", price: "$7,500", per: "/mo", items: ["3-5 developers", "Daily standups", "Full PM support", "Priority Slack"], featured: true },
  { title: "Enterprise", price: "Custom", per: "", items: ["Full team 6-20+", "Embedded model", "CTO oversight", "24/7 SLA"] },
];

export default function PricingSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />
        <motion.h1
          {...fade(0)}
          className="absolute left-[80px] top-[100px]"
          style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 72, fontWeight: 700, fontStyle: "italic", color: "hsl(var(--pres-text))" }}
        >
          Pricing
        </motion.h1>
        <motion.p
          {...fade(1)}
          className="absolute left-[80px] top-[190px]"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 21, color: "hsl(var(--pres-text-muted))" }}
        >
          Transparent pricing. <strong style={{ color: "hsl(var(--pres-accent))" }}>60% savings</strong> vs US/UK rates.
        </motion.p>
        <div className="absolute left-[80px] right-[80px] top-[250px] grid grid-cols-3 gap-6 z-10">
          {plans.map((plan, index) => {
            const isFeatured = plan.featured === true;

            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: CARD_BASE_DELAY_S + index * CARD_DELAY_INCREMENT_S, duration: CARD_DURATION_S }}
                className="rounded-2xl p-8 flex flex-col"
                style={{
                  background: isFeatured ? "hsl(41 100% 50% / 0.08)" : "hsl(var(--pres-bg-surface))",
                  border: `2px solid ${isFeatured ? "hsl(var(--pres-accent))" : "hsl(var(--border))"}`,
                }}
              >
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 600, color: "hsl(var(--pres-text-muted))", letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                  {plan.title}
                </p>
                <p className="mt-3" style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 48, fontWeight: 700, color: "hsl(var(--pres-text))" }}>
                  {plan.price}
                  <span style={{ fontSize: 21, color: "hsl(var(--pres-text-dim))" }}>{plan.per}</span>
                </p>
                <div className="mt-6 space-y-3 flex-1">
                  {plan.items.map((item) => (
                    <p key={item} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 21, color: "hsl(var(--pres-text-muted))" }}>
                      ✓ {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ScaledSlide>
  );
}
