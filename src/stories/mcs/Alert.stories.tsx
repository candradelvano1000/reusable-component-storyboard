import type { Meta, StoryObj } from '@storybook/react';
import CustomAlert from '@mcs/common/alert';

const meta = {
  title: 'MCS/Components/Alert',
  component: CustomAlert,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Operation completed successfully',
    severity: 'success',
    title: 'Success'
  }
};
