import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import CountUp from 'src/components/count-up';
import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Jobs', number: 2230000 },
  { name: 'Successful Hiring', number: 500000 },
  { name: 'Partners', number: 250 },
  { name: 'Employee', number: 1560 },
];

// ----------------------------------------------------------------------

const StyledSection = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(10),
  },
}));

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
  [theme.breakpoints.up('md')]: {
    right: 0,
    width: '75%',
    left: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

// ----------------------------------------------------------------------

export default function CareerAbout() {
  return (
    <Container className="pb-10 pt-10 md:pb-20">
      <Typography
        color="primary.main"
        className="text-center md:text-left"
        paragraph
        variant="overline"
      >
        About us
      </Typography>

      <Grid
        className="text-center md:text-left"
        container
        spacing={3}
        justifyContent="space-between"
      >
        <Grid xs={12} md={6} lg={5}>
          <Typography variant="h2">We Make The Best For All Our Customers.</Typography>
        </Grid>

        <Grid xs={12} md={6} lg={6} color="text.secondary">
          <Stack spacing={{ xs: 3, md: 10 }} direction={{ xs: 'column', md: 'row' }}>
            <Typography>
              Curabitur ullamcorper ultricies nisi. Sed mollis, eros et ultrices tempus, mauris
              ipsum aliquam libero, non adipiscing dolor urna a orci.
            </Typography>

            <Typography>
              Donec vitae sapien ut libero venenatis faucibus. Vestibulum fringilla pede sit amet
              augue. Vivamus euismod mauris.
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Section />
    </Container>
  );
}

// ----------------------------------------------------------------------

function Section() {
  return (
    <StyledSection>
      <Stack className='py-20 z-20 ml-auto relative px-5 md:px-20  md:w-2/3 lg:w-1/2 '

      >
        <Stack className="mb-10 text-center text-white md:text-left">
          <Typography variant="h2" paragraph>
            Our Agency Has Been
          </Typography>
          <Typography className="opacity-100">
            Hello. Our agency has been present for over 20 years. We make the best for all our
            customers.
          </Typography>
        </Stack>

        <Box className="grid grid-cols-2 gap-5 text-center md:text-left">
          {SUMMARY.map((value) => (
            <Stack key={value.name} spacing={1}>
              <Typography variant="h2" color="primary.main">
                <CountUp
                  start={value.number / 5}
                  end={value.number}
                  formattingFn={(newValue) => fShortenNumber(newValue)}
                />

                <Typography variant="h3" component="span" className="ml-1 align-top">
                  +
                </Typography>
              </Typography>

              <Typography variant="body2" color="gray.500">
                {value.name}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Stack>

      <StyledOverlay />

      <Box
        className="h-full absolute top-0 w-full"
      >
        <Image
          alt="career about"
          src="/assets/images/career/career_about_team.jpg"
          className="h-full w-full"
        />
      </Box>
    </StyledSection>
  );
}
