import type { Meta, StoryObj } from '@storybook/react';
import CustomMenu from '@mcs/common/menu';

const meta = {
  title: 'mcs-common/Components/Menu',
  component: CustomMenu,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Edit' },
      { label: 'Duplicate' },
      { label: 'Delete' }
    ]
  }
};

