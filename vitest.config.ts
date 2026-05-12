import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
const storybookNodeModules = path.resolve(dirname, 'node_modules');

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': JSON.stringify({
      REACT_APP_API_BASE_URL: 'http://localhost:3004',
      REACT_APP_APIGW_BASE_URL: 'https://apigw.neuron.id',
      REACT_APP_USE_APIGW: 'false',
    }),
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      react: path.resolve(storybookNodeModules, 'react'),
      'react-dom': path.resolve(storybookNodeModules, 'react-dom'),
      'react/jsx-runtime': path.resolve(storybookNodeModules, 'react/jsx-runtime.js'),
      'react/jsx-dev-runtime': path.resolve(storybookNodeModules, 'react/jsx-dev-runtime.js'),
      '@mcs/common': path.resolve(dirname, '../mcs/common/src'),
      '@mcs/product-catalog': path.resolve(dirname, '../mcs/product-catalog/src'),
      'common_remote/Button': path.resolve(dirname, '../mcs/common/src/button'),
      'common_remote/Breadcrumbs': path.resolve(dirname, '../mcs/common/src/breadcrumbs'),
      'common_remote/Dialog': path.resolve(dirname, '../mcs/common/src/dialog'),
      'common_remote/Snackbar': path.resolve(dirname, '../mcs/common/src/snackbar'),
      'common_remote/Paper': path.resolve(dirname, '../mcs/common/src/paper'),
      'common_remote/AutoComplete': path.resolve(dirname, '../mcs/common/src/autocomplete'),
      'common_remote/Select': path.resolve(dirname, '../mcs/common/src/select'),
      'common_remote/TextField': path.resolve(dirname, '../mcs/common/src/textfield'),
      'common_remote/Switch': path.resolve(dirname, '../mcs/common/src/switch'),
      'common_remote/DataGrid': path.resolve(dirname, '../mcs/common/src/datagrid'),
      'common_remote/Chip': path.resolve(dirname, '../mcs/common/src/chip'),
      'common_remote/Typography': path.resolve(dirname, '../mcs/common/src/typography'),
      'common_remote/Divider': path.resolve(dirname, '../mcs/common/src/divider'),
      'common_remote/Alert': path.resolve(dirname, '../mcs/common/src/alert'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [],
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov', 'json-summary'],
      reportOnFailure: true,
      lines: 50,
      functions: 50,
      branches: 50,
      statements: 50,
      outputFile: {
        'json': 'coverage/coverage.json',
        'html': 'coverage/html',
        'lcov': 'coverage/lcov.info',
        'json-summary': 'coverage/coverage-summary.json',
      },
    },
    projects: [
      {
        extends: true,
        name: 'storybook',
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({
              launch: {
                args: ['--disable-blink-features=AutomationControlled'],
              },
            }),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          reporters: ['verbose', 'junit'],
          outputFile: {
            junit: 'coverage/junit.xml',
          },
          typecheck: {
            enabled: false,
          },
        },
      },
    ],
  },
});
