import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';

import CareerJobItem from '../list/career-job-item';

// ----------------------------------------------------------------------

export default function CareerLandingFeaturedJobs({ jobs }) {
  return (
    <Container className="md:pb-30 pb-20 pt-10 md:pt-20">
      <Grid className="md:text-unset text-center" container spacing={{ xs: 2, md: 4 }}>
        <Grid xs={12} md={4}>
          <Typography variant="overline" color="text.disabled">
            Featured Jobs
          </Typography>
        </Grid>

        <Grid xs={12} md={8}>
          <Typography variant="h3">
            Jobs available apply to Editorial Specialist, Account Manager, Human Resources
            Specialist and more!
          </Typography>
        </Grid>
      </Grid>

      <Box className="grid grid-cols-1 gap-x-8 gap-y-8 py-16 sm:grid-cols-2 md:grid-cols-3 md:gap-y-10 md:py-20">
        {jobs.map((job) => (
          <CareerJobItem key={job.id} job={job} />
        ))}
      </Box>

      <Stack alignItems="center">
        <Button
          component={RouterLink}
          href={paths.career.jobs}
          color="inherit"
          size="large"
          variant="outlined"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          View All Jobs
        </Button>
      </Stack>
    </Container>
  );
}

CareerLandingFeaturedJobs.propTypes = {
  jobs: PropTypes.array,
};
