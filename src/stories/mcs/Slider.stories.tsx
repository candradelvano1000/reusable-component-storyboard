import type { Meta, StoryObj } from '@storybook/react';
import CustomSlider from '@mcs/common/slider';

const meta = {
  title: 'mcs-common/Components/Slider',
  component: CustomSlider,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Progress',
    value: 45,
    onChange: () => {},
    min: 0,
    max: 100
  }
};

