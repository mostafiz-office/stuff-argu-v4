import PresentationEngine from "@/components/presentation/PresentationEngine";
import { PresentationProvider } from "@/context/PresentationContext";

import PricingCoverV1 from "@/slides/PricingCoverV1";
import PricingCoverV2 from "@/slides/PricingCoverV2";
import PricingCoverV3 from "@/slides/PricingCoverV3";
import PricingTiersSlide from "@/slides/PricingTiersSlide";
import PremiumExpertSlide from "@/slides/PremiumExpertSlide";
import PremiumExpertSlideV2 from "@/slides/PremiumExpertSlideV2";
import PremiumExpertSlideV3 from "@/slides/PremiumExpertSlideV3";
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
  <PricingCoverV2 key="v2" />,
  <PricingTiersSlide key="4" />,
  <PremiumExpertSlide key="5" />,
  <PremiumExpertSlideV2 key="5b" />,
  <PremiumExpertSlideV3 key="5c" />,
  <TierDetailSlide key="6" />,
  <PricingSavingsSlide key="7" />,
  
  <WhatsIncludedSlide key="8" />,
  <PricingHowItWorksSlide key="9" />,
  <StarterTierSlideV3 key="10b" />,
  <StarterTierSlideV8 key="10c" />,
  <StarterTierSlideV9 key="10d" />,
  <PricingCTASlide key="12" />,
];

export default function Index() {
  return (
    <PresentationProvider>
      <PresentationEngine slides={slides} />
    </PresentationProvider>
  );
}
