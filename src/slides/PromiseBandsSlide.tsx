import React from "react";
import { motion } from "framer-motion";
import { ScaledSlide } from "@/components/presentation/ScaledSlide";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { fadeUp, staggerDelay } from "@/lib/presentationMotion";

type Band = {
  index: string;
  before: string;
  emphasis: string;
  after: string;
};

interface PromiseBandsProps {
  eyebrow: string;
  title: React.ReactNode;
  bands: Band[];
}

const PromiseBands: React.FC<PromiseBandsProps> = ({ eyebrow, title, bands }) => {
  return (
    <ScaledSlide>
      <section className="slide-dark-bg relative h-[1080px] w-[1920px] overflow-hidden font-sans text-pres-text">
        <SlideHeader />

        <div className="pointer-events-none absolute left-1/2 top-[620px] h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-pres-accent/5 blur-[170px]" />

        <div className="absolute left-[80px] top-[146px] z-20">
          <motion.div
            {...fadeUp(0.03, 16)}
            className="font-body text-[22px] font-semibold uppercase tracking-[0.3em] text-pres-text-muted"
          >
            {eyebrow}
          </motion.div>
          <motion.h1
            {...fadeUp(0.09, 24)}
            className="font-heading mt-[14px] text-[92px] font-bold leading-[1.04]"
          >
            {title}
          </motion.h1>
        </div>

        <div className="absolute bottom-[120px] left-[80px] right-[80px] top-[390px] z-20 flex flex-col justify-between">
          {bands.map((band, i) => (
            <motion.div
              key={band.index}
              {...fadeUp(staggerDelay(i, 0.16, 0.07), 26)}
              className="promise-band"
            >
              <span className="promise-band-index font-heading">{band.index}</span>
              <span className="promise-band-rule" aria-hidden="true" />
              <p className="font-heading text-[60px] font-bold leading-[1.12]">
                {band.before}
                <span className="text-pres-accent">{band.emphasis}</span>
                {band.after}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </ScaledSlide>
  );
};

export const DeliveryPromisesSlide: React.FC = () => (
  <PromiseBands
    eyebrow="Delivery"
    title="What you get"
    bands={[
      { index: "01", before: "Hiring solved in ", emphasis: "15 to 21 days", after: "" },
      { index: "02", before: "Our engineers ", emphasis: "never", after: " miss a deadline" },
      { index: "03", before: "The ", emphasis: "shortest path", after: " to the correct answer" },
    ]}
  />
);

export const ProductHealthSlide: React.FC = () => (
  <PromiseBands
    eyebrow="Product Health"
    title="Built to stay stable"
    bands={[
      { index: "01", before: "", emphasis: "Stable, secure", after: " product improvements" },
      { index: "02", before: "", emphasis: "No instability", after: ", no churn, no rewrites" },
      { index: "03", before: "", emphasis: "Root cause", after: " analysis, not symptom patching" },
    ]}
  />
);
