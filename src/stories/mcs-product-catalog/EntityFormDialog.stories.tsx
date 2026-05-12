import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Components/EntityFormDialog',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>EntityFormDialog - Dialog for entity creation/editing</p>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Modal dialog for creating or editing catalog entities inline without leaving current form.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>EntityFormDialog Component</h3>
      <p>Modal dialog for entity management:</p>
      <ul>
        <li>Create new entity (offering, spec, category, etc)</li>
        <li>Edit existing entity</li>
        <li>Inline form with essential fields</li>
        <li>Quick action without page navigation</li>
      </ul>
    </Box>
  ),
};
