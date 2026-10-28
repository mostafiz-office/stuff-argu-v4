export interface SlideNavigationGate {
  trigger: () => boolean;
  /** Batch 87: jump the pyramid gate to an exact step (1 = reveal, 2..6 = levels 1..5). */
  goToStep?: (step: number) => void;
  tooltip?: string;
  step?: number;
  totalSteps?: number;
}

declare global {
  interface Window {
    __slideNavigationGate?: SlideNavigationGate;
    __comparisonOpen?: boolean;
  }
}
