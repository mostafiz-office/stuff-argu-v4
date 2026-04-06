import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

interface RocketAnimationProps {
  intensity: 1 | 2 | 3;
}

const tierThemes = {
  1: {
    rocket: "#38bdf8",
    flame1: "#f97316",
    flame2: "#facc15",
    flame3: "#ef4444",
    sparks: ["#38bdf8", "#facc15", "#f97316"],
  },
  2: {
    rocket: "#4ade80",
    flame1: "#f97316",
    flame2: "#fbbf24",
    flame3: "#ef4444",
    sparks: ["#4ade80", "#facc15", "#ef4444", "#f97316"],
  },
  3: {
    rocket: "#a78bfa",
    flame1: "#f43f5e",
    flame2: "#f97316",
    flame3: "#facc15",
    sparks: ["#a78bfa", "#f43f5e", "#facc15", "#38bdf8", "#4ade80"],
  },
};

export default function RocketAnimation({ intensity }: RocketAnimationProps) {
  const theme = tierThemes[intensity];
  const rocketSize = intensity === 3 ? 36 : intensity === 2 ? 30 : 26;
  const sparkCount = intensity === 3 ? 8 : intensity === 2 ? 5 : 3;

  return (
    <div className="flex items-center justify-center my-4 relative" style={{ height: 56 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.3, x: -40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 12 }}
        className="relative"
      >
        {/* Rainbow exhaust trail */}
        <motion.div
          animate={{
            opacity: [0.4, 0.9, 0.4],
            scaleX: [0.8, 1.2, 0.8],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            right: rocketSize - 6,
            top: "50%",
            transform: "translateY(-50%)",
            width: intensity * 35 + 20,
            height: intensity === 3 ? 14 : intensity === 2 ? 10 : 8,
            borderRadius: 10,
            background: `linear-gradient(to left, ${theme.flame3}, ${theme.flame2}, ${theme.flame1}, transparent)`,
            filter: `blur(${intensity}px)`,
            transformOrigin: "right center",
          }}
        />

        {/* Inner hot core trail */}
        <motion.div
          animate={{
            opacity: [0.6, 1, 0.6],
            scaleX: [0.9, 1.1, 0.9],
          }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            right: rocketSize - 6,
            top: "50%",
            transform: "translateY(-50%)",
            width: intensity * 20 + 10,
            height: intensity === 3 ? 6 : 4,
            borderRadius: 10,
            background: `linear-gradient(to left, #fff, ${theme.flame2}, transparent)`,
            transformOrigin: "right center",
          }}
        />

        {/* Colorful spark particles */}
        {[...Array(sparkCount)].map((_, i) => {
          const color = theme.sparks[i % theme.sparks.length];
          const angle = (i / sparkCount) * 360;
          const radius = 12 + (i % 3) * 8;
          return (
            <motion.div
              key={i}
              animate={{
                opacity: [0, 1, 0],
                x: [0, -Math.cos((angle * Math.PI) / 180) * radius - 15],
                y: [0, -Math.sin((angle * Math.PI) / 180) * radius],
                scale: [0.5, 1.2, 0],
              }}
              transition={{
                delay: 1 + i * 0.18,
                duration: 1,
                repeat: Infinity,
                repeatDelay: 1.2 - intensity * 0.3,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                left: 4,
                top: "50%",
                width: intensity === 3 ? 7 : 5,
                height: intensity === 3 ? 7 : 5,
                borderRadius: "50%",
                background: color,
                boxShadow: `0 0 ${intensity * 4}px ${color}`,
              }}
            />
          );
        })}

        {/* Multi-color glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.4, 0.15],
            scale: [0.85, 1.15, 0.85],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            left: -14,
            top: -14,
            width: rocketSize + 28,
            height: rocketSize + 28,
            borderRadius: "50%",
            background: `conic-gradient(${theme.sparks.join(", ")}, ${theme.sparks[0]})`,
            filter: `blur(${intensity * 4 + 4}px)`,
          }}
        />

        {/* Rocket with gentle bob */}
        <motion.div
          animate={{
            y: [-3, 3, -3],
            rotate: [-2, 2, -2],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket
            size={rocketSize}
            strokeWidth={2}
            style={{
              color: theme.rocket,
              transform: "rotate(-45deg)",
              filter: `drop-shadow(0 0 ${intensity * 6}px ${theme.rocket}) drop-shadow(0 0 ${intensity * 12}px ${theme.rocket}50)`,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
