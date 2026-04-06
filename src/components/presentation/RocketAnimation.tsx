import { motion } from "framer-motion";
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
    imageSize: 75,
  },
  2: {
    gradient: "linear-gradient(135deg, #4ade80, #22d3ee)",
    glow: "#4ade80",
    trail: ["#4ade80", "#22d3ee", "#38bdf8", "#facc15"],
    image: rocketTier2,
    imageSize: 85,
  },
  3: {
    gradient: "linear-gradient(135deg, #a78bfa, #f472b6, #fb923c)",
    glow: "#a78bfa",
    trail: ["#a78bfa", "#f472b6", "#fb923c", "#facc15", "#4ade80"],
    image: rocketTier3,
    imageSize: 95,
  },
};

export default function RocketAnimation({ intensity }: RocketAnimationProps) {
  const theme = tierThemes[intensity];

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
      style={{ borderRadius: "inherit" }}
    >
      {/* Vertical light trail the rocket leaves behind */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.08 }}
        transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          right: 28,
          width: 3,
          height: "100%",
          background: theme.gradient,
          transformOrigin: "bottom center",
          borderRadius: 3,
        }}
      />

      {/* Sparkle particles along the path */}
      {[...Array(6)].map((_, i) => {
        const color = theme.trail[i % theme.trail.length];
        const bottomPct = 10 + i * 14;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.2, 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * 10],
            }}
            transition={{
              delay: 1.0 + i * 0.25,
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              right: 26,
              bottom: `${bottomPct}%`,
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: color,
              boxShadow: `0 0 10px ${color}`,
            }}
          />
        );
      })}

      {/* The rocket — flies from bottom to top */}
      <motion.div
        initial={{ bottom: -20, opacity: 0 }}
        animate={{
          bottom: ["0%", "88%"],
          opacity: [0, 1, 1, 1, 0.9],
        }}
        transition={{
          delay: 0.5,
          duration: 2.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{
          position: "absolute",
          right: 28 - theme.imageSize / 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Glow behind rocket */}
        <motion.div
          animate={{
            scale: [0.9, 1.3, 0.9],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: -(theme.imageSize * 0.6),
            marginTop: -(theme.imageSize * 0.6),
            width: theme.imageSize * 1.2,
            height: theme.imageSize * 1.2,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.glow}50, transparent)`,
            filter: "blur(10px)",
          }}
        />

        {/* Rocket image */}
        <motion.img
          src={theme.image}
          alt=""
          width={theme.imageSize}
          height={theme.imageSize}
          animate={{
            rotate: [-3, 3, -3],
            filter: [
              `drop-shadow(0 0 ${intensity * 10}px ${theme.glow}90)`,
              `drop-shadow(0 0 ${intensity * 16}px ${theme.glow}ff)`,
              `drop-shadow(0 0 ${intensity * 10}px ${theme.glow}90)`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: theme.imageSize,
            height: theme.imageSize,
            objectFit: "contain",
          }}
        />

        {/* Flame below rocket */}
        <motion.div
          animate={{
            scaleY: [0.7, 1.3, 0.7],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 10,
            height: intensity === 3 ? 32 : intensity === 2 ? 26 : 20,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, ${theme.trail[0]}aa, ${theme.trail[1]}60, transparent)`,
            filter: "blur(2px)",
            transformOrigin: "top center",
            marginTop: -4,
          }}
        />
      </motion.div>

      {/* Launch pad glow at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 8,
          right: 10,
          width: 40,
          height: 10,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${theme.glow}60, transparent)`,
          filter: "blur(5px)",
        }}
      />
    </motion.div>
  );
}
