/**
 * Shared types for the presentation system.
 * Following coding guidelines: no `any`, named types for all structures.
 */

export interface PricingPlan {
  readonly title: string;
  readonly price: string;
  readonly per: string;
  readonly items: readonly string[];
  readonly featured?: boolean;
}

export interface PresentationFeatures {
  readonly exportEnabled: boolean;
  readonly hiddenSlides: readonly number[];
}

export interface CompanyConfig {
  readonly name: string;
  readonly website: string;
  readonly websiteUrl: string;
  readonly tagline: string;
  readonly founded: number;
}

export interface HeroConfig {
  readonly headline1: string;
  readonly headline1Suffix: string;
  readonly headline2: string;
  readonly headline2Suffix: string;
  readonly ctaText: string;
  readonly ctaUrl: string;
}

export interface LeaderConfig {
  readonly name: string;
  readonly displayName: string;
  readonly title: string;
  readonly subtitle: string;
  readonly yearsExperience: string;
  readonly yearsProgramming: string;
  readonly focusQuestion: string;
  readonly highlights: readonly string[];
}

export interface ContactConfig {
  readonly email: string;
  readonly phone: string;
  readonly linkedin: string;
  readonly location: string;
}

export interface PricingConfig {
  readonly savingsVsUS: string;
  readonly plans: readonly PricingPlan[];
}

export interface StatsConfig {
  readonly teamSize: string;
  readonly continents: number;
  readonly clientSatisfaction: string;
  readonly projectsDelivered: string;
}

export interface CustomizationConfig {
  readonly clientName: string;
  readonly clientIndustry: string;
  readonly notes: string;
}

export interface PresentationConfig {
  readonly company: CompanyConfig;
  readonly hero: HeroConfig;
  readonly leader: LeaderConfig;
  readonly mindMap: readonly string[];
  readonly contact: ContactConfig;
  readonly pricing: PricingConfig;
  readonly stats: StatsConfig;
  readonly features: PresentationFeatures;
  readonly customization: CustomizationConfig;
}
