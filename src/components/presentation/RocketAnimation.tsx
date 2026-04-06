import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import rocketTier1 from "@/assets/rocket-tier1.png";
import rocketTier2 from "@/assets/rocket-tier2.png";
import rocketTier3 from "@/assets/rocket-tier3.png";

interface RocketAnimationProps {
  intensity: 1 | 2 | 3;
}

const tierThemes = {
  1: {
    gradient: "linear-gradient(135deg, #38bdf8, #818cf8)",
    glow: "#38bdf8",
    trail: ["#38bdf8", "#818cf8", "#c084fc", "#facc15"],
    image: rocketTier1,
    imageSize: 110,
  },
  2: {
    gradient: "linear-gradient(135deg, #4ade80, #22d3ee)",
    glow: "#4ade80",
    trail: ["#4ade80", "#22d3ee", "#38bdf8", "#facc15"],
    image: rocketTier2,
    imageSize: 120,
  },
  3: {
    gradient: "linear-gradient(135deg, #a78bfa, #f472b6, #fb923c)",
    glow: "#a78bfa",
    trail: ["#a78bfa", "#f472b6", "#fb923c", "#facc15", "#4ade80"],
    image: rocketTier3,
    imageSize: 130,
  },
};

const CYCLE_DURATION = 9000; // full cycle: 4.5s flight + 4.5s pause

export default function RocketAnimation({ intensity }: RocketAnimationProps) {
  const theme = tierThemes[intensity];
  const smokeCount = intensity === 3 ? 10 : intensity === 2 ? 8 : 6;
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((c) => c + 1);
    }, CYCLE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
      style={{ borderRadius: "inherit" }}
    >
      {/* Everything keyed to cycle so it re-mounts and replays */}
      <LaunchSequence key={cycle} theme={theme} intensity={intensity} smokeCount={smokeCount} />
    </motion.div>
  );
}

