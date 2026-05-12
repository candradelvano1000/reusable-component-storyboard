import type { Meta, StoryObj } from '@storybook/react';
import DetailListSection from '@mcs/product-catalog/pages/components/DetailListSection';

const meta = {
  title: 'mcs-product-catalog/Pages/DetailListSection',
  component: DetailListSection,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof DetailListSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Related Specifications',
    items: [
      { id: 'spec-001', name: 'Fiber Home 50 Mbps', version: '1.0', role: 'parent' },
      { id: 'spec-002', name: 'Fiber Home 100 Mbps', version: '1.2', role: 'child' }
    ],
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'version', label: 'Version' },
      { key: 'role', label: 'Role' }
    ]
  }
};
