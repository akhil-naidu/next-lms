import { m } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Fab from '@mui/material/Fab';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AvatarGroup from '@mui/material/AvatarGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { _mock } from 'src/_mock';
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const FASHION_CATEGORY = [
  { value: 'clothes', label: 'Clothes' },
  { value: 'footwear', label: 'Footwear' },
  { value: 'jean', label: 'Jean' },
];

// ----------------------------------------------------------------------

export default function HomeFlexibleComponents() {
  const [tab, setTab] = useState('angular');

  const [progress, setProgress] = useState(0);

  const [alignment, setAlignment] = useState('left');

  const [category, setCategory] = useState('clothes');

  const [rating, setRating] = useState(5);

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

  const handleChangeAlignment = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }, []);

  const handleChangeCategory = useCallback((event) => {
    setCategory(event.target.value);
  }, []);

  return (
    <Container className="overflow-hidden py-10 md:py-20">
      <Grid container spacing={{ xs: 6, md: 3 }} justifyContent={{ md: 'space-between' }}>
        <Grid xs={12} md={4}>
          <MotionViewport className="text-center md:pt-20 md:text-left">
            <m.div variants={varFade().inUp}>
              <Typography variant="overline" color="text.disabled">
                Interface Starter Kit
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <div className="my-6">
                <h2 className="text-5xl font-bold">Flexible Components</h2>
              </div>
            </m.div>

            <m.div variants={varFade().inUp}>
              <div className="mb-10">
                <Typography color="text.secondary">
                  Pre-set components are easy to customize and use. We collected most popular
                  elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!
                </Typography>
              </div>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Button
                component={RouterLink}
                href={paths.components.root}
                color="inherit"
                size="large"
                variant="outlined"
                endIcon={<Iconify icon="carbon:chevron-right" width={16} />}
              >
                Browse Components
              </Button>
            </m.div>
          </MotionViewport>
        </Grid>

        <Grid xs={12} md={7}>
          <Stack
            className="rounded-3xl border-[1px] border-dashed border-gray-700 p-6 sm:p-10 "
            spacing={5}
            alignItems="center"
          >
            <Stack
              className="w-full"
              flexWrap="wrap"
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 3, md: 5 }}
            >
              <Button
                size="large"
                variant="contained"
                color="primary"
                startIcon={<Iconify icon="carbon:add" />}
              >
                Add to cart
              </Button>

              <Fab variant="extended" color="inherit" aria-label="upload">
                <Iconify icon="carbon:cloud-upload" width={24} />
                Upload
              </Fab>

              <Fab color="info" aria-label="media">
                <Iconify icon="carbon:media-library" />
              </Fab>

              <CircularProgress
                color="warning"
                variant="determinate"
                aria-label="Progress"
                value={progress}
              />
            </Stack>

            <Stack
              className="w-full"
              flexWrap="wrap"
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 3, md: 5 }}
            >
              <Tabs value={tab} onChange={handleChangeTab}>
                <Tab value="angular" label="Angular" />
                <Tab value="react" label="React" />
                <Tab value="vue" label="Vue" />
              </Tabs>

              <ToggleButtonGroup
                exclusive
                color="primary"
                value={alignment}
                onChange={handleChangeAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="left" aria-label="alignment left">
                  <Iconify icon="carbon:align-horizontal-left" />
                </ToggleButton>

                <ToggleButton value="center" aria-label="alignment center">
                  <Iconify icon="carbon:align-horizontal-center" />
                </ToggleButton>

                <ToggleButton value="right" aria-label="alignment right">
                  <Iconify icon="carbon:align-horizontal-right" />
                </ToggleButton>
              </ToggleButtonGroup>

              <Chip
                variant="soft"
                color="primary"
                label="Pamela"
                onDelete={() => {}}
                avatar={<Avatar alt="Pamela">P</Avatar>}
              />
            </Stack>

            <Stack
              className="w-full"
              flexWrap="wrap"
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 3, md: 5 }}
            >
              <div className="">
                <Avatar
                  alt="Remy Sharp"
                  src={_mock.image.avatar(4)}
                  sx={{ width: 64, height: 64 }}
                />
              </div>

              <AvatarGroup max={4}>
                {[...Array(8)].map((_, index) => (
                  <Avatar key={index} alt={_mock.fullName(index)} src={_mock.image.avatar(index)} />
                ))}
              </AvatarGroup>

              <Tooltip title="Add" placement="top" arrow>
                <Button color="inherit">Hover Me</Button>
              </Tooltip>

              <Rating
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </Stack>

            <Stack
              className="w-full"
              flexWrap="wrap"
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 3, md: 5 }}
            >
              <Slider
                className="max-w-full md:max-w-[260px]"
                size="small"
                defaultValue={72}
                valueLabelDisplay="on"
                aria-label="demo slider"
              />

              <Alert
                severity="success"
                action={
                  <IconButton color="inherit" size="small" aria-label="close" onClick={() => {}}>
                    <Iconify icon="carbon:close" />
                  </IconButton>
                }
              >
                This is a <strong>success</strong> alert
              </Alert>
            </Stack>

            <Stack
              className="w-full"
              flexWrap="wrap"
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={{ xs: 3, md: 5 }}
            >
              <Card className="shadow-lg">
                <DateCalendar value={date} onChange={(newDate) => setDate(newDate)} />
              </Card>

              <Stack spacing={2.5} flexGrow={1}>
                <FormControlLabel control={<Switch defaultChecked />} label="Switch" />

                <FormControlLabel control={<Checkbox />} label="Checkbox" />

                <FormControlLabel
                  value="Radio"
                  control={<Radio defaultChecked />}
                  label="Radio Button"
                />

                <TextField label="full Name" defaultValue="Pamela Mclellan" />

                <TextField
                  select
                  label="Category"
                  value={category}
                  onChange={handleChangeCategory}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {FASHION_CATEGORY.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
