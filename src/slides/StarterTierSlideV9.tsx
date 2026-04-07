import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import HoverVideoPreview from "@/components/presentation/HoverVideoPreview";
import RocketAnimation from "@/components/presentation/RocketAnimation";
import { motion } from "framer-motion";
import { CheckCircle, Crown, Shield, Clock, Flame, ArrowUpRight, BadgeCheck } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const features = [
  "3+ yrs coding, 1+ yr industry exp",
  "160 dedicated hours/month",
  "Tech-stack specific developer",
  "Task guidance from senior lead",
  "Daily standups & Slack access",
  "Weekly progress reports",
];

const guarantees = [
  { icon: Shield, title: "Zero Risk", desc: "Cancel anytime. No lock-in contracts." },
  { icon: Clock, title: "20 Min Onboarding", desc: "Developer matched & shipping in under an hour." },
  { icon: BadgeCheck, title: "Top 5% Engineers", desc: "Rigorously vetted. Only the best pass." },
];

const results = [
  { metric: "3x", label: "Faster than hiring", tooltip: "Skip 3-month hiring cycles — your developer starts in 20 minutes" },
  { metric: "160h", label: "Pure dev time/mo", tooltip: "160 dedicated development hours per month, fully focused on your project" },
  { metric: "$11,999", label: "Expert bonus included", tooltip: "Alim's expert oversight valued at $11,999/mo — included as a bonus with your tier" },
];

