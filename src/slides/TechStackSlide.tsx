import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const },
});

// Simple Icons via jsDelivr (stable path)
const icon = (slug: string) => `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;

const stacks = [
  {
    cat: "Backend",
    color: "hsl(200, 70%, 50%)",
    items: [
      { label: ".NET / C#", icon: icon("dotnet") },
      { label: "Node.js", icon: icon("nodedotjs") },
      { label: "Python", icon: icon("python") },
      { label: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
  {
    cat: "Frontend",
    color: "hsl(190, 80%, 45%)",
    items: [
      { label: "React", icon: icon("react") },
      { label: "Angular", icon: icon("angular") },
      { label: "Next.js", icon: icon("nextdotjs") },
      { label: "Vue.js", icon: icon("vuedotjs") },
    ],
  },
  {
    cat: "Cloud",
    color: "hsl(30, 90%, 55%)",
    items: [
      { label: "AWS", icon: icon("amazonwebservices") },
      { label: "Azure", icon: icon("microsoftazure") },
      { label: "GCP", icon: icon("googlecloud") },
      { label: "Docker/K8s", icon: icon("docker") },
    ],
  },
  {
    cat: "AI / ML",
    color: "hsl(280, 55%, 55%)",
    items: [
      { label: "TensorFlow", icon: icon("tensorflow") },
      { label: "PyTorch", icon: icon("pytorch") },
      { label: "OpenAI", icon: icon("openai") },
      { label: "LangChain", icon: icon("langchain") },
    ],
  },
  {
    cat: "DevOps",
    color: "hsl(145, 55%, 42%)",
    items: [
      { label: "GitHub Actions", icon: icon("githubactions") },
      { label: "Jenkins", icon: icon("jenkins") },
      { label: "Terraform", icon: icon("terraform") },
      { label: "Ansible", icon: icon("ansible") },
    ],
  },
];

const hexPath = (cx: number, cy: number, r: number) => {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  });
  return `M${pts.join("L")}Z`;
};

const HEX_R = 72;
const HEX_W = HEX_R * Math.sqrt(3);
const GAP_X = 10;
const GAP_Y = 10;

interface HexTile {
  x: number;
  y: number;
  label: string;
  icon: string;
  color: string;
  delay: number;
}

function buildCluster(
  originX: number,
  originY: number,
  cat: { cat: string; color: string; items: { label: string; icon: string }[] },
  baseDelay: number
): { tiles: HexTile[]; centerX: number; centerY: number; catName: string; color: string } {
  const tiles: HexTile[] = [];
  const positions = [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
  ];

  positions.forEach(([col, row], i) => {
    const offsetX = row % 2 !== 0 ? (HEX_W + GAP_X) / 2 : 0;
    tiles.push({
      x: originX + col * (HEX_W + GAP_X) + offsetX,
      y: originY + row * (HEX_R * 1.5 + GAP_Y),
      label: cat.items[i].label,
      icon: cat.items[i].icon,
      color: cat.color,
      delay: baseDelay + i * 0.06,
    });
  });

  const cx = (Math.min(...tiles.map(t => t.x)) + Math.max(...tiles.map(t => t.x))) / 2;
  const cy = (Math.min(...tiles.map(t => t.y)) + Math.max(...tiles.map(t => t.y))) / 2;

  return { tiles, centerX: cx, centerY: cy, catName: cat.cat, color: cat.color };
}

export default function TechStackSlide() {
  // Top row: 3 clusters evenly spaced, bottom row: 2 clusters centered
  const gridLeft = 560;
  const topRowGap = 360;
  const topY = 240;
  const bottomY = 620;

  const clusterPositions = [
    { x: gridLeft, y: topY },
    { x: gridLeft + topRowGap, y: topY },
    { x: gridLeft + topRowGap * 2, y: topY },
    { x: gridLeft + topRowGap * 0.5, y: bottomY },
    { x: gridLeft + topRowGap * 1.5, y: bottomY },
  ];

  const clusters = stacks.map((s, i) =>
    buildCluster(clusterPositions[i].x, clusterPositions[i].y, s, 0.3 + i * 0.12)
  );

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Background radial glows */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: [
              "radial-gradient(ellipse 600px 400px at 30% 40%, hsla(30, 90%, 55%, 0.06) 0%, transparent 70%)",
              "radial-gradient(ellipse 500px 500px at 75% 30%, hsla(200, 70%, 50%, 0.05) 0%, transparent 70%)",
              "radial-gradient(ellipse 400px 400px at 60% 75%, hsla(280, 55%, 55%, 0.05) 0%, transparent 70%)",
            ].join(", "),
          }}
        />

        {/* Title + Legend (integrated together on the left) */}
        <div className="absolute left-[80px] top-[220px] max-w-[400px] z-10">
          <motion.h1
            {...fade(0)}
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 76,
              fontWeight: 700,
              fontStyle: "italic",
              color: "hsl(var(--pres-accent))",
              lineHeight: 1.05,
            }}
          >
            Tech stack
          </motion.h1>
          <motion.p
            {...fade(1)}
            className="mt-5"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 20,
              color: "hsl(var(--pres-text-muted))",
              lineHeight: 1.7,
            }}
          >
            We work with the tools that fit your project — modern, battle-tested,
            and scalable.
          </motion.p>

          {/* Legend — directly below description */}
          <motion.div {...fade(2)} className="mt-8 flex flex-col gap-3">
            {stacks.map((s) => (
              <div key={s.cat} className="flex items-center gap-3">
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 3,
                    background: s.color,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
                    color: "hsl(var(--pres-text-muted))",
                  }}
                >
                  {s.cat}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hex Grid SVG */}
        <svg
          className="absolute inset-0 z-10"
          width="1920"
          height="1080"
          viewBox="0 0 1920 1080"
          style={{ pointerEvents: "none" }}
        >
          {/* Radial glow per cluster */}
          <defs>
            {clusters.map((cluster, i) => (
              <radialGradient key={`glow-${i}`} id={`cluster-glow-${i}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={cluster.color} stopOpacity="0.08" />
                <stop offset="100%" stopColor={cluster.color} stopOpacity="0" />
              </radialGradient>
            ))}
          </defs>

          {clusters.map((cluster, ci) => {
            const allX = cluster.tiles.map(t => t.x);
            const allY = cluster.tiles.map(t => t.y);
            const minX = Math.min(...allX);
            const maxX = Math.max(...allX);
            const minY = Math.min(...allY);
            const maxY = Math.max(...allY);

            return (
              <g key={cluster.catName}>
                {/* Subtle radial glow behind cluster (no boxy border) */}
                <motion.ellipse
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: cluster.tiles[0].delay, duration: 0.8 }}
                  cx={cluster.centerX}
                  cy={cluster.centerY}
                  rx={(maxX - minX) / 2 + HEX_R + 40}
                  ry={(maxY - minY) / 2 + HEX_R + 30}
                  fill={`url(#cluster-glow-${ci})`}
                />

                {/* Category label — well above the top hex row */}
                <motion.text
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: cluster.tiles[0].delay - 0.05, duration: 0.5 }}
                  x={cluster.centerX}
                  y={minY - HEX_R - 22}
                  textAnchor="middle"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    fill: cluster.color,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  }}
                >
                  {cluster.catName}
                </motion.text>

                {/* Hex tiles */}
                {cluster.tiles.map((tile, ti) => (
                  <motion.g
                    key={ti}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: tile.delay,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: `${tile.x}px ${tile.y}px` }}
                  >
                    {/* Outer glow ring */}
                    <path
                      d={hexPath(tile.x, tile.y, HEX_R + 3)}
                      fill="none"
                      stroke={tile.color}
                      strokeWidth="1"
                      opacity="0.2"
                    />
                    {/* Hex background */}
                    <path
                      d={hexPath(tile.x, tile.y, HEX_R)}
                      fill="hsl(240, 17%, 8%)"
                      stroke={tile.color}
                      strokeWidth="1.5"
                      opacity="0.92"
                    />
                    {/* Inner accent ring */}
                    <path
                      d={hexPath(tile.x, tile.y, HEX_R - 7)}
                      fill="none"
                      stroke={tile.color}
                      strokeWidth="0.5"
                      opacity="0.1"
                    />
                    {/* Logo icon */}
                    <image
                      href={tile.icon}
                      x={tile.x - 16}
                      y={tile.y - 24}
                      width="32"
                      height="32"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    {/* Text label below logo */}
                    <text
                      x={tile.x}
                      y={tile.y + 22}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 14,
                        fontWeight: 500,
                        fill: "hsl(0, 0%, 85%)",
                      }}
                    >
                      {tile.label}
                    </text>
                  </motion.g>
                ))}
              </g>
            );
          })}

          {/* Connecting lines between clusters — visible */}
          {[
            [0, 1],
            [1, 2],
            [0, 3],
            [1, 3],
            [1, 4],
            [2, 4],
            [3, 4],
          ].map(([a, b], i) => {
            const ca = clusters[a];
            const cb = clusters[b];
            const fromY = Math.max(...ca.tiles.map(t => t.y)) + HEX_R + 8;
            const toY = Math.min(...cb.tiles.map(t => t.y)) - HEX_R - 8;
            return (
              <motion.line
                key={`line-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 0.9 + i * 0.06, duration: 0.6 }}
                x1={ca.centerX}
                y1={fromY}
                x2={cb.centerX}
                y2={toY}
                stroke={ca.color}
                strokeWidth="1.2"
                strokeDasharray="5 7"
              />
            );
          })}
        </svg>
      </div>
    </ScaledSlide>
  );
}
