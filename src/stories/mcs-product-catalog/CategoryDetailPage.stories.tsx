import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Pages/CategoryDetailPage',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>CategoryDetailPage - View and edit product categories</p>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Detail page for viewing and editing ProductCategory with hierarchical relationships.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>CategoryDetailPage</h3>
      <p>Displays category details including:</p>
      <ul>
        <li>Category metadata (name, description, lifecycle)</li>
        <li>Parent/child categories</li>
        <li>Associated product offerings</li>
        <li>Specifications</li>
        <li>Related parties</li>
      </ul>
      <p>Supports edit mode with hierarchical category management</p>
    </Box>
  ),
};
