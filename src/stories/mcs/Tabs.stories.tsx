import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import CustomTabs from '@mcs/common/tabs';

const meta = {
  title: 'mcs-common/Components/Tabs',
  component: CustomTabs,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    onChange: () => {},
    tabs: [
      { label: 'General', content: 'General settings' },
      { label: 'Pricing', content: 'Pricing setup' }
    ]
  }
};

function TabsInteractionDemo() {
  const [value, setValue] = useState(0);

  return (
    <CustomTabs
      value={value}
      onChange={setValue}
      tabs={[
        { label: 'General', content: 'General settings' },
        { label: 'Pricing', content: 'Pricing setup' },
      ]}
    />
  );
}

export const InteractionSwitchTab: Story = {
  render: () => <TabsInteractionDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('General settings')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('tab', { name: 'Pricing' }));
    await expect(canvas.getByText('Pricing setup')).toBeInTheDocument();
  },
};

