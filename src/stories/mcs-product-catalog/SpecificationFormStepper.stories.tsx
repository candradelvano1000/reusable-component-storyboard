import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import SpecificationFormStepper, { EMPTY_FORM } from '@mcs/product-catalog/pages/specifications/SpecificationFormStepper';
import type { SpecificationFormState } from '@mcs/product-catalog/pages/specifications/SpecificationFormStepper';

const meta = {
  title: 'mcs-product-catalog/Pages/SpecificationFormStepper',
  component: SpecificationFormStepper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SpecificationFormStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

function SpecificationFormStepperPreview() {
  const [form, setForm] = useState<SpecificationFormState>({
    ...EMPTY_FORM,
    name: 'Internet Access Specification',
    description: 'Core specification for residential FTTH package',
    brand: 'MCS Home',
    productNumber: 'SPEC-FTTH-001',
    version: '1.4',
    lifecycleStatus: 'Launched',
    isBundle: false,
    startDateTime: '2026-01-01',
    endDateTime: '2027-01-01',
  });

  return (
    <Box sx={{ p: 2 }}>
      <SpecificationFormStepper form={form} setForm={setForm} formError="" />
    </Box>
  );
}

export const Preview: Story = {
  render: () => <SpecificationFormStepperPreview />,
};
