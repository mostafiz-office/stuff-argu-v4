import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const } });

export default function KeyStatsSlide() {
  const groups = [
    {
      year: '2025',
      bars: [
        { label: 'AI Accuracy %', value: 35, display: '35', color: 'hsl(var(--pres-accent))' },
        { label: 'Models Deployed', value: 30, display: '30', color: 'hsl(41 55% 42%)' },
      ],
    },
    {
      year: '2026',
      bars: [
        { label: 'AI Accuracy %', value: 65, display: '65', color: 'hsl(var(--pres-accent))' },
        { label: 'Models Deployed', value: 60, display: '60', color: 'hsl(41 55% 42%)' },
      ],
    },
  ];

  const maxVal = 100;
  const barMaxH = 360;

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <div className="absolute left-[80px] top-[120px] max-w-[680px] z-10">
          <motion.h1 {...fade(0)} style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 80, fontWeight: 700, fontStyle: 'italic', color: 'hsl(var(--pres-accent))', lineHeight: 1.05 }}>
            Team growth<br />acceleration
          </motion.h1>
          <motion.p {...fade(1)} className="mt-6" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 21, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.7, maxWidth: 480 }}>
            Since 2005, Riseup-asia has grown from 3 to <strong style={{ color: 'hsl(var(--pres-accent))' }}>65+ members</strong> delivering enterprise solutions across 4 continents.
          </motion.p>
          <motion.p {...fade(2)} className="mt-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 19, color: 'hsl(var(--pres-text-dim))' }}>Est. 2005 · Internal Data (2026)</motion.p>
        </div>

        <motion.div {...fade(2)} className="absolute right-[80px] top-[100px] z-10" style={{ width: 720 }}>
          {/* Title */}
          <p className="text-center" style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 36, fontWeight: 700, color: 'hsl(var(--pres-text))', marginBottom: 4 }}>
            AI Adoption & Model Deployments
          </p>
          <p className="text-center" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: 'hsl(var(--pres-text-dim))', marginBottom: 16 }}>
            2025 – 2026
          </p>

          {/* Legend */}
          <div className="flex items-center justify-center gap-8" style={{ marginBottom: 28 }}>
            <div className="flex items-center gap-2">
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'hsl(var(--pres-accent))' }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'hsl(var(--pres-text-muted))' }}>AI Accuracy %</span>
            </div>
            <div className="flex items-center gap-2">
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'hsl(41 55% 42%)' }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'hsl(var(--pres-text-muted))' }}>Models Deployed</span>
            </div>
          </div>

          {/* Chart area */}
          <div className="relative" style={{ height: barMaxH + 60 }}>
            {/* Y-axis labels */}
            {[100, 75, 50].map((tick) => (
              <div
                key={tick}
                className="absolute flex items-center"
                style={{
                  left: 0,
                  bottom: ((tick / maxVal) * barMaxH) + 40,
                  width: '100%',
                }}
              >
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: 'hsl(var(--pres-text-dim))', width: 48, textAlign: 'right' }}>{tick}%</span>
                <div style={{ flex: 1, height: 1, background: 'hsl(var(--pres-text-dim) / 0.15)', marginLeft: 8 }} />
              </div>
            ))}

            {/* Grouped bars */}
            <div className="flex items-end justify-center gap-[100px]" style={{ height: barMaxH, position: 'absolute', bottom: 40, left: 56, right: 0 }}>
              {groups.map((g, gi) => (
                <div key={g.year} className="flex flex-col items-center">
                  <div className="flex items-end gap-[14px]">
                    {g.bars.map((b, bi) => {
                      const h = (b.value / maxVal) * barMaxH;
                      return (
                        <motion.div
                          key={b.label}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: 0.5 + gi * 0.2 + bi * 0.1, duration: 0.6 }}
                          style={{ transformOrigin: 'bottom' }}
                          className="flex flex-col items-center"
                        >
                          <span style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 20,
                            fontWeight: 700,
                            color: b.color,
                            marginBottom: 6,
                          }}>
                            {b.display}
                          </span>
                          <div style={{
                            width: 56,
                            height: h,
                            borderRadius: '8px 8px 4px 4px',
                            background: `linear-gradient(180deg, ${b.color}, ${b.color.replace(')', ' / 0.7)')})`,
                          }} />
                        </motion.div>
                      );
                    })}
                  </div>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: 'hsl(var(--pres-text))',
                    marginTop: 14,
                  }}>
                    {g.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
