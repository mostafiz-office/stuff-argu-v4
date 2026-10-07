import type { Transition, Variants } from "framer-motion";

export const presentationEase = [0.22, 1, 0.36, 1] as const;

export const entranceTransition = (delay = 0, duration = 0.52): Transition => ({
  delay,
  duration,
  ease: presentationEase,
});

export const fadeUp = (delay = 0, distance = 20) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0 },
  transition: entranceTransition(delay),
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: entranceTransition(delay, 0.42),
});

export const scaleIn = (delay = 0): {
  initial: { opacity: number; scale: number };
  animate: { opacity: number; scale: number };
  transition: Transition;
} => ({
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay, type: "spring", stiffness: 180, damping: 20 },
});

export const staggerDelay = (index: number, start = 0.18, step = 0.07) => start + index * step;

export type PresentationTransition = "slide" | "fade" | "zoom" | "rise";

export const slideTransitionVariants = (type: PresentationTransition): Variants => ({
  enter: (direction: number) => {
    if (type === "fade") return { opacity: 0 };
    if (type === "zoom") return { opacity: 0, scale: 0.96 };
    if (type === "rise") return { opacity: 0, y: direction > 0 ? 48 : -48 };
    return { opacity: 0, x: direction > 0 ? "12%" : "-12%" };
  },
  center: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: (direction: number) => {
    if (type === "fade") return { opacity: 0 };
    if (type === "zoom") return { opacity: 0, scale: 1.025 };
    if (type === "rise") return { opacity: 0, y: direction > 0 ? -36 : 36 };
    return { opacity: 0, x: direction > 0 ? "-10%" : "10%" };
  },
});
