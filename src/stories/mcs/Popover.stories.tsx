import type { Meta, StoryObj } from '@storybook/react';
import CustomPopover from '@mcs/common/popover';

const meta = {
  title: 'mcs-common/Components/Popover',
  component: CustomPopover,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    anchorEl: null,
    onClose: () => {},
    children: 'Popover content'
  }
};

