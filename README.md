# Storybook + MCS Common Components

Modern design system documentation and component library built with Storybook, integrated with the MCS (Microservices Command Center) Common Components Library.

## Features

- 📚 **Storybook 10.3.6** - Interactive component explorer
- 🎨 **44+ MCS Components** - Complete component library from MCS Common
- ⚡ **Vite + React 19** - Lightning-fast development
- 🧪 **Vitest Integration** - Component testing with Storybook addons
- 📊 **a11y Testing** - Accessibility checks built-in
- 🎯 **Chromatic Ready** - Visual regression testing support

## Quick Start

### Installation
```bash
cd storybook
yarn install
```

### Development
```bash
# Start Storybook dev server (http://localhost:6006)
yarn storybook

# Run tests
yarn test

# Run tests in CI mode
yarn test:ci

# Lint
yarn lint
```

### Production
```bash
# Build Storybook for static deployment
yarn build-storybook

# Preview production build locally
yarn preview
```

## MCS Common Integration

All 44+ custom MUI components from `@mcs/common` are available in Storybook:

- **Input Components** - Button, TextField, Select, Checkbox, Radio, Switch, Slider, Rating
- **Display Components** - Card, Paper, Typography, Avatar, Badge, Chip, Divider
- **Feedback Components** - Alert, Snackbar, Progress, Skeleton, Tooltip
- **Navigation** - Tabs, Breadcrumbs, AppBar, BottomNavigation, Drawer, Menu
- **Data Display** - Table, DataGrid, Pagination, ImageList, Timeline
- **Advanced** - Kanban, TransferList, Accordion, Stepper, SpeedDial

### Viewing Components

Browse all components in Storybook:
1. Run `yarn storybook`
2. Navigate to `MCS / Components Overview` for catalog
3. Click any component to see variations and documentation

### Using Components in Your Project

```tsx
import CustomButton from '@mcs/common/button';

export function MyComponent() {
  return (
    <CustomButton 
      label="Click me" 
      variant="contained"
      color="primary"
      onClick={() => console.log('clicked')}
    />
  );
}
```

## Project Structure

```
storybook/
├── src/
│   ├── stories/
│   │   ├── mcs/                    # MCS component stories
│   │   └── button.css              # Shared styles
│   ├── App.tsx
│   └── index.css
├── .storybook/
│   ├── main.ts                     # Storybook configuration
│   └── preview.ts                  # Global settings
├── vite.config.ts                  # Path alias for @mcs/common
└── tsconfig.app.json               # TypeScript configuration
```

## Creating a New Story

1. Create `YourComponent.stories.tsx` in `src/stories/mcs/`:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from '@mcs/common/button';

const meta = {
  title: 'MCS/Components/Button',
  component: CustomButton,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'contained',
  },
};
```

2. Run `yarn storybook` to see your story

## Dependencies

### Core
- React 19.2.5
- TypeScript 6.0.2
- Vite 8.0.10

### Storybook
- @storybook/react-vite@10.3.6
- @storybook/addon-vitest@10.3.6
- @storybook/addon-a11y@10.3.6
- @storybook/addon-docs@10.3.6

### MCS Common
- @mcs/common (local reference)
- @mui/material@9.0.0
- @emotion/react@11.14.0

## Documentation

- **[Integration Guide](./INTEGRATION_GUIDE.md)** - Detailed setup and usage
- **[Storybook Official Docs](https://storybook.js.org/)**
- **[Vite Docs](https://vitejs.dev/)**
- **[MUI Documentation](https://mui.com/)**

## Scripts

| Command | Purpose |
|---------|---------|
| `yarn dev` | Start Vite dev server |
| `yarn storybook` | Start Storybook on port 6006 |
| `yarn build` | Build with TypeScript |
| `yarn build-storybook` | Build Storybook for deployment |
| `yarn preview` | Preview production build |
| `yarn test` | Run tests in watch mode |
| `yarn test:ci` | Run tests once (CI mode) |
| `yarn lint` | Lint code |

## Port Configuration

- **Storybook**: http://localhost:6006
- **Vite Dev Server**: http://localhost:5173

## Tips & Tricks

- 🔗 Use path aliases - `@mcs/common/button` instead of relative paths
- 🎨 Check `.storybook/preview.ts` for global theme configuration
- 🧪 Component tests can be run directly from Storybook UI
- 📱 Use Storybook's viewport tools to test responsive design
- ♿ Check a11y addon for accessibility violations

## Troubleshooting

### Components not loading?
- Verify `@mcs/common` is installed: `yarn install`
- Check path aliases in `vite.config.ts`
- Restart Storybook: `Ctrl+C` then `yarn storybook`

### Port already in use?
```bash
yarn storybook -- -p 6007
```

### Module resolution errors?
- Ensure TypeScript path mapping is correct
- Check `tsconfig.app.json` for `@mcs/common` paths

## Next Steps

- [ ] Add more component stories
- [ ] Setup Chromatic for visual testing
- [ ] Add interaction tests
- [ ] Document design tokens
- [ ] Create component usage guidelines

---

**Last Updated**: May 2026  
**Built with**: Storybook 10.3.6 + Vite 8.0.10 + React 19  
**MCS Common**: @mcs/common v0.1.0
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
