import React from "react";

const STAGES = [
  { name: "Initial Sign-Up", color: "hsl(200, 80%, 50%)" },
  { name: "Training & Assessment", color: "hsl(160, 70%, 42%)" },
  { name: "Practical Assignment", color: "hsl(35, 90%, 55%)" },
  { name: "Client-Specific Simulation", color: "hsl(350, 75%, 55%)" },
  { name: "Live Test & Hire", color: "hsl(41, 100%, 50%)" },
];

/**
 * PyramidVisual — simplified static hiring-pyramid graphic for the solution
 * bridge (FB-12/FB-13). Five stacked stages, bottom = stage 1. The full
 * interactive explorer lived on the old standalone pyramid slide.
 */
export const PyramidVisual: React.FC<{ className?: string }> = ({ className = "" }) => {
  const layers = STAGES.map((s, i) => {
    const yt = 448 - i * 112;
    const yb = yt + 104;
    const bhw = 280 - i * 36;
    const thw = 244 - i * 36;
    const pts = `${300 - bhw},${yb} ${300 + bhw},${yb} ${300 + thw},${yt} ${300 - thw},${yt}`;
    return { ...s, pts, cy: yt + 52, num: i + 1 };
  });

  return (
    <div className={className}>
      <svg viewBox="0 0 600 560" className="w-full h-auto" role="img" aria-label="Five-stage hiring pyramid">
        <defs>
          {STAGES.map((s, i) => (
            <linearGradient key={i} id={`sbPyr${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} />
              <stop offset="100%" stopColor={s.color} stopOpacity="0.72" />
            </linearGradient>
          ))}
        </defs>
        {layers.map((l) => (
          <g key={l.num}>
            <polygon points={l.pts} fill={`url(#sbPyr${l.num - 1})`} stroke="rgba(0,0,0,0.35)" strokeWidth="2" strokeLinejoin="round" />
            <circle cx={300} cy={l.cy} r={26} fill="rgba(0,0,0,0.45)" stroke="white" strokeWidth={2} />
            <text x={300} y={l.cy + 1} fill="white" fontFamily="var(--font-heading, 'Ubuntu', sans-serif)" fontWeight={700} fontSize={24} textAnchor="middle" dominantBaseline="central">
              {l.num}
            </text>
          </g>
        ))}
      </svg>
      <ul className="mt-4 space-y-2">
        {STAGES.map((s, i) => (
          <li key={s.name} className="flex items-center gap-3 text-[18px] text-pres-text-muted">
            <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full font-heading text-[14px] font-bold text-white" style={{ background: s.color }}>
              {i + 1}
            </span>
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
