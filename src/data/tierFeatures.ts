export type FeatureRow = {
  feature: string;
  growth: boolean | string;
  skilled: boolean | string;
  leadership: boolean | string;
};

export const TIER_FEATURE_GROUPS: Array<{ label: string; rows: FeatureRow[] }> = [
  {
    label: "Delivery",
    rows: [
      { feature: "Dedicated developer · 160 hrs/M", growth: true, skilled: true, leadership: true },
      { feature: "Weekly progress reports", growth: true, skilled: true, leadership: true },
      { feature: "Daily standups & sync", growth: true, skilled: true, leadership: true },
      { feature: "Sprint participation", growth: true, skilled: true, leadership: true },
      { feature: "Task breakdown & delegation", growth: true, skilled: true, leadership: true },
    ],
  },
  {
    label: "Team & Leadership",
    rows: [
      { feature: "Team management scope", growth: "Up to 2", skilled: "3 to 5", leadership: "Up to 15" },
      { feature: "Architecture decisions", growth: "Limited", skilled: true, leadership: true },
      { feature: "Dedicated project management", growth: false, skilled: false, leadership: true },
      { feature: "CTO-level strategic oversight", growth: false, skilled: false, leadership: true },
      { feature: "QA Automation Engineers", growth: false, skilled: false, leadership: "2 included" },
    ],
  },
  {
    label: "Support & Assurance",
    rows: [
      { feature: "Priority Slack · 24/7 SLA", growth: "Slack only", skilled: true, leadership: "24/7 priority SLA" },
      { feature: "Chief Architect Oversight", growth: "2 hrs/wk", skilled: "3 hrs/wk", leadership: "4 hrs/wk" },
      { feature: "Min. Developer Experience", growth: "4+ yrs", skilled: "6+ yrs", leadership: "8+ yrs" },
      { feature: "Onboarding Deposit", growth: "$2K", skilled: "$2K", leadership: "$2K" },
    ],
  },
];

export type TierKey = "growth" | "skilled" | "leadership";

export type TierDifferentiator = {
  /** full line of copy */
  text: string;
  /** substring of `text` to emphasize (e.g. "up to 15") — omit for none */
  highlight?: string;
};

/**
 * FB-18: each tier's 2–3 unique differentiators — the "why this price"
 * focus block on the tier card. Distinct from TIER_FEATURE_GROUPS, which
 * powers the full comparison table overlay.
 */
export const TIER_DIFFERENTIATORS: Record<TierKey, TierDifferentiator[]> = {
  growth: [
    { text: "Full-time dedicated developer" },
    { text: "Clears backlog and fragile code" },
    { text: "No mentor overhead, honest scope" },
  ],
  skilled: [
    { text: "Mid-level architecture oversight" },
    { text: "Mentor-grade developers" },
    { text: "Owns complex features end-to-end" },
  ],
  leadership: [
    { text: "Manages up to 15 engineers", highlight: "up to 15" },
    { text: "CTO-level architecture oversight" },
    { text: "24/7 priority SLA" },
  ],
};
