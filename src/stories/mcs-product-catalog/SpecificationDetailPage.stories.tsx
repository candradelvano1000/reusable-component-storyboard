import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DetailPageFrame from '@mcs/product-catalog/pages/components/DetailPageFrame';
import { DetailField, RefEntityCard, SectionCard } from '@mcs/product-catalog/pages/components/DetailComponents';

const meta = {
  title: 'mcs-product-catalog/Pages/SpecificationDetailPage',
  component: DetailPageFrame,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

function SpecificationDetailPreview() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Overview',
      icon: 'O',
      content: (
        <SectionCard title="Specification Overview">
          <DetailField label="Name" value="Internet Access Specification" />
          <DetailField label="Version" value="1.4" />
          <DetailField label="Brand" value="MCS Home" />
          <DetailField label="Lifecycle" value="Launched" />
        </SectionCard>
      ),
    },
    {
      label: 'Relationships',
      icon: 'R',
      content: (
        <SectionCard title="Related Specification">
          <RefEntityCard
            label="Bundled Specification"
            entity={{ id: 'spec-addon-10', name: 'WiFi Extender Spec', version: '1.0', referredType: 'ProductSpecification' }}
          />
        </SectionCard>
      ),
    },
  ];

  return (
    <DetailPageFrame
      rootLabel="Specifications"
      onBack={() => {}}
      title="Internet Access Specification"
      editLabel="Edit Specification"
      onEdit={() => {}}
      chips={<div />}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      dialogOpen={false}
      onDialogClose={() => {}}
      dialogTitle="Edit Specification"
      dialogContent={<div />}
      onSave={() => {}}
      snack={{ open: false, message: '', severity: 'success' }}
      onSnackClose={() => {}}
    />
  );
}

export const Preview: Story = {
  render: () => <SpecificationDetailPreview />,
};
