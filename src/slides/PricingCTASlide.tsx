import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { CalendarCheck, Mail, Phone, ArrowRight } from "lucide-react";
import qrCode from "@/assets/qr-code.png";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2 * i, duration: 0.7, ease: "easeOut" as const },
});

export default function PricingCTASlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: "radial-gradient(circle 1.2px at center, hsl(var(--pres-accent) / 0.06) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 65%)",
          }}
        />

        {/* Large glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: "50%", top: "40%", width: 1000, height: 700,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.1) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        {/* Main content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex items-center gap-20">
            {/* Left: CTA text */}
            <div style={{ maxWidth: 700 }}>
              <motion.p
                {...fade(0)}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  color: "hsl(var(--pres-text-dim))",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  marginBottom: 16,
                }}
              >
                Ready to Start?
              </motion.p>

              <motion.h1
                {...fade(1)}
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: 72,
                  fontWeight: 700,
                  color: "hsl(var(--pres-text))",
                  lineHeight: 1.1,
                }}
              >
                Let's Build Your
                <br />
                <span style={{ color: "hsl(var(--pres-accent))" }}>Dream Team</span>
              </motion.h1>

              <motion.p
                {...fade(2)}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 22,
                  color: "hsl(var(--pres-text-muted))",
                  marginTop: 24,
                  lineHeight: 1.6,
                }}
              >
                Schedule a 15-minute call. We'll match you with the right talent within days.
              </motion.p>

              {/* CTA button */}
              <motion.a
                {...fade(3)}
                href="https://meet.rasia.pro/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "hsl(var(--pres-bg))",
                  background: "hsl(var(--pres-accent))",
                  padding: "16px 40px",
                  borderRadius: 50,
                  textDecoration: "none",
                }}
              >
                <CalendarCheck size={22} />
                Schedule a Call
                <ArrowRight size={20} />
              </motion.a>

              {/* Contact info */}
              <motion.div {...fade(4)} className="flex items-center gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <Mail size={18} style={{ color: "hsl(var(--pres-accent))" }} />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, color: "hsl(var(--pres-text-muted))" }}>
                    contact@riseup-asia.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} style={{ color: "hsl(var(--pres-accent))" }} />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, color: "hsl(var(--pres-text-muted))" }}>
                    +1 (567) 978 1833
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right: QR code */}
            <motion.div {...fade(3)} className="flex-shrink-0">
              <div
                style={{
                  padding: 14,
                  borderRadius: 20,
                  background: "hsl(var(--pres-bg-card) / 0.5)",
                  border: "1px solid hsl(var(--pres-accent) / 0.2)",
                }}
              >
                <img
                  src={qrCode}
                  alt="QR Code"
                  style={{ width: 280, height: 280, borderRadius: 12, background: "#fff", padding: 8 }}
                />
              </div>
              <p
                className="text-center mt-3"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  color: "hsl(var(--pres-text-dim))",
                }}
              >
                Scan to connect
              </p>
            </motion.div>
          </div>
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
