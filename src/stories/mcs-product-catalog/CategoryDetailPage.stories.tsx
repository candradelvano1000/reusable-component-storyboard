import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import DetailPageFrame from '@mcs/product-catalog/pages/components/DetailPageFrame';
import { DetailField, SectionCard } from '@mcs/product-catalog/pages/components/DetailComponents';

const meta = {
  title: 'mcs-product-catalog/Pages/CategoryDetailPage',
  component: DetailPageFrame,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

function CategoryDetailPreview() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Overview',
      icon: 'O',
      content: (
        <SectionCard title="Category Metadata">
          <Stack direction="row" spacing={4}>
            <div>
              <DetailField label="Category" value="Fiber Packages" />
              <DetailField label="Description" value="Main category for FTTH packages" />
            </div>
            <div>
              <DetailField label="Parent" value="Residential Internet" />
              <DetailField label="Lifecycle" value="Active" />
            </div>
          </Stack>
        </SectionCard>
      ),
    },
    {
      label: 'Offerings',
      icon: 'P',
      content: (
        <SectionCard title="Contained Offerings">
          <DetailField label="Count" value="8 offerings" />
          <DetailField label="Top SKUs" value="Fiber 50, Fiber 100, Fiber 300" />
        </SectionCard>
      ),
    },
  ];

  return (
    <DetailPageFrame
      rootLabel="Categories"
      onBack={() => {}}
      title="Fiber Packages"
      editLabel="Edit Category"
      onEdit={() => {}}
      chips={<div />}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      dialogOpen={false}
      onDialogClose={() => {}}
      dialogTitle="Edit Category"
      dialogContent={<div />}
      onSave={() => {}}
      snack={{ open: false, message: '', severity: 'success' }}
      onSnackClose={() => {}}
    />
  );
}

export const Preview: Story = {
  render: () => <CategoryDetailPreview />,
};
