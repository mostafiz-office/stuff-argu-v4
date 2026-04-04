import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const } });

const pillars = [
  { year: '2015', mode: 'EASY', items: ['Basic keyword targeting', 'Link building basics', 'Simple content'], ctr: '-35%', threat: 'None' },
  { year: '2020', mode: 'NORMAL', items: ['E-A-T matters', 'Content quality rising', 'Featured snippets'], ctr: '-22%', threat: 'Low' },
  { year: '2024', mode: 'ADVANCED', items: ['AI Overviews launched', 'CTR cratering', 'LLMs entering'], ctr: '-1.76%', threat: 'High' },
  { year: '2025', mode: 'HARD', items: ['AI Mode default', 'Brand is the moat', 'Visibility > traffic'], ctr: '-0.61%', threat: 'Critical' },
];

export default function SEOEvolutionSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />
        <motion.p {...fade(0)} className="absolute left-0 right-0 top-[100px] text-center" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, color: 'hsl(var(--pres-text-muted))' }}>
          SEO in 2025 is SEO on <span style={{ color: 'hsl(var(--pres-accent))', fontWeight: 700 }}>hard-mode.</span>
        </motion.p>
        <div className="absolute left-[80px] right-[80px] top-[180px] bottom-[60px] grid grid-cols-4 gap-5 z-10">
          {pillars.map((p, i) => (
            <motion.div key={p.year} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className="rounded-2xl p-6 flex flex-col" style={{ background: 'hsl(var(--pres-bg-surface))', border: '1px solid hsl(41 100% 50% / 0.1)' }}>
              <p className="text-center mb-1" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 19, fontWeight: 600, color: i === 3 ? 'hsl(var(--pres-accent))' : 'hsl(var(--pres-text-dim))', letterSpacing: '0.1em' }}>{p.mode}</p>
              <p className="text-center mb-4" style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 48, fontWeight: 700, color: i === 3 ? 'hsl(var(--pres-accent))' : 'hsl(var(--pres-text))' }}>{p.year}</p>
              <div className="w-full h-[6px] rounded-full mb-5" style={{ background: `linear-gradient(90deg, hsl(var(--pres-accent)) ${(i + 1) * 25}%, hsl(var(--border)) ${(i + 1) * 25}%)` }} />
              <div className="space-y-2 flex-1">
                {p.items.map(item => (
                  <p key={item} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 19, color: 'hsl(var(--pres-text-dim))', lineHeight: 1.5 }}>{item}</p>
                ))}
              </div>
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid hsl(var(--border))' }}>
                <div className="flex justify-between"><span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-dim))' }}>Organic CTR</span><span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, color: 'hsl(var(--pres-accent))' }}>{p.ctr}</span></div>
                <div className="flex justify-between mt-1"><span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-dim))' }}>AI threat</span><span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, color: i === 3 ? '#ff6b6b' : 'hsl(var(--pres-accent))' }}>{p.threat}</span></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}
