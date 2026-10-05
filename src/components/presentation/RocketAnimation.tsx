import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rocketEmoji from "@/assets/rocket-emoji.svg";

interface RocketAnimationProps {
  active?: boolean;
  intensity?: number;
  profile?: "compact" | "full";
  flyingLabel?: string;
  onComplete?: () => void;
}

export const RocketAnimation: React.FC<RocketAnimationProps> = ({
  active = false,
  flyingLabel = "Growth booster",
  onComplete,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (active) {
      setIsPlaying(true);
      const timer = setTimeout(() => {
        setIsPlaying(false);
        if (onComplete) onComplete();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [active, onComplete]);

  return (
    <AnimatePresence>
      {isPlaying && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-30 flex items-center justify-center">
          {/* Flame / spark particles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{
              opacity: [0, 1, 0.8, 0],
              scale: [0.5, 1.2, 1.5, 0],
              y: [100, 50, 0, -150],
            }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="absolute bottom-10 w-24 h-24 rounded-full bg-gradient-to-t from-amber-500/40 via-orange-500/20 to-transparent blur-xl"
          />

          {/* Flying Rocket Container */}
          <motion.div
            initial={{ y: 200, scale: 0.8, opacity: 0 }}
            animate={{
              y: [200, 20, -120, -350],
              scale: [0.8, 1.05, 1, 0.85],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 2.2, times: [0, 0.2, 0.7, 1], ease: "easeInOut" }}
            className="relative flex flex-col items-center gap-2"
          >
            {/* Rocket Graphic */}
            <div className="w-16 h-16 drop-shadow-[0_0_20px_rgba(255,173,1,0.8)] filter">
              <img src={rocketEmoji} alt="Rocket" className="w-full h-full object-contain -rotate-45" />
            </div>

            {/* Flying Label Pill */}
            {flyingLabel && (
              <span className="px-3 py-1 rounded-full bg-pres-accent text-pres-bg text-xs font-bold font-heading shadow-lg tracking-wider uppercase">
                {flyingLabel}
              </span>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
