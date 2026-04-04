import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2 * i, duration: 0.7, ease: "easeOut" as const },
});

export default function PricingCoverSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: "radial-gradient(circle 1.2px at center, hsl(var(--pres-accent) / 0.08) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
            maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 70%)",
          }}
        />

        {/* Large accent glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: "50%", top: "50%", width: 900, height: 600,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.08) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        {/* Center content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <motion.div
            {...fade(0)}
            className="flex items-center justify-center rounded-2xl"
            style={{
              width: 80, height: 80,
              background: "hsl(var(--pres-accent) / 0.12)",
              border: "1px solid hsl(var(--pres-accent) / 0.25)",
              marginBottom: 36,
            }}
          >
            <Users size={40} style={{ color: "hsl(var(--pres-accent))" }} />
          </motion.div>

          <motion.p
            {...fade(1)}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 20,
              color: "hsl(var(--pres-text-dim))",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: 16,
            }}
          >
            Staff Augmentation
          </motion.p>

          <motion.h1
            {...fade(2)}
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 96,
              fontWeight: 700,
              color: "hsl(var(--pres-text))",
              lineHeight: 1.05,
              textAlign: "center",
            }}
          >
            <span style={{ color: "hsl(var(--pres-accent))" }}>Pricing</span> Plans
          </motion.h1>

          <motion.p
            {...fade(3)}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 26,
              color: "hsl(var(--pres-text-muted))",
              marginTop: 28,
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.6,
            }}
          >
            Transparent, predictable pricing with <strong style={{ color: "hsl(var(--pres-accent))" }}>60% savings</strong> vs US/UK rates.
            <br />No hidden fees. No surprises.
          </motion.p>

          <motion.div {...fade(4)} className="flex items-center gap-3 mt-10">
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: "hsl(var(--pres-bg))",
                background: "hsl(var(--pres-accent))",
                padding: "14px 36px",
                borderRadius: 50,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              Explore Plans <ArrowRight size={20} />
            </div>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: 4,
            background: "linear-gradient(90deg, transparent 0%, hsl(var(--pres-accent)) 50%, transparent 100%)",
          }}
        />
      </div>
    </ScaledSlide>
  );
}
