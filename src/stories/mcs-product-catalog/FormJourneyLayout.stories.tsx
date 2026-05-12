import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Components/FormJourneyLayout',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>FormJourneyLayout - Layout container for form journey patterns</p>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Layout component for step-by-step form journeys with journey visualization and form container.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>FormJourneyLayout Component</h3>
      <p>Layout wrapper for journey-based form experiences:</p>
      <ul>
        <li>Left: FormJourneyStepper (step navigation)</li>
        <li>Center: Form content area</li>
        <li>Right: Summary/preview panel</li>
      </ul>
      <p>Used by OfferingFormStepper, PriceFormStepper, SpecificationFormStepper</p>
    </Box>
  ),
};
