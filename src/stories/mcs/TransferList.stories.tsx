import type { Meta, StoryObj } from '@storybook/react';
import CustomTransferList from '@mcs/common/transferlist';

const meta = {
  title: 'MCS/Components/TransferList',
  component: CustomTransferList,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomTransferList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leftItems: ['Prospect', 'Qualified'],
    rightItems: ['Converted'],
    onChange: () => {}
  }
};
