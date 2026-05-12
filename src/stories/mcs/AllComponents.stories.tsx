import type { Meta } from '@storybook/react';
import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageIcon from '@mui/icons-material/Image';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton from '@mcs/common/button';
import CustomTextField from '@mcs/common/textfield';
import CustomCard from '@mcs/common/card';
import CustomDialog from '@mcs/common/dialog';
import CustomCheckbox from '@mcs/common/checkbox';
import CustomSelect from '@mcs/common/select';
import CustomSwitch from '@mcs/common/switch';
import CustomRadioGroup from '@mcs/common/radiogroup';
import CustomSlider from '@mcs/common/slider';
import CustomChip from '@mcs/common/chip';
import CustomAlert from '@mcs/common/alert';
import CustomTooltip from '@mcs/common/tooltip';
import CustomTabs from '@mcs/common/tabs';
import CustomAvatar from '@mcs/common/avatar';
import CustomBadge from '@mcs/common/badge';
import CustomDivider from '@mcs/common/divider';
import CustomDrawer from '@mcs/common/drawer';
import CustomAppBar from '@mcs/common/appbar';
import CustomPagination from '@mcs/common/pagination';
import CustomRating from '@mcs/common/rating';
import CustomSnackbar from '@mcs/common/snackbar';
import CustomMenu from '@mcs/common/menu';
import CustomPaper from '@mcs/common/paper';
import CustomProgress from '@mcs/common/progress';
import CustomTypography from '@mcs/common/typography';
import CustomSkeleton from '@mcs/common/skeleton';
import CustomLink from '@mcs/common/link';
import CustomList from '@mcs/common/list';
import CustomModal from '@mcs/common/modal';
import CustomPopover from '@mcs/common/popover';
import CustomSpeedDial from '@mcs/common/speeddial';
import CustomStepper from '@mcs/common/stepper';
import CustomTable from '@mcs/common/table';
import CustomDataGrid from '@mcs/common/datagrid';
import CustomToggleButton from '@mcs/common/togglebutton';
import CustomImageList from '@mcs/common/imagelist';
import CustomTransferList from '@mcs/common/transferlist';
import CustomTimeline from '@mcs/common/timeline';
import CustomBreadcrumbs from '@mcs/common/breadcrumbs';
import CustomAccordion from '@mcs/common/accordion';
import CustomBottomNavigation from '@mcs/common/bottomnavigation';
import CustomKanban from '@mcs/common/kanban';
import PillTabs from '@mcs/common/pill-tabs';
import AutoComplete from '@mcs/common/autocomplete';

const meta = {
  title: 'mcs-common/Components/All Components',
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta;

export default meta;

function PreviewCard({ title, children }: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <Paper sx={{ p: 2, borderRadius: 2, border: '1px solid #e5e7eb' }}>
      <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 700 }}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
}

