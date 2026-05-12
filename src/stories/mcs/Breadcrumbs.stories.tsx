import type { Meta, StoryObj } from '@storybook/react';
import CustomBreadcrumbs from '@mcs/common/breadcrumbs';

const meta = {
  title: 'mcs-common/Components/Breadcrumbs',
  component: CustomBreadcrumbs,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomBreadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Catalog', href: '/catalog' },
      { label: 'Detail' }
    ]
  }
};

