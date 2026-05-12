import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Pages/SpecificationDetailPage',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>SpecificationDetailPage - View and edit product specifications</p>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Detail page for viewing and editing ProductSpecification with characteristics and features.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>SpecificationDetailPage</h3>
      <p>Displays specification details with tabs for:</p>
      <ul>
        <li>Overview (name, description, lifecycle, category)</li>
        <li>Characteristics (spec attributes with values)</li>
        <li>Features (supported in this spec)</li>
        <li>Relationships (bundled specs, resource/service specs)</li>
        <li>Policies and related parties</li>
      </ul>
      <p>Supports edit mode with FormStepper integration</p>
    </Box>
  ),
};
