import PresentationEngine from "@/components/presentation/PresentationEngine";
import { PresentationProvider } from "@/context/PresentationContext";

import TitleSlide from "@/slides/TitleSlide";
import CEOSlide from "@/slides/CEOSlide";
import CTOSlide from "@/slides/CTOSlide";
import ServicesDividerSlide from "@/slides/ServicesDividerSlide";
import SoftwareEngineeringSlide from "@/slides/SoftwareEngineeringSlide";
import WebDevelopmentSlide from "@/slides/WebDevelopmentSlide";
import AIDevelopmentSlide from "@/slides/AIDevelopmentSlide";
import SEOGrowthSlide from "@/slides/SEOGrowthSlide";
import DigitalMarketing360Slide from "@/slides/DigitalMarketing360Slide";
import StaffAugmentationSlide from "@/slides/StaffAugmentationSlide";
import StaffAugProcessSlide from "@/slides/StaffAugProcessSlide";

import QuoteSlide from "@/slides/QuoteSlide";
import RecapSlide from "@/slides/RecapSlide";
import TeamDividerSlide from "@/slides/TeamDividerSlide";
import TeamOverviewSlide from "@/slides/TeamOverviewSlide";
import KeyPlayersSlide from "@/slides/KeyPlayersSlide";
import KeyPlayersSlide2 from "@/slides/KeyPlayersSlide2";

import SyedurRahmanSlide from "@/slides/SyedurRahmanSlide";
import DailyWorkCultureSlide from "@/slides/DailyWorkCultureSlide";
import TalentPoolSlide from "@/slides/TalentPoolSlide";

import TechStackSlide from "@/slides/TechStackSlide";
import ProjectsDividerSlide from "@/slides/ProjectsDividerSlide";
import ValidataSlide from "@/slides/ValidataSlide";

import AutoUTSlide from "@/slides/AutoUTSlide";
import PersonalVPNSlide from "@/slides/PersonalVPNSlide";
import ConnectIQSlide from "@/slides/ConnectIQSlide";
import BabelHealthSlide from "@/slides/BabelHealthSlide";
import VeradigmSlide from "@/slides/VeradigmSlide";
import LLMPlayerSlide from "@/slides/LLMPlayerSlide";
import MeetingTranscriptSlide from "@/slides/MeetingTranscriptSlide";
import TalentProjectsDividerSlide from "@/slides/TalentProjectsDividerSlide";
import GreenlightSlide from "@/slides/GreenlightSlide";
import ZaproSlide from "@/slides/ZaproSlide";
import ObservationsDividerSlide from "@/slides/ObservationsDividerSlide";
import TestimonialsSlide from "@/slides/TestimonialsSlide";

import IndustriesSlide from "@/slides/IndustriesSlide";
import SupportDividerSlide from "@/slides/SupportDividerSlide";
import CompetitiveEdgeSlide from "@/slides/CompetitiveEdgeSlide";
import CostComparisonSlide from "@/slides/CostComparisonSlide";
import AfterSalesSupportSlide from "@/slides/AfterSalesSupportSlide";

import QuickCycleSlide from "@/slides/QuickCycleSlide";
import PricingSlide from "@/slides/PricingSlide";
import NextStepsSlide from "@/slides/NextStepsSlide";
import ThankYouSlide from "@/slides/ThankYouSlide";
import ContactSlide from "@/slides/ContactSlide";

const slides = [
  // Section 1: Introduction (1-2)
  <TitleSlide key="1" />,
  <CEOSlide key="2" />,

  // Section 2: Services (4-11)
  <ServicesDividerSlide key="4" />,
  <SoftwareEngineeringSlide key="5" />,
  <AIDevelopmentSlide key="6" />,
  <WebDevelopmentSlide key="7" />,
  <SEOGrowthSlide key="8" />,
  <DigitalMarketing360Slide key="8b" />,
  <StaffAugmentationSlide key="9b" />,
  <StaffAugProcessSlide key="9c" />,
  <TalentPoolSlide key="9" />,

  <QuoteSlide key="10" />,
  <RecapSlide key="11" />,

  // Section 3: Team (12-18)
  <TeamDividerSlide key="12" />,
  <KeyPlayersSlide key="13" />,
  <KeyPlayersSlide2 key="13c" />,
  
  <SyedurRahmanSlide key="13e" />,
  <TeamOverviewSlide key="13b" />,
  <DailyWorkCultureSlide key="13f" />,
  
  <TechStackSlide key="16" />,
  <ObservationsDividerSlide key="18" />,

  // Section 4: Case Studies (19-24)
  <ProjectsDividerSlide key="19" />,
  <ValidataSlide key="20" />,
  <AutoUTSlide key="21b" />,
  <PersonalVPNSlide key="21c" />,
  <ConnectIQSlide key="21d" />,
  <BabelHealthSlide key="21e" />,
  
  <VeradigmSlide key="22" />,
  <LLMPlayerSlide key="22b" />,
  <MeetingTranscriptSlide key="22c" />,
  <TalentProjectsDividerSlide key="22d" />,
  <GreenlightSlide key="22e" />,
  <ZaproSlide key="22f" />,
  <QuickCycleSlide key="22g" />,
  <TestimonialsSlide key="23" />,
  
  <IndustriesSlide key="24" />,

  // Section 5: Why Rise Up & Closing (25-30)
  <SupportDividerSlide key="25" />,
  <CompetitiveEdgeSlide key="26" />,
  <CostComparisonSlide key="27" />,
  <AfterSalesSupportSlide key="27b" />,
  
  <NextStepsSlide key="30" />,
  <ContactSlide key="32" />,
];

export default function Index() {
  return (
    <PresentationProvider>
      <PresentationEngine slides={slides} />
    </PresentationProvider>
  );
}
