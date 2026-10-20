import React, { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChevronDown, X } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { TIER_FEATURE_GROUPS as groups } from "@/data/tierFeatures";
import { fadeIn, fadeUp, staggerDelay } from "@/lib/presentationMotion";
import { UsdNote } from "@/components/presentation/UsdNote";

interface TierDetailSlideProps {
  onNavigate?: (index: number) => void;
}

export const TierDetailSlide: React.FC<TierDetailSlideProps> = () => {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const columns = [
    {
      name: "Tier 2 Growth",
      price: "$4,299/M",
      badge: null,
    },
    {
      name: "Tier 3.A Skilled",
      price: "$6,800 to $8,000/M",
      badge: "BEST VALUE",
    },
    {
      name: "Tier 3.B Leadership",
      price: "$7,500 to $10,000/M",
      badge: "PREMIUM",
    },
  ];

  const updateScrollState = useCallback(() => {
    const node = scrollRef.current;
    if (!node) return;
    const available = node.scrollHeight - node.clientHeight;
    setScrollProgress(available > 0 ? node.scrollTop / available : 0);
    setCanScroll(available > 1 && node.scrollTop < available - 2);
  }, []);

  const setScrollFromPointer = useCallback((clientY: number) => {
    const node = scrollRef.current;
    const rail = railRef.current;
    if (!node || !rail) return;
    const bounds = rail.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientY - bounds.top) / bounds.height));
    node.scrollTop = ratio * (node.scrollHeight - node.clientHeight);
  }, []);

  const handleRailPointer = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setScrollFromPointer(event.clientY);
  }, [setScrollFromPointer]);

  const handleScrollKey = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    const node = scrollRef.current;
    if (!node) return;
    const increments: Record<string, number> = {
      ArrowDown: 92,
      ArrowUp: -92,
      PageDown: node.clientHeight * 0.8,
      PageUp: node.clientHeight * -0.8,
      Home: -node.scrollHeight,
      End: node.scrollHeight,
    };
    const amount = increments[event.key];
    if (amount === undefined) return;
    event.preventDefault();
    event.stopPropagation();
    node.scrollBy({ top: amount, behavior: "smooth" });
  }, []);

  const renderCell = (val: boolean | string, column: number) => {
    if (val === true) {
      return <CheckCircle className="comparison-value-icon mx-auto" aria-label="Included" />;
    }
    if (val === false) {
      return <X className="comparison-value-icon comparison-value-negative mx-auto" aria-label="Not included" />;
    }
    return (
      <span className="comparison-value-text font-bold" data-column-value={column}>
        {val}
      </span>
    );
  };

  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-pres-text font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-pres-accent/5 blur-[150px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1760px] px-[80px] flex flex-col h-[890px] pt-[24px]">
          {/* Title Area */}
          <div className="mb-5">
            <motion.h1
              {...fadeUp(0)}
              className="pres-title-compact font-bold font-heading text-pres-text"
            >
              Features <span className="text-pres-accent">Comparison</span>
            </motion.h1>
          </div>

          <div
            className="comparison-table relative flex-1 min-h-0 flex flex-col"
            data-hovered-column={hoveredColumn ?? "none"}
            onMouseLeave={() => setHoveredColumn(null)}
          >
            <div className="comparison-header grid grid-cols-[1.35fr_repeat(3,1fr)] items-stretch border-b border-pres-text/10">
              <div className="flex flex-col justify-end pb-5 pl-6">
                <span className="font-heading font-semibold text-[21px] text-pres-text-dim uppercase">
                  Compare what you get
                </span>
                <span className="mt-2 text-[18px] text-pres-text-muted">Scroll to explore all 14 features</span>
              </div>
              {columns.map((col, idx) => (
                <motion.div
                  key={col.name}
                  {...fadeUp(staggerDelay(idx, 0.12, 0.05), 12)}
                  onMouseEnter={() => setHoveredColumn(idx)}
                  data-column={idx}
                  className="tier-column comparison-tier-header relative flex flex-col items-center justify-end text-center px-6 pb-5 pt-3 mx-2 border-x border-t"
                >
                  {col.badge && (
                    <span className="comparison-tier-badge inline-flex items-center h-[30px] text-[14px] font-bold px-3 mb-2">
                      {col.badge}
                    </span>
                  )}
                  <div className="font-heading font-bold text-[31px] leading-tight text-pres-text">{col.name}</div>
                  <div className="comparison-tier-price text-[24px] font-normal text-pres-text-muted mt-2">{col.price}</div>
                </motion.div>
              ))}
            </div>

            <div className="relative flex-1 min-h-0 pr-7">
              <div
                ref={scrollRef}
                className="comparison-scroll h-full overflow-y-auto overscroll-contain outline-none"
                tabIndex={0}
                role="region"
                aria-label="Scrollable tier features comparison"
                onScroll={updateScrollState}
                onWheel={(event) => event.stopPropagation()}
                onTouchMove={(event) => event.stopPropagation()}
                onKeyDown={handleScrollKey}
              >
                {groups.map((group, groupIndex) => (
                  <section key={group.label} aria-labelledby={`comparison-group-${groupIndex}`}>
                    <div
                      id={`comparison-group-${groupIndex}`}
                      className="comparison-group-label sticky top-0 z-10 flex items-center h-[58px] px-6 font-heading font-bold text-[22px] uppercase"
                    >
                      {group.label}
                    </div>
                    {group.rows.map((row, rowIndex) => (
                      <motion.div
                        key={row.feature}
                        {...fadeIn(staggerDelay(groupIndex * 5 + rowIndex, 0.18, 0.018))}
                        className="comparison-row grid grid-cols-[1.35fr_repeat(3,1fr)] items-stretch min-h-[86px] border-b border-pres-text/5"
                      >
                        <div className="flex items-center text-left font-medium text-[24px] leading-snug text-pres-text/90 px-6">
                          {row.feature}
                        </div>
                        {([row.growth, row.skilled, row.leadership] as Array<boolean | string>).map((value, columnIndex) => (
                          <div
                            key={columnIndex}
                            onMouseEnter={() => setHoveredColumn(columnIndex)}
                            data-column={columnIndex}
                            className="tier-column comparison-value-cell flex items-center justify-center text-center mx-2 px-3"
                          >
                            {renderCell(value, columnIndex)}
                          </div>
                        ))}
                      </motion.div>
                    ))}
                  </section>
                ))}
                {/* Spacer so the last rows can scroll fully clear of the cue */}
                <div className="h-[110px]" aria-hidden="true" />
              </div>

              <div
                ref={railRef}
                className="comparison-scroll-rail absolute top-4 bottom-4 right-1 w-[14px] cursor-pointer"
                role="scrollbar"
                aria-label="Feature comparison scroll position"
                aria-orientation="vertical"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(scrollProgress * 100)}
                tabIndex={0}
                onPointerDown={handleRailPointer}
                onPointerMove={(event) => {
                  if (event.currentTarget.hasPointerCapture(event.pointerId)) setScrollFromPointer(event.clientY);
                }}
                onKeyDown={handleScrollKey}
              >
                <div
                  className="comparison-scroll-thumb absolute left-[2px] right-[2px] h-[112px]"
                  style={{ top: `calc(${scrollProgress * 100}% - ${scrollProgress * 112}px)` }}
                />
              </div>

              {canScroll && (
                <>
                  <div className="comparison-scroll-fade pointer-events-none absolute inset-x-0 bottom-0 h-[92px]" />
                  <div className="absolute z-20 bottom-3 left-[14%] right-0 flex justify-center pointer-events-none">
                    <div className="comparison-scroll-cue flex items-center gap-2 px-4 py-2 text-[17px] font-semibold">
                      <ChevronDown className="w-5 h-5" />
                      Scroll for more
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <UsdNote />

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
