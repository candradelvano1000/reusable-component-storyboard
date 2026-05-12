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
    config.resolve ??= {};
    const existingAlias = Array.isArray(config.resolve.alias)
      ? {}
      : (config.resolve.alias ?? {});
    config.resolve.alias = {
      ...existingAlias,
      '@mcs/common': path.resolve(dirname, '../../mcs/common/src'),
      '@mcs/product-catalog': path.resolve(dirname, '../../mcs/product-catalog/src'),
      'common_remote/Chip': path.resolve(dirname, '../../mcs/common/src/chip'),
      'common_remote/Typography': path.resolve(dirname, '../../mcs/common/src/typography'),
      'common_remote/Divider': path.resolve(dirname, '../../mcs/common/src/divider'),
      'common_remote/Alert': path.resolve(dirname, '../../mcs/common/src/alert')
    };

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