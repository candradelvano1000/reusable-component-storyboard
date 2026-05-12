export type IntroJsStepConfig = {
  selector?: string;
  element?: Element | null;
  title?: string;
  intro: string;
  position?: 'top' | 'right' | 'left' | 'bottom' | 'bottom-right-aligned' | 'bottom-middle-aligned' | 'bottom-left-aligned' | 'auto';
};

export type IntroJsParameters = {
  enabled?: boolean;
  delayMs?: number;
  options?: Record<string, unknown>;
  steps?: IntroJsStepConfig[];
};

export function buildIntroSteps(steps: IntroJsStepConfig[]): IntroJsStepConfig[] {
  return steps;
}
