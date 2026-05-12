import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import CustomTextField from '@mcs/common/textfield';
import EntityFormDialog from '@mcs/product-catalog/pages/components/EntityFormDialog';

type CategoryForm = {
  name: string;
  description: string;
};

const meta = {
  title: 'mcs-product-catalog/Components/EntityFormDialog',
  component: EntityFormDialog<CategoryForm>,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EntityFormDialog<CategoryForm>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: () => (
    <EntityFormDialog<CategoryForm>
      open
      onClose={() => {}}
      title="Create Category"
      submitLabel="Create"
      initialForm={{ name: 'Home Internet', description: 'Residential broadband portfolio' }}
      validate={(form) => {
        if (form.name.trim()) {
          return null;
        }
        return 'Name is required';
      }}
      onSubmit={async () => {}}
      renderForm={({ form, setForm }) => (
        <Box sx={{ display: 'grid', gap: 2, pt: 1 }}>
          <CustomTextField
            label="Name"
            value={form.name}
            onChange={(value: string) => setForm((prev) => ({ ...prev, name: value }))}
          />
          <CustomTextField
            label="Description"
            value={form.description}
            onChange={(value: string) => setForm((prev) => ({ ...prev, description: value }))}
          />
        </Box>
      )}
    />
  ),
};