export const AllComponents = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [switchValue, setSwitchValue] = useState(false);
  const [radioValue, setRadioValue] = useState<string | number>('a');
  const [sliderValue, setSliderValue] = useState<number | number[]>(40);
  const [ratingValue, setRatingValue] = useState(3);
  const [selectValue, setSelectValue] = useState<string | number>('jakarta');
  const [toggleValue, setToggleValue] = useState<string | number | null>('left');
  const [tabValue, setTabValue] = useState(0);
  const [pillTabValue, setPillTabValue] = useState(0);
  const [autoValue, setAutoValue] = useState<{ label: string } | null>({ label: 'Bandung' });
  const [kanbanItems, setKanbanItems] = useState([
    { id: 'k1', columnKey: 'todo', title: 'Prepare quotation', subtitle: 'Quote #Q-1001', amount: '$1,200' },
    { id: 'k2', columnKey: 'progress', title: 'Technical validation', subtitle: 'Network team review', amount: '$890' },
    { id: 'k3', columnKey: 'done', title: 'Customer approval', subtitle: 'Signed yesterday', amount: '$2,450' }
  ]);
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLElement | null>(null);

  const cityOptions = useMemo(() => [
    { label: 'Jakarta', value: 'jakarta' },
    { label: 'Bandung', value: 'bandung' },
    { label: 'Surabaya', value: 'surabaya' }
  ], []);

  return (
    <Box sx={{ p: 3, bgcolor: '#f8fafc', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
        MCS Common - Full Component Gallery
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Semua komponen dari mcs/common sudah dimasukkan ke Storybook dan dirender dengan sample props.
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 2 }}>
        <PreviewCard title="AutoComplete">
          <AutoComplete options={[{ label: 'Jakarta' }, { label: 'Bandung' }, { label: 'Yogyakarta' }]} value={autoValue} onUpdate={(value) => setAutoValue(value)} label="City" />
        </PreviewCard>

        <PreviewCard title="CustomTextField">
          <CustomTextField label="Project name" value="MCS Storybook" />
        </PreviewCard>

        <PreviewCard title="CustomButton">
          <CustomButton label="Open Snackbar" onClick={() => setIsSnackbarOpen(true)} />
        </PreviewCard>

        <PreviewCard title="CustomCard">
          <CustomCard title="Summary" content="This card comes from mcs/common." />
        </PreviewCard>

        <PreviewCard title="CustomDialog">
          <CustomButton label="Open Dialog" onClick={() => setIsDialogOpen(true)} variant="outlined" />
          <CustomDialog
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="Dialog Example"
            content={<Typography variant="body2">Dialog content rendered from CustomDialog.</Typography>}
            actions={<CustomButton label="Close" onClick={() => setIsDialogOpen(false)} />}
          />
        </PreviewCard>

        <PreviewCard title="CustomCheckbox">
          <CustomCheckbox checked={checkboxValue} onChange={setCheckboxValue} label="Enable feature" />
        </PreviewCard>

        <PreviewCard title="CustomSelect">
          <CustomSelect label="Region" value={selectValue} options={cityOptions} onChange={(value) => setSelectValue(value)} />
        </PreviewCard>

        <PreviewCard title="CustomSwitch">
          <CustomSwitch checked={switchValue} onChange={setSwitchValue} label="Dark mode" />
        </PreviewCard>

        <PreviewCard title="CustomRadioGroup">
          <CustomRadioGroup
            label="Priority"
            value={radioValue}
            onChange={(value) => setRadioValue(value)}
            options={[{ label: 'Low', value: 'l' }, { label: 'Medium', value: 'm' }, { label: 'High', value: 'h' }]}
          />
        </PreviewCard>

        <PreviewCard title="CustomSlider">
          <CustomSlider label="Progress" value={sliderValue} onChange={(value) => setSliderValue(value)} min={0} max={100} />
        </PreviewCard>

        <PreviewCard title="CustomChip">
          <CustomChip label="Approved" color="success" />
        </PreviewCard>

        <PreviewCard title="CustomAlert">
          <CustomAlert message="Changes saved successfully" severity="success" title="Success" />
        </PreviewCard>

        <PreviewCard title="CustomTooltip">
          <CustomTooltip title="Additional info">
            <CustomButton label="Hover me" variant="text" />
          </CustomTooltip>
        </PreviewCard>

        <PreviewCard title="CustomTabs">
          <CustomTabs tabs={[{ label: 'General', content: <Typography>General tab</Typography> }, { label: 'Pricing', content: <Typography>Pricing tab</Typography> }]} value={tabValue} onChange={setTabValue} />
        </PreviewCard>

        <PreviewCard title="CustomAvatar">
          <CustomAvatar>MC</CustomAvatar>
        </PreviewCard>

        <PreviewCard title="CustomBadge">
          <CustomBadge badgeContent={8}>
            <InfoIcon />
          </CustomBadge>
        </PreviewCard>

        <PreviewCard title="CustomDivider">
          <CustomDivider>OR</CustomDivider>
        </PreviewCard>

        <PreviewCard title="CustomDrawer">
          <CustomButton label="Open Drawer" variant="outlined" onClick={() => setIsDrawerOpen(true)} />
          <CustomDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="Notifications">
            <Typography variant="body2">Drawer content from CustomDrawer.</Typography>
          </CustomDrawer>
        </PreviewCard>

        <PreviewCard title="CustomAppBar">
          <CustomAppBar title="MCS App Bar" />
        </PreviewCard>

        <PreviewCard title="CustomPagination">
          <CustomPagination count={10} page={2} />
        </PreviewCard>

        <PreviewCard title="CustomRating">
          <CustomRating value={ratingValue} onChange={setRatingValue} />
        </PreviewCard>

        <PreviewCard title="CustomSnackbar">
          <CustomSnackbar open={isSnackbarOpen} onClose={() => setIsSnackbarOpen(false)} message="Storybook synced" severity="info" />
        </PreviewCard>

        <PreviewCard title="CustomMenu">
          <CustomMenu items={[{ label: 'Edit' }, { label: 'Archive' }, { label: 'Delete' }]} />
        </PreviewCard>

        <PreviewCard title="CustomPaper">
          <CustomPaper>
            <Typography variant="body2">Paper wrapper content</Typography>
          </CustomPaper>
        </PreviewCard>

        <PreviewCard title="CustomProgress">
          <CustomProgress type="linear" variant="determinate" value={65} />
        </PreviewCard>

        <PreviewCard title="CustomTypography">
          <CustomTypography variant="h6">Heading from CustomTypography</CustomTypography>
        </PreviewCard>

        <PreviewCard title="CustomSkeleton">
          <CustomSkeleton variant="rectangular" width="100%" height={48} />
        </PreviewCard>

        <PreviewCard title="CustomLink">
          <CustomLink href="#" label="View full report" />
        </PreviewCard>

        <PreviewCard title="CustomList">
          <CustomList items={[{ primary: 'Catalog', secondary: 'TMF620' }, { primary: 'Quote', secondary: 'TMF648' }]} />
        </PreviewCard>

        <PreviewCard title="CustomModal">
          <CustomButton label="Open Modal" onClick={() => setIsModalOpen(true)} variant="outlined" />
          <CustomModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <Typography variant="body1">Modal content example</Typography>
          </CustomModal>
        </PreviewCard>

        <PreviewCard title="CustomPopover">
          <CustomButton label="Open Popover" onClick={(event) => setPopoverAnchor(event.currentTarget as HTMLElement)} />
          <CustomPopover open={Boolean(popoverAnchor)} anchorEl={popoverAnchor} onClose={() => setPopoverAnchor(null)}>
            <Box sx={{ p: 2 }}>
              <Typography variant="body2">Popover content</Typography>
            </Box>
          </CustomPopover>
        </PreviewCard>

        <PreviewCard title="CustomSpeedDial">
          <Box sx={{ height: 120, position: 'relative' }}>
            <CustomSpeedDial
              ariaLabel="quick actions"
              actions={[
                { icon: <AddIcon />, name: 'Add' },
                { icon: <EditIcon />, name: 'Edit' },
                { icon: <DeleteIcon />, name: 'Delete' }
              ]}
            />
          </Box>
        </PreviewCard>

        <PreviewCard title="CustomStepper">
          <CustomStepper steps={['Draft', 'Review', 'Approved']} activeStep={1} />
        </PreviewCard>

        <PreviewCard title="CustomTable">
          <CustomTable
            headers={[{ label: 'Name' }, { label: 'Status' }]}
            rows={[
              { id: 1, cells: ['Agreement A', 'Active'] },
              { id: 2, cells: ['Agreement B', 'Pending'] }
            ]}
          />
        </PreviewCard>

        <PreviewCard title="CustomDataGrid">
          <CustomDataGrid
            title="Products"
            rows={[
              { id: 1, name: 'Fiber 50 Mbps', price: 350000, status: 'active' },
              { id: 2, name: 'Fiber 100 Mbps', price: 450000, status: 'draft' }
            ]}
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'price', label: 'Price' },
              { key: 'status', label: 'Status' }
            ]}
          />
        </PreviewCard>

        <PreviewCard title="CustomToggleButton">
          <CustomToggleButton
            value={toggleValue}
            onChange={setToggleValue}
            options={[
              { value: 'left', label: 'Left' },
              { value: 'center', label: 'Center' },
              { value: 'right', label: 'Right' }
            ]}
          />
        </PreviewCard>

        <PreviewCard title="CustomImageList">
          <CustomImageList
            images={[
              { src: 'https://picsum.photos/400/300?1', title: 'Image 1' },
              { src: 'https://picsum.photos/400/300?2', title: 'Image 2' },
              { src: 'https://picsum.photos/400/300?3', title: 'Image 3' }
            ]}
            cols={3}
          />
        </PreviewCard>

        <PreviewCard title="CustomTransferList">
          <CustomTransferList leftItems={['Prospect', 'Qualified']} rightItems={['Converted']} />
        </PreviewCard>

        <PreviewCard title="CustomTimeline">
          <CustomTimeline
            events={[
              { title: 'Lead created', subtitle: '08:30' },
              { title: 'Quote submitted', subtitle: '10:15' }
            ]}
          />
        </PreviewCard>

        <PreviewCard title="CustomBreadcrumbs">
          <CustomBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Catalog', href: '/catalog' }, { label: 'Detail' }]} />
        </PreviewCard>

        <PreviewCard title="CustomAccordion">
          <CustomAccordion title="What is MCS?" content={<Typography variant="body2">A micro-frontend platform.</Typography>} />
        </PreviewCard>

        <PreviewCard title="CustomBottomNavigation">
          <CustomBottomNavigation
            value={0}
            items={[
              { label: 'Home', value: 0, icon: <HomeIcon /> },
              { label: 'Search', value: 1, icon: <SearchIcon /> },
              { label: 'Likes', value: 2, icon: <FavoriteIcon /> }
            ]}
          />
        </PreviewCard>

        <PreviewCard title="CustomKanban">
          <CustomKanban
            columns={[
              { key: 'todo', label: 'Todo' },
              { key: 'progress', label: 'In Progress' },
              { key: 'done', label: 'Done' }
            ]}
            items={kanbanItems}
            onItemMove={(itemId, fromColumn, toColumn) => {
              setKanbanItems((prev) => prev.map((item) => item.id === itemId && item.columnKey === fromColumn ? { ...item, columnKey: toColumn } : item));
            }}
          />
        </PreviewCard>

        <PreviewCard title="PillTabs">
          <PillTabs
            tabs={[
              { label: 'Overview', icon: '📌', content: <Typography variant="body2">Overview tab content</Typography> },
              { label: 'Details', icon: '📄', content: <Typography variant="body2">Details tab content</Typography> }
            ]}
            value={pillTabValue}
            onChange={setPillTabValue}
          />
        </PreviewCard>
      </Box>

      <Box sx={{ mt: 3 }}>
        <PreviewCard title="CustomAppBar + Utility Icons">
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <ImageIcon color="action" />
            <InfoIcon color="action" />
            <Typography variant="body2" color="text.secondary">Additional icon assets used by several components.</Typography>
          </Box>
        </PreviewCard>
      </Box>
    </Box>
  );
};
