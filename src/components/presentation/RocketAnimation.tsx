import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

interface RocketAnimationProps {
  intensity: 1 | 2 | 3;
}

const tierColors = {
  1: { main: "hsl(200, 90%, 55%)", glow: "hsl(200, 95%, 65%)", trail: "hsl(200, 85%, 50%)" },
  2: { main: "hsl(142, 71%, 45%)", glow: "hsl(142, 80%, 55%)", trail: "hsl(142, 65%, 40%)" },
  3: { main: "hsl(280, 85%, 60%)", glow: "hsl(280, 90%, 70%)", trail: "hsl(280, 80%, 55%)" },
};

export default function RocketAnimation({ intensity }: RocketAnimationProps) {
  const colors = tierColors[intensity];
  const rocketSize = intensity === 3 ? 32 : intensity === 2 ? 28 : 24;

  return (
    <div className="flex items-center justify-center my-3" style={{ height: 48 }}>
      {/* Rocket with continuous flight animation */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="relative flex items-center"
      >
        {/* Trail particles */}
        {[...Array(intensity === 3 ? 5 : intensity === 2 ? 3 : 2)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 0.8, 0],
              x: [0, -(20 + i * 12)],
              scale: [1, 0.5],
            }}
            transition={{
              delay: 1 + i * 0.15,
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 0.8,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              left: -4,
              width: intensity === 3 ? 8 : 6,
              height: intensity === 3 ? 8 : 6,
              borderRadius: "50%",
              background: colors.glow,
              boxShadow: `0 0 ${intensity * 4}px ${colors.glow}`,
            }}
          />
        ))}

        {/* Exhaust trail line */}
        <motion.div
          animate={{
            opacity: [0.3, 0.7, 0.3],
            width: [20, intensity * 25, 20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            right: rocketSize - 2,
            height: intensity === 3 ? 4 : 3,
            borderRadius: 4,
            background: `linear-gradient(to left, ${colors.main}, transparent)`,
          }}
        />

        {/* Glow behind rocket */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [0.9, 1.2, 0.9],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: -6,
            top: -6,
            width: rocketSize + 12,
            height: rocketSize + 12,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${colors.glow}40, transparent)`,
            filter: `blur(${intensity * 3}px)`,
          }}
        />

        {/* Rocket with bob */}
        <motion.div
          animate={{ y: [-2, 2, -2], rotate: [-1, 1, -1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Rocket
            size={rocketSize}
            style={{
              color: colors.main,
              transform: "rotate(-45deg)",
              filter: `drop-shadow(0 0 ${intensity * 5}px ${colors.glow})`,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
