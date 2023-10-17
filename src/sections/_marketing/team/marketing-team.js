import { useRef } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import { useResponsive } from 'src/hooks/use-responsive';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import MarketingTeamItem from './marketing-team-item';

// ----------------------------------------------------------------------

export default function MarketingTeam({ members }) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const carousel = useCarousel({
    dots: !mdUp,
    slidesToShow: 4,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        mt: 8,
      },
    }),
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

  const containerRef = useRef(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 10, md: 20 },
      }}
    >
      <Container className="relative mb-16 md:absolute md:left-0 md:right-0 md:mb-0 md:h-[calc(100%-320px)]">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={4}>
            <Stack spacing={3} className="text-center md:text-left">
              <Typography variant="overline" className="text-gray-600">
                Team
              </Typography>

              <Typography variant="h2" color="primary.main">
                Meet Our Team
              </Typography>

              <Typography color="common.white">
                Since wire-frame renderings are relatively simple and fast to calculate, they are
                often used in cases
              </Typography>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>

        {mdUp && (
          <CarouselArrows
            className="absolute bottom-0"
            spacing={2}
            onNext={carousel.onNext}
            onPrev={carousel.onPrev}
            leftButtonProps={{
              color: 'primary',
              sx: { color: 'primary.main', opacity: 1 },
            }}
            rightButtonProps={{
              color: 'primary',
              sx: { color: 'primary.main', opacity: 1 },
            }}
          />
        )}
      </Container>

      <Box
        sx={{
          pl: `${offsetLeft}px`,
          width: { md: `calc(100% + 120px)` },
        }}
      >
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {members.map((member) => (
            <Box className="ml-[-1px] pl-4 pr-4 text-white md:pl-8 md:pr-0" key={member.id}>
              <MarketingTeamItem member={member} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}

MarketingTeam.propTypes = {
  members: PropTypes.array,
};
