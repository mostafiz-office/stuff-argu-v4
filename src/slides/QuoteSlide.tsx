import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";

export default function QuoteSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />
        <div className="absolute inset-0 flex items-center justify-center px-[140px] z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-center" style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 42, fontStyle: 'italic', color: 'hsl(var(--pres-text))', lineHeight: 1.5 }}>
            Businesses will always need technology. But what's evolving, faster than ever, is <strong style={{ color: 'hsl(var(--pres-accent))' }}>how</strong> they build it, <strong style={{ color: 'hsl(var(--pres-accent))' }}>where</strong> they find talent, and <strong style={{ color: 'hsl(var(--pres-accent))' }}>what</strong> they expect back. Your offshore partner must evolve just as fast.
          </motion.p>
        </div>
      </div>
    </ScaledSlide>
  );
}
