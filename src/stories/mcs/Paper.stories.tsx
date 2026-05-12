import type { Meta, StoryObj } from '@storybook/react';
import CustomPaper from '@mcs/common/paper';

const meta = {
  title: 'mcs-common/Components/Paper',
  component: CustomPaper,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomPaper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Paper content',
    elevation: 2
  }
};

