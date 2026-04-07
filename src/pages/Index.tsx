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
import StarterTierSlide from "@/slides/StarterTierSlide";
import StarterTierSlideV3 from "@/slides/StarterTierSlideV3";
import StarterTierSlideV4 from "@/slides/StarterTierSlideV4";
import StarterTierSlideV5 from "@/slides/StarterTierSlideV5";
import StarterTierSlideV6 from "@/slides/StarterTierSlideV6";
import StarterTierSlideV8 from "@/slides/StarterTierSlideV8";
import StarterTierSlideV9 from "@/slides/StarterTierSlideV9";
import PricingCTASlide from "@/slides/PricingCTASlide";

const slides = [
  <PricingCoverV3 key="v3" />,
  <PricingCoverV1 key="v1" />,
  
  <PricingTiersSlide key="4" />,
  <TierDetailSlide key="6" />,
  
  <PremiumExpertSlideV2 key="5b" />,
  
  <PricingSavingsSlide key="7" />,
  
  <WhatsIncludedSlide key="8" />,
  <PricingHowItWorksSlide key="9" />,
  <StarterTierSlideV3 key="10b" />,
  <PricingCTASlide key="12" />,
];

export default function Index() {
  return (
    <PresentationProvider>
      <PresentationEngine slides={slides} />
    </PresentationProvider>
  );
}
