import type { Meta, StoryObj } from '@storybook/react';
import CustomChip from '@mcs/common/chip';

const meta = {
  title: 'MCS/Components/Chip',
  component: CustomChip,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Active',
    color: 'success'
  }
};
