import React, { useMemo, useState, useEffect, useCallback } from "react";
import { PresentationEngine } from "@/components/presentation/PresentationEngine";
import { PricingCoverV3 } from "@/slides/PricingCoverV3";
import { PricingCoverV1 } from "@/slides/PricingCoverV1";
import { OutagePanicSlide, FragileCodeSlide, HiringSinkholeSlide } from "@/slides/PainPointsSlide";
import { SolutionBridgeSlide } from "@/slides/SolutionBridgeSlide";
import { PricingTiersSlide } from "@/slides/PricingTiersSlide";
import { PremiumExpertSlideV2 } from "@/slides/PremiumExpertSlideV2";
import { ExpertValuationBreakdownSlide } from "@/slides/ExpertValuationBreakdownSlide";
import { PricingSavingsSlide } from "@/slides/PricingSavingsSlide";
import { WhatsIncludedSlide } from "@/slides/WhatsIncludedSlide";
import { PricingHowItWorksSlide } from "@/slides/PricingHowItWorksSlide";
import { StarterTierSlideV9Clone } from "@/slides/StarterTierSlideV9Clone";
import { PricingCTASlide } from "@/slides/PricingCTASlide";
import "@/types/navigation";
import { preloadSlideImages } from "@/lib/preloadImages";
import { nextCoverOnReturn } from "@/lib/coverRotation";

preloadSlideImages();

const Index = () => {
  // Alternate between the two available covers on every full page load.
  const [coverVariant, setCoverVariant] = useState<"1" | "2">(() => {
    let last: string | null = null;
    try { last = localStorage.getItem("riseup_last_cover"); } catch { /* blocked */ }
    if (!last) { try { last = sessionStorage.getItem("riseup_last_cover"); } catch { /* blocked */ } }
    if (!last) { const m = /riseup_cover_(1|2)/.exec(window.name || ""); if (m) last = m[1]; }
    return last === "1" ? "2" : "1";
  });

  useEffect(() => {
    try { localStorage.setItem("riseup_last_cover", coverVariant); } catch { /* blocked */ }
    try { sessionStorage.setItem("riseup_last_cover", coverVariant); } catch { /* blocked */ }
    try { window.name = `riseup_cover_${coverVariant}`; } catch { /* blocked */ }
  }, [coverVariant]);


  // Clean URL parameters on initial mount so reloads never get trapped
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      let changed = false;
      if (params.has("slide")) {
        params.delete("slide");
        changed = true;
      }
      if (params.has("cover")) {
        params.delete("cover");
        changed = true;
      }
      if (changed) {
        const cleanQuery = params.toString();
        const cleanUrl = cleanQuery ? `${window.location.pathname}?${cleanQuery}` : window.location.pathname;
        window.history.replaceState(null, "", cleanUrl);
      }
    } catch {
      // Ignore sandboxed iframe history security restrictions
    }
  }, []);

  // Cover Component wrapper — both variants stay mounted and crossfade on
  // toggle, so the headline never passes through an empty/invisible state
  // when returning to the cover (A4).
  const CoverWrapper = useCallback(
    (props: { onNavigate?: (index: number) => void }) => {
      const showV1 = coverVariant === "2";
      return (
        <div className="relative h-full w-full">
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: showV1 ? 0 : 1, pointerEvents: showV1 ? "none" : "auto" }}
            aria-hidden={showV1}
          >
            <PricingCoverV3 {...props} coverVariant="3" />
          </div>
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: showV1 ? 1 : 0, pointerEvents: showV1 ? "auto" : "none" }}
            aria-hidden={!showV1}
          >
            <PricingCoverV1 {...props} coverVariant="1" />
          </div>
        </div>
      );
    },
    [coverVariant]
  );

  const slides = useMemo(() => {
    return [
      CoverWrapper,
      OutagePanicSlide,
      FragileCodeSlide,
      HiringSinkholeSlide,
      SolutionBridgeSlide,
      PricingTiersSlide,
      PremiumExpertSlideV2,
      ExpertValuationBreakdownSlide,
      WhatsIncludedSlide,
      PricingHowItWorksSlide,
      StarterTierSlideV9Clone,
      PricingSavingsSlide,
      PricingCTASlide,
    ];
  }, [CoverWrapper]);

  const totalSlides = slides.length;

  // Always initialize on Slide 1 (Index 0) on fresh visit and page reload
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  // Core navigation handler: updates state cleanly in memory
  const handleNavigate = useCallback(
    (newIndex: number) => {
      if (newIndex >= 0 && newIndex < totalSlides && newIndex !== currentIndex) {
        // Returning to slide 1 from any other slide shows the other cover.
        if (newIndex === 0) setCoverVariant((prev) => nextCoverOnReturn(prev));
        setDirection(newIndex > currentIndex ? 1 : -1);
        setCurrentIndex(newIndex);
      }
    },
    [totalSlides, currentIndex]
  );

  // Next slide handler (incorporates interactive navigation gate)
  const handleNext = useCallback(() => {
    const gate = window.__slideNavigationGate;
    if (gate && typeof gate.trigger === "function") {
      const isHandled = gate.trigger();
      if (isHandled) {
        return;
      }
    }

    if (currentIndex < totalSlides - 1) {
      handleNavigate(currentIndex + 1);
    }
  }, [currentIndex, totalSlides, handleNavigate]);

  // Previous slide handler
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      handleNavigate(currentIndex - 1);
    }
  }, [currentIndex, handleNavigate]);

  return (
    <PresentationEngine
      slides={slides}
      currentIndex={currentIndex}
      direction={direction}
      onNavigate={handleNavigate}
      onNext={handleNext}
      onPrev={handlePrev}
    />
  );
};

export default Index;
