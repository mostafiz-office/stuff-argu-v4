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
      )}

      {children}

      {/* Video overlay on card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0 z-[100] flex items-center justify-center"
            style={{
              borderRadius: 16,
              overflow: "hidden",
              background: "hsl(var(--pres-bg-deep) / 0.95)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Glowing border */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: 16,
                border: "2px solid hsl(var(--pres-accent) / 0.4)",
                boxShadow: "inset 0 0 30px hsl(var(--pres-accent) / 0.08), 0 0 20px hsl(var(--pres-accent) / 0.1)",
              }}
            />

            {/* Phone frame centered */}
            <div
              style={{
                width: "55%",
                maxWidth: 160,
                aspectRatio: "9/16",
                borderRadius: 14,
                overflow: "hidden",
                border: "3px solid hsl(var(--pres-bg-surface))",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                position: "relative",
              }}
            >
              {/* Notch */}
              <div
                className="absolute top-1 left-1/2 -translate-x-1/2 z-20 rounded-full"
                style={{
                  width: 40,
                  height: 5,
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
            </div>

            {/* Label */}
            <div
              className="absolute bottom-3 left-0 right-0 text-center pointer-events-none"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 10,
                fontWeight: 600,
                color: "hsl(var(--pres-accent) / 0.7)",
                letterSpacing: "0.05em",
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
