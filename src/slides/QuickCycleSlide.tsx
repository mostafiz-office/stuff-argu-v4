import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { ClipboardList, Paintbrush, MessageSquare, Rocket } from "lucide-react";

const stages = [
  { icon: ClipboardList, num: "01", title: "Brief & Estimation", items: ["Client brief explanation", "Project timeline & scope"], bg: "hsl(43 90% 80%)", border: "hsl(43 80% 65%)", accent: "#d4a017" },
  { icon: Paintbrush, num: "02", title: "UI/UX Design", items: ["Sitemap / Userflow / IA", "Sketch & Wireframe"], bg: "hsl(350 60% 88%)", border: "hsl(350 50% 78%)", accent: "#c45c6a" },
  { icon: MessageSquare, num: "03", title: "Feedback", items: ["Usability Testing", "Feedback & Iteration", "Design Update"], bg: "hsl(15 60% 85%)", border: "hsl(15 50% 75%)", accent: "#c47a50" },
  { icon: Rocket, num: "04", title: "Final Delivery", items: ["Developer Handoff", "Design Documentation", "Prototype"], bg: "hsl(200 60% 88%)", border: "hsl(200 50% 78%)", accent: "#4a90b8" },
];

const CIRCLE_SIZE = 440;
const LEFT = 30;
const RIGHT = 30;
const TOTAL_W = 1920 - LEFT - RIGHT;
const spacing = (TOTAL_W - stages.length * CIRCLE_SIZE) / (stages.length - 1);

const CIRCLE_DURATION = 0.5;
const ARROW_DURATION = 0.6;
const BASE_DELAY = 0.3;

function getStageDelay(i: number) {
  return BASE_DELAY + i * (CIRCLE_DURATION + ARROW_DURATION);
}

function getArrowDelay(i: number) {
  return getStageDelay(i) + CIRCLE_DURATION;
}

export default function QuickCycleSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <div className="absolute left-[80px] top-[90px] z-10" style={{ maxWidth: 900 }}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 58, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.1 }}
          >
            Development Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-2"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))' }}
          >
            Our Application Development Cycle — From Brief to Delivery
          </motion.p>
        </div>

        {/* Arrows layer */}
        <svg
          className="absolute z-[9] pointer-events-none"
          style={{ left: LEFT, top: 250, width: TOTAL_W, height: 560 }}
        >
          <defs>
            {stages.slice(0, -1).map((_, i) => (
              <marker
                key={`head-${i}`}
                id={`arrowhead-${i}`}
                markerWidth="10"
                markerHeight="8"
                refX="9"
                refY="4"
                orient="auto"
              >
                <motion.path
                  d="M0,0.5 L9,4 L0,7.5"
                  fill="none"
                  stroke={stages[i + 1].accent}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: getArrowDelay(i) + ARROW_DURATION * 0.7, duration: 0.2 }}
                />
              </marker>
            ))}
          </defs>

          {stages.slice(0, -1).map((_, i) => {
            const x1 = i * (CIRCLE_SIZE + spacing) + CIRCLE_SIZE - 10;
            const x2 = (i + 1) * (CIRCLE_SIZE + spacing) + 10;
            const cy = 230;
            const midX = (x1 + x2) / 2;
            const curveY = cy - 60;
            const path = `M${x1},${cy} Q${midX},${curveY} ${x2},${cy}`;

            return (
              <motion.path
                key={`arrow-${i}`}
                d={path}
                fill="none"
                stroke={stages[i + 1].accent}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeDasharray="8 6"
                markerEnd={`url(#arrowhead-${i})`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{
                  pathLength: { delay: getArrowDelay(i), duration: ARROW_DURATION, ease: "easeInOut" },
                  opacity: { delay: getArrowDelay(i), duration: 0.1 },
                }}
              />
            );
          })}
        </svg>

        {/* Circles layer */}
        <div
          className="absolute z-10 flex items-center justify-between"
          style={{ left: LEFT, right: RIGHT, top: 250, bottom: 20 }}
        >
          {stages.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: getStageDelay(i),
                duration: CIRCLE_DURATION,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="flex flex-col items-center justify-center text-center rounded-full shrink-0"
              style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE, background: s.bg, border: `2px solid ${s.border}` }}
            >
              <s.icon size={44} color="#1a1a1a" strokeWidth={1.5} />
              <p className="mt-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#555', letterSpacing: 1 }}>Stage — {s.num}</p>
              <p className="mt-1" style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 26, fontWeight: 700, color: '#1a1a1a' }}>{s.title}</p>
              <ul className="mt-3 text-left" style={{ paddingLeft: 60, paddingRight: 60 }}>
                {s.items.map(item => (
                  <li key={item} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: '#333', lineHeight: 1.9 }}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}