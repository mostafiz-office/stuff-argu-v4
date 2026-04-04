import { useEffect, useRef, useState, type ReactNode } from "react";
import { SLIDE_WIDTH, SLIDE_HEIGHT } from "@/constants/presentation";

interface ScaledSlideProps {
  children: ReactNode;
  className?: string;
}

export default function ScaledSlide({ children, className = "" }: ScaledSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;

      const parent = containerRef.current.parentElement;
      if (!parent) return;

      const { clientWidth: parentWidth, clientHeight: parentHeight } = parent;
      setScale(Math.min(parentWidth / SLIDE_WIDTH, parentHeight / SLIDE_HEIGHT));
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        className={`slide-scaler slide-content ${className}`}
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
