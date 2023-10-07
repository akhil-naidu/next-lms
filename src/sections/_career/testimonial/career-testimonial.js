import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import TestimonialItem from './career-testimonial-item';

// ----------------------------------------------------------------------

export default function CareerTestimonial({ testimonials }) {
  const mdUp = useResponsive('up', 'md');

  const carousel = useCarousel({
    dots: !mdUp,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        mt: 8,
      },
    }),
  });

  return (
    <Box className="md:py-30 py-20" bgcolor="Background.neutral">
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={6}>
            <div className="mb-10 text-center">
              <Typography variant="h2">What Our Customer Say</Typography>
            </div>

            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
              {testimonials.map((testimonial) => (
                <TestimonialItem key={testimonial.id} testimonial={testimonial} />
              ))}
            </Carousel>
          </Grid>
        </Grid>

        {mdUp && (
          <CarouselArrows
            className="mt-20 w-full"
            spacing={2}
            justifyContent="center"
            onNext={carousel.onNext}
            onPrev={carousel.onPrev}
          />
        )}
      </Container>
    </Box>
  );
}

CareerTestimonial.propTypes = {
  testimonials: PropTypes.array,
};
