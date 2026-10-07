import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp } from "@/lib/presentationMotion";

// Exact copy of reference deck slide 6 ("How We Find the Top 5%").
type Stage = {
  title: string;
  sub: string;
  badge: string;
  icon: string;
  detail: string;
  color: string;
  darkText?: boolean;
};

const STAGES: Stage[] = [
  {
    title: "Initial Sign-Up",
    sub: "Aptitude-Filtered Sign-Ups • 20 / 1,000",
    badge: "20 / 1,000",
    icon: "📣",
    color: "hsl(200, 80%, 50%)",
    detail:
      "Targeted ads across Malaysia, Indonesia, Pakistan, Philippines, India & Bangladesh reach thousands of engineers. Sign-up requires detailed alertness, adaptiveness & aptitude screening — only 20 of every 1,000 candidates qualify to proceed.",
  },
  {
    title: "Training & Assessment",
    sub: "Foundational Modules • 3–5 Layers",
    badge: "3–5 Layers",
    icon: "📘",
    color: "hsl(160, 70%, 42%)",
    detail:
      "Candidates receive 3–5 layered training modules covering memory training, structured note-taking and professional work habits. They must submit graded assignments against each module to advance.",
  },
  {
    title: "Practical Assignment (with & without AI)",
    sub: "Expert-Designed Build • 20–25 hrs",
    badge: "20–25 hrs",
    icon: "🧠",
    color: "hsl(35, 90%, 55%)",
    darkText: true,
    detail:
      "A real 2–3 month build compressed into 20–25 hours. Designed by 20-year engineering leaders. Split into AI-assisted and AI-free parts — solvable only by true experts. Those who don't understand cannot complete it even with AI.",
  },
  {
    title: "Client-Specific Simulation",
    sub: "AI / No-AI · Client Stack • 2 Modes",
    badge: "2 Modes",
    icon: "🎯",
    color: "hsl(350, 75%, 55%)",
    detail:
      "Tasks modeled on the actual client's stack and simulated environment. Two parts — with AI and without AI. Also tests research skills and searchability to ensure adaptability to any environment.",
  },
  {
    title: "Live Test & Hire",
    sub: "1 hr Proctored · No AI • Top 5%",
    badge: "Top 5%",
    icon: "🤝",
    color: "rgba(255,173,1,0.35)",
    detail:
      "1-hour live coding test — no internet, no AI, proctor present. After passing, candidates move to negotiation, profile review and onboarding to your team. Only the top 5% of assignment-stage candidates make it here.",
  },
];

// Geometry copied from the reference SVG (viewBox 1340×800).
const POLYS = [
  "120,720 840,720 759.16,571.8 200.84,571.8",
  "197.56,577.8 762.44,577.8 694.36,453 265.64,453",
  "262.36,459 697.64,459 629.56,334.2 330.44,334.2",
  "327.16,340.2 632.84,340.2 557.56,202.2 402.44,202.2",
  "399.16,208.2 560.84,208.2 480,60 480,60",
];
const CY = [647.4, 515.4, 396.6, 271.2, 132.6];
const LINE_X1 = [800.4, 728.4, 663.6, 595.2, 520.8];
const GRADS: [string, string][] = [
  ["hsl(200, 80%, 50%)", "hsl(200, 80%, 42%)"],
  ["hsl(160, 70%, 42%)", "hsl(160, 70%, 34%)"],
  ["hsl(35, 90%, 55%)", "hsl(35, 90%, 45%)"],
  ["hsl(350, 75%, 55%)", "hsl(350, 75%, 45%)"],
  ["rgba(255,173,1,0.4)", "rgba(255,173,1,0.15)"],
];
const ACCENTS = ["hsl(200, 80%, 50%)", "hsl(160, 70%, 42%)", "hsl(35, 90%, 55%)", "hsl(350, 75%, 55%)", "hsl(41, 100%, 50%)"];

