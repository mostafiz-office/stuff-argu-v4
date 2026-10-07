export type PresentationSound = "transition" | "click" | "reveal" | "launch";

const STORAGE_KEY = "riseup-presentation-sound";
const listeners = new Set<(muted: boolean) => void>();
let context: AudioContext | null = null;
let muted = true;

if (typeof window !== "undefined") {
  try {
    muted = window.localStorage.getItem(STORAGE_KEY) !== "on";
  } catch {
    muted = true;
  }
}

const getContext = () => {
  if (context) return context;
  const AudioContextConstructor = window.AudioContext;
  if (!AudioContextConstructor) return null;
  context = new AudioContextConstructor();
  return context;
};

const tone = (frequency: number, duration: number, volume: number, delay = 0) => {
  const audioContext = getContext();
  if (!audioContext) return;
  const start = audioContext.currentTime + delay;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, start);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(80, frequency * 0.78), start + duration);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
};

export const presentationSound = {
  isMuted: () => muted,
  subscribe(listener: (nextMuted: boolean) => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  setMuted(nextMuted: boolean) {
    muted = nextMuted;
    try {
      window.localStorage.setItem(STORAGE_KEY, nextMuted ? "off" : "on");
    } catch {
      // Sound still works for the current session when storage is unavailable.
    }
    if (!nextMuted) {
      const audioContext = getContext();
      audioContext?.resume().catch(() => undefined);
    }
    listeners.forEach((listener) => listener(muted));
  },
  play(kind: PresentationSound) {
    if (muted || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (kind === "click") tone(420, 0.07, 0.025);
    if (kind === "transition") {
      tone(260, 0.17, 0.035);
      tone(390, 0.2, 0.025, 0.045);
    }
    if (kind === "reveal") {
      tone(440, 0.12, 0.03);
      tone(660, 0.18, 0.025, 0.08);
    }
    if (kind === "launch") {
      tone(180, 0.22, 0.04);
      tone(520, 0.3, 0.03, 0.08);
    }
  },
};
