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
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, hsl(var(--pres-accent) / 0.06) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Diagonal texture */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.02) 28px, hsl(var(--pres-accent) / 0.02) 29px)`,
          }}
        />

        {/* Title section */}
        <motion.div {...fade(0)} className="absolute left-[80px] top-[85px] z-10">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="flex items-center justify-center rounded-xl"
              style={{
                width: 48,
                height: 48,
                background: "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.7))",
              }}
            >
              <Crown size={26} style={{ color: "hsl(var(--pres-bg))" }} />
            </div>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "hsl(var(--pres-accent))",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Exclusive Bonus With Every Tier
            </p>
          </div>
          <h1
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 48,
              fontWeight: 700,
              color: "hsl(var(--pres-text))",
              lineHeight: 1.15,
            }}
          >
            Get Direct Access to{" "}
            <span style={{ color: "hsl(var(--pres-accent))" }}>Alim Ul Karim</span>
          </h1>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 20,
              color: "hsl(var(--pres-text-muted))",
              marginTop: 8,
              maxWidth: 700,
            }}
          >
            Chief Software Engineer · 20+ Years of Experience · Your dedicated expert
          </p>
        </motion.div>

        {/* Left: Benefits grid */}
        <div className="absolute left-[80px] top-[310px] z-10 grid grid-cols-2 gap-5" style={{ width: 940 }}>
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              {...fade(i + 2)}
              className="rounded-xl flex items-start gap-4"
              style={{
                background: "hsl(var(--pres-bg-surface))",
                border: "1px solid hsl(var(--border))",
                padding: "22px 20px",
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
                    fontSize: 16,
                    color: "hsl(var(--pres-text-muted))",
                    lineHeight: 1.45,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Premium card */}
        <motion.div
          {...fade(3)}
          className="absolute right-[80px] top-[310px] z-10 rounded-2xl flex flex-col"
          style={{
            width: 780,
            background: "linear-gradient(160deg, hsl(var(--pres-accent) / 0.12) 0%, hsl(var(--pres-bg-surface)) 50%)",
            border: "2px solid hsl(var(--pres-accent) / 0.3)",
            padding: "32px 28px",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Star size={18} style={{ color: "hsl(var(--pres-accent))", fill: "hsl(var(--pres-accent))" }} />
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
              What You Get
            </p>
          </div>

          <div className="space-y-3">
            {[
              "4 hours/day of dedicated expert time",
              "Direct Slack & video call access",
              "Sprint planning & priority guidance",
              "Emergency escalation & fire-fighting",
              "Monthly strategy & tech roadmap sessions",
            ].map((item, i) => (
              <motion.div key={item} {...fade(i + 4)} className="flex items-center gap-3">
                <CheckCircle size={20} style={{ color: "hsl(var(--pres-accent))", flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 18,
                    color: "hsl(var(--pres-text))",
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Pricing */}
          <div
            className="mt-6 rounded-xl flex items-center justify-between"
            style={{
              background: "hsl(var(--pres-accent) / 0.08)",
              border: "1px solid hsl(var(--pres-accent) / 0.2)",
              padding: "18px 22px",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: 36,
                  fontWeight: 700,
                  color: "hsl(var(--pres-text))",
                }}
              >
                $625
              </span>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  color: "hsl(var(--pres-text-dim))",
                }}
              >
                /hr
              </span>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 16,
                  color: "hsl(var(--pres-text-muted))",
                  marginLeft: 16,
                }}
              >
                $50,000/mo
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "hsl(var(--pres-accent))",
                }}
              >
                Add to any tier
              </span>
              <ArrowRight size={18} style={{ color: "hsl(var(--pres-accent))" }} />
            </div>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          {...fade(8)}
          className="absolute bottom-[50px] left-0 right-0 text-center z-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 18,
            color: "hsl(var(--pres-text-dim))",
            fontStyle: "italic",
          }}
        >
          "Purchase any tier and unlock access to a Chief Software Engineer who ensures your project succeeds."
        </motion.p>
      </div>
    </ScaledSlide>
  );
}
