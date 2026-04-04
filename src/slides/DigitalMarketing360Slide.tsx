import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Globe, Share2, Target, Mail } from "lucide-react";

const fade = (i: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.18 * i, duration: 0.7, ease: "easeOut" as const } });

const sections = [
  {
    icon: Globe,
    title: "Website & E-Commerce Solutions",
    items: [
      "Website development & ongoing management",
      "E-commerce site development with payment gateway",
      "Landing page design & A/B testing",
      "Speed optimization & UX improvements",
    ],
  },
  {
    icon: Share2,
    title: "Social Media & Outreach",
    items: [
      "Social media profile management (FB, IG, TikTok, LinkedIn)",
      "Social media ad campaigns & analytics",
      "Video content planning (Reels, Shorts, Stories)",
      "Community engagement strategies",
    ],
  },
  {
    icon: Target,
    title: "Performance Marketing & Lead Generation",
    items: [
      "Targeted lead generation campaigns",
      "Paid advertising (Meta Ads, Google Ads, YouTube Ads)",
      "Retargeting campaigns",
      "Conversion rate optimization",
    ],
  },
  {
    icon: Mail,
    title: "Email & Business Tools",
    items: [
      "Email marketing (newsletters, drip campaigns)",
      "Google Business Profile optimization",
      "Marketing automation setup",
      "Analytics and reporting dashboards",
      "Reputation & review management",
    ],
  },
];

export default function DigitalMarketing360Slide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Title */}
        <div className="absolute left-[80px] top-[110px] z-10" style={{ maxWidth: 1000 }}>
          <motion.h1 {...fade(0)} style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 54, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.1 }}>
            360° <span style={{ color: 'hsl(var(--pres-accent))' }}>Digital Marketing</span> Solution
          </motion.h1>
          <motion.p {...fade(1)} className="mt-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.5 }}>
            Your all-in-one partner for digital growth & performance
          </motion.p>
        </div>

        {/* 2x2 Grid */}
        <div className="absolute left-[80px] right-[80px] top-[260px] bottom-[40px] z-10 grid grid-cols-2 grid-rows-2 gap-6">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                {...fade(idx + 2)}
                className="flex flex-col"
                style={{
                  padding: '32px 36px',
                  borderRadius: 14,
                  background: 'hsl(var(--pres-bg-card) / 0.45)',
                  border: '1px solid hsl(var(--pres-text-dim) / 0.15)',
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: 'hsl(var(--pres-accent) / 0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={24} style={{ color: 'hsl(var(--pres-accent))' }} />
                  </div>
                  <h3 style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 26, fontWeight: 700, color: 'hsl(var(--pres-text))' }}>
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3 ml-1">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: 'hsl(var(--pres-accent))', fontSize: 18, marginTop: 4, flexShrink: 0 }}>•</span>
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 21, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Dotted dividers */}
        <div className="absolute left-1/2 top-[280px] bottom-[70px] z-[5]" style={{ borderLeft: '2px dashed hsl(var(--pres-text-dim) / 0.2)' }} />
        <div className="absolute left-[100px] right-[100px] top-1/2 z-[5] mt-[40px]" style={{ borderTop: '2px dashed hsl(var(--pres-text-dim) / 0.2)' }} />
      </div>
    </ScaledSlide>
  );
}
