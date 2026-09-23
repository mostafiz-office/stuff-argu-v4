import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Linkedin, MoveRight } from "lucide-react";
import alimPhoto from "@/assets/alim-updated.png";
import marekImg from "@/assets/marek.png";
import konstantinosImg from "@/assets/testimonials/konstantinos-p.png";
import { usePresentation } from "@/context/PresentationContext";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.22 * i, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const keywords = [
  { label: "AI Architecture", x: 1550, y: 180 },
  { label: "15+ Yrs Engineering", x: 860, y: 680 },
  { label: "Innovation", x: 1540, y: 460 },
];

const recommendations = [
  {
    name: "Marek Flejszman",
    title: "Head of Software Development",
    quote: '"Most competent and talented developers I knew... talented architect and team leader."',
    image: marekImg,
    x: 1320,
    y: 820,
  },
  {
    name: "Konstantinos P.",
    title: "Senior Serverless Engineer",
    quote: '"Solid and high quality work... the smoothest on-boarding process I have had in my whole career."',
    image: konstantinosImg,
    x: 500,
    y: 70,
  },
];

const ALIM_LINK = "https://www.linkedin.com/in/alimkarim/details/recommendations/?detailScreenTabIndex=0";

export default function TitleSlide() {
  const { hero, company } = usePresentation();
  const cx = 1055;
  const cy = 455;

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <div
          className="absolute z-[2]"
          style={{
            right: 0,
            top: 0,
            width: "55%",
            height: "100%",
            backgroundImage: `radial-gradient(circle 1.2px at center, hsl(var(--pres-accent) / 0.14) 1px, transparent 1px)`,
            backgroundSize: "10px 10px",
            maskImage: "radial-gradient(ellipse 85% 85% at 70% 45%, black 15%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 70% 45%, black 15%, transparent 65%)",
          }}
        />

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

        <svg
          className="absolute z-[3] pointer-events-none"
          style={{ left: 0, top: 0, width: 1920, height: 1080 }}
          viewBox="0 0 1920 1080"
          fill="none"
        >
          {keywords.map((kw, i) => {
            const nx = kw.x + 90;
            const ny = kw.y + 21;
            const midX = (cx + nx) / 2 + (i % 2 === 0 ? 28 : -28);
            const midY = (cy + ny) / 2 + (i % 2 === 0 ? -18 : 18);
            return (
              <motion.path
                key={`kw-${i}`}
                d={`M${cx},${cy} Q${midX},${midY} ${nx},${ny}`}
                stroke="hsl(var(--pres-accent))"
                strokeWidth={1.5}
                strokeOpacity={0.25}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.45 + i * 0.1, duration: 0.65, ease: "easeOut" }}
              />
            );
          })}

          {recommendations.map((rec, i) => {
            const nx = rec.x + (i === 0 ? 12 : 410);
            const ny = rec.y + 74;
            const midX = (cx + nx) / 2 + (i === 0 ? 55 : -70);
            const midY = (cy + ny) / 2 + (i === 0 ? -30 : 24);
            return (
              <motion.path
                key={`rec-${i}`}
                d={`M${cx},${cy} Q${midX},${midY} ${nx},${ny}`}
                stroke="hsl(var(--pres-accent))"
                strokeWidth={1.2}
                strokeOpacity={0.15}
                strokeDasharray="6 4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.55 + i * 0.12, duration: 0.7, ease: "easeOut" }}
              />
            );
          })}

          <motion.circle
            cx={cx}
            cy={cy}
            r={5}
            fill="hsl(var(--pres-accent))"
            fillOpacity={0.3}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.35, duration: 0.35 }}
          />
        </svg>

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
            whileHover={{
              scale: 1.18,
              y: -10,
              boxShadow: "0 0 35px hsl(var(--pres-accent) / 0.55), 0 0 60px hsl(var(--pres-accent) / 0.2)",
              background: "hsl(var(--pres-accent) / 0.2)",
              borderColor: "hsl(var(--pres-accent) / 0.6)",
            }}
            transition={{
              delay: 0.5 + i * 0.12,
              type: "spring",
              stiffness: 180,
              damping: 14,
              mass: 0.8,
              y: { delay: 1.2 + i * 0.3, duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
              boxShadow: { delay: 1.3 + i * 0.25, duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
              scale: { duration: 0.3, ease: "easeOut" },
            }}
            className="absolute z-[7] font-heading cursor-pointer flex items-center"
            style={{
              left: kw.x,
              top: kw.y,
              padding: "10px 26px",
              fontSize: 20,
              fontWeight: 600,
              color: "hsl(var(--pres-accent))",
              background: "hsl(var(--pres-accent) / 0.1)",
              border: "1.5px solid hsl(var(--pres-accent) / 0.3)",
              borderRadius: 24,
              backdropFilter: "blur(8px)",
              whiteSpace: "nowrap",
            }}
          >
            <CheckCircle size={19} style={{ marginRight: 6, flexShrink: 0 }} />
            {kw.label}
          </motion.div>
        ))}

        {recommendations.map((rec, i) => (
          <div
            key={rec.name}
            className="absolute z-[8] pointer-events-auto"
            style={{
              left: rec.x,
              top: rec.y,
              width: 520,
              opacity: 0,
              animation: `recCardFadeIn 0.6s ${0.65 + i * 0.15}s cubic-bezier(0.25,0.46,0.45,0.94) forwards`,
            }}
          >
            <a
              href={ALIM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rec-card group block"
              style={{
                padding: "24px 28px",
                borderRadius: 18,
                background: "hsl(var(--pres-bg) / 0.75)",
                border: "1.5px solid hsl(var(--pres-accent) / 0.2)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 8px 32px hsl(var(--pres-bg) / 0.5), 0 0 20px hsl(var(--pres-accent) / 0.05)",
                textDecoration: "none",
                display: "block",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <div
                  className="rec-card-avatar"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid hsl(var(--pres-accent) / 0.3)",
                    flexShrink: 0,
                  }}
                >
                  <img src={rec.image} alt={rec.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p className="font-heading rec-card-name" style={{ fontSize: 23, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.2 }}>
                    {rec.name}
                  </p>
                  <p className="font-body rec-card-title" style={{ fontSize: 17, color: "hsl(var(--pres-text-muted))", lineHeight: 1.3 }}>
                    {rec.title}
                  </p>
                </div>
                <div
                  className="rec-card-badge"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "4px 12px",
                    borderRadius: 20,
                    background: "hsl(210 90% 55% / 0.12)",
                    border: "1px solid hsl(210 90% 55% / 0.25)",
                    flexShrink: 0,
                  }}
                >
                  <Linkedin size={15} style={{ color: "hsl(210 90% 55%)" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "hsl(210 90% 55%)" }}>Verified</span>
                </div>
              </div>
              <p
                className="font-body rec-card-quote"
                style={{
                  fontSize: 21,
                  lineHeight: 1.6,
                  color: "hsl(var(--pres-text-muted))",
                  fontStyle: "italic",
                }}
              >
                {rec.quote}
              </p>
              <div className="rec-card-arrow" style={{ display: "flex", justifyContent: "flex-end", marginTop: 10, opacity: 0.6 }}>
                <MoveRight size={20} style={{ color: "hsl(var(--pres-accent))" }} />
              </div>
            </a>
          </div>
        ))}

        <div
          className="absolute z-[5] flex items-end justify-center pointer-events-none"
          style={{ left: 620, bottom: -14, width: 1440, height: "160%" }}
        >
          <img
            src={alimPhoto}
            alt="Alim UL Karim"
            loading="eager"
            fetchPriority="high"
            className="h-full object-contain object-bottom"
            style={{ filter: "drop-shadow(0 20px 60px hsl(var(--pres-bg) / 0.6))", transform: "scale(1.25)" }}
          />
        </div>

        <div className="pointer-events-none absolute left-[80px] top-[120px] bottom-[160px] z-10 flex w-[760px] items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.15, y: 80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 260,
                damping: 10,
                mass: 0.9,
              }}
              className="font-heading"
              style={{ fontSize: 94, fontWeight: 700, lineHeight: 1.08, color: "hsl(var(--pres-text))", transformOrigin: "left center" }}
            >
              <span style={{ display: "block" }}>
                <span style={{ color: "hsl(var(--pres-accent))" }}>{hero.headline1}</span> {hero.headline1Suffix}
              </span>
              <motion.span
                initial={{ opacity: 0, scale: 0.2, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 280,
                  damping: 10,
                  mass: 0.85,
                }}
                style={{ display: "block", transformOrigin: "left center" }}
              >
                <span style={{ color: "hsl(var(--pres-accent))" }}>{hero.headline2}</span> {hero.headline2Suffix}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 0.3, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.45,
                type: "spring",
                stiffness: 160,
                damping: 16,
                mass: 0.8,
              }}
              className="font-body"
              style={{ marginTop: 24, fontSize: 28, color: "hsl(var(--pres-text-muted))", transformOrigin: "left center" }}
            >
              {company.tagline}
            </motion.p>

            <div>
              <motion.a
                initial={{ opacity: 0, scale: 0.3, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                  mass: 0.8,
                }}
                href={hero.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto font-body font-semibold mt-9 relative z-50 cursor-pointer inline-flex items-center gap-3 group"
                style={{
                  fontSize: 18,
                  padding: "13px 34px",
                  borderRadius: 50,
                  background: "hsl(var(--pres-accent))",
                  color: "hsl(var(--pres-bg))",
                  transition: "background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(var(--pres-text))";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 30px hsl(var(--pres-accent) / 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(var(--pres-accent))";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {hero.ctaText}
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute bottom-[42px] left-[80px] z-10"
        >
          <p className="font-body" style={{ fontSize: 21, color: "hsl(var(--pres-text-dim))" }}>
            {company.website}
          </p>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
