import type { Meta, StoryObj } from '@storybook/react';
import LeadPage from '../../../../mcs/sales/src/pages/lead';

const meta = {
  title: 'MCS-SALES/Pages/LeadPage',
  component: LeadPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LeadPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
