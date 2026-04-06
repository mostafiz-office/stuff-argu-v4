import { motion, AnimatePresence } from "framer-motion";
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
    trail: ["#38bdf8", "#818cf8", "#c084fc"],
    image: rocketTier1,
    size: 72,
  },
  2: {
    glow: "#4ade80",
    trail: ["#4ade80", "#22d3ee", "#38bdf8"],
    image: rocketTier2,
    size: 80,
  },
  3: {
    glow: "#a78bfa",
    trail: ["#a78bfa", "#f472b6", "#fb923c"],
    image: rocketTier3,
    size: 88,
  },
};

const FLIGHT = 3.5;
const CYCLE = 7000;

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
  const s = theme.size;

  return (
    <>
      {/* ── launch-pad flash ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: [0, 0.8, 0], scale: [0.4, 2.2, 3] }}
        transition={{ delay: 0.1, duration: 1.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 18,
          left: "50%",
          marginLeft: -40,
          width: 80,
          height: 20,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${theme.glow}aa, ${theme.glow}30, transparent)`,
          filter: "blur(8px)",
        }}
      />

      {/* ── smoke puffs ── */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * 360;
        const r = 20 + (i % 3) * 10;
        const dx = Math.cos((angle * Math.PI) / 180) * r;
        const dy = Math.sin((angle * Math.PI) / 180) * r * 0.5;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0.2, 1.4, 2],
              x: [0, dx],
              y: [0, dy],
            }}
            transition={{ delay: 0.15 + i * 0.04, duration: 1.8, ease: "easeOut" }}
            style={{
              position: "absolute",
              bottom: 20,
              left: "50%",
              marginLeft: -8,
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: `radial-gradient(circle, hsl(0 0% 85% / 0.35), transparent)`,
              filter: "blur(4px)",
            }}
          />
        );
      })}

      {/* ── THE ROCKET ── launches from pad upward ── */}
      <motion.div
        initial={{ bottom: 10, left: "50%", opacity: 0, scale: 0.6 }}
        animate={{
          bottom: [10, 30, "30%", "60%", "110%"],
          opacity: [0, 1, 1, 1, 0],
          scale: [0.6, 0.8, 1, 1, 1],
        }}
        transition={{
          delay: 0.3,
          duration: FLIGHT,
          ease: [0.15, 0.7, 0.3, 1],
          times: [0, 0.08, 0.35, 0.7, 1],
        }
        style={{
          position: "absolute",
          marginLeft: -(s / 2),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* glow halo */}
        <motion.div
          animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: -(s * 0.7),
            marginTop: -(s * 0.7),
            width: s * 1.4,
            height: s * 1.4,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.glow}50, ${theme.glow}15, transparent)`,
            filter: "blur(12px)",
          }}
        />

        {/* rocket image */}
        <motion.img
          src={theme.image}
          alt=""
          animate={{
            filter: [
              `drop-shadow(0 0 ${12 + intensity * 6}px ${theme.glow}90)`,
              `drop-shadow(0 0 ${20 + intensity * 8}px ${theme.glow}ff)`,
              `drop-shadow(0 0 ${12 + intensity * 6}px ${theme.glow}90)`,
            ],
          }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: s, height: s, objectFit: "contain" }}
        />

        {/* main flame */}
        <motion.div
          animate={{
            scaleY: [0.8, 1.4, 0.8],
            scaleX: [0.9, 1.2, 0.9],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 0.25, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 18,
            height: 50 + intensity * 12,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, ${theme.trail[0]}cc, ${theme.trail[1]}80, transparent)`,
            filter: "blur(2px)",
            transformOrigin: "top center",
            marginTop: -6,
          }}
        />

        {/* inner core */}
        <motion.div
          animate={{ scaleY: [0.9, 1.3, 0.9], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 0.18, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: -(28 + intensity * 6),
            left: "50%",
            marginLeft: -4,
            width: 8,
            height: 32 + intensity * 8,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, #fffbe6, ${theme.trail[0]}80, transparent)`,
            transformOrigin: "top center",
          }}
        />
      </motion.div>
    </>
  );
}
