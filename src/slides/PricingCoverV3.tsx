import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Users, ArrowRight, CheckCircle, Linkedin, MoveRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import alimPhoto from "@/assets/alim-updated.png";
import claudioImg from "@/assets/testimonials/claudio-c.png";
import konstantinosImg from "@/assets/testimonials/konstantinos-p.png";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2 * i, duration: 0.7, ease: "easeOut" as const },
});

function HoverCard({ delay, title, hoverText, fontSize = 22 }: { delay: number; title: React.ReactNode; hoverText: string; fontSize?: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className="rounded-xl cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "hsl(var(--pres-accent) / 0.12)" : "hsl(var(--pres-bg) / 0.85)",
        border: `1.5px solid ${hovered ? "hsl(var(--pres-accent) / 0.7)" : "hsl(var(--pres-accent) / 0.4)"}`,
        backdropFilter: "blur(12px)",
        padding: "14px 22px",
        maxWidth: 360,
        transition: "background 0.35s ease, border-color 0.35s ease",
      }}
    >
      <p style={{ fontFamily: "'Ubuntu', sans-serif", fontSize, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.3 }}>
        {title}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateRows: hovered ? "1fr" : "0fr",
          opacity: hovered ? 1 : 0,
          transition: "grid-template-rows 0.35s ease, opacity 0.3s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "hsl(var(--pres-text-muted))", lineHeight: 1.5, paddingTop: 8 }}>
            {hoverText}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const keywords = [
  { label: "Top 5% Talent" },
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
    name: "Claudio C.",
    title: "Engineering Leader | AI-Powered Platforms",
    quote: '"A skillful professional and kind communicator."',
    image: claudioImg,
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
  const [, setSearchParams] = useSearchParams();
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
        <div className="absolute z-[6]" style={{ right: 60, top: 340 }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <HoverCard
              delay={1.0}
              title={<><span style={{ color: "hsl(var(--pres-accent))" }}>20+ Years</span> in Software Engineering</>}
              hoverText="Two decades of hands-on experience across startups, enterprises, and everything in between — from architecture to deployment."
            />
            <HoverCard
              delay={1.25}
              title={<>Led <span style={{ color: "hsl(var(--pres-accent))" }}>50+ Enterprise</span> Projects</>}
              hoverText="From Fortune 500 platforms to high-growth SaaS — proven delivery across healthcare, fintech, e-commerce, and more."
            />
            <HoverCard
              delay={1.5}
              title={<><span style={{ color: "hsl(var(--pres-accent))" }}>Chief Software Engineer</span> & Your Dedicated Expert</>}
              hoverText="Not a manager watching from the sidelines — Alim reviews your code, guides architecture, and mentors your developer directly."
              fontSize={20}
            />
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
              Pre-vetted <strong style={{ color: "hsl(var(--pres-accent))" }}>top 5% engineers</strong> ready to join your team. No recruitment delays. No hidden fees.
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
              <a href="https://client.rasia.pro/hiring-v1" target="_blank" rel="noopener noreferrer" className="pointer-events-auto cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 600, color: "hsl(var(--pres-bg))", background: "hsl(var(--pres-accent))", padding: "14px 36px", borderRadius: 50, display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                Book a Call <ArrowRight size={20} />
              </a>
              <div className="pointer-events-auto cursor-pointer flex items-center gap-2"
                onClick={() => { const params = new URLSearchParams(window.location.search); params.set("slide", "2"); window.history.pushState({}, "", `?${params.toString()}`); window.dispatchEvent(new PopStateEvent("popstate")); }}
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 500, color: "hsl(var(--pres-accent))", padding: "14px 24px", borderRadius: 50, border: "1.5px solid hsl(var(--pres-accent) / 0.3)" }}>
                <Sparkles size={16} />
                Explore Tiers
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
