/**
 * Preloads ALL image assets (local + external CDN) in the background on mount.
 * Uses the browser's native image cache — once fetched via `new Image()`,
 * subsequent <img> renders hit the cache instantly (no flicker / delay).
 *
 * Local assets: Vite's import.meta.glob resolves every image at build time.
 * External assets: Manually listed CDN URLs (Simple Icons, Devicon) used in slides.
 */
import { useEffect } from "react";
import {
  PRELOAD_BATCH_SIZE,
  PRELOAD_BATCH_INTERVAL_MS,
  PRELOAD_START_DELAY_MS,
} from "@/constants/presentation";

// ── Local assets (Vite eager glob) ──────────────────────────────
const assetModules = import.meta.glob<{ default: string }>(
  "/src/assets/**/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
);
const localUrls: string[] = Object.values(assetModules).map((module) => module.default);

// ── External CDN icons used across slides ───────────────────────
const buildSimpleIconUrl = (slug: string, color = "ffffff") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const buildDeviconUrl = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const buildSimpleIconSvgUrl = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;

const AMBER_TINT_COLOR = "d4a843";

const DIVIDER_ICON_SLUGS = [
  "react", "typescript", "nodedotjs", "python", "docker", "amazonaws",
  "github", "gitlab", "figma", "slack", "jira", "postgresql",
  "mongodb", "redis", "graphql", "tailwindcss", "nextdotjs",
  "angular", "vuedotjs", "dotnet", "kubernetes", "terraform",
  "jenkins", "firebase", "googlecloud", "microsoftazure",
  "linux", "git", "nginx", "vercel",
] as const;

const TECH_STACK_SLUGS = [
  "csharp", "dotnet", "typescript", "react", "nodedotjs", "python",
  "postgresql", "mongodb", "redis", "docker", "kubernetes",
  "amazonaws", "microsoftazure", "googlecloud", "terraform",
  "github", "gitlab", "jenkins", "figma",
] as const;

const externalUrls: string[] = [
  // Divider slides (amber-tinted)
  ...DIVIDER_ICON_SLUGS.map((slug) => buildSimpleIconUrl(slug, AMBER_TINT_COLOR)),

  // BabelHealth – original brand colors
  buildSimpleIconUrl("amazonaws", "FF9900"),
  buildSimpleIconUrl("python", "3776AB"),
  buildSimpleIconUrl("docker", "2496ED"),
  buildSimpleIconUrl("csharp", "512BD4"),
  buildSimpleIconUrl("javascript", "F7DF1E"),
  buildSimpleIconUrl("angular", "DD0031"),

  // Zapro
  buildSimpleIconUrl("typescript", "3178C6"),
  buildSimpleIconUrl("javascript", "F7DF1E"),
  buildSimpleIconUrl("react", "61DAFB"),
  buildSimpleIconUrl("express", "ffffff"),
  buildSimpleIconUrl("mongodb", "47A248"),
  buildSimpleIconUrl("tailwindcss", "06B6D4"),

  // Veradigm / ConnectIQ / Validata – white icons
  buildSimpleIconUrl("linear", "ffffff"),
  buildSimpleIconUrl("confluence", "ffffff"),
  buildSimpleIconUrl("google", "ffffff"),
  buildSimpleIconUrl("jira", "ffffff"),

  // Devicon CDN
  buildDeviconUrl("java/java-original.svg"),
  buildDeviconUrl("csharp/csharp-original.svg"),
  buildDeviconUrl("microsoftsqlserver/microsoftsqlserver-plain.svg"),
  buildDeviconUrl("slack/slack-original.svg"),

  // TechStackSlide – jsDelivr simple-icons
  ...TECH_STACK_SLUGS.map(buildSimpleIconSvgUrl),
];

// Deduplicate
const allImageUrls = Array.from(new Set([...localUrls, ...externalUrls]));

export function useAssetPreloader() {
  useEffect(() => {
    let isCancelled = false;
    let currentIndex = 0;

    function loadBatch() {
      if (isCancelled) return;

      const batch = allImageUrls.slice(currentIndex, currentIndex + PRELOAD_BATCH_SIZE);
      if (batch.length === 0) return;

      currentIndex += PRELOAD_BATCH_SIZE;

      batch.forEach((url) => {
        const image = new Image();
        image.src = url;
      });

      setTimeout(loadBatch, PRELOAD_BATCH_INTERVAL_MS);
    }

    // Start after first paint settles
    const timer = setTimeout(loadBatch, PRELOAD_START_DELAY_MS);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, []);
}
