import { useCallback, useEffect, useRef, useState } from "react";
import { Download, Share2, Link2, Presentation } from "lucide-react";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SlideNavigationProps {
  total: number;
  current: number;
  onNavigate: (index: number) => void;
  onOpenDownload?: () => void;
  showDownload?: boolean;
  slideLabels?: string[];
}

export default function SlideNavigation({
  total,
  current,
  onNavigate,
  onOpenDownload,
  showDownload = true,
  slideLabels = [],
}: SlideNavigationProps) {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const shareRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const goNext = useCallback(() => {
    if (current < total - 1) onNavigate(current + 1);
  }, [current, total, onNavigate]);

  const goPrev = useCallback(() => {
    if (current > 0) onNavigate(current - 1);
  }, [current, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (isEditing) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, isEditing]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return;
      const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
      const dy = e.changedTouches[0].clientY - touchStartRef.current.y;

      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) goNext();
        else goPrev();
      }
      touchStartRef.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  // Close share menu on outside click
  useEffect(() => {
    if (!shareMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShareMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [shareMenuOpen]);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setEditValue(String(current + 1));
    setTimeout(() => inputRef.current?.select(), 0);
  };

  const commitEdit = () => {
    setIsEditing(false);
    const parsed = parseInt(editValue, 10);
    if (isNaN(parsed) || parsed < 1) {
      onNavigate(0);
    } else if (parsed > total) {
      onNavigate(total - 1);
    } else {
      onNavigate(parsed - 1);
    }
  };

  const handleEditKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      commitEdit();
    } else if (e.key === "Escape") {
      setIsEditing(false);
    }
  };

  const shareSlideLink = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("slide", String(current + 1));
    navigator.clipboard
      .writeText(url.toString())
      .then(() => toast.success(`Slide ${current + 1} link copied`, { duration: 2000 }))
      .catch(() => toast.error("Failed to copy link"));
    setShareMenuOpen(false);
  };

  const sharePresentationLink = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("slide");
    url.searchParams.delete("export");
    navigator.clipboard
      .writeText(url.toString())
      .then(() => toast.success("Presentation link copied", { duration: 2000 }))
      .catch(() => toast.error("Failed to copy link"));
    setShareMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-black/60 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="flex items-center justify-center w-10 h-10 rounded-full text-white/90 hover:text-pres-accent hover:bg-white/10 transition-colors disabled:opacity-25 disabled:pointer-events-none"
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        {isEditing ? (
          <div className="min-w-[3rem] text-center">
            <input
              ref={inputRef}
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value.replace(/[^0-9]/g, ""))}
              onBlur={commitEdit}
              onKeyDown={handleEditKeyDown}
              className="w-10 bg-white/10 border border-pres-accent/50 rounded text-white text-sm text-center outline-none font-body"
              style={{ padding: "2px 4px" }}
              autoFocus
            />
            <span className="text-white/50 font-body text-sm">/{total}</span>
          </div>
        ) : (
          <span
            className="text-white/70 font-body text-sm min-w-[3rem] text-center cursor-text select-none hover:text-white/90 transition-colors"
            onClick={handleDoubleClick}
            title="Click to jump to a slide"
          >
            {current + 1}/{total}
          </span>
        )}

        <button
          onClick={goNext}
          disabled={current === total - 1}
          className="flex items-center justify-center w-10 h-10 rounded-full text-white/90 hover:text-pres-accent hover:bg-white/10 transition-colors disabled:opacity-25 disabled:pointer-events-none"
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <div className="w-px h-5 bg-white/20 mx-0.5" />

        {/* Share menu */}
        <div ref={shareRef} className="relative">
          <button
            onClick={() => setShareMenuOpen(!shareMenuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full text-white/90 hover:text-pres-accent hover:bg-white/10 transition-colors"
            aria-label="Share"
          >
            <Share2 size={18} />
          </button>

          {shareMenuOpen && (
            <div
              className="absolute top-full right-0 mt-2 w-56 rounded-xl overflow-hidden border"
              style={{
                background: "hsl(var(--pres-bg) / 0.95)",
                borderColor: "hsl(var(--pres-accent) / 0.15)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 12px 40px hsl(0 0% 0% / 0.5)",
              }}
            >
              <button
                onClick={shareSlideLink}
                className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
                style={{ color: "hsl(var(--pres-text))" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(var(--pres-accent) / 0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <Link2 size={16} style={{ color: "hsl(var(--pres-accent))", flexShrink: 0 }} />
                <div>
                  <p className="font-body text-sm font-semibold">Share this slide</p>
                  <p className="font-body text-xs" style={{ color: "hsl(var(--pres-text-dim))" }}>
                    Copy link to slide {current + 1}
                  </p>
                </div>
              </button>
              <div style={{ height: 1, background: "hsl(var(--pres-accent) / 0.08)" }} />
              <button
                onClick={sharePresentationLink}
                className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
                style={{ color: "hsl(var(--pres-text))" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(var(--pres-accent) / 0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <Presentation size={16} style={{ color: "hsl(var(--pres-accent))", flexShrink: 0 }} />
                <div>
                  <p className="font-body text-sm font-semibold">Share presentation</p>
                  <p className="font-body text-xs" style={{ color: "hsl(var(--pres-text-dim))" }}>
                    Copy link to full deck
                  </p>
                </div>
              </button>
            </div>
          )}
        </div>

        {showDownload && onOpenDownload && (
          <>
            <div className="w-px h-5 bg-white/20 mx-0.5" />
            <button
              onClick={onOpenDownload}
              className="flex items-center justify-center w-10 h-10 rounded-full text-white/90 hover:text-pres-accent hover:bg-white/10 transition-colors"
              aria-label="Download presentation"
            >
              <Download size={18} />
            </button>
          </>
        )}

        <div className="w-px h-5 bg-white/20 mx-0.5" />
        <button
          onClick={toggleFullscreen}
          className="flex items-center justify-center w-10 h-10 rounded-full text-white/90 hover:text-pres-accent hover:bg-white/10 transition-colors"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
          )}
        </button>
      </div>

      <TooltipProvider delayDuration={200}>
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
          {Array.from({ length: total }, (_, i) => (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onNavigate(i)}
                  className={`nav-dot h-2 rounded-full transition-all ${
                    i === current ? "active" : "w-2 bg-pres-text-dim hover:bg-pres-text-muted"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-black/90 border-white/10 text-white px-3 py-1.5">
                <p className="text-xs font-semibold">Slide {i + 1}</p>
                {slideLabels[i] && (
                  <p className="text-[11px] text-white/70">{slideLabels[i]}</p>
                )}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

    </>
  );
}
