import { motion } from "framer-motion";

interface RocketAnimationProps {
  intensity: 1 | 2 | 3;
}

const tierThemes = {
  1: {
    gradient: "linear-gradient(135deg, #38bdf8, #818cf8)",
    glow: "#38bdf8",
    trail: ["#38bdf8", "#818cf8", "#c084fc", "#facc15"],
    label: "Growth",
  },
  2: {
    gradient: "linear-gradient(135deg, #4ade80, #22d3ee)",
    glow: "#4ade80",
    trail: ["#4ade80", "#22d3ee", "#38bdf8", "#facc15"],
    label: "Accelerate",
  },
  3: {
    gradient: "linear-gradient(135deg, #a78bfa, #f472b6, #fb923c)",
    glow: "#a78bfa",
    trail: ["#a78bfa", "#f472b6", "#fb923c", "#facc15", "#4ade80"],
    label: "Ignite",
  },
};

export default function RocketAnimation({ intensity }: RocketAnimationProps) {
  const theme = tierThemes[intensity];
  const particleCount = intensity === 3 ? 14 : intensity === 2 ? 10 : 7;
  const rocketSize = intensity === 3 ? 48 : intensity === 2 ? 42 : 38;

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: 90, marginTop: 10, marginBottom: 6 }}
    >
      {/* Animated gradient track */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: 12,
          right: 12,
          height: 4,
          borderRadius: 4,
          background: theme.gradient,
          opacity: 0.15,
          transformOrigin: "left center",
        }}
      />

      {/* Sweeping light pulse */}
      <motion.div
        animate={{ left: ["-10%", "110%"] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "50%",
          marginTop: -3,
          width: 100,
          height: 6,
          borderRadius: 6,
          background: theme.gradient,
          filter: "blur(3px)",
          boxShadow: `0 0 20px ${theme.glow}90, 0 0 40px ${theme.glow}40`,
        }}
      />

      {/* Stardust particles — bigger & brighter */}
      {[...Array(particleCount)].map((_, i) => {
        const color = theme.trail[i % theme.trail.length];
        const x = 5 + (i / particleCount) * 85;
        const yDir = i % 2 === 0 ? -1 : 1;
        const size = intensity === 3 ? 6 + (i % 3) * 2 : 5 + (i % 2) * 2;
        return (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 1.5, 0],
              y: [0, yDir * (14 + (i % 4) * 6)],
            }}
            transition={{
              delay: 0.7 + i * 0.2,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2.5 - intensity * 0.5,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: "50%",
              width: size,
              height: size,
              borderRadius: "50%",
              background: color,
              boxShadow: `0 0 ${size * 3}px ${color}`,
            }}
          />
        );
      })}

      {/* Rocket assembly */}
      <motion.div
        initial={{ opacity: 0, x: -80, scale: 0.3 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          delay: 0.4,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="relative z-10"
      >
        {/* Outer pulsing ring */}
        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: -(rocketSize * 0.4),
            top: -(rocketSize * 0.4),
            width: rocketSize * 1.8,
            height: rocketSize * 1.8,
            borderRadius: "50%",
            border: `2px solid ${theme.glow}50`,
            boxShadow: `0 0 20px ${theme.glow}30`,
          }}
        />

        {/* Inner glow */}
        <motion.div
          animate={{
            scale: [0.9, 1.3, 0.9],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          style={{
            position: "absolute",
            left: -(rocketSize * 0.25),
            top: -(rocketSize * 0.25),
            width: rocketSize * 1.5,
            height: rocketSize * 1.5,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.glow}50, transparent)`,
            filter: "blur(10px)",
          }}
        />

        {/* Rocket with dramatic float */}
        <motion.div
          animate={{
            y: [-4, 4, -4],
            x: [-2, 2, -2],
            rotate: [-3, 3, -3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: rocketSize,
            height: rocketSize,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: rocketSize,
              lineHeight: 1,
              filter: `drop-shadow(0 0 ${intensity * 8}px ${theme.glow})`,
            }}
          >
            🚀
          </span>
        </motion.div>

        {/* Multi-layer exhaust */}
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
            scaleX: [0.6, 1.4, 0.6],
          }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            right: rocketSize * 0.6,
            top: "50%",
            marginTop: -6,
            width: intensity === 3 ? 50 : intensity === 2 ? 38 : 28,
            height: 12,
            borderRadius: 12,
            background: `linear-gradient(to left, transparent, ${theme.trail[0]}90, ${theme.trail[1]}70, ${theme.trail[2] || theme.trail[0]}40)`,
            transformOrigin: "right center",
            filter: "blur(3px)",
          }}
        />

        {/* Hot core exhaust */}
        <motion.div
          animate={{
            opacity: [0.6, 1, 0.6],
            scaleX: [0.7, 1.3, 0.7],
          }}
          transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            right: rocketSize * 0.6,
            top: "50%",
            marginTop: -2,
            width: intensity === 3 ? 30 : intensity === 2 ? 22 : 16,
            height: 4,
            borderRadius: 4,
            background: `linear-gradient(to left, transparent, #fff, ${theme.trail[0]})`,
            transformOrigin: "right center",
          }}
        />
      </motion.div>

      {/* Growth label — gradient text */}
      <motion.span
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: "absolute",
          right: 16,
          fontFamily: "'Poppins', sans-serif",
          fontSize: 14,
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
