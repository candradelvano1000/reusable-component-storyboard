import type { Meta, StoryObj } from '@storybook/react';
import CustomModal from '@mcs/common/modal';

const meta = {
  title: 'mcs-common/Components/Modal',
  component: CustomModal,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
    children: 'Modal content'
  }
};

