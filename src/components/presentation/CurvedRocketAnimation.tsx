import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import rocketSvg from "@/assets/rocket-emoji.svg";

const CYCLE_MS = 15_000;
const SIZE = 120;
const GLOW = "#38bdf8";
const TRAIL = ["#38bdf8", "#818cf8"];

export default function CurvedRocketAnimation() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), CYCLE_MS);
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
      <CurvedFlight key={cycle} />
    </div>
  );
}

function CurvedFlight() {
  // Rocket starts at bottom-right of card, arcs up and to the right.
  // Using same positioning as RocketAnimation compact profile.
  const startBottom = -8;
  const startRight = 46;

  return (
    <>
      {/* Launch pad glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.7, 0] }}
        transition={{ duration: 5, times: [0, 0.13, 0.18, 0.4] }}
        style={{
          position: "absolute",
          bottom: startBottom + 20,
          right: startRight + SIZE / 2 - 30,
          width: 60,
          height: 16,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${GLOW}99, transparent)`,
          filter: "blur(8px)",
        }}
      />

      {/* Rocket — curved arc via x/y keyframes */}
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 1, 0],
          x:       [0, 0, 0, -350, -350, -350],
          y:       [0, 0, 0, -520, -520, -520],
        }}
        transition={{
          duration: 15,
          times: [0, 0.01, 0.20, 0.53, 0.87, 1],
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: startBottom,
          right: startRight,
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
            background: `radial-gradient(circle, ${GLOW}50, ${GLOW}15, transparent)`,
            filter: "blur(14px)",
          }}
        />

        {/* Rocket image — rotates to follow the arc */}
        <motion.img
          src={rocketSvg}
          alt=""
          draggable={false}
          animate={{
            rotate: [0, 0, 0, -30, -30, -30],
            x: [0, -2, 2, -1, 1, 0, -2, 2, -1, 1, 0, 0, 0, 0],
            filter: [
              `drop-shadow(0 0 20px ${GLOW}80) drop-shadow(0 0 40px ${GLOW}30)`,
              `drop-shadow(0 0 35px ${GLOW}ff) drop-shadow(0 0 60px ${GLOW}60)`,
              `drop-shadow(0 0 20px ${GLOW}80) drop-shadow(0 0 40px ${GLOW}30)`,
            ],
          }}
          transition={{
            rotate: {
              duration: 15,
              times: [0, 0.01, 0.20, 0.53, 0.87, 1],
              ease: "easeInOut",
            },
            x: { duration: 2.4, ease: "linear", repeat: 0 },
            filter: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            width: SIZE,
            height: SIZE,
            objectFit: "contain",
            transform: "rotate(-45deg)",
          }}
        />

        {/* Flame */}
        <motion.div
          animate={{
            scaleY: [0.7, 1.5, 0.7],
            scaleX: [0.8, 1.3, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            scaleY: { duration: 0.22, repeat: Infinity, ease: "easeInOut" },
            scaleX: { duration: 0.22, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.22, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            width: 22,
            height: 74,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, ${TRAIL[0]}cc, ${TRAIL[1]}80, transparent)`,
            filter: "blur(3px)",
            transformOrigin: "top center",
            marginTop: -20,
          }}
        />
      </motion.div>
    </>
  );
}
