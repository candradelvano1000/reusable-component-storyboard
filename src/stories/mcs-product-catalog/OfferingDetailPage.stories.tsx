import React, { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import DetailPageFrame from '@mcs/product-catalog/pages/components/DetailPageFrame';
import StatusBar from '@mcs/product-catalog/pages/components/StatusBar';
import { DetailField, RefEntityCard, SectionCard, StatusChipField } from '@mcs/product-catalog/pages/components/DetailComponents';

const meta = {
  title: 'mcs-product-catalog/Pages/OfferingDetailPage',
  component: DetailPageFrame,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

function OfferingDetailPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' as const });

  const statusItems = useMemo(
    () => [
      { lifecycleStatus: 'Active' },
      { lifecycleStatus: 'Active' },
      { lifecycleStatus: 'Draft' },
      { lifecycleStatus: 'Retired' },
    ],
    [],
  );

  const tabs = [
    {
      label: 'Overview',
      icon: 'O',
      content: (
        <SectionCard title="Offering Snapshot">
          <Stack direction="row" spacing={4}>
            <div>
              <DetailField label="Name" value="Fiber Home 100 Mbps" />
              <DetailField label="Version" value="2.1" />
              <StatusChipField label="Lifecycle" value="Active" />
            </div>
            <div>
              <DetailField label="Valid For" value="2026-01-01 to 2027-01-01" />
              <DetailField label="isSellable" value="true" />
              <DetailField label="isBundle" value="false" />
            </div>
          </Stack>
        </SectionCard>
      ),
    },
    {
      label: 'Specification',
      icon: 'S',
      content: (
        <SectionCard title="Product Specification">
          <RefEntityCard
            label="Specification Reference"
            entity={{ id: 'spec-100', name: 'Internet Access Spec', version: '1.0', referredType: 'ProductSpecification' }}
          />
        </SectionCard>
      ),
    },
    {
      label: 'Pricing',
      icon: 'P',
      content: (
        <SectionCard title="Price Reference">
          <RefEntityCard
            label="Monthly Price"
            entity={{ id: 'price-100', name: 'Recurring Charge', version: '1.0', referredType: 'ProductOfferingPrice' }}
          />
        </SectionCard>
      ),
    },
  ];

  return (
    <DetailPageFrame
      rootLabel="Offerings"
      onBack={() => {}}
      title="Fiber Home 100 Mbps"
      editLabel="Edit Offering"
      onEdit={() => setDialogOpen(true)}
      chips={<StatusBar items={statusItems} pickStatus={(x) => x.lifecycleStatus} statuses={['Active', 'Draft', 'Retired']} />}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      dialogOpen={dialogOpen}
      onDialogClose={() => setDialogOpen(false)}
      dialogTitle="Edit Offering"
      dialogContent={<div>Mock edit form content.</div>}
      onSave={() => {
        setDialogOpen(false);
        setSnack({ open: true, message: 'Offering saved', severity: 'success' });
      }}
      snack={snack}
      onSnackClose={() => setSnack((s) => ({ ...s, open: false }))}
    />
  );
}

export const Preview: Story = {
  render: () => <OfferingDetailPreview />,
};
