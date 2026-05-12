import type { Meta, StoryObj } from '@storybook/react';
import CustomDrawer from '@mcs/common/drawer';

const meta = {
  title: 'MCS/Components/Drawer',
  component: CustomDrawer,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
    title: 'Drawer title',
    children: 'Drawer content'
  }
};
