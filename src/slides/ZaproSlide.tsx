import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import peakXvLogo from "@/assets/logos/peak-xv.png";
import bobWLogo from "@/assets/logos/bob-w.png";
import zaproLogo from "@/assets/logos/zapro.png";

const fade = (i: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const } });

const features = [
  "Flexible UI with Easy Setup",
  "Advanced filtering and search",
  "Vendor management automation to boost operational efficiency",
  "30% procurement time reduction",
  "$5M Market Valuation and rapid growth",
];

const techStack = [
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
];

export default function ZaproSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <motion.div {...fade(0)} className="absolute left-[80px] top-[120px] z-10">
          <span className="px-7 py-2.5 rounded-full text-[18px] font-semibold" style={{ fontFamily: "'Poppins', sans-serif", background: 'hsl(var(--pres-accent) / 0.2)', color: 'hsl(var(--pres-accent))' }}>
            External Projects
          </span>
        </motion.div>

        {/* Left column */}
        <div className="absolute left-[80px] top-[180px] z-10" style={{ width: 740 }}>
          <motion.div {...fade(1)} className="flex items-center gap-4">
            <img src={zaproLogo} alt="Zapro.ai" style={{ height: 56, width: 56, borderRadius: 12 }} />
            <div>
              <h2 style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 48, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.1 }}>Zapro.ai</h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'hsl(var(--pres-text-muted))' }}>Vendor Management System</p>
            </div>
          </motion.div>

          <motion.p {...fade(2)} className="mt-8" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.75, textAlign: 'justify' }}>
            Zapro.ai is a $5M AI-powered procurement platform backed by Sequoia, streamlining vendor management and reducing costs. 10 developers worked together to make it happen. The platform serves over 200 clients, including Peak IV, reducing procurement time by 30%. It operates in India with plans to expand to the USA.
          </motion.p>

          <motion.div {...fade(4)} className="mt-10">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: 'hsl(var(--pres-text))' }}>Technology Used</p>
            <div className="flex gap-5 mt-3 p-4 rounded-xl items-center w-full" style={{ background: 'hsl(var(--pres-bg-surface))', border: '1px solid hsl(41 100% 50% / 0.08)' }}>
              {techStack.map(t => (
                <div key={t.name} className="flex-1 flex flex-col items-center gap-1">
                  <img src={t.icon} alt={t.name} className="w-[48px] h-[48px]" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="absolute right-[80px] top-[180px] z-10" style={{ width: 580 }}>
          <motion.div {...fade(1)} className="flex flex-col gap-4 mb-8">
            <div className="px-6 py-4 rounded-xl flex items-center gap-3" style={{ background: 'hsl(var(--pres-accent) / 0.15)', border: '1px solid hsl(var(--pres-accent) / 0.3)' }}>
              <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 42, fontWeight: 700, color: 'hsl(var(--pres-accent))' }}>300%</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: 'hsl(var(--pres-text))' }}>Increase in operational<br />efficiency</span>
            </div>
            <div className="px-6 py-4 rounded-xl flex items-center gap-3" style={{ background: 'hsl(var(--pres-accent) / 0.15)', border: '1px solid hsl(var(--pres-accent) / 0.3)' }}>
              <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 42, fontWeight: 700, color: 'hsl(var(--pres-accent))' }}>$ 100M</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: 'hsl(var(--pres-text))' }}>Annual<br />revenue</span>
            </div>
          </motion.div>

          <motion.div {...fade(3)}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: 'hsl(var(--pres-text))' }}>Key Features</p>
            <ul className="mt-3 space-y-2">
              {features.map((f, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.5 }}>
                  • {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fade(4)} className="mt-6">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: 'hsl(var(--pres-text))' }}>Major Clients</p>
            <div className="flex gap-4 mt-3 p-4 rounded-xl items-center" style={{ background: '#fff', border: '1px solid hsl(41 100% 50% / 0.08)' }}>
              {[{ name: 'Peak XV', logo: peakXvLogo }, { name: 'Bob W.', logo: bobWLogo }].map(c => (
                <div key={c.name} className="px-5 py-3 rounded-lg flex items-center justify-center" style={{ background: '#fff' }}>
                  <img src={c.logo} alt={c.name} style={{ height: 80, width: 'auto', maxWidth: 200, objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-[30px] right-[60px] z-10">
          <span className="px-4 py-1.5 rounded-full text-[13px]" style={{ fontFamily: "'Poppins', sans-serif", background: 'hsl(var(--pres-accent) / 0.3)', color: 'hsl(var(--pres-text-muted))' }}>
            *One of Our Waiting Candidates worked on this project
          </span>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
