import type { Meta, StoryObj } from '@storybook/react';
import Topbar from '@mcs/common/topbar';

const meta = {
  title: 'MCS/Components/Topbar',
  component: Topbar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs']
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badge: 'TMF620',
    menuItems: [
      { id: 'home', label: 'Home' },
      { id: 'catalog', label: 'Catalog' }
    ],
    actions: [
      { id: 'notif', ariaLabel: 'Notifications', title: 'Notifications', icon: '🔔', badge: 2 },
      { id: 'settings', ariaLabel: 'Settings', title: 'Settings', icon: '⚙️' }
    ],
    user: {
      initials: 'MA'
    }
  }
};
