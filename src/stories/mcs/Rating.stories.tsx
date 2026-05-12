import type { Meta, StoryObj } from '@storybook/react';
import CustomRating from '@mcs/common/rating';

const meta = {
  title: 'mcs-common/Components/Rating',
  component: CustomRating,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 4,
    onChange: () => {}
  }
};

