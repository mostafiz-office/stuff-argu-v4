import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion, AnimatePresence } from "framer-motion";
import alimPhoto from "@/assets/alim-updated.png";
import linkedinPreview from "@/assets/linkedin_alim_profile.png";
import { Linkedin } from "lucide-react";
import { useState } from "react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.14 * i, duration: 0.65, ease: "easeOut" as const },
});

export default function CEOSlide() {
  const [showPreview, setShowPreview] = useState(false);
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative h-full w-full overflow-hidden">
        <SlideHeader />

        {/* Right-side halftone texture */}
        <div
          className="absolute right-0 top-0 z-[1] h-full"
          style={{
            width: "58%",
            backgroundImage:
              "radial-gradient(circle 1.2px at center, hsl(var(--pres-accent) / 0.12) 1px, transparent 1px)",
            backgroundSize: "10px 10px",
            maskImage:
              "radial-gradient(ellipse 88% 86% at 66% 46%, black 14%, transparent 63%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 88% 86% at 66% 46%, black 14%, transparent 63%)",
          }}
        />

        {/* Soft accent glow behind content */}
        <div
          className="absolute z-[1]"
          style={{
            left: 860,
            top: 160,
            width: 700,
            height: 760,
            background:
              "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.12) 0%, transparent 68%)",
            filter: "blur(10px)",
          }}
        />


        {/* Left portrait — larger, higher, no dead space */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18, duration: 0.72, ease: "easeOut" }}
          className="absolute bottom-0 z-[4] flex items-end"
          style={{ left: -400, width: 1400, height: '100%' }}
        >
          <img
            src={alimPhoto}
            alt="Alim UL Karim"
            className="w-full object-contain object-bottom"
            style={{
              maxHeight: '200%',
              marginBottom: 0,
              filter: "drop-shadow(0 32px 64px hsl(var(--pres-bg) / 0.55))",
            }}
          />
        </motion.div>

        {/* Content block */}
        <div
          className="absolute z-10 flex flex-col"
          style={{ left: 500, right: 72, top: 132, bottom: 118 }}
        >
          <div>
            <motion.p
              {...fade(0)}
              className="font-heading italic"
              style={{ fontSize: 72, color: "hsl(var(--pres-text-muted))", lineHeight: 1.05 }}
            >
              Introducing
            </motion.p>
            <motion.h1
              {...fade(1)}
              className="font-heading italic"
              style={{
                marginTop: 6,
                fontSize: 104,
                fontWeight: 700,
                lineHeight: 1.02,
              }}
            >
              <span style={{ color: "hsl(var(--pres-accent))" }}>A</span>
              <span style={{ color: "#fdd072" }}>l</span>
              <span style={{ color: "hsl(var(--pres-text))" }}>im</span>{" "}
              <span style={{ color: "hsl(var(--pres-text))" }}>Ul</span>{" "}
              <span style={{ color: "hsl(var(--pres-accent))" }}>K</span>
              <span style={{ color: "#fdd072" }}>a</span>
              <span style={{ color: "hsl(var(--pres-text))" }}>rim</span>
            </motion.h1>
          </div>

          <div
            className="grid grid-cols-2 items-start"
            style={{ marginTop: 72, columnGap: 62 }}
          >
            <motion.div {...fade(2)}>
              <p
                className="font-body font-bold"
                style={{ fontSize: 38, color: "hsl(var(--pres-text))", letterSpacing: '0.02em', lineHeight: 1.3 }}
              >
                Chief Software Engineer
              </p>
              <p
                className="font-body font-bold"
                style={{ fontSize: 38, color: "hsl(var(--pres-text))", letterSpacing: '0.02em' }}
              >
                <span style={{ color: "hsl(var(--pres-accent))" }}>AI</span>, .NET Developer
              </p>

              {/* LinkedIn button with hover preview */}
              <div className="relative" style={{ marginTop: 16, width: 'fit-content' }}>
                <motion.a
                  {...fade(2.5)}
                  href="https://www.linkedin.com/in/alimkarim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setShowPreview(true)}
                  onMouseLeave={() => setShowPreview(false)}
                  className="font-body font-semibold inline-flex items-center gap-2"
                  style={{
                    fontSize: 18,
                    padding: '10px 24px',
                    borderRadius: 50,
                    background: 'hsl(210 80% 45%)',
                    color: '#fff',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <Linkedin size={20} fill="#fff" stroke="none" />
                  Connect on LinkedIn
                </motion.a>

                <AnimatePresence>
                  {showPreview && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="absolute z-50"
                      style={{
                        left: 0,
                        bottom: '110%',
                      width: 420,
                        borderRadius: 14,
                        overflow: 'hidden',
                        border: '1px solid hsl(var(--pres-accent) / 0.25)',
                        boxShadow: '0 16px 48px hsl(var(--pres-bg) / 0.7)',
                      }}
                      onMouseEnter={() => setShowPreview(true)}
                      onMouseLeave={() => setShowPreview(false)}
                    >
                      <img
                        src={linkedinPreview}
                        alt="Alim Karim LinkedIn Profile"
                        style={{ width: '100%', display: 'block', borderRadius: 12 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <p
                className="font-body"
                style={{
                  marginTop: 26,
                  fontSize: 30,
                  color: "hsl(var(--pres-text-dim))",
                  lineHeight: 1.45,
                }}
              >
                Most of my work today focuses on:
              </p>

              <p
                className="font-body italic"
                style={{
                  marginTop: 10,
                  fontSize: 34,
                  color: "hsl(var(--pres-text-muted))",
                  lineHeight: 1.4,
                }}
              >
                How do companies scale offshore teams profitably using <span style={{ color: "hsl(var(--pres-accent))" }}>top 5% talent</span>?
              </p>
            </motion.div>

            <div className="space-y-9" style={{ paddingTop: 8 }}>
              <motion.div
                {...fade(3)}
                className="border-l-[4px] pl-6"
                style={{ borderColor: "hsl(var(--pres-accent) / 0.45)" }}
              >
                <p
                  className="font-body"
                  style={{ fontSize: 29, color: "hsl(var(--pres-text))", lineHeight: 1.42 }}
                >
                  <span style={{ color: "hsl(var(--pres-accent))" }}>15+ years</span> in software engineering &amp; 20 years of programming across AI, team leadership &amp; 4 continents.
                </p>
              </motion.div>

              <motion.div
                {...fade(4)}
                className="border-l-[4px] pl-6"
                style={{ borderColor: "hsl(var(--pres-accent) / 0.45)" }}
              >
                <p
                  className="font-body"
                  style={{ fontSize: 29, color: "hsl(var(--pres-text))", lineHeight: 1.42 }}
                >
                  Led engineering at Crossover (ESW Capital-backed), built <span style={{ color: "hsl(var(--pres-accent))" }}>Validata AI</span> platform.
                </p>
              </motion.div>

              <motion.div
                {...fade(5)}
                className="border-l-[4px] pl-6"
                style={{ borderColor: "hsl(var(--pres-accent) / 0.45)" }}
              >
                <p
                  className="font-body"
                  style={{ fontSize: 29, color: "hsl(var(--pres-text))", lineHeight: 1.42 }}
                >
                  Built enterprise solutions processing <span style={{ color: "hsl(var(--pres-accent))" }}>10M+ daily requests</span> with 60% higher throughput.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}
