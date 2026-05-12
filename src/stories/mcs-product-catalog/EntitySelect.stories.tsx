import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { EntityMultiSelect, EntitySingleSelect, type EntityOption } from '@mcs/product-catalog/pages/components/EntitySelect';

const meta = {
  title: 'mcs-product-catalog/Components/EntitySelect',
  component: EntitySingleSelect,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EntitySingleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockOptions: EntityOption[] = [
  { id: 'spec-fiber-100', label: 'Fiber Spec 100 Mbps', name: 'Fiber Spec 100 Mbps', version: '1.0' },
  { id: 'spec-fiber-200', label: 'Fiber Spec 200 Mbps', name: 'Fiber Spec 200 Mbps', version: '1.2' },
  { id: 'spec-fiber-500', label: 'Fiber Spec 500 Mbps', name: 'Fiber Spec 500 Mbps', version: '2.0' },
];

function EntitySelectPreview() {
  const [single, setSingle] = useState<{ id?: string; name?: string } | null>(mockOptions[1]);
  const [multi, setMulti] = useState<Array<{ id?: string; name?: string }>>([mockOptions[0]]);

  return (
    <Stack spacing={3} sx={{ maxWidth: 780 }}>
      <EntitySingleSelect
        label="Product Specification"
        value={single}
        onChange={setSingle}
        loadOptions={async () => mockOptions}
      />
      <EntityMultiSelect
        label="Related Specifications"
        value={multi}
        onChange={setMulti}
        loadOptions={async () => mockOptions}
      />
      <Box sx={{ p: 2, border: '1px solid #e2e8f0', borderRadius: 2, bgcolor: '#f8fafc', fontSize: '0.85rem' }}>
        <strong>Selected single:</strong> {single?.name ?? 'none'}
        <br />
        <strong>Selected multiple:</strong> {multi.map((item) => item.name).join(', ') || 'none'}
      </Box>
    </Stack>
  );
}

export const Preview: Story = {
  render: () => <EntitySelectPreview />,
};
