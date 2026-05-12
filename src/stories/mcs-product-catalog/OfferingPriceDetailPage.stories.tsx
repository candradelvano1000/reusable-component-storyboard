import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DetailPageFrame from '@mcs/product-catalog/pages/components/DetailPageFrame';
import { DetailField, SectionCard, StatusChipField } from '@mcs/product-catalog/pages/components/DetailComponents';

const meta = {
  title: 'mcs-product-catalog/Pages/OfferingPriceDetailPage',
  component: DetailPageFrame,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

function OfferingPriceDetailPreview() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Price',
      icon: '$',
      content: (
        <SectionCard title="Price Details">
          <DetailField label="Name" value="Recurring Monthly Charge" />
          <DetailField label="Amount" value="Rp 350.000" />
          <DetailField label="Currency" value="IDR" />
          <StatusChipField label="Lifecycle" value="Active" />
        </SectionCard>
      ),
    },
    {
      label: 'Validity',
      icon: 'V',
      content: (
        <SectionCard title="Validity Period">
          <DetailField label="Valid From" value="2026-01-01" />
          <DetailField label="Valid To" value="2027-01-01" />
          <DetailField label="Recurring Period" value="month" />
        </SectionCard>
      ),
    },
  ];

  return (
    <DetailPageFrame
      rootLabel="Offering Prices"
      onBack={() => {}}
      title="Recurring Monthly Charge"
      editLabel="Edit Price"
      onEdit={() => {}}
      chips={<div />}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      dialogOpen={false}
      onDialogClose={() => {}}
      dialogTitle="Edit Price"
      dialogContent={<div />}
      onSave={() => {}}
      snack={{ open: false, message: '', severity: 'success' }}
      onSnackClose={() => {}}
    />
  );
}

export const Preview: Story = {
  render: () => <OfferingPriceDetailPreview />,
};
