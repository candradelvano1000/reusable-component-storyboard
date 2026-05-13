import type { Meta, StoryObj } from '@storybook/react';
import DetailListSection from '../../../../mcs/sales/src/pages/components/DetailListSection';

const items = [
  {
    id: 'lead-001',
    name: 'Fiber Upgrade Lead',
    version: '1.0',
    role: 'Prospect',
    partyType: 'individual',
    referredType: 'Lead',
  },
  {
    id: 'lead-002',
    name: 'Enterprise Migration',
    version: '2.1',
    role: 'Decision Maker',
    partyType: 'organization',
    referredType: 'Lead',
  },
];

const meta = {
  title: 'MCS-SALES/DetailListSection',
  component: DetailListSection,
  args: {
    title: 'Related Parties',
    emptyMessage: 'No related party found.',
    items,
  },
} satisfies Meta<typeof DetailListSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColumns: Story = {
  args: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'role', label: 'Role' },
      { key: 'id', label: 'Identifier' },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
