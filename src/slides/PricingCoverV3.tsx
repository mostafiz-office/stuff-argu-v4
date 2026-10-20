import React from "react";
import { COVER_RECOMMENDATIONS, PricingCoverShared, CoverCopy } from "./PricingCoverShared";

const COPY_B: CoverCopy = {
  label: "Staff Augmentation",
  line1: "Senior Engineers",
  line2: "In 20 Minutes.",
  body: "Skip 3-month hiring cycles. Get a proven engineer shipping now.",
  chips: ["No Recruiting Risk", "Your Timezone", "Chief Architect"],
  headline: {
    line1: "Senior Engineers",
    line2: "In 20 Minutes.",
    fillWord: "20",
    fillPercent: 100,
    fadeWord: "In",
    labelWord: "Minutes.",
    labelTone: "white",
  },
};

interface Props {
  onNavigate?: (index: number) => void;
  onToggleCover?: () => void;
  coverVariant?: string;
}

export const PricingCoverV3: React.FC<Props> = ({ onNavigate }) => (
  <PricingCoverShared copy={COPY_B} recommendations={COVER_RECOMMENDATIONS.v3} onNavigate={onNavigate} />
);
