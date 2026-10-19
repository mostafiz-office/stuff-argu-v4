import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Mail, Phone, ArrowRight } from "lucide-react";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import qrCodeImg from "@/assets/qr-code.png";
import { fadeUp, scaleIn } from "@/lib/presentationMotion";
import { DeckButton } from "@/components/presentation/DeckButton";

interface PricingCTASlideProps {
  onNavigate?: (index: number) => void;
}

export const PricingCTASlide: React.FC<PricingCTASlideProps> = () => (
  <ScaledSlide>
    <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
      <SlideHeader />
      <div className="absolute top-[30%] left-1/3 w-[900px] h-[600px] rounded-full bg-pres-accent/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 flex items-center gap-[140px]">
        <div className="w-[760px] flex flex-col items-start">
          <motion.p {...fadeUp(0, 14)} className="text-[22px] tracking-[0.25em] uppercase text-pres-text-dim mb-6">
            Ready to start?
          </motion.p>
          <motion.h1 {...fadeUp(0.08)} className="text-[80px] font-bold font-heading leading-[1.08] tracking-tight mb-7">
            <span className="block">Let's Build Your</span>
            <span className="block text-pres-accent">Dream Team</span>
          </motion.h1>
          <motion.p {...fadeUp(0.16)} className="text-[26px] leading-[1.5] text-pres-text-muted mb-9">
            Schedule a 15-minute call. We'll match you with the right talent within days.
          </motion.p>
          <motion.a
            {...fadeUp(0.24, 12)}
            href="mailto:contact@riseup-asia.com"
            className="inline-flex items-center gap-3 text-[22px] text-pres-text-muted hover:text-white mb-9"
          >
            <Mail className="w-7 h-7 text-pres-accent" />
            contact@riseup-asia.com
          </motion.a>
          <div className="flex flex-col items-start gap-6">
            <motion.div {...fadeUp(0.32, 12)}>
              <DeckButton href="https://meet.rasia.pro/intro-call" target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="w-8 h-8" />
                Schedule a Call
                <ArrowRight className="w-7 h-7" />
              </DeckButton>
            </motion.div>
            <motion.div {...fadeUp(0.4, 12)}>
              <DeckButton href="https://call.rasia.pro/riseup-offical-v1" target="_blank" rel="noopener noreferrer">
                <Phone className="w-8 h-8" />
                Call Now
              </DeckButton>
            </motion.div>
          </div>
        </div>

        <motion.div
          {...scaleIn(0.28)}
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
