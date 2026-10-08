import { describe, it, expect } from "vitest";
import { nextCoverOnReturn } from "./coverRotation";
describe("cover rotation", () => {
  it("returning to slide 1 shows the other cover", () => {
    expect(nextCoverOnReturn("1")).toBe("2");
    expect(nextCoverOnReturn("2")).toBe("1");
  });
});
