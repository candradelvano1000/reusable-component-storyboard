import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import CustomTextField from '@mcs/common/textfield';
import FormJourneyLayout from '@mcs/product-catalog/pages/components/FormJourneyLayout';

const meta = {
  title: 'mcs-product-catalog/Components/FormJourneyLayout',
  component: FormJourneyLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormJourneyLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: () => (
    <Box sx={{ p: 3, maxWidth: 1100 }}>
      <FormJourneyLayout
        sections={[
          {
            key: 'basic',
            label: 'Basic Information',
            icon: '1',
            description: 'Primary identity and lifecycle fields',
            badge: '✓',
            content: <CustomTextField label="Offering Name" value="FiberHome Premium 200 Mbps" onChange={() => {}} />,
          },
          {
            key: 'classification',
            label: 'Classification',
            icon: '2',
            description: 'Category, channel, and market segment mapping',
            badge: '3',
            content: <CustomTextField label="Category" value="Home Internet" onChange={() => {}} />,
          },
          {
            key: 'relationship',
            label: 'Relationships',
            icon: '3',
            description: 'Specifications, prices, and linked offerings',
            badge: '',
            content: <CustomTextField label="Product Specification" value="Fiber Spec 200 Mbps" onChange={() => {}} />,
          },
        ]}
      />
    </Box>
  ),
};
