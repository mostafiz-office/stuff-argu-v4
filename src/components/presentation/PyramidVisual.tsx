import React from "react";

const STAGES = [
  { name: "Initial Sign-Up", color: "hsl(200, 80%, 50%)" },
  { name: "Training & Assessment", color: "hsl(160, 70%, 42%)" },
  { name: "Practical Assignment", color: "hsl(35, 90%, 55%)" },
  { name: "Client-Specific Simulation", color: "hsl(350, 75%, 55%)" },
  { name: "Live Test & Hire", color: "hsl(41, 100%, 50%)" },
];

/**
 * PyramidVisual — static hiring-pyramid graphic for the solution bridge
 * (FB-12/FB-13). A TRUE TRIANGLE silhouette (owner direction Oct 20: match
 * the original pyramid slide) — five bands sliced from one triangle, so both
 * sides run in a single straight line from the apex point to the base
 * corners; the top band is a small triangle, not a flat-topped bar.
 * Bottom = stage 1. The full interactive explorer lived on the old
 * standalone pyramid slide.
 */
export const PyramidVisual: React.FC<{ className?: string }> = ({ className = "" }) => {
  const CX = 300;
  const APEX_Y = 8;
  const BASE_Y = 552;
  const H = BASE_Y - APEX_Y;
  const BASE_HW = 280;
  const GAP = 3;
  // Half-width of the triangle at a given y — linear from 0 at the apex to
  // BASE_HW at the base, which is what keeps both sides perfectly straight.
  const hwAt = (y: number) => (BASE_HW * (y - APEX_Y)) / H;

  const layers = STAGES.map((s, i) => {
    const bandH = H / 5;
    const yTopRaw = APEX_Y + (4 - i) * bandH;
    const yBotRaw = APEX_Y + (5 - i) * bandH;
    const yTop = i === 4 ? yTopRaw : yTopRaw + GAP;
    const yBot = i === 0 ? yBotRaw : yBotRaw - GAP;
    const pts =
      i === 4
        ? `${CX},${yTop} ${CX + hwAt(yBot)},${yBot} ${CX - hwAt(yBot)},${yBot}`
        : `${CX - hwAt(yBot)},${yBot} ${CX + hwAt(yBot)},${yBot} ${CX + hwAt(yTop)},${yTop} ${CX - hwAt(yTop)},${yTop}`;
    // Top band is a triangle: its visual center sits ~2/3 down from the apex.
    const cy = i === 4 ? yTop + (yBot - yTop) * 0.66 : (yTop + yBot) / 2;
    return { ...s, pts, cy, num: i + 1 };
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
