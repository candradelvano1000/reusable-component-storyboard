import type { Meta, StoryObj } from '@storybook/react';
import OpportunityDetailPage from '../../../../mcs/sales/src/pages/opportunity/OpportunityDetailPage';

const meta = {
  title: 'MCS-SALES/Pages/OpportunityDetailPage',
  component: OpportunityDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    id: 'opp-storybook-001',
    onBack: () => {},
  },
} satisfies Meta<typeof OpportunityDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
