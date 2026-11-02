import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Code2, Cpu, Users, DollarSign, Clock, Gift, ArrowRight } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import alimImg from "@/assets/alim-updated.webp";
import { fadeUp, staggerDelay } from "@/lib/presentationMotion";

interface PremiumExpertSlideV2Props {
  onNavigate?: (index: number) => void;
}

const pillars = [
  { icon: Cpu, title: "Architecture Strategy", desc: "Stop tech debt before code is written." },
  { icon: ShieldCheck, title: "Code & Security Audits", desc: "Weekly PR reviews and hardening." },
  { icon: Code2, title: "Blocker Resolution", desc: "A veteran steps in on hard bugs." },
  { icon: Users, title: "Engineer Mentorship", desc: "Your engineer delivers at a 10x standard." },
];

const stats = [
  { icon: Clock, value: "2–4 hrs/week", sub: "Varies by tier" },
  { icon: DollarSign, value: "$625/hr", sub: "Market rate for this expertise" },
  { icon: Gift, value: "Up to $10K", sub: "Monthly value — BONUS with your tier", highlight: true },
];

// Main-deck tier data (not the v1 reference's): pay prices from the
// pricing tiers, bonus values from the old valuation slide.
const bonusRows = [
  { name: "Tier 1 · Starter", pay: "$1,900/mo", get: "$2,500/mo FREE", hours: "2 hrs/wk" },
  { name: "Tier 2 · Growth", pay: "$4,299/mo", get: "$5,000/mo FREE", hours: "2 hrs/wk" },
  { name: "Tier 3.A · Skilled", pay: "$6,800/mo", get: "$7,500/mo FREE", hours: "3 hrs/wk" },
  { name: "Tier 3.B · Leadership", pay: "$7,500/mo", get: "$10,000/mo FREE", hours: "4 hrs/wk" },
];

/**
 * 2026-11-02 feedback round 2: slides 8 + 9 MERGED into one slide,
 * following the v1 reference slide 4 pattern exactly in structure:
 * eyebrow → headline with a gold-pill claim → top band (architect
 * profile + 3 value cards, the payoff card gold-tinted) → the 4
 * service pillars in one compact row → a full-width FREE Expert
 * Bonus panel with one row per tier: You pay → You get (green FREE
 * badge) → hours pill. That table is what makes "Chief Architect
 * Included" clear: the client pays for execution, expert oversight
 * is included at no extra cost. The old ExpertValuationBreakdownSlide
 * file stays in the repo unreferenced, so the merge is reversible.
 */
export const PremiumExpertSlideV2: React.FC<PremiumExpertSlideV2Props> = () => (
  <ScaledSlide>
    <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
      <SlideHeader />
      <div className="absolute top-1/3 left-1/4 w-[850px] h-[480px] rounded-full bg-pres-accent/8 blur-[170px] pointer-events-none" />

      <div className="relative z-10 w-full px-[100px] pt-[20px] flex flex-col">
        <motion.p {...fadeUp(0)} className="text-[18px] font-bold uppercase tracking-[0.2em] text-pres-accent mb-3">
          🎁 Bonus value — included with every tier
        </motion.p>
        <motion.h1 {...fadeUp(0.05)} className="pres-title font-bold font-heading tracking-tight mb-4">
          Buy Any Tier, Get a{" "}
          <span className="inline-block rounded-full bg-pres-accent text-pres-bg pres-dark-safe-accent px-5 py-1">
            $10K/mo Expert
          </span>{" "}
          Bonus
        </motion.h1>

        <div className="flex gap-6 mb-4">
          <motion.div
            {...fadeUp(0.12)}
            className="w-[340px] shrink-0 p-5 rounded-3xl bg-pres-surface/90 border border-pres-accent/40 shadow-2xl transition-[border-color,background-color,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-pres-accent/60 hover:shadow-[0_0_20px_hsl(var(--pres-accent)/0.2)]"
          >
            <div className="w-full h-[150px] rounded-2xl overflow-hidden mb-3 bg-black/50">
              <img src={alimImg} alt="Alim Ul Karim" className="w-full h-full object-cover object-top" />
            </div>
            <p className="font-bold text-[26px] font-heading leading-tight">Alim Ul Karim</p>
            <p className="text-[20px] text-pres-accent font-semibold">Chief Software Engineer</p>
            <p className="text-[18px] text-pres-text-muted">20+ Years Experience</p>
          </motion.div>

          <div className="flex-1 grid grid-cols-3 gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  {...fadeUp(staggerDelay(i, 0.18, 0.07))}
                  className={`p-6 rounded-3xl border shadow-xl flex flex-col justify-center transition-[border-color,background-color,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-pres-accent/60 hover:shadow-[0_0_20px_hsl(var(--pres-accent)/0.2)] ${s.highlight ? "bg-pres-accent/15 border-pres-accent" : "bg-pres-surface/75 border-white/10"}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-pres-accent/15 border border-pres-accent/30 flex items-center justify-center text-pres-accent mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className={`text-[36px] font-bold font-heading leading-tight ${s.highlight ? "text-pres-accent" : "text-white"}`}>{s.value}</div>
                  <p className="text-[20px] text-pres-text-muted">{s.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                {...fadeUp(staggerDelay(i, 0.28, 0.06))}
                className="p-5 rounded-3xl bg-pres-surface/75 border border-white/10 hover:border-pres-accent/60 hover:bg-pres-surface/90 flex flex-col justify-center shadow-xl transition-[border-color,background-color,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_0_20px_hsl(var(--pres-accent)/0.2)]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 rounded-xl bg-pres-accent/15 border border-pres-accent/30 flex items-center justify-center text-pres-accent shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[24px] font-bold font-heading leading-tight">{p.title}</h3>
                </div>
                <p className="text-[20px] text-pres-text-muted leading-snug">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeUp(0.4)} className="rounded-3xl border border-white/15 bg-pres-surface/70 p-5">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-11 h-11 rounded-xl bg-pres-accent flex items-center justify-center text-pres-bg pres-dark-safe-accent">
              <Gift className="w-6 h-6" />
            </div>
            <h2 className="text-[26px] font-bold font-heading">FREE Expert Bonus — Included With Every Tier</h2>
          </div>
          <p className="text-[20px] text-pres-text-muted italic mb-4 ml-[56px]">
            You pay for execution. Expert oversight is included at no extra cost.
          </p>
          <div className="flex flex-col gap-3">
            {bonusRows.map((r) => (
              <div key={r.name} className="flex items-center gap-4 rounded-full bg-black/40 border border-white/10 px-6 py-2">
                <span className="w-[220px] shrink-0 text-[22px] font-bold">{r.name}</span>
                <span className="text-[18px] text-pres-text-muted">You pay</span>
                <span className="text-[24px] font-bold text-pres-accent">{r.pay}</span>
                <ArrowRight className="w-5 h-5 text-pres-accent shrink-0" />
                <span className="text-[18px] text-pres-text-muted">You get</span>
                <span className="rounded-full bg-green-500/20 border border-green-400/50 px-4 py-1 text-[20px] font-bold text-green-400 whitespace-nowrap">
                  🎁 {r.get}
                </span>
                <span className="ml-auto rounded-full bg-white/10 border border-white/15 px-4 py-1 text-[18px] font-semibold whitespace-nowrap">
                  {r.hours}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
    </div>
  </ScaledSlide>
);
