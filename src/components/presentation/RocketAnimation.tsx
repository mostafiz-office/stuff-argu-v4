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
    glow: "#38bdf8",
    trail: ["#38bdf8", "#818cf8"],
    image: rocketTier1,
  },
  2: {
    glow: "#4ade80",
    trail: ["#4ade80", "#22d3ee"],
    image: rocketTier2,
  },
  3: {
    glow: "#a78bfa",
    trail: ["#a78bfa", "#f472b6"],
    image: rocketTier3,
  },
};

const SIZE = 260;
const FLIGHT = 3;
const CYCLE = 6500;

export default function RocketAnimation({ intensity }: RocketAnimationProps) {
  const theme = tierThemes[intensity];
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), CYCLE);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-20"
      style={{ borderRadius: "inherit", overflow: "hidden" }}
    >
      <Launch key={cycle} theme={theme} intensity={intensity} />
    </div>
  );
}

function Launch({
  theme,
  intensity,
}: {
  theme: (typeof tierThemes)[1];
  intensity: number;
}) {
  return (
    <>
      {/* Launch pad flash — bottom-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: [0, 0.7, 0], scale: [0.3, 2, 3] }}
        transition={{ delay: 0.1, duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          width: 80,
          height: 24,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${theme.glow}99, ${theme.glow}30, transparent)`,
          filter: "blur(10px)",
        }}
      />

      {/* Smoke at bottom-right */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * 360;
        const r = 16 + (i % 3) * 8;
        const dx = Math.cos((angle * Math.PI) / 180) * r;
        const dy = Math.sin((angle * Math.PI) / 180) * r * 0.5;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.35, 0],
              scale: [0.2, 1.2, 1.8],
              x: [0, dx],
              y: [0, dy],
            }}
            transition={{ delay: 0.1 + i * 0.04, duration: 1.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              bottom: 16,
              right: 30,
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: `radial-gradient(circle, hsl(0 0% 80% / 0.3), transparent)`,
              filter: "blur(4px)",
            }}
          />
        );
      })}

      {/* ── THE ROCKET — right side, straight up, BIG ── */}
      <motion.div
        initial={{ bottom: -20, right: 0, opacity: 0 }}
        animate={{
          bottom: [-20, 20, "50%", "110%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          delay: 0.15,
          duration: FLIGHT,
          ease: [0.15, 0.65, 0.3, 1],
          times: [0, 0.1, 0.6, 1],
        }}
        style={{
          position: "absolute",
          right: -SIZE * 0.25,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Glow halo */}
        <motion.div
          animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: -(SIZE * 0.6),
            marginTop: -(SIZE * 0.6),
            width: SIZE * 1.2,
            height: SIZE * 1.2,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.glow}40, ${theme.glow}10, transparent)`,
            filter: "blur(16px)",
          }}
        />

        {/* Rocket image — BIG */}
        <motion.img
          src={theme.image}
          alt=""
          animate={{
            filter: [
              `drop-shadow(0 0 20px ${theme.glow}80)`,
              `drop-shadow(0 0 40px ${theme.glow}ff)`,
              `drop-shadow(0 0 20px ${theme.glow}80)`,
            ],
          }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: SIZE, height: SIZE, objectFit: "contain" }}
        />

        {/* Main flame */}
        <motion.div
          animate={{
            scaleY: [0.7, 1.5, 0.7],
            scaleX: [0.8, 1.3, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 0.22, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 24,
            height: 70 + intensity * 14,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, ${theme.trail[0]}cc, ${theme.trail[1]}80, transparent)`,
            filter: "blur(3px)",
            transformOrigin: "top center",
            marginTop: -8,
          }}
        />

        {/* Inner core */}
        <motion.div
          animate={{ scaleY: [0.8, 1.4, 0.8], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 0.16, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: -(35 + intensity * 8),
            left: "50%",
            marginLeft: -5,
            width: 10,
            height: 40 + intensity * 10,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, #fffbe6, ${theme.trail[0]}80, transparent)`,
            transformOrigin: "top center",
          }}
        />
      </motion.div>
    </>
  );
}
