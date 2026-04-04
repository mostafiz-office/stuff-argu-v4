import PresentationEngine from "@/components/presentation/PresentationEngine";
import { PresentationProvider } from "@/context/PresentationContext";

import PricingCoverSlide from "@/slides/PricingCoverSlide";
import PricingTiersSlide from "@/slides/PricingTiersSlide";
import TierDetailSlide from "@/slides/TierDetailSlide";
import PricingSavingsSlide from "@/slides/PricingSavingsSlide";
import WhatsIncludedSlide from "@/slides/WhatsIncludedSlide";
import PricingHowItWorksSlide from "@/slides/PricingHowItWorksSlide";
import PricingCTASlide from "@/slides/PricingCTASlide";

const slides = [
  <PricingCoverSlide key="1" />,
  <PricingTiersSlide key="2" />,
  <TierDetailSlide key="3" />,
  <PricingSavingsSlide key="4" />,
  <WhatsIncludedSlide key="5" />,
  <PricingHowItWorksSlide key="6" />,
  <PricingCTASlide key="7" />,
];

export default function Index() {
  return (
    <PresentationProvider>
      <PresentationEngine slides={slides} />
    </PresentationProvider>
  );
}
