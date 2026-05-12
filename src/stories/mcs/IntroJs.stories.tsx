import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { buildIntroSteps } from '../shared/introJs';

function IntroJsDemo() {
  return (
    <Box sx={{ p: 3, maxWidth: 900 }}>
      <Stack spacing={2}>
        <Typography variant="h5" data-step="catalog-title">
          Product Catalog Dashboard
        </Typography>

        <Paper variant="outlined" sx={{ p: 2 }} data-step="search-box">
          <Typography variant="body2" color="text.secondary">
            Search Input Placeholder
          </Typography>
        </Paper>

        <Paper variant="outlined" sx={{ p: 2 }} data-step="create-button">
          <Typography variant="body2" color="text.secondary">
            Create Catalog Action Placeholder
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
}

const meta = {
  title: 'Integrations/IntroJs',
  component: IntroJsDemo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IntroJsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ManualStart: Story = {
  parameters: {
    introJs: {
      enabled: false,
    },
  },
};

export const AutoStart: Story = {
  parameters: {
    introJs: {
      enabled: true,
      delayMs: 300,
      steps: buildIntroSteps([
        {
          selector: '[data-step="catalog-title"]',
          title: 'Catalog Header',
          intro: 'This is the title section for catalog overview.',
        },
        {
          selector: '[data-step="search-box"]',
          title: 'Search',
          intro: 'Use this search area to quickly filter catalog items.',
        },
        {
          selector: '[data-step="create-button"]',
          title: 'Create Action',
          intro: 'Use this button to add a new catalog item.',
        },
      ]),
    },
  },
};
