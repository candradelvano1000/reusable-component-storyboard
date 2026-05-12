import type { Meta, StoryObj } from '@storybook/react';
import CustomTimeline from '@mcs/common/timeline';

const meta = {
  title: 'mcs-common/Components/Timeline',
  component: CustomTimeline,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    events: [
      { title: 'Lead created', subtitle: '08:30' },
      { title: 'Quote sent', subtitle: '10:15' },
      { title: 'Agreement signed', subtitle: '14:20' }
    ]
  }
};

