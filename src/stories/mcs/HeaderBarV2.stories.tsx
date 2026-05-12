import type { Meta, StoryObj } from '@storybook/react';
import HeaderBarV2 from '@mcs/common/headerbar-v2';

const meta = {
  title: 'MCS/Components/HeaderBarV2',
  component: HeaderBarV2,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs']
} satisfies Meta<typeof HeaderBarV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Dashboard',
    notificationCount: 3,
    user: {
      name: 'MCS Admin',
      email: 'admin@mcs.local',
      role: 'Administrator',
      initials: 'MA'
    },
    dropdownItems: [
      { id: 'profile', label: 'My Profile' },
      { id: 'logout', label: 'Logout', color: '#dc2626' }
    ],
    menuItems: [
      { id: 'catalog', label: 'Catalog', path: '/catalog' },
      { id: 'quote', label: 'Quote', path: '/quote' },
      { id: 'agreement', label: 'Agreement', path: '/agreement' }
    ],
    onSearchResultSelect: () => {}
  }
};
