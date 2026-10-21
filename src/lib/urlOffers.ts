/**
 * Batch 74 (owner-approved): URL-driven offers, modelled on the
 * seo-packages-v2 link system the owner supplied.
 *
 * Open the presentation with offer prices in the query string:
 *   ?t1=1500&t2=3499=highlight&t3a=5900&t3b=6900
 *
 * Shortcodes: t1 = Starter (Tier 1), t2 = Tier 2 Growth,
 * t3a = Tier 3.A Skilled, t3b = Tier 3.B Leadership.
 *
 * Value grammar (same as the reference):
 *   t2=3499            offer price only — real price struck, offer in yellow
 *   t2=highlight       feature the card only, no price change
 *   t2=3499=highlight  offer price + featured card
 *   t2=3499=Best Deal  offer price + featured + badge text "Best Deal"
 *
 * Safety: an amount counts only when it is a plain positive number BELOW
 * the tier's real (lowest) price; anything else is ignored and the deck
 * renders exactly as it does without parameters. Featured state: if ANY
 * parameter carries highlight/badge, only those tiers are featured;
 * otherwise the deck's own defaults apply.
 */
import { PRICING_OFFER } from "@/lib/pricingConfig";

export type UrlOfferKey = "starter" | "growth" | "skilled" | "leadership";

export interface UrlOffer {
  amount?: number;
  featured: boolean;
  badge?: string;
}

const PARAM_TO_KEY: Record<string, UrlOfferKey> = {
  t1: "starter",
  t2: "growth",
  t3a: "skilled",
  t3b: "leadership",
};

/** Lowest real price per tier (ranges use their low end). */
export const REAL_PRICE_LOW: Record<UrlOfferKey, number> = {
  starter: 1900,
  growth: 4299,
  skilled: 6800,
  leadership: 7500,
};

function parseValue(raw: string): UrlOffer | undefined {
  const parts = raw.split("=");
  const first = (parts[0] ?? "").trim();
  const rest = parts.slice(1).join("=").trim();
  let amount: number | undefined;
  let word = "";
  if (/^\d+$/.test(first)) {
    const n = parseInt(first, 10);
    if (n > 0) amount = n;
    word = rest;
  } else {
    word = first;
  }
  const offer: UrlOffer = { amount, featured: false };
  if (word) {
    offer.featured = true;
    if (word.toLowerCase() !== "highlight") offer.badge = word;
  }
  if (offer.amount === undefined && !offer.featured) return undefined;
  return offer;
}

function readOffers(): Partial<Record<UrlOfferKey, UrlOffer>> {
  if (typeof window === "undefined") return {};
  const out: Partial<Record<UrlOfferKey, UrlOffer>> = {};
  try {
    const params = new URLSearchParams(window.location.search);
    for (const [param, key] of Object.entries(PARAM_TO_KEY)) {
      const raw = params.get(param);
      if (raw === null) continue;
      const offer = parseValue(raw);
      if (offer) out[key] = offer;
    }
  } catch {
    return {};
  }
  return out;
}

export const URL_OFFERS: Partial<Record<UrlOfferKey, UrlOffer>> = readOffers();

export function getUrlOffer(key: UrlOfferKey): UrlOffer | undefined {
  return URL_OFFERS[key];
}

/** True when the URL amount is a real discount for this tier. */
export function isDiscounted(key: UrlOfferKey): boolean {
  const offer = URL_OFFERS[key];
  return offer?.amount !== undefined && offer.amount < REAL_PRICE_LOW[key];
}

/** True when any parameter features a tier (highlight or badge word). */
export function anyUrlHighlight(): boolean {
  return Object.values(URL_OFFERS).some((o) => o?.featured);
}

/** "$3,499" — offer amounts always render with the $ and thousands commas. */
export function formatOfferPrice(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

/** Badge text for a discounted tier: the URL word, else the FB-19 default. */
export function offerBadgeText(key: UrlOfferKey): string {
  return URL_OFFERS[key]?.badge ?? PRICING_OFFER.badgeText;
}
