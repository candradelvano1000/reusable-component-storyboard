import type { Meta, StoryObj } from '@storybook/react';
import CustomSwitch from '@mcs/common/switch';

const meta = {
  title: 'mcs-common/Components/Switch',
  component: CustomSwitch,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
    checked: true,
    onChange: () => {}
  }
};

