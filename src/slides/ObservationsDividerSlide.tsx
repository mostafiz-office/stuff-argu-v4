import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}/d4a843`;

const floatingIcons = [
  { slug: "openai", x: 300, y: 150, size: 60, opacity: 0.14 },
  { slug: "python", x: 1550, y: 200, size: 52, opacity: 0.12 },
  { slug: "react", x: 150, y: 600, size: 64, opacity: 0.13 },
  { slug: "kubernetes", x: 1650, y: 550, size: 48, opacity: 0.11 },
  { slug: "postgresql", x: 500, y: 800, size: 50, opacity: 0.1 },
  { slug: "graphql", x: 1300, y: 120, size: 46, opacity: 0.11 },
];

export default function ObservationsDividerSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden flex items-center justify-center">
        <SlideHeader />

        <div
          className="absolute z-[1]"
          style={{
            left: '50%', top: '50%', width: 800, height: 500,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

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

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 80, fontWeight: 700, color: 'hsl(var(--pres-accent))' }}
          >
            Any Observations?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 26, color: 'hsl(var(--pres-text-muted))', marginTop: 12 }}
          >
            Let's Discuss
          </motion.p>
        </div>
      </div>
    </ScaledSlide>
  );
}
