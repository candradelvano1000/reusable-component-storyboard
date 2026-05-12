import type { Preview } from '@storybook/react-vite'

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
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
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