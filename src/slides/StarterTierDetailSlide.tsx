import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { CheckCircle, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const },
});

const features: { label: string; included: boolean | string }[] = [
  { label: "Dedicated developer · 160 hrs/mo", included: true },
  { label: "Weekly progress reports", included: true },
  { label: "Daily standups", included: false },
  { label: "Sprint participation", included: false },
  { label: "Task breakdown & delegation", included: false },
  { label: "Team management", included: false },
  { label: "Architecture decisions", included: false },
  { label: "Project management", included: false },
  { label: "CTO-level oversight", included: false },
  { label: "Priority Slack · 24/7 SLA", included: false },
  { label: "QA Engineers", included: false },
  { label: "Alim Expert Oversight", included: "2 hrs/wk*" },
  { label: "Min. Developer Experience", included: "2+ yrs" },
  { label: "Onboarding Deposit", included: "$2K" },
];

const MIN_RAIL_THUMB_HEIGHT = 72;

export default function StarterTierDetailSlide() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [railThumbHeight, setRailThumbHeight] = useState(MIN_RAIL_THUMB_HEIGHT);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      const maxScroll = Math.max(el.scrollHeight - el.clientHeight, 1);
      const nextProgress = Math.min(el.scrollTop / maxScroll, 1);
      const nextThumbHeight = Math.max(
        (el.clientHeight / Math.max(el.scrollHeight, el.clientHeight)) * el.clientHeight,
        MIN_RAIL_THUMB_HEIGHT,
      );

      setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 4);
      setScrollProgress(nextProgress);
      setRailThumbHeight(nextThumbHeight);
    };

    check();
    el.addEventListener("scroll", check);
    window.addEventListener("resize", check);

    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <motion.h1
          {...fade(0)}
          className="absolute left-[80px] top-[90px] z-10"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 64,
            fontWeight: 700,
            color: "hsl(var(--pres-text))",
          }}
        >
          Tier 1 — <span style={{ color: "hsl(var(--pres-accent))" }}>Starter</span>
        </motion.h1>

        <motion.p
          {...fade(1)}
          className="absolute left-[80px] top-[170px] z-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 28,
            color: "hsl(var(--pres-text-dim))",
          }}
        >
          $2,499/mo
        </motion.p>

        {/* Table */}
        <motion.div
          {...fade(1)}
          className="absolute left-[80px] right-[80px] top-[240px] bottom-[80px] z-10 flex flex-col"
        >
          {/* Header row */}
          <div
            className="grid items-end pb-3"
            style={{
              gridTemplateColumns: "1fr 200px",
              borderBottom: "2px solid hsl(var(--pres-accent) / 0.3)",
            }}
          >
            <span
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "hsl(var(--pres-text-muted))",
              }}
            >
              Feature
            </span>
            <span
              className="text-center"
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "hsl(var(--pres-accent))",
              }}
            >
              Starter
            </span>
          </div>

          {/* Feature rows — scrollable */}
          <div className="relative flex-1">
            <div
              ref={scrollRef}
              className="absolute inset-0 overflow-y-scroll tier-scroll"
              style={{
                paddingRight: 32,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {features.map((feat, i) => (
                <motion.div
                  key={feat.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                  className="grid items-center"
                  style={{
                    gridTemplateColumns: "1fr 200px",
                    padding: "12px 0",
                    borderBottom: "1px solid hsl(var(--border) / 0.5)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 24,
                      color: "hsl(var(--pres-text-muted))",
                    }}
                  >
                    {feat.label}
                  </span>
                  <div className="flex justify-center">
                    {feat.included === true ? (
                      <CheckCircle size={30} style={{ color: "hsl(var(--pres-accent))" }} />
                    ) : feat.included === false ? (
                      <X size={30} style={{ color: "hsl(0 80% 55%)" }} />
                    ) : (
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 20,
                          fontWeight: 600,
                          color: "hsl(var(--pres-accent))",
                        }}
                      >
                        {feat.included}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Custom scroll rail */}
            <div
              aria-hidden="true"
              className="absolute right-2 top-0 bottom-0 pointer-events-none"
              style={{ width: 14, zIndex: 4 }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: "hsl(var(--pres-accent) / 0.12)" }}
              />
              <motion.div
                className="absolute left-0 right-0 rounded-full"
                style={{
                  height: railThumbHeight,
                  top: `calc(${scrollProgress * 100}% - ${scrollProgress * railThumbHeight}px)`,
                  background: "linear-gradient(180deg, hsl(var(--pres-accent) / 0.85), hsl(var(--pres-accent) / 0.45))",
                  boxShadow: "0 0 18px hsl(var(--pres-accent) / 0.28)",
                  border: "1px solid hsl(var(--pres-accent) / 0.35)",
                }}
              />
            </div>

            {/* Fade gradient + scroll indicator */}
            {canScrollDown && (
              <div
                className="absolute bottom-0 left-0 right-0 flex flex-col items-center pointer-events-none"
                style={{ zIndex: 5 }}
              >
                <div
                  className="w-full"
                  style={{
                    height: 60,
                    background: "linear-gradient(to top, hsl(var(--pres-bg)), hsl(var(--pres-bg) / 0))",
                  }}
                />
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="flex items-center gap-2 -mt-6"
                  style={{
                    color: "hsl(var(--pres-accent))",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  <ChevronDown size={20} />
                  Scroll for more
                  <ChevronDown size={20} />
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
