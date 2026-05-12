import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import PriceFormStepper, { EMPTY_FORM } from '@mcs/product-catalog/pages/offering-price/PriceFormStepper';
import type { PriceFormState } from '@mcs/product-catalog/pages/offering-price/PriceFormStepper';

const meta = {
  title: 'mcs-product-catalog/Pages/PriceFormStepper',
  component: PriceFormStepper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PriceFormStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

function PriceFormStepperPreview() {
  const [form, setForm] = useState<PriceFormState>({
    ...EMPTY_FORM,
    name: 'Recurring Monthly Charge',
    description: 'Base recurring charge for home internet offering',
    priceType: 'recurring',
    amount: '350000',
    unit: 'IDR',
    lifecycleStatus: 'Active',
    recurringChargePeriod: 'month',
    unitOfMeasure: 'Rp.',
    startDateTime: '2026-01-01',
    endDateTime: '2027-01-01',
  });

  return (
    <Box sx={{ p: 2 }}>
      <PriceFormStepper form={form} setForm={setForm} formError="" />
    </Box>
  );
}

export const Preview: Story = {
  render: () => <PriceFormStepperPreview />,
};
