import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Components/CatalogListScaffold',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>CatalogListScaffold - Layout scaffold for catalog lists</p>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Reusable scaffold layout for catalog list views with tree and detail panes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>CatalogListScaffold Component</h3>
      <p>Layout scaffold for catalog browsing:</p>
      <ul>
        <li>Left pane: CatalogTreeView for navigation</li>
        <li>Right pane: Detail/list view of selected item</li>
        <li>Responsive layout</li>
        <li>Shared styling and interaction patterns</li>
      </ul>
    </Box>
  ),
};
