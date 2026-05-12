import type { Meta, StoryObj } from '@storybook/react';
import CustomTable from '@mcs/common/table';

const meta = {
  title: 'MCS/Components/Table',
  component: CustomTable,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headers: [{ label: 'Name' }, { label: 'Status' }],
    rows: [
      { id: 1, cells: ['Agreement A', 'Active'] },
      { id: 2, cells: ['Agreement B', 'Pending'] }
    ]
  }
};
