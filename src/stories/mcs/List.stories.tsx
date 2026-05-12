import type { Meta, StoryObj } from '@storybook/react';
import CustomList from '@mcs/common/list';

const meta = {
  title: 'mcs-common/Components/List',
  component: CustomList,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { primary: 'Lead Management', secondary: 'TMF699' },
      { primary: 'Quote Management', secondary: 'TMF648' }
    ]
  }
};

