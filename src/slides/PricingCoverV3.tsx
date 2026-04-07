import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Users, ArrowRight, CheckCircle, Linkedin, MoveRight, Sparkles } from "lucide-react";
import alimPhoto from "@/assets/alim-updated.png";
import marekImg from "@/assets/testimonials/marek-f.png";
import konstantinosImg from "@/assets/testimonials/konstantinos-p.png";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2 * i, duration: 0.7, ease: "easeOut" as const },
});

const keywords = [
  { label: "Top 1% Talent" },
  { label: "Hire in 20 Min" },
  { label: "7-Stage Vetted" },
  { label: "60% Cost Savings" },
];

const recommendations = [
  {
    name: "Konstantinos P.",
    title: "Senior Serverless Engineer",
    quote: '"Solid and high quality work... the smoothest on-boarding process I have had in my whole career."',
    image: konstantinosImg,
    x: 70,
    y: 860,
  },
  {
    name: "Marek Flejszman",
    title: "Head of Software Development",
    quote: '"Most competent and talented developers I knew... talented architect and team leader."',
    image: marekImg,
    x: 1200,
    y: 120,
  },
];

const ALIM_LINK = "https://www.linkedin.com/in/alimkarim/details/recommendations/?detailScreenTabIndex=0";

/**
 * VERSION 3 — Bold Statement
 * Large centered headline, Alim on right smaller, inline pill row, testimonials in corners
 */
