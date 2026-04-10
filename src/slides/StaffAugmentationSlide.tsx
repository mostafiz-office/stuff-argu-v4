import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Users, TrendingUp, DollarSign, Layers } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const },
});

const pillars = [
  {
    icon: Users,
    title: "Dedicated Teams",
    desc: "Full-time developers embedded into your workflow, culture & tools — working as your own team.",
    stat: "✓",
    statLabel: "Success Guaranteed",
  },
  {
    icon: Layers,
    title: "Flexible Scaling",
    desc: "Scale your team up or down based on project demands — no long-term commitments required.",
    stat: "2 Weeks",
    statLabel: "Avg. Onboarding",
  },
  {
    icon: TrendingUp,
    title: "Tech Roles Available",
    desc: "Frontend, Backend, Full-Stack, QA, DevOps, AI/ML, UI/UX — all vetted and ready to deploy.",
    stat: "14+",
    statLabel: "Specializations",
  },
  {
    icon: DollarSign,
    title: "Cost & Time Savings",
    desc: "Save up to 60% compared to local hiring with zero recruitment overhead and faster time-to-productivity.",
    stat: "60%",
    statLabel: "Cost Savings",
  },
];

export default function StaffAugmentationSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Crosshatch background */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.04) 28px, hsl(var(--pres-accent) / 0.04) 29px),
              repeating-linear-gradient(-45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.04) 28px, hsl(var(--pres-accent) / 0.04) 29px)
            `,
          }}
        />

        {/* Accent glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: 400, top: 200, width: 1000, height: 600,
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.05) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Title — left side */}
        <div className="absolute left-[80px] top-[80px] z-10" style={{ maxWidth: 900 }}>
          <motion.h1
            {...fade(0)}
            className="font-heading"
            style={{
              fontSize: 82,
              fontWeight: 700,
              color: "hsl(var(--pres-text))",
              lineHeight: 1.05,
            }}
          >
             <span style={{ color: "hsl(var(--pres-accent))" }}>Staff</span> Augmentation
          </motion.h1>
          <motion.p
            {...fade(1)}
            className="font-body"
            style={{
              fontSize: 24,
              color: "hsl(var(--pres-text-muted))",
              marginTop: 20,
              lineHeight: 1.6,
              maxWidth: 560,
            }}
          >
             Extend your engineering capacity with Riseup-Asia's pre-vetted,
            dedicated professionals — integrated seamlessly into your existing teams.
          </motion.p>
        </div>

        {/* 2×2 card grid */}
        <div
          className="absolute z-10 grid grid-cols-2"
          style={{ left: 80, right: 80, bottom: 80, gap: 28, top: 420 }}
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                {...fade(i + 2)}
                className="rounded-2xl flex flex-col justify-between"
                style={{
                  background: "hsl(var(--pres-bg-surface))",
                  border: "1px solid hsl(var(--pres-accent) / 0.12)",
                  padding: "36px 40px",
                }}
              >
                <div>
                  <div className="flex items-center" style={{ gap: 14, marginBottom: 16 }}>
                    <div
                      className="flex items-center justify-center rounded-xl"
                      style={{
                        width: 52,
                        height: 52,
                        background: "hsl(var(--pres-accent) / 0.12)",
                      }}
                    >
                      <Icon size={26} style={{ color: "hsl(var(--pres-accent))" }} />
                    </div>
                    <span
                      className="font-heading"
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: "hsl(var(--pres-text))",
                      }}
                    >
                      {p.title}
                    </span>
                  </div>
                  <p
                    className="font-body"
                    style={{
                      fontSize: 19,
                      color: "hsl(var(--pres-text-muted))",
                      lineHeight: 1.55,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>

                {/* Stat badge */}
                <div className="flex items-end" style={{ gap: 10, marginTop: 18 }}>
                  <span
                    className="font-heading"
                    style={{
                      fontSize: 44,
                      fontWeight: 700,
                      color: "hsl(var(--pres-accent))",
                      lineHeight: 1,
                    }}
                  >
                    {p.stat}
                  </span>
                  <span
                    className="font-body"
                    style={{
                      fontSize: 17,
                      color: "hsl(var(--pres-text-dim))",
                      marginBottom: 4,
                    }}
                  >
                    {p.statLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: 4,
            background: "linear-gradient(90deg, hsl(var(--pres-accent)) 0%, hsl(var(--pres-accent) / 0.3) 50%, transparent 100%)",
          }}
        />
      </div>
    </ScaledSlide>
  );
}
