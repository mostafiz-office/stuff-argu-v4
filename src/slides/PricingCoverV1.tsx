import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Users, ArrowRight, CheckCircle, Linkedin, MoveRight } from "lucide-react";
import alimPhoto from "@/assets/alim-updated.png";
import claudioImg from "@/assets/testimonials/claudio-c.png";
import konstantinosImg from "@/assets/testimonials/konstantinos-p.png";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2 * i, duration: 0.7, ease: "easeOut" as const },
});

const keywords = [
  { label: "Top 5% Talent", x: 1420, y: 160 },
  { label: "Hire in 20 Minutes", x: 780, y: 640 },
  { label: "7-Stage Vetted", x: 1420, y: 420 },
];

const recommendations = [
  {
    name: "Konstantinos P.",
    title: "Senior Serverless Engineer",
    quote: '"Solid and high quality work... the smoothest on-boarding process I have had in my whole career."',
    image: konstantinosImg,
    x: 460,
    y: 60,
  },
  {
    name: "Claudio C.",
    title: "Engineering Leader | AI-Powered Platforms",
    quote: '"A skillful professional and kind communicator."',
    image: claudioImg,
    x: 1150,
    y: 780,
  },
];

const ALIM_LINK = "https://www.linkedin.com/in/alimkarim/details/recommendations/?detailScreenTabIndex=0";

/**
 * VERSION 1 — Clean & Minimal
 * Removed dot pattern, updated pills to hiring copy, slightly smaller Alim image
 */
