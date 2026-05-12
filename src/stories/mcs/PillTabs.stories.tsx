import type { Meta, StoryObj } from '@storybook/react';
import PillTabs from '@mcs/common/pill-tabs';

const meta = {
  title: 'MCS/Components/PillTabs',
  component: PillTabs,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof PillTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    onChange: () => {},
    tabs: [
      { label: 'Overview', icon: '📌', content: 'Overview content' },
      { label: 'Details', icon: '📄', content: 'Details content' }
    ]
  }
};
