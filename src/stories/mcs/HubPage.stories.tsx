import type { Meta, StoryObj } from '@storybook/react';
import HubPage from '../../../../mcs/sales/src/pages/hub';

const meta = {
  title: 'MCS-SALES/Pages/HubPage',
  component: HubPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HubPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
