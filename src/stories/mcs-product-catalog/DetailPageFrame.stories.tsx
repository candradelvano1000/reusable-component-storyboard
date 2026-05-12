import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import CustomChip from '@mcs/common/chip';
import DetailPageFrame from '@mcs/product-catalog/pages/components/DetailPageFrame';
import { SectionCard, DetailField, DETAIL_GRID_SX } from '@mcs/product-catalog/pages/components/DetailComponents';

const meta = {
  title: 'mcs-product-catalog/Components/DetailPageFrame',
  component: DetailPageFrame,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DetailPageFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

function DetailPageFramePreview() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <DetailPageFrame
      rootLabel="Product Catalog"
      onBack={() => {}}
      title="FiberHome Premium 200 Mbps"
      editLabel="Edit Offering"
      onEdit={() => {}}
      chips={<Box sx={{ mt: 1 }}><CustomChip label="Launched" statusKey="Launched" size="small" /></Box>}
      tabs={[
        {
          label: 'Overview',
          icon: '📋',
          content: (
            <SectionCard title="Core Attributes">
              <Box sx={DETAIL_GRID_SX}>
                <DetailField label="Name" value="FiberHome Premium 200 Mbps" />
                <DetailField label="Version" value="2.1" />
                <DetailField label="Bundle" value="Yes" />
                <DetailField label="Sellable" value="Yes" />
              </Box>
            </SectionCard>
          ),
        },
        {
          label: 'Relationships',
          icon: '🔗',
          content: (
            <SectionCard title="Relationship Summary">
              <Box sx={DETAIL_GRID_SX}>
                <DetailField label="Categories" value={3} />
                <DetailField label="Prices" value={2} />
                <DetailField label="Policies" value={1} />
                <DetailField label="Channels" value={2} />
              </Box>
            </SectionCard>
          ),
        },
      ]}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      dialogOpen={false}
      onDialogClose={() => {}}
      dialogTitle="Edit Offering"
      dialogContent={<Box sx={{ p: 1 }}>Dialog content placeholder</Box>}
      onSave={() => {}}
      snack={{ open: false, message: '', severity: 'success' }}
      onSnackClose={() => {}}
    />
  );
}

export const Preview: Story = {
  render: () => <DetailPageFramePreview />,
};
