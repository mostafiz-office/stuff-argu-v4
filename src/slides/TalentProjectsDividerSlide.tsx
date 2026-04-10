import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}/d4a843`;

const floatingIcons = [
  { slug: "python", x: 350, y: 150, size: 64, opacity: 0.15 },
  { slug: "dotnet", x: 820, y: 80, size: 48, opacity: 0.11 },
  { slug: "react", x: 200, y: 550, size: 72, opacity: 0.14 },
  { slug: "css3", x: 1200, y: 200, size: 70, opacity: 0.1 },
  { slug: "nodedotjs", x: 80, y: 280, size: 56, opacity: 0.12 },
  { slug: "amazonaws", x: 1100, y: 620, size: 64, opacity: 0.13 },
  { slug: "docker", x: 650, y: 750, size: 48, opacity: 0.11 },
];

export default function TalentProjectsDividerSlide() {
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
            Our Talents Have Worked With
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute bottom-[40px] right-[60px] z-10"
        >
          <span className="px-5 py-2 rounded-full text-[14px] font-medium" style={{ fontFamily: "'Poppins', sans-serif", background: 'hsl(var(--pres-accent) / 0.15)', color: 'hsl(var(--pres-accent))', border: '1px solid hsl(var(--pres-accent) / 0.3)' }}>
            Not Directly Riseup-Asia Has Worked With
          </span>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
