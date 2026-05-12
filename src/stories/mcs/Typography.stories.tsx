import type { Meta, StoryObj } from '@storybook/react';
import CustomTypography from '@mcs/common/typography';

const meta = {
  title: 'mcs-common/Components/Typography',
  component: CustomTypography,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Typography from mcs/common',
    variant: 'h6'
  }
};

