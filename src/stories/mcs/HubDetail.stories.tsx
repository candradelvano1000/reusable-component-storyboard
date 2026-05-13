import type { Meta, StoryObj } from '@storybook/react';
import HubDetail from '../../../../mcs/sales/src/pages/hub/detail';

const meta = {
  title: 'MCS-SALES/Pages/HubDetail',
  component: HubDetail,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    eventId: 'evt-storybook-001',
    onBack: () => {},
    onRetrySuccess: () => {},
  },
} satisfies Meta<typeof HubDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
