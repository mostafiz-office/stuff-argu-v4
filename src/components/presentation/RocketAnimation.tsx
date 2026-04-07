import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import rocketSvg from "@/assets/rocket-emoji.svg";

interface RocketAnimationProps {
  intensity: 1 | 2 | 3;
  profile?: "default" | "compact" | "curved";
  flyingLabel?: string;
}

const tierThemes: Record<1 | 2 | 3, { glow: string; trail: string[]; image: string }> = {
  1: { glow: "#38bdf8", trail: ["#38bdf8", "#818cf8"], image: rocketSvg },
  2: { glow: "#4ade80", trail: ["#4ade80", "#22d3ee"], image: rocketSvg },
  3: { glow: "#a78bfa", trail: ["#a78bfa", "#f472b6"], image: rocketSvg },
};

interface FlightProfile {
  size: number;
  startBottom: number;
  startRight: number;
  travelY: Record<1 | 2 | 3, number>;
  travelX?: Record<1 | 2 | 3, number>;
  noseRotate?: Record<1 | 2 | 3, number>;
}

const flightProfiles: Record<string, FlightProfile> = {
  default: {
    size: 160,
    startBottom: -60,
    startRight: 10,
    travelY: { 1: -560, 2: -550, 3: -550 },
  },
  compact: {
    size: 120,
    startBottom: 152,
    startRight: 46,
    travelY: { 1: -520, 2: -520, 3: -520 },
  },
  curved: {
    size: 120,
    startBottom: -8,
    startRight: 46,
    travelY: { 1: -520, 2: -520, 3: -520 },
    // Negative x moves element leftward on screen (toward right edge since positioned with `right`)
    // Wait — transform x is always screen-relative: positive = rightward
    // To move the rocket to the RIGHT of the slide, use positive x
    travelX: { 1: 280, 2: 280, 3: 280 },
    // Nose tilts right to follow the rightward arc
    noseRotate: { 1: 25, 2: 25, 3: 25 },
  },
};

export default function RocketAnimation({ intensity, profile = "default", flyingLabel }: RocketAnimationProps) {
  const theme = tierThemes[intensity];
  const flightProfile = flightProfiles[profile];
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
      <RocketFlight key={cycle} theme={theme} intensity={intensity} profile={flightProfile} flyingLabel={flyingLabel} />
    </div>
  );
}

function RocketFlight({
  theme,
  intensity,
  profile,
  flyingLabel,
}: {
  theme: (typeof tierThemes)[1];
  intensity: number;
  profile: FlightProfile;
  flyingLabel?: string;
}) {
  const size = profile.size;
  const startBottom = profile.startBottom;
  const startRight = profile.startRight;
  const travelY = profile.travelY[intensity as 1 | 2 | 3];
  const travelX = profile.travelX?.[intensity as 1 | 2 | 3] ?? 0;
  const noseRotate = profile.noseRotate?.[intensity as 1 | 2 | 3] ?? 0;
  const isCurved = travelX !== 0;

  const times = intensity === 3
    ? [0, 0.01, 0.20, 0.35, 0.90, 1]
    : intensity === 2
      ? [0, 0.01, 0.20, 0.45, 0.90, 1]
      : [0, 0.01, 0.20, 0.55, 0.90, 1];

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
          right: startRight + size / 2 - 30,
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
              bottom: startBottom + 20,
              right: startRight + size / 2 - 6,
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "hsl(0 0% 80% / 0.25)",
              filter: "blur(4px)",
            }}
          />
        );
      })}

      {/* Rocket: appear → fly (straight or curved) → hover → fade */}
      <motion.div
        initial={{ opacity: 0, y: 0, ...(isCurved ? { x: 0 } : {}) }}
        animate={{
          opacity: [0, 1, 1, 1, 1, 0],
          y: [0, 0, 0, travelY, travelY, travelY],
          ...(isCurved ? { x: [0, 0, 0, travelX, travelX, travelX] } : {}),
        }}
        transition={{
          duration: 15,
          times,
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
            marginLeft: -(size * 0.6),
            marginTop: -(size * 0.6),
            width: size * 1.2,
            height: size * 1.2,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.glow}50, ${theme.glow}15, transparent)`,
            filter: "blur(14px)",
          }}
        />

        {/* Rocket image — vibrates during pre-launch, rotates if curved */}
        <motion.img
          src={theme.image}
          alt=""
          draggable={false}
          animate={{
            x: [0, -2, 2, -1, 1, 0, -2, 2, -1, 1, 0, 0, 0, 0],
            ...(isCurved
              ? { rotate: [0, 0, 0, noseRotate, noseRotate, noseRotate] }
              : {}),
            filter: [
              `drop-shadow(0 0 20px ${theme.glow}80) drop-shadow(0 0 40px ${theme.glow}30)`,
              `drop-shadow(0 0 35px ${theme.glow}ff) drop-shadow(0 0 60px ${theme.glow}60)`,
              `drop-shadow(0 0 20px ${theme.glow}80) drop-shadow(0 0 40px ${theme.glow}30)`,
            ],
          }}
          transition={{
            x: { duration: 2.4, ease: "linear", repeat: 0 },
            ...(isCurved
              ? { rotate: { duration: 15, times, ease: "easeInOut" } }
              : {}),
            filter: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ width: size, height: size, objectFit: "contain", transform: "rotate(-45deg)" }}
        />

        {/* Flame */}
        <motion.div
          animate={{
            scaleY: [0.7, 1.5, 0.7],
            scaleX: [0.8, 1.3, 0.8],
            opacity: [0.5, 1, 0.5],
            ...(isCurved
              ? { rotate: [0, 0, 0, noseRotate, noseRotate, noseRotate] }
              : {}),
          }}
          transition={{
            scaleY: { duration: 0.22, repeat: Infinity, ease: "easeInOut" },
            scaleX: { duration: 0.22, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.22, repeat: Infinity, ease: "easeInOut" },
            ...(isCurved
              ? { rotate: { duration: 15, times, ease: "easeInOut" } }
              : {}),
          }}
          style={{
            width: 22,
            height: 60 + intensity * 14,
            borderRadius: "0 0 50% 50%",
            background: `linear-gradient(to bottom, #fff, ${theme.trail[0]}cc, ${theme.trail[1]}80, transparent)`,
            filter: "blur(3px)",
            transformOrigin: "top center",
            marginTop: -20,
          }}
        />

        {/* Flying label */}
        {flyingLabel && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 0, 1, 1, 1, 0],
              scale: [0.5, 0.5, 1, 1, 1, 1],
            }}
            transition={{
              duration: 15,
              times,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              right: size + 8,
              top: size * 0.25,
              whiteSpace: "nowrap",
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: theme.glow,
              textShadow: `0 0 16px ${theme.glow}80, 0 0 32px ${theme.glow}40`,
              background: `linear-gradient(135deg, ${theme.glow}20, ${theme.glow}08)`,
              border: `1px solid ${theme.glow}40`,
              borderRadius: 10,
              padding: "6px 14px",
              backdropFilter: "blur(6px)",
            }}
          >
            {flyingLabel}
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
