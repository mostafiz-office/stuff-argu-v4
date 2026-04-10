import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Award, CheckCircle, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const },
});

type ColKey = "starter" | "growth" | "skilled" | "leadership";

const features: { label: string; starter: boolean | string; growth: boolean | string; skilled: boolean | string; leadership: boolean | string }[] = [
  { label: "Dedicated developer · 160 hrs/mo", starter: true, growth: true, skilled: true, leadership: true },
  { label: "Weekly progress reports", starter: true, growth: true, skilled: true, leadership: true },
  { label: "Daily standups", starter: false, growth: true, skilled: true, leadership: true },
  { label: "Sprint participation", starter: false, growth: true, skilled: true, leadership: true },
  { label: "Task breakdown & delegation", starter: false, growth: true, skilled: true, leadership: true },
  { label: "Team management", starter: false, growth: "Up to 2", skilled: "3–5", leadership: "Up to 15" },
  { label: "Architecture decisions", starter: false, growth: true, skilled: true, leadership: true },
  { label: "Project management", starter: false, growth: false, skilled: false, leadership: true },
  { label: "CTO-level oversight", starter: false, growth: false, skilled: false, leadership: true },
  { label: "Priority Slack · 24/7 SLA", starter: false, growth: "Slack only", skilled: true, leadership: "Versatile" },
  { label: "QA Engineers", starter: false, growth: false, skilled: false, leadership: "2" },
  { label: "Alim Expert Oversight", starter: "2 hrs/wk*", growth: "2 hrs/wk", skilled: "3 hrs/wk", leadership: "4 hrs/wk" },
  { label: "Min. Developer Experience", starter: "2+ yrs", growth: "4+ yrs", skilled: "6+ yrs", leadership: "8+ yrs" },
  { label: "Onboarding Deposit", starter: "$2K", growth: "$2K", skilled: "$2K", leadership: "$2K" },
];

const columns: { key: ColKey; name: string; price: string; bestValue?: boolean; premium?: boolean; color: string; bgTint: string; tagline?: string }[] = [
  { key: "growth", name: "Tier 2 — Growth", price: "$4,299/mo", color: "hsl(var(--pres-accent))", bgTint: "hsl(var(--pres-accent) / 0.06)" },
  { key: "skilled", name: "Tier 3.A — Skilled", price: "$6,800–8K/mo", bestValue: true, color: "hsl(142 70% 45%)", bgTint: "hsl(142 70% 45% / 0.08)" },
  { key: "leadership", name: "Tier 3.B — Leadership", price: "$7.5K–10K/mo", premium: true, color: "hsl(280 60% 60%)", bgTint: "hsl(280 60% 60% / 0.08)" },
];

const MIN_RAIL_THUMB_HEIGHT = 72;

export default function TierDetailSlide() {
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
          Feature <span style={{ color: "hsl(var(--pres-accent))" }}>Comparison</span>
        </motion.h1>

        <motion.div
          {...fade(1)}
          className="absolute left-[80px] right-[80px] top-[180px] z-10 flex flex-col"
          style={{ bottom: 100 }}
        >
          <div
            className="grid items-end pb-3"
            style={{
              gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
              borderBottom: "2px solid hsl(var(--pres-accent) / 0.3)",
            }}
          >
            <div />
            {columns.map((col, i) => (
              <motion.div
                key={col.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="text-center relative"
                style={{
                  background: col.bgTint,
                  borderRadius: "12px 12px 0 0",
                  padding: "14px 8px",
                }}
              >
                {col.bestValue && (
                  <div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-0.5 rounded-full"
                    style={{
                      background: col.color,
                      color: "hsl(var(--pres-bg))",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Award size={13} /> BEST VALUE
                  </div>
                )}
                {col.premium && (
                  <div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-0.5 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, hsl(280 60% 60%), hsl(320 60% 55%))",
                      color: "hsl(0 0% 100%)",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    👑 PREMIUM
                  </div>
                )}
                <p
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 28,
                    fontWeight: 700,
                    color: col.color,
                    marginTop: col.bestValue || col.premium ? 14 : 0,
                  }}
                >
                  {col.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 18,
                    color: "hsl(var(--pres-text-dim))",
                    marginTop: 3,
                  }}
                >
                  {col.price}
                </p>
                {col.tagline && (
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      fontStyle: "italic",
                      color: col.color,
                      marginTop: 4,
                    }}
                  >
                    ✨ {col.tagline}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

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
                    gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
                    padding: "6px 0",
                    borderBottom: "1px solid hsl(var(--border) / 0.5)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 18,
                      color: "hsl(var(--pres-text-muted))",
                    }}
                  >
                    {feat.label}
                  </span>
                  {columns.map((col) => {
                    const val = feat[col.key];
                    return (
                      <div
                        key={col.key}
                        className="flex justify-center"
                        style={{
                          background: col.bgTint,
                          padding: "8px 0",
                        }}
                      >
                        {val === true ? (
                          <CheckCircle size={26} style={{ color: col.color }} />
                        ) : val === false ? (
                          <X size={26} style={{ color: "hsl(0 80% 55%)" }} />
                        ) : (
                          <span
                            style={{
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: 18,
                              fontWeight: 600,
                              color: col.color,
                            }}
                          >
                            {val}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              ))}
            </div>

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
                animate={{ y: scrollProgress * Math.max(0, 1) }}
                style={{
                  height: railThumbHeight,
                  top: `calc(${scrollProgress * 100}% - ${scrollProgress * railThumbHeight}px)`,
                  background: "linear-gradient(180deg, hsl(var(--pres-accent) / 0.85), hsl(var(--pres-accent) / 0.45))",
                  boxShadow: "0 0 18px hsl(var(--pres-accent) / 0.28)",
                  border: "1px solid hsl(var(--pres-accent) / 0.35)",
                }}
              />
            </div>

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
