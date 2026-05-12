import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Components/EntitySelect',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>EntitySelect - Select catalog entities (offerings, specs, etc)</p>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Component for selecting and creating catalog entities with autocomplete and inline creation.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>EntitySelect Component</h3>
      <p>Reusable entity selector with:</p>
      <ul>
        <li>EntitySingleSelect - Select one entity</li>
        <li>EntityMultiSelect - Select multiple entities</li>
        <li>Inline creation of new entities</li>
        <li>Autocomplete search</li>
        <li>Type-aware (offerings, specs, categories, etc)</li>
      </ul>
    </Box>
  ),
};
