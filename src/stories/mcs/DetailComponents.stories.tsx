import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import {
  DetailField,
  EmptyState,
  RefEntityCard,
  SectionCard,
  StatusChipField,
} from '../../../../mcs/sales/src/pages/components/DetailComponents';

const meta = {
  title: 'MCS-SALES/DetailComponents',
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const DetailFieldStory: Story = {
  name: 'DetailField',
  render: () => <DetailField label="Lead Name" value="Enterprise Fiber Expansion" />,
};

export const StatusChipFieldStory: Story = {
  name: 'StatusChipField',
  render: () => <StatusChipField label="Status" value="In Progress" statusKey="In Progress" />,
};

export const SectionCardStory: Story = {
  name: 'SectionCard',
  render: () => (
    <SectionCard title="Lead Information">
      <Box sx={{ display: 'grid', gap: 2 }}>
        <DetailField label="Lead ID" value="lead-001" />
        <DetailField label="Source" value="Partner Channel" />
      </Box>
    </SectionCard>
  ),
};

export const RefEntityCardStory: Story = {
  name: 'RefEntityCard',
  render: () => (
    <RefEntityCard
      label="Related Party"
      entity={{
        id: 'party-1001',
        name: 'PT Nusantara Connect',
        role: 'Customer',
        version: '2.0',
      }}
    />
  ),
};

export const EmptyStateStory: Story = {
  name: 'EmptyState',
  render: () => <EmptyState message="No related data available." />,
};
