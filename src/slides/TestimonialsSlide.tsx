import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Quote, ExternalLink } from "lucide-react";
import { useState } from "react";
import claudioImg from "@/assets/testimonials/claudio-c.png";
import gaborImg from "@/assets/testimonials/gabor-s.png";
import alexanderImg from "@/assets/testimonials/alexander-n.png";
import gennadyImg from "@/assets/testimonials/gennady-n.png";

interface Rec {
  segments: { text: string; bold?: boolean }[];
  name: string;
  title: string;
  linkedIn: string;
  image: string;
}

const leftRecs: Rec[] = [
  {
    segments: [
      { text: "Oversee and collaborate with multiple teams across " },
      { text: "high-complexity projects", bold: true },
      { text: " at intense pace with tight deadlines. Paramount to count on professionals like Alim, who can take candid feedback and bring back " },
      { text: "great results", bold: true },
      { text: ". A skillful professional and kind communicator." },
    ],
    name: "Claudio C.",
    title: "Engineering Leader | AI-Powered Platforms Serving 10M+ Users",
    linkedIn: "https://www.linkedin.com/in/alimkarim/details/recommendations/?detailScreenTabIndex=0",
    image: claudioImg,
  },
  {
    segments: [
      { text: "One of the most committed members of my unit test automation team. " },
      { text: "Single-handedly drove the C# division", bold: true },
      { text: ", managing both engineering work and the developer bootcamp in parallel. I strongly recommend him." },
    ],
    name: "Gabor Szekeres",
    title: "Engineering Manager at Instructure",
    linkedIn: "https://www.linkedin.com/in/alimkarim/details/recommendations/?detailScreenTabIndex=0",
    image: gaborImg,
  },
];

const rightRecs: Rec[] = [
  {
    segments: [
      { text: "Joined an innovated project about a static code analyser that he led. His way of organizing the " },
      { text: "knowledge base, architecture decisions, and innovation mindset", bold: true },
      { text: " were reasons of success. Alim always went out of his way to help the team, providing technical and product coaching." },
    ],
    name: "Alexander Netrebskii",
    title: "CTO / Solutions Architect / Principal Engineer",
    linkedIn: "https://www.linkedin.com/in/alimkarim/details/recommendations/?detailScreenTabIndex=0",
    image: alexanderImg,
  },
  {
    segments: [
      { text: "He's smart and opinionated, passionate and eager to get the work done. I strongly recommend Alim as a " },
      { text: "deep-thinking and problem-oriented professional", bold: true },
      { text: ", which can bring great innovation ideas to any team." },
    ],
    name: "Gennady N.",
    title: "CTO | Senior Software Architect | Cloud Native | AI Solutions",
    linkedIn: "https://www.linkedin.com/in/alimkarim/details/recommendations/?detailScreenTabIndex=0",
    image: gennadyImg,
  },
];

const CARD_WIDTH = 620;
const STACK_WIDTH = 820;
const LEFT_STACK_LEFT = 70;
const RIGHT_STACK_LEFT = 890;
const stackPositions = [
  { x: 0, y: 60, rotate: -3, z: 1 },
  { x: 170, y: 100, rotate: 2.5, z: 2 },
];

function ProfileAvatar({ src, name }: { src: string; name: string }) {
  return (
    <div
      className="rounded-full shrink-0 overflow-hidden"
      style={{
        width: 56,
        height: 56,
        border: "2px solid hsl(41 100% 50% / 0.3)",
      }}
    >
      <img src={src} alt={name} className="w-full h-full object-cover" />
    </div>
  );
}

