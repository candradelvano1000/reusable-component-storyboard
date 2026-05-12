import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Components/RelationshipManager',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>RelationshipManager - Manage entity relationships</p>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Complex component for managing relationships between catalog entities (offerings, specs, etc.).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>RelationshipManager Component</h3>
      <p>Manages entity relationships including:</p>
      <ul>
        <li>Product specifications relationships</li>
        <li>Bundled products</li>
        <li>Offering relationships</li>
        <li>Agreements and policies</li>
        <li>Related parties</li>
        <li>External identifiers</li>
        <li>Attachments</li>
      </ul>
      <p>Provides SingleRefManager and EntityMultiSelect utilities</p>
    </Box>
  ),
};
