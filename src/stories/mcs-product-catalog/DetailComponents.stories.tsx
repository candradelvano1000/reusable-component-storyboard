import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { DetailField, StatusChipField, SectionCard, RefEntityCard, RefEntityList, DETAIL_GRID_SX } from '@mcs/product-catalog/pages/components/DetailComponents';

const meta = {
  title: 'mcs-product-catalog/Components/DetailComponents',
  component: SectionCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: () => (
    <SectionCard title="Offering Snapshot">
      <Box sx={DETAIL_GRID_SX}>
        <DetailField label="Name" value="FiberHome Premium 200 Mbps" />
        <DetailField label="Version" value="2.1" />
        <StatusChipField label="Lifecycle" value="Launched" />
        <DetailField label="Last Updated" value="2026-02-14T10:45:00Z" />
      </Box>
      <RefEntityCard
        label="Product Specification"
        entity={{ id: 'spec-fiber-200', name: 'Fiber Broadband Spec', version: '1.3', referredType: 'ProductSpecification' }}
      />
      <RefEntityList
        label="Related Parties"
        items={[
          { id: 'party-sales-01', name: 'Retail Sales Team', role: 'Seller', partyType: 'Organization' },
          { id: 'party-ops-02', name: 'Provisioning Operations', role: 'Provider', partyType: 'Organization' },
        ]}
      />
    </SectionCard>
  ),
};
