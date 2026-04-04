import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

import nafehPhoto from "@/assets/nafeh.png";
import marekPhoto from "@/assets/marek.png";
import erfanPhoto from "@/assets/erfan.png";
import kishwarPhoto from "@/assets/kishwar.png";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.18 + i * 0.12, duration: 0.55, ease: "easeOut" as const },
});

const players = [
  {
    name: "Nafeh Mosharraf",
    title: "Cofounder & CTO",
    photo: nafehPhoto,
    bio: "A growth-focused tech leader who aligns engineering with business goals to drive measurable impact. He delivered a 40% increase in feature delivery, 30% lower operational costs, and a 25% revenue boost in just six months. His strategies eliminated 15%+ project overruns, improved efficiency by 35%, and cut defects by 50%. With deep technical insight, Nafeh has transformed underperforming platforms into scalable, revenue-driving systems achieving 30% YoY growth.",
    highlights: ["40% increase", "25% revenue boost", "30% YoY growth"],
    linkedin: "https://linkedin.com/in/nafehm",
    email: "mailto:nafeh@riseup-asia.com",
  },
  {
    name: "Kishwar Ifrit",
    title: "Cofounder & CMO",
    photo: kishwarPhoto,
    bio: "A biomedical professional with 6+ years in the Australian MedTech sector, combining clinical trial expertise, technical sales, and customer service. He reduced logistics costs by 30%, co-authored a successful MRFF 2020 grant, and built a 500+ publication scientific library to strengthen market positioning. With 2 peer-reviewed publications, hands-on operating theatre and clinical trial support, Kishwar consistently drives both scientific credibility and commercial growth.",
    highlights: ["6+ years", "500+ publication"],
    linkedin: "https://linkedin.com/in/kishwarifrit",
    email: "mailto:kishwar.ifrit@riseup-asia.com",
  },
  {
    name: "Marek Flejszman",
    title: "Senior Director, Engineering",
    photo: marekPhoto,
    bio: "With 28+ years in software leadership, Marek is an MBA and former manager at Crossover.com who led global teams and oversaw a $30M+ partner network. He engineered the backend for Poland's first national COVID-19 remote health program, PulsoCare, serving 38M citizens. Marek has delivered systems for 4+ global enterprises including Storytel and Spire Healthcare, and optimized 20+ products in ESW Capital's multi-million-dollar portfolio.",
    highlights: ["28+ years", "$30M+ partner network", "38M citizens"],
    linkedin: "https://www.linkedin.com/in/marekflejszman",
    email: "mailto:marek.flejszman@riseup-asia.com",
  },
  {
    name: "Md Erfan Ershad",
    title: "Chief Information Officer",
    photo: erfanPhoto,
    bio: "Technical Project Manager LII at Microsoft and a certified Agile Scrum Master with 13+ years' experience. He has delivered 100+ projects worth $18.5M for Microsoft, Walmart, and CVS Pharmacy. Erfan led $1.7M cloud initiatives supporting 35M+ monthly calls, executed 75+ security projects securing 4,500+ cloud assets, and cut OpEx by 40%. His zero-cost automation tool reduced budget processing time by 80%, saving thousands of hours annually.",
    highlights: ["100+ projects", "$18.5M", "cut OpEx by 40%"],
    linkedin: "https://www.linkedin.com/in/mderfan-ershad/",
    email: "mailto:erfan.ershad@riseup-asia.com",
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

export default function KeyPlayersSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, hsl(var(--pres-accent) / 0.015) 30px, hsl(var(--pres-accent) / 0.015) 31px)`,
        }} />

        <SlideHeader />

        {/* Title */}
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

        {/* 2×2 Grid */}
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
