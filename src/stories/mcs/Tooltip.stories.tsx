import type { Meta, StoryObj } from '@storybook/react';
import CustomTooltip from '@mcs/common/tooltip';

const meta = {
  title: 'MCS/Components/Tooltip',
  component: CustomTooltip,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Helpful tooltip',
    children: 'Hover this text'
  }
};
