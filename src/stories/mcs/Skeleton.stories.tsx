import type { Meta, StoryObj } from '@storybook/react';
import CustomSkeleton from '@mcs/common/skeleton';

const meta = {
  title: 'MCS/Components/Skeleton',
  component: CustomSkeleton,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'rectangular',
    width: 240,
    height: 56
  }
};
