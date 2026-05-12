# MCS Common Components in Storybook

Dokumentasi integrasi MCS Common Library dengan Storybook.

## Overview

Storybook sekarang terintegrasi dengan seluruh 44+ komponen dari `@mcs/common` (MCS Common Components Library). Semua komponen MUI wrapper yang custom sudah dapat digunakan dan didokumentasikan di Storybook.

## Struktur Proyek

```
storybook/
├── src/
│   └── stories/
│       ├── mcs/                    # Stories untuk MCS components
│       │   ├── Button.stories.tsx
│       │   ├── TextField.stories.tsx
│       │   ├── Card.stories.tsx
│       │   ├── Select.stories.tsx
│       │   └── AllComponents.stories.tsx  # Katalog lengkap
│       └── ...existing stories
├── .storybook/
│   ├── main.ts                     # Storybook config
│   └── preview.ts                  # Global preview config
├── vite.config.ts                  # Updated dengan alias path
├── tsconfig.app.json               # Path mapping untuk @mcs/common
└── package.json                    # Dependency ke @mcs/common
```

## Instalasi & Setup

### 1. Install Dependencies
```bash
cd storybook
yarn install
```

### 2. Start Storybook Dev Server
```bash
yarn storybook
```

Storybook akan berjalan di `http://localhost:6006`

### 3. Build Storybook (Production)
```bash
yarn build-storybook
```

## Komponen yang Tersedia

Semua komponen MCS Common dapat ditemukan di Storybook sidebar:

```
MCS/
├── Components/
│   ├── Button
│   ├── TextField
│   ├── Card
│   ├── Select
│   ├── Dialog
│   ├── DataGrid
│   ├── Kanban
│   └── ... (40+ more components)
└── Components Overview
    └── AllComponents (Katalog lengkap 44+ komponen)
```

## Cara Menggunakan Components dalam Stories

### Import Component
```tsx
import CustomButton from '@mcs/common/button';
```

### Buat Story
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
    label: 'Click me',
    variant: 'contained',
  },
};
```

## Path Alias Configuration

Proyek sudah dikonfigurasi dengan path alias untuk kemudahan import:

- `@mcs/common` → `../mcs/common/src`
- `@mcs/common/button` → `../mcs/common/src/button`
- dll.

Konfigurasi tersimpan di:
- `vite.config.ts` (Vite resolution)
- `tsconfig.app.json` (TypeScript)

## MUI Compatibility

⚠️ **Important:** MCS Common menggunakan **MUI v9**, pastikan versi yang sama terinstall:

```json
{
  "@mui/material": "^9.0.0",
  "@mui/icons-material": "^9.0.0",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1"
}
```

## Available Components List

### Input Components
- CustomButton
- CustomTextField
- CustomSelect
- CustomCheckbox
- CustomRadioGroup
- CustomSwitch
- CustomSlider
- CustomRating
- AutoComplete

### Display Components
- CustomCard
- CustomPaper
- CustomTypography
- CustomAvatar
- CustomBadge
- CustomChip
- CustomDivider
- CustomLink

### Feedback Components
- CustomAlert
- CustomSnackbar
- CustomProgress
- CustomSkeleton
- CustomTooltip

### Navigation Components
- CustomTabs
- CustomBreadcrumbs
- CustomAppBar
- CustomBottomNavigation
- CustomDrawer
- CustomMenu
- PillTabs

### Layout Components
- CustomDialog
- CustomModal
- CustomPopover
- CustomDrawer
- CustomList

### Data Display
- CustomTable
- CustomDataGrid
- CustomPagination
- CustomImageList
- CustomTimeline

### Advanced
- CustomKanban
- CustomTransferList
- CustomAccordion
- CustomStepper
- CustomSpeedDial
- CustomToggleButton

## Development Tips

### 1. Hot Reload
Storybook supports hot module reloading - perubahan di components atau stories akan otomatis refresh.

### 2. Add Story for New Component
1. Create `YourComponent.stories.tsx` di `src/stories/mcs/`
2. Import component: `import CustomYourComponent from '@mcs/common/your-component'`
3. Define meta & stories
4. Run `yarn storybook` untuk melihat

### 3. Debugging
- Buka browser DevTools (F12)
- Gunakan Storybook addons untuk inspect/debug
- Check console untuk error messages

### 4. Test Components
```bash
yarn test                  # Run vitest
```

Storybook terintegrasi dengan vitest untuk component testing.

## Troubleshooting

### Port 6006 Already in Use
```bash
yarn storybook -- -p 6007
```

### Module Not Found Errors
Pastikan:
1. Dependencies sudah terinstall: `yarn install`
2. Path alias correct di `vite.config.ts` dan `tsconfig.app.json`
3. Component file exists di MCS common

### Styling Issues
- Pastikan Emotion + MUI v9 terinstall
- Import global styles jika perlu di `.storybook/preview.ts`
- Check style config di `@mcs/common/config/styleConfig.ts`

## Useful Resources

- [Storybook Docs](https://storybook.js.org/)
- [Storybook + Vite](https://storybook.js.org/docs/react/builders/vite)
- [Storybook Testing](https://storybook.js.org/docs/react/writing-tests/introduction)
- [MUI Theming](https://mui.com/material-ui/customization/theming/)

## Next Steps

1. ✅ Setup integration
2. ✅ Create initial stories (Button, TextField, Card, Select)
3. ✅ Document all 44+ components
4. 📝 Create more detailed component stories
5. 📝 Add design tokens documentation
6. 📝 Add interaction tests
7. 📝 Setup Chromatic for visual regression testing

---

**Last Updated:** May 2026
**MCS Common Version:** 0.1.0
**Storybook Version:** 10.3.6
