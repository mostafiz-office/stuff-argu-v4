import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface CameraBubbleProps {
  stream: MediaStream;
  onClose: () => void;
}

/**
 * Presenter webcam overlay bubble (mirrors the "Start camera" control on the
 * reference presentation). Draggable; mirrored preview like Meet/Zoom.
 */
export const CameraBubble: React.FC<CameraBubbleProps> = ({ stream, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.srcObject = stream;
      v.play().catch(() => {});
    }
    return () => {
      if (v) v.srcObject = null;
    };
  }, [stream ]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    dragRef.current = { startX: e.clientX, startY: e.clientY, origX: offset.x, origY: offset.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    if (!d) return;
    setOffset({ x: d.origX + e.clientX - d.startX, y: d.origY + e.clientY - d.startY });
  };

  const onPointerUp = () => {
    dragRef.current = null;
  };

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className="fixed z-[300] cursor-grab active:cursor-grabbing select-none"
      style={{ right: Math.max(8, 24 - offset.x), bottom: Math.max(8, 96 - offset.y) }}
      aria-label="Camera preview"
    >
      <div className="relative w-[320px] overflow-hidden rounded-2xl border border-white/20 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="h-[240px] w-full -scale-x-100 object-cover pointer-events-none"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Stop camera"
          title="Stop camera"
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/85 hover:text-white cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="pointer-events-none absolute bottom-2 left-3 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
            Camera on
          </span>
        </div>
      </div>
    </div>
  );
};
