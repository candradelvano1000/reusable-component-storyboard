import type { Meta, StoryObj } from '@storybook/react';
import LeadDetailPage from '../../../../mcs/sales/src/pages/lead/LeadDetailPage';

const meta = {
  title: 'MCS-SALES/Pages/LeadDetailPage',
  component: LeadDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    id: 'lead-storybook-001',
    onBack: () => {},
  },
} satisfies Meta<typeof LeadDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
