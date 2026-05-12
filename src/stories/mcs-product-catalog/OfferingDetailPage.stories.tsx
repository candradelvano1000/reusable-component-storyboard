import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Pages/OfferingDetailPage',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>OfferingDetailPage - View and edit product offering details</p>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Detail page for viewing and editing ProductOffering with tabbed interface for related data.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>OfferingDetailPage</h3>
      <p>Displays offering details with tabs for:</p>
      <ul>
        <li>Overview (name, description, lifecycle status)</li>
        <li>Specifications (linked product specs)</li>
        <li>Prices (offering prices)</li>
        <li>Related Products (bundles, alternatives)</li>
        <li>Relationships (agreements, channels, policies)</li>
      </ul>
      <p>Supports edit mode with FormStepper integration</p>
    </Box>
  ),
};
