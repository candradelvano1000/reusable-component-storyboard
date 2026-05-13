import type { Meta, StoryObj } from '@storybook/react';
import LifecycleJourneyCard from '../../../../mcs/sales/src/pages/components/LifecycleJourneyCard';

const meta = {
  title: 'MCS-SALES/LifecycleJourneyCard',
  component: LifecycleJourneyCard,
  args: {
    phases: [
      { label: 'New', emoji: '🆕' },
      { label: 'In Progress', emoji: '⚙️' },
      { label: 'Qualified', emoji: '✅' },
      { label: 'Converted', emoji: '🎯' },
    ],
  },
} satisfies Meta<typeof LifecycleJourneyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCurrentStatus: Story = {
  args: {
    currentStatus: 'In Progress',
  },
};

export const WithActiveFilter: Story = {
  args: {
    activeFilter: 'Qualified',
    onFilterChange: () => {},
  },
};
