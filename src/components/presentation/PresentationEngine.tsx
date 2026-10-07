import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import { SlideNavigation } from "./SlideNavigation";
import { presentationEase, slideTransitionVariants, type PresentationTransition } from "@/lib/presentationMotion";
import { presentationSound } from "@/lib/presentationSound";

const TRANSITION_STYLES: PresentationTransition[] = [
  "fade",
  "rise",
  "slide",
  "fade",
  "zoom",
  "rise",
  "fade",
  "zoom",
  "slide",
  "fade",
  "slide",
  "zoom",
  "rise",
  "fade",
  "zoom",
  "rise",
  "fade",
];

interface PresentationEngineProps {
  slides: React.ComponentType<{ onNavigate?: (slideIndex: number) => void }>[];
  currentIndex?: number;
  direction?: number;
  onNavigate?: (newIndex: number) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const PresentationEngine: React.FC<PresentationEngineProps> = ({
  slides,
  currentIndex: controlledIndex,
  direction: controlledDirection,
  onNavigate: controlledOnNavigate,
  onNext: controlledOnNext,
  onPrev: controlledOnPrev,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const reduceMotion = useReducedMotion();
  const totalSlides = slides.length;

  const isControlled = typeof controlledIndex === "number" && typeof controlledOnNavigate === "function";

  // Fallback internal state if not controlled from Index
  const getInitialIndex = () => {
    const slideParam = searchParams.get("slide");
    if (slideParam) {
      const parsed = parseInt(slideParam, 10);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= totalSlides) {
        return parsed - 1;
      }
    }
    return 0;
  };

  const [internalIndex, setInternalIndex] = useState<number>(getInitialIndex);
  const [internalDirection, setInternalDirection] = useState<number>(1);
  const prevIndexRef = useRef<number>(internalIndex);

  const currentIndex = isControlled ? controlledIndex! : internalIndex;
  const direction = isControlled && typeof controlledDirection === "number" ? controlledDirection : internalDirection;

  // Internal URL sync if running uncontrolled
  useEffect(() => {
    if (!isControlled) {
      const slideParam = searchParams.get("slide");
      if (slideParam) {
        const parsed = parseInt(slideParam, 10);
        if (!isNaN(parsed) && parsed >= 1 && parsed <= totalSlides) {
          const targetIndex = parsed - 1;
          if (targetIndex !== internalIndex) {
            setInternalDirection(targetIndex > internalIndex ? 1 : -1);
            setInternalIndex(targetIndex);
            prevIndexRef.current = targetIndex;
          }
        }
      }
    }
  }, [isControlled, searchParams, totalSlides, internalIndex]);

  useEffect(() => {
    if (!isControlled && prevIndexRef.current !== internalIndex) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("slide", (internalIndex + 1).toString());
      setSearchParams(newParams, { replace: true });
      prevIndexRef.current = internalIndex;
    }
  }, [isControlled, internalIndex, searchParams, setSearchParams]);

  const handleNavigate = useCallback(
    (newIndex: number) => {
      if (newIndex < 0 || newIndex >= totalSlides || newIndex === currentIndex) return;
      presentationSound.play("transition");
      if (controlledOnNavigate) {
        controlledOnNavigate(newIndex);
      } else {
        setInternalDirection(newIndex > internalIndex ? 1 : -1);
        setInternalIndex(newIndex);
      }
    },
    [controlledOnNavigate, totalSlides, currentIndex, internalIndex]
  );

  const transitionType = TRANSITION_STYLES[currentIndex] ?? "fade";
  const variants = slideTransitionVariants(transitionType);
  const CurrentSlideComponent = slides[currentIndex];

  return (
    <MotionConfig reducedMotion="user">
    <div className="relative w-screen h-screen overflow-hidden bg-pres-bg">
      {/* Global Noise Overlay Grain */}
      <div className="noise-overlay pointer-events-none" />

      {/* Main Slide Presentation Canvas with 3D Perspective */}
      <div className="relative w-full h-full overflow-hidden select-none">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: reduceMotion ? 0.01 : 0.45,
              ease: presentationEase,
            }}
            className="w-full h-full flex items-center justify-center"
          >
            {CurrentSlideComponent && <CurrentSlideComponent onNavigate={handleNavigate} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Global Navigation HUD - High z-index, outside 3D perspective context */}
      <div className="relative z-[200] pointer-events-auto">
        <SlideNavigation
          currentIndex={currentIndex}
          totalSlides={totalSlides}
          onNavigate={handleNavigate}
          onNext={controlledOnNext}
          onPrev={controlledOnPrev}
        />
      </div>
    </div>
    </MotionConfig>
  );
};
