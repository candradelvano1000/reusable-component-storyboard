import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Pages/OfferingPriceDetailPage',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>OfferingPriceDetailPage - View and edit product offering prices</p>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Detail page for viewing and editing ProductOfferingPrice with pricing and tax information.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>OfferingPriceDetailPage</h3>
      <p>Displays offering price details including:</p>
      <ul>
        <li>Price amount and type</li>
        <li>Tax and additional charges</li>
        <li>Validity period (from/to dates)</li>
        <li>Unit of measure</li>
        <li>Related offering reference</li>
      </ul>
      <p>Supports edit mode with inline form stepper</p>
    </Box>
  ),
};
