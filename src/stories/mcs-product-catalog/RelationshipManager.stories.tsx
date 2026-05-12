import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import RelationshipManager, { OFFERING_RELATIONSHIP_FIELDS } from '@mcs/product-catalog/pages/components/RelationshipManager';

const meta = {
  title: 'mcs-product-catalog/Components/RelationshipManager',
  component: RelationshipManager,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RelationshipManager>;

export default meta;
type Story = StoryObj<typeof meta>;

function RelationshipManagerPreview() {
  const [items, setItems] = useState<Record<string, string>[]>([
    {
      id: 'offering-rel-001',
      name: 'FiberHome Plus Add-On',
      relationshipType: 'bundles',
      role: 'child',
      '@type': 'ProductOfferingRelationship',
    },
  ]);

  return (
    <Box sx={{ maxWidth: 1100 }}>
      <RelationshipManager
        title="Product Offering Relationship"
        items={items}
        onChange={setItems}
        fields={OFFERING_RELATIONSHIP_FIELDS}
      />
    </Box>
  );
}

export const Preview: Story = {
  render: () => <RelationshipManagerPreview />,
};
