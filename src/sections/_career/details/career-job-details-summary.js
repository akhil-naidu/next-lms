import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ContactMap from 'src/components/map';
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';

// ----------------------------------------------------------------------

export default function CareerJobDetailsSummary({ job }) {
  const { skills, benefits, locationMap, content } = job;

  return (
    <Stack spacing={5}>
      <Markdown content={content} />

      <Stack spacing={3}>
        <Typography variant="h5">Job Skills</Typography>

        <Stack direction="row" flexWrap="wrap" spacing={1}>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} size="small" variant="soft" onClick={() => {}} />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <Typography variant="h5">Other Benefits</Typography>

        <Box className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((benefit) => (
            <Stack key={benefit} direction="row" alignItems="center" typography="body2">
              <Iconify
                className="mr-3"
                icon={
                  (benefit === 'Free parking' && 'carbon:car-front') ||
                  (benefit === 'Bonus commission' && 'carbon:money') ||
                  (benefit === 'Travel' && 'carbon:airport-01') ||
                  (benefit === 'Training' && 'carbon:group-presentation') ||
                  (benefit === 'Device support' && 'carbon:devices') ||
                  (benefit === 'Health care' && 'carbon:person-favorite') ||
                  'carbon:direct-link'
                }
                width={24}
                color="primary.main"
              />
              {benefit}
            </Stack>
          ))}
        </Box>
      </Stack>

      <Stack spacing={3}>
        <Typography variant="h5">Location</Typography>

        <ContactMap offices={locationMap} className="rounded-xl" />
      </Stack>
    </Stack>
  );
}

CareerJobDetailsSummary.propTypes = {
  job: PropTypes.shape({
    benefits: PropTypes.array,
    content: PropTypes.string,
    locationMap: PropTypes.array,
    skills: PropTypes.array,
  }),
};
