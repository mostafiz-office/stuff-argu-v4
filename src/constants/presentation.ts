/**
 * Named constants for the presentation system.
 * Following coding guidelines: no magic numbers or magic strings.
 */

// ── Slide dimensions ────────────────────────────────────────
export const SLIDE_WIDTH = 1920;
export const SLIDE_HEIGHT = 1080;

// ── Transition timing ───────────────────────────────────────
export const TRANSITION_DURATION_S = 0.45;
export const TRANSITION_EASE = [0.4, 0, 0.2, 1] as const;
export const TRANSITION_PERSPECTIVE_PX = 1200;

// ── Transition effect values ────────────────────────────────
export const ZOOM_SCALE_IN = 0.85;
export const ZOOM_SCALE_OUT = 1.15;
export const FLIP_ANGLE_DEG = 45;
export const FLIP_SCALE = 0.92;
export const RISE_OFFSET_PX = 80;
export const RISE_SCALE = 0.96;

// ── Asset preloading ────────────────────────────────────────
export const PRELOAD_BATCH_SIZE = 8;
export const PRELOAD_BATCH_INTERVAL_MS = 80;
export const PRELOAD_START_DELAY_MS = 300;

// ── Export / capture ────────────────────────────────────────
export const CAPTURE_SCALE_STANDARD = 1;
export const CAPTURE_SCALE_HI_RES = 2;
export const CAPTURE_BACKGROUND_COLOR = "#0a0a12";
export const CAPTURE_JPEG_QUALITY = 0.92;
export const CAPTURE_PNG_QUALITY = 0.95;
export const MAX_CAPTURE_RETRIES = 3;
export const RENDER_WAIT_TIMEOUT_MS = 5_000;
export const RENDER_POLL_INTERVAL_MS = 50;
export const RENDER_SETTLE_MS = 950;
export const RETRY_BASE_DELAY_MS = 350;
export const RETRY_INCREMENT_MS = 250;

// ── Blank detection thresholds ──────────────────────────────
export const BLANK_SAMPLE_WIDTH = 64;
export const BLANK_SAMPLE_HEIGHT = 36;
export const BLANK_MEAN_THRESHOLD = 14;
export const BLANK_STD_DEV_THRESHOLD = 8;

// ── Touch navigation ───────────────────────────────────────
export const SWIPE_MIN_DISTANCE_PX = 50;

// ── PDF settings ────────────────────────────────────────────
export const PDF_ORIENTATION = "landscape" as const;
export const PDF_UNIT = "px" as const;
export const PDF_FILENAME = "riseup-asia-presentation.pdf";

// ── Image format constants ──────────────────────────────────
export const IMAGE_MIME_PNG = "image/png" as const;
export const IMAGE_MIME_JPEG = "image/jpeg" as const;

// ── Transition style enum ───────────────────────────────────
export enum TransitionStyleType {
  Slide = "slide",
  Fade = "fade",
  Zoom = "zoom",
  Flip = "flip",
  Rise = "rise",
}

export const TRANSITION_STYLES: readonly TransitionStyleType[] = [
  TransitionStyleType.Slide,
  TransitionStyleType.Fade,
  TransitionStyleType.Zoom,
  TransitionStyleType.Flip,
  TransitionStyleType.Rise,
];

// ── Image format enum ───────────────────────────────────────
export enum ImageFormatType {
  Png = "png",
  Jpeg = "jpeg",
}
