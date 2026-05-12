import type { Meta, StoryObj } from '@storybook/react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomSpeedDial from '@mcs/common/speeddial';

const meta = {
  title: 'MCS/Components/SpeedDial',
  component: CustomSpeedDial,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomSpeedDial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'quick actions',
    actions: [
      { icon: <AddIcon />, name: 'Add' },
      { icon: <EditIcon />, name: 'Edit' },
      { icon: <DeleteIcon />, name: 'Delete' }
    ]
  }
};
