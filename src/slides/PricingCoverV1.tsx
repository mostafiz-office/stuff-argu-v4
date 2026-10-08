import React from "react";
import { COVER_RECOMMENDATIONS, PricingCoverShared, CoverCopy } from "./PricingCoverShared";

const COPY_A: CoverCopy = {
  label: "Elite Engineers",
  line1: "Cut 80% Off",
  line2: "Hiring Time.",
  body: "Pre-vetted top 5% engineers ready to join your team this week.",
  chips: ["Top 5% Talent", "Hire in 20 Min", "No Hidden Fees"],
};

interface Props {
  onNavigate?: (index: number) => void;
  onToggleCover?: () => void;
  coverVariant?: string;
}

export const PricingCoverV1: React.FC<Props> = ({ onNavigate }) => (
  <PricingCoverShared copy={COPY_A} recommendations={COVER_RECOMMENDATIONS.v1} onNavigate={onNavigate} />
);
