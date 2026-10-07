import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Share2, Maximize, Minimize, Check, Volume2, VolumeX } from "lucide-react";
import { toast } from "sonner";
import { presentationSound } from "@/lib/presentationSound";

import "@/types/navigation";

interface SlideNavigationProps {
  currentIndex: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentIndex,
  totalSlides,
  onNavigate,
  onNext,
  onPrev,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [gateTooltip, setGateTooltip] = useState<string | null>(null);
  const [soundMuted, setSoundMuted] = useState(() => presentationSound.isMuted());

  useEffect(() => presentationSound.subscribe(setSoundMuted), []);

  // Poll for interactive gate tooltip state
  useEffect(() => {
    const updateGate = () => {
      const gate = window.__slideNavigationGate;
      if (gate && gate.tooltip) {
        setGateTooltip(gate.tooltip);
      } else {
        setGateTooltip(null);
      }
    };

    updateGate();
    const timer = setInterval(updateGate, 250);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < totalSlides - 1;

  const goPrev = useCallback(() => {
    if (onPrev) {
      onPrev();
      return;
    }
    if (canGoPrev) {
      onNavigate(currentIndex - 1);
    }
  }, [canGoPrev, currentIndex, onNavigate, onPrev]);

  const goNext = useCallback(() => {
    if (onNext) {
      onNext();
      return;
    }
    const gate = window.__slideNavigationGate;
    if (gate && typeof gate.trigger === "function") {
      const isHandled = gate.trigger();
      if (isHandled) {
        return;
      }
    }

    if (canGoNext) {
      onNavigate(currentIndex + 1);
    }
  }, [canGoNext, currentIndex, onNavigate, onNext]);

  // Fullscreen toggle
  const toggleFullscreen = useCallback(() => {
    presentationSound.play("click");
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, toggleFullscreen]);

  // Touch swipe support
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaX = e.changedTouches[0].clientX - startX;
      const deltaY = e.changedTouches[0].clientY - startY;

      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < 0) {
          goNext();
        } else {
          goPrev();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  // Share handler
  const handleShare = () => {
    presentationSound.play("click");
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleSound = () => {
    const nextMuted = !soundMuted;
    presentationSound.setMuted(nextMuted);
    if (!nextMuted) presentationSound.play("reveal");
  };

  return (
    <>
      {/* Top-Right Control Bar */}
      <div className="presentation-controls fixed top-6 right-6 z-[250] pointer-events-auto flex items-center gap-1 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-2xl text-white">
        {/* Previous */}
        <button
          type="button"
          onClick={goPrev}
          disabled={!canGoPrev}
          aria-label="Previous slide"
          className="presentation-control p-1.5 rounded-full disabled:opacity-30 disabled:cursor-not-allowed text-white/90 hover:text-pres-accent cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Counter */}
        <span className="px-2 text-xs font-medium tracking-wider text-white/70 font-mono select-none">
          {currentIndex + 1} / {totalSlides}
        </span>

        {/* Next */}
        <button
          type="button"
          onClick={goNext}
          disabled={!canGoNext}
          aria-label="Next slide"
          className="presentation-control p-1.5 rounded-full disabled:opacity-30 disabled:cursor-not-allowed text-white/90 hover:text-pres-accent cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-white/20 mx-1" />

        <button
          type="button"
          onClick={toggleSound}
          aria-label={soundMuted ? "Enable presentation sound" : "Mute presentation sound"}
          className="presentation-control p-1.5 rounded-full text-white/90 hover:text-pres-accent cursor-pointer"
          title={soundMuted ? "Enable sound" : "Mute sound"}
        >
          {soundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <div className="w-[1px] h-4 bg-white/20 mx-1" />

        {/* Share */}
        <button
          type="button"
          onClick={handleShare}
          aria-label="Share slide"
          className="presentation-control p-1.5 rounded-full text-white/90 hover:text-pres-accent cursor-pointer"
          title="Copy link"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
        </button>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-white/20 mx-1" />

        {/* Fullscreen */}
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label="Toggle fullscreen"
          className="presentation-control p-1.5 rounded-full text-white/90 hover:text-pres-accent cursor-pointer"
          title="Fullscreen (F)"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
      </div>

      {/* Interactive Gate Tooltip Bubble - Top Right */}
      {gateTooltip && (
        <div className="fixed top-[74px] right-6 z-[250] pointer-events-none animate-bounce">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-pres-accent text-pres-bg pres-dark-safe-accent text-xs font-bold font-heading shadow-[0_0_25px_rgba(255,173,1,0.6)] border border-white/30">
            <span>{gateTooltip}</span>
          </div>
        </div>
      )}

      {/* Bottom Dot Navigation - Sleek, compact, well clear of slide content */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[250] pointer-events-auto flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-xl">
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onNavigate(idx)}
              aria-label={`Go to slide ${idx + 1}`}
               title={`${idx + 1}. ${["The Fighting Plan", "Outage Panic", "Fragile AI Code", "Hiring Sinkhole", "Pricing Tiers", "Features Comparison", "Chief Architect", "Architect Value", "What's Included", "How It Works", "Starter Tier", "Cost Savings", "Contact"][idx] ?? "Presentation"}`}
              className={`presentation-dot transition-all duration-300 rounded-full cursor-pointer ${
                isActive
                  ? "w-7 h-2 bg-pres-accent shadow-[0_0_10px_rgba(255,173,1,0.5)]"
                  : "w-2 h-2 bg-white/30 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>
    </>
  );
};
