import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Components/CatalogTreeView',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>CatalogTreeView - Tree view for catalog hierarchy</p>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Hierarchical tree view for displaying catalog categories and offerings structure.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>CatalogTreeView Component</h3>
      <p>Displays hierarchical catalog structure:</p>
      <ul>
        <li>Tree view of categories (parent-child relationships)</li>
        <li>Offerings within categories</li>
        <li>Expandable/collapsible nodes</li>
        <li>Selection support for navigation</li>
      </ul>
      <p>Used in CatalogDetailPage for browsing catalog structure</p>
    </Box>
  ),
};
