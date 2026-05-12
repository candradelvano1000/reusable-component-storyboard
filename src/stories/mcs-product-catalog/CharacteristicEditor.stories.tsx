import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import CharacteristicEditor from '@mcs/product-catalog/pages/components/CharacteristicEditor';
import type { CharacteristicSpecification } from '@mcs/product-catalog/service';

const meta = {
  title: 'mcs-product-catalog/Components/CharacteristicEditor',
  component: CharacteristicEditor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CharacteristicEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

function CharacteristicEditorPreview() {
  const [characteristics, setCharacteristics] = useState<CharacteristicSpecification[]>([
    {
      id: 'char-speed',
      name: 'Download Speed',
      description: 'Maximum downlink throughput in Mbps',
      valueType: 'number',
      configurable: true,
      extensible: false,
      isUnique: true,
      productSpecCharacteristicValue: [
        {
          valueType: 'number',
          value: '200',
          isDefault: true,
          '@type': 'NumberCharacteristicValueSpecification',
        },
      ],
      '@type': 'CharacteristicSpecification',
    },
  ]);

  return (
    <Box sx={{ maxWidth: 1100 }}>
      <CharacteristicEditor characteristics={characteristics} onChange={setCharacteristics} />
    </Box>
  );
}

export const Preview: Story = {
  render: () => <CharacteristicEditorPreview />,
};
