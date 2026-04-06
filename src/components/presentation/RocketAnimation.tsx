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
    startSize: 50,
    endSize: 100,
  },
  2: {
    gradient: "linear-gradient(135deg, #4ade80, #22d3ee)",
    glow: "#4ade80",
    trail: ["#4ade80", "#22d3ee", "#38bdf8", "#facc15"],
    image: rocketTier2,
    startSize: 55,
    endSize: 110,
  },
  3: {
    gradient: "linear-gradient(135deg, #a78bfa, #f472b6, #fb923c)",
    glow: "#a78bfa",
    trail: ["#a78bfa", "#f472b6", "#fb923c", "#facc15", "#4ade80"],
    image: rocketTier3,
    startSize: 60,
    endSize: 120,
  },
};

const CYCLE_DURATION = 8500;

export default function RocketAnimation({ intensity }: RocketAnimationProps) {
  const theme = tierThemes[intensity];
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCycle((c) => c + 1), CYCLE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
      style={{ borderRadius: "inherit" }}
    >
      <LaunchSequence key={cycle} theme={theme} intensity={intensity} />
    </motion.div>
  );
}

// NASA-style curved trajectory: bottom-left → up → curves right → exits top-right
// Using keyframes to simulate the curve
const FLIGHT_DURATION = 4;

