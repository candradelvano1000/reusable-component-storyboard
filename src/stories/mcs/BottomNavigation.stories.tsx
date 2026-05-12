import type { Meta, StoryObj } from '@storybook/react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CustomBottomNavigation from '@mcs/common/bottomnavigation';

const meta = {
  title: 'mcs-common/Components/BottomNavigation',
  component: CustomBottomNavigation,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomBottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    items: [
      { label: 'Home', value: 0, icon: <HomeIcon /> },
      { label: 'Search', value: 1, icon: <SearchIcon /> },
      { label: 'Likes', value: 2, icon: <FavoriteIcon /> }
    ]
  }
};

