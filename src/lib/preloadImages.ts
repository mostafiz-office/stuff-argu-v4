import alimImg from "@/assets/alim-updated.webp";
import marekImg from "@/assets/marek.webp";
import qrCodeImg from "@/assets/qr-code.png";
import logoImg from "@/assets/riseup-asia-logo.png";

// Every image any slide displays; downloaded and decoded at startup so later slides render instantly.
const SLIDE_IMAGES = [marekImg, logoImg, alimImg, qrCodeImg];
const kept: HTMLImageElement[] = [];

export const preloadSlideImages = () => {
  SLIDE_IMAGES.forEach((src, i) => {
    const img = new Image();
    if (i < 2) img.fetchPriority = "high";
    img.src = src;
    img.decode?.().catch(() => undefined);
    kept.push(img);
  });
};
