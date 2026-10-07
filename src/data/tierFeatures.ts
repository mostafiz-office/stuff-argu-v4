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
      { feature: "Dedicated developer · 160 hrs/mo", growth: true, skilled: true, leadership: true },
      { feature: "Weekly progress reports", growth: true, skilled: true, leadership: true },
      { feature: "Daily standups & sync", growth: true, skilled: true, leadership: true },
      { feature: "Sprint participation", growth: true, skilled: true, leadership: true },
      { feature: "Task breakdown & delegation", growth: true, skilled: true, leadership: true },
    ],
  },
  {
    label: "Team & Leadership",
    rows: [
      { feature: "Team management scope", growth: "Up to 2", skilled: "3–5", leadership: "Up to 15" },
      { feature: "Architecture decisions", growth: "Limited", skilled: true, leadership: true },
      { feature: "Dedicated project management", growth: false, skilled: false, leadership: true },
      { feature: "CTO-level strategic oversight", growth: false, skilled: false, leadership: true },
      { feature: "QA Automation Engineers", growth: false, skilled: false, leadership: "2" },
    ],
  },
  {
    label: "Support & Assurance",
    rows: [
      { feature: "Priority Slack · 24/7 SLA", growth: "Slack only", skilled: true, leadership: "Versatile" },
      { feature: "Alim Expert Oversight", growth: "2 hrs/wk", skilled: "3 hrs/wk", leadership: "4 hrs/wk" },
      { feature: "Min. Developer Experience", growth: "4+ yrs", skilled: "6+ yrs", leadership: "8+ yrs" },
      { feature: "Onboarding Deposit", growth: "$2K", skilled: "$2K", leadership: "$2K" },
    ],
  },
];