function LaunchSequence({
  theme,
  intensity,
  smokeCount,
}: {
  theme: (typeof tierThemes)[1];
  intensity: 1 | 2 | 3;
  smokeCount: number;
}) {
  return (
    <>
      {/* Vertical glowing trail */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.12 }}
        transition={{ delay: 0.8, duration: 2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          right: 28,
          width: 4,
          height: "100%",
          background: theme.gradient,
          transformOrigin: "bottom center",
          borderRadius: 4,
        }}
      />

      {/* Secondary wider trail glow */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.05 }}
        transition={{ delay: 1, duration: 2.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          right: 20,
          width: 20,
          height: "100%",
          background: `linear-gradient(to top, ${theme.glow}30, transparent)`,
          transformOrigin: "bottom center",
          borderRadius: 4,
          filter: "blur(8px)",
        }}
      />

      {/* Sparkle particles */}
      {[...Array(8)].map((_, i) => {
        const color = theme.trail[i % theme.trail.length];
        const bottomPct = 8 + i * 11;
        const xDir = i % 2 === 0 ? 1 : -1;
        const size = 4 + (i % 3) * 2;
        return (
          <motion.div
            key={`spark-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, xDir * (8 + (i % 3) * 8)],
            }}
            transition={{
              delay: 0.8 + i * 0.2,
              duration: 1.6,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              right: 26,
              bottom: `${bottomPct}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background: color,
              boxShadow: `0 0 ${size * 3}px ${color}`,
            }}
          />
        );
      })}

      {/* Smoke burst at launch pad */}
      {[...Array(smokeCount)].map((_, i) => {
        const angle = (i / smokeCount) * 360;
        const radius = 15 + (i % 3) * 10;
        const xOff = Math.cos((angle * Math.PI) / 180) * radius;
        const yOff = Math.abs(Math.sin((angle * Math.PI) / 180)) * (radius * 0.5);
        const smokeSize = 12 + (i % 4) * 6;
        return (
          <motion.div
            key={`smoke-${i}`}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 0.4, 0.2, 0],
              scale: [0.3, 1.2, 1.8, 2.2],
              x: [0, xOff * 0.5, xOff, xOff * 1.3],
              y: [0, yOff * 0.3, yOff, yOff * 1.2],
            }}
            transition={{
              delay: 0.4 + i * 0.06,
              duration: 2,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              bottom: 12,
              right: 30 - smokeSize / 2,
              width: smokeSize,
              height: smokeSize,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${theme.glow}25, hsl(0 0% 60% / 0.15), transparent)`,
              filter: "blur(4px)",
            }}
          />
        );
      })}

      {/* Launch pad flash */}
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{
          opacity: [0, 0.8, 0.3, 0],
          scale: [0.2, 1.5, 2, 2.5],
        }}
        transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          right: 6,
          width: 50,
          height: 20,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${theme.glow}80, ${theme.glow}30, transparent)`,
          filter: "blur(8px)",
        }}
      />

      {/* Rocket — bottom to top flight */}
      <motion.div
        initial={{ bottom: "-5%", opacity: 0 }}
        animate={{
          bottom: ["-5%", "86%"],
          opacity: [0, 1, 1, 1, 0.95],
        }}
        transition={{
          delay: 0.4,
          duration: 4.5,
          ease: [0.15, 0.6, 0.35, 1],
        }}
        style={{
          position: "absolute",
          right: 28 - theme.imageSize / 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Glow halo */}
        <motion.div
          animate={{
            scale: [0.85, 1.4, 0.85],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: -(theme.imageSize * 0.7),
            marginTop: -(theme.imageSize * 0.7),
            width: theme.imageSize * 1.4,
            height: theme.imageSize * 1.4,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.glow}55, ${theme.glow}20, transparent)`,
            filter: "blur(14px)",
          }}
        />

        {/* Rocket image */}
        <motion.img
          src={theme.image}
          alt=""
          width={theme.imageSize}
          height={theme.imageSize}
          animate={{
            rotate: [-2, 2, -2],
            filter: [
              `drop-shadow(0 0 ${intensity * 14}px ${theme.glow}90) drop-shadow(0 4px ${intensity * 8}px ${theme.glow}50)`,
              `drop-shadow(0 0 ${intensity * 22}px ${theme.glow}ff) drop-shadow(0 4px ${intensity * 12}px ${theme.glow}80)`,
              `drop-shadow(0 0 ${intensity * 14}px ${theme.glow}90) drop-shadow(0 4px ${intensity * 8}px ${theme.glow}50)`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: theme.imageSize,
            height: theme.imageSize,
            objectFit: "contain",
          }}
        />

        {/* Main flame */}
        <motion.div
          animate={{
            scaleY: [0.7, 1.4, 0.7],
            scaleX: [0.8, 1.2, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 22,
            height: intensity === 3 ? 90 : intensity === 2 ? 72 : 56,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, ${theme.trail[0]}cc, ${theme.trail[1]}80, ${theme.trail[2] || theme.trail[0]}40, transparent)`,
            filter: "blur(3px)",
            transformOrigin: "top center",
            marginTop: -6,
          }}
        />

        {/* Inner hot core */}
        <motion.div
          animate={{
            scaleY: [0.8, 1.3, 0.8],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 0.25, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: -(intensity === 3 ? 40 : intensity === 2 ? 32 : 24),
            left: "50%",
            marginLeft: -6,
            width: 12,
            height: intensity === 3 ? 50 : intensity === 2 ? 40 : 30,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, #fffbe6, ${theme.trail[0]}90, transparent)`,
            transformOrigin: "top center",
          }}
        />

        {/* Flame sparks */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`fspark-${i}`}
            animate={{
              opacity: [0, 1, 0],
              y: [0, 20 + i * 8],
              x: [(i % 2 === 0 ? -1 : 1) * 3, (i % 2 === 0 ? -1 : 1) * (6 + i * 2)],
              scale: [1, 0.3],
            }}
            transition={{
              delay: i * 0.15,
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 0.4,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              bottom: -(intensity === 3 ? 50 : intensity === 2 ? 40 : 30) - i * 4,
              left: "50%",
              marginLeft: -2,
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: theme.trail[i % theme.trail.length],
              boxShadow: `0 0 6px ${theme.trail[i % theme.trail.length]}`,
            }}
          />
        ))}
      </motion.div>
    </>
  );
}
