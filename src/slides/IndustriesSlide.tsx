import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

const industries = [
  { name: "Healthcare", clients: "Veradigm, Babel Health", icon: "🏥" },
  { name: "Fintech", clients: "GL Banking, Payment platforms", icon: "💳" },
  { name: "SaaS", clients: "Crossover, Validata, CRM tools", icon: "☁️" },
  { name: "E-commerce", clients: "Multi-vendor marketplaces", icon: "🛒" },
  { name: "Education", clients: "LMS, EdTech platforms", icon: "🎓" },
  { name: "Cybersecurity", clients: "Personal VPN, Auth systems", icon: "🔐" },
];

export default function IndustriesSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Ambient glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: "50%",
            top: "50%",
            width: 900,
            height: 600,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <motion.h1
          {...fade(0)}
          className="absolute left-[80px] top-[100px] z-10"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 72,
            fontWeight: 700,
            fontStyle: "italic",
            color: "hsl(var(--pres-text))",
          }}
        >
          Industries We{" "}
          <span style={{ color: "hsl(var(--pres-accent))" }}>Serve</span>
        </motion.h1>

        <motion.div
          {...fade(1)}
          className="accent-bar absolute left-[80px] top-[195px] z-10"
          style={{ width: 80 }}
        />

        <div className="absolute left-[60px] right-[60px] top-[230px] bottom-[80px] grid grid-cols-3 grid-rows-2 gap-5 z-10">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.3 + i * 0.09,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="glass-card flex flex-col justify-center p-8 relative overflow-hidden group"
            >
              <div
                className="absolute -top-10 -right-10 w-[160px] h-[160px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--pres-accent) / 0.12), transparent 70%)",
                }}
              />

              <div className="flex items-center gap-6">
                <span
                  className="flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{
                    width: 72,
                    height: 72,
                    fontSize: 38,
                    background: "hsl(var(--pres-accent) / 0.08)",
                    border: "1px solid hsl(var(--pres-accent) / 0.12)",
                  }}
                >
                  {ind.icon}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Ubuntu', sans-serif",
                      fontSize: 36,
                      fontWeight: 700,
                      color: "hsl(var(--pres-text))",
                    }}
                  >
                    {ind.name}
                  </p>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 18,
                      color: "hsl(var(--pres-text-dim))",
                      lineHeight: 1.5,
                    }}
                  >
                    {ind.clients}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}
