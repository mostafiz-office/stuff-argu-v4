import "@/types/navigation";
import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Share2, Maximize, Minimize, Check, Volume2, VolumeX, Video, VideoOff, ShieldAlert } from "lucide-react";
import { toast } from "sonner";
import { presentationSound } from "@/lib/presentationSound";
import { CameraBubble } from "@/components/presentation/CameraBubble";

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
  const [gateStep, setGateStep] = useState<number | null>(null);
  const [soundMuted, setSoundMuted] = useState(() => presentationSound.isMuted());
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<null | "denied" | "notfound" | "other">(null);

  useEffect(() => presentationSound.subscribe(setSoundMuted), []);

  // Stop the webcam if the navigation unmounts while it is live
  useEffect(() => {
    return () => {
      setCameraStream((s) => {
        if (s) s.getTracks().forEach((tr) => tr.stop());
        return null;
      });
    };
  }, []);

  // Poll for interactive gate tooltip state (Batch 87: also track the
  // gate step, so the pyramid sub-dots can light up as steps are reached)
  useEffect(() => {
    const updateGate = () => {
      const gate = window.__slideNavigationGate;
      if (gate && gate.tooltip) {
        setGateTooltip(gate.tooltip);
      } else {
        setGateTooltip(null);
      }
      setGateStep(typeof gate?.step === "number" ? gate.step : null);
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

  // FB-05: "Start camera" presenter webcam overlay (mirrors the reference deck).
  // Not a recorder: opens the device webcam as a draggable bubble over the slides.
  const toggleCamera = useCallback(async () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((tr) => tr.stop());
      setCameraStream(null);
      return;
    }
    setCameraError(null);
    try {
      if (!navigator.mediaDevices?.getUserMedia) throw new Error("unsupported");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 } },
        audio: false,
      });
      stream.getVideoTracks()[0]?.addEventListener("ended", () => setCameraStream(null));
      setCameraStream(stream);
    } catch (err) {
      // Batch 101: name the failure instead of one generic notice.
      // NotAllowedError = permission denied; NotFoundError /
      // OverconstrainedError = no matching camera; anything else
      // (unsupported API, blocked frame) = other.
      const name = (err as { name?: string } | null)?.name;
      setCameraError(
        name === "NotAllowedError"
          ? "denied"
          : name === "NotFoundError" || name === "OverconstrainedError"
            ? "notfound"
            : "other",
      );
    }
  }, [cameraStream]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      // Comparison overlay owns the keyboard while open
      if (window.__comparisonOpen) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      } else if ((e.key === "c" || e.key === "C") && !e.ctrlKey && !e.metaKey && !e.altKey) {
        // Batch 101 (owner: camera shortcuts): C toggles the camera,
        // mirroring F for fullscreen. Modifier-guarded so Ctrl+C
        // (copy) is never hijacked.
        e.preventDefault();
        toggleCamera();
      } else if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, toggleFullscreen, toggleCamera]);

  const stopCamera = useCallback(() => {
    setCameraStream((s) => {
      if (s) s.getTracks().forEach((tr) => tr.stop());
      return null;
    });
  }, []);

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

        {/* Camera (FB-05) */}
        <button
          type="button"
          onClick={toggleCamera}
          aria-label={cameraStream ? "Stop camera" : "Start camera"}
          className={`presentation-control p-1.5 rounded-full cursor-pointer ${
            cameraStream ? "text-red-400 hover:text-red-300" : "text-white/90 hover:text-pres-accent"
          }`}
          title={cameraStream ? "Stop camera (C)" : "Start camera (C)"}
        >
          {cameraStream ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
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
        <div
          key={gateTooltip}
          className="gate-hint fixed top-[78px] right-7 z-[250] pointer-events-none"
        >
          <span className="text-[13px] font-medium tracking-wide text-white/55">
            {gateTooltip}
          </span>
        </div>
      )}

      {/* Camera bubble overlay */}
      {cameraStream && <CameraBubble stream={cameraStream} onClose={stopCamera} />}

      {/* Camera unavailable notice (mirrors the reference deck) */}
      {cameraError !== null && (
        <div className="fixed bottom-8 left-1/2 z-[300] -translate-x-1/2 pointer-events-auto">
          <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-pres-surface/95 px-6 py-4 shadow-2xl backdrop-blur-md">
            <ShieldAlert className="h-8 w-8 shrink-0 text-pres-accent" />
            <div>
              <div className="font-heading text-[18px] font-bold text-white">
                {cameraError === "denied" ? "Camera permission denied" : "Camera unavailable"}
              </div>
              <div className="text-[15px] text-pres-text-muted">
                {cameraError === "denied"
                  ? "Camera permission was denied. Allow camera access in your browser, then try again."
                  : cameraError === "notfound"
                    ? "No camera found on this device."
                    : "The camera could not be started. If this is a preview frame, open the deployed link directly and try again."}
              </div>
            </div>
            <div className="flex items-center gap-2 pl-2">
              <button
                type="button"
                onClick={toggleCamera}
                className="rounded-full bg-pres-accent px-4 py-1.5 text-[15px] font-bold text-pres-bg pres-dark-safe-accent cursor-pointer"
              >
                Try again
              </button>
              <button
                type="button"
                onClick={() => setCameraError(null)}
                className="rounded-full border border-white/20 px-4 py-1.5 text-[15px] font-semibold text-white/80 hover:text-white cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Dot Navigation - Sleek, compact, well clear of slide content */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[250] pointer-events-auto flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-xl">
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <React.Fragment key={idx}>
              {/* Batch 101 (owner: slide tooltips): instant custom tooltip
                  above each dot — the native title tooltips were slow
                  and invisible on touch. The wrapper span (not the
                  button) carries the tooltip so the button's hover
                  scale doesn't scale the tooltip text. Tap still
                  navigates immediately; on touch, long-press shows it. */}
              <span className="group relative flex">
                <button
                  type="button"
                  onClick={() => onNavigate(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`presentation-dot transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? "w-7 h-2 bg-pres-accent shadow-[0_0_10px_rgba(255,173,1,0.5)]"
                      : "w-2 h-2 bg-white/30 hover:bg-white/70"
                  }`}
                />
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/90 px-3 py-1.5 text-[13px] font-medium text-white opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {`${idx + 1}. ${["Cover", "Outage Panic", "Fragile AI Code", "Hiring Sinkhole", "Bad Hire Cost", "The Solutions", "Pricing Tiers", "Chief Architect Bonus", "What's Included", "How It Works", "Startup Offer", "Cost Savings", "Contact"][idx] ?? "Presentation"}`}
                </span>
              </span>
              {/* Batch 87 (owner: six levels between the solution and pricing dots; Batch 88 moved the solution slide from index 4 to index 6, sub-dots moved with it).
                  2026-11-03 fix: after the 2026-11-01/02 merges the deck is
                  13 slides and SolutionBridge is slide 6, index 5 — NOT
                  index 6. The old index 6 made the sub-dots appear on
                  slide 7 (Pricing Tiers) and never on slide 6 itself.
                  Now, while on slide 6 (index 5), six small sub-dots
                  appear inside the main indicator, right after dot 6 —
                  one per pyramid step, in order. Tap them one by one
                  to walk the pyramid, or tap any one to jump straight
                  to that level. Reached steps glow amber. When the
                  gate is exhausted and the deck moves to slide 7,
                  currentIndex is no longer 5, so only the main dots
                  show again — automatically, with no extra click. */}
              {idx === 5 && currentIndex === 5 && (
                <span className="flex items-center gap-1.5 mx-0.5" role="group" aria-label="Pyramid steps">
                  {["Reveal solution", "Initial Sign Up", "Training & Assessment", "Save Time Hiring", "Avoid Missing Deadlines", "Find Top 5% Talent"].map((label, i) => {
                    const stepNo = i + 1;
                    const reached = gateStep !== null && gateStep >= stepNo;
                    return (
                      <span key={stepNo} className="group relative flex">
                        <button
                          type="button"
                          aria-label={`Pyramid step ${stepNo}: ${label}`}
                          onClick={() => {
                            const gate = window.__slideNavigationGate;
                            if (gate && typeof gate.goToStep === "function") {
                              gate.goToStep(stepNo);
                            }
                          }}
                          className={`rounded-full transition-all duration-300 cursor-pointer ${
                            reached
                              ? "w-2 h-2 bg-pres-accent shadow-[0_0_8px_rgba(255,173,1,0.6)]"
                              : "w-1.5 h-1.5 bg-white/30 hover:bg-white/70"
                          }`}
                        />
                        <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/90 px-3 py-1.5 text-[13px] font-medium text-white opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                          {`Pyramid step ${stepNo}: ${label}`}
                        </span>
                      </span>
                    );
                  })}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};
