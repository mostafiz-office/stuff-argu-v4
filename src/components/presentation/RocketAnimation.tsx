import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import rocketTier1 from "@/assets/rocket-tier1.png";
import rocketTier2 from "@/assets/rocket-tier2.png";
import rocketTier3 from "@/assets/rocket-tier3.png";

interface RocketAnimationProps {
  intensity: 1 | 2 | 3;
}

const tierThemes = {
  1: { glow: "#38bdf8", trail: ["#38bdf8", "#818cf8"], image: rocketTier1 },
  2: { glow: "#4ade80", trail: ["#4ade80", "#22d3ee"], image: rocketTier2 },
  3: { glow: "#a78bfa", trail: ["#a78bfa", "#f472b6"], image: rocketTier3 },
};

const SIZE = 160;

export default function RocketAnimation({ intensity }: RocketAnimationProps) {
  const theme = tierThemes[intensity];
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 50,
        borderRadius: "inherit",
        overflow: "hidden",
      }}
    >
      <RocketFlight key={cycle} theme={theme} intensity={intensity} />
    </div>
  );
}

function RocketFlight({
  theme,
  intensity,
}: {
  theme: (typeof tierThemes)[1];
  intensity: number;
}) {
  return (
    <>
      {/* Launch pad glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.7, 0] }}
        transition={{ duration: 5, times: [0, 0.13, 0.18, 0.4] }}
        style={{
          position: "absolute",
          bottom: 5,
          right: 10 + SIZE / 2 - 30,
          width: 60,
          height: 16,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${theme.glow}99, transparent)`,
          filter: "blur(8px)",
        }}
      />

      {/* Smoke */}
      {[0, 1, 2, 3, 4].map((i) => {
        const dx = (i - 2) * 12;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0.3, 0], y: [0, 0, -5 + i * 2, -10], x: [0, 0, dx, dx * 1.5] }}
            transition={{ duration: 5, times: [0, 0.13, 0.2, 0.4] }}
            style={{
              position: "absolute",
              bottom: 8,
              right: 10 + SIZE / 2 - 6,
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "hsl(0 0% 80% / 0.25)",
              filter: "blur(4px)",
            }}
          />
        );
      })}

      {/* Rocket: appear → immediately start flying → hover → fade. Total 12s */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 1, 0],
          y: [0, 0, 0, -120, -420, -420],
        }}
        transition={{
          duration: 14,
          times: intensity === 3
            ? [0, 0.02, 0.14, 0.20, 0.34, 1]   // 2s wait then fastest
            : intensity === 2
              ? [0, 0.02, 0.14, 0.24, 0.48, 1]  // 2s wait then medium
              : [0, 0.02, 0.14, 0.28, 0.57, 1], // 2s wait then slowest
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Glow halo */}
        <motion.div
          animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: -(SIZE * 0.6),
            marginTop: -(SIZE * 0.6),
            width: SIZE * 1.2,
            height: SIZE * 1.2,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.glow}50, ${theme.glow}15, transparent)`,
            filter: "blur(14px)",
          }}
        />

        {/* Rocket image — vibrates during pre-launch */}
        <motion.img
          src={theme.image}
          alt=""
          draggable={false}
          animate={{
            x: [0, -2, 2, -1, 1, 0, -2, 2, -1, 1, 0, 0, 0, 0],
            filter: [
              `drop-shadow(0 0 20px ${theme.glow}80) drop-shadow(0 0 40px ${theme.glow}30)`,
              `drop-shadow(0 0 35px ${theme.glow}ff) drop-shadow(0 0 60px ${theme.glow}60)`,
              `drop-shadow(0 0 20px ${theme.glow}80) drop-shadow(0 0 40px ${theme.glow}30)`,
            ],
          }}
          transition={{
            x: { duration: 2.4, ease: "linear", repeat: 0 },
            filter: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ width: SIZE, height: SIZE, objectFit: "contain" }}
        />

        {/* Flame */}
        <motion.div
          animate={{
            scaleY: [0.7, 1.5, 0.7],
            scaleX: [0.8, 1.3, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 0.22, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 22,
            height: 60 + intensity * 14,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, ${theme.trail[0]}cc, ${theme.trail[1]}80, transparent)`,
            filter: "blur(3px)",
            transformOrigin: "top center",
            marginTop: -8,
          }}
        />
      </motion.div>
    </>
  );
}
