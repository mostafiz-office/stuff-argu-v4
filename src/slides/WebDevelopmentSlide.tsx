import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Smartphone, Layout } from "lucide-react";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" as const },
});

const services = [
  { icon: Globe, title: "Website Development", desc: "High-performing websites that elevate brands and drive results." },
  { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Custom Shopify, WooCommerce & headless commerce platforms." },
  { icon: Smartphone, title: "Progressive Web Apps", desc: "Offline-capable apps with native-like experience." },
  { icon: Layout, title: "CMS & Landing Pages", desc: "WordPress, Strapi, Contentful — fast to launch, easy to manage." },
];

// Donut chart data
const chartData = [
  { label: "React / Next.js", value: 38, color: "hsl(var(--pres-accent))" },
  { label: "WordPress", value: 22, color: "hsl(var(--pres-text))" },
  { label: "Shopify", value: 18, color: "hsl(var(--pres-accent) / 0.6)" },
  { label: "Custom Stack", value: 14, color: "hsl(var(--pres-text-muted))" },
  { label: "Other CMS", value: 8, color: "hsl(var(--pres-text-dim))" },
];

function DonutChart() {
  const total = chartData.reduce((s, d) => s + d.value, 0);
  const cx = 220, cy = 220, r = 180, inner = 110;
  let cumulative = 0;

  const slices = chartData.map((d) => {
    const startAngle = (cumulative / total) * 360 - 90;
    cumulative += d.value;
    const endAngle = (cumulative / total) * 360 - 90;
    const midAngle = ((startAngle + endAngle) / 2) * (Math.PI / 180);

    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    const toRad = (deg: number) => (deg * Math.PI) / 180;

    const outerStart = { x: cx + r * Math.cos(toRad(startAngle)), y: cy + r * Math.sin(toRad(startAngle)) };
    const outerEnd = { x: cx + r * Math.cos(toRad(endAngle)), y: cy + r * Math.sin(toRad(endAngle)) };
    const innerStart = { x: cx + inner * Math.cos(toRad(endAngle)), y: cy + inner * Math.sin(toRad(endAngle)) };
    const innerEnd = { x: cx + inner * Math.cos(toRad(startAngle)), y: cy + inner * Math.sin(toRad(startAngle)) };

    const path = `M ${outerStart.x} ${outerStart.y} A ${r} ${r} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y} L ${innerStart.x} ${innerStart.y} A ${inner} ${inner} 0 ${largeArc} 0 ${innerEnd.x} ${innerEnd.y} Z`;

    const labelR = r + 28;
    const labelX = cx + labelR * Math.cos(midAngle);
    const labelY = cy + labelR * Math.sin(midAngle);

    return { ...d, path, labelX, labelY, midAngle };
  });

  return (
    <div className="relative" style={{ width: 540, height: 500 }}>
      <svg width="540" height="500" viewBox="0 0 540 500">
        {slices.map((s, i) => (
          <motion.path
            key={s.label}
            d={s.path}
            fill={s.color}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            stroke="hsl(var(--pres-bg))"
            strokeWidth="2"
          />
        ))}
        {/* Center text */}
        <text x={cx} y={cy - 12} textAnchor="middle" fill="hsl(var(--pres-accent))" fontSize="42" fontWeight="700" fontFamily="'Ubuntu', sans-serif">
          68+
        </text>
        <text x={cx} y={cy + 22} textAnchor="middle" fill="hsl(var(--pres-text-muted))" fontSize="18" fontFamily="'Poppins', sans-serif">
          Projects Delivered
        </text>
      </svg>

      {/* Labels */}
      {slices.map((s, i) => {
        const isRight = s.labelX > cx;
        const lineEndX = isRight ? s.labelX + 50 : s.labelX - 50;
        return (
          <motion.div
            key={s.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
            className="absolute font-body"
            style={{
              left: isRight ? s.labelX + 14 : undefined,
              right: isRight ? undefined : 540 - s.labelX + 14,
              top: s.labelY - 14,
              textAlign: isRight ? "left" : "right",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 600, color: s.color }}>{s.value}%</span>
            <span style={{ fontSize: 16, color: "hsl(var(--pres-text-muted))", marginLeft: 6 }}>{s.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function WebDevelopmentSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        {/* Crosshatch */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.04) 28px, hsl(var(--pres-accent) / 0.04) 29px),
              repeating-linear-gradient(-45deg, transparent, transparent 28px, hsl(var(--pres-accent) / 0.04) 28px, hsl(var(--pres-accent) / 0.04) 29px)
            `,
          }}
        />

        {/* Glow */}
        <div
          className="absolute z-[1]"
          style={{
            right: 100, top: 120, width: 600, height: 600,
            background: "radial-gradient(ellipse at center, hsl(var(--pres-accent) / 0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* LEFT — Title + Service cards */}
        <div
          className="absolute left-[80px] top-[80px] bottom-[60px] z-10 flex items-center"
          style={{ width: 820 }}
        >
          <div className="w-full">
            <motion.h1
              {...fade(0)}
              className="font-heading"
              style={{ fontSize: 88, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.02 }}
            >
              <span style={{ color: "hsl(var(--pres-accent))" }}>Web</span><br />Development
            </motion.h1>

            <motion.p
              {...fade(1)}
              className="font-body"
              style={{ marginTop: 24, fontSize: 24, color: "hsl(var(--pres-text-muted))", lineHeight: 1.6, maxWidth: 620 }}
            >
              Built to rank. Designed to convert. Websites and SEO for{" "}
              <strong style={{ color: "hsl(var(--pres-accent))" }}>measurable growth</strong>.
            </motion.p>

            {/* Service cards grid */}
            <div className="grid grid-cols-2 mt-8" style={{ gap: 16, maxWidth: 780 }}>
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-xl"
                  style={{
                    padding: "20px 22px",
                    border: "1px solid hsl(var(--pres-accent) / 0.18)",
                    background: "hsl(var(--pres-accent) / 0.04)",
                  }}
                >
                  <s.icon size={28} style={{ color: "hsl(var(--pres-accent))", marginBottom: 10 }} />
                  <p className="font-body" style={{ fontSize: 20, fontWeight: 600, color: "hsl(var(--pres-text))" }}>
                    {s.title}
                  </p>
                  <p className="font-body" style={{ fontSize: 17, color: "hsl(var(--pres-text-dim))", lineHeight: 1.5, marginTop: 4 }}>
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Donut chart */}
        <div
          className="absolute z-10 flex items-center justify-center"
          style={{ right: 40, top: 80, bottom: 60, width: 640 }}
        >
          <div>
            <motion.p
              {...fade(1)}
              className="font-heading italic"
              style={{ fontSize: 30, color: "hsl(var(--pres-text))", textAlign: "center", marginBottom: 4 }}
            >
              Technology We Used
            </motion.p>
            <motion.p
              {...fade(2)}
              className="font-body"
              style={{ fontSize: 17, color: "hsl(var(--pres-text-dim))", textAlign: "center", marginBottom: 16 }}
            >
              Project distribution by framework
            </motion.p>
            <DonutChart />
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: 4,
            background: "linear-gradient(90deg, hsl(var(--pres-accent)) 0%, hsl(var(--pres-accent) / 0.3) 50%, transparent 100%)",
          }}
        />
      </div>
    </ScaledSlide>
  );
}
