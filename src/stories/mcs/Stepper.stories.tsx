import type { Meta, StoryObj } from '@storybook/react';
import CustomStepper from '@mcs/common/stepper';

const meta = {
  title: 'MCS/Components/Stepper',
  component: CustomStepper,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: ['Draft', 'Review', 'Approved'],
    activeStep: 1
  }
};
