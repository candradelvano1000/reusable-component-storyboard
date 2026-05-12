import type { Meta, StoryObj } from '@storybook/react';
import CustomAvatar from '@mcs/common/avatar';

const meta = {
  title: 'mcs-common/Components/Avatar',
  component: CustomAvatar,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'MC',
    variant: 'circular',
    size: 48
  }
};

