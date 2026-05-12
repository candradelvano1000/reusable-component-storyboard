import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Components/DetailPageFrame',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>DetailPageFrame - Layout wrapper for detail pages</p>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Reusable frame component providing consistent layout for all detail pages with header, tabs, and footer.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>DetailPageFrame Component</h3>
      <p>Provides consistent layout structure for product detail pages:</p>
      <ul>
        <li>Header with title and breadcrumbs</li>
        <li>Status bar with lifecycle indicators</li>
        <li>Tabbed content area</li>
        <li>Action footer (Save, Cancel, Delete)</li>
      </ul>
      <p>Used as wrapper for CatalogDetailPage, OfferingDetailPage, SpecificationDetailPage, etc.</p>
    </Box>
  ),
};
