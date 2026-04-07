import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Rocket, Package, Code2, Users, MessageSquare, BarChart3, Crown, CheckCircle } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const deliverables = [
  {
    icon: Code2,
    title: "Production-Ready Code",
    desc: "160 hours of focused, shipping-quality output every month",
  },
  {
    icon: Users,
    title: "Senior-Led Development",
    desc: "Every task guided by an experienced lead — no guesswork",
  },
  {
    icon: MessageSquare,
    title: "Daily Standups & Slack",
    desc: "Embedded in your workflow with real-time communication",
  },
  {
    icon: BarChart3,
    title: "Weekly Progress Reports",
    desc: "Full visibility into what's built, what's next, and blockers",
  },
  {
    icon: Package,
    title: "Tech-Stack Match",
    desc: "Developer matched to your exact stack — productive from Day 1",
  },
];

export default function StarterTierSlideV4() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <div
          className="absolute z-[1]"
          style={{
            left: "30%",
            top: "50%",
            width: 800,
            height: 600,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.07) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        {/* Header */}
        <div className="absolute left-[80px] right-[80px] top-[70px] z-10">
          <motion.div {...fade(0)} className="flex items-center gap-3 mb-3">
            <div
              className="flex items-center justify-center rounded-xl"
              style={{
                width: 44,
                height: 44,
                background: "hsl(var(--pres-accent) / 0.12)",
                border: "1px solid hsl(var(--pres-accent) / 0.25)",
              }}
            >
              <Rocket size={22} style={{ color: "hsl(var(--pres-accent))" }} />
            </div>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "hsl(var(--pres-accent))",
              }}
            >
              Tier 1 · Starter
            </span>
          </motion.div>
          <motion.h1
            {...fade(1)}
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "hsl(var(--pres-text))",
            }}
          >
            What You <span style={{ color: "hsl(var(--pres-accent))" }}>Actually Get</span>
          </motion.h1>
          <motion.p
            {...fade(2)}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 19,
              color: "hsl(var(--pres-text-muted))",
              marginTop: 8,
              maxWidth: 700,
            }}
          >
            Not just a developer — a full delivery system designed to ship your product.
          </motion.p>
        </div>

        {/* Content: Left deliverables + Right bonus card */}
        <div className="absolute left-[80px] right-[80px] top-[240px] bottom-[50px] z-10 flex gap-6">
          {/* LEFT — deliverables list */}
          <div className="flex flex-col gap-3 flex-1 justify-between">
            {deliverables.map((d, i) => (
              <motion.div
                key={d.title}
                {...fade(i + 3)}
                className="rounded-xl flex items-start gap-4 flex-1"
                style={{
                  background: "hsl(var(--pres-bg-surface))",
                  border: "1px solid hsl(var(--pres-accent) / 0.08)",
                  padding: "16px 18px",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{
                    width: 42,
                    height: 42,
                    background: "hsl(var(--pres-accent) / 0.1)",
                  }}
                >
                  <d.icon size={20} style={{ color: "hsl(var(--pres-accent))" }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Ubuntu', sans-serif",
                      fontSize: 19,
                      fontWeight: 700,
                      color: "hsl(var(--pres-text))",
                      marginBottom: 2,
                    }}
                  >
                    {d.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 14,
                      color: "hsl(var(--pres-text-muted))",
                      lineHeight: 1.5,
                    }}
                  >
                    {d.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Price + Bonus */}
          <motion.div
            {...fade(4)}
            className="flex flex-col justify-between"
            style={{ width: 400, flexShrink: 0 }}
          >
            {/* Price card */}
            <div
              className="rounded-2xl"
              style={{
                background: "linear-gradient(160deg, hsl(var(--pres-accent) / 0.12), hsl(var(--pres-bg-surface)))",
                border: "2px solid hsl(var(--pres-accent) / 0.3)",
                padding: "28px 26px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "hsl(var(--pres-text-dim))",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                All of this for
              </p>
              <div className="flex items-baseline gap-2">
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 56,
                    fontWeight: 700,
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  $1,900
                </span>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 18,
                    color: "hsl(var(--pres-text-dim))",
                  }}
                >
                  /mo
                </span>
              </div>
              <div
                className="mt-3 inline-flex items-center rounded-full px-4 py-1.5"
                style={{
                  background: "hsl(var(--pres-accent) / 0.1)",
                  border: "1px solid hsl(var(--pres-accent) / 0.2)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "hsl(var(--pres-accent))",
                  }}
                >
                  160 hrs/month · Full-time
                </span>
              </div>
            </div>

            {/* Bonus card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="rounded-2xl mt-5"
              style={{
                background: "linear-gradient(135deg, hsl(45 100% 50% / 0.1), hsl(var(--pres-accent) / 0.06))",
                border: "2px solid hsl(45 100% 50% / 0.35)",
                padding: "22px 22px",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Crown size={18} style={{ color: "hsl(45 100% 50%)" }} />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "hsl(45 100% 50%)",
                  }}
                >
                  🎁 Bonus — Included Free
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "hsl(var(--pres-text))",
                  lineHeight: 1.2,
                }}
              >
                Alim Ul Karim's Expert Oversight
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13,
                  color: "hsl(var(--pres-text-muted))",
                  marginTop: 4,
                }}
              >
                Chief Engineer · 80 hrs/mo · Architecture & Code Reviews
              </p>
              <p
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "hsl(45 100% 50%)",
                  marginTop: 8,
                }}
              >
                Worth $50,000/mo
              </p>
            </motion.div>

            {/* Trust items */}
            <div className="flex flex-col gap-2 mt-5">
              {["Cancel anytime", "Start in 20 minutes", "Top 5% vetted engineers"].map((t, i) => (
                <motion.div key={t} {...fade(8 + i)} className="flex items-center gap-2">
                  <CheckCircle size={15} style={{ color: "hsl(var(--pres-accent))" }} />
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 14,
                      color: "hsl(var(--pres-text-muted))",
                    }}
                  >
                    {t}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
