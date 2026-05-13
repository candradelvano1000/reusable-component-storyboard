import type { Meta, StoryObj } from '@storybook/react';
import OpportunityPage from '../../../../mcs/sales/src/pages/opportunity';

const meta = {
  title: 'MCS-SALES/Pages/OpportunityPage',
  component: OpportunityPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof OpportunityPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
