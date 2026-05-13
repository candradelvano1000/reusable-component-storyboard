import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite",
  viteFinal: async (config) => {
    const storybookNodeModules = path.resolve(dirname, '../node_modules');

    const existingDefine = config.define;
    config.define = existingDefine
      ? {
          ...existingDefine,
          'process.env': JSON.stringify({
            REACT_APP_API_BASE_URL: 'http://localhost:3004',
            REACT_APP_APIGW_BASE_URL: 'https://apigw.neuron.id',
            REACT_APP_USE_APIGW: 'false',
          }),
        }
      : {
          'process.env': JSON.stringify({
            REACT_APP_API_BASE_URL: 'http://localhost:3004',
            REACT_APP_APIGW_BASE_URL: 'https://apigw.neuron.id',
            REACT_APP_USE_APIGW: 'false',
          }),
        };

    config.resolve ??= {};
    const existingAlias = Array.isArray(config.resolve.alias)
      ? {}
      : (config.resolve.alias ?? {});
    config.resolve.alias = {
      ...existingAlias,
      react: path.resolve(storybookNodeModules, 'react'),
      'react-dom': path.resolve(storybookNodeModules, 'react-dom'),
      'react/jsx-runtime': path.resolve(storybookNodeModules, 'react/jsx-runtime.js'),
      'react/jsx-dev-runtime': path.resolve(storybookNodeModules, 'react/jsx-dev-runtime.js'),
      '@mcs/common': path.resolve(dirname, '../../mcs/common/src'),
      '@mcs/product-catalog': path.resolve(dirname, '../../mcs/product-catalog/src'),
      'common_remote/Button': path.resolve(dirname, '../../mcs/common/src/button'),
      'common_remote/Breadcrumbs': path.resolve(dirname, '../../mcs/common/src/breadcrumbs'),
      'common_remote/Dialog': path.resolve(dirname, '../../mcs/common/src/dialog'),
      'common_remote/Snackbar': path.resolve(dirname, '../../mcs/common/src/snackbar'),
      'common_remote/Paper': path.resolve(dirname, '../../mcs/common/src/paper'),
      'common_remote/AutoComplete': path.resolve(dirname, '../../mcs/common/src/autocomplete'),
      'common_remote/Select': path.resolve(dirname, '../../mcs/common/src/select'),
      'common_remote/TextField': path.resolve(dirname, '../../mcs/common/src/textfield'),
      'common_remote/Switch': path.resolve(dirname, '../../mcs/common/src/switch'),
      'common_remote/DataGrid': path.resolve(dirname, '../../mcs/common/src/datagrid'),
      'common_remote/Kanban': path.resolve(dirname, '../../mcs/common/src/kanban'),
      'common_remote/Rating': path.resolve(dirname, '../../mcs/common/src/rating'),
      'common_remote/Skeleton': path.resolve(dirname, '../../mcs/common/src/skeleton'),
      'common_remote/Chip': path.resolve(dirname, '../../mcs/common/src/chip'),
      'common_remote/Typography': path.resolve(dirname, '../../mcs/common/src/typography'),
      'common_remote/Divider': path.resolve(dirname, '../../mcs/common/src/divider'),
      'common_remote/Alert': path.resolve(dirname, '../../mcs/common/src/alert')
    };
    config.resolve.dedupe = [
      ...(config.resolve.dedupe ?? []),
      'react',
      'react-dom'
    ];

    config.server ??= {};
    config.server.fs ??= {};
    config.server.fs.allow = [
      ...(config.server.fs.allow ?? []),
      path.resolve(dirname, '..'),
      path.resolve(dirname, '../../mcs')
    ];

    return config;
  }
};
export default config;