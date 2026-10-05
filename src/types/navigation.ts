export interface SlideNavigationGate {
  trigger: () => boolean;
  tooltip?: string;
  step?: number;
  totalSteps?: number;
}

declare global {
  interface Window {
    __slideNavigationGate?: SlideNavigationGate;
  }
}
