import React, { useEffect, useState } from "react";

interface ScaledSlideProps {
  children: React.ReactNode;
}

export const ScaledSlide: React.FC<ScaledSlideProps> = ({ children }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const factor = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      setScale(factor);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-pres-bg flex items-center justify-center">
      <div
        style={{
          width: "1920px",
          height: "1080px",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          position: "absolute",
          left: "50%",
          top: "50%",
          marginLeft: "-960px",
          marginTop: "-540px",
        }}
        className="select-none"
      >
        {children}
      </div>
    </div>
  );
};
