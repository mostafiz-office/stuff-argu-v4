import ScaledSlide from "@/components/presentation/ScaledSlide";
import { motion } from "framer-motion";
export default function ThankYouSlide() {
  return (<ScaledSlide><div className="slide-dark-bg relative w-full h-full overflow-hidden"><div className="absolute inset-0 flex flex-col items-center justify-center z-10"><motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 120, fontWeight: 700, fontStyle: 'italic', color: 'hsl(var(--pres-text))' }}>Thank <span style={{ color: 'hsl(var(--pres-accent))' }}>you</span></motion.h1><motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-6" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 24, color: 'hsl(var(--pres-text-muted))' }}>Let's build something amazing together.</motion.p></div></div></ScaledSlide>);
}
