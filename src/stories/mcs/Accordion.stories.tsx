import type { Meta, StoryObj } from '@storybook/react';
import CustomAccordion from '@mcs/common/accordion';

const meta = {
  title: 'MCS/Components/Accordion',
  component: CustomAccordion,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'What is MCS?',
    content: 'MCS is a micro-frontend platform.'
  }
};
