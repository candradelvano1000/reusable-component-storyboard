import type { Meta, StoryObj } from '@storybook/react';
import CustomDivider from '@mcs/common/divider';

const meta = {
  title: 'MCS/Components/Divider',
  component: CustomDivider,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'OR'
  }
};
