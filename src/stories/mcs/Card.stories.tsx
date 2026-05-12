import type { Meta, StoryObj } from '@storybook/react';
import CustomCard from '@mcs/common/card';
import CustomTypography from '@mcs/common/typography';

const meta = {
  title: 'MCS/Components/Card',
  component: CustomCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: 'number',
      description: 'Card elevation (shadow)',
    },
    variant: {
      control: 'select',
      options: ['elevation', 'outlined'],
      description: 'Card style',
    },
  },
} satisfies Meta<typeof CustomCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <CustomCard {...args} sx={{ p: 2, maxWidth: 400 }}>
      <CustomTypography variant="h6" sx={{ mb: 1 }}>
        Card Title
      </CustomTypography>
      <CustomTypography variant="body2" color="textSecondary">
        This is a basic card component with some content.
      </CustomTypography>
    </CustomCard>
  ),
};

export const WithElevation: Story = {
  render: (args) => (
    <CustomCard {...args} elevation={8} sx={{ p: 2, maxWidth: 400 }}>
      <CustomTypography variant="h6">
        Card with Elevation
      </CustomTypography>
      <CustomTypography variant="body2">
        Higher elevation creates a stronger shadow effect.
      </CustomTypography>
    </CustomCard>
  ),
};

export const Outlined: Story = {
  render: (args) => (
    <CustomCard {...args} variant="outlined" sx={{ p: 2, maxWidth: 400 }}>
      <CustomTypography variant="h6">
        Outlined Card
      </CustomTypography>
      <CustomTypography variant="body2">
        This card uses an outline instead of shadow.
      </CustomTypography>
    </CustomCard>
  ),
};
