import type { Meta, StoryObj } from '@storybook/react';
import CustomTabs from '@mcs/common/tabs';

const meta = {
  title: 'MCS/Components/Tabs',
  component: CustomTabs,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    onChange: () => {},
    tabs: [
      { label: 'General', content: 'General settings' },
      { label: 'Pricing', content: 'Pricing setup' }
    ]
  }
};
