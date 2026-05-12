import type { Preview } from '@storybook/react-vite'
import 'intro.js/minified/introjs.min.css'
import introJs from 'intro.js'
import type { IntroJsParameters } from '../src/stories/shared/introJs'

let introTimer: ReturnType<typeof setTimeout> | undefined;

const g = globalThis as typeof globalThis & {
  process?: { env?: Record<string, string> };
};

if (!g.process) {
  g.process = { env: {} };
}

if (!g.process.env) {
  g.process.env = {};
}

Object.assign(g.process.env, {
  REACT_APP_API_BASE_URL: 'http://localhost:3004',
  REACT_APP_APIGW_BASE_URL: 'https://apigw.neuron.id',
  REACT_APP_USE_APIGW: 'false',
});

const preview: Preview = {
  decorators: [
    (Story, context) => {
      if (globalThis.window !== undefined) {
        const introParams = (context.parameters?.introJs ?? {}) as IntroJsParameters;

        if (introTimer) {
          clearTimeout(introTimer);
        }

        if (introParams.enabled) {
          introTimer = setTimeout(() => {
            const rootElement = document.querySelector('#storybook-root') as HTMLElement | null;
            const instance = rootElement ? introJs(rootElement) : introJs();

            const resolvedSteps = (introParams.steps ?? [])
              .map((step) => {
                const resolvedElement = step.element ?? (step.selector ? document.querySelector(step.selector) : undefined);
                return {
                  element: resolvedElement,
                  title: step.title,
                  intro: step.intro,
                  position: step.position,
                };
              })
              .filter((step) => step.intro && (!step.element || step.element instanceof Element));

            const options = {
              showProgress: true,
              showBullets: false,
              nextLabel: 'Next',
              prevLabel: 'Back',
              doneLabel: 'Done',
              ...(resolvedSteps.length ? { steps: resolvedSteps } : {}),
            };

            if (introParams.options) {
              Object.assign(options, introParams.options);
            }

            instance.setOptions(options).start();
          }, introParams.delayMs ?? 200);
        }
      }

      return Story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    }
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for MCS components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'light' },
          { value: 'dark', icon: 'circle', title: 'dark' },
        ],
      },
    },
  },
};

export default preview;