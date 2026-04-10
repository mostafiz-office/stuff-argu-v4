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
      const hasOverflow = el.scrollHeight > el.clientHeight + 4;
      const maxScroll = Math.max(el.scrollHeight - el.clientHeight, 1);
      const nextProgress = hasOverflow ? Math.min(el.scrollTop / maxScroll, 1) : 0;
      const nextThumbHeight = hasOverflow
        ? Math.max(
            (el.clientHeight / el.scrollHeight) * el.clientHeight,
            MIN_RAIL_THUMB_HEIGHT,
          )
        : el.clientHeight;

      setCanScrollDown(hasOverflow && el.scrollTop + el.clientHeight < el.scrollHeight - 4);
      setScrollProgress(nextProgress);
      setRailThumbHeight(nextThumbHeight);
    };

    check();
    const timer = setTimeout(check, 1200);
    const ro = new ResizeObserver(check);
    ro.observe(el);
    el.addEventListener("scroll", check);
    window.addEventListener("resize", check);

    return () => {
      clearTimeout(timer);
      ro.disconnect();
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

        {/* Table — single absolute container */}
        <motion.div
          {...fade(1)}
          className="absolute left-[80px] right-[80px] top-[240px] z-10"
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

          {/* Scrollable rows — explicit maxHeight to guarantee overflow */}
          <div className="relative" style={{ maxHeight: 620 }}>
            <div
              ref={scrollRef}
              className="overflow-y-auto tier-scroll"
              style={{
                maxHeight: 620,
                paddingRight: 40,
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
                    padding: "10px 0",
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

            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 pointer-events-none"
              style={{ right: 6, width: 18, zIndex: 4 }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(180deg, hsl(var(--pres-accent) / 0.2), hsl(var(--pres-accent) / 0.08))",
                  border: "1px solid hsl(var(--pres-accent) / 0.2)",
                  boxShadow: "inset 0 0 0 1px hsl(var(--pres-accent) / 0.06)",
                }}
              />
              <motion.div
                className="absolute left-[2px] right-[2px] rounded-full"
                style={{
                  height: railThumbHeight,
                  top: `calc(${scrollProgress * 100}% - ${scrollProgress * railThumbHeight}px)`,
                  background: "linear-gradient(180deg, hsl(var(--pres-accent)), hsl(var(--pres-accent) / 0.52))",
                  boxShadow: "0 0 24px hsl(var(--pres-accent) / 0.4)",
                  border: "1px solid hsl(var(--pres-accent) / 0.55)",
                }}
              />
            </div>

            {canScrollDown && (
              <div
                className="absolute left-0 right-0 flex flex-col items-center pointer-events-none"
                style={{ bottom: 0, zIndex: 5 }}
              >
                <div
                  className="w-full"
                  style={{
                    height: 84,
                    background: "linear-gradient(to top, hsl(var(--pres-bg)) 15%, hsl(var(--pres-bg) / 0))",
                  }}
                />
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="flex items-center gap-2 -mt-7"
                  style={{
                    color: "hsl(var(--pres-accent))",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    textShadow: "0 0 18px hsl(var(--pres-accent) / 0.25)",
                  }}
                >
                  <ChevronDown size={20} />
                  Scroll for more
                  <ChevronDown size={20} />
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}
