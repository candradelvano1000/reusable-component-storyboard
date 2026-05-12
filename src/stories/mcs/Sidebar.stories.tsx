import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from '@mcs/common/sidebar';

const meta = {
  title: 'MCS/Components/Sidebar',
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs']
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brandTitle: 'Acme Telecom',
    brandSubtitle: 'Business Suite',
    items: [
      {
        title: 'MAIN',
        items: [
          { id: 'home', label: 'Home', path: '/' },
          { id: 'catalog', label: 'Catalog', path: '/catalog' }
        ]
      },
      {
        title: 'SERVICES',
        items: [
          { id: 'quote', label: 'Quote', path: '/quote' },
          { id: 'agreement', label: 'Agreement', path: '/agreement' }
        ]
      }
    ],
    user: {
      name: 'MCS Admin',
      role: 'Administrator',
      initials: 'MA'
    },
    collapsed: false,
    activeItem: '/quote',
    onToggleCollapse: () => {},
    onNavigate: () => {}
  }
};