export const TalentPyramidSlide: React.FC = () => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <ScaledSlide>
      <section className="slide-dark-bg relative h-[1080px] w-[1920px] overflow-hidden font-sans text-pres-text">
        <SlideHeader />

        <div className="absolute left-[80px] top-[100px] z-20" style={{ width: 540 }}>
          <motion.h1 {...fadeUp(0.05, 24)} className="font-heading" style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            How We Find
            <br />
            the <span className="text-pres-accent">Top 5%</span>
          </motion.h1>
          <motion.p {...fadeUp(0.12, 20)} className="font-body text-pres-text-dim" style={{ fontSize: 22, marginTop: 18, lineHeight: 1.6 }}>
            From every assignment-stage cohort, only the <strong className="text-pres-accent">Top 5%</strong> make the cut.
          </motion.p>
          <motion.div {...fadeUp(0.2, 20)} className="mt-10 flex gap-8">
            {[
              ["1,000+", "Applicants sourced"],
              ["Top 5%", "Of assignment pool"],
              ["5 Stages", "Rigorous screening"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-heading font-bold text-pres-accent" style={{ fontSize: 36 }}>{v}</div>
                <div className="font-body text-pres-text-dim" style={{ fontSize: 16, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute z-10" style={{ left: 540, top: 80, width: 1360, height: 920 }}>
          <svg viewBox="0 0 1340 800" className="h-full w-full" style={{ overflow: "visible" }}>
            <defs>
              {GRADS.map(([a, b], i) => (
                <linearGradient key={i} id={`pyrGrad${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={a} />
                  <stop offset="100%" stopColor={b} />
                </linearGradient>
              ))}
              <filter id="pyrShadow" x="-10%" y="-10%" width="120%" height="130%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.5)" />
              </filter>
            </defs>

            {POLYS.map((pts, i) => (
              <motion.polygon
                key={pts}
                points={pts}
                fill={`url(#pyrGrad${i})`}
                filter="url(#pyrShadow)"
                strokeLinejoin="round"
                stroke={hover === i ? "white" : i === 4 ? "rgba(255,173,1,0.5)" : "rgba(0,0,0,0.3)"}
                strokeWidth={hover === i ? 3 : i === 4 ? 2 : 1.5}
                style={{ cursor: "pointer", transformBox: "fill-box", transformOrigin: "50% 50%" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: hover === null || hover === i ? 1 : 0.55, y: 0, scale: hover === i ? 1.03 : 1 }}
                transition={{ delay: hover === null ? 0.15 + i * 0.1 : 0, duration: 0.35 }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              />
            ))}

            {CY.map((cy, i) => (
              <motion.g key={i} style={{ pointerEvents: "none" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.1 }}>
                <circle cx={480} cy={cy} r={i === 4 ? 28 : 24} fill="rgba(0,0,0,0.5)" stroke="white" strokeWidth={2} />
                <text x={480} y={cy + 1} fill="white" fontFamily="var(--font-heading, 'Ubuntu', sans-serif)" fontWeight={700} fontSize={i === 4 ? 26 : 22} textAnchor="middle" dominantBaseline="central">
                  {i + 1}
                </text>
              </motion.g>
            ))}

            {STAGES.map((s, i) => {
              const cy = CY[i];
              const x2 = LINE_X1[i] + 36;
              const active = hover === i;
              const fg = s.darkText ? "hsl(var(--pres-bg))" : "hsl(var(--pres-text))";
              return (
                <motion.g
                  key={s.title}
                  style={{ cursor: "pointer" }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                >
                  <rect x={x2} y={cy - 34} width={424} height={68} fill="transparent" pointerEvents="all" />
                  <line x1={LINE_X1[i]} y1={cy} x2={x2} y2={cy} stroke={ACCENTS[i]} strokeWidth={2} opacity={0.6} />
                  <motion.g
                    style={{ transformBox: "fill-box", transformOrigin: "0% 50%" }}
                    animate={{ scale: active ? 1.08 : 1, x: active ? 8 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <rect x={x2} y={cy - 28} width={360} height={56} rx={6} fill={s.color} opacity={active ? 1 : 0.85} strokeWidth={2} stroke={active ? "white" : i === 4 ? "rgba(255,173,1,0.5)" : "rgba(255,255,255,0)"} />
                    <text x={x2 + 16} y={cy - 6} fill={fg} fontFamily="var(--font-heading, 'Ubuntu', sans-serif)" fontWeight={700} fontSize={17}>{s.title}</text>
                    <text x={x2 + 16} y={cy + 14} fill={s.darkText ? fg : "hsl(var(--pres-text) / 0.85)"} fontFamily="var(--font-body, 'Poppins', sans-serif)" fontSize={13}>{s.sub}</text>
                    <text x={x2 + 324} y={cy + 6} fontSize={24} textAnchor="middle" dominantBaseline="central">{s.icon}</text>
                  </motion.g>
                </motion.g>
              );
            })}
          </svg>

          <AnimatePresence>
            {hover !== null && (
              <motion.div
                key={hover}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="pointer-events-none absolute z-30 rounded-[10px] bg-pres-bg/95 p-5 shadow-2xl"
                style={{
                  left: 0,
                  top: Math.min(CY[hover] * 1.015 + 60 + 40, 640),
                  width: 400,
                  border: `2px solid ${ACCENTS[hover]}`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 font-heading text-[19px] font-bold" style={{ color: ACCENTS[hover] }}>
                    <span className="h-[9px] w-[9px] shrink-0 rounded-full" style={{ background: ACCENTS[hover] }} />
                    {STAGES[hover].title}
                  </div>
                  <div className="shrink-0 font-heading text-[21px] font-bold text-pres-accent">{STAGES[hover].badge}</div>
                </div>
                <p className="mt-3 font-body text-[16px] leading-[1.55] text-pres-text">{STAGES[hover].detail}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute bottom-[80px] left-[80px] z-20 font-body text-[16px] text-pres-text-dim/60">Hover the pyramid for details</div>
      </section>
    </ScaledSlide>
  );
};
