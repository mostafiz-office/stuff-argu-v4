import ScaledSlide from "@/components/presentation/ScaledSlide";
import SlideHeader from "@/components/presentation/SlideHeader";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import syedurPhoto from "@/assets/syedur.png";
import logoVeradigm from "@/assets/logo-veradigm.png";
import logoScrumAlliance from "@/assets/logo-scrum-alliance.png";
import logoJaxara from "@/assets/logo-jaxara.png";
import certCal1 from "@/assets/cert-cal1.png";
import certCsd from "@/assets/cert-csd.png";
import certCsm from "@/assets/cert-csm.png";
import certCspSm from "@/assets/cert-csp-sm.png";

const slideTitle = "Agile Coach | 17+ Years of Experience";
const tags = ["17+ Years Experience", "10+ Certifications", "Leadership", "Global Experience"];

const bullets = [
  "Holds 10+ global certifications including CSP-SM, CSP-PO, CSP-D, CSM, CSPO, SAFe 6.0, AWS Certified Developer, and CAL.",
  "17+ years driving Agile transformation, coaching & software delivery across North America & Asia in global tech and healthcare.",
  "Trained & mentored 1,500+ professionals in Scrum, SAFe, Kanban, and DevOps across 7+ countries.",
  "Founder of Agile Bangladesh (5,900+ members) and global mentorship programs supporting 1,000+ associates.",
  "Proven leader in Agile scaling, DevOps & Cloud (AWS, Azure), saving $80K+ monthly in cloud costs and managing teams of 30+.",
  "Frequent international speaker at Scrum Gatherings, SAFe conferences, and Agile forums (India, Nepal, Thailand, Portugal, etc.).",
];

const companies = [
  { name: "Veradigm", logo: logoVeradigm },
  { name: "Scrum Alliance", logo: logoScrumAlliance },
  { name: "Jaxara", logo: logoJaxara },
];

const certifications = [
  { name: "CSP-SM", logo: certCspSm, url: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrum-professional-scrummaster" },
  { name: "CSD", logo: certCsd, url: "https://www.scrumalliance.org/get-certified/developer-track/certified-scrum-professional-for-developers" },
  { name: "CSM", logo: certCsm, url: "https://www.scrumalliance.org/get-certified/product-owner-track/certified-scrum-professional-product-owner" },
  { name: "CAL 1", logo: certCal1, url: "https://www.scrumalliance.org/get-certified/agile-leader/cal-1" },
];

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2 + i * 0.08, duration: 0.5, ease: "easeOut" as const },
});

export default function SyedurRahmanSlide() {
  return (
    <ScaledSlide>
      <div className="slide-dark-bg relative w-full h-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 30px, hsl(var(--pres-accent) / 0.015) 30px, hsl(var(--pres-accent) / 0.015) 31px)",
          }}
        />

        <SlideHeader />

        <motion.div {...fade(0)} className="absolute" style={{ left: 60, top: 96 }}>
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
            Agile Coach
          </span>
        </motion.div>

        <div className="absolute" style={{ left: 60, right: 60, top: 210, height: 520 }}>
          <div className="flex h-full items-start gap-12">
            <motion.div
              {...fade(1)}
              className="flex-shrink-0 rounded-2xl overflow-hidden"
              style={{
                width: 420,
                height: 500,
                background:
                  "linear-gradient(180deg, hsl(var(--pres-accent) / 0.08) 0%, hsl(var(--pres-accent) / 0.02) 100%)",
                border: "1px solid hsl(var(--pres-accent) / 0.12)",
              }}
            >
              <img src={syedurPhoto} alt="Syedur Rahman" className="w-full h-full object-cover object-top" />
            </motion.div>

            <div className="flex-1" style={{ paddingTop: 4 }}>
              <motion.div {...fade(2)} className="flex items-start justify-between">
                <div>
                  <h3
                    className="font-heading"
                    style={{ fontSize: 42, fontWeight: 700, color: "hsl(var(--pres-text))", lineHeight: 1.15 }}
                  >
                    Syedur Rahman
                  </h3>
                  <div className="flex flex-wrap gap-3" style={{ marginTop: 14 }}>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body rounded-full"
                        style={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "hsl(var(--pres-accent))",
                          border: "1px solid hsl(var(--pres-accent) / 0.3)",
                          padding: "6px 22px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a href="https://www.linkedin.com/in/syedur-rahman-6689b713/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={36} color="hsl(var(--pres-accent))" style={{ marginTop: 8 }} className="hover:opacity-70 transition-opacity cursor-pointer" />
                </a>
              </motion.div>

              <motion.ul
                {...fade(3)}
                className="font-body"
                style={{ marginTop: 20, paddingLeft: 30, listStyleType: "disc", maxWidth: 1280 }}
              >
                {bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 22,
                      color: "hsl(var(--pres-text-dim))",
                      lineHeight: 1.5,
                      marginBottom: 12,
                    }}
                  >
                    {b}
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>

        <motion.div
          {...fade(4)}
          className="absolute flex items-start justify-between"
          style={{ left: 60, right: 60, top: 736 }}
        >
          <div style={{ width: 840 }}>
            <h4
              className="font-heading"
              style={{ fontSize: 24, fontWeight: 700, color: "hsl(var(--pres-text))", marginBottom: 16 }}
            >
              Companies Worked with
            </h4>
            <div className="flex gap-4 items-center">
              {companies.map((c) => (
                <span
                  key={c.name}
                  className="font-body rounded-lg flex items-center justify-center"
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "hsl(var(--pres-text-dim))",
                    background: "#fff",
                    border: "1px solid hsl(var(--pres-accent) / 0.1)",
                    padding: "14px 28px",
                    minWidth: 220,
                  }}
                >
                  <img src={c.logo} alt={c.name} style={{ height: 40, objectFit: 'contain' }} />
                </span>
              ))}
            </div>
          </div>

          <div style={{ width: 840 }}>
            <h4
              className="font-heading"
              style={{ fontSize: 24, fontWeight: 700, color: "hsl(var(--pres-text))", marginBottom: 16 }}
            >
              Certification Achieved from
            </h4>
            <div className="flex gap-3 items-center">
              {certifications.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body rounded-lg flex flex-col items-center justify-center hover:opacity-80 transition-opacity"
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "hsl(var(--pres-accent))",
                    background: "#fff",
                    border: "1px solid hsl(var(--pres-accent) / 0.2)",
                    padding: "8px 14px",
                    minWidth: 100,
                  }}
                >
                  <img src={c.logo} alt={c.name} style={{ height: 56, objectFit: 'contain' }} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </ScaledSlide>
  );
}
