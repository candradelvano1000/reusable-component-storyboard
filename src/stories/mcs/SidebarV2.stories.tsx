import type { Meta, StoryObj } from '@storybook/react';
import SidebarV2 from '@mcs/common/sidebar-v2';

const meta = {
  title: 'mcs-common/Components/SidebarV2',
  component: SidebarV2,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs']
} satisfies Meta<typeof SidebarV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brandTitle: 'Acme Telecom',
    brandSubtitle: 'Operations',
    brandInitials: 'AT',
    items: [
      {
        title: 'MAIN',
        items: [
          { id: 'home', label: 'Home', path: '/' },
          { id: 'catalog', label: 'Catalog', path: '/catalog' },
          { id: 'quote', label: 'Quote', path: '/quote' }
        ]
      },
      {
        title: 'MANAGEMENT',
        items: [
          { id: 'agreement', label: 'Agreement', path: '/agreement' },
          { id: 'event', label: 'Event', path: '/event' }
        ]
      }
    ],
    infoCard: {
      title: 'LIFECYCLE FLOW',
      description: 'Lead -> Quote -> Agreement'
    },
    user: {
      name: 'MCS Admin',
      role: 'Administrator',
      initials: 'MA'
    },
    activeItem: '/catalog',
    onNavigate: () => {}
  }
};

