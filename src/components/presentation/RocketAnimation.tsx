import { motion } from "framer-motion";

interface RocketAnimationProps {
  intensity: 1 | 2 | 3;
}

const tierThemes = {
  1: {
    gradient: "linear-gradient(135deg, #38bdf8, #818cf8)",
    glow: "#38bdf8",
    trail: ["#38bdf8", "#818cf8", "#c084fc"],
    label: "Growth",
  },
  2: {
    gradient: "linear-gradient(135deg, #4ade80, #22d3ee)",
    glow: "#4ade80",
    trail: ["#4ade80", "#22d3ee", "#38bdf8"],
    label: "Accelerate",
  },
  3: {
    gradient: "linear-gradient(135deg, #a78bfa, #f472b6, #fb923c)",
    glow: "#a78bfa",
    trail: ["#a78bfa", "#f472b6", "#fb923c", "#facc15"],
    label: "Ignite",
  },
};

export default function RocketAnimation({ intensity }: RocketAnimationProps) {
  const theme = tierThemes[intensity];
  const particleCount = intensity === 3 ? 12 : intensity === 2 ? 8 : 5;

  return (
    <div className="relative flex items-center justify-center overflow-hidden" style={{ height: 64, marginTop: 8, marginBottom: 4 }}>
      {/* Animated gradient bar background */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: 16,
          right: 16,
          height: 3,
          borderRadius: 4,
          background: theme.gradient,
          opacity: 0.2,
          transformOrigin: "left center",
        }}
      />

      {/* Traveling light pulse along the bar */}
      <motion.div
        animate={{ left: ["0%", "100%"] }}
        transition={{ delay: 1.2, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "50%",
          marginTop: -1.5,
          width: 60,
          height: 3,
          borderRadius: 4,
          background: theme.gradient,
          filter: `blur(1px)`,
          boxShadow: `0 0 12px ${theme.glow}80`,
        }}
      />

      {/* Stardust particles */}
      {[...Array(particleCount)].map((_, i) => {
        const delay = 0.8 + i * 0.25;
        const x = 10 + (i / particleCount) * 80;
        const yOffset = (i % 3 - 1) * 12;
        const color = theme.trail[i % theme.trail.length];
        const size = intensity === 3 ? 4 + (i % 3) : 3 + (i % 2);
        return (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0.3, 1.2, 0],
              y: [0, yOffset, yOffset * 1.5],
            }}
            transition={{
              delay,
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 2 - intensity * 0.4,
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
              boxShadow: `0 0 ${size * 2}px ${color}`,
            }}
          />
        );
      })}

      {/* Rocket emoji with premium motion */}
      <motion.div
        initial={{ opacity: 0, x: -60, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 120,
          damping: 10,
        }}
        className="relative z-10"
      >
        {/* Outer glow ring */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: -12,
            top: -12,
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.glow}40, transparent)`,
            filter: `blur(6px)`,
          }}
        />

        {/* Rocket container with float */}
        <motion.div
          animate={{
            y: [-2, 2, -2],
            x: [-1, 1, -1],
            rotate: [-1, 1, -1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: intensity === 3 ? 28 : intensity === 2 ? 24 : 22 }}>🚀</span>
        </motion.div>

        {/* Exhaust flame */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scaleX: [0.8, 1.3, 0.8],
            scaleY: [0.9, 1.1, 0.9],
          }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            right: 24,
            top: "50%",
            marginTop: -4,
            width: intensity === 3 ? 28 : intensity === 2 ? 20 : 14,
            height: 8,
            borderRadius: 8,
            background: `linear-gradient(to left, transparent, ${theme.trail[0]}80, ${theme.trail[1] || theme.trail[0]})`,
            transformOrigin: "right center",
            filter: "blur(2px)",
          }}
        />
      </motion.div>

      {/* Tier growth label */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          position: "absolute",
          right: 20,
          fontFamily: "'Poppins', sans-serif",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.15em",
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
