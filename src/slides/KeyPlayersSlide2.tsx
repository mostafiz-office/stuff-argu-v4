import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

import marufPhoto from "@/assets/maruf.png";
import samiulPhoto from "@/assets/samiul.png";
import riashadPhoto from "@/assets/riashad.png";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 + i * 0.12, duration: 0.55, ease: "easeOut" as const },
});

const players = [
  {
    name: "Md Maruf Hossain",
    title: "Chief Marketing Officer",
    photo: marufPhoto,
    bio: "A financial strategist managing a USD 170M portfolio with a focus on growth and risk mitigation. Through data-driven marketing and macroeconomic analysis, he increased portfolio returns by 25%, reduced non-performing loans by 40%, and cut institutional client churn by 50%. He expanded market reach by 35%, boosted acquisitions by 15%, and added 20 new institutional clients, growing the corporate network by 25%.",
    highlights: ["USD 170M", "churn by 50%", "market reach by 35%"],
    linkedin: "https://www.linkedin.com/in/marufmaruf/",
    email: "mailto:maruf@riseup-asia.com",
  },
  {
    name: "Samiul Ahsan",
    title: "Cofounder & CFO",
    photo: samiulPhoto,
    bio: "Strategic CFO & Process Optimiser who has eliminated 70% of reporting delays, reduced transaction errors by 95%, and achieved 100% deadline compliance. Boosted client satisfaction by 45%, advisory engagements by 15%, release velocity by 50%, and quarterly revenue by 30% through financial automation, real-time analytics, and Lean Six Sigma process improvements.",
    highlights: ["70% of reporting delays", "errors by 95%", "revenue by 30%"],
    linkedin: "https://www.linkedin.com/in/samiul-ahsan-045a546",
    email: "mailto:samiul.ahsan@riseup-asia.com",
  },
  {
    name: "Riashad Noor",
    title: "Executive & Agri-Tech Expert",
    photo: riashadPhoto,
    bio: "Entrepreneurial tech leader with 50+ web projects and 15+ scalable IoT products delivered, cutting client costs by 20% and raising satisfaction by 30%. A pioneer in Bangladesh's Agri-Tech sector, he has deployed impactful solutions in smart greenhouses, poultry automation, and precision irrigation.",
    highlights: ["50+ web projects", "15+ scalable IoT products"],
    linkedin: "https://www.linkedin.com/in/riashadnoor/",
    email: "mailto:riashad.noor@riseup-asia.com",
  },
];

function HighlightedBio({ text, highlights }: { text: string; highlights: string[] }) {
  if (!highlights.length) return <>{text}</>;
  const regex = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) => {
        const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase());
        return isHighlight ? (
          <span
            key={i}
           style={{
              color: "hsl(var(--pres-text))",
              fontWeight: 700,
            }}
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

function PlayerCard({ player, index }: { player: typeof players[0]; index: number }) {
  return (
    <motion.div
      {...fade(index)}
      className="flex gap-4 rounded-2xl"
      style={{
        background: "hsl(var(--pres-bg-surface) / 0.4)",
        border: "1px solid hsl(var(--pres-accent) / 0.1)",
        padding: 14,
        height: 340,
      }}
    >
      <div
        className="flex-shrink-0 rounded-xl overflow-hidden"
        style={{ width: 250, height: "100%" }}
      >
        <img
          src={player.photo}
          alt={player.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="flex flex-col flex-1 min-w-0 justify-between" style={{ paddingTop: 2 }}>
        <div className="flex items-start justify-between">
          <div>
            <h3
              className="font-heading"
              style={{ fontSize: 36, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.15 }}
            >
              {player.name}
            </h3>
            <p
              className="font-body"
              style={{ fontSize: 24, color: "hsl(var(--pres-accent))", fontWeight: 600, marginTop: 4 }}
            >
              {player.title}
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <a href={player.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={30} color="hsl(var(--pres-accent))" className="hover:opacity-70 transition-opacity cursor-pointer" />
            </a>
            <a href={player.email}>
              <Mail size={30} color="hsl(var(--pres-accent))" className="hover:opacity-70 transition-opacity cursor-pointer" />
            </a>
          </div>
        </div>

        <p
          className="font-body flex-1"
          style={{
            fontSize: 18,
            color: "hsl(var(--pres-text-dim))",
            lineHeight: 1.5,
            marginTop: 10,
            textAlign: "justify",
          }}
        >
          <HighlightedBio text={player.bio} highlights={player.highlights} />
        </p>
      </div>
    </motion.div>
  );
}

export default function KeyPlayersSlide2() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, hsl(var(--pres-accent) / 0.015) 30px, hsl(var(--pres-accent) / 0.015) 31px)`,
        }} />

        <SlideHeader />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute"
          style={{ left: 60, top: 96 }}
        >
          <span
            className="font-heading inline-block rounded-full"
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: "hsl(var(--pres-bg))",
              background: "hsl(var(--pres-accent))",
              padding: "8px 34px",
            }}
          >
            Key Players
          </span>
        </motion.div>

        <div
          className="absolute grid grid-cols-2"
          style={{ left: 50, right: 50, top: 100, bottom: 30, gap: 16, columnGap: 30, alignContent: "center" }}
        >
          {players.map((p, i) => (
            <PlayerCard key={p.name} player={p} index={i} />
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}
