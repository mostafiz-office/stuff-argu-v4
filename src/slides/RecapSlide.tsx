import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const items = [
  { n: 1, text: '90+ engineers, designers, and marketers across 4 continents' },
  { n: 2, text: 'Top 1% talent — rigorous 5-stage hiring (3% acceptance rate)' },
  { n: 3, text: '13x average organic traffic growth for SEO clients' },
  { n: 4, text: '$100M+ partner portfolio under management' },
  { n: 5, text: 'Enterprise clients: Crossover, Veradigm, GL Banking' },
  { n: 6, text: '10M+ daily requests processed with 99.9% uptime' },
  { n: 7, text: 'Full-stack: .NET, React, AI/ML, Cloud, DevOps' },
  { n: 8, text: '60% cost savings vs. US/UK hiring with zero quality loss' },
];

export default function RecapSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, hsl(var(--pres-accent) / 0.015) 30px, hsl(var(--pres-accent) / 0.015) 31px)`,
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 10% 90%, hsl(var(--pres-accent) / 0.07) 0%, transparent 50%)',
        }} />

        <SlideHeader />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute left-[80px] top-[100px]"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 88,
            fontWeight: 700,
            color: 'hsl(var(--pres-text))',
            lineHeight: 1,
          }}
        >
          Recap
        </motion.h1>

        <div className="absolute left-[80px] top-[230px] right-[80px] bottom-[60px] z-10 grid grid-cols-2 gap-x-[20px] gap-y-[0px]" style={{ alignContent: 'space-evenly' }}>
          {items.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.45, ease: "easeOut" }}
              className="flex items-center gap-5 rounded-lg"
              style={{
                padding: '20px 24px',
                background: 'hsl(var(--pres-bg-surface) / 0.45)',
                border: '1px solid hsl(var(--pres-accent) / 0.15)',
              }}
            >
              <span
                className="flex-shrink-0 w-[48px] h-[48px] rounded-full flex items-center justify-center"
                style={{
                  border: '1.5px solid hsl(var(--pres-accent))',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 21,
                  fontWeight: 600,
                  color: 'hsl(var(--pres-accent))',
                }}
              >
                {item.n}
              </span>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 24,
                color: 'hsl(var(--pres-text-muted))',
                lineHeight: 1.4,
              }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}
