import type { Meta, StoryObj } from '@storybook/react';
import MyProfile from '@mcs/common/my-profile';

const meta = {
  title: 'MCS/Components/MyProfile',
  component: MyProfile,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof MyProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'My Profile',
    subtitle: 'Identity source Keycloak',
    onLoadKeycloak: async () => ({
      source: 'keycloak',
      id: 'u-001',
      username: 'mcs-admin',
      fullName: 'MCS Admin',
      email: 'admin@mcs.local',
      roles: ['profile.admin', 'menu.catalog', 'api.quote.read']
    }),
    onLoadTmfOda: async () => ({
      source: 'tmf-oda',
      id: 'u-001',
      username: 'mcs-admin',
      fullName: 'MCS Admin',
      email: 'admin@mcs.local',
      roles: ['profile.user']
    })
  }
};
