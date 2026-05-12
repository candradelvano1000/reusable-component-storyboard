import type { Meta, StoryObj } from '@storybook/react';
import CustomRadioGroup from '@mcs/common/radiogroup';

const meta = {
  title: 'MCS/Components/RadioGroup',
  component: CustomRadioGroup,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Priority',
    value: 'm',
    onChange: () => {},
    options: [
      { label: 'Low', value: 'l' },
      { label: 'Medium', value: 'm' },
      { label: 'High', value: 'h' }
    ]
  }
};
