import type { Meta, StoryObj } from '@storybook/react';
import CustomSelect from '@mcs/common/select';

const meta = {
  title: 'mcs-common/Components/Select',
  component: CustomSelect,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Select label',
    },
    value: {
      description: 'Currently selected value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable select',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Select size',
    },
  },
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
  { label: 'Option 4', value: 'opt4' },
];

export const SingleSelect: Story = {
  args: {
    label: 'Select an option',
    options: options,
    value: 'opt1',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: options,
    disabled: true,
    value: 'opt1',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Select',
    options: options,
    size: 'small',
    value: 'opt1',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Select with helper text',
    options: options,
    value: 'opt1',
    helperText: 'Please select one option',
  },
};

