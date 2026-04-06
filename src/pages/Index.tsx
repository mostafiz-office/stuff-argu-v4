import PresentationEngine from "@/components/presentation/PresentationEngine";
import { PresentationProvider } from "@/context/PresentationContext";

import PricingCoverV1 from "@/slides/PricingCoverV1";
import PricingCoverV2 from "@/slides/PricingCoverV2";
import PricingCoverV3 from "@/slides/PricingCoverV3";
import PricingTiersSlide from "@/slides/PricingTiersSlide";
import TierDetailSlide from "@/slides/TierDetailSlide";
import PricingSavingsSlide from "@/slides/PricingSavingsSlide";
import WhatsIncludedSlide from "@/slides/WhatsIncludedSlide";
import PricingHowItWorksSlide from "@/slides/PricingHowItWorksSlide";
import StarterTierSlide from "@/slides/StarterTierSlide";
import PricingCTASlide from "@/slides/PricingCTASlide";

const slides = [
  <PricingCoverV1 key="v1" />,
  <PricingCoverV2 key="v2" />,
  <PricingCoverV3 key="v3" />,
  <PricingTiersSlide key="4" />,
  <TierDetailSlide key="5" />,
  <PricingSavingsSlide key="6" />,
  <WhatsIncludedSlide key="7" />,
  <PricingHowItWorksSlide key="8" />,
  <StarterTierSlide key="9" />,
  <PricingCTASlide key="10" />,
];

export default function Index() {
  return (
    <PresentationProvider>
      <PresentationEngine slides={slides} />
    </PresentationProvider>
  );
}
