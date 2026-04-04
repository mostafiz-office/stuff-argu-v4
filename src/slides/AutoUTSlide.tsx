import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import crossoverLogo from "@/assets/logos/crossover.png";

const fade = (i: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const } });

const techStack = [
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java" },
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", label: "C#" },
];

const features = [
  "50K+ lines of code in Java & C# projects",
  "Automates 100+ unit tests",
  "Integrates 3 engines",
  "50%+ coverage on legacy",
  "30–40% faster execution",
  "100% standards compliance",
];

export default function AutoUTSlide() {
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
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-lg" style={{ background: '#fff' }}>
                <img src={crossoverLogo} alt="Crossover" style={{ height: 44, width: 'auto' }} />
              </div>
            </div>
            <h1 className="mt-2" style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 68, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.1 }}>
              Auto<span style={{ color: 'hsl(var(--pres-accent))' }}>UT</span>
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))', marginTop: 6 }}>Automated Testing Platform</p>
          </motion.div>

          <motion.p {...fade(2)} className="mt-7" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.85, textAlign: 'justify' }}>
            AutoUT is an AI-powered unit test automation platform for large-scale Java and C# applications. It auto-generates, executes, and optimizes unit tests using in-house and third-party tools. Our CEO worked on AutoUT with Crossover. Built for enterprise use, it supports 50,000+ lines of code, improves coverage, integrates with CI/CD, and produces maintainable test suites aligned with best practices.
          </motion.p>

          {/* Technology Used */}
          <motion.div {...fade(3)} className="mt-10">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 600, color: 'hsl(var(--pres-text))', marginBottom: 18 }}>Technology Used</p>
            <div className="flex gap-5 w-full">
              {techStack.map((t) => (
                <div key={t.label} className="flex-1 h-[100px] rounded-xl flex flex-col items-center justify-center gap-2" style={{ background: 'hsl(var(--pres-bg-surface))', border: '1px solid hsl(var(--pres-accent) / 0.15)' }}>
                  <img src={t.url} alt={t.label} width="48" height="48" />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: 'hsl(var(--pres-text-dim))' }}>{t.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="absolute right-[80px] top-[180px]" style={{ width: 580 }}>
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
