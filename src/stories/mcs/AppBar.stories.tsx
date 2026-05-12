import type { Meta, StoryObj } from '@storybook/react';
import CustomAppBar from '@mcs/common/appbar';

const meta = {
  title: 'MCS/Components/AppBar',
  component: CustomAppBar,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomAppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'MCS Header',
    position: 'static',
    color: 'primary'
  }
};
