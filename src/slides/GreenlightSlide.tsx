import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import northernTrustLogo from "@/assets/logos/northern-trust.png";
import usbankLogo from "@/assets/logos/usbank.png";
import wsfsLogo from "@/assets/logos/wsfs-bank.png";
import greenlightLogo from "@/assets/logos/greenlight.png";

const fade = (i: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const } });

const features = [
  "Clear Social and Educational Impact",
  "19 developers worked together",
  "Large User Base & Market Validation",
  "Kid-friendly debit cards",
  "Spending controls",
  "Investing options",
];

const techStack = [
  { name: "Android", icon: "https://cdn.simpleicons.org/android/3DDC84" },
  { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" },
  { name: "Databricks", icon: "https://cdn.simpleicons.org/databricks/FF3621" },
  { name: "CloudFoundry", icon: "https://cdn.simpleicons.org/cloudfoundry/0C9ED5" },
];

export default function GreenlightSlide() {
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
          <motion.div {...fade(1)} className="flex items-center gap-4">
            <img src={greenlightLogo} alt="Greenlight" style={{ height: 56, width: 56, borderRadius: 12 }} />
            <div>
              <h2 style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 48, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.1 }}>Greenlight</h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'hsl(var(--pres-text-muted))' }}>Family Finance App</p>
            </div>
          </motion.div>

          <motion.p {...fade(2)} className="mt-8" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.75, textAlign: 'justify' }}>
            Greenlight helps parents teach kids financial literacy by providing a kid-friendly debit card and banking app with spending controls, automated allowances, and savings/investing tools. This empowers children to manage money responsibly while parents maintain oversight. With over 6 million users, Greenlight is shaping smart money habits for the next generation.
          </motion.p>

          {/* Tech Used */}
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
          {/* KPI cards */}
          <motion.div {...fade(1)} className="flex gap-4 mb-8">
            <div className="px-6 py-4 rounded-xl" style={{ background: 'hsl(var(--pres-accent) / 0.15)', border: '1px solid hsl(var(--pres-accent) / 0.3)' }}>
              <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 42, fontWeight: 700, color: 'hsl(var(--pres-accent))' }}>6M +</span>
              <span className="ml-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: 'hsl(var(--pres-text))' }}>Registered<br />Users</span>
            </div>
            <div className="px-6 py-4 rounded-xl" style={{ background: 'hsl(var(--pres-accent) / 0.15)', border: '1px solid hsl(var(--pres-accent) / 0.3)' }}>
              <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 42, fontWeight: 700, color: 'hsl(var(--pres-accent))' }}>$ 3.2B</span>
              <span className="ml-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: 'hsl(var(--pres-text))' }}>Valuation</span>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div {...fade(3)}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: 'hsl(var(--pres-text))' }}>Key Features</p>
            <ul className="mt-3 space-y-2">
              {features.map((f, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: 19, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.5 }}>
                  • {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Major Clients */}
          <motion.div {...fade(4)} className="mt-8">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: 'hsl(var(--pres-text))' }}>Major Clients</p>
            <div className="flex gap-4 mt-3 p-4 rounded-xl items-center" style={{ background: '#fff', border: '1px solid hsl(41 100% 50% / 0.08)' }}>
              {[{ name: 'US Bank', logo: usbankLogo, h: 42 }, { name: 'WSFS Bank', logo: wsfsLogo, h: 52 }, { name: 'Northern Trust', logo: northernTrustLogo, h: 84 }].map(c => (
                <div key={c.name} className="px-5 py-2 rounded-lg flex items-center justify-center" style={{ background: '#fff' }}>
                  <img src={c.logo} alt={c.name} style={{ height: c.h, width: 'auto', maxWidth: 180, objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom-right badge */}
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
