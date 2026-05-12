import type { Meta, StoryObj } from '@storybook/react';
import CustomDataGrid from '@mcs/common/datagrid';

const meta = {
  title: 'mcs-common/Components/DataGrid',
  component: CustomDataGrid,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomDataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Products',
    rows: [
      { id: 1, name: 'Fiber 50 Mbps', price: 350000, status: 'active' },
      { id: 2, name: 'Fiber 100 Mbps', price: 450000, status: 'draft' }
    ],
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'price', label: 'Price' },
      { key: 'status', label: 'Status' }
    ]
  }
};

