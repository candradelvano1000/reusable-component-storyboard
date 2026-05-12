import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import CustomCheckbox from '@mcs/common/checkbox';

const meta = {
  title: 'mcs-common/Components/Checkbox',
  component: CustomCheckbox,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms',
    checked: true,
    onChange: () => {}
  }
};

function CheckboxInteractionDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <CustomCheckbox
      label="Interaction Checkbox"
      checked={checked}
      onChange={setChecked}
    />
  );
}

export const InteractionToggle: Story = {
  render: () => <CheckboxInteractionDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', { name: 'Interaction Checkbox' });
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  },
};