export default function PricingCoverV1() {

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Left glow — subtle warm accent */}
        <div
          className="absolute z-[1]"
          style={{
            left: 40,
            top: 180,
            width: 680,
            height: 500,
            background: "radial-gradient(ellipse at 40% 50%, hsl(var(--pres-accent) / 0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />


        {/* Skill keyword badges */}
        {keywords.map((kw, i) => (
          <motion.div
            key={kw.label}
            initial={{ opacity: 0, scale: 0.3, y: 20 }}
            animate={{
              opacity: 1, scale: 1, y: [0, -6, 0],
              boxShadow: [
                "0 0 8px hsl(var(--pres-accent) / 0.15)",
                "0 0 20px hsl(var(--pres-accent) / 0.35)",
                "0 0 8px hsl(var(--pres-accent) / 0.15)",
              ],
            }}
            whileHover={{ scale: 1.18, y: -10, boxShadow: "0 0 35px hsl(var(--pres-accent) / 0.55)" }}
            transition={{
              delay: 0.5 + i * 0.12,
              type: "spring", stiffness: 180, damping: 14,
              y: { delay: 1.2 + i * 0.3, duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
              boxShadow: { delay: 1.3 + i * 0.25, duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
            }}
            className="absolute z-[7] cursor-pointer flex items-center"
            style={{
              left: kw.x, top: kw.y,
              padding: "10px 26px", fontSize: 20, fontWeight: 600,
              fontFamily: "'Poppins', sans-serif",
              color: "hsl(var(--pres-accent))",
              background: "hsl(var(--pres-accent) / 0.1)",
              border: "1.5px solid hsl(var(--pres-accent) / 0.3)",
              borderRadius: 24, backdropFilter: "blur(8px)", whiteSpace: "nowrap",
            }}
          >
            <CheckCircle size={19} style={{ marginRight: 6, flexShrink: 0 }} />
            {kw.label}
          </motion.div>
        ))}

        {/* Recommendation cards */}
        {recommendations.map((rec, i) => (
          <div
            key={rec.name}
            className="absolute z-[8] pointer-events-auto"
            style={{
              left: rec.x, top: rec.y, width: 500, opacity: 0,
              animation: `recCardFadeIn 0.6s ${0.65 + i * 0.15}s cubic-bezier(0.25,0.46,0.45,0.94) forwards`,
            }}
          >
            <a href={ALIM_LINK} target="_blank" rel="noopener noreferrer" className="rec-card group block"
              style={{
                padding: "22px 26px", borderRadius: 18,
                background: "hsl(var(--pres-bg) / 0.75)",
                border: "1.5px solid hsl(var(--pres-accent) / 0.2)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 8px 32px hsl(var(--pres-bg) / 0.5)",
                textDecoration: "none", display: "block",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden", border: "2px solid hsl(var(--pres-accent) / 0.3)", flexShrink: 0 }}>
                  <img src={rec.image} alt={rec.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 21, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.2 }}>{rec.name}</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "hsl(var(--pres-text-muted))", lineHeight: 1.3 }}>{rec.title}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 12px", borderRadius: 20, background: "hsl(210 90% 55% / 0.12)", border: "1px solid hsl(210 90% 55% / 0.25)", flexShrink: 0 }}>
                  <Linkedin size={15} style={{ color: "hsl(210 90% 55%)" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "hsl(210 90% 55%)" }}>Verified</span>
                </div>
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 19, lineHeight: 1.6, color: "hsl(var(--pres-text-muted))", fontStyle: "italic" }}>{rec.quote}</p>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8, opacity: 0.6 }}>
                <MoveRight size={20} style={{ color: "hsl(var(--pres-accent))" }} />
              </div>
            </a>
          </div>
        ))}

        {/* Alim photo — slightly smaller */}
        <div
          className="absolute z-[5] flex items-end justify-center pointer-events-none"
          style={{ left: 620, bottom: -14, width: 1300, height: "145%" }}
        >
          <img
            src={alimPhoto} alt="Alim UL Karim" loading="eager" fetchPriority="high"
            className="h-full object-contain object-bottom"
            style={{ filter: "drop-shadow(0 20px 60px hsl(var(--pres-bg) / 0.6))", transform: "scale(1.1)" }}
          />
        </div>

        {/* LEFT — Pricing content */}
        <div className="pointer-events-none absolute left-[80px] top-[100px] bottom-[80px] z-10 flex w-[680px] items-center">
          <div>
            <motion.div {...fade(0)} className="flex items-center justify-center rounded-2xl"
              style={{ width: 70, height: 70, background: "hsl(var(--pres-accent) / 0.12)", border: "1px solid hsl(var(--pres-accent) / 0.25)", marginBottom: 28 }}>
              <Users size={36} style={{ color: "hsl(var(--pres-accent))" }} />
            </motion.div>

            <motion.p {...fade(1)} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: "hsl(var(--pres-text-dim))", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 14 }}>
              Staff Augmentation
            </motion.p>

            <motion.h1 {...fade(2)} style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 82, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.05 }}>
              <span style={{ color: "hsl(var(--pres-accent))" }}>Elite</span> Engineers
              <br />On Demand
            </motion.h1>

            <motion.p {...fade(3)} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 24, color: "hsl(var(--pres-text-muted))", marginTop: 24, maxWidth: 600, lineHeight: 1.6 }}>
              <strong style={{ color: "hsl(var(--pres-accent))" }}>Top 5% vetted</strong> talent. Hire in as fast as <strong style={{ color: "hsl(var(--pres-accent))" }}>20 minutes</strong>.
              <br />60% savings vs US/UK rates — no hidden fees.
            </motion.p>

            <motion.div {...fade(4)} className="flex items-center gap-3 mt-10">
              <div className="pointer-events-auto cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 600, color: "hsl(var(--pres-bg))", background: "hsl(var(--pres-accent))", padding: "14px 36px", borderRadius: 50, display: "flex", alignItems: "center", gap: 10 }}>
                Explore Plans <ArrowRight size={20} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ height: 4, background: "linear-gradient(90deg, transparent 0%, hsl(var(--pres-accent)) 50%, transparent 100%)" }} />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }} className="absolute bottom-[42px] left-[80px] z-10">
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 19, color: "hsl(var(--pres-text-dim))" }}>riseup-asia.com</p>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
