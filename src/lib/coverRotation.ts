export type CoverVariant = "1" | "2";
/** Returning to slide 1 always shows the other cover. */
export const nextCoverOnReturn = (prev: CoverVariant): CoverVariant => (prev === "1" ? "2" : "1");
