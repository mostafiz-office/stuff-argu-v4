import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import nafehPhoto from "@/assets/nafeh.png";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.14 * i, duration: 0.65, ease: "easeOut" as const },
});

export default function CTOSlide() {
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

        {/* Left portrait */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18, duration: 0.72, ease: "easeOut" }}
          className="absolute left-0 top-[108px] bottom-0 z-[4]"
          style={{ width: 760 }}
        >
          <img
            src={nafehPhoto}
            alt="Nafeh Mosharraf"
            className="absolute bottom-0 left-[-40px] h-[105%] w-auto object-contain"
            style={{ filter: "drop-shadow(0 32px 64px hsl(var(--pres-bg) / 0.55))" }}
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
                color: "hsl(var(--pres-accent))",
                lineHeight: 1.02,
              }}
            >
              Nafeh Mosharraf
            </motion.h1>
            <div className="flex gap-3 mt-2">
              <a href="https://linkedin.com/in/nafehm" target="_blank" rel="noopener noreferrer">
                <Linkedin size={28} color="hsl(var(--pres-accent))" className="hover:opacity-70 transition-opacity cursor-pointer" />
              </a>
              <a href="mailto:nafeh@riseup-asia.com">
                <Mail size={28} color="hsl(var(--pres-accent))" className="hover:opacity-70 transition-opacity cursor-pointer" />
              </a>
            </div>
          </div>

          <div
            className="grid grid-cols-2 items-start"
            style={{ marginTop: 72, columnGap: 62 }}
          >
            <motion.div {...fade(2)}>
              <p
                className="font-body font-semibold"
                style={{ fontSize: 50, color: "hsl(var(--pres-text))", lineHeight: 1.18 }}
              >
                CTO &amp; Co-Founder,
                <br />
                Riseup-Asia.
              </p>

              <p
                className="font-body"
                style={{
                  marginTop: 26,
                  fontSize: 30,
                  color: "hsl(var(--pres-text-dim))",
                  lineHeight: 1.45,
                }}
              >
                Technical architect focused on:
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
                Building scalable, enterprise-grade platforms for global clients.
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
                  style={{ fontSize: 29, color: "hsl(var(--pres-text-muted))", lineHeight: 1.42 }}
                >
                  Expert in .NET, cloud architecture, and enterprise-grade systems design.
                </p>
              </motion.div>

              <motion.div
                {...fade(4)}
                className="border-l-[4px] pl-6"
                style={{ borderColor: "hsl(var(--pres-accent) / 0.45)" }}
              >
                <p
                  className="font-body"
                  style={{ fontSize: 29, color: "hsl(var(--pres-text-muted))", lineHeight: 1.42 }}
                >
                  Built mission-critical systems for healthcare (Veradigm, Babel Health) and fintech (GL Banking).
                </p>
              </motion.div>

              <motion.div
                {...fade(5)}
                className="border-l-[4px] pl-6"
                style={{ borderColor: "hsl(var(--pres-accent) / 0.45)" }}
              >
                <p
                  className="font-body"
                  style={{ fontSize: 29, color: "hsl(var(--pres-text-muted))", lineHeight: 1.42 }}
                >
                  Leads a 50+ person engineering team across multiple time zones and technology stacks.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}
