import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Pages/OfferingFormStepper',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>OfferingFormStepper - Multi-step form for creating/editing product offerings</p>
      <p>Complex form with product specifications, pricing, relationships</p>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Stepper-based form for managing ProductOffering data including specs, prices, and related products.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>OfferingFormStepper Component</h3>
      <p>Multi-step form stepper for ProductOffering creation/editing</p>
      <ul>
        <li>Step 1: Basic offering details (name, description, lifecycle)</li>
        <li>Step 2: Product specifications</li>
        <li>Step 3: Pricing information</li>
        <li>Step 4: Related products & bundles</li>
        <li>Step 5: Relationships & policies</li>
      </ul>
    </Box>
  ),
};
