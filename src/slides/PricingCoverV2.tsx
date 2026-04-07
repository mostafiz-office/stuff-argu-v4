import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Users, ArrowRight, Shield, Clock, Award, Linkedin, MoveRight } from "lucide-react";
import alimPhoto from "@/assets/alim-updated.png";
import marekImg from "@/assets/testimonials/marek-f.png";
import konstantinosImg from "@/assets/testimonials/konstantinos-p.png";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2 * i, duration: 0.7, ease: "easeOut" as const },
});

const keywords = [
  { label: "Top 1% Talent", icon: Award, x: 1380, y: 120 },
  { label: "Hire in 20 Min", icon: Clock, x: 1400, y: 340 },
  { label: "7-Stage Vetted", icon: Shield, x: 1360, y: 560 },
];

const recommendations = [
  {
    name: "Konstantinos P.",
    title: "Senior Serverless Engineer",
    quote: '"Solid and high quality work... the smoothest on-boarding process I have had in my whole career."',
    image: konstantinosImg,
  },
  {
    name: "Marek Flejszman",
    title: "Head of Software Development",
    quote: '"Most competent and talented developers I knew... talented architect and team leader."',
    image: marekImg,
  },
];

const ALIM_LINK = "https://www.linkedin.com/in/alimkarim/details/recommendations/?detailScreenTabIndex=0";

/**
 * VERSION 2 — Centered Hero with Side Pills
 * Alim centered-right, pills stacked vertically on far right, testimonials as bottom bar
 */
export default function PricingCoverV2() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Ambient glow behind Alim */}
        <div
          className="absolute z-[1]"
          style={{
            left: "55%", top: "45%", width: 600, height: 600,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.08) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        {/* Left glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: 0, top: 100, width: 600, height: 500,
            background: "radial-gradient(ellipse at 30% 50%, hsl(var(--pres-accent) / 0.05) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Alim photo — centered-right, smaller */}
        <div
          className="absolute z-[4] flex items-end justify-center pointer-events-none"
          style={{ left: 480, bottom: -20, width: 1100, height: "160%" }}
        >
          <img
            src={alimPhoto} alt="Alim UL Karim" loading="eager" fetchPriority="high"
            className="h-full object-contain object-bottom"
            style={{ filter: "drop-shadow(0 20px 60px hsl(var(--pres-bg) / 0.7))", transform: "scale(1.15)" }}
          />
        </div>

        {/* Vertical pill badges on far right */}
        {keywords.map((kw, i) => {
          const Icon = kw.icon;
          return (
            <motion.div
              key={kw.label}
              initial={{ opacity: 0, x: 40 }}
              animate={{
                opacity: 1, x: 0,
                boxShadow: [
                  "0 0 8px hsl(var(--pres-accent) / 0.15)",
                  "0 0 20px hsl(var(--pres-accent) / 0.35)",
                  "0 0 8px hsl(var(--pres-accent) / 0.15)",
                ],
              }}
              whileHover={{ scale: 1.1, x: -8, boxShadow: "0 0 35px hsl(var(--pres-accent) / 0.55)" }}
              transition={{
                delay: 0.6 + i * 0.15,
                type: "spring", stiffness: 160, damping: 14,
                boxShadow: { delay: 1.3 + i * 0.25, duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
              }}
              className="absolute z-[7] cursor-pointer flex items-center gap-3"
              style={{
                left: kw.x, top: kw.y,
                padding: "14px 28px", fontSize: 20, fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                color: "hsl(var(--pres-accent))",
                background: "hsl(var(--pres-accent) / 0.1)",
                border: "1.5px solid hsl(var(--pres-accent) / 0.3)",
                borderRadius: 16, backdropFilter: "blur(12px)", whiteSpace: "nowrap",
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "hsl(var(--pres-accent) / 0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={20} style={{ color: "hsl(var(--pres-accent))" }} />
              </div>
              {kw.label}
            </motion.div>
          );
        })}

        {/* LEFT — Content */}
        <div className="pointer-events-none absolute left-[80px] top-[100px] bottom-[220px] z-10 flex w-[580px] items-center">
          <div>
            <motion.div {...fade(0)} className="flex items-center justify-center rounded-2xl"
              style={{ width: 70, height: 70, background: "hsl(var(--pres-accent) / 0.12)", border: "1px solid hsl(var(--pres-accent) / 0.25)", marginBottom: 28 }}>
              <Users size={36} style={{ color: "hsl(var(--pres-accent))" }} />
            </motion.div>

            <motion.p {...fade(1)} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: "hsl(var(--pres-text-dim))", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 14 }}>
              Staff Augmentation
            </motion.p>

            <motion.h1 {...fade(2)} style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 78, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.05 }}>
              <span style={{ color: "hsl(var(--pres-accent))" }}>Elite</span> Engineers
              <br />On Demand
            </motion.h1>

            <motion.p {...fade(3)} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, color: "hsl(var(--pres-text-muted))", marginTop: 24, maxWidth: 520, lineHeight: 1.6 }}>
              Access the <strong style={{ color: "hsl(var(--pres-accent))" }}>top 1%</strong> of global engineering talent.
              <br />Fully vetted. Ready in <strong style={{ color: "hsl(var(--pres-accent))" }}>20 minutes</strong>.
            </motion.p>

            <motion.div {...fade(4)} className="flex items-center gap-3 mt-10">
              <div className="pointer-events-auto cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 600, color: "hsl(var(--pres-bg))", background: "hsl(var(--pres-accent))", padding: "14px 36px", borderRadius: 50, display: "flex", alignItems: "center", gap: 10 }}>
                Explore Plans <ArrowRight size={20} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom testimonial bar */}
        <div className="absolute left-[80px] right-[80px] bottom-[50px] z-[8] grid grid-cols-2 gap-6">
          {recommendations.map((rec, i) => (
            <motion.a
              key={rec.name}
              href={ALIM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
              className="block"
              style={{
                padding: "16px 22px", borderRadius: 16,
                background: "hsl(var(--pres-bg) / 0.8)",
                border: "1px solid hsl(var(--pres-accent) / 0.15)",
                backdropFilter: "blur(14px)", textDecoration: "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden", border: "2px solid hsl(var(--pres-accent) / 0.3)", flexShrink: 0 }}>
                  <img src={rec.image} alt={rec.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 18, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.2 }}>{rec.name}</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "hsl(var(--pres-text-muted))", lineHeight: 1.3 }}>{rec.title}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 16, background: "hsl(210 90% 55% / 0.12)", border: "1px solid hsl(210 90% 55% / 0.25)", flexShrink: 0 }}>
                  <Linkedin size={13} style={{ color: "hsl(210 90% 55%)" }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: "hsl(210 90% 55%)" }}>Verified</span>
                </div>
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, lineHeight: 1.5, color: "hsl(var(--pres-text-muted))", fontStyle: "italic" }}>{rec.quote}</p>
            </motion.a>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ height: 4, background: "linear-gradient(90deg, transparent 0%, hsl(var(--pres-accent)) 50%, transparent 100%)" }} />
      </div>
    </ScaledSlide>
  );
}
