import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Pages/PriceFormStepper',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>PriceFormStepper - Multi-step form for product offering prices</p>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Stepper-based form for managing ProductOfferingPrice with time-based pricing and tax info.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>PriceFormStepper</h3>
      <p>Multi-step form for creating/editing ProductOfferingPrice</p>
      <ul>
        <li>Step 1: Price type and amount</li>
        <li>Step 2: Tax & Charges</li>
        <li>Step 3: Validity period</li>
        <li>Step 4: Unit of measure</li>
      </ul>
    </Box>
  ),
};
