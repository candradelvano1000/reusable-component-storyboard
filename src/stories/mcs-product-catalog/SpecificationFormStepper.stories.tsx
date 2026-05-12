import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Pages/SpecificationFormStepper',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>SpecificationFormStepper - Multi-step form for product specifications</p>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Stepper-based form for managing ProductSpecification with characteristics and relationships.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>SpecificationFormStepper</h3>
      <p>Multi-step form for creating/editing ProductSpecification</p>
      <ul>
        <li>Step 1: Basic specification info (name, description, lifecycle)</li>
        <li>Step 2: Characteristics (specs)</li>
        <li>Step 3: Features and relationships</li>
        <li>Step 4: Resource/Service candidates</li>
        <li>Step 5: Policies and related parties</li>
      </ul>
    </Box>
  ),
};
