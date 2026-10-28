import React, { useMemo, useState, useEffect, useCallback } from "react";
import { PresentationEngine } from "@/components/presentation/PresentationEngine";
import { PricingCoverV3 } from "@/slides/PricingCoverV3";
import { PricingCoverV1 } from "@/slides/PricingCoverV1";
import { OutagePanicSlide, FragileCodeSlide, HiringSinkholeSlide } from "@/slides/PainPointsSlide";
import { SolutionBridgeSlide } from "@/slides/SolutionBridgeSlide";
import { BadHireCostSlide } from "@/slides/BadHireCostSlide";
import { BadHireProblemsSlide } from "@/slides/BadHireProblemsSlide";
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


  // Clean the legacy cover parameter on initial mount. The slide
  // parameter is intentionally KEPT: it is the deck's deep-link
  // (?slide=6 opens slide 6) and is written on every slide change.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      let changed = false;
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
      // Batch 88: price anchoring slides sit between the pain and the
      // solution pyramid. Batch 89: the second one stopped being the
      // comparison at the owner's word and became the problems behind
      // the $35,000 instead; AnchorComparisonSlide stays in the repo
      // unreferenced, so the comparison can return with a one-line change.
      BadHireCostSlide,
      BadHireProblemsSlide,
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

  // Initialize from the URL's ?slide= parameter when present and valid
  // (1-based: ?slide=6 opens slide 6); otherwise start on the cover.
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    try {
      const parsed = parseInt(
        new URLSearchParams(window.location.search).get("slide") || "",
        10
      );
      if (!isNaN(parsed) && parsed >= 1 && parsed <= totalSlides) {
        return parsed - 1;
      }
    } catch {
      // Ignore sandboxed iframe location restrictions
    }
    return 0;
  });
  const [direction, setDirection] = useState<number>(1);

  // Core navigation handler: updates state cleanly in memory
  const handleNavigate = useCallback(
    (newIndex: number) => {
      // Batch 80: tapping the bottom dot of the slide you are already on
      // advances that slide's gated steps (slide 5 pyramid, slide 11
      // bonus/rocket) instead of doing nothing. Dots for other slides
      // still jump slides as before.
      // Batch 86 (owner: the sequence must END on slide 6): Batch 80
      // ignored trigger()'s return value, so once the pyramid was
      // complete the dot went dead and never moved on — unlike Next,
      // which advances when trigger() returns false. Now the dot
      // mirrors Next exactly: a consumed step stays, an exhausted gate
      // advances to the next slide, and a slide with no gate stays put.
      if (newIndex === currentIndex) {
        const gate = window.__slideNavigationGate;
        if (gate && typeof gate.trigger === "function") {
          const isHandled = gate.trigger();
          if (isHandled) {
            return;
          }
          if (currentIndex < totalSlides - 1) {
            setDirection(1);
            setCurrentIndex(currentIndex + 1);
          }
        }
        return;
      }
      // Batch 86b (owner: bottom nav must not SKIP the pyramid): a
      // FORWARD dot tap while a gate is unfinished advances one gated
      // step and stays, exactly like Next — tapping slide 6's dot from
      // slide 5 walks reveal, Initial Sign Up, Training & Assessment,
      // Save Time Hiring, Avoid Missing Deadlines, Find Top 5% Talent,
      // and only when the gate is finished does the tap jump to the
      // tapped slide. Backward taps always jump freely. (An earlier
      // forward-dot fix was approved but never landed on main — the
      // current code proves it — so it is re-applied here surgically
      // on fresh HEAD instead of as a full-file rewrite.)
      if (newIndex > currentIndex) {
        const gate = window.__slideNavigationGate;
        if (gate && typeof gate.trigger === "function") {
          const isHandled = gate.trigger();
          if (isHandled) {
            return;
          }
        }
      }
      if (newIndex >= 0 && newIndex < totalSlides) {
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

  // Keep the slide number in the URL (?slide=6) on every slide change,
  // preserving any other parameters already present. replaceState (not
  // pushState) so the address bar always shows the current slide without
  // adding one history entry per slide change.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      params.set("slide", (currentIndex + 1).toString());
      const next = `${window.location.pathname}?${params.toString()}`;
      const current = `${window.location.pathname}${window.location.search}`;
      if (next !== current) {
        window.history.replaceState(null, "", next);
      }
    } catch {
      // Ignore sandboxed iframe history security restrictions
    }
  }, [currentIndex]);

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
