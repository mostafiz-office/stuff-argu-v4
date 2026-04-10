import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const } });

const support = [
  { emoji: "🔍", title: "Performance Monitoring", desc: "Regular performance check-ins & reporting" },
  { emoji: "📚", title: "Skill Development", desc: "Ongoing training to upgrade talent capabilities" },
  { emoji: "👤", title: "Monthly CEO Review", desc: "1:1 client check-ins with Riseup-Asia CEO" },
  { emoji: "🔄", title: "Talent Replacement", desc: "Free fast replacement in rare cases" },
  { emoji: "📞", title: "Dedicated Support", desc: "Account manager for urgent help" },
  { emoji: "📊", title: "Quarterly Reviews", desc: "Project health & alignment check" },
];

const bonus = [
  { emoji: "👩‍💻", title: "Dev Lead (5+ yrs)", desc: "For technical excellence and mentorship." },
  { emoji: "📋", title: "Project Manager (3+ yrs)", desc: "Manages delivery & coordination." },
];

export default function AfterSalesSupportSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Title */}
        <div className="absolute left-[80px] top-[110px] right-[80px] z-10">
          <motion.h1 {...fade(0)} style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 52, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.1 }}>
            After-Sales Support &{' '}
            <span style={{ color: 'hsl(var(--pres-accent))' }}>Team Leadership</span>
          </motion.h1>
        </div>

        {/* Left column - Foundational Support */}
        <div className="absolute left-[80px] top-[220px] z-10" style={{ width: 820 }}>
          <motion.h2 {...fade(1)} style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 28, fontWeight: 700, color: 'hsl(var(--pres-text))', marginBottom: 24 }}>
            Our Foundational Support
          </motion.h2>

          <div className="space-y-4">
            {support.map((s, i) => (
              <motion.div key={s.title} {...fade(i + 2)} className="flex items-start gap-4" style={{ padding: '10px 16px', borderRadius: 10, background: 'hsl(var(--pres-bg-card) / 0.5)', border: '1px solid hsl(var(--pres-text-dim) / 0.15)' }}>
                <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{s.emoji}</span>
                <div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 19, fontWeight: 600, color: 'hsl(var(--pres-text))', lineHeight: 1.3 }}>
                    {s.title}
                  </p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.4, marginTop: 2 }}>
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column - Team Accelerator */}
        <div className="absolute right-[80px] top-[220px] z-10" style={{ width: 540 }}>
          <motion.h2 {...fade(2)} style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 28, fontWeight: 700, color: 'hsl(var(--pres-text))', marginBottom: 4 }}>
            The Team Accelerator Package
          </motion.h2>
          <motion.p {...fade(2)} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 500, color: 'hsl(var(--pres-text-muted))', marginBottom: 28 }}>
            Bonus for teams of 6+
          </motion.p>

          <div className="space-y-5">
            {bonus.map((b, i) => (
              <motion.div key={b.title} {...fade(i + 4)} style={{ padding: '18px 20px', borderRadius: 12, background: 'hsl(var(--pres-bg-card) / 0.6)', border: '1px solid hsl(var(--pres-accent) / 0.25)' }}>
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: 26 }}>{b.emoji}</span>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, color: 'hsl(var(--pres-text))' }}>{b.title}</p>
                </div>
                <p className="mt-2 ml-[42px]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.5 }}>{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Highlight box */}
          <motion.div {...fade(7)} className="mt-8" style={{ padding: '16px 20px', borderRadius: 10, background: 'linear-gradient(135deg, hsl(var(--pres-accent) / 0.12), hsl(var(--pres-accent) / 0.05))', border: '1px solid hsl(var(--pres-accent) / 0.3)' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'hsl(var(--pres-text))', lineHeight: 1.6 }}>
              <strong style={{ color: 'hsl(var(--pres-accent))' }}>We don't just place talent</strong> — we stay invested in your success long after onboarding.
            </p>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
