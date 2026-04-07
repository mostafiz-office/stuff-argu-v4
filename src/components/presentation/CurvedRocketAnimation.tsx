import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import rocketSvg from "@/assets/rocket-emoji.svg";

/**
 * Curved rocket animation: launches up-right, arcs at peak, descends and
 * lands in the centre of the card. Used on the Starter-tier slide (slide 9).
 *
 * The 15-second cycle mirrors the standard RocketAnimation timing:
 *   0-3 s  → pad vibration / anticipation
 *   3-5 s  → launch upward
 *   5-8 s  → arc over the peak, rotating nose-forward
 *   8-10 s → descend toward centre
 *   10-13 s → hover at landing spot
 *   13-15 s → fade out, then cycle restarts
 */

const GLOW = "#38bdf8";
const TRAIL = ["#38bdf8", "#818cf8"];

export default function CurvedRocketAnimation() {
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
      <CurvedFlight key={cycle} />
    </div>
  );
}

function CurvedFlight() {
  const size = 110;

  // Keyframe positions (relative to the starting anchor)
  // The rocket starts at bottom-right of the card, arcs up-left, then lands
  // near the vertical centre-right area of the card.
  //
  // Timeline fractions (of 15 s):
  //   0.00 → appear
  //   0.01 → visible, start position
  //   0.20 → still at pad (vibration phase)
  //   0.35 → reached peak (top of arc)
  //   0.50 → mid-descent
  //   0.65 → landed at centre
  //   0.90 → still hovering at landing
  //   1.00 → fade out

  const times = [0, 0.01, 0.20, 0.35, 0.50, 0.65, 0.90, 1];

  // Y: 0 is start (bottom), negative is up
  const yFrames = [0, 0, 0, -460, -340, -200, -200, -200];

  // X: 0 is start (right side), negative is left
  const xFrames = [0, 0, 0, -40, -120, -160, -160, -160];

  // Rotation: -45 deg = pointing up-right (launch), 0 = pointing up,
  // 45 = pointing up-left, 90 = pointing right-down
  const rotFrames = [
    "-45deg",  // start
    "-45deg",  // visible
    "-45deg",  // pad
    "-30deg",  // ascending, slightly tilting
    "15deg",   // arcing over
    "45deg",   // descending
    "45deg",   // hovering
    "45deg",   // fade
  ];

  const opacityFrames = [0, 1, 1, 1, 1, 1, 1, 0];

  return (
    <>
      {/* Launch pad glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.7, 0] }}
        transition={{ duration: 5, times: [0, 0.13, 0.18, 0.4] }}
        style={{
          position: "absolute",
          bottom: 10,
          right: 46 + size / 2 - 30,
          width: 60,
          height: 16,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${GLOW}99, transparent)`,
          filter: "blur(8px)",
        }}
      />

      {/* Smoke puffs */}
      {[0, 1, 2, 3, 4].map((i) => {
        const dx = (i - 2) * 12;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 0.3, 0],
              y: [0, 0, -5 + i * 2, -10],
              x: [0, 0, dx, dx * 1.5],
            }}
            transition={{ duration: 5, times: [0, 0.13, 0.2, 0.4] }}
            style={{
              position: "absolute",
              bottom: 10,
              right: 46 + size / 2 - 6,
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "hsl(0 0% 80% / 0.25)",
              filter: "blur(4px)",
            }}
          />
        );
      })}

      {/* Rocket body — follows curved path */}
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{
          opacity: opacityFrames,
          x: xFrames,
          y: yFrames,
          rotate: rotFrames,
        }}
        transition={{
          duration: 15,
          times,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: -8,
          right: 46,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transformOrigin: "center center",
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
            marginLeft: -(size * 0.6),
            marginTop: -(size * 0.6),
            width: size * 1.2,
            height: size * 1.2,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${GLOW}50, ${GLOW}15, transparent)`,
            filter: "blur(14px)",
          }}
        />

        {/* Rocket image */}
        <motion.img
          src={rocketSvg}
          alt=""
          draggable={false}
          animate={{
            x: [0, -2, 2, -1, 1, 0, -2, 2, -1, 1, 0, 0, 0, 0],
            filter: [
              `drop-shadow(0 0 20px ${GLOW}80) drop-shadow(0 0 40px ${GLOW}30)`,
              `drop-shadow(0 0 35px ${GLOW}ff) drop-shadow(0 0 60px ${GLOW}60)`,
              `drop-shadow(0 0 20px ${GLOW}80) drop-shadow(0 0 40px ${GLOW}30)`,
            ],
          }}
          transition={{
            x: { duration: 2.4, ease: "linear", repeat: 0 },
            filter: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            width: size,
            height: size,
            objectFit: "contain",
            /* rotation is handled by parent motion.div */
          }}
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
