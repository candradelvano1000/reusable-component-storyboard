import type { Meta, StoryObj } from '@storybook/react';
import CustomTextField from '@mcs/common/textfield';

const meta = {
  title: 'mcs-common/Components/TextField',
  component: CustomTextField,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'date'],
      description: 'Input type',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'TextField size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable field',
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
    },
    helperText: {
      control: 'text',
      description: 'Helper/error text',
    },
  },
} satisfies Meta<typeof CustomTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enter text',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: true,
    helperText: 'Password is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    disabled: true,
    value: 'Cannot edit',
  },
};

export const Small: Story = {
  args: {
    label: 'Small field',
    size: 'small',
  },
};

export const Required: Story = {
  args: {
    label: 'Required field',
    required: true,
  },
};

