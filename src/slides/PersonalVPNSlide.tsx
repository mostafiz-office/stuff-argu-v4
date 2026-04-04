import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import personalVpnLogo from "@/assets/logos/personal-vpn.png";
import freebsdLogo from "@/assets/logos/freebsd.png";
import wireguardLogo from "@/assets/logos/wireguard.png";
import openvpnLogo from "@/assets/logos/openvpn.png";
import ikev2Logo from "@/assets/logos/ikev2-ipsec.png";

const fade = (i: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const } });

const techStack = [
  { logo: freebsdLogo, label: "FreeBSD" },
  { logo: wireguardLogo, label: "WireGuard" },
  { logo: openvpnLogo, label: "OpenVPN" },
  { logo: ikev2Logo, label: "IKEv2 / IPSec" },
];

const features = [
  "300+ servers across 29 countries",
  "Supports 8 devices simultaneously",
  "Offers 5+ VPN protocols",
  "Uses 256-bit AES encryption with 4096-bit key authentication",
  "24/7 in-house expert support",
  "30-day money-back guarantee",
];

export default function PersonalVPNSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden" style={{ background: 'hsl(var(--pres-bg))' }}>
        <SlideHeader />

        {/* Badge */}
        <motion.div {...fade(0)} className="absolute left-[80px] top-[120px]">
          <span className="px-7 py-2.5 rounded-full text-[18px] font-semibold" style={{ background: 'hsl(var(--pres-accent) / 0.2)', color: 'hsl(var(--pres-accent))', fontFamily: "'Poppins', sans-serif" }}>
            External Projects
          </span>
        </motion.div>

        {/* Left column */}
        <div className="absolute left-[80px] top-[180px]" style={{ width: 740 }}>
          <motion.div {...fade(1)}>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-lg" style={{ background: '#fff' }}>
                <img src={personalVpnLogo} alt="PersonalVPN" style={{ height: 56, width: 'auto' }} />
              </div>
            </div>
            <h1 className="mt-2" style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 68, fontWeight: 700, color: 'hsl(var(--pres-text))', lineHeight: 1.1 }}>
              Personal<span style={{ color: 'hsl(var(--pres-accent))' }}>VPN</span>
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))', marginTop: 6 }}>High Speed VPN Service</p>
          </motion.div>

          <motion.p {...fade(2)} className="mt-7" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.85, textAlign: 'justify' }}>
            PersonalVPN by WiTopia is a secure, high-speed VPN service with 300+ servers across 29 countries, supporting up to 8 devices and 5+ protocols including WireGuard and Stealth Mode. Our CEO worked on PersonalVPN. It uses 256-bit AES encryption with 4096-bit authentication, follows a strict no-logs policy, and provides 24/7 expert support. It also delivers up to 33% of base speed internationally and reliable access to streaming platforms like Netflix US/UK.
          </motion.p>

          {/* Technology Used */}
          <motion.div {...fade(3)} className="mt-10">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 600, color: 'hsl(var(--pres-text))', marginBottom: 18 }}>Technology Used</p>
            <div className="flex gap-5 w-full">
              {techStack.map((t) => (
                <div key={t.label} className="flex-1 px-4 py-3 rounded-xl flex flex-col items-center justify-center gap-2" style={{ background: 'hsl(var(--pres-bg-surface))', border: '1px solid hsl(var(--pres-accent) / 0.15)' }}>
                  <img src={t.logo} alt={t.label} style={{ height: 48, width: 'auto', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="absolute right-[80px] top-[180px]" style={{ width: 580 }}>
          {/* KPI */}
          <motion.div {...fade(2)} className="mb-10 rounded-2xl px-10 py-6 flex items-center gap-5" style={{ background: 'hsl(var(--pres-accent) / 0.15)' }}>
            <span style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 64, fontWeight: 700, color: 'hsl(var(--pres-accent))' }}>50K+</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, color: 'hsl(var(--pres-text))' }}>Downloads</span>
          </motion.div>

          {/* Key Features */}
          <motion.div {...fade(3)}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: 'hsl(var(--pres-text))', marginBottom: 14 }}>Key Features</p>
            <ul className="space-y-2.5">
              {features.map((f, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.08 }} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 19, color: 'hsl(var(--pres-text-muted))', lineHeight: 1.5 }}>
                  • {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </ScaledSlide>
  );
}
