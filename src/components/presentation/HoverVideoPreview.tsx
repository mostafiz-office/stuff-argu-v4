import React, { useState } from "react";
import { Play } from "lucide-react";

interface HoverVideoPreviewProps {
  videoId?: string;
  position?: "left" | "center" | "right";
  children: React.ReactNode;
  className?: string;
}

export const HoverVideoPreview: React.FC<HoverVideoPreviewProps> = ({
  videoId = "uveR9C5CgSY",
  position = "center",
  children,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {/* Floating video preview card on hover */}
      {isHovered && videoId && (
        <div
          className={`absolute -top-36 z-50 pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 ${
            position === "left"
              ? "left-0"
              : position === "right"
              ? "right-0"
              : "left-1/2 -translate-x-1/2"
          }`}
        >
          <div className="w-56 bg-pres-surface/95 border border-pres-accent/40 rounded-xl overflow-hidden shadow-2xl p-1.5 backdrop-blur-md">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black flex items-center justify-center">
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Video preview"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute w-8 h-8 rounded-full bg-pres-accent/90 flex items-center justify-center text-pres-bg shadow-md">
                <Play className="w-4 h-4 ml-0.5 fill-current" />
              </div>
            </div>
            <p className="text-[10px] text-center text-pres-text-muted mt-1.5 font-medium">
              Client Story & Overview
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