export default function StarterTierSlideV9() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <div
          className="absolute z-[1]"
          style={{
            left: "35%",
            top: "50%",
            width: 800,
            height: 600,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        <motion.h1
          {...fade(0)}
          className="absolute left-[80px] top-[85px] z-10"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 48,
            fontWeight: 700,
            color: "hsl(var(--pres-text))",
          }}
        >
          Zero Risk. <span style={{ color: "hsl(var(--pres-accent))" }}>All Upside.</span>
        </motion.h1>

        <motion.p
          {...fade(1)}
          className="absolute left-[80px] top-[148px] z-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 17,
            color: "hsl(var(--pres-text-muted))",
            maxWidth: 700,
          }}
        >
          We removed every excuse not to start. No contracts. No hiring risk. Just results.
        </motion.p>

        <div className="absolute left-[80px] right-[80px] top-[200px] bottom-[60px] flex gap-8 z-10">
          {/* LEFT — Same pricing card */}
          <HoverVideoPreview youtubeId="uveR9C5CgSY" position="right">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-2xl flex flex-col relative overflow-hidden h-full"
              style={{
                width: 560,
                flexShrink: 0,
                background: "linear-gradient(180deg, hsl(var(--pres-accent) / 0.1) 0%, hsl(var(--pres-bg-surface)) 100%)",
                border: "2px solid hsl(var(--pres-accent))",
                padding: "28px 24px",
              }}
            >
              <div className="absolute top-0 right-0 flex items-center gap-2 px-3 py-1.5 rounded-bl-xl" style={{ background: "hsl(var(--pres-accent))", color: "hsl(var(--pres-bg))", fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.05em" }}>
                STARTER
              </div>

              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, color: "hsl(var(--pres-text-dim))", letterSpacing: "0.12em", textTransform: "uppercase" }}>Tier 1</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: "hsl(var(--pres-accent))", fontWeight: 500, marginTop: 6 }}>3+ Years Coding · 1+ Year Industry</p>

              <div className="mt-3">
                <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 48, fontWeight: 700, color: "hsl(var(--pres-text))" }}>$1,900</span>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: "hsl(var(--pres-text-dim))" }}>/mo</span>
              </div>

              <div className="mt-2 inline-flex items-center rounded-lg px-3 py-1.5" style={{ background: "hsl(var(--pres-accent) / 0.08)", border: "1px solid hsl(var(--pres-accent) / 0.15)", width: "fit-content" }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, color: "hsl(var(--pres-accent))" }}>160 hrs/month</span>
              </div>

              <RocketAnimation intensity={1} profile="compact" flyingLabel="Growth booster" />

              <div className="mt-3 space-y-3 flex-1">
                {features.map((feature, i) => (
                  <motion.div key={feature} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }} className="flex items-start gap-2">
                    <CheckCircle size={18} style={{ color: "hsl(var(--pres-accent))", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: "hsl(var(--pres-text-muted))", lineHeight: 1.4 }}>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-3 rounded-2xl relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(45 90% 55% / 0.15), hsl(45 90% 55% / 0.05))", border: "2px solid hsl(45 90% 55% / 0.5)", padding: "20px 22px", boxShadow: "0 0 30px hsl(45 90% 55% / 0.1)" }}>
                <div className="absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none" style={{ background: "radial-gradient(circle at 90% 50%, hsl(45 90% 55% / 0.12), transparent 70%)" }} />
                <div className="flex items-center gap-2 mb-2">
                  <Crown size={20} style={{ color: "hsl(45 90% 55%)" }} />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, color: "hsl(45 90% 55%)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Want Alim's Direct Support?</span>
                </div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, fontWeight: 600, color: "hsl(var(--pres-text))", lineHeight: 1.4 }}>Alim Ul Karim — Chief Software Engineer</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "hsl(var(--pres-text-muted))", lineHeight: 1.4, marginTop: 4 }}>
                  4h/day · <strong style={{ color: "hsl(var(--pres-accent))", fontSize: 16 }}>$625/hr</strong> · <strong style={{ color: "hsl(45 90% 55%)", fontSize: 16 }}>$11,999/mo</strong> value
                </p>
                <div className="mt-3 flex items-center gap-2 rounded-lg px-4 py-2" style={{ background: "hsl(45 90% 55% / 0.15)", border: "1.5px solid hsl(45 90% 55% / 0.35)", width: "fit-content" }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: "hsl(45 90% 55%)" }}>↑ Upgrade to Tier 2 or 3 to unlock</span>
                </div>
              </div>
            </motion.div>
          </HoverVideoPreview>

          {/* RIGHT — Risk Reversal + Results */}
          <motion.div {...fade(2)} className="flex flex-col justify-center gap-5 flex-1">
            {/* Results row — 3 big metrics */}
            <div className="flex gap-3">
              <TooltipProvider delayDuration={200}>
                {results.map((r, i) => (
                  <Tooltip key={r.label}>
                    <TooltipTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 150, damping: 14 }}
                        className="flex-1 rounded-xl text-center cursor-pointer"
                        style={{
                          background: "linear-gradient(160deg, hsl(var(--pres-accent) / 0.12), hsl(var(--pres-bg-surface)))",
                          border: "1.5px solid hsl(var(--pres-accent) / 0.2)",
                          padding: "18px 12px",
                        }}
                      >
                        <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 36, fontWeight: 700, color: "hsl(var(--pres-accent))", display: "block" }}>
                          {r.metric}
                        </span>
                        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 500, color: "hsl(var(--pres-text-muted))" }}>
                          {r.label}
                        </span>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="max-w-[260px] text-center"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13 }}
                    >
                      {r.tooltip}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>

            {/* Guarantee cards */}
            <div className="space-y-3">
              {guarantees.map((g, i) => {
                const Icon = g.icon;
                return (
                  <motion.div
                    key={g.title}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.12, duration: 0.45 }}
                    className="rounded-xl flex items-center gap-4"
                    style={{
                      background: "hsl(var(--pres-bg-surface))",
                      border: "1px solid hsl(var(--pres-accent) / 0.1)",
                      padding: "18px 20px",
                    }}
                  >
                    <div
                      className="flex items-center justify-center rounded-lg flex-shrink-0"
                      style={{
                        width: 44,
                        height: 44,
                        background: "hsl(var(--pres-accent) / 0.1)",
                        border: "1px solid hsl(var(--pres-accent) / 0.2)",
                      }}
                    >
                      <Icon size={20} style={{ color: "hsl(var(--pres-accent))" }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 20, fontWeight: 700, color: "hsl(var(--pres-text))", marginBottom: 2 }}>
                        {g.title}
                      </p>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "hsl(var(--pres-text-muted))", lineHeight: 1.4 }}>
                        {g.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Urgency CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="rounded-xl flex items-center gap-3"
              style={{
                background: "linear-gradient(90deg, hsl(25 95% 53% / 0.12), hsl(var(--pres-accent) / 0.08))",
                border: "1.5px solid hsl(25 95% 53% / 0.35)",
                padding: "16px 20px",
              }}
            >
              <Flame size={22} style={{ color: "hsl(25 95% 53%)" }} />
              <div className="flex-1">
                <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 18, fontWeight: 700, color: "hsl(var(--pres-text))" }}>
                  Limited Slots This Quarter
                </p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "hsl(var(--pres-text-muted))" }}>
                  We cap clients to maintain quality. Start today before spots fill.
                </p>
              </div>
              <ArrowUpRight size={20} style={{ color: "hsl(25 95% 53%)" }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
