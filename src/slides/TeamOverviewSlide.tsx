import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const roles = [
  { count: 10, label: '10+', role: 'Software Engineers', color: 'hsl(var(--pres-accent))' },
  { count: 4, label: '4+', role: 'SEO & Marketing', color: 'hsl(45, 80%, 55%)' },
  { count: 1, label: '1+', role: 'UI/UX Designers', color: 'hsl(160, 60%, 45%)' },
  { count: 1, label: '1+', role: 'Project Managers', color: 'hsl(280, 50%, 55%)' },
  { count: 2, label: '2+', role: 'QA Engineers', color: 'hsl(200, 70%, 50%)' },
];

const total = roles.reduce((s, r) => s + r.count, 0);

function DonutChart() {
  const cx = 260, cy = 260, R = 220, r = 140;
  const gap = 0.012; // gap in radians between segments
  let cumulative = 0;

  const segments = roles.map((role) => {
    const frac = role.count / total;
    const startAngle = cumulative * 2 * Math.PI + gap;
    cumulative += frac;
    const endAngle = cumulative * 2 * Math.PI - gap;

    const x1o = cx + R * Math.cos(startAngle - Math.PI / 2);
    const y1o = cy + R * Math.sin(startAngle - Math.PI / 2);
    const x2o = cx + R * Math.cos(endAngle - Math.PI / 2);
    const y2o = cy + R * Math.sin(endAngle - Math.PI / 2);
    const x1i = cx + r * Math.cos(endAngle - Math.PI / 2);
    const y1i = cy + r * Math.sin(endAngle - Math.PI / 2);
    const x2i = cx + r * Math.cos(startAngle - Math.PI / 2);
    const y2i = cy + r * Math.sin(startAngle - Math.PI / 2);

    const largeArc = frac > 0.5 ? 1 : 0;

    const d = [
      `M ${x1o} ${y1o}`,
      `A ${R} ${R} 0 ${largeArc} 1 ${x2o} ${y2o}`,
      `L ${x1i} ${y1i}`,
      `A ${r} ${r} 0 ${largeArc} 0 ${x2i} ${y2i}`,
      'Z',
    ].join(' ');

    return { ...role, d };
  });

  return (
    <svg width={520} height={520} viewBox="0 0 520 520">
      {segments.map((seg, i) => (
        <motion.path
          key={seg.role}
          d={seg.d}
          fill={seg.color}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
      {/* Center text */}
      <text x={cx} y={cy - 14} textAnchor="middle" fill="hsl(var(--pres-accent))" fontFamily="'Ubuntu', sans-serif" fontSize={52} fontWeight={700}>
        18+
      </text>
      <text x={cx} y={cy + 24} textAnchor="middle" fill="hsl(var(--pres-text-muted))" fontFamily="'Poppins', sans-serif" fontSize={18}>
        Professionals
      </text>
    </svg>
  );
}

export default function TeamOverviewSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        {/* Crosshatch texture */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, hsl(var(--pres-accent) / 0.015) 30px, hsl(var(--pres-accent) / 0.015) 31px)`,
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 30% 60%, hsl(var(--pres-accent) / 0.06) 0%, transparent 55%)',
        }} />

        <SlideHeader />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute left-[80px] top-[100px]"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 88,
            fontWeight: 700,
            color: 'hsl(var(--pres-accent))',
            lineHeight: 1,
          }}
        >
          Team overview
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="absolute left-[80px] top-[210px]"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 24,
            color: 'hsl(var(--pres-text-muted))',
            maxWidth: 700,
          }}
        >
          18+ professionals across engineering, design, marketing, and operations.
        </motion.p>

        {/* Legend — left side, 3×2 card grid */}
        <div className="absolute left-[80px] top-[300px] w-[900px] bottom-[60px] grid grid-cols-3 gap-x-[40px] gap-y-[20px]" style={{ alignContent: 'center' }}>
          {roles.map((r, i) => (
            <motion.div
              key={r.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.45 }}
              className="flex flex-col items-center justify-center rounded-xl"
              style={{
                padding: '20px 12px',
                background: 'hsl(var(--pres-bg-surface) / 0.5)',
                border: `1.5px solid ${r.color}30`,
              }}
            >
              <span style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: 52,
                fontWeight: 700,
                color: r.color,
                lineHeight: 1,
              }}>
                {r.label}
              </span>
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 22,
                fontWeight: 500,
                color: 'hsl(var(--pres-text-muted))',
                marginTop: 10,
                textAlign: 'center',
              }}>
                {r.role}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Donut chart — right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute right-[100px] top-[280px]"
        >
          <DonutChart />
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
