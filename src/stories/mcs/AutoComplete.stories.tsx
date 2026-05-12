import type { Meta, StoryObj } from '@storybook/react';
import AutoComplete from '@mcs/common/autocomplete';

const meta = {
  title: 'MCS/Components/AutoComplete',
  component: AutoComplete,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'City',
    options: [{ label: 'Jakarta' }, { label: 'Bandung' }, { label: 'Surabaya' }]
  }
};