function LaunchSequence({
  theme,
  intensity,
}: {
  theme: (typeof tierThemes)[1];
  intensity: 1 | 2 | 3;
}) {
  const smokeCount = intensity === 3 ? 12 : intensity === 2 ? 9 : 7;

  // Curve path keyframes (% of card dimensions)
  // Start: bottom-left (over premium addon) → straight up → curve right → top-right
  const xKeyframes = ["8%", "10%", "20%", "55%", "82%"];
  const yKeyframes = ["95%", "70%", "40%", "15%", "-10%"];
  const rotateKeyframes = [0, -5, -15, -35, -50]; // tilts right as it curves
  const scaleKeyframes = [0.5, 0.7, 0.85, 1, 1.1]; // grows bigger along the path

  return (
    <>
      {/* Curved trail path using SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ overflow: "visible" }}
      >
        <motion.path
          d="M 50,520 C 55,380 80,250 180,140 C 260,60 340,10 400,-30"
          fill="none"
          stroke={theme.glow}
          strokeWidth={3}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.15 }}
          transition={{ delay: 0.5, duration: FLIGHT_DURATION, ease: "easeOut" }}
        />
        {/* Wider glow trail */}
        <motion.path
          d="M 50,520 C 55,380 80,250 180,140 C 260,60 340,10 400,-30"
          fill="none"
          stroke={theme.glow}
          strokeWidth={12}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.06 }}
          transition={{ delay: 0.5, duration: FLIGHT_DURATION, ease: "easeOut" }}
          style={{ filter: "blur(6px)" }}
        />
      </svg>

      {/* Launch pad on bottom-left (over premium addon area) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{
          opacity: [0, 0.9, 0.5, 0.2, 0],
          scale: [0.3, 1.5, 2, 2.5, 3],
        }}
        transition={{ delay: 0.2, duration: 2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          width: 70,
          height: 24,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${theme.glow}90, ${theme.glow}40, transparent)`,
          filter: "blur(10px)",
        }}
      />

      {/* Launch pad platform glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.3, 0] }}
        transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          width: 90,
          height: 6,
          borderRadius: 4,
          background: theme.gradient,
        }}
      />

      {/* Smoke cloud burst at launch pad (bottom-left) */}
      {[...Array(smokeCount)].map((_, i) => {
        const angle = (i / smokeCount) * 360;
        const radius = 18 + (i % 3) * 12;
        const xOff = Math.cos((angle * Math.PI) / 180) * radius;
        const yOff = Math.sin((angle * Math.PI) / 180) * (radius * 0.6);
        const smokeSize = 14 + (i % 4) * 8;
        return (
          <motion.div
            key={`smoke-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0.25, 0],
              scale: [0.2, 1, 1.8, 2.5],
              x: [0, xOff * 0.4, xOff, xOff * 1.5],
              y: [0, yOff * 0.3, yOff, yOff * 1.3],
            }}
            transition={{
              delay: 0.3 + i * 0.05,
              duration: 2.2,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              bottom: 16,
              left: 40 - smokeSize / 2,
              width: smokeSize,
              height: smokeSize,
              borderRadius: "50%",
              background: `radial-gradient(circle, hsl(0 0% 80% / 0.3), ${theme.glow}15, transparent)`,
              filter: "blur(5px)",
            }}
          />
        );
      })}

      {/* Sparkle particles along the curved path */}
      {[...Array(10)].map((_, i) => {
        const t = i / 10;
        const color = theme.trail[i % theme.trail.length];
        // Approximate positions along the curve
        const sparkLeft = 8 + t * t * 75;
        const sparkBottom = 90 - t * 95;
        const size = 4 + (i % 3) * 2;
        const xDir = i % 2 === 0 ? 1 : -1;
        return (
          <motion.div
            key={`spark-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.4, 0],
              x: [0, xDir * (6 + (i % 3) * 6)],
            }}
            transition={{
              delay: 0.6 + i * 0.3,
              duration: 1.4,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              left: `${sparkLeft}%`,
              bottom: `${sparkBottom}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background: color,
              boxShadow: `0 0 ${size * 3}px ${color}`,
            }}
          />
        );
      })}

      {/* === THE ROCKET — NASA curved trajectory === */}
      <motion.div
        initial={{
          left: xKeyframes[0],
          bottom: yKeyframes[0],
          opacity: 0,
          scale: scaleKeyframes[0],
          rotate: rotateKeyframes[0],
        }}
        animate={{
          left: xKeyframes,
          bottom: yKeyframes,
          opacity: [0, 1, 1, 1, 0.9],
          scale: scaleKeyframes,
          rotate: rotateKeyframes,
        }}
        transition={{
          delay: 0.3,
          duration: FLIGHT_DURATION,
          ease: [0.12, 0.6, 0.35, 1],
        }}
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transformOrigin: "center center",
        }}
      >
        {/* Glow halo — grows with the rocket */}
        <motion.div
          animate={{
            scale: [0.8, 1.5, 0.8],
            opacity: [0.1, 0.45, 0.1],
          }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: -(theme.endSize * 0.8),
            marginTop: -(theme.endSize * 0.8),
            width: theme.endSize * 1.6,
            height: theme.endSize * 1.6,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.glow}55, ${theme.glow}20, transparent)`,
            filter: "blur(16px)",
          }}
        />

        {/* Rocket image */}
        <motion.img
          src={theme.image}
          alt=""
          width={theme.endSize}
          height={theme.endSize}
          animate={{
            filter: [
              `drop-shadow(0 0 ${intensity * 14}px ${theme.glow}90) drop-shadow(0 4px ${intensity * 8}px ${theme.glow}50)`,
              `drop-shadow(0 0 ${intensity * 24}px ${theme.glow}ff) drop-shadow(0 4px ${intensity * 14}px ${theme.glow}90)`,
              `drop-shadow(0 0 ${intensity * 14}px ${theme.glow}90) drop-shadow(0 4px ${intensity * 8}px ${theme.glow}50)`,
            ],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: theme.endSize,
            height: theme.endSize,
            objectFit: "contain",
          }}
        />

        {/* Main flame trail — big and dramatic */}
        <motion.div
          animate={{
            scaleY: [0.7, 1.5, 0.7],
            scaleX: [0.8, 1.3, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 20,
            height: intensity === 3 ? 80 : intensity === 2 ? 65 : 50,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, ${theme.trail[0]}cc, ${theme.trail[1]}80, ${theme.trail[2] || theme.trail[0]}40, transparent)`,
            filter: "blur(3px)",
            transformOrigin: "top center",
            marginTop: -8,
          }}
        />

        {/* Inner hot core flame */}
        <motion.div
          animate={{
            scaleY: [0.8, 1.4, 0.8],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: -(intensity === 3 ? 35 : intensity === 2 ? 28 : 20),
            left: "50%",
            marginLeft: -5,
            width: 10,
            height: intensity === 3 ? 45 : intensity === 2 ? 36 : 28,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, #fffbe6, ${theme.trail[0]}90, transparent)`,
            transformOrigin: "top center",
          }}
        />

        {/* Flame sparks shooting out */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`fspark-${i}`}
            animate={{
              opacity: [0, 1, 0],
              y: [0, 18 + i * 7],
              x: [(i % 2 === 0 ? -1 : 1) * 2, (i % 2 === 0 ? -1 : 1) * (8 + i * 3)],
              scale: [1, 0.2],
            }}
            transition={{
              delay: i * 0.12,
              duration: 0.7,
              repeat: Infinity,
              repeatDelay: 0.3,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              bottom: -(intensity === 3 ? 55 : intensity === 2 ? 44 : 34) - i * 4,
              left: "50%",
              marginLeft: -2,
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: theme.trail[i % theme.trail.length],
              boxShadow: `0 0 8px ${theme.trail[i % theme.trail.length]}`,
            }}
          />
        ))}
      </motion.div>
    </>
  );
}
