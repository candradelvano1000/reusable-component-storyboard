import type { Meta, StoryObj } from '@storybook/react';
import CustomCheckbox from '@mcs/common/checkbox';

const meta = {
  title: 'mcs-common/Components/Checkbox',
  component: CustomCheckbox,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms',
    checked: true,
    onChange: () => {}
  }
};

