import type { Meta, StoryObj } from '@storybook/react';
import CustomToggleButton from '@mcs/common/togglebutton';

const meta = {
  title: 'MCS/Components/ToggleButton',
  component: CustomToggleButton,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'left',
    onChange: () => {},
    options: [
      { value: 'left', label: 'Left' },
      { value: 'center', label: 'Center' },
      { value: 'right', label: 'Right' }
    ]
  }
};
