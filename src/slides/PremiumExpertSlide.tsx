import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Crown, Zap, Shield, Code2, Users, ArrowRight, CheckCircle, Star } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" as const },
});

const benefits = [
  {
    icon: Code2,
    title: "Architecture Reviews",
    desc: "Personal code & architecture reviews ensuring your project follows best practices",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "Hands-on oversight of your team's output — bugs caught before they ship",
  },
  {
    icon: Users,
    title: "Team Mentorship",
    desc: "Levels up your entire dev team through pairing, feedback & knowledge transfer",
  },
  {
    icon: Zap,
    title: "Strategic Consulting",
    desc: "CTO-level guidance on tech stack, scalability & engineering roadmap",
  },
];

const includedItems = [
  "4 hours/day of dedicated expert time",
  "Direct Slack & video call access",
  "Sprint planning & priority guidance",
  "Emergency escalation & fire-fighting",
  "Monthly strategy & tech roadmap sessions",
];

export default function PremiumExpertSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Background glow */}
        <div
          className="absolute z-[1]"
          style={{
            width: 600,
            height: 600,
            top: "50%",
            left: "40%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, hsl(var(--pres-accent) / 0.06) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Content area — two columns */}
        <div
          className="absolute left-[80px] right-[80px] top-[104px] bottom-[55px] z-10 flex gap-6"
        >
          {/* LEFT — Title + Benefits */}
          <div className="flex flex-col flex-1">
            {/* Title section */}
            <motion.div {...fade(0)} className="mb-4">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: 44,
                    height: 44,
                    background: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.7))",
                  }}
                >
                  <Crown size={24} style={{ color: "hsl(var(--pres-bg))" }} />
                </div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "hsl(var(--pres-accent))",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Included As a Bonus With Every Tier
                </p>
              </div>
              <h1
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: 44,
                  fontWeight: 700,
                  color: "hsl(var(--pres-text))",
                  lineHeight: 1.15,
                }}
              >
                Your Team Gets{" "}
                <span style={{ color: "hsl(var(--pres-accent))" }}>Alim Ul Karim</span>
                {" "}— As a Bonus
              </h1>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  color: "hsl(var(--pres-text-muted))",
                  marginTop: 6,
                  marginBottom: 24,
                  maxWidth: 800,
                }}
              >
                Chief Software Engineer · 20+ Years ·{" "}
                <strong style={{ color: "hsl(var(--pres-accent))" }}>4 hrs/day (80 hrs/mo)</strong> of expert
                guidance included at{" "}
                <strong style={{ color: "hsl(var(--pres-accent))" }}>no extra cost</strong> — valued at{" "}
                <strong style={{ color: "hsl(var(--pres-accent))" }}>$50,000/mo</strong>
              </p>
            </motion.div>

            {/* Benefit cards — stretch to fill remaining height */}
            <div className="flex flex-col gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  {...fade(i + 2)}
                  className="rounded-xl flex items-start gap-4"
                  style={{
                    background: "hsl(var(--pres-bg-surface))",
                    border: "1px solid hsl(var(--pres-accent) / 0.1)",
                    padding: "20px 20px",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-lg flex-shrink-0"
                    style={{
                      width: 44,
                      height: 44,
                      background: "hsl(var(--pres-accent) / 0.1)",
                    }}
                  >
                    <b.icon size={22} style={{ color: "hsl(var(--pres-accent))" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Ubuntu', sans-serif",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "hsl(var(--pres-text))",
                        marginBottom: 4,
                      }}
                    >
                      {b.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 15,
                        color: "hsl(var(--pres-text-muted))",
                        lineHeight: 1.5,
                      }}
                    >
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Premium card */}
          <motion.div
            {...fade(3)}
            className="rounded-2xl flex flex-col"
            style={{
              width: 440,
              flexShrink: 0,
              background: "linear-gradient(160deg, hsl(var(--pres-accent) / 0.1) 0%, hsl(var(--pres-bg-surface)) 50%)",
              border: "2px solid hsl(var(--pres-accent) / 0.25)",
              padding: "28px 26px",
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Star size={16} style={{ color: "hsl(var(--pres-accent))", fill: "hsl(var(--pres-accent))" }} />
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "hsl(var(--pres-accent))",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Included With Your Tier
                </p>
              </div>

              <div className="space-y-4">
                {includedItems.map((item, i) => (
                  <motion.div key={item} {...fade(i + 4)} className="flex items-center gap-3">
                    <CheckCircle size={20} style={{ color: "hsl(var(--pres-accent))", flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 17,
                        color: "hsl(var(--pres-text))",
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Value highlight */}
            <div
              className="rounded-xl"
              style={{
                background: "linear-gradient(135deg, hsl(var(--pres-accent) / 0.12), hsl(var(--pres-accent) / 0.04))",
                border: "1.5px solid hsl(var(--pres-accent) / 0.3)",
                padding: "20px 22px",
                marginTop: 24,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: "hsl(var(--pres-text-dim))",
                    textDecoration: "line-through",
                    textDecorationColor: "hsl(0 70% 55%)",
                    textDecorationThickness: 2,
                  }}
                >
                  $50,000/mo
                </span>
                <ArrowRight size={20} style={{ color: "hsl(var(--pres-accent))" }} />
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 34,
                    fontWeight: 700,
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  $0 Extra
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  color: "hsl(var(--pres-text-muted))",
                  lineHeight: 1.5,
                }}
              >
                80 hrs/mo of Chief Engineer time · Already included in your tier price
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <CheckCircle size={15} style={{ color: "hsl(var(--pres-accent))" }} />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  No hidden fees
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          {...fade(8)}
          className="absolute bottom-[20px] left-0 right-0 text-center z-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 16,
            color: "hsl(var(--pres-text-dim))",
            fontStyle: "italic",
          }}
        >
          "Every tier includes Alim's expertise at no additional cost — your unfair advantage starts day one."
        </motion.p>
      </div>
    </ScaledSlide>
  );
}
