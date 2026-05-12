import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import FormJourneyStepper from '@mcs/product-catalog/pages/components/FormJourneyStepper';

const meta = {
  title: 'mcs-product-catalog/Pages/FormJourneyStepper',
  component: FormJourneyStepper,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof FormJourneyStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

function FormJourneyStepperDemo() {
  const [active, setActive] = useState('basic');
  return (
    <FormJourneyStepper
      activeKey={active}
      onStepClick={setActive}
      steps={[
        { key: 'basic', label: 'Basic', icon: '🧾' },
        { key: 'relationship', label: 'Relationship', icon: '🔗' },
        { key: 'pricing', label: 'Pricing', icon: '💲' },
        { key: 'review', label: 'Review', icon: '✅' }
      ]}
    />
  );
}

export const Default: Story = {
  render: () => <FormJourneyStepperDemo />
};
