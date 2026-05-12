import type { Meta, StoryObj } from '@storybook/react';
import CustomBadge from '@mcs/common/badge';

const meta = {
  title: 'mcs-common/Components/Badge',
  component: CustomBadge,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badgeContent: 9,
    children: 'Inbox',
    color: 'primary'
  }
};