function Card3D({ r, pos, i }: { r: Rec; pos: typeof stackPositions[0]; i: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const floatKeyframes = {
    y: [0, -6, 0, 4, 0],
    rotateZ: [pos.rotate, pos.rotate - 0.5, pos.rotate, pos.rotate + 0.5, pos.rotate],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateZ: pos.rotate }}
      animate={
        isHovered
          ? {
              opacity: 1,
              y: -10,
              scale: 1.06,
              rotateZ: 0,
              rotateX: -3,
              rotateY: 5,
              zIndex: 50,
            }
          : {
              opacity: 1,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
              zIndex: pos.z,
              ...floatKeyframes,
            }
      }
      transition={
        isHovered
          ? {
              scale: { duration: 0.35, ease: "easeOut" },
              rotateZ: { duration: 0.35, ease: "easeOut" },
              rotateX: { duration: 0.35, ease: "easeOut" },
              rotateY: { duration: 0.35, ease: "easeOut" },
              y: { duration: 0.35, ease: "easeOut" },
            }
          : {
              y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.35, ease: "easeOut" },
              rotateX: { duration: 0.35, ease: "easeOut" },
              rotateY: { duration: 0.35, ease: "easeOut" },
            }
      }
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="absolute flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{
        left: pos.x,
        top: pos.y,
        width: CARD_WIDTH,
        background: "hsl(var(--pres-bg-surface))",
        border: "1px solid hsl(41 100% 50% / 0.08)",
        boxShadow: isHovered
          ? "0 30px 60px -12px hsl(41 100% 50% / 0.25), 0 18px 36px -18px rgba(0,0,0,0.5)"
          : "0 15px 35px -5px rgba(0,0,0,0.4), 0 5px 15px rgba(0,0,0,0.2)",
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
      }}
    >
      <div
        style={{
          height: 3,
          background: "linear-gradient(90deg, hsl(var(--pres-accent)), hsl(var(--pres-accent-glow)))",
          opacity: isHovered ? 1 : 0.6,
          transition: "opacity 0.3s",
        }}
      />

      <div className="px-6 pt-5 pb-0 flex items-center gap-3">
        <ProfileAvatar src={r.image} name={r.name} />
        <div className="flex-1 min-w-0">
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 22,
              fontWeight: 600,
              color: "hsl(var(--pres-text))",
            }}
          >
            {r.name}
          </p>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 15,
              color: "hsl(var(--pres-text-dim))",
              marginTop: 2,
            }}
          >
            {r.title}
          </p>
        </div>
        <a
          href={r.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center justify-center rounded-lg transition-colors"
          style={{
            width: 36,
            height: 36,
            background: "hsl(41 100% 50% / 0.08)",
            border: "1px solid hsl(41 100% 50% / 0.12)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={15} style={{ color: "hsl(var(--pres-accent))", opacity: 0.8 }} />
        </a>
      </div>

      <div className="px-6 pt-4 pb-5">
        <Quote size={16} style={{ color: "hsl(var(--pres-accent))", opacity: 0.4, marginBottom: 8 }} />
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 22,
            fontStyle: "italic",
            color: "hsl(var(--pres-text-muted))",
            lineHeight: 1.55,
          }}
        >
          &ldquo;
          {r.segments.map((seg, si) =>
            seg.bold ? (
              <span key={si} style={{ color: "hsl(var(--pres-accent))", fontWeight: 600 }}>
                {seg.text}
              </span>
            ) : (
              <span key={si}>{seg.text}</span>
            ),
          )}
          &rdquo;
        </p>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <SlideHeader />

        <div
          className="absolute pointer-events-none"
          style={{
            width: 800,
            height: 800,
            top: -200,
            right: -200,
            background: "radial-gradient(circle, hsl(41 100% 50% / 0.04) 0%, transparent 70%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute"
          style={{ left: 80, top: 100 }}
        >
          <h1
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontSize: 58,
              fontWeight: 700,
              fontStyle: "italic",
              color: "hsl(var(--pres-text))",
              lineHeight: 1.15,
            }}
          >
            Alim's{" "}
            <span
              style={{
                color: "hsl(var(--pres-accent))",
                textDecoration: "underline",
                textDecorationColor: "hsl(41 100% 50% / 0.3)",
                textUnderlineOffset: 8,
              }}
            >
              Recommendations
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 17,
              color: "hsl(var(--pres-text-dim))",
              marginTop: 10,
            }}
          >
            Real endorsements from LinkedIn colleagues &amp; partners
          </p>
        </motion.div>

        <div
          className="absolute"
          style={{
            left: 0,
            right: 0,
            top: 200,
            bottom: 60,
            perspective: 1200,
          }}
        >
          <div className="absolute" style={{ left: LEFT_STACK_LEFT, top: 0, width: STACK_WIDTH, height: 500 }}>
            {leftRecs.map((r, i) => (
              <Card3D key={r.name} r={r} pos={stackPositions[i]} i={i} />
            ))}
          </div>

          <div className="absolute" style={{ left: RIGHT_STACK_LEFT, top: 0, width: STACK_WIDTH, height: 500 }}>
            {rightRecs.map((r, i) => (
              <Card3D key={r.name} r={r} pos={stackPositions[i]} i={i + 2} />
            ))}
          </div>
        </div>

        <div
          className="absolute"
          style={{
            left: 80,
            right: 80,
            bottom: 50,
            height: 1,
            background: "linear-gradient(90deg, transparent, hsl(41 100% 50% / 0.15), transparent)",
          }}
        />
      </div>
    </ScaledSlide>
  );
}
