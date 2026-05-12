import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import OfferingFormStepper, { EMPTY_FORM } from '@mcs/product-catalog/pages/offering/OfferingFormStepper';
import type { OfferingFormState } from '@mcs/product-catalog/pages/offering/OfferingFormStepper';

const meta = {
  title: 'mcs-product-catalog/Pages/OfferingFormStepper',
  component: OfferingFormStepper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OfferingFormStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

function OfferingFormStepperPreview() {
  const [form, setForm] = useState<OfferingFormState>({
    ...EMPTY_FORM,
    name: 'FiberHome Premium 200 Mbps',
    description: 'Unlimited home internet bundle with router and installation included.',
    version: '2.1',
    lifecycleStatus: 'Launched',
    isBundle: true,
    isSellable: true,
    startDateTime: '2026-01-01',
    endDateTime: '2027-12-31',
    category: [{ id: 'cat-fiber', name: 'Fiber Internet', '@referredType': 'Category' }],
    productOfferingPrice: [{ id: 'price-monthly-200', name: 'Monthly Recurring Charge', '@referredType': 'ProductOfferingPrice' }],
    bundledProductOffering: [{ id: 'off-router', name: 'WiFi Router Rental', bundledProductOfferingOptionNumber: 1 }],
    marketSegment: [{ id: 'segment-home', name: 'Home Residential' }],
    channel: [{ id: 'channel-web', name: 'Web Self-Service' }],
  });

  return (
    <Box sx={{ p: 2 }}>
      <OfferingFormStepper form={form} setForm={setForm} formError="" />
    </Box>
  );
}

export const Preview: Story = {
  render: () => <OfferingFormStepperPreview />,
};
