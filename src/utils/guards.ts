/**
 * Guard functions for positive conditional checks.
 * Following coding guidelines: no raw `!` on function calls.
 */

import {
  BLANK_SAMPLE_WIDTH,
  BLANK_SAMPLE_HEIGHT,
  BLANK_MEAN_THRESHOLD,
  BLANK_STD_DEV_THRESHOLD,
} from "@/constants/presentation";

/** Value exists (not null/undefined) */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/** Value is absent (null or undefined) */
export function isEmpty<T>(value: T | null | undefined): value is null | undefined {
  return value === null || value === undefined;
}

/** Canvas capture is likely blank (near-black or uniform color) */
export function isLikelyBlank(canvas: HTMLCanvasElement): boolean {
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (isEmpty(ctx)) return false;

  const temp = document.createElement("canvas");
  temp.width = BLANK_SAMPLE_WIDTH;
  temp.height = BLANK_SAMPLE_HEIGHT;
  const tempCtx = temp.getContext("2d", { willReadFrequently: true });
  if (isEmpty(tempCtx)) return false;

  tempCtx.drawImage(canvas, 0, 0, BLANK_SAMPLE_WIDTH, BLANK_SAMPLE_HEIGHT);
  const data = tempCtx.getImageData(0, 0, BLANK_SAMPLE_WIDTH, BLANK_SAMPLE_HEIGHT).data;

  const { mean, standardDeviation } = computeLuminanceStats(data, BLANK_SAMPLE_WIDTH * BLANK_SAMPLE_HEIGHT);

  return mean < BLANK_MEAN_THRESHOLD || standardDeviation < BLANK_STD_DEV_THRESHOLD;
}

/** Compute luminance mean and standard deviation from pixel data */
function computeLuminanceStats(data: Uint8ClampedArray, pixelCount: number) {
  let sum = 0;
  let sumSquared = 0;

  for (let i = 0; i < data.length; i += 4) {
    const luma = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    sum += luma;
    sumSquared += luma * luma;
  }

  const mean = sum / pixelCount;
  const variance = Math.max(0, sumSquared / pixelCount - mean * mean);
  const standardDeviation = Math.sqrt(variance);

  return { mean, standardDeviation };
}

/** Export query value is truthy (not "0", "false", "off", "no") */
export function isExportEnabled(value: string): boolean {
  const DISABLED_VALUES = ["0", "false", "off", "no"] as const;
  const normalized = value.trim().toLowerCase();

  return !DISABLED_VALUES.includes(normalized as typeof DISABLED_VALUES[number]);
}

/** Parsed slide index is a valid finite number */
export function isValidSlideNumber(value: number): boolean {
  return Number.isFinite(value);
}
