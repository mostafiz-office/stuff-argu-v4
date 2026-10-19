import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Ubuntu", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        /* FB-03: cover headline matches the RiseupPro Bootcamp Feedback reference */
        cover: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, var(--card)))",
          foreground: "hsl(var(--popover-foreground, var(--card-foreground)))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "pres-bg": "hsl(var(--pres-bg))",
        "pres-surface": "hsl(var(--pres-bg-surface))",
        "pres-card": "hsl(var(--pres-bg-card))",
        "pres-accent": "hsl(var(--pres-accent))",
        "pres-accent-glow": "hsl(var(--pres-accent-glow))",
        "pres-accent-dark": "hsl(var(--pres-accent-dark))",
        "pres-text": "hsl(var(--pres-text))",
        "pres-text-muted": "hsl(var(--pres-text-muted))",
        "pres-text-dim": "hsl(var(--pres-text-dim))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        recCardFadeIn: {
          from: { opacity: "0", transform: "scale(0.85) translateY(20px)" },
          to: { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "rec-card": "recCardFadeIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
