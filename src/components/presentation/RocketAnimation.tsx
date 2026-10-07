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
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
          {/* Flame / spark particles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{
              opacity: [0, 1, 0.8, 0],
              scale: [0.5, 1.2, 1.5, 0],
              y: [80, 35, 0, -80],
            }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="absolute right-4 top-[190px] w-20 h-20 rounded-full bg-gradient-to-t from-amber-500/40 via-orange-500/20 to-transparent blur-xl"
          />

          {/* Flying Rocket Container */}
          <motion.div
            initial={{ y: 200, scale: 0.8, opacity: 0 }}
            animate={{
              y: [90, 20, -25, -115],
              scale: [0.72, 0.95, 0.9, 0.72],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 2.2, times: [0, 0.2, 0.7, 1], ease: "easeInOut" }}
            className="absolute right-3 top-[155px] flex flex-col items-center gap-1.5 w-[110px]"
          >
            {/* Rocket Graphic */}
            <div className="w-12 h-12 drop-shadow-[0_0_20px_rgba(255,173,1,0.8)] filter">
              <img src={rocketEmoji} alt="Rocket" className="w-full h-full object-contain -rotate-45" />
            </div>

            {/* Flying Label Pill */}
            {flyingLabel && (
              <span className="px-2 py-1 rounded-full bg-pres-accent text-pres-bg pres-dark-safe-accent text-[10px] font-bold font-heading shadow-lg uppercase whitespace-nowrap">
                {flyingLabel}
              </span>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
