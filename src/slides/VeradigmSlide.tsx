import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import veradigmLogo from "@/assets/logos/veradigm.png";

const fade = (i: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const } });

const techStack = [
  { name: "Teams", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { name: "Linear", icon: "https://cdn.simpleicons.org/linear/ffffff" },
  { name: "Confluence", icon: "https://cdn.simpleicons.org/confluence/ffffff" },
  { name: "Google", icon: "https://cdn.simpleicons.org/google/ffffff" },
  { name: "Jira", icon: "https://cdn.simpleicons.org/jira/ffffff" },
];

const features = [
  "Implemented SAFe across 3 Agile Release Trains",
  "45% better predictability",
  "35% faster releases",
  "200+ trained",
  "2,600+ employees reached",
  "40% higher productivity",
  "95% on-time delivery",
];

export default function VeradigmSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* External Projects badge */}
        <motion.div {...fade(0)} className="absolute left-[80px] top-[120px] z-10">
          <span className="px-7 py-2.5 rounded-full text-[18px] font-semibold" style={{ fontFamily: "'Poppins', sans-serif", background: 'hsl(var(--pres-accent) / 0.2)', color: 'hsl(var(--pres-accent))' }}>
            External Projects
          </span>
        </motion.div>

        {/* Left column */}
        <div className="absolute left-[80px] top-[180px] z-10" style={{ width: 740 }}>
          {/* Veradigm logo + title */}
          <motion.div {...fade(1)}>
            <div className="overflow-hidden rounded-lg flex items-center justify-center" style={{ height: 100, width: 300, background: '#fff', paddingTop: 6 }}>
              <img src={veradigmLogo} alt="Veradigm" style={{ height: 200, width: 'auto' }} />
            </div>
          </motion.div>
          <motion.h2 {...fade(1)} style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 42, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.15, marginTop: 11 }}>
            Agile Transformation & Mentorship
          </motion.h2>
          <motion.p {...fade(2)} className="mt-1" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: 'hsl(var(--pres-text-muted))' }}>
            SAFe Implementation & Growth Initiative
          </motion.p>

          {/* Description */}
          <motion.p {...fade(3)} className="mt-8" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.75, textAlign: 'justify' }}>
            The organization faced slow release cycles, limited cross-team predictability, and a need for stronger employee development at scale. Our Agile Coach Syedur worked with Veradigm. Led a large-scale Agile transformation across 300+ associates with ART implementation, enterprise training, and mentoring, while also designing and scaling a structured mentorship program across multiple countries. Reduced release cycle time by 35%, improved predictability by 45%, increased performance and engagement by 40%, and boosted promotion readiness by 30%.
          </motion.p>

          {/* Tech Used */}
          <motion.div {...fade(4)} className="mt-8">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: 'hsl(var(--pres-text))' }}>Technology Used</p>
            <div className="flex gap-4 mt-3 p-4 rounded-xl w-full" style={{ background: 'hsl(var(--pres-bg-surface))', border: '1px solid hsl(41 100% 50% / 0.08)' }}>
              {techStack.map(t => (
                <div key={t.name} className="flex-1 flex flex-col items-center gap-1">
                  <img src={t.icon} alt={t.name} className="w-[48px] h-[48px]" style={{ filter: 'brightness(0) invert(1)' }} />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: 'hsl(var(--pres-text-dim))' }}>{t.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column - Key Features */}
        <motion.div {...fade(3)} className="absolute right-[80px] top-[180px] z-10" style={{ width: 580 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: 'hsl(var(--pres-text))' }}>Key Features</p>
          <ul className="mt-4 space-y-3">
            {features.map((f, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.5 }}>
                • {f}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
