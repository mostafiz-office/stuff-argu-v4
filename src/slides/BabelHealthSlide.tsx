import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import babelHealthLogo from "@/assets/logos/babel-health.png";

const fade = (i: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const } });

const techStack = [
  { icon: "https://cdn.simpleicons.org/amazonaws/FF9900", label: "AWS" },
  { icon: "https://cdn.simpleicons.org/python/3776AB", label: "Python" },
  { icon: "https://cdn.simpleicons.org/docker/2496ED", label: "Docker" },
  { icon: "https://cdn.simpleicons.org/csharp/512BD4", label: "C#" },
  { icon: "https://cdn.simpleicons.org/javascript/F7DF1E", label: "JavaScript" },
  { icon: "https://cdn.simpleicons.org/angular/DD0031", label: "Angular" },
];

const features = [
  "70% less manual effort",
  "100+ clients",
  "60% faster releases",
  "$80K/month saved",
  "45% better performance",
  "100% HIPAA-compliant",
];

export default function BabelHealthSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden" style={{ background: 'hsl(var(--pres-bg))' }}>
        <SlideHeader />

        {/* Badge */}
        <motion.div {...fade(0)} className="absolute left-[80px] top-[120px]">
          <span className="px-7 py-2.5 rounded-full text-[18px] font-semibold" style={{ background: 'hsl(var(--pres-accent) / 0.2)', color: 'hsl(var(--pres-accent))', fontFamily: "'Poppins', sans-serif" }}>
            External Projects
          </span>
        </motion.div>

        {/* Left column */}
        <div className="absolute left-[80px] top-[180px]" style={{ width: 740 }}>
          <motion.div {...fade(1)}>
             <div className="overflow-hidden rounded-lg flex items-center justify-center" style={{ height: 100, width: 300, background: '#fff', paddingTop: 6 }}>
               <img src={babelHealthLogo} alt="Babel Health" style={{ height: 180, width: 'auto' }} />
             </div>
            <h1 className="mt-2" style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 68, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.1 }}>
              Babel <span style={{ color: 'hsl(var(--pres-accent))' }}>Health</span>
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))', marginTop: 6 }}>Healthcare SaaS Platform</p>
          </motion.div>

          <motion.p {...fade(2)} className="mt-7" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.85, textAlign: 'justify' }}>
            Built a scalable, data-driven SaaS platform for healthcare risk adjustment and encounter submissions by leading DevOps, architecture, and cloud migration initiatives. Developed microservices and CI/CD pipelines to reduce complexity, improve transparency, and modernize operations. Our Agile Coach Syedur worked with Babel Health. Results included 65% fewer manual processing errors, $80K monthly cost savings, real-time visibility for 100+ health plans, and support for 3× revenue growth.
          </motion.p>

          {/* Technology Used */}
          <motion.div {...fade(3)} className="mt-10">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 600, color: 'hsl(var(--pres-text))', marginBottom: 18 }}>Technology Used</p>
            <div className="flex gap-5 flex-wrap w-full">
               {techStack.map((t) => (
                <div key={t.label} className="flex-1 h-[90px] rounded-xl flex flex-col items-center justify-center gap-2" style={{ background: 'hsl(var(--pres-bg-surface))', border: '1px solid hsl(var(--pres-accent) / 0.15)' }}>
                  <img src={t.icon} alt={t.label} width="40" height="40" />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: 'hsl(var(--pres-text-dim))' }}>{t.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="absolute right-[80px] top-[180px]" style={{ width: 580 }}>
          {/* KPI */}
          <motion.div {...fade(2)} className="mb-10 rounded-2xl px-10 py-6 flex items-center gap-5" style={{ background: 'hsl(var(--pres-accent) / 0.15)' }}>
            <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 64, fontWeight: 700, color: 'hsl(var(--pres-accent))' }}>100K</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, color: 'hsl(var(--pres-text))' }}>Users in USA</span>
          </motion.div>

          {/* Key Features */}
          <motion.div {...fade(3)}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: 'hsl(var(--pres-text))', marginBottom: 14 }}>Key Features</p>
            <ul className="space-y-2.5">
              {features.map((f, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.08 }} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 19, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.5 }}>
                  • {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
