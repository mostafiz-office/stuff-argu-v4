import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}/d4a843`;

const floatingIcons = [
  { slug: "react", x: 140, y: 200, size: 72, opacity: 0.15 },
  { slug: "nodedotjs", x: 380, y: 80, size: 56, opacity: 0.12 },
  { slug: "python", x: 1500, y: 140, size: 64, opacity: 0.14 },
  { slug: "typescript", x: 1700, y: 350, size: 52, opacity: 0.12 },
  { slug: "amazonaws", x: 1350, y: 750, size: 60, opacity: 0.13 },
  { slug: "docker", x: 250, y: 700, size: 48, opacity: 0.11 },
  { slug: "figma", x: 600, y: 850, size: 44, opacity: 0.1 },
  { slug: "tensorflow", x: 1600, y: 620, size: 50, opacity: 0.12 },
  { slug: "googlecloud", x: 80, y: 500, size: 46, opacity: 0.1 },
  { slug: "angular", x: 1200, y: 100, size: 54, opacity: 0.11 },
];

export default function ServicesDividerSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden flex items-center justify-center">
        <SlideHeader />

        {/* Subtle accent glow */}
        <div
          className="absolute z-[1]"
          style={{
            left: '50%', top: '50%', width: 800, height: 500,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Floating tech icons */}
        {floatingIcons.map((ic, i) => (
          <motion.img
            key={ic.slug}
            src={icon(ic.slug)}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: ic.opacity, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.07, duration: 0.8, ease: "easeOut" }}
            style={{ position: "absolute", left: ic.x, top: ic.y, width: ic.size, height: ic.size }}
          />
        ))}

        {/* Center text */}
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 80, fontWeight: 700, color: 'hsl(var(--pres-accent))' }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 26, color: 'hsl(var(--pres-text-muted))', marginTop: 12 }}
          >
            What We Deliver
          </motion.p>
        </div>
      </div>
    </ScaledSlide>
  );
}
