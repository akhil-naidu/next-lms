import { useRef } from 'react';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';
import { varHover, varTranHover } from 'src/components/animate';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function CareerLandingConnections({ countries }) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const containerRef = useRef(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  const carousel = useCarousel({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <Box className="md:py-30 relative overflow-hidden py-16">
      <Container className="md:position-absolute md:left-0 md:right-0 md:mb-0 md:h-[15px]">
        {mdUp && (
          <SvgColor
            src="/assets/illustrations/illustration_map.svg"
            sx={{
              top: -40,
              left: -64,
              width: 780,
              height: 646,
              opacity: 0.64,
              position: 'absolute',
              color: 'text.disabled',
            }}
          />
        )}

        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={4}>
            <Stack
              className="text-center md:pt-16 md:text-left"
              alignItems={{ xs: 'center', md: 'flex-start' }}
            >
              <Typography variant="h2">Global Connections</Typography>

              <div className="mb-10 mt-6">
                <Typography color="text.secondary">
                  Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla neque dolor,
                  sagittis eget, iaculis quis.
                </Typography>
              </div>

              <Button
                component={RouterLink}
                href={paths.career.jobs}
                color="inherit"
                size="large"
                variant="contained"
                endIcon={<Iconify icon="carbon:chevron-right" />}
              >
                View All Jobs
              </Button>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          pl: `${offsetLeft}px`,
          width: { md: `calc(100% + 120px)` },
        }}
      >
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {countries.map((country) => (
            <Box className="ml-[-2px] py-16 pl-4 pr-4 text-white md:pl-0 md:pr-8" key={country.id}>
              <JobByCountryItem key={country.id} country={country} />
            </Box>
          ))}
        </Carousel>

        <CarouselArrows
          className="w-full"
          spacing={2}
          justifyContent="center"
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
        />
      </Box>
    </Box>
  );
}

CareerLandingConnections.propTypes = {
  countries: PropTypes.array,
};

// ----------------------------------------------------------------------

function JobByCountryItem({ country }) {
  const { location, coverUrl, totalJobs } = country;

  return (
    <Link component={RouterLink} href={paths.career.jobs} underline="none">
      <Card
        component={m.div}
        whileHover="hover"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        <Box className="overflow-hidden">
          <m.div variants={varHover(1.1)} transition={varTranHover()}>
            <Image src={coverUrl} alt="cover" ratio="3/4" />
          </m.div>
        </Box>

        <Stack spacing={1} className="p-5 text-center">
          <Typography variant="h6">{location}</Typography>
          <Typography variant="body2" color="text.disabled">
            {totalJobs} Jobs
          </Typography>
        </Stack>
      </Card>
    </Link>
  );
}

JobByCountryItem.propTypes = {
  country: PropTypes.shape({
    coverUrl: PropTypes.string,
    location: PropTypes.string,
    totalJobs: PropTypes.number,
  }),
};
