import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { fDate } from 'src/utils/format-time';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export default function CareerJobDetailsCompanySimilar({ jobs }) {
  return (
    <Paper className="rounded-lg p-6" variant="outlined" bgcolor="background.default">
      <div className="mb-2">
        <Typography variant="h5">Jobs From This Company</Typography>
      </div>

      {jobs.map((job) => (
        <Stack
          className="border-divider border-b border-dashed py-4 last:border-b-0"
          key={job.id}
          spacing={0.5}
        >
          <Link component={RouterLink} href={paths.career.job} variant="subtitle1" color="inherit">
            {job.slug}
          </Link>

          <Typography variant="body2" color="text.disabled">
            {fDate(job.deadline)}
          </Typography>
        </Stack>
      ))}
    </Paper>
  );
}

CareerJobDetailsCompanySimilar.propTypes = {
  jobs: PropTypes.array,
};
