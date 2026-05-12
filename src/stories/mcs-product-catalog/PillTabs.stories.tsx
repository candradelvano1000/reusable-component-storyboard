import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import PillTabs from '@mcs/product-catalog/pages/components/PillTabs';

const meta = {
  title: 'mcs-product-catalog/Pages/PillTabs',
  component: PillTabs,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof PillTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

function PillTabsDemo() {
  const [value, setValue] = useState(0);
  return (
    <PillTabs
      value={value}
      onChange={setValue}
      tabs={[
        { label: 'Overview', icon: '📦', content: 'Overview tab content' },
        { label: 'Specification', icon: '🧩', content: 'Specification tab content' },
        { label: 'Pricing', icon: '💰', content: 'Pricing tab content' }
      ]}
    />
  );
}

export const Default: Story = {
  render: () => <PillTabsDemo />
};
