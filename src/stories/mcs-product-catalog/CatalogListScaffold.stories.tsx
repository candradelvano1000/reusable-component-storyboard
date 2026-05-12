import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CatalogListScaffold from '@mcs/product-catalog/pages/components/CatalogListScaffold';

const meta = {
  title: 'mcs-product-catalog/Components/CatalogListScaffold',
  component: CatalogListScaffold,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CatalogListScaffold>;

export default meta;
type Story = StoryObj<typeof meta>;

function CatalogListScaffoldPreview() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <CatalogListScaffold
      breadcrumbLabel="Product Catalog"
      pageTitle="Product Catalog Management"
      pageSubtitle="Manage catalogs, categories, offerings, and references in one place."
      createLabel="Create Catalog"
      onCreateClick={() => {}}
      phases={[
        { label: 'All', emoji: '📦', value: 'all' },
        { label: 'Active', emoji: '✅', value: 'Active' },
        { label: 'In Study', emoji: '🧪', value: 'In Study' },
        { label: 'Retired', emoji: '🗂️', value: 'Retired' },
      ]}
      activeFilter={activeFilter}
      onFilterChange={setActiveFilter}
      dataGridProps={{
        title: 'Catalog Entries',
        rows: [
          { id: 'cat-001', name: 'Residential Services', status: 'Active', version: '1.2' },
          { id: 'cat-002', name: 'Business Connectivity', status: 'In Study', version: '1.0' },
          { id: 'cat-003', name: 'Legacy Copper Plans', status: 'Retired', version: '0.9' },
        ],
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'status', label: 'Lifecycle' },
          { key: 'version', label: 'Version' },
        ],
      }}
      createDialog={null}
      editDialog={null}
      deleteDialog={{
        open: false,
        onClose: () => {},
        title: 'Delete Catalog',
        message: 'Are you sure you want to delete this catalog?',
        onConfirm: () => {},
      }}
      snack={{
        open: true,
        message: 'Catalog list loaded successfully',
        severity: 'success',
      }}
      onCloseSnack={() => {}}
    />
  );
}

export const Preview: Story = {
  render: () => <CatalogListScaffoldPreview />,
};
