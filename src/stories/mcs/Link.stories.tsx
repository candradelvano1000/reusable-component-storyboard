import type { Meta, StoryObj } from '@storybook/react';
import CustomLink from '@mcs/common/link';

const meta = {
  title: 'MCS/Components/Link',
  component: CustomLink,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    label: 'Go to detail',
    underline: 'hover'
  }
};
