import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function CareerLandingForRecruiters() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      className=""
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        py: 10,
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid className="text-center md:text-left " xs={12} md={6} lg={5} color="common.white">
            <div className="mb-4 block">
              <Typography variant="overline" color="primary.main">
                FOR RECRUITERS
              </Typography>
            </div>

            <Typography variant="h2">Do You Have A Position To Post Job? </Typography>
            <div className="opacity-1.5 mb-10 mt-6">
              <p>
                {' '}
                Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis
                ullamcorper velit.
              </p>
            </div>

            <Button
              variant="contained"
              size="large"
              color="primary"
              startIcon={<Iconify icon="carbon:document" />}
            >
              Post a Job
            </Button>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={5}>
              <Image alt="recruitment" src="/assets/illustrations/illustration_recruitment.svg" />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
