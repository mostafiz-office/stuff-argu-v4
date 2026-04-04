import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}/d4a843`;

const floatingIcons = [
  { slug: "python", x: 350, y: 100, size: 64, opacity: 0.15 },
  { slug: "dotnet", x: 900, y: 60, size: 52, opacity: 0.12 },
  { slug: "react", x: 180, y: 580, size: 72, opacity: 0.14 },
  { slug: "css3", x: 1500, y: 140, size: 70, opacity: 0.12 },
  { slug: "nodedotjs", x: 80, y: 300, size: 56, opacity: 0.13 },
  { slug: "amazonaws", x: 1400, y: 680, size: 64, opacity: 0.14 },
  { slug: "angular", x: 1700, y: 380, size: 52, opacity: 0.11 },
  { slug: "docker", x: 320, y: 800, size: 48, opacity: 0.12 },
  { slug: "tensorflow", x: 1200, y: 850, size: 44, opacity: 0.1 },
  { slug: "githubactions", x: 620, y: 880, size: 40, opacity: 0.11 },
  { slug: "vuedotjs", x: 1650, y: 760, size: 50, opacity: 0.1 },
  { slug: "googlecloud", x: 120, y: 830, size: 46, opacity: 0.09 },
];

export default function ProjectsDividerSlide() {
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
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 26, color: 'hsl(var(--pres-text-muted))', marginTop: 12 }}
          >
            Our Partners & Key Players Have Worked With
          </motion.p>
        </div>
      </div>
    </ScaledSlide>
  );
}
