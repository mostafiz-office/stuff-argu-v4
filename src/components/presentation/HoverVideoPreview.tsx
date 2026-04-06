import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

interface HoverVideoPreviewProps {
  youtubeId: string;
  children: React.ReactNode;
  position?: "left" | "right" | "center";
}

export default function HoverVideoPreview({
  youtubeId,
  children,
}: HoverVideoPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsHovered(false), 300);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: isHovered ? 50 : 1 }}
    >
      {/* Play icon indicator */}
      {!isHovered && (
        <div
          className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full px-3 py-1.5 pointer-events-none"
          style={{
            background: "hsl(var(--pres-accent) / 0.15)",
            border: "1px solid hsl(var(--pres-accent) / 0.3)",
          }}
        >
          <Play
            size={14}
            style={{ color: "hsl(var(--pres-accent))", fill: "hsl(var(--pres-accent))" }}
          />
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "hsl(var(--pres-accent))",
            }}
          >
            Hover to preview
          </span>
        </div>
      )}

      {children}

      {/* Video overlay — fills the entire card like DesignMonks style */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 z-[100] flex items-center justify-center"
            style={{
              borderRadius: 16,
              overflow: "hidden",
              background: "hsl(var(--pres-bg-deep) / 0.97)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Accent border glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: 16,
                border: "2px solid hsl(var(--pres-accent) / 0.5)",
                boxShadow: "inset 0 0 40px hsl(var(--pres-accent) / 0.06), 0 0 30px hsl(var(--pres-accent) / 0.08)",
              }}
            />

            {/* Video fills most of the card in 9:16 portrait */}
            <div
              style={{
                width: "90%",
                maxWidth: 400,
                aspectRatio: "9/16",
                borderRadius: 18,
                overflow: "hidden",
                border: "3px solid hsl(var(--pres-bg-surface) / 0.6)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.6), 0 0 20px hsl(var(--pres-accent) / 0.15)",
                position: "relative",
              }}
            >
              {/* Phone notch */}
              <div
                className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20 rounded-full"
                style={{
                  width: 48,
                  height: 6,
                  background: "hsl(var(--pres-bg-surface) / 0.8)",
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
            </div>

            {/* Label */}
            <div
              className="absolute bottom-4 left-0 right-0 text-center pointer-events-none"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "hsl(var(--pres-accent) / 0.6)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Live Preview
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
