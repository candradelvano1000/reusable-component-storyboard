/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vite.dev/config/
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
const storybookNodeModules = path.resolve(dirname, 'node_modules');

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
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
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});