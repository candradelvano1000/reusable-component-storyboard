import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import DetailPageFrame from '@mcs/product-catalog/pages/components/DetailPageFrame';
import { DetailField, SectionCard } from '@mcs/product-catalog/pages/components/DetailComponents';

const meta = {
  title: 'mcs-product-catalog/Pages/CatalogDetailPage',
  component: DetailPageFrame,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

function CatalogDetailPreview() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Overview',
      icon: 'O',
      content: (
        <SectionCard title="Catalog Information">
          <Stack direction="row" spacing={4}>
            <div>
              <DetailField label="Catalog Name" value="Residential Internet Catalog" />
              <DetailField label="Description" value="Catalog for home internet and add-on products" />
            </div>
            <div>
              <DetailField label="Version" value="3.0" />
              <DetailField label="Lifecycle" value="Launched" />
            </div>
          </Stack>
        </SectionCard>
      ),
    },
    {
      label: 'Categories',
      icon: 'C',
      content: (
        <SectionCard title="Category Summary">
          <DetailField label="Total Categories" value="12" />
          <DetailField label="Top Level" value="Internet, TV, Bundles" />
        </SectionCard>
      ),
    },
  ];

  return (
    <DetailPageFrame
      rootLabel="Catalog"
      onBack={() => {}}
      title="Residential Internet Catalog"
      editLabel="Edit Catalog"
      onEdit={() => {}}
      chips={<div />}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      dialogOpen={false}
      onDialogClose={() => {}}
      dialogTitle="Edit Catalog"
      dialogContent={<div />}
      onSave={() => {}}
      snack={{ open: false, message: '', severity: 'success' }}
      onSnackClose={() => {}}
    />
  );
}

export const Preview: Story = {
  render: () => <CatalogDetailPreview />,
};
