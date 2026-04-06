import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

interface HoverVideoPreviewProps {
  youtubeId: string;
  children: React.ReactNode;
  /** Position of the video popup relative to the card */
  position?: "left" | "right" | "center";
}

export default function HoverVideoPreview({
  youtubeId,
  children,
  position = "center",
}: HoverVideoPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsHovered(false), 200);
  }, []);

  const positionStyles: Record<string, React.CSSProperties> = {
    left: { right: "105%", top: "50%", transform: "translateY(-50%)" },
    right: { left: "105%", top: "50%", transform: "translateY(-50%)" },
    center: { left: "50%", bottom: "105%", transform: "translateX(-50%)" },
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: isHovered ? 50 : 1 }}
    >
      {/* Play icon indicator */}
      <div
        className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 rounded-full px-2.5 py-1 pointer-events-none"
        style={{
          background: "hsl(var(--pres-accent) / 0.15)",
          border: "1px solid hsl(var(--pres-accent) / 0.3)",
        }}
      >
        <Play
          size={12}
          style={{ color: "hsl(var(--pres-accent))", fill: "hsl(var(--pres-accent))" }}
        />
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            color: "hsl(var(--pres-accent))",
          }}
        >
          Hover to preview
        </span>
      </div>

      {children}

      {/* Video popup */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute z-[100]"
            style={{
              ...positionStyles[position],
              width: 240,
              height: 426, // 9:16 ratio
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 30px hsl(var(--pres-accent) / 0.15)",
              border: "2px solid hsl(var(--pres-accent) / 0.3)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Phone-like frame */}
            <div
              className="absolute inset-0 z-10 pointer-events-none rounded-[14px]"
              style={{
                border: "3px solid hsl(var(--pres-bg-surface))",
              }}
            />
            {/* Notch */}
            <div
              className="absolute top-1 left-1/2 -translate-x-1/2 z-20 rounded-full"
              style={{
                width: 60,
                height: 6,
                background: "hsl(var(--pres-bg-surface))",
              }}
            />

            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              title="Video preview"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
