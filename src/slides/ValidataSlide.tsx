import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import validataLogo from "@/assets/logos/validata.png";
import cwbLogo from "@/assets/logos/cwb.png";
import nlbLogo from "@/assets/logos/nlb.png";
import firstontarioLogo from "@/assets/logos/firstontario.png";
import asaLogo from "@/assets/logos/asa.png";
import bnfLogo from "@/assets/logos/bnf-bank.png";

const fade = (i: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const } });

const techStack = [
  { slug: "python", label: "Python" },
  { slug: "docker", label: "Docker" },
  { slug: "mongodb", label: "MongoDB" },
  { slug: "amazonaws", label: "AWS" },
  { slug: "apache", label: "Java" },
];

const clientLogos: Record<string, string> = {
  CWB: cwbLogo,
  NLB: nlbLogo,
  FirstOntario: firstontarioLogo,
  ASA: asaLogo,
  "BNF Bank": bnfLogo,
};
const clientNames = ["CWB", "NLB", "FirstOntario", "ASA", "BNF Bank"];

const features = [
  "95% Reduction in Test Design Effort",
  "60% Less Time Spent on Test Data Preparation",
  "80% Reduction in Environment Provisioning Delays",
  "100% No-Code Automation",
  "20× Faster Productivity",
  "25× Faster Delivery Speed",
];

export default function ValidataSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden" style={{ background: 'hsl(var(--pres-bg))' }}>
        <SlideHeader />

        {/* Badge - top left, below header with clear spacing */}
        <motion.div {...fade(0)} className="absolute left-[80px] top-[120px]">
          <span className="px-7 py-2.5 rounded-full text-[18px] font-semibold" style={{ background: 'hsl(var(--pres-accent) / 0.2)', color: 'hsl(var(--pres-accent))', fontFamily: "'Poppins', sans-serif" }}>
            External Projects
          </span>
        </motion.div>

        {/* Left column */}
        <div className="absolute left-[80px] top-[180px]" style={{ width: 740 }}>
          <motion.div {...fade(1)}>
             <div className="overflow-hidden rounded-lg flex items-center justify-center mb-2" style={{ height: 100, width: 300, background: '#fff', paddingTop: 6 }}>
               <img src={validataLogo} alt="Validata" style={{ height: 280, width: 'auto', objectFit: 'cover' }} />
             </div>
            <h1 style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 68, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.1 }}>
              <span style={{ color: 'hsl(var(--pres-accent))' }}>Validata</span>{" "}
              <span>Sense.ai</span>
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))', marginTop: 6 }}>AI testing platform</p>
          </motion.div>

          <motion.p {...fade(2)} className="mt-7" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.85, textAlign: 'justify' }}>
            Validata Sense.ai is a no-code AI testing platform for financial services that integrates with DevOps tools and core banking systems like Temenos. It supports functional, regression, mobile, API, and payments testing. Our CEO worked on Sense.ai with Validata. The platform delivered 95% less test design effort, 20× faster productivity, 25× quicker delivery, 4× higher risk coverage, and up to 90% lower QA costs.
          </motion.p>

          {/* Technology Used */}
          <motion.div {...fade(3)} className="mt-10">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 600, color: 'hsl(var(--pres-text))', marginBottom: 18 }}>Technology Used</p>
            <div className="flex gap-5 w-full">
              {techStack.map((t) => (
                <div key={t.slug} className="flex-1 h-[100px] rounded-xl flex flex-col items-center justify-center gap-2" style={{ background: 'hsl(var(--pres-bg-surface))', border: '1px solid hsl(var(--pres-accent) / 0.15)' }}>
                  <img src={`https://cdn.simpleicons.org/${t.slug}/ffffff`} alt={t.label} width="48" height="48" />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, color: 'hsl(var(--pres-text-dim))' }}>{t.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="absolute right-[80px] top-[180px]" style={{ width: 580 }}>
          {/* Banking stat */}
          <motion.div {...fade(2)} className="rounded-xl px-8 py-6 flex items-center gap-6" style={{ background: 'hsl(var(--pres-bg-surface))', border: '1px solid hsl(var(--pres-accent) / 0.15)' }}>
            <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 56, fontWeight: 700, color: 'hsl(var(--pres-accent))' }}>20+</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 21, color: 'hsl(var(--pres-text-muted))' }}>Banking clients worldwide</span>
          </motion.div>

          {/* Key Features */}
          <motion.div {...fade(3)} className="mt-8">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: 'hsl(var(--pres-text))', marginBottom: 14 }}>Key Features</p>
            <ul className="space-y-2.5">
              {features.map((f, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.08 }} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 19, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.5 }}>
                  • {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Major Clients */}
          <motion.div {...fade(5)} className="mt-10">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: 'hsl(var(--pres-text))', marginBottom: 18 }}>Major Clients</p>
            <div className="flex gap-4">
              {clientNames.map((c) => (
                <div key={c} className="flex-1 py-4 rounded-xl flex items-center justify-center" style={{ background: '#fff', border: '1px solid hsl(var(--pres-accent) / 0.15)' }}>
                  <img src={clientLogos[c]} alt={c} style={{ height: 32, width: 'auto', maxWidth: '90%', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
