import React from "react";
import { PricingCoverShared, CoverCopy } from "./PricingCoverShared";

const COPY_B: CoverCopy = {
  label: "The elite engineers behind your roadmap",
  line1: "Hire Senior Engineers",
  line2: "In 20 Minutes, Not 3 Months.",
  body: "Skip the interviews, the no-shows and the guesswork. Get a proven senior engineer shipping this week, guided by a 20+ year Chief Architect.",
  chips: ["No Recruiting Risk", "Ships This Week", "Your Timezone & Stack"],
  stats: ["20+ Years in Software Engineering", "Led 50+ Enterprise Projects", "Chief Architect Included"],
};

interface Props {
  onNavigate?: (index: number) => void;
  onToggleCover?: () => void;
  coverVariant?: string;
}

export const PricingCoverV3: React.FC<Props> = ({ onNavigate }) => (
  <PricingCoverShared copy={COPY_B} onNavigate={onNavigate} />
);
