import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import PresentationEngine from "@/components/presentation/PresentationEngine";
import { PresentationProvider } from "@/context/PresentationContext";

import PricingCoverV1 from "@/slides/PricingCoverV1";
import PricingCoverV3 from "@/slides/PricingCoverV3";
import PricingTiersSlide from "@/slides/PricingTiersSlide";
import PremiumExpertSlideV2 from "@/slides/PremiumExpertSlideV2";
import TierDetailSlide from "@/slides/TierDetailSlide";
import PricingSavingsSlide from "@/slides/PricingSavingsSlide";
import WhatsIncludedSlide from "@/slides/WhatsIncludedSlide";
import PricingHowItWorksSlide from "@/slides/PricingHowItWorksSlide";


import StarterTierSlideV9 from "@/slides/StarterTierSlideV9";
import StarterTierSlideV9Clone from "@/slides/StarterTierSlideV9Clone";
import StarterTierDetailSlide from "@/slides/StarterTierDetailSlide";
import StarterTierDetailSlideV2 from "@/slides/StarterTierDetailSlideV2";
import PricingCTASlide from "@/slides/PricingCTASlide";

const coverVariants = [
  <PricingCoverV3 key="cover" />,
  <PricingCoverV1 key="cover" />,
];

export default function Index() {
  const [searchParams] = useSearchParams();
  const coverParam = searchParams.get("cover");

  const slides = useMemo(() => {
    // Use ?cover=1 or ?cover=2 to pick a cover, otherwise random
    let coverIndex: number;
    if (coverParam === "1") {
      coverIndex = 0;
    } else if (coverParam === "2") {
      coverIndex = 1;
    } else {
      coverIndex = Math.random() < 0.5 ? 0 : 1;
    }

    return [
      coverVariants[coverIndex],
      <PricingTiersSlide key="4" />,
      <TierDetailSlide key="6" />,
      <PremiumExpertSlideV2 key="5b" />,
      <PricingSavingsSlide key="7" />,
      <WhatsIncludedSlide key="8" />,
      <PricingHowItWorksSlide key="9" />,
      
      
      <StarterTierDetailSlide key="starter-detail" />,
      <StarterTierDetailSlideV2 key="starter-detail-v2" />,
      <StarterTierSlideV9 key="10d" />,
      <PricingCTASlide key="12" />,
    ];
  }, [coverParam]);

  return (
    <PresentationProvider>
      <PresentationEngine slides={slides} />
    </PresentationProvider>
  );
}
