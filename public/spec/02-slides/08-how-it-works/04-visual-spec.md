# Slide 08 — How It Works · Visual Spec

## Step Card Visual
- Layout: Centered column, text-center
- Circle: 80px, rounded-full, 3px solid accent, glow shadow, surface bg
- Icon: 32px, accent color
- Step label: "STEP 01" (14px Poppins, accent, uppercase, 0.15em)
- Title: 26px Ubuntu Bold
- Description: 17px Poppins muted, line-height 1.5
- Time badge: rounded-full, accent 10% bg, accent 20% border

## Timeline Connector
- Height: 3px
- Background: `linear-gradient(90deg, accent → accent/0.2)`
- Position: `top: 410px` (through center of circles)
- Animation: `scaleX: 0→1` from left, delay 0.5s, duration 1s
