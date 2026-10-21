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

/**
 * Slide 13 — Contact / closing CTA.
 *
 * Batch 76 (owner direction, Oct 21 2026): CONTENT unchanged from the
 * previous build (eyebrow, "Let's Build Your Dream Team", subline,
 * email, Schedule a Call / Call Now, our QR + "Scan to connect").
 * DESIGN rebuilt to present-v1 slide 26 (its Contact slide, spec
 * "Slide 35 — Contact" in that deck): QR card on the LEFT, content
 * column on the RIGHT; white QR card with a thin gold border; gold
 * underline bar under the headline; contact rows with dark icon
 * badges; golden radial glow + halftone dot texture behind the
 * right-hand content.
 */
export const PricingCTASlide: React.FC<PricingCTASlideProps> = () => (
  <ScaledSlide>
    <div className="slide-dark-bg relative w-[1920px] h-[1080px] overflow-hidden text-white font-sans flex items-center justify-center">
      <SlideHeader />

      {/* Golden radial glow behind the right-hand content */}
      <div className="absolute top-1/2 right-[110px] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pres-accent/10 blur-[120px] pointer-events-none" />

      {/* Halftone dot texture, right half (reference design detail) */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1.6px)",
          backgroundSize: "12px 12px",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 55% 50%, black 25%, transparent 72%)",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 55% 50%, black 25%, transparent 72%)",
        }}
      />

      <div className="relative z-10 flex items-center gap-[80px]">
        {/* LEFT — QR card in the reference style: white card, thin gold border */}
        <motion.div {...scaleIn(0.1)} className="flex flex-col items-center gap-5 w-[412px] shrink-0">
          <div className="bg-white rounded-[24px] border-2 border-pres-accent/80 p-4 shadow-[0_0_70px_rgba(255,173,1,0.14)]">
            <img
              src={qrCodeImg}
              alt="QR code to contact RISE ASIA LLC"
              className="w-[380px] h-[380px] object-contain block"
            />
          </div>
          <span className="text-[20px] text-pres-text-dim">Scan to connect</span>
        </motion.div>

        {/* RIGHT — content column */}
        <div className="w-[700px] flex flex-col items-start">
          <motion.p {...fadeUp(0, 14)} className="text-[22px] tracking-[0.25em] uppercase text-pres-text-dim mb-6">
            Ready to start?
          </motion.p>
          <motion.h1 {...fadeUp(0.08)} className="text-[80px] font-bold font-heading leading-[1.08] tracking-tight text-white mb-6">
            <span className="block">Let's Build Your</span>
            <span className="block">Dream Team</span>
          </motion.h1>
          {/* Short gold underline bar (reference headline treatment) */}
          <motion.div {...fadeUp(0.14, 8)} className="w-[80px] h-[6px] rounded-full bg-pres-accent mb-8" />
          <motion.p {...fadeUp(0.2)} className="text-[26px] leading-[1.5] text-pres-text-muted mb-9">
            Book a call and get matched with the right talent in days.
          </motion.p>
          <motion.a
            {...fadeUp(0.28, 12)}
            href="mailto:contact@riseup-asia.com"
            className="inline-flex items-center gap-4 text-[22px] text-pres-text-muted hover:text-white mb-10"
          >
            <span className="w-[52px] h-[52px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-pres-accent" />
            </span>
            contact@riseup-asia.com
          </motion.a>
          <div className="flex flex-col items-start gap-5">
            <motion.div {...fadeUp(0.36, 12)}>
              <DeckButton href="https://meet.rasia.pro/intro-call" target="_blank" rel="noopener noreferrer" className="w-[400px]">
                <CalendarCheck className="w-[18px] h-[18px]" />
                Schedule a Call
                <ArrowRight className="w-[18px] h-[18px]" />
              </DeckButton>
            </motion.div>
            <motion.div {...fadeUp(0.44, 12)}>
              <DeckButton href="https://call.rasia.pro/riseup-offical-v1" target="_blank" rel="noopener noreferrer" className="w-[400px]">
                <Phone className="w-[18px] h-[18px]" />
                Call Now
              </DeckButton>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </ScaledSlide>
);
