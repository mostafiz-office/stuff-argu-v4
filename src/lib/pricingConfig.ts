/**
 * FB-19: settings-controlled offer area for the pricing tiers.
 *
 * Flip `active` to true to run a pricing offer. In offer mode each card shows
 * its pre-offer price struck through plus the offer badge. When inactive the
 * offer UI hides completely and prices stay flat per FB-17/G-04.
 *
 * Fill in `wasPrices` with the real pre-offer prices BEFORE activating —
 * never invent them.
 */
export const PRICING_OFFER = {
  active: false,
  badgeText: "Launch offer",
  wasPrices: {
    growth: "",
    skilled: "",
    leadership: "",
  } as Record<string, string>,
};
