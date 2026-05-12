import type { Meta, StoryObj } from '@storybook/react';
import LifecycleJourneyCard from '@mcs/product-catalog/pages/components/LifecycleJourneyCard';

const meta = {
  title: 'mcs-product-catalog/Pages/LifecycleJourneyCard',
  component: LifecycleJourneyCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof LifecycleJourneyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    phases: [
      { label: 'Draft', emoji: '📝', value: 'draft' },
      { label: 'In Review', emoji: '🔎', value: 'inReview' },
      { label: 'Launched', emoji: '🚀', value: 'launched' }
    ],
    currentStatus: 'inReview'
  }
};
