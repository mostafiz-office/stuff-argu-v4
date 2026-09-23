import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, CalendarCheck, Linkedin, Github } from "lucide-react";
import qrCode from "@/assets/qr-code.png";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

export default function ContactSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Subtle accent glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: 200,
            top: 200,
            width: 500,
            height: 500,
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Halftone texture right */}
        <div
          className="absolute right-0 top-0 z-[1] h-full"
          style={{
            width: "50%",
            backgroundImage:
              "radial-gradient(circle 1px at center, hsl(var(--pres-accent) / 0.06) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
            maskImage: "radial-gradient(ellipse 80% 80% at 60% 50%, black 10%, transparent 60%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 60% 50%, black 10%, transparent 60%)",
          }}
        />

        {/* Main content */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          <div className="flex items-center gap-20">
          {/* QR Code with glow border */}
          <motion.div {...fade(0)} className="flex-shrink-0 relative">
            <div
              style={{
                padding: 16,
                borderRadius: 20,
                background: "hsl(var(--pres-bg-card) / 0.5)",
                border: "1px solid hsl(var(--pres-accent) / 0.2)",
              }}
            >
              <img
                src={qrCode}
                alt="QR Code - Scan to connect"
                style={{ width: 380, height: 380, borderRadius: 12, background: '#fff', padding: 8 }}
              />
            </div>
            <motion.p
              {...fade(1)}
              className="text-center mt-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 18,
                color: "hsl(var(--pres-text-dim))",
                letterSpacing: "0.05em",
              }}
            >
              Scan to connect
            </motion.p>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col flex-1" style={{ gap: 38 }}>
            <motion.div {...fade(1)}>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 20,
                  color: "hsl(var(--pres-text-dim))",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: 8,
                }}
              >
                Let's Build Together
              </p>
              <h2
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: 64,
                  fontWeight: 700,
                  color: "hsl(var(--pres-text))",
                  lineHeight: 1.1,
                }}
              >
                Riseup<span style={{ color: "hsl(var(--pres-accent))" }}>Asia</span>
              </h2>
              <div
                style={{
                  width: 80,
                  height: 4,
                  borderRadius: 2,
                  background: "hsl(var(--pres-accent))",
                  marginTop: 12,
                }}
              />
            </motion.div>

            <div className="flex flex-col" style={{ gap: 28 }}>
              <motion.div {...fade(2)} className="flex items-start gap-5">
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "hsl(var(--pres-accent) / 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={24} style={{ color: "hsl(var(--pres-accent))" }} />
                </div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 24,
                    color: "hsl(var(--pres-text-muted))",
                    lineHeight: 1.45,
                    marginTop: 4,
                  }}
                >
                  30 N Gould St, STE R, Sheridan,
                  <br />
                  Wyoming 82801, United States
                </p>
              </motion.div>

              <motion.div {...fade(3)} className="flex items-center gap-5">
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "hsl(var(--pres-accent) / 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={24} style={{ color: "hsl(var(--pres-accent))" }} />
                </div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 24, color: "hsl(var(--pres-text-muted))" }}>
                  contact@riseup-asia.com
                </p>
              </motion.div>

              <motion.a
                {...fade(4)}
                href="https://call.rasia.pro/riseup-offical-v1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 hover:opacity-80 transition-opacity"
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "hsl(var(--pres-accent) / 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={24} style={{ color: "hsl(var(--pres-accent))" }} />
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "hsl(var(--pres-bg))",
                    background: "hsl(var(--pres-accent))",
                    padding: "12px 32px",
                    borderRadius: 12,
                  }}
                >
                  Call Now
                </div>
              </motion.a>

              <motion.a
                {...fade(5)}
                href="https://meet.rasia.pro/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 hover:opacity-80 transition-opacity"
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "hsl(var(--pres-accent) / 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CalendarCheck size={24} style={{ color: "hsl(var(--pres-accent))" }} />
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "hsl(var(--pres-bg))",
                    background: "hsl(var(--pres-accent))",
                    padding: "12px 32px",
                    borderRadius: 12,
                  }}
                >
                  Schedule a Call
                </div>
              </motion.a>
            </div>

            {/* Social icons */}
            <motion.div {...fade(6)} className="flex items-center gap-5 mt-2">
              <a href="https://www.linkedin.com/in/alimkarim/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={36} style={{ color: "hsl(var(--pres-text-dim))" }} className="hover:opacity-70 transition-opacity cursor-pointer" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alim.karim@riseup-asia.com" target="_blank" rel="noopener noreferrer">
                <Mail size={36} style={{ color: "hsl(var(--pres-text-dim))" }} className="hover:opacity-70 transition-opacity cursor-pointer" />
              </a>
              <a href="https://github.com/AliMKarim" target="_blank" rel="noopener noreferrer">
                <Github size={36} style={{ color: "hsl(var(--pres-text-dim))" }} className="hover:opacity-70 transition-opacity cursor-pointer" />
              </a>
            </motion.div>
          </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}
