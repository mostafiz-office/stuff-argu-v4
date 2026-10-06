import React, { useMemo, useState, useEffect, useCallback } from "react";
import { PresentationEngine } from "@/components/presentation/PresentationEngine";
import { PricingCoverV3 } from "@/slides/PricingCoverV3";
import { PricingCoverV1 } from "@/slides/PricingCoverV1";
import { PainPointsSlide } from "@/slides/PainPointsSlide";
import { PricingTiersSlide } from "@/slides/PricingTiersSlide";
import { TierDetailSlide } from "@/slides/TierDetailSlide";
import { PremiumExpertSlideV2 } from "@/slides/PremiumExpertSlideV2";
import { ExpertValuationBreakdownSlide } from "@/slides/ExpertValuationBreakdownSlide";
import { PricingSavingsSlide } from "@/slides/PricingSavingsSlide";
import { WhatsIncludedSlide } from "@/slides/WhatsIncludedSlide";
import { PricingHowItWorksSlide } from "@/slides/PricingHowItWorksSlide";
import { StarterTierSlideV9Clone } from "@/slides/StarterTierSlideV9Clone";
import { PricingCTASlide } from "@/slides/PricingCTASlide";
import "@/types/navigation";

const Index = () => {
  // Alternate between the two available covers on every full page load.
  const [coverVariant, setCoverVariant] = useState<"1" | "2">(() => {
    try {
      return localStorage.getItem("riseup_last_cover") === "1" ? "2" : "1";
    } catch {
      return "1";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("riseup_last_cover", coverVariant);
    } catch {
      // Ignore storage restrictions; the manual switch still works in memory.
    }
  }, [coverVariant]);

  // Manual interactive switcher between the two cover designs
  const handleToggleCover = useCallback(() => {
    setCoverVariant((prev) => {
      const next: "1" | "2" = prev === "2" ? "1" : "2";
      try {
        window.name = `riseup_cover_${next}`;
        localStorage.setItem("riseup_last_cover", next);
      } catch {
        // Ignore storage restrictions
      }
      return next;
    });
  }, []);

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

  // Cover Component wrapper passing interactive toggle and variant indicator
  const CoverWrapper = useCallback(
    (props: { onNavigate?: (index: number) => void }) => {
      if (coverVariant === "2") {
        return (
          <PricingCoverV1
            {...props}
            coverVariant="1"
            onToggleCover={handleToggleCover}
          />
        );
      }
      return (
        <PricingCoverV3
          {...props}
          coverVariant="3"
          onToggleCover={handleToggleCover}
        />
      );
    },
    [coverVariant, handleToggleCover]
  );

  const slides = useMemo(() => {
    return [
      CoverWrapper,
      PainPointsSlide,
      PricingTiersSlide,
      TierDetailSlide,
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
