import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Mail, Phone, ArrowRight } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import qrCodeImg from "@/assets/qr-code.png";

interface PricingCTASlideProps {
  onNavigate?: (index: number) => void;
}

export const PricingCTASlide: React.FC<PricingCTASlideProps> = () => {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
        <SlideHeader />

        {/* Dot pattern background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--pres-accent) / 0.15) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-pres-accent/8 blur-[180px] pointer-events-none" />

        {/* Center Content Flex (Left: Text & CTAs, Right: QR Code) */}
        <div className="relative z-10 flex items-center justify-between w-[1500px] gap-20">
          {/* Left Block */}
          <div className="flex-1 max-w-[850px] flex flex-col items-start justify-center">
            {/* Headline: Exactly 3 Clean, High-Impact Lines */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-[46px] font-bold font-heading leading-[1.18] tracking-tight text-white mb-4"
            >
              <span className="block whitespace-nowrap">Stop Debugging Alone at Midnight.</span>
              <span className="block whitespace-nowrap">Fix Fragile Vibe Code.</span>
              <span className="block text-pres-accent whitespace-nowrap">Deploy Senior Engineers This Week.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[17px] text-pres-text-muted mb-7 max-w-[650px] leading-relaxed"
            >
              Save 80% hiring effort. Book a 15-minute intro call to unblock your roadmap with dedicated senior talent.
            </motion.p>

            {/* Contact Block: Action Buttons Side-by-Side, with Email below */}
            <div className="flex flex-col items-start gap-5 w-full">
              {/* 1. Side-by-Side Action Buttons */}
              <div className="flex flex-row items-center gap-4 flex-nowrap">
                {/* Schedule a Call Button */}
                <motion.a
                  href="https://meet.rasia.pro/intro-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-pres-accent hover:bg-pres-accent-glow text-pres-bg pres-dark-safe-accent font-semibold text-[19px] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,173,1,0.35)] shrink-0 whitespace-nowrap cursor-pointer"
                >
                  <CalendarCheck className="w-5 h-5 text-pres-bg pres-dark-safe-accent shrink-0" />
                  <span>Schedule a Call</span>
                  <ArrowRight className="w-5 h-5 text-pres-bg pres-dark-safe-accent shrink-0 ml-0.5" />
                </motion.a>

                {/* Call Now Button */}
                <motion.a
                  href="https://client.rasia.pro/hiring-v1"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-pres-accent hover:bg-pres-accent-glow text-pres-bg pres-dark-safe-accent font-semibold text-[19px] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,173,1,0.35)] shrink-0 whitespace-nowrap cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-pres-bg pres-dark-safe-accent shrink-0 fill-current" />
                  <span>Call Now</span>
                </motion.a>
              </div>

              {/* 2. Direct Email Contact Link */}
              <motion.a
                href="mailto:contact@riseup-asia.com"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="inline-flex items-center gap-3 text-[17px] text-pres-text-muted hover:text-white transition-colors cursor-pointer group pt-1"
              >
                <div className="w-8 h-8 rounded-full bg-pres-accent/15 group-hover:bg-pres-accent/25 flex items-center justify-center text-pres-accent transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono text-[16px]">contact@riseup-asia.com</span>
              </motion.a>
            </div>
          </div>

          {/* Right Block: QR Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center p-8 rounded-3xl bg-pres-surface/80 border border-pres-accent/25 shadow-2xl backdrop-blur-md"
          >
            <div className="w-[280px] h-[280px] bg-white rounded-2xl p-4 flex items-center justify-center shadow-inner mb-4">
              <img
                src={qrCodeImg}
                alt="QR Code"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-base font-semibold text-white tracking-wide">
              Scan to connect
            </span>
            <span className="text-xs text-pres-text-dim mt-1">
              Direct mobile booking &amp; details
            </span>
          </motion.div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
      </div>
    </ScaledSlide>
  );
};
