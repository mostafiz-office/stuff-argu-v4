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
    label: "Growth",
    image: rocketTier1,
    imageSize: 70,
  },
  2: {
    gradient: "linear-gradient(135deg, #4ade80, #22d3ee)",
    glow: "#4ade80",
    trail: ["#4ade80", "#22d3ee", "#38bdf8", "#facc15"],
    label: "Accelerate",
    image: rocketTier2,
    imageSize: 80,
  },
  3: {
    gradient: "linear-gradient(135deg, #a78bfa, #f472b6, #fb923c)",
    glow: "#a78bfa",
    trail: ["#a78bfa", "#f472b6", "#fb923c", "#facc15", "#4ade80"],
    label: "Ignite",
    image: rocketTier3,
    imageSize: 90,
  },
};

export default function RocketAnimation({ intensity }: RocketAnimationProps) {
  const theme = tierThemes[intensity];
  const particleCount = intensity === 3 ? 14 : intensity === 2 ? 10 : 7;

  return (
    <div
      className="relative flex items-end justify-center overflow-hidden"
      style={{ height: 120, marginTop: 10, marginBottom: 6 }}
    >
      {/* Vertical launch trail */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.12 }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          marginLeft: -2,
          width: 4,
          height: "100%",
          borderRadius: 4,
          background: theme.gradient,
          transformOrigin: "bottom center",
        }}
      />

      {/* Launch pad glow at bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: [0, 0.6, 0.3], scale: [0.3, 1.2, 1] }}
        transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: -4,
          left: "50%",
          marginLeft: -30,
          width: 60,
          height: 12,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${theme.glow}60, transparent)`,
          filter: "blur(6px)",
        }}
      />

      {/* Stardust particles along launch path */}
      {[...Array(particleCount)].map((_, i) => {
        const color = theme.trail[i % theme.trail.length];
        const yPos = 10 + (i / particleCount) * 80;
        const xDir = i % 2 === 0 ? -1 : 1;
        const size = intensity === 3 ? 6 + (i % 3) * 2 : 5 + (i % 2) * 2;
        return (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 1.5, 0],
              x: [0, xDir * (12 + (i % 4) * 5)],
            }}
            transition={{
              delay: 0.8 + i * 0.18,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2.5 - intensity * 0.5,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              left: "50%",
              bottom: `${yPos}%`,
              marginLeft: -size / 2,
              width: size,
              height: size,
              borderRadius: "50%",
              background: color,
              boxShadow: `0 0 ${size * 3}px ${color}`,
            }}
          />
        );
      })}

      {/* Rocket — launches from bottom to top */}
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.4 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          delay: 0.3,
          duration: 1.4,
          type: "spring",
          stiffness: 60,
          damping: 12,
        }}
        className="relative z-10"
        style={{ marginBottom: 8 }}
      >
        {/* Outer pulsing ring */}
        <motion.div
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.08, 0.25, 0.08],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: -(theme.imageSize * 0.35),
            top: -(theme.imageSize * 0.35),
            width: theme.imageSize * 1.7,
            height: theme.imageSize * 1.7,
            borderRadius: "50%",
            border: `2px solid ${theme.glow}40`,
            boxShadow: `0 0 30px ${theme.glow}25`,
          }}
        />

        {/* Inner glow halo */}
        <motion.div
          animate={{
            scale: [0.9, 1.4, 0.9],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          style={{
            position: "absolute",
            left: -(theme.imageSize * 0.25),
            top: -(theme.imageSize * 0.25),
            width: theme.imageSize * 1.5,
            height: theme.imageSize * 1.5,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.glow}45, transparent)`,
            filter: "blur(12px)",
          }}
        />

        {/* 3D Rocket Image with gentle hover float */}
        <motion.div
          animate={{
            y: [-4, 4, -4],
            rotate: [-2, 2, -2],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: theme.imageSize,
            height: theme.imageSize,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.img
            src={theme.image}
            alt="Rocket"
            width={theme.imageSize}
            height={theme.imageSize}
            style={{
              width: theme.imageSize,
              height: theme.imageSize,
              objectFit: "contain",
            }}
            animate={{
              filter: [
                `drop-shadow(0 0 ${intensity * 12}px ${theme.glow}90) drop-shadow(0 0 ${intensity * 6}px ${theme.glow}60)`,
                `drop-shadow(0 0 ${intensity * 18}px ${theme.glow}ff) drop-shadow(0 0 ${intensity * 10}px ${theme.glow}90)`,
                `drop-shadow(0 0 ${intensity * 12}px ${theme.glow}90) drop-shadow(0 0 ${intensity * 6}px ${theme.glow}60)`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Exhaust flame below rocket */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scaleY: [0.6, 1.3, 0.6],
          }}
          transition={{ delay: 0.6, duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: -(intensity === 3 ? 30 : intensity === 2 ? 24 : 18),
            left: "50%",
            marginLeft: -8,
            width: 16,
            height: intensity === 3 ? 40 : intensity === 2 ? 32 : 24,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, ${theme.trail[0]}90, ${theme.trail[1]}60, transparent)`,
            transformOrigin: "top center",
            filter: "blur(3px)",
          }}
        />

        {/* Hot core flame */}
        <motion.div
          animate={{
            opacity: [0.6, 1, 0.6],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: -(intensity === 3 ? 18 : intensity === 2 ? 14 : 10),
            left: "50%",
            marginLeft: -3,
            width: 6,
            height: intensity === 3 ? 24 : intensity === 2 ? 18 : 14,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, ${theme.trail[0]})`,
            transformOrigin: "top center",
          }}
        />
      </motion.div>

      {/* Growth label */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: "absolute",
          right: 12,
          bottom: 8,
          fontFamily: "'Poppins', sans-serif",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          background: theme.gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {theme.label}
      </motion.span>
    </div>
  );
}
