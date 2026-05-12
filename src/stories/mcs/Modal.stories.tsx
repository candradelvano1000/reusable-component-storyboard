import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import CustomModal from '@mcs/common/modal';
import CustomButton from '@mcs/common/button';

const meta = {
  title: 'mcs-common/Components/Modal',
  component: CustomModal,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
    children: 'Modal content'
  }
};

function ModalInteractionDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CustomButton label="Open Modal" onClick={() => setOpen(true)} />
      <CustomModal open={open} onClose={() => setOpen(false)}>
        Modal interaction content
      </CustomModal>
    </>
  );
}

export const InteractionOpenModal: Story = {
  render: () => <ModalInteractionDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const surface = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', { name: 'Open Modal' }));
    await expect(surface.getByText('Modal interaction content')).toBeInTheDocument();
  },
};

