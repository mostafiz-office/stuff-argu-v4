import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import validataLogo from "@/assets/logos/validata.png";
import bankOfSingaporeLogo from "@/assets/logos/bank-of-singapore.png";
import rbcLogo from "@/assets/logos/rbc.png";
import mufgLogo from "@/assets/logos/mufg.png";
import eastwestLogo from "@/assets/logos/eastwest.png";

const fade = (i: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const } });

const techStack = [
  { slug: "python", label: "Python" },
  { slug: "tensorflow", label: "TensorFlow" },
  { slug: "postgresql", label: "PostgreSQL" },
  { slug: "mongodb", label: "MongoDB" },
  { slug: "amazonaws", label: "AWS" },
  { slug: "microsoftazure", label: "Azure" },
];

const features = [
  "Real-Time Data Ingestion and Processing",
  "AI-Powered Data Quality and Governance",
  "Pre-Built Financial Services Integrations (AML, KYC, Risk Reporting)",
  "Self-Service Analytics and Visualization",
  "Cloud-Native Scalability (AWS, Azure)",
  "End-to-End Data Pipeline Monitoring and Automation",
];

const clients = [
  { name: "Bank of Singapore", logo: bankOfSingaporeLogo },
  { name: "RBC", logo: rbcLogo },
  { name: "MUFG", logo: mufgLogo },
  { name: "EastWest", logo: eastwestLogo },
];

export default function ConnectIQSlide() {
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
               <img src={validataLogo} alt="Validata" style={{ height: 280, width: 'auto', objectFit: 'cover' }} />
             </div>
            <h1 className="mt-2" style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 68, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.1 }}>
              Connect<span style={{ color: 'hsl(var(--pres-accent))' }}>IQ</span>
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))', marginTop: 6 }}>Cloud-Native Data Engine</p>
          </motion.div>

          <motion.p {...fade(2)} className="mt-7" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.85, textAlign: 'justify' }}>
            Connect IQ is a real-time, cloud-native DataOps platform for banking and financial services. It uses AI-driven automation, optimized ingestion, and governance to solve fragmented pipelines, slow integration, and compliance challenges. Our CEO worked on Connect IQ with Validata. The platform enables 50% faster data processing, 30% lower operational costs, and is deployed across 15+ global banks across cloud, on-premise, and hybrid environments.
          </motion.p>

          {/* Technology Used */}
          <motion.div {...fade(3)} className="mt-10">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 600, color: 'hsl(var(--pres-text))', marginBottom: 18 }}>Technology Used</p>
            <div className="flex gap-5 flex-wrap w-full">
              {techStack.map((t) => (
                <div key={t.slug} className="flex-1 h-[90px] rounded-xl flex flex-col items-center justify-center gap-2" style={{ background: 'hsl(var(--pres-bg-surface))', border: '1px solid hsl(var(--pres-accent) / 0.15)' }}>
                  <img src={`https://cdn.simpleicons.org/${t.slug}/ffffff`} alt={t.label} width="40" height="40" />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, color: 'hsl(var(--pres-text-dim))' }}>{t.label}</span>
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

          {/* Major Clients */}
          <motion.div {...fade(4)} className="mt-10">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: 'hsl(var(--pres-text))', marginBottom: 14 }}>Major Clients</p>
            <div className="flex gap-4">
              {clients.map((c) => (
                <div key={c.name} className="px-5 py-4 rounded-xl flex items-center justify-center" style={{ background: '#fff', border: '1px solid hsl(var(--pres-accent) / 0.15)', minWidth: 120 }}>
                  <img src={c.logo} alt={c.name} style={{ height: 40, width: 'auto', maxWidth: 100, objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
