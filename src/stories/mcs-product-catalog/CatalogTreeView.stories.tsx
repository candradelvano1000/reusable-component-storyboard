import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import CatalogTreeView from '@mcs/product-catalog/pages/components/CatalogTreeView';

const meta = {
  title: 'mcs-product-catalog/Components/CatalogTreeView',
  component: CatalogTreeView,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CatalogTreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: () => (
    <Box sx={{ p: 3, maxWidth: 900 }}>
      <CatalogTreeView
        categories={[
          { id: 'cat-home', name: 'Home Internet' },
          { id: 'cat-mobile', name: 'Mobile Plans' },
          { id: 'cat-b2b', name: 'Business Solutions' },
        ]}
      />
    </Box>
  ),
};
