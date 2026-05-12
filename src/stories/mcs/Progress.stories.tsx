import type { Meta, StoryObj } from '@storybook/react';
import CustomProgress from '@mcs/common/progress';

const meta = {
  title: 'mcs-common/Components/Progress',
  component: CustomProgress,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'linear',
    variant: 'determinate',
    value: 70
  }
};

