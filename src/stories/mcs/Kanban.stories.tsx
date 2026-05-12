import type { Meta, StoryObj } from '@storybook/react';
import CustomKanban from '@mcs/common/kanban';

const meta = {
  title: 'mcs-common/Components/Kanban',
  component: CustomKanban,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomKanban>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      { key: 'todo', label: 'Todo' },
      { key: 'progress', label: 'In Progress' },
      { key: 'done', label: 'Done' }
    ],
    items: [
      { id: 'k1', columnKey: 'todo', title: 'Prepare quotation', subtitle: 'Quote #Q-1001' },
      { id: 'k2', columnKey: 'progress', title: 'Technical validation', subtitle: 'Network review' },
      { id: 'k3', columnKey: 'done', title: 'Customer approval', subtitle: 'Signed yesterday' }
    ],
    onItemMove: () => {}
  }
};

