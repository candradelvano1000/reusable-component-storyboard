import type { Meta, StoryObj } from '@storybook/react';
import CustomDialog from '@mcs/common/dialog';
import CustomButton from '@mcs/common/button';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';

const meta = {
  title: 'mcs-common/Components/Dialog',
  component: CustomDialog,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Dialog open state',
    },
    title: {
      control: 'text',
      description: 'Dialog title',
    },
    onClose: {
      action: 'closed',
      description: 'Close handler',
    },
  },
} satisfies Meta<typeof CustomDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

function DialogWithState() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CustomButton
        label="Open Dialog"
        onClick={() => setOpen(true)}
      />
      <CustomDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Dialog Title"
        content="This is the dialog content. You can add any content here."
      />
    </>
  );
}

export const Basic: Story = {
  render: () => <DialogWithState />,
};

export const WithContent: Story = {
  args: {
    open: true,
    title: 'Confirmation Dialog',
    onClose: () => {},
    content: (
      <>
        <p>Are you sure you want to proceed with this action?</p>
        <p>This action cannot be undone.</p>
      </>
    ),
  },
  render: (args) => <CustomDialog {...args} />,
};

export const ConfirmationDialog: Story = {
  args: {
    open: true,
    title: 'Delete Item',
    onClose: () => {},
    content: <p>Do you want to delete this item?</p>,
    actions: (
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <CustomButton label="Cancel" variant="outlined" />
        <CustomButton label="Delete" color="error" />
      </div>
    ),
  },
  render: (args) => <CustomDialog {...args} />,
};

export const InteractionOpenDialog: Story = {
  render: () => <DialogWithState />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Open Dialog' }));
    await expect(canvas.getByText('This is the dialog content. You can add any content here.')).toBeInTheDocument();
  },
};

