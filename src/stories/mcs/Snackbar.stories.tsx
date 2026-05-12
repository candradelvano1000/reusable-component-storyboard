import type { Meta, StoryObj } from '@storybook/react';
import CustomSnackbar from '@mcs/common/snackbar';

const meta = {
  title: 'mcs-common/Components/Snackbar',
  component: CustomSnackbar,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomSnackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
    message: 'Saved successfully',
    severity: 'success'
  }
};

