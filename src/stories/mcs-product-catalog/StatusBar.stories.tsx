import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import StatusBar from '@mcs/product-catalog/pages/components/StatusBar';

type Item = { id: string; lifecycleStatus: string };

const meta = {
  title: 'mcs-product-catalog/Pages/StatusBar',
  component: StatusBar<Item>,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof StatusBar<Item>>;

export default meta;
type Story = StoryObj<typeof meta>;

function StatusBarDemo() {
  const [active, setActive] = useState('');
  const items: Item[] = [
    { id: '1', lifecycleStatus: 'active' },
    { id: '2', lifecycleStatus: 'active' },
    { id: '3', lifecycleStatus: 'draft' },
    { id: '4', lifecycleStatus: 'retired' }
  ];

  return (
    <StatusBar
      items={items}
      statuses={['active', 'draft', 'retired']}
      activeFilter={active}
      onFilterChange={setActive}
      pickStatus={(item) => item.lifecycleStatus}
    />
  );
}

export const Default: Story = {
  render: () => <StatusBarDemo />
};
