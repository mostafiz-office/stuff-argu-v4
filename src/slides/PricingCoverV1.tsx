import React from "react";
import { PricingCoverShared, CoverCopy } from "./PricingCoverShared";

const COPY_A: CoverCopy = {
  label: "Pre-vetted senior engineers, on demand",
  line1: "Cut 80% Off Your",
  line2: "Developer Hiring Timeline.",
  body: "Stop burning months on unvetted contractors. Top 5% senior engineers ready to deploy in 20 minutes under a 20+ year Enterprise Chief Architect.",
  chips: ["Cut 80% Hiring Drag", "Hire in 20 Minutes", "Top 5% Talent"],
  stats: ["Cut 80% Hiring Timeline", "Deploy in 20 Minutes", "Enterprise Architect Supervised"],
};

interface Props {
  onNavigate?: (index: number) => void;
  onToggleCover?: () => void;
  coverVariant?: string;
}

export const PricingCoverV1: React.FC<Props> = ({ onNavigate }) => (
  <PricingCoverShared copy={COPY_A} onNavigate={onNavigate} />
);
