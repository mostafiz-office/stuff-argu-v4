import { useState, useCallback, useEffect, useRef, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, FileCode2, FileImage, FileText, X, ChevronDown, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { isLikelyBlank } from "@/utils/guards";
import {
  SLIDE_WIDTH,
  SLIDE_HEIGHT,
  CAPTURE_SCALE_STANDARD,
  CAPTURE_SCALE_HI_RES,
  CAPTURE_BACKGROUND_COLOR,
  CAPTURE_JPEG_QUALITY,
  CAPTURE_PNG_QUALITY,
  MAX_CAPTURE_RETRIES,
  RENDER_WAIT_TIMEOUT_MS,
  RENDER_POLL_INTERVAL_MS,
  RENDER_SETTLE_MS,
  RETRY_BASE_DELAY_MS,
  RETRY_INCREMENT_MS,
  PDF_ORIENTATION,
  PDF_UNIT,
  PDF_FILENAME,
  IMAGE_MIME_PNG,
  IMAGE_MIME_JPEG,
  ImageFormatType,
} from "@/constants/presentation";

interface DownloadPanelProps {
  open: boolean;
  onClose: () => void;
  slides: ReactElement[];
  currentSlide: number;
  onNavigate: (index: number) => void;
  allowHtmlDownload?: boolean;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const waitForPaint = async () => {
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
};

/* Blank detection moved to src/utils/guards.ts as isLikelyBlank() */

const escapeAttribute = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export default function DownloadPanel({
  open,
  onClose,
  slides,
  currentSlide,
  onNavigate,
  allowHtmlDownload = false,
}: DownloadPanelProps) {
  const [isPdfLoading, setIsPdfLoading] = useState(false);
  const [slideLoading, setSlideLoading] = useState<number | null>(null);
  const [isHtmlLoading, setIsHtmlLoading] = useState(false);
  const [imageFormat, setImageFormat] = useState<ImageFormatType>(ImageFormatType.Png);
  const [isFormatOpen, setIsFormatOpen] = useState(false);
  const [pdfProgress, setPdfProgress] = useState(0);
  const latestSlideRef = useRef(currentSlide);

  useEffect(() => {
    latestSlideRef.current = currentSlide;
  }, [currentSlide]);

  const waitForSlideToRender = useCallback(async (targetIndex: number) => {
    const start = Date.now();

    while (Date.now() - start < RENDER_WAIT_TIMEOUT_MS) {
      const nodes = document.querySelectorAll("[data-slide-index]");
      const activeNode = nodes.length ? (nodes[nodes.length - 1] as HTMLElement) : null;
      const activeIndex = activeNode?.dataset.slideIndex ? Number(activeNode.dataset.slideIndex) : -1;

      if (activeIndex === targetIndex || latestSlideRef.current === targetIndex) {
        break;
      }

      await sleep(RENDER_POLL_INTERVAL_MS);
    }

    await waitForPaint();
    await sleep(RENDER_SETTLE_MS);
  }, []);

  const captureCurrentSlide = useCallback(async (isHiRes = false): Promise<HTMLCanvasElement | null> => {
    const slideContent = document.querySelector(".slide-content") as HTMLElement | null;
    if (!slideContent) return null;

    try {
      const canvas = await html2canvas(slideContent, {
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
        windowWidth: SLIDE_WIDTH,
        windowHeight: SLIDE_HEIGHT,
        scale: isHiRes ? CAPTURE_SCALE_HI_RES : CAPTURE_SCALE_STANDARD,
        useCORS: true,
        allowTaint: true,
        backgroundColor: CAPTURE_BACKGROUND_COLOR,
        logging: false,
        onclone: (clonedDocument) => {
          const clonedEl = clonedDocument.querySelector(".slide-content") as HTMLElement | null;
          if (!clonedEl) return;

          clonedEl.style.transform = "none";
          clonedEl.style.transformOrigin = "top left";
          clonedEl.style.position = "absolute";
          clonedEl.style.top = "0";
          clonedEl.style.left = "0";
          clonedEl.style.width = `${SLIDE_WIDTH}px`;
          clonedEl.style.height = `${SLIDE_HEIGHT}px`;
          clonedEl.style.overflow = "visible";

          const parent = clonedEl.parentElement;
          if (parent) {
            parent.style.overflow = "visible";
            parent.style.width = `${SLIDE_WIDTH}px`;
            parent.style.height = `${SLIDE_HEIGHT}px`;
            parent.style.position = "relative";
          }
        },
      });
      return canvas;
    } catch (err) {
      console.error("html2canvas capture failed:", err);
      return null;
    }
  }, []);

  const downloadCurrentSlide = useCallback(async () => {
    setSlideLoading(currentSlide);

    try {
      const canvas = await captureCurrentSlide(true);
      if (!canvas) {
        toast.error("Could not capture current slide.");
        return;
      }

      const mimeType = imageFormat === ImageFormatType.Jpeg ? IMAGE_MIME_JPEG : IMAGE_MIME_PNG;
      const ext = imageFormat === ImageFormatType.Jpeg ? "jpg" : "png";

      const link = document.createElement("a");
      link.download = `riseup-asia-slide-${currentSlide + 1}.${ext}`;
      link.href = canvas.toDataURL(mimeType, CAPTURE_PNG_QUALITY);
      link.click();
      toast.success(`Slide ${currentSlide + 1} downloaded`);
    } catch (err) {
      console.error("Failed to capture slide:", err);
      toast.error("Slide download failed. Please try again.");
    } finally {
      setSlideLoading(null);
    }
  }, [currentSlide, imageFormat, captureCurrentSlide]);

  const downloadAllAsPDF = useCallback(async () => {
    setIsPdfLoading(true);
    setPdfProgress(0);
    const originalSlide = currentSlide;

    try {
      let pdf: jsPDF | null = null;
      const failedSlides: number[] = [];
      let exportedCount = 0;

      for (let i = 0; i < slides.length; i++) {
        onNavigate(i);
        await waitForSlideToRender(i);

        let canvas: HTMLCanvasElement | null = null;
        let validCapture = false;

        for (let attempt = 0; attempt < MAX_CAPTURE_RETRIES; attempt++) {
          canvas = await captureCurrentSlide();
          if (canvas && !isLikelyBlank(canvas)) {
            validCapture = true;
            break;
          }
          await sleep(RETRY_BASE_DELAY_MS + attempt * RETRY_INCREMENT_MS);
        }

        if (!canvas || !validCapture) {
          failedSlides.push(i + 1);
          setPdfProgress(Math.round(((i + 1) / slides.length) * 100));
          continue;
        }

        if (!pdf) {
          pdf = new jsPDF({ orientation: PDF_ORIENTATION, unit: PDF_UNIT, format: [SLIDE_WIDTH, SLIDE_HEIGHT] });
        } else {
          pdf.addPage([SLIDE_WIDTH, SLIDE_HEIGHT], PDF_ORIENTATION);
        }

        pdf.addImage(canvas.toDataURL(IMAGE_MIME_JPEG, CAPTURE_JPEG_QUALITY), "JPEG", 0, 0, SLIDE_WIDTH, SLIDE_HEIGHT);
        exportedCount += 1;
        setPdfProgress(Math.round(((i + 1) / slides.length) * 100));
      }

      if (!pdf || exportedCount === 0) {
        toast.error("PDF export failed. No slides were captured.");
        return;
      }

      pdf.save(PDF_FILENAME);

      if (failedSlides.length) {
        const preview = failedSlides.slice(0, 5).join(", ");
        const more = failedSlides.length > 5 ? ", ..." : "";
        toast.warning(`PDF downloaded with ${failedSlides.length} skipped slide(s): ${preview}${more}`);
      } else {
        toast.success("PDF downloaded");
      }
    } catch (err) {
      console.error("Failed to generate PDF:", err);
      toast.error("PDF export failed. Please try again.");
    } finally {
      onNavigate(originalSlide);
      setIsPdfLoading(false);
      setPdfProgress(0);
    }
  }, [slides, currentSlide, onNavigate, captureCurrentSlide, waitForSlideToRender]);

  const downloadAnimatedHtml = useCallback(async () => {
    setIsHtmlLoading(true);

    try {
      const url = new URL(window.location.href);
      url.searchParams.set("slide", String(currentSlide + 1));
      url.searchParams.set("export", "1");
      const targetUrl = url.toString();
      const safeTargetUrl = escapeAttribute(targetUrl);

      const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Riseup-asia Animated Presentation</title>
    <style>
      html, body { margin: 0; height: 100%; background: #090913; color: #f5f5f5; font-family: system-ui, sans-serif; }
      .wrap { display: flex; align-items: center; justify-content: center; height: 100%; }
      iframe { width: 100vw; height: 100vh; border: 0; }
      .fallback {
        position: fixed;
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 16px;
        border-radius: 9999px;
        background: rgba(0,0,0,0.55);
        border: 1px solid rgba(255,255,255,0.16);
        backdrop-filter: blur(6px);
      }
      .fallback a { color: #fff; text-decoration: none; font-weight: 600; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <iframe src="${safeTargetUrl}" allow="fullscreen"></iframe>
    </div>
    <div class="fallback"><a href="${safeTargetUrl}" target="_blank" rel="noopener noreferrer">Open presentation directly</a></div>
  </body>
</html>`;

      const blob = new Blob([html], { type: "text/html;charset=utf-8" });
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = `riseup-asia-animated-slide-${currentSlide + 1}.html`;
      link.href = blobUrl;
      link.click();
      URL.revokeObjectURL(blobUrl);

      toast.success("Animated HTML file downloaded");
    } catch (err) {
      console.error("Failed to generate HTML export:", err);
      toast.error("HTML export failed. Please try again.");
    } finally {
      setIsHtmlLoading(false);
    }
  }, [currentSlide]);

  const formats: { value: ImageFormatType; label: string }[] = [
    { value: ImageFormatType.Png, label: "PNG" },
    { value: ImageFormatType.Jpeg, label: "JPG" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[70] flex flex-col"
            style={{
              width: 360,
              background: "hsl(var(--pres-bg))",
              borderLeft: "1px solid hsl(var(--pres-accent) / 0.1)",
              boxShadow: "-20px 0 60px hsl(0 0% 0% / 0.5)",
            }}
          >
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: "1px solid hsl(var(--pres-accent) / 0.08)" }}
            >
              <div className="flex items-center gap-3">
                <Download size={20} style={{ color: "hsl(var(--pres-accent))" }} />
                <span
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "hsl(var(--pres-text))",
                  }}
                >
                  Export
                </span>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
                style={{ color: "hsl(var(--pres-text-dim))" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(var(--pres-bg-surface))")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              <div className="glass-card p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-lg"
                    style={{
                      width: 40,
                      height: 40,
                      background: "hsl(var(--pres-accent) / 0.1)",
                      border: "1px solid hsl(var(--pres-accent) / 0.15)",
                    }}
                  >
                    <FileText size={18} style={{ color: "hsl(var(--pres-accent))" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "hsl(var(--pres-text))",
                      }}
                    >
                      Full Presentation
                    </p>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 12,
                        color: "hsl(var(--pres-text-dim))",
                      }}
                    >
                      {slides.length} slides · PDF format
                    </p>
                  </div>
                </div>

                <button
                  onClick={downloadAllAsPDF}
                  disabled={isPdfLoading || slideLoading !== null || isHtmlLoading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    background: isPdfLoading
                      ? "hsl(var(--pres-accent) / 0.15)"
                      : "linear-gradient(135deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))",
                    color: isPdfLoading ? "hsl(var(--pres-accent))" : "hsl(var(--pres-bg))",
                    cursor: isPdfLoading || slideLoading !== null || isHtmlLoading ? "not-allowed" : "pointer",
                  }}
                >
                  {isPdfLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Generating… {pdfProgress}%
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      Download PDF
                    </>
                  )}
                </button>

                {isPdfLoading && (
                  <div
                    className="w-full rounded-full overflow-hidden"
                    style={{ height: 4, background: "hsl(var(--pres-bg-surface))" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))",
                      }}
                      animate={{ width: `${pdfProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
              </div>

              {allowHtmlDownload && (
                <div className="glass-card p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center rounded-lg"
                      style={{
                        width: 40,
                        height: 40,
                        background: "hsl(var(--pres-bg-surface))",
                        border: "1px solid hsl(var(--pres-accent) / 0.15)",
                      }}
                    >
                      <FileCode2 size={18} style={{ color: "hsl(var(--pres-accent))" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 15,
                          fontWeight: 600,
                          color: "hsl(var(--pres-text))",
                        }}
                      >
                        Animated HTML
                      </p>
                      <p
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 12,
                          color: "hsl(var(--pres-text-dim))",
                        }}
                      >
                        Keeps transitions by loading the live deck in HTML
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={downloadAnimatedHtml}
                    disabled={isHtmlLoading || isPdfLoading || slideLoading !== null}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      background: "hsl(var(--pres-bg-surface))",
                      border: "1px solid hsl(var(--pres-accent) / 0.15)",
                      color: "hsl(var(--pres-text))",
                      cursor: isHtmlLoading || isPdfLoading || slideLoading !== null ? "not-allowed" : "pointer",
                    }}
                  >
                    {isHtmlLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Preparing HTML…
                      </>
                    ) : (
                      <>
                        <FileCode2 size={16} />
                        Download Animated HTML
                      </>
                    )}
                  </button>
                </div>
              )}

              <div className="glass-card p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-lg"
                    style={{
                      width: 40,
                      height: 40,
                      background: "hsl(var(--pres-accent) / 0.1)",
                      border: "1px solid hsl(var(--pres-accent) / 0.15)",
                    }}
                  >
                    <FileImage size={18} style={{ color: "hsl(var(--pres-accent))" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "hsl(var(--pres-text))",
                      }}
                    >
                      Current Slide
                    </p>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 12,
                        color: "hsl(var(--pres-text-dim))",
                      }}
                    >
                      Slide {currentSlide + 1} of {slides.length}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <button
                    onClick={() => setIsFormatOpen(!isFormatOpen)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-colors"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      background: "hsl(var(--pres-bg-surface))",
                      border: "1px solid hsl(var(--pres-accent) / 0.1)",
                      color: "hsl(var(--pres-text))",
                    }}
                  >
                    <span>Format: {formats.find((f) => f.value === imageFormat)?.label}</span>
                    <ChevronDown
                      size={16}
                      style={{
                        color: "hsl(var(--pres-text-dim))",
                        transform: isFormatOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {isFormatOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 right-0 mt-1 rounded-xl overflow-hidden z-10"
                        style={{
                          background: "hsl(var(--pres-bg-surface))",
                          border: "1px solid hsl(var(--pres-accent) / 0.1)",
                          boxShadow: "0 8px 24px hsl(0 0% 0% / 0.4)",
                        }}
                      >
                        {formats.map((f) => (
                          <button
                            key={f.value}
                            onClick={() => {
                              setImageFormat(f.value);
                              setIsFormatOpen(false);
                            }}
                            className="w-full text-left px-4 py-2.5 text-sm transition-colors"
                            style={{
                              fontFamily: "'Poppins', sans-serif",
                              color: imageFormat === f.value ? "hsl(var(--pres-accent))" : "hsl(var(--pres-text-muted))",
                              background: imageFormat === f.value ? "hsl(var(--pres-accent) / 0.08)" : "transparent",
                            }}
                            onMouseEnter={(e) => {
                              if (imageFormat !== f.value) e.currentTarget.style.background = "hsl(var(--pres-bg-card))";
                            }}
                            onMouseLeave={(e) => {
                              if (imageFormat !== f.value) e.currentTarget.style.background = "transparent";
                            }}
                          >
                            {f.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={downloadCurrentSlide}
                  disabled={slideLoading !== null || isPdfLoading || isHtmlLoading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    background: "hsl(var(--pres-bg-surface))",
                    border: "1px solid hsl(var(--pres-accent) / 0.15)",
                    color: "hsl(var(--pres-text))",
                    cursor: slideLoading !== null || isPdfLoading || isHtmlLoading ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (slideLoading === null && !isPdfLoading && !isHtmlLoading) {
                      e.currentTarget.style.borderColor = "hsl(var(--pres-accent) / 0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "hsl(var(--pres-accent) / 0.15)";
                  }}
                >
                  {slideLoading !== null ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Capturing…
                    </>
                  ) : (
                    <>
                      <FileImage size={16} />
                      Download Slide {currentSlide + 1}
                    </>
                  )}
                </button>
              </div>

              <p
                className="text-center"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  color: "hsl(var(--pres-text-dim))",
                  lineHeight: 1.5,
                }}
              >
                PDF captures slides at 1920×1080 with retry logic.
                <br />
                Images export at 2× resolution for crisp output.
                {allowHtmlDownload && (
                  <>
                    <br />
                    HTML keeps live animations and transitions.
                  </>
                )}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
