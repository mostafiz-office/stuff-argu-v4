import alimImg from "@/assets/alim-updated.webp";
import marekImg from "@/assets/marek.webp";
import qrCodeImg from "@/assets/qr-code.png";
import logoImg from "@/assets/riseup-asia-logo.png";
import outageImg from "@/assets/problem-outage.jpg";
import fragileCodeImg from "@/assets/problem-fragile-code.jpg";
import hiringImg from "@/assets/problem-hiring.jpg";

// Every image any slide displays; downloaded and decoded at startup so later slides render instantly.
const SLIDE_IMAGES = [marekImg, logoImg, outageImg, fragileCodeImg, hiringImg, alimImg, qrCodeImg];
const kept: HTMLImageElement[] = [];

export const preloadSlideImages = () => {
  SLIDE_IMAGES.forEach((src, i) => {
    const img = new Image();
    if (i < 5) img.fetchPriority = "high";
    img.src = src;
    img.decode?.().catch(() => undefined);
    kept.push(img);
  });
};
