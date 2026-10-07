import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Mail, Phone, ArrowRight } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import qrCodeImg from "@/assets/qr-code.png";

interface PricingCTASlideProps {
  onNavigate?: (index: number) => void;
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const btn =
  "presentation-action presentation-focus inline-flex items-center gap-4 px-9 py-4 rounded-full bg-pres-accent hover:bg-pres-accent-glow text-pres-bg pres-dark-safe-accent font-semibold text-[24px] shadow-[0_0_30px_rgba(255,173,1,0.35)] whitespace-nowrap";

export const PricingCTASlide: React.FC<PricingCTASlideProps> = () => (
  <ScaledSlide>
    <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
      <SlideHeader />
      <div className="absolute top-[30%] left-1/3 w-[900px] h-[600px] rounded-full bg-pres-accent/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 flex items-center gap-[140px]">
        <div className="w-[760px] flex flex-col items-start">
          <motion.p {...fade(0)} className="text-[22px] tracking-[0.25em] uppercase text-pres-text-dim mb-6">
            Ready to start?
          </motion.p>
          <motion.h1 {...fade(0.1)} className="text-[80px] font-bold font-heading leading-[1.08] tracking-tight mb-7">
            <span className="block">Let's Build Your</span>
            <span className="block text-pres-accent">Dream Team</span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="text-[26px] leading-[1.5] text-pres-text-muted mb-9">
            Schedule a 15-minute call. We'll match you with the right talent within days.
          </motion.p>
          <motion.a
            {...fade(0.3)}
            href="mailto:contact@riseup-asia.com"
            className="inline-flex items-center gap-3 text-[22px] text-pres-text-muted hover:text-white mb-9"
          >
            <Mail className="w-7 h-7 text-pres-accent" />
            contact@riseup-asia.com
          </motion.a>
          <div className="flex flex-col items-start gap-6">
            <motion.a {...fade(0.4)} href="https://meet.rasia.pro/intro-call" target="_blank" rel="noopener noreferrer" className={btn}>
              <CalendarCheck className="w-8 h-8" />
              Schedule a Call
              <ArrowRight className="w-7 h-7" />
            </motion.a>
            <motion.a {...fade(0.5)} href="https://call.rasia.pro/riseup-offical-v1" target="_blank" rel="noopener noreferrer" className={btn}>
              <Phone className="w-8 h-8" />
              Call Now
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="p-5 rounded-[32px] bg-pres-surface/80 border border-white/10">
            <div className="w-[340px] h-[340px] bg-white rounded-2xl p-5">
              <img src={qrCodeImg} alt="QR code to contact RiseUp Asia" className="w-full h-full object-contain" />
            </div>
          </div>
          <span className="text-[18px] text-pres-text-dim">Scan to connect</span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-pres-accent to-transparent opacity-80" />
    </div>
  </ScaledSlide>
);
