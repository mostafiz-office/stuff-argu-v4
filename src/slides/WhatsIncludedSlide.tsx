import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Clock, Shield, ShieldCheck, MessageSquare, Zap, Users, RefreshCw } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const },
});

const items = [
  { icon: Clock, title: "160 hrs/month", desc: "Guaranteed dedicated hours — full-time commitment to your project." },
  { icon: Shield, title: "7-Stage Vetting", desc: "Technical tests, live coding, English fluency, culture fit, and 4 more stages — only top 5% pass." },
  { icon: MessageSquare, title: "Direct Communication", desc: "Slack, Teams, or your preferred tool — no middlemen, no delays." },
  { icon: Zap, title: "Hire in 20 Minutes", desc: "Pre-vetted bench talent ready to start immediately. Niche roles filled within 30 days." },
  { icon: Users, title: "Flexible Scaling", desc: "Add or reduce team members as your project evolves. No lock-in." },
  { icon: RefreshCw, title: "Free Replacement", desc: "Not satisfied? We'll replace the developer at no extra cost." },
];

export default function WhatsIncludedSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: "50%", top: "50%", width: 800, height: 600,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.05) 0%, transparent 65%)",
            filter: "blur(60px)",
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
          What's <span style={{ color: "hsl(var(--pres-accent))" }}>Included</span>
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
          Every plan comes with these guarantees — no extra charges.
        </motion.p>

        {/* 3×2 grid */}
        <div className="absolute left-[80px] right-[80px] top-[260px] bottom-[175px] grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-4 z-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                {...fade(i + 2)}
                className="rounded-2xl flex flex-col"
                style={{
                  background: "hsl(var(--pres-bg-surface))",
                  border: "1px solid hsl(var(--pres-accent) / 0.1)",
                  padding: "32px 28px",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-xl mb-4"
                  style={{
                    width: 52, height: 52,
                    background: "hsl(var(--pres-accent) / 0.12)",
                  }}
                >
                  <Icon size={26} style={{ color: "hsl(var(--pres-accent))" }} />
                </div>
                <p
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "hsl(var(--pres-text))",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 17,
                    color: "hsl(var(--pres-text-muted))",
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trial note below all cards */}
        <motion.p
          {...fade(8)}
          className="absolute left-[80px] right-[80px] bottom-[82px] z-10 flex items-center justify-center gap-2"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 20,
            color: "hsl(var(--pres-text-muted))",
          }}
        >
          <ShieldCheck size={20} style={{ color: "hsl(var(--pres-accent))", flexShrink: 0 }} />
          14-day trial with money-back guarantee (conditions apply).
        </motion.p>
      </div>
    </ScaledSlide>
  );
}
