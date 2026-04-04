import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const tiers = [
  {
    name: "Starter",
    experience: "1+ Years Experience",
    price: "$1,900",
    per: "/mo",
    hours: "160 hrs/month",
    features: [
      "Tech-stack specific developer",
      "Needs mentoring & guidance",
      "Ideal for support tasks",
      "Weekly progress reports",
    ],
    featured: false,
  },
  {
    name: "Growth",
    experience: "2-3+ Years Experience",
    price: "$4,299",
    per: "/mo",
    hours: "160 hrs/month",
    features: [
      "Fluent, autonomous coder",
      "Manages up to 2 developers",
      "Full sprint participation",
      "Daily standups & Slack access",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    experience: "7-15+ Years Experience",
    price: "$6,800–$8,000",
    per: "/mo",
    hours: "160 hrs/month",
    features: [
      "Architecture & technical leadership",
      "Manages up to 15 developers",
      "CTO-level oversight available",
      "24/7 SLA & priority support",
    ],
    featured: false,
  },
];

export default function PricingTiersSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Background texture */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.03) 28px, hsl(var(--pres-accent) / 0.03) 29px)`,
          }}
        />

        <motion.h1
          {...fade(0)}
          className="absolute left-[80px] top-[90px] z-10"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 68,
            fontWeight: 700,
            color: "hsl(var(--pres-text))",
          }}
        >
          Choose Your <span style={{ color: "hsl(var(--pres-accent))" }}>Plan</span>
        </motion.h1>

        <motion.p
          {...fade(1)}
          className="absolute left-[80px] top-[178px] z-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 22,
            color: "hsl(var(--pres-text-muted))",
          }}
        >
          All plans include 160 dedicated hours/month. Scale anytime.
        </motion.p>

        {/* Tier cards */}
        <div className="absolute left-[80px] right-[80px] top-[248px] bottom-[60px] grid grid-cols-3 gap-7 z-10">
          {tiers.map((tier, index) => {
            const isFeatured = tier.featured;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                className="rounded-2xl flex flex-col relative overflow-hidden"
                style={{
                  background: isFeatured
                    ? "linear-gradient(180deg, hsl(var(--pres-accent) / 0.1) 0%, hsl(var(--pres-bg-surface)) 100%)"
                    : "hsl(var(--pres-bg-surface))",
                  border: `2px solid ${isFeatured ? "hsl(var(--pres-accent))" : "hsl(var(--border))"}`,
                  padding: "40px 36px",
                }}
              >
                {isFeatured && (
                  <div
                    className="absolute top-0 right-0 flex items-center gap-1.5 px-4 py-1.5 rounded-bl-xl"
                    style={{
                      background: "hsl(var(--pres-accent))",
                      color: "hsl(var(--pres-bg))",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                    }}
                  >
                    <Star size={14} /> MOST POPULAR
                  </div>
                )}

                {/* Tier name */}
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "hsl(var(--pres-text-dim))",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {tier.name}
                </p>

                {/* Experience */}
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 18,
                    color: "hsl(var(--pres-accent))",
                    fontWeight: 500,
                    marginTop: 6,
                  }}
                >
                  {tier.experience}
                </p>

                {/* Price */}
                <div className="mt-5">
                  <span
                    style={{
                      fontFamily: "'Ubuntu', sans-serif",
                      fontSize: tier.price.length > 8 ? 38 : 52,
                      fontWeight: 700,
                      color: "hsl(var(--pres-text))",
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 20,
                      color: "hsl(var(--pres-text-dim))",
                    }}
                  >
                    {tier.per}
                  </span>
                </div>

                {/* Hours badge */}
                <div
                  className="mt-3 inline-flex items-center rounded-lg px-3 py-1.5"
                  style={{
                    background: "hsl(var(--pres-accent) / 0.08)",
                    border: "1px solid hsl(var(--pres-accent) / 0.15)",
                    width: "fit-content",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "hsl(var(--pres-accent))",
                    }}
                  >
                    {tier.hours}
                  </span>
                </div>

                {/* Features */}
                <div className="mt-6 space-y-4 flex-1">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        style={{
                          color: "hsl(var(--pres-accent))",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 18,
                          color: "hsl(var(--pres-text-muted))",
                          lineHeight: 1.4,
                        }}
                      >
                        {feature}
                      </span>
                    </div>
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
