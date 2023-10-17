import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';

import MarketingCaseStudyItem from './marketing-case-study-item';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyListSimilar({ caseStudies }) {
  const mdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.marketing.caseStudies}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Container className="md:py-30 py-20">
      <Stack
        className="mb-16 md:mb-20"
        direction="row"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'space-between' }}
      >
        <Typography variant="h3">You Might Like</Typography>

        {mdUp && viewAllBtn}
      </Stack>

      <Box className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {caseStudies.map((project) => (
          <MarketingCaseStudyItem key={project.id} project={project} />
        ))}
      </Box>

      {!mdUp && (
        <Stack alignItems="center" className="mt-16">
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}

MarketingCaseStudyListSimilar.propTypes = {
  caseStudies: PropTypes.array,
};
