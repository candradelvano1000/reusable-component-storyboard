import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Pages/CatalogDetailPage',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>CatalogDetailPage - View and manage product catalogs</p>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Detail page for viewing and managing ProductCatalog with categories and offerings.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>CatalogDetailPage</h3>
      <p>Displays catalog details including:</p>
      <ul>
        <li>Catalog metadata (name, description, lifecycle)</li>
        <li>Categories tree view</li>
        <li>Offerings list</li>
        <li>Related parties and policies</li>
        <li>Lifecycle status</li>
      </ul>
      <p>Supports browsing and management of catalog structure</p>
    </Box>
  ),
};
