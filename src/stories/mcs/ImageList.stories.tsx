import type { Meta, StoryObj } from '@storybook/react';
import CustomImageList from '@mcs/common/imagelist';

const meta = {
  title: 'mcs-common/Components/ImageList',
  component: CustomImageList,
  parameters: { layout: 'padded' },
  tags: ['autodocs']
} satisfies Meta<typeof CustomImageList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/400/300?1', title: 'Image 1' },
      { src: 'https://picsum.photos/400/300?2', title: 'Image 2' },
      { src: 'https://picsum.photos/400/300?3', title: 'Image 3' }
    ],
    cols: 3
  }
};

