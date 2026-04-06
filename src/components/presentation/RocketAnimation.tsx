import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

interface RocketAnimationProps {
  /** 1 = gentle, 2 = mid, 3 = intense */
  intensity: 1 | 2 | 3;
}

export default function RocketAnimation({ intensity }: RocketAnimationProps) {
  const launchDelay = 0.8;
  const launchDuration = intensity === 3 ? 1.2 : intensity === 2 ? 1.5 : 1.8;
  const trailHeight = intensity === 3 ? 180 : intensity === 2 ? 120 : 70;
  const rocketSize = intensity === 3 ? 28 : intensity === 2 ? 24 : 20;
  const glowSize = intensity === 3 ? 40 : intensity === 2 ? 28 : 18;

  return (
    <div
      className="absolute left-4 bottom-10 pointer-events-none"
      style={{ width: 40, height: 220, zIndex: 5 }}
    >
      {/* Flame trail */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: trailHeight, opacity: [0, 0.8, 0.4] }}
        transition={{
          delay: launchDelay + 0.2,
          duration: launchDuration,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: intensity === 3 ? 6 : intensity === 2 ? 4 : 3,
          borderRadius: 4,
          background: `linear-gradient(to top, transparent, hsl(var(--pres-accent) / 0.6), hsl(var(--pres-accent)))`,
        }}
      />

      {/* Glow behind rocket */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0.6, 0.3],
          scale: [0, 1.2, 1],
        }}
        transition={{
          delay: launchDelay,
          duration: launchDuration,
          ease: "easeOut",
        }}
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: trailHeight + 10,
          width: glowSize,
          height: glowSize,
          borderRadius: "50%",
          background: `radial-gradient(circle, hsl(var(--pres-accent) / 0.5), transparent)`,
          filter: `blur(${intensity === 3 ? 8 : 5}px)`,
        }}
      />

      {/* Rocket icon */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{
          y: -(trailHeight + 10),
          opacity: 1,
        }}
        transition={{
          delay: launchDelay,
          duration: launchDuration,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      >
        {/* Continuous floating after launch */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            delay: launchDelay + launchDuration,
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Slight shake for higher tiers */}
          <motion.div
            animate={
              intensity >= 2
                ? { x: [-1, 1, -1, 0], rotate: [-2, 2, -1, 0] }
                : {}
            }
            transition={{
              delay: launchDelay,
              duration: 0.3,
              repeat: intensity === 3 ? 3 : 1,
            }}
          >
            <Rocket
              size={rocketSize}
              style={{
                color: "hsl(var(--pres-accent))",
                transform: "rotate(-45deg)",
                filter: `drop-shadow(0 0 ${intensity === 3 ? 12 : intensity === 2 ? 8 : 4}px hsl(var(--pres-accent) / 0.6))`,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Sparks for tier 3 */}
      {intensity === 3 &&
        [0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, (i - 1) * 18],
              y: [0, -40 - i * 15],
            }}
            transition={{
              delay: launchDelay + 0.5 + i * 0.15,
              duration: 0.6,
            }}
            className="absolute left-1/2 bottom-0"
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "hsl(var(--pres-accent))",
              boxShadow: "0 0 6px hsl(var(--pres-accent))",
            }}
          />
        ))}
    </div>
  );
}
