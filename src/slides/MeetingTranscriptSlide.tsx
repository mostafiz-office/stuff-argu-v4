import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import mtLogo from "@/assets/logos/meeting-transcript.png";
import mtUI1 from "@/assets/meeting-transcript-ui1.png";
import mtUI2 from "@/assets/meeting-transcript-ui2.png";
import mtQR from "@/assets/meeting-transcript-qr.png";
import whisperLogo from "@/assets/logos/whisper.png";
import llamaCppLogo from "@/assets/logos/llama-cpp.png";
import flutterLogo from "@/assets/logos/flutter.png";

const fade = (i: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const } });

const features = [
  "Unlimited Recording & Transcription", "Privacy Protection", "AI Summaries",
  "Clearer Audio", "Enhanced Voice", "Task Highlights", "Calendar Sync",
  "Meeting Capture", "Interview Notes", "Lecture Capture", "Quick Journaling",
];

export default function MeetingTranscriptSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <motion.div {...fade(0)} className="absolute left-[80px] top-[120px] z-10">
          <span className="px-6 py-2 rounded-full text-[18px] font-semibold" style={{ fontFamily: "'Poppins', sans-serif", background: 'hsl(var(--pres-accent))', color: 'hsl(var(--pres-bg))' }}>
            Recent Projects
          </span>
        </motion.div>

        {/* Left column */}
        <div className="absolute left-[80px] top-[180px] z-10" style={{ width: 740 }}>
          <motion.div {...fade(1)} className="flex items-center gap-4">
            <img src={mtLogo} alt="Meeting Transcript" style={{ height: 56, width: 56, borderRadius: 12 }} />
            <div>
              <h2 style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 52, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.1 }}>
                Meeting Transcript
              </h2>
              <p className="mt-1" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: 'hsl(var(--pres-text-muted))' }}>
                Built for long conversations. No limits.
              </p>
            </div>
          </motion.div>

          <motion.div {...fade(2)} className="flex flex-wrap gap-2 mt-5">
            {features.map(f => (
              <span key={f} className="px-4 py-1.5 rounded-full text-[15px]" style={{ fontFamily: "'Poppins', sans-serif", border: '1px solid hsl(var(--pres-text-muted) / 0.4)', color: 'hsl(var(--pres-text))' }}>
                {f}
              </span>
            ))}
          </motion.div>

          <motion.p {...fade(3)} className="mt-7" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.75, textAlign: 'justify' }}>
            Most transcription apps rely on cloud processing, raising concerns about privacy, security, and data control. It solves by delivering fast, accurate speech-to-text conversion in a simple, user-friendly interface. Convert audio to text seamlessly, organize transcripts with ease, and boost productivity whether for meetings, lectures, interviews, or content creation.
          </motion.p>

          <motion.div {...fade(4)} className="mt-7">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: 'hsl(var(--pres-text))' }}>Technology Used</p>
            <div className="flex gap-5 mt-3 p-4 rounded-xl items-center w-full" style={{ background: 'hsl(var(--pres-bg-surface))', border: '1px solid hsl(41 100% 50% / 0.08)' }}>
              {[{ name: "Whisper", logo: whisperLogo, invert: true }, { name: "LLaMA C++", logo: llamaCppLogo, invert: false }, { name: "Flutter", logo: flutterLogo, invert: false }].map(t => (
                <div key={t.name} className="flex-1 flex flex-col items-center gap-2 py-2">
                  <img src={t.logo} alt={t.name} style={{ height: 48, width: 'auto', objectFit: 'contain', filter: t.invert ? 'brightness(0) invert(1)' : undefined }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="absolute right-[80px] top-[180px] z-10 flex flex-col" style={{ width: 580 }}>
          {/* App Screenshots in Phone Frames */}
          <motion.div {...fade(2)} className="flex gap-6 justify-start">
            {[{ src: mtUI1, alt: "Timeline" }, { src: mtUI2, alt: "Recording" }].map((img) => (
              <div key={img.alt} className="relative" style={{ width: 220, height: 440 }}>
                <div className="absolute inset-0 rounded-[28px]" style={{ background: '#1a1a1a', border: '3px solid #333', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                  <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[56px] h-[5px] rounded-full" style={{ background: '#333' }} />
                  <div className="absolute top-[18px] left-[6px] right-[6px] bottom-[18px] rounded-[22px] overflow-hidden" style={{ background: '#000' }}>
                    <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="absolute bottom-[7px] left-1/2 -translate-x-1/2 w-[40px] h-[4px] rounded-full" style={{ background: '#444' }} />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Google Play + QR */}
          <motion.div {...fade(4)} className="mt-6 flex items-center gap-5">
            <a href="https://play.google.com/store/apps/details?id=com.enyxd.transcript" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={mtQR} alt="Download on Google Play" style={{ width: 130, height: 130, borderRadius: 12, background: '#fff', padding: 8 }} />
            </a>
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 600, color: 'hsl(var(--pres-text))' }}>Download on Google Play</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: 'hsl(var(--pres-text-muted))', marginTop: 2 }}>Scan QR code to install</p>
            </div>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
