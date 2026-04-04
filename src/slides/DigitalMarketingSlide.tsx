import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const } });

export default function DigitalMarketingSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />
        <div className="absolute left-[80px] top-[120px] max-w-[680px] z-10">
          <motion.h1 {...fade(0)} style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 80, fontWeight: 700, fontStyle: 'italic', color: 'hsl(var(--pres-accent))', lineHeight: 1.05 }}>
            Digital<br />Marketing
          </motion.h1>
          <motion.p {...fade(1)} className="mt-6" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 21, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.7, maxWidth: 500 }}>
            SEO, performance marketing, social media, and content strategy — all data-driven.
          </motion.p>
        </div>
        <motion.div {...fade(2)} className="absolute right-[80px] top-[140px] z-10 space-y-5" style={{ width: 680 }}>
          {[
            { title: 'SEO & AEO', desc: 'Technical SEO, content optimization, AI engine optimization.' },
            { title: 'Performance Marketing', desc: 'Google Ads, Meta Ads, LinkedIn — ROI-focused campaigns.' },
            { title: 'Social Media', desc: 'Strategy, content creation, community management.' },
            { title: 'Email Marketing', desc: 'Automated funnels, segmentation, and personalization.' },
          ].map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
              className="pl-6 py-3" style={{ borderLeft: '3px solid hsl(var(--pres-accent))' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 21, fontWeight: 600, color: 'hsl(var(--pres-text))' }}>{s.title}</p>
              <p className="mt-1" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-dim))', lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
