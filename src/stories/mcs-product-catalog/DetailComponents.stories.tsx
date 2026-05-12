import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Components/DetailComponents',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>DetailComponents - Reusable components for detail views</p>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Collection of reusable components for building detail pages: DetailField, StatusChipField, SectionCard, RefEntityCard.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>DetailComponents Collection</h3>
      <p>Provides reusable components for detail page layouts:</p>
      <ul>
        <li><strong>DetailField</strong> - Display single field with label</li>
        <li><strong>StatusChipField</strong> - Display status with chip component</li>
        <li><strong>SectionCard</strong> - Card container for grouped fields</li>
        <li><strong>RefEntityCard</strong> - Display reference entities (links to related items)</li>
        <li><strong>DETAIL_GRID_SX</strong> - Reusable grid styling</li>
      </ul>
    </Box>
  ),
};
