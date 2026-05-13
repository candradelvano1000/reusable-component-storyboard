import type { Meta, StoryObj } from '@storybook/react';
import PillTabs from '../../../../mcs/sales/src/pages/components/PillTabs';
import { useState } from 'react';

function PillTabsDemo() {
  const [value, setValue] = useState(0);
  return (
    <PillTabs
      value={value}
      onChange={setValue}
      tabs={[
        { label: 'Overview', icon: '📌', content: 'Overview content' },
        { label: 'Details', icon: '📄', content: 'Details content' },
        { label: 'History', icon: '🕘', content: 'History content' },
      ]}
    />
  );
}

const meta = {
  title: 'MCS-SALES/PillTabs',
  component: PillTabs,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof PillTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <PillTabsDemo />,
};

