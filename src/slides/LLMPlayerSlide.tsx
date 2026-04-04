import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import llmPlayerLogo from "@/assets/logos/llm-player.png";
import llmPlayerScreenshot from "@/assets/llm-player-screenshot.png";
import llmPlayerQR from "@/assets/llm-player-qr.png";
import llmIcon from "@/assets/logos/llm-icon.png";
import objectboxLogo from "@/assets/logos/objectbox.png";
import flutterLogo from "@/assets/logos/flutter.png";

const fade = (i: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const } });

const features = [
  "Offline Chat", "Private Processing", "Fast Response", "Smarter Prompts",
  "Starter Models", "Easy Search", "Progress Tracking", "Model Library",
  "Bulk Download", "Storage Control", "Premium Access", "Dark Mode",
];

const techStack = [
  { name: "LLM", logo: llmIcon, invert: false },
  { name: "ObjectBox", logo: objectboxLogo, invert: true },
  { name: "Flutter", logo: flutterLogo, invert: false },
];

export default function LLMPlayerSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Internal Projects badge */}
        <motion.div {...fade(0)} className="absolute left-[80px] top-[120px] z-10">
          <span className="px-6 py-2 rounded-full text-[18px] font-semibold" style={{ fontFamily: "'Poppins', sans-serif", background: 'hsl(var(--pres-accent))', color: 'hsl(var(--pres-bg))' }}>
            Internal Projects
          </span>
        </motion.div>

        {/* Left column */}
        <div className="absolute left-[80px] top-[180px] z-10" style={{ width: 700 }}>
          <motion.div {...fade(1)} className="flex items-center gap-4">
            <img src={llmPlayerLogo} alt="LLM Player" style={{ height: 56, width: 56, borderRadius: 12 }} />
            <div>
              <h2 style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 52, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.1 }}>
                LLM Player
              </h2>
              <p className="mt-1" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: 'hsl(var(--pres-text-muted))' }}>
                100% Private & Offline AI Chat
              </p>
            </div>
          </motion.div>

          {/* Feature tags */}
          <motion.div {...fade(2)} className="flex flex-wrap gap-2 mt-5">
            {features.map(f => (
              <span key={f} className="px-4 py-1.5 rounded-full text-[15px]" style={{ fontFamily: "'Poppins', sans-serif", border: '1px solid hsl(var(--pres-text-muted) / 0.4)', color: 'hsl(var(--pres-text))' }}>
                {f}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p {...fade(3)} className="mt-7" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.75, textAlign: 'justify' }}>
            Most AI chat apps rely on cloud access, creating concerns around privacy, security, and data control. LLM Player Chat runs models locally and lets users switch models easily within a fast, lightweight, user-friendly interface. Ensures fully private conversations on-device while giving users more flexible and secure AI chat access.
          </motion.p>

          {/* Tech Used */}
          <motion.div {...fade(4)} className="mt-7">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: 'hsl(var(--pres-text))' }}>Technology Used</p>
            <div className="flex gap-5 mt-3 p-4 rounded-xl items-center w-full" style={{ background: 'hsl(var(--pres-bg-surface))', border: '1px solid hsl(41 100% 50% / 0.08)' }}>
              {techStack.map(t => (
                <div key={t.name} className="flex-1 flex flex-col items-center gap-2 py-2">
                  <img src={t.logo} alt={t.name} style={{ height: 48, width: 'auto', objectFit: 'contain', filter: t.invert ? 'brightness(0) invert(1)' : undefined }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="absolute right-[80px] top-[180px] z-10 flex flex-col" style={{ width: 540 }}>
          {/* KPI cards */}
          <motion.div {...fade(1)} className="flex gap-4 mb-6">
            <div className="flex-1 px-6 py-4 rounded-xl flex items-center gap-3" style={{ background: 'hsl(var(--pres-accent) / 0.15)', border: '1px solid hsl(var(--pres-accent) / 0.3)' }}>
              <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 42, fontWeight: 700, color: 'hsl(var(--pres-accent))' }}>500+</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'hsl(var(--pres-text))' }}>Downloads</span>
            </div>
            <div className="flex-1 px-6 py-4 rounded-xl flex items-center gap-3" style={{ background: 'hsl(var(--pres-accent) / 0.15)', border: '1px solid hsl(var(--pres-accent) / 0.3)' }}>
              <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 42, fontWeight: 700, color: 'hsl(var(--pres-accent))' }}>4.9</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'hsl(var(--pres-text))' }}>Rating</span>
            </div>
          </motion.div>

          {/* App Screenshot */}
          <motion.div {...fade(2)} className="flex justify-start">
            <img src={llmPlayerScreenshot} alt="LLM Player App Screenshots" style={{ maxHeight: 380, width: 'auto', objectFit: 'contain', borderRadius: 16 }} />
          </motion.div>

          {/* Google Play + QR */}
          <motion.div {...fade(4)} className="mt-5 flex items-center gap-5">
            <a href="https://play.google.com/store/apps/details?id=com.enyxd.llm_player" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={llmPlayerQR} alt="Download on Google Play" style={{ width: 100, height: 100, borderRadius: 10, background: '#fff', padding: 6 }} />
            </a>
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, color: 'hsl(var(--pres-text))' }}>Download on Google Play</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: 'hsl(var(--pres-text-muted))', marginTop: 2 }}>Scan QR code to install</p>
            </div>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
