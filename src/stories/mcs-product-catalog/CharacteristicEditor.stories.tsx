import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';

const meta: Meta = {
  title: 'mcs-product-catalog/Components/CharacteristicEditor',
  component: () => (
    <Box sx={{ p: 2 }}>
      <p>CharacteristicEditor - Edit product characteristics/specifications</p>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Component for editing CharacteristicSpecification attributes with value editing and validation.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box sx={{ p: 2 }}>
      <h3>CharacteristicEditor Component</h3>
      <p>Manages product characteristics editing:</p>
      <ul>
        <li>Add/remove characteristics</li>
        <li>Edit characteristic values</li>
        <li>Configure characteristic types and units</li>
        <li>Set value ranges and constraints</li>
      </ul>
      <p>Used in SpecificationFormStepper for managing CharacteristicSpecification arrays</p>
    </Box>
  ),
};