export default function PricingCoverV3() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Diagonal accent stripe */}
        <div
          className="absolute z-[1] pointer-events-none"
          style={{
            left: -100, bottom: -200, width: 1200, height: 400,
            background: "linear-gradient(135deg, hsl(var(--pres-accent) / 0.04) 0%, transparent 60%)",
            transform: "rotate(-8deg)",
            filter: "blur(40px)",
          }}
        />

        {/* Center glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: "40%", top: "40%", width: 800, height: 500,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        {/* Alim photo — right side, smaller */}
        <div
          className="absolute z-[4] flex items-end justify-center pointer-events-none"
          style={{ left: 680, bottom: 0, width: 1100, height: "135%" }}
        >
          <img
            src={alimPhoto} alt="Alim UL Karim" loading="eager" fetchPriority="high"
            className="h-full object-contain object-bottom"
            style={{ filter: "drop-shadow(0 20px 60px hsl(var(--pres-bg) / 0.7))", transform: "scale(1.0)", opacity: 0.85 }}
          />
        </div>

        {/* Highlighted expertise text — right side */}
        <div className="absolute z-[6] pointer-events-none" style={{ right: 60, top: 340 }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <div
              className="rounded-xl"
              style={{
                background: "linear-gradient(135deg, hsl(var(--pres-accent) / 0.9), hsl(var(--pres-accent) / 0.7))",
                padding: "14px 22px",
                maxWidth: 300,
                boxShadow: "0 8px 32px hsl(var(--pres-accent) / 0.3)",
              }}
            >
              <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 22, fontWeight: 700, color: "hsl(var(--pres-bg))", lineHeight: 1.3 }}>
                20+ Years in Software Engineering
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.25, duration: 0.7, ease: "easeOut" }}
              className="rounded-xl"
              style={{
                background: "linear-gradient(135deg, hsl(var(--pres-accent) / 0.85), hsl(var(--pres-accent) / 0.65))",
                padding: "14px 22px",
                maxWidth: 300,
                boxShadow: "0 8px 32px hsl(var(--pres-accent) / 0.25)",
              }}
            >
              <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 22, fontWeight: 700, color: "hsl(var(--pres-bg))", lineHeight: 1.3 }}>
                Led 50+ Enterprise Projects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.7, ease: "easeOut" }}
              className="rounded-xl"
              style={{
                background: "hsl(var(--pres-bg) / 0.85)",
                border: "1.5px solid hsl(var(--pres-accent) / 0.4)",
                backdropFilter: "blur(12px)",
                padding: "14px 22px",
                maxWidth: 300,
              }}
            >
              <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 20, fontWeight: 700, color: "hsl(var(--pres-accent))", lineHeight: 1.3 }}>
                Chief Software Engineer & Your Dedicated Expert
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* LEFT — Bold content block */}
        <div className="pointer-events-none absolute left-[80px] top-[100px] bottom-[80px] z-10 flex w-[700px] items-center">
          <div>
            <motion.div {...fade(0)} className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center rounded-2xl"
                style={{ width: 60, height: 60, background: "hsl(var(--pres-accent) / 0.12)", border: "1px solid hsl(var(--pres-accent) / 0.25)" }}>
                <Users size={30} style={{ color: "hsl(var(--pres-accent))" }} />
              </div>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "hsl(var(--pres-text-dim))", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                  Staff Augmentation
                </p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "hsl(var(--pres-accent))", fontWeight: 600 }}>
                  riseup-asia.com
                </p>
              </div>
            </motion.div>

            <motion.h1 {...fade(1)} style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 80, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.05 }}>
              <span style={{ color: "hsl(var(--pres-accent))" }}>Elite</span> Engineers
              <br />On Demand
            </motion.h1>

            <motion.p {...fade(2)} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, color: "hsl(var(--pres-text-muted))", marginTop: 20, maxWidth: 560, lineHeight: 1.65 }}>
              Pre-vetted <strong style={{ color: "hsl(var(--pres-accent))" }}>top 1% engineers</strong> ready to join your team. No recruitment delays. No hidden fees.
            </motion.p>

            {/* Inline pill row */}
            <motion.div {...fade(3)} className="flex flex-wrap gap-3 mt-8">
              {keywords.map((kw, i) => (
                <motion.span
                  key={kw.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 200, damping: 16 }}
                  className="flex items-center gap-2"
                  style={{
                    padding: "8px 18px", fontSize: 16, fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                    color: "hsl(var(--pres-text))",
                    background: "hsl(var(--pres-bg-surface) / 0.9)",
                    border: "1px solid hsl(var(--pres-text-muted) / 0.25)",
                    borderRadius: 20, whiteSpace: "nowrap",
                  }}
                >
                  <CheckCircle size={15} />
                  {kw.label}
                </motion.span>
              ))}
            </motion.div>

            <motion.div {...fade(4)} className="flex items-center gap-4 mt-10">
              <div className="pointer-events-auto cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 600, color: "hsl(var(--pres-bg))", background: "hsl(var(--pres-accent))", padding: "14px 36px", borderRadius: 50, display: "flex", alignItems: "center", gap: 10 }}>
                Explore Plans <ArrowRight size={20} />
              </div>
              <div className="pointer-events-auto cursor-pointer flex items-center gap-2"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 500, color: "hsl(var(--pres-accent))", padding: "14px 24px", borderRadius: 50, border: "1.5px solid hsl(var(--pres-accent) / 0.3)" }}>
                <Sparkles size={16} />
                View Tiers
              </div>
            </motion.div>
          </div>
        </div>

        {/* Testimonial cards in corners */}
        {recommendations.map((rec, i) => (
          <div
            key={rec.name}
            className="absolute z-[8] pointer-events-auto"
            style={{
              left: rec.x, top: rec.y,
              width: i === 0 ? 520 : 480,
              opacity: 0,
              animation: `recCardFadeIn 0.6s ${0.8 + i * 0.15}s cubic-bezier(0.25,0.46,0.45,0.94) forwards`,
            }}
          >
            <a href={ALIM_LINK} target="_blank" rel="noopener noreferrer" className="rec-card group block"
              style={{
                padding: "18px 22px", borderRadius: 16,
                background: "hsl(var(--pres-bg) / 0.8)",
                border: "1px solid hsl(var(--pres-accent) / 0.15)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 8px 32px hsl(var(--pres-bg) / 0.5)",
                textDecoration: "none", display: "block",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", overflow: "hidden", border: "2px solid hsl(var(--pres-accent) / 0.3)", flexShrink: 0 }}>
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
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, lineHeight: 1.5, color: "hsl(var(--pres-text-muted))", fontStyle: "italic" }}>{rec.quote}</p>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 6, opacity: 0.5 }}>
                <MoveRight size={18} style={{ color: "hsl(var(--pres-accent))" }} />
              </div>
            </a>
          </div>
        ))}

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ height: 4, background: "linear-gradient(90deg, transparent 0%, hsl(var(--pres-accent)) 50%, transparent 100%)" }} />
      </div>
    </ScaledSlide>
  );
}
