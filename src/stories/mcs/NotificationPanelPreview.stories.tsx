import type { Meta, StoryObj } from '@storybook/react';
import NotificationPanelPreview from '@mcs/common/notification-panel-preview';

const meta = {
  title: 'MCS/Components/NotificationPanelPreview',
  component: NotificationPanelPreview,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof NotificationPanelPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    items: [
      {
        id: 'n1',
        title: 'Quote approved',
        description: 'Quote Q-1001 was approved by manager',
        time: '2m ago',
        unread: true
      },
      {
        id: 'n2',
        title: 'New lead assigned',
        description: 'Lead L-204 has been assigned to your team',
        time: '12m ago'
      }
    ],
    onClose: () => {}
  }
};
