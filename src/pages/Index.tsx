import React, { useMemo, useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();

  // Cover slide selection: ?cover=1 (V3) or ?cover=2 (V1), defaults to V3
  const coverVariant = searchParams.get("cover");
  const CoverComponent = coverVariant === "2" ? PricingCoverV1 : PricingCoverV3;

  const slides = useMemo(() => {
    return [
      CoverComponent,
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
  }, [CoverComponent]);

  const totalSlides = slides.length;

  // Resolve initial index from URL query param
  const getIndexFromUrl = () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const slideParam = params.get("slide");
      if (slideParam) {
        const parsed = parseInt(slideParam, 10);
        if (!isNaN(parsed) && parsed >= 1 && parsed <= totalSlides) {
          return parsed - 1;
        }
      }
    } catch {
      // Fallback if URLSearchParams is restricted
    }
    return 0;
  };

  const [currentIndex, setCurrentIndex] = useState<number>(getIndexFromUrl);
  const [direction, setDirection] = useState<number>(1);

  // Core navigation handler: updates state and syncs URL without triggering React state loop
  const handleNavigate = useCallback(
    (newIndex: number) => {
      if (newIndex >= 0 && newIndex < totalSlides && newIndex !== currentIndex) {
        setDirection(newIndex > currentIndex ? 1 : -1);
        setCurrentIndex(newIndex);

        try {
          const params = new URLSearchParams(window.location.search);
          params.set("slide", (newIndex + 1).toString());
          const newUrl = `${window.location.pathname}?${params.toString()}`;
          window.history.replaceState(null, "", newUrl);
        } catch {
          // Ignore sandboxed iframe history security restrictions
        }
      }
    },
    [totalSlides, currentIndex]
  );

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const slideParam = params.get("slide");
        if (slideParam) {
          const parsed = parseInt(slideParam, 10);
          if (!isNaN(parsed) && parsed >= 1 && parsed <= totalSlides) {
            const target = parsed - 1;
            if (target !== currentIndex) {
              setDirection(target > currentIndex ? 1 : -1);
              setCurrentIndex(target);
            }
          }
        }
      } catch {
        // Fallback
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [totalSlides, currentIndex]);

  // Next slide handler (incorporates navigation gate)
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
