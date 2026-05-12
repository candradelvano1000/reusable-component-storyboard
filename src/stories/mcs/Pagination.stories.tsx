import type { Meta, StoryObj } from '@storybook/react';
import CustomPagination from '@mcs/common/pagination';

const meta = {
  title: 'MCS/Components/Pagination',
  component: CustomPagination,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 10,
    page: 2
  }
};
