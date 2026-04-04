import { createContext, useContext, type ReactNode } from "react";
import type { PresentationConfig } from "@/types/presentation";
import defaultConfig from "@/data/presentation-config.json";

const typedDefaultConfig = defaultConfig as unknown as PresentationConfig;

const PresentationContext = createContext<PresentationConfig>(typedDefaultConfig);

export function PresentationProvider({
  config,
  children,
}: {
  config?: Partial<PresentationConfig>;
  children: ReactNode;
}) {
  const merged = config
    ? {
        ...typedDefaultConfig,
        ...config,
        company: { ...typedDefaultConfig.company, ...config.company },
        hero: { ...typedDefaultConfig.hero, ...config.hero },
        leader: { ...typedDefaultConfig.leader, ...config.leader },
        contact: { ...typedDefaultConfig.contact, ...config.contact },
        pricing: { ...typedDefaultConfig.pricing, ...config.pricing },
        stats: { ...typedDefaultConfig.stats, ...config.stats },
        features: { ...typedDefaultConfig.features, ...config.features },
        customization: { ...typedDefaultConfig.customization, ...config.customization },
      }
    : typedDefaultConfig;

  return (
    <PresentationContext.Provider value={merged}>
      {children}
    </PresentationContext.Provider>
  );
}

export function usePresentation(): PresentationConfig {
  return useContext(PresentationContext);
}
