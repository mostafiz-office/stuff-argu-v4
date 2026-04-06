import { useState, useEffect, type ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { usePresentation } from "@/context/PresentationContext";
import { useAssetPreloader } from "@/hooks/useAssetPreloader";
import { isExportEnabled, isValidSlideNumber } from "@/utils/guards";
import {
  TransitionStyleType,
  TRANSITION_STYLES,
  TRANSITION_DURATION_S,
  TRANSITION_EASE,
  TRANSITION_PERSPECTIVE_PX,
  ZOOM_SCALE_IN,
  ZOOM_SCALE_OUT,
  FLIP_ANGLE_DEG,
  FLIP_SCALE,
  RISE_OFFSET_PX,
  RISE_SCALE,
} from "@/constants/presentation";
import SlideNavigation from "./SlideNavigation";
import DownloadPanel from "./DownloadPanel";

interface PresentationEngineProps {
  slides: ReactElement[];
}

/* ── Transition logic ────────────────────────────────── */

const getTransitionStyle = (index: number): TransitionStyleType =>
  TRANSITION_STYLES[index % TRANSITION_STYLES.length];

const getEnterVariant = (style: TransitionStyleType, direction: number) => {
  switch (style) {
    case TransitionStyleType.Fade:
      return { opacity: 0 };
    case TransitionStyleType.Zoom:
      return { scale: direction > 0 ? ZOOM_SCALE_IN : ZOOM_SCALE_OUT, opacity: 0 };
    case TransitionStyleType.Flip:
      return { rotateY: direction > 0 ? FLIP_ANGLE_DEG : -FLIP_ANGLE_DEG, opacity: 0, scale: FLIP_SCALE };
    case TransitionStyleType.Rise:
      return { y: direction > 0 ? RISE_OFFSET_PX : -RISE_OFFSET_PX, opacity: 0, scale: RISE_SCALE };
    default:
      return { x: direction > 0 ? "100%" : "-100%", opacity: 0 };
  }
};

const getExitVariant = (style: TransitionStyleType, direction: number) => {
  switch (style) {
    case TransitionStyleType.Fade:
      return { opacity: 0 };
    case TransitionStyleType.Zoom:
      return { scale: direction > 0 ? ZOOM_SCALE_OUT : ZOOM_SCALE_IN, opacity: 0 };
    case TransitionStyleType.Flip:
      return { rotateY: direction > 0 ? -FLIP_ANGLE_DEG : FLIP_ANGLE_DEG, opacity: 0, scale: FLIP_SCALE };
    case TransitionStyleType.Rise:
      return { y: direction > 0 ? -RISE_OFFSET_PX : RISE_OFFSET_PX, opacity: 0, scale: RISE_SCALE };
    default:
      return { x: direction > 0 ? "-100%" : "100%", opacity: 0 };
  }
};

const CENTER_VARIANT = { x: 0, y: 0, opacity: 1, scale: 1, rotateY: 0 };

const getVariants = (style: TransitionStyleType) => ({
  enter: (direction: number) => getEnterVariant(style, direction),
  center: CENTER_VARIANT,
  exit: (direction: number) => getExitVariant(style, direction),
});

const parseSlideIndex = (slideParam: string | null, totalSlides: number): number => {
  const parsed = Number.parseInt(slideParam ?? "1", 10);
  const safeSlide = isValidSlideNumber(parsed) ? parsed : 1;

  return Math.max(0, Math.min(totalSlides - 1, safeSlide - 1));
};

const SLIDE_LABELS = [
  "Introduction",
  "About the Leader",
  "Feature Comparison",
  "Cost Comparison",
  "Schedule a Call",
];

export default function PresentationEngine({ slides }: PresentationEngineProps) {
  const presentation = usePresentation();
  const hiddenSlideIndices = new Set(
    presentation.features.hiddenSlides?.map((n) => n - 1) ?? []
  );
  const visibleSlides = slides.filter((_, index) => !hiddenSlideIndices.has(index));

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentIndex, setCurrentIndex] = useState(() =>
    parseSlideIndex(searchParams.get("slide"), visibleSlides.length)
  );
  const [direction, setDirection] = useState(0);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  useAssetPreloader();

  const exportParam = searchParams.get("export");
  const isExportActive = exportParam !== null && isExportEnabled(exportParam);

  const navigate = (newIndex: number) => {
    const clamped = Math.max(0, Math.min(visibleSlides.length - 1, newIndex));
    if (clamped === currentIndex) return;

    setDirection(clamped > currentIndex ? 1 : -1);
    setCurrentIndex(clamped);
  };

  useEffect(() => {
    const targetIndex = parseSlideIndex(searchParams.get("slide"), visibleSlides.length);

    setCurrentIndex((previousIndex) => {
      if (targetIndex === previousIndex) return previousIndex;

      setDirection(targetIndex > previousIndex ? 1 : -1);

      return targetIndex;
    });
  }, [searchParams, visibleSlides.length]);

  useEffect(() => {
    const slideNumber = String(currentIndex + 1);
    if (searchParams.get("slide") === slideNumber) return;

    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("slide", slideNumber);
    setSearchParams(nextParams, { replace: true });
  }, [currentIndex, searchParams, setSearchParams]);

  useEffect(() => {
    if (!isExportActive && isDownloadOpen) {
      setIsDownloadOpen(false);
    }
  }, [isExportActive, isDownloadOpen]);

  return (
    <div className="presentation-viewport">
      <div className="noise-overlay" />

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          variants={getVariants(getTransitionStyle(currentIndex))}
          transition={{ duration: TRANSITION_DURATION_S, ease: [...TRANSITION_EASE] }}
          className="absolute inset-0"
          style={{ perspective: TRANSITION_PERSPECTIVE_PX }}
        >
          {visibleSlides[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <SlideNavigation
        total={visibleSlides.length}
        current={currentIndex}
        onNavigate={navigate}
        showDownload={isExportActive}
        onOpenDownload={isExportActive ? () => setIsDownloadOpen(true) : undefined}
        slideLabels={SLIDE_LABELS}
      />

      {isExportActive && (
        <DownloadPanel
          open={isDownloadOpen}
          onClose={() => setIsDownloadOpen(false)}
          slides={visibleSlides}
          currentSlide={currentIndex}
          onNavigate={navigate}
          allowHtmlDownload
        />
      )}
    </div>
  );
}
